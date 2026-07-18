# Wgrywa send.php + data/.htaccess na hosting home.pl przez FTPS.
# Uruchom sam (hasło wpisujesz lokalnie, nigdzie nie jest zapisywane):
#   powershell -ExecutionPolicy Bypass -File server\deploy.ps1
# Parametry możesz nadpisać, np.:
#   ... -File server\deploy.ps1 -FtpHost serwerXXXXXXX.home.pl -RemoteDir /api_odbiorkaucji

param(
    [string]$FtpHost = "serwer2626989.hosting-home.pl",
    [string]$RemoteDir = "/api_odbiorkaucji",
    [string]$User = "kaucjaformularz@odbiorkaucji.pl"
)

$ErrorActionPreference = "Stop"

if (-not $User) { $User = Read-Host "Login FTP (np. konto@odbiorkaucji.pl)" }
$pass = Read-Host "Hasło FTP" -AsSecureString
$cred = New-Object System.Net.NetworkCredential($User, $pass)

# Certyfikat home.pl bywa wystawiony na *.home.pl — akceptujemy dla tego hosta.
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = { $true }

function Invoke-Ftp([string]$method, [string]$remotePath, [string]$localFile) {
    $req = [System.Net.FtpWebRequest]::Create("ftp://$FtpHost$remotePath")
    $req.Credentials = $cred
    $req.EnableSsl = $true
    $req.UsePassive = $true
    $req.Method = $method
    if ($localFile) {
        $bytes = [System.IO.File]::ReadAllBytes($localFile)
        $req.ContentLength = $bytes.Length
        $stream = $req.GetRequestStream()
        $stream.Write($bytes, 0, $bytes.Length)
        $stream.Close()
    }
    try {
        $res = $req.GetResponse()
        $res.Close()
        return $true
    } catch {
        if ($method -eq [System.Net.WebRequestMethods+Ftp]::MakeDirectory) { return $false } # katalog już istnieje
        throw
    }
}

$here = Split-Path -Parent $MyInvocation.MyCommand.Path

# Najpierw sam test logowania — czytelny błąd zamiast cichej porażki później.
Write-Host "Testuję logowanie jako $User..."
try {
    $req = [System.Net.FtpWebRequest]::Create("ftp://$FtpHost/")
    $req.Credentials = $cred
    $req.EnableSsl = $true
    $req.UsePassive = $true
    $req.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
    $req.GetResponse().Close()
} catch {
    Write-Host ""
    Write-Host "LOGOWANIE ODRZUCONE (530)." -ForegroundColor Red
    Write-Host "Spróbuj innego formatu loginu:"
    Write-Host "  -User kaucjaformularz@$FtpHost"
    Write-Host "  -User serwer2626989          (główne konto FTP, hasło główne)"
    Write-Host "Login 'kaucjaformularz@odbiorkaucji.pl' zadziała dopiero, gdy domena"
    Write-Host "odbiorkaucji.pl będzie dodana do tego serwera w panelu home.pl."
    exit 1
}
Write-Host "Zalogowano OK."

Write-Host "Tworzę katalogi..."
Invoke-Ftp ([System.Net.WebRequestMethods+Ftp]::MakeDirectory) $RemoteDir $null | Out-Null
Invoke-Ftp ([System.Net.WebRequestMethods+Ftp]::MakeDirectory) "$RemoteDir/data" $null | Out-Null

Write-Host "Wgrywam send.php..."
Invoke-Ftp ([System.Net.WebRequestMethods+Ftp]::UploadFile) "$RemoteDir/send.php" (Join-Path $here "send.php") | Out-Null

Write-Host "Wgrywam data/.htaccess..."
Invoke-Ftp ([System.Net.WebRequestMethods+Ftp]::UploadFile) "$RemoteDir/data/.htaccess" (Join-Path $here "data\.htaccess") | Out-Null

Write-Host ""
Write-Host "GOTOWE. Zostało w panelu home.pl:" -ForegroundColor Green
Write-Host " 1. Subdomena api.odbiorkaucji.pl -> katalog $RemoteDir"
Write-Host " 2. SSL (Let's Encrypt) dla subdomeny"
Write-Host "Potem test: wyślij zgłoszenie ze strony i sprawdź outlooka (+ SPAM)."
