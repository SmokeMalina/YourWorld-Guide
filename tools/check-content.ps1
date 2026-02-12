param(
  [string]$Root = (Get-Location).Path
)

$ErrorActionPreference = "Stop"

function Resolve-AssetPath {
  param(
    [string]$Ref,
    [string]$FileDir,
    [string]$RepoRoot
  )

  if ([string]::IsNullOrWhiteSpace($Ref)) { return $null }

  if ($Ref -match "^(https?:)?//") { return $null } # external
  if ($Ref.StartsWith("data:")) { return $null }

  if ($Ref.StartsWith("/")) {
    return Join-Path $RepoRoot ($Ref.TrimStart("/"))
  }

  return Join-Path $FileDir $Ref
}

$htmlFiles = Get-ChildItem -Path $Root -Recurse -Filter *.html
$jsFiles = Get-ChildItem -Path $Root -Recurse -Filter *.js

$missingAlt = New-Object System.Collections.Generic.List[string]
$missingFiles = New-Object System.Collections.Generic.List[string]

foreach ($file in $htmlFiles) {
  $text = Get-Content -LiteralPath $file.FullName -Raw

  # missing or empty alt
  $imgTags = [regex]::Matches($text, "<img\\b[^>]*>", "IgnoreCase")
  foreach ($m in $imgTags) {
    $tag = $m.Value
    if ($tag -notmatch "\\salt=") {
      $missingAlt.Add($file.FullName)
      break
    }
    if ($tag -match "\\salt=\"\\s*\"") {
      $missingAlt.Add($file.FullName)
      break
    }
  }

  # assets in html (src/href/content for og:image)
  $attrMatches = [regex]::Matches($text, "\\b(?:src|href|content)=\"([^\"]+)\"", "IgnoreCase")
  foreach ($a in $attrMatches) {
    $ref = $a.Groups[1].Value
    if ($ref -notmatch "images/") { continue }
    $resolved = Resolve-AssetPath -Ref $ref -FileDir $file.Directory.FullName -RepoRoot $Root
    if ($null -ne $resolved -and -not (Test-Path -LiteralPath $resolved)) {
      $missingFiles.Add("$($file.FullName) -> $ref")
    }
  }
}

foreach ($file in $jsFiles) {
  $text = Get-Content -LiteralPath $file.FullName -Raw
  $pathMatches = [regex]::Matches($text, "\"([^\"]*images/[^\"]+)\"", "IgnoreCase")
  foreach ($m in $pathMatches) {
    $ref = $m.Groups[1].Value
    $resolved = Resolve-AssetPath -Ref $ref -FileDir $file.Directory.FullName -RepoRoot $Root
    if ($null -ne $resolved -and -not (Test-Path -LiteralPath $resolved)) {
      $missingFiles.Add("$($file.FullName) -> $ref")
    }
  }
}

$hasErrors = $false

if ($missingAlt.Count -gt 0) {
  $hasErrors = $true
  Write-Host "Missing/empty alt in:" -ForegroundColor Yellow
  $missingAlt | Sort-Object -Unique | ForEach-Object { Write-Host "  $_" }
}

if ($missingFiles.Count -gt 0) {
  $hasErrors = $true
  Write-Host "Missing image files:" -ForegroundColor Yellow
  $missingFiles | Sort-Object -Unique | ForEach-Object { Write-Host "  $_" }
}

if ($hasErrors) {
  exit 1
}

Write-Host "OK: no missing alts or image files."
