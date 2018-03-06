# spa-product
Projeto simples para teste das tecnologias:
Angular 5, .net core 2.0 , MongoDB

Pré-requistos:
 - Instalar o MongoDB
 - Instalar o npm
 - Instalar vscode (ou outro editor de texto)
 - Instalar .net core 2.0

Configuração Mongo na API:

    - A string de conexão está contida em uma constante na classe 'Context' na pasta 'MongoDB'

Após estas instalações rode a api e o app do angular:

 - na pasta api rode os comandos:
    * dotnet restore
    * dotnet build
    * dotnet run

- na pasta spa/src rode os comandos:
    * npm install
    * ng server --open

Após acessar a spa o login configurado é 
    usuário: test
    senha: test