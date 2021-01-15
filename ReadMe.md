
# EXEMPLO DE APLICAÇÃO COM ASP CORE E REACT:

## TECNOLOGIAS UTILIZADAS:
Abordagem DDD

API REST

ASP Core com Entity Framework

React com Axios

Node JS

Yarn

Typescript

CSS

Visual Studio 2019

Visual Studio Code


**INSTRUÇÕES:**

1) Conforme orientação, nestre projeto foi utilizado o banco de dados local (LocalDB) na pasta /prj_teste/LocalDB caso necessário, atualizar o endereço do DB no campo "DevConection", na propriedade 'AttachDbFilename' no arquivo appsettings.json (/prj_teste/ASP_Core/RESTAPIDDD/RestDDD.API/appsettings.json)

OU, pode-se executar a migrations (no project: Infraestructure\RestDDD.Infraestructure), para evitar erros, remova a propriedade 'AttachDbFilename', do campo "DevConection" no arquivo appsettings.json (/prj_teste/ASP_Core/RESTAPIDDD/RestDDD.API/appsettings.json)

COMANDOS PARA EXECUÇÃO DAS MIGRATIONS:
com o console do gerenciador de pacotes:
>update-database

com outros consoles (git-bash, Power Shell, Shell, CMD entre outros):
>dotnet ef database update

2) Caso a API rode em porta diferente, alterar o arquivo api.ts (D:\Projetos\prj_teste\web\src\services\api.ts) com o endereço correto
