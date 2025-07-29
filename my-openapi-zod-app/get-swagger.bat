curl --insecure https://localhost:7443/swagger/all/swagger.json --output greenonion-swagger.json
@REM npx openapi-zod-client ^
@REM     ./greenonion-swagger.json ^
@REM     --output ./src/api/GreenOnion ^
@REM     --with-docs ^
@REM     --client ^
@REM     --split ^
@REM     --implicit-required=false ^
@REM     --export-schemas
    

REM   npx openapi-zod-client ^
REM   ./greenonion-swagger.json ^
REM   --output ./src/api/GreenOnionClient.ts ^
REM   --with-docs

    REM --with-description 
    REM --with-deprecated 
    REM --media-type-expr application/json


REM npx openapi-zod-client generate --input https://localhost:7443/swagger/all/swagger.json --output src/api --no-validate
