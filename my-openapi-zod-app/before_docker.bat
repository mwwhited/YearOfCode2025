@ECHO OFF
SET "filename=%~n1"
SET filename=%filename:"=%

IF /I "%filename%"=="devbox" (
SET WEB_PORT=5174
) ELSE (
SET EXTRA_DOCKER_COMMANDS=%EXTRA_DOCKER_COMMANDS% --publish 5174:5173
)
