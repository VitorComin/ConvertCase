# ConvertCase
Utilizando HTML5, CSS3 e JavaScript, fiz uma aplicação Web que converte seu texto para maiúsculo ou minúsculo.

![image](https://github.com/VitorComin/ConvertCase/assets/106283734/414c4416-1324-49b4-bf6d-fb7a7faec4aa)

## Interface

Construi um modelo onde temos um Header preto, que cobre 100% da largura da tela, com uma div que contém o titulo em branco. 

A fonte foi importada do Google Fonts.

A imagem de fundo foi adquirida no Pexels, site de imagens gratuitas.

O Footer contém meu nome e botões que ao clicar levam para meu GitHub e meu LinkedIn. Os icones foram importados gratuitamente do Font Awesome.

![image](https://github.com/VitorComin/ConvertCase/assets/106283734/af5302af-00ab-41fc-9f9d-708c2b60af33)

## Aplicação

A aplicação consiste em funcionalidades que te permitem transformar o texto escrito no primeiro campo de texto em totalmente maiúsculo ou totalmente minúsculo, aparecendo o resultado no segundo campo de texto. O primeiro campo é editável, e o segundo é apenas para visualização, onde, ao clicar, chama a função "copiar()", que copia o conteúdo do campo de texto para sua Área de Transferência

Há dois botões após o primeiro campo de texto, o "Converter para Maiúsculo" e o "Converter para Minúsculo" que foram estilizados por CSS3. Ao clicar neles, é chamado a função "maiusculo()" ou "minusculo()", que converte o conteúdo da primeira caixa de texto em todo maiúsculo ou todo minúsculo e apresenta na segunda caixa de texto.

Caso não haja nada escrito na primeira caixa de texto, ao clicar em um dos botões irá aparecer um alerta informando que não há nada escrito.

O botão "Copiar Texto" após a segunda caixa de texto também chama a função "copiar()" quando clicado, que copia o conteúdo da segunda caixa de texto para a Área de Transferência.
