@echo off
echo Iniciando servidor local en http://localhost:8080
echo.
echo IMPORTANTE: Despues de iniciar el servidor:
echo 1. Ve a Google Cloud Console
echo 2. Edita tu Client ID
echo 3. Anade "http://localhost:8080" en "Origenes de JavaScript autorizados"
echo 4. Guarda los cambios
echo 5. Abre: http://localhost:8080
echo.
echo Presiona Ctrl+C para detener el servidor
echo.
powershell -Command "$listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:8080/'); $listener.Start(); Write-Host 'Servidor iniciado en http://localhost:8080'; while ($listener.IsListening) { $context = $listener.GetContext(); $request = $context.Request; $response = $context.Response; $path = $request.Url.LocalPath; if ($path -eq '/') { $path = '/index.html' }; $filePath = Join-Path $PWD $path.TrimStart('/'); if (Test-Path $filePath) { $content = [System.IO.File]::ReadAllBytes($filePath); $response.ContentType = if ($filePath -match '\.html$') { 'text/html' } elseif ($filePath -match '\.css$') { 'text/css' } elseif ($filePath -match '\.js$') { 'text/javascript' } else { 'application/octet-stream' }; $response.ContentLength64 = $content.Length; $response.OutputStream.Write($content, 0, $content.Length); $response.OutputStream.Close() } else { $response.StatusCode = 404; $response.Close() } }"
