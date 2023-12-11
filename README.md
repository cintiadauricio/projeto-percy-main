# projeto-pague-menos
Automação de Testes visuais com Cypress e Percy

1- Primeiros passos: Setup inicial do projeto

-Clonar ou criar  projeto a partir do GitHub
 -Inicializar um projeto Node.js
 -Instalar o Cypress e o Percy
-Inicializar o Cypress e explorar sua estrutura de arquivos e diretórios
-Configurar o Percy para trabalhar em conjunto com o Cypress

2- Crie um projeto Percy
<https://percy.io/>

-Defina o token do projeto  set PERCY_TOKEN="<your token here>"
-Instale dependências do Percy npm install --save-dev @percy/cli @percy/cypress
-Atualize seu script de teste import '@percy/cypress';


3- Os argumentos do método snapshot são:
cy.percySnapshot();
cy.percySnapshot('Homepage test');
cy.percySnapshot('Homepage responsive test', { widths: [768, 992, 1200] });

4- Execute Percy percy exec -- cypress run ou npm run test



5- Doc de apoio
https://www.browserstack.com/docs/percy/integrate/cypress
(https://docs.percy.io/docs/cypress)



6- Sugestão de cursos

https://talkingabouttesting.coursify.me/student/courses/testes-automatizados-com-cypress-e-percy-basico/sections/99077/contents/289469

