@echo off
title Hunt Showdown Cheats — Dev Server
cd /d "%~dp0"

echo.
echo ========================================
echo   Hunt Showdown Cheats Site
echo ========================================
echo.
echo Starting dev server...
echo When ready, open:  http://localhost:8080
echo.
echo (Do NOT use localhost:3000 — it may be busy)
echo Press Ctrl+C in this window to stop the server.
echo.

start "" "http://localhost:8080"
npm run dev
