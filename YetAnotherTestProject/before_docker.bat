@ECHO OFF
SET "filename=%~n1"
SET filename=%filename:"=%

SET WEB_PORT=5175
IF /I "%filename%"=="devbox" (
ECHO ... booting server ;^)
) ELSE (
SET EXTRA_DOCKER_COMMANDS=%EXTRA_DOCKER_COMMANDS% --publish %WEB_PORT%:5173
)
