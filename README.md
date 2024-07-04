### Criei um projeto chamado ‘Page Reload’ utilizando várias tecnologias, incluindo bcryptjs, connect-flash, cookie-parser, cookie-session, express, express-flash, express-handlebars, express-session, mysql2, nodemon e sequelize. Embora o projeto pareça simples quando visualizado em vídeo, ele possui recursos complexos, como criptografia de senhas, autenticação de usuários com login e logout, e bloqueio de rotas não autenticadas.

<p>O banco de dados MySQL possui um relacionamento entre as tabelas ‘thoughts’ (pensamentos) e ‘users’ (usuários), onde um usuário pode ter vários pensamentos e cada pensamento está associado a apenas um usuário. O Sequelize é responsável por gerenciar as datas e horários de cadastro e atualização dos pensamentos.</p>

<p>As regras de negócio do projeto são bem estruturadas, incluindo validação de senhas e confirmação de senhas, verificação de e-mails já cadastrados no banco de dados e criptografia segura das senhas usando o bcryptjs.</p>

<p>O projeto é fullstack, e no front-end utilizei HTML e CSS puros, além de ícones do Bootstrap para os botões de ordenação na página inicial.</p>
