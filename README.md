## DEMO
https://marcelopost.github.io/ui-frontend-developer

## INSTRUÇÕES DE INSTALAÇÃO

* 1 - Instalar os seguintes modulos: gulp, gulp-sass, gulp-uglify, gulp-image, gulp-rename, gulp-cssnano
* 2 - Rodar o arquivo: gulpfile.js via terminal

## MÓDULOS

Utilizei os seguintes módulos instalando via npm:

* Gulp: automatização
* Gulp-sass: compilação do Saas
* Gulp-uglify: compressão do js
* Gulp-image: para comprimir as imagens
* Gulp-rename: renomeia os arquivos para app.min.
* Gulp-cssnano: compressão do arquivo css

## RESUMO DO PROJETO

Há algum tempo venho estudando o CSS Grid, porém não havia utilizado ainda. Estou tentando utiliza-lo no dia-a-dia, mas não são todas as empresas que estão dispostas a embarcar nessa e largar o Bootsrap. Caso vocês utilizam aí, fico feliz em saber que não são dependentes do Bootsrap.

Utilizei o Gulp e configurei para que o movesse os arquivos compilados (scss), js e imagens comprimidas, da pasta SRC para a DIST, assim basta publicar apenas a pasta DIST no FTP.

Criei arquivos de "_variaveis", como o de cores. Como é um exemplo, também poderia ter os arquivos de fontes, medias, mixins etc. Também separei o arquivo de mobile.

Optei por programar para responsivo, porém na versão mobile a busca e o carrinho estão só como exemplo.

As imagens sempre utilizo .SVG quando possível, aqui como não tinha os arquivos utilizei .PNG. Ou outra solução seria utilizar fonte de ícones. Sempre dou prefência para .SVG e fonte de ícones.

Utlizei o BEM e no botão do carrinho utilizei uma classe padrão e um modificador da mesma, assim temos uma classe padrão e uma "variação" apenas de cores, assim mantemos o padrão de botões por exemplo. Neste caso também caberia um mixin.

Utilizei o padrão CamelCase para nomear as classes.

## DIFICULDADES

Ainda tenho dificuldades em programar do zero em javaScript, durante muito tempo fui dependente do jQuery, com isso acebei não buscando o apendizado mais profundo do JS, entendo, porém ainda não programo do zero. Mas já estou resolvendo isso, estou estudando com cursos online e meetups.

Notem que o mega menu e o carrinho de compra são puros CSS, poderiam ser em JS, seria menos sofrível e atual. 

Outra questão é que o menu principal ficou separados em div's. Com certeza trabalhando em equipe alinharia isso antes com o back-end para encontrar a melhor solução, pensando em um site dinâmico em PHP por exemplo.

## GRATIDÃO
Agradeço pela oportunidade de participar do processo seletivo. Quero muito estar no time da empresa, com esse teste, pude perceber o alto nível de tecnologia que vocês utilizam, o que faz-me querer ainda mais compartilhar conhecimento com todos vocês.
