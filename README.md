<h1 align="center">
    Rocketseat Courses Version 2
</h1>

<h4 align="center"> 
	🚀 Desafio 2 - Rocketseat Courses V2 🚀
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/paulobeckman/rocketseat-courses-v2?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/paulobeckman/rocketseat-courses-v2">

  	
  <a href="https://www.linkedin.com/in/paulobeckman/">
    <img alt="Made by paulobeckman" src="https://img.shields.io/badge/made%20by-paulobeckman-%2304D361">
  </a>
	
  
  <a href="https://github.com/paulobeckman/rocketseat-courses/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/paulobeckman/rocketseat-courses-v2">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/paulobeckman/rocketseat-courses-v2/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/paulobeckman/rocketseat-courses-v2?style=social">
  </a>
</p>


## 💻 Sobre o projeto
 
🚀 Rocketseat Courses version 2 apresenta as informações de todos os cursos da [Rocketseat](rs), além de poder redirecionar para todas as redes sociais, comunidade e pagina oficial da instituição. 
Esse projeto apresenta mudanças em relação ao projeto anterior [Rocketseat Courses](v1):
- na aba cursos, nela não é aberta uma janela, agora o usuário é direcionado para uma pagina especícifica onde tem detalhes do curso;
- a pagina apresenta erro 404 caso o endereço passado na url não exista no site.

O usuário poderá ser redirecionado para:
- mandar email à instituição;
- fazer ligação à instituição;
- comunidade aberta no discord;
- acessar o GitHub, instagram e facebook da instituição.

Os usuários poderão ter acesso as informações dos três cursos na pagina conteúdos:
- nessa página é apresentado três cards, cada card contendo uma logo do curso, uma pequena descrição sobre o curso, quatidades de módulos e se o curso é pago ou gratuito.;
- ao clicar em cada card o usuário é redirecionado para uma pagina contendo detalhes sobre o curso clicado, caso o usuário deseja mais informaões sobre o curso ele pode clicar em "saiba mais" e assim ele será redirecioado para a pagina oficial do curso.


Projeto desenvolvido como desafio no curso **LaunchBase** oferecida pela [Rocketseat](rs).
"O [LaunchBase](lb) é um treinamento no formato de bootcamp online que tem duração de 8 semanas. A cada semana os conteúdos são liberados de acordo com um cronograma, guiando o aluno pelas ferramentas e conceitos mais modernos de desenvolvimento que permitirão construir as melhores aplicações e ter acesso às melhores oportunidades como programador." - Rocketseat


### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
	
 <img alt="rocketseat-courses-v2" title="#rocketseat-courses-v2" src="./github-assets/projeto4.gif" width="800px">

  <img alt="rocketseat-courses-v2" title="#rocketseat-courses-v2" src="./github-assets/paginas1.png" width="400px">

  <img alt="rocketseat-courses-v2" title="#rocketseat-courses-v2" src="./github-assets/paginas2.png" width="400px">
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [Java Script][js]
- [CSS][CSS]
- [HTML][HTML]


## 🚀 Como rodar este projeto

Podemos considerar este projeto como sendo divido em duas partes:
1. Back End (arquivos server.js, data.js e pasta public) 
2. Front End (pasta views)

💡O Front End presisa que o Back End esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🧭 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/paulobeckman/rocketseat-courses-v2.git

# Acesse a pasta do projeto no terminal/cmd
$ cd rocketseat-courses-v2

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:5000 - acesse http://localhost:5000
```


## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA](license) para saber mais.

Feito por Paulo Beckman 👋🏽 [Entre em contato!](https://www.linkedin.com/in/paulobeckman/)

[nodejs]: https://nodejs.org/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[rs]: https://rocketseat.com.br
[lb]: https://pages.rocketseat.com.br/launchbase/inscricao/5
[js]: https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript
[CSS]: https://developer.mozilla.org/pt-BR/docs/Web/CSS
[HTML]: https://developer.mozilla.org/pt-BR/docs/Web/HTML
[v1]: https://github.com/paulobeckman/rocketseat-courses
