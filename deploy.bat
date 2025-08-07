@echo off
echo Building project...
call npm run build

echo.
echo Build completato! 
echo.
echo Per deployare su GitHub Pages:
echo 1. Vai su GitHub.com e accedi al repository AUVerona/Azionesito2
echo 2. Vai in Settings > Pages
echo 3. Assicurati che Source sia impostato su "Deploy from a branch"
echo 4. Seleziona branch "main" e folder "/root" o "/docs"
echo 5. Oppure carica manualmente i file dalla cartella "dist"
echo.
echo I file di build sono nella cartella: dist/
echo.
pause
