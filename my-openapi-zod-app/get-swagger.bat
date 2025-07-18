curl --insecure https://localhost:7443/swagger/all/swagger.json --output greenonion-swagger.json
npx openapi-zod-client ^
    ./greenonion-swagger.json ^
    --output ./src/api/GreenOnionClient ^
    --with-docs ^
    --client ^
    --split
    

REM   npx openapi-zod-client ^
REM   ./greenonion-swagger.json ^
REM   --output ./src/api/GreenOnionClient.ts ^
REM   --with-docs

    REM --with-description 
    REM --with-deprecated 
    REM --media-type-expr application/json


REM npx openapi-zod-client generate --input https://localhost:7443/swagger/all/swagger.json --output src/api --no-validate

