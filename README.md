# agrinho
Projeto sobre plantio e colheita.
# Portal da Agricultura Familiar do Paraná

Este projeto foi desenvolvido para o Concurso Agrinho 2026, na categoria Programação, Subcategoria 3: Front-End com HTML, CSS e JavaScript.

## Tema

Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.

## Sobre o projeto

O Portal da Agricultura Familiar do Paraná é um site criado para apresentar informações simples e organizadas sobre três culturas importantes para o estado do Paraná: milho, soja e feijão.

A ideia principal do projeto é ajudar estudantes, produtores rurais e outras pessoas interessadas no tema a encontrar informações sobre agricultura familiar, produção agrícola, riscos climáticos, mercado e sustentabilidade.

O site foi pensado para ser fácil de usar. Por isso, cada cultura possui uma página própria, com dados organizados, imagem ilustrativa e fontes de pesquisa. As informações são carregadas por meio de arquivos JSON, usando JavaScript.

## Objetivo

O objetivo do projeto é facilitar o acesso a informações sobre o campo, principalmente para pessoas que têm pouca familiaridade com tecnologia ou com pesquisas em sites oficiais.

O portal busca apresentar, de forma simples, dados que podem ajudar na compreensão das culturas agrícolas e no planejamento da produção. Também procura mostrar a importância da agricultura familiar e da sustentabilidade para o futuro do agro.

## Culturas apresentadas

O projeto apresenta informações sobre:

- Milho
- Soja
- Feijão

Cada página mostra dados relacionados à cultura escolhida, como contexto geral, produção, mercado, riscos climáticos, relação com a agricultura familiar e fontes consultadas.

## Funcionalidades

O site possui uma página inicial com apresentação do projeto e cards para acessar cada cultura.

Também possui páginas específicas para milho, soja e feijão. Nessas páginas, o JavaScript busca os dados nos arquivos JSON e apresenta as informações na tela.

O projeto também conta com uma área de consulta com Inteligência Artificial. Esse recurso foi incluído como apoio para perguntas relacionadas à agricultura.

Entre as principais funcionalidades estão:

- navegação entre as páginas das culturas;
- leitura de arquivos JSON;
- exibição dinâmica das informações com JavaScript;
- apresentação das fontes utilizadas;
- links para documentos e páginas de referência;
- imagens ilustrativas;
- área de consulta com IA;
- layout adaptado para diferentes tamanhos de tela;
- tratamento de erro caso algum arquivo JSON não seja encontrado ou esteja com problema.

## Tecnologias utilizadas

O projeto foi desenvolvido com:

- HTML
- CSS
- JavaScript
- JSON

Não foram utilizados frameworks. O CSS e o JavaScript estão em arquivos separados.

## Estrutura do projeto

/
├── index.html
├── feijao.html
├── milho.html
├── soja.html
├── style.css
├── script.js
├── README.md
├── dados/
│   ├── feijao.json
│   ├── milho.json
│   └── soja.json
└── img/
    ├── feijao.png
    ├── milho.png
    └── soja.png

## Como executar

Para abrir o projeto no computador, é recomendado usar o Visual Studio Code com a extensão Live Server.

Passos:

1. Abra a pasta do projeto no Visual Studio Code.
2. Clique com o botão direito no arquivo index.html.
3. Escolha a opção Open with Live Server.
4. Acesse o endereço gerado no navegador.

O uso do Live Server é importante porque o projeto carrega arquivos JSON. Se o arquivo for aberto diretamente pelo navegador, alguns dados podem não aparecer corretamente.

## Uso de Inteligência Artificial

A Inteligência Artificial foi usada como apoio durante o desenvolvimento do projeto.

Ela ajudou na criação das imagens ilustrativas das culturas e também na revisão de partes do código. Mesmo assim, a organização final do projeto, a escolha das informações e a montagem dos arquivos foram feitas pelos estudantes, com orientação do professor.

A área de consulta com IA funciona por meio de uma API acessada através de um arquivo fornecido pelo professor. Esse arquivo faz a comunicação com o serviço de IA sem expor chaves sensíveis diretamente no HTML, CSS ou JavaScript.

As respostas da IA devem ser usadas apenas como apoio. As informações importantes precisam ser conferidas nas fontes de pesquisa indicadas no projeto.

## Fontes de pesquisa

As informações do projeto foram organizadas a partir de fontes relacionadas à agricultura, produção agrícola, agricultura familiar, dados oficiais e riscos climáticos.

Entre as fontes utilizadas estão:

- Secretaria da Agricultura e do Abastecimento do Paraná;
- DERAL;
- páginas sobre a situação das principais culturas;
- levantamentos de produção agropecuária;
- IBGE;
- IPEA;
- UTFPR;
- eduCAPES;
- estudos sobre agricultura familiar no Paraná;
- materiais sobre produção orgânica e sustentabilidade.

As fontes completas estão registradas nos arquivos JSON de cada cultura e também aparecem nas páginas do site.

## Sustentabilidade

O projeto se relaciona com o tema do Agrinho ao mostrar que a produção agrícola precisa caminhar junto com o cuidado com o meio ambiente.

Nas páginas das culturas, são apresentados temas como agricultura familiar, uso do solo, riscos climáticos, produção de alimentos, monocultura, diversidade produtiva e uso responsável da tecnologia.

A proposta é mostrar que o futuro do campo depende do equilíbrio entre produção, conhecimento, renda e preservação ambiental.

## Autoria

Autores: Allan da Silva Gracioli Santos e Willyan da Cruz Ferreira

Professor orientador: Roberto Nunes dos Santos

Escola: Escola Estadual Ottilia Homero da Silva

Município: Toledo – Paraná

## Tags sugeridas


agrinho
programacao
frontend
html
css
javascript
json
agricultura
agricultura-familiar
sustentabilidade
parana
milho
soja
feijao


## Considerações finais

O Portal da Agricultura Familiar do Paraná mostra como a programação pode ser usada para organizar e compartilhar informações importantes sobre o campo.

O projeto une tecnologia, agricultura familiar e sustentabilidade, buscando tornar o conhecimento mais acessível e útil para quem deseja entender melhor a produção agrícola no Paraná.
