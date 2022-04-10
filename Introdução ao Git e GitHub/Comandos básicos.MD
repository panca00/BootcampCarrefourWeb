# Aqui temos alguns comandos da git e de prompt que ajudam na utilização do Git/Github.

## Comandos do prompt

### ls -> lista arquivos.
ls tem uma variação "-a" para mostrar arquivos ocultos.

### clear -> limpar a tela.

### cd -> viajar entre as pastas.
variação "..",volta a pasta anterior.

### mkdir -> criando uma pasta(Diretório)

### mv -> movendo arquivos para pastas
ex: "$ mv strong.md ./receitas", movendo o arquivo MD para a pasta receitas no mesmo reposotório

### echo > -> criando uma pasta ou arquivo

## Comandos Git

### git add -> adiciona uma alteração para o repositório local.
variação ".", adicionar todas que foram encontradas.
variação "*", adicionar todas as pastas encontradas

### git status -> mostra o status das modificações feitas e estados dos arquivos.

### git clone -> clona um repositório direto do github para uma pasta local.(Ideal para iniciar remoto e vim para o local)

### git commit -m "" -> realiza o commit das alterações para ficarem prontas para subir para o remoto.

### git push -> Encaminha o upload das alterações para o GitHub.

### git pull -> Encaminha o dowloand das alterações para o local.

### git init -> Inicia o repositório git numa pasta especifica local(Caso inicie o projeto local para remoto)

### git config --global user.email "" ->configuração do email, preferencialmente do GitHub para idenficação durante o upload.
variação com "user.name" para configurar o nome de usário.

### git config --list -> lista as configurações atuais do repositório e seu perfil

### git config --global --unset user.email -> Excluindo o email cadastrado.
variação com "user.name" para retirar o nome de usário.

### git remote add origin "link" -> linkando um repositório local ao repositório GitHub.

### git remote -v -> Visualizar o link cadastrado.

### git push origin master -> variação do push com inicio no repositório local.

### git pull origin master -> variação do pull com inicio no repositório local.