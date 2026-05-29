# Sistema de Sugestões Agrícolas

Projeto desenvolvido para o Concurso Agrinho 2026, na categoria Programação, Subcategoria 3: Programação Front-End com HTML, CSS e JavaScript.

## Tema do Concurso

Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.

## Sobre o projeto

O projeto Sistema de Sugestões Agrícolas foi desenvolvido pelo estudante Willyan da Cruz Ferreira com o objetivo de apresentar, de forma simples e organizada, informações sobre três culturas agrícolas importantes para o estado do Paraná: milho, soja e feijão.

A proposta do site é relacionar agricultura, tecnologia, sustentabilidade e acesso à informação. O projeto mostra como os dados sobre o campo podem ser organizados em páginas digitais, facilitando a leitura e a compreensão de temas ligados à agricultura familiar, produção agrícola, mercado, riscos climáticos e meio ambiente.

Cada cultura possui uma página própria, com imagem ilustrativa, textos informativos, dados carregados por arquivos JSON e fontes de pesquisa. O projeto também possui uma área de pesquisa simulada com Inteligência Artificial, criada apenas com JavaScript e um arquivo JSON local.

Essa simulação não utiliza uma IA real conectada à internet. Ela funciona como uma demonstração educativa de como a tecnologia pode ajudar na busca por informações sobre agricultura e sustentabilidade.

## Objetivo

O objetivo do projeto é facilitar o acesso a informações sobre o campo, principalmente para estudantes e pessoas que desejam compreender melhor a produção agrícola no Paraná.

O site busca mostrar que a tecnologia pode ser uma ferramenta de apoio à organização do conhecimento, ajudando a apresentar dados sobre culturas agrícolas de maneira mais clara, acessível e interativa.

Além disso, o projeto procura valorizar a agricultura familiar e reforçar a importância do equilíbrio entre produção agrícola, preservação ambiental, renda no campo e uso responsável da tecnologia.

## Culturas apresentadas

O projeto apresenta informações sobre as seguintes culturas:

* Milho
* Soja
* Feijão

Cada página reúne dados relacionados ao contexto geral da cultura, produção, mercado, riscos climáticos, relação com a agricultura familiar, sustentabilidade e fontes consultadas.

## Funcionalidades do site

O site possui as seguintes funcionalidades:

* Página inicial com apresentação do projeto;
* Menu de navegação entre as seções principais;
* Cards para acesso às páginas das culturas;
* Páginas específicas para milho, soja e feijão;
* Leitura de dados a partir de arquivos JSON;
* Exibição dinâmica das informações usando JavaScript;
* Apresentação de imagens ilustrativas das culturas;
* Exibição de fontes de pesquisa utilizadas;
* Links para documentos e páginas de referência;
* Área de pesquisa simulando Inteligência Artificial;
* Busca de palavras e temas no arquivo `ia_simulada.json`;
* Tratamento de erro caso algum arquivo JSON não seja encontrado;
* Botões de acessibilidade para controle do tamanho da fonte;
* Recurso de leitura do conteúdo principal usando a voz do navegador;
* Layout adaptado para diferentes tamanhos de tela.

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando tecnologias básicas de front-end:

* HTML5
* CSS3
* JavaScript

Não foram utilizados frameworks.

O CSS está em arquivo separado.

O JavaScript está em arquivo separado.

## Organização dos dados

Além dos arquivos HTML, CSS e JavaScript, o projeto utiliza arquivos JSON apenas como formato de organização dos dados.

Os dados das culturas agrícolas e da simulação de pesquisa foram salvos em arquivos `.json` para serem lidos pelo JavaScript e exibidos nas páginas do site.

A escolha pelo uso de arquivos JSON foi feita para deixar o projeto mais organizado e mais fácil de atualizar. Dessa forma, as informações sobre milho, soja, feijão e a simulação de pesquisa ficam separadas da estrutura visual das páginas.

Isso permite editar, corrigir ou acrescentar novos dados sem precisar modificar diretamente o HTML já construído. Por exemplo, se for necessário atualizar uma informação sobre uma cultura agrícola ou incluir novos conteúdos na simulação de pesquisa, basta alterar o arquivo JSON correspondente.

Essa organização também torna o projeto mais escalável, pois no futuro seria possível acrescentar novas culturas agrícolas criando novos arquivos de dados e reaproveitando a mesma estrutura de página e o mesmo JavaScript.

Os arquivos JSON não representam uma linguagem de programação adicional. Eles funcionam somente como uma forma de armazenar e organizar as informações usadas pelo projeto.

## Estrutura de arquivos

/
├── index.html
├── feijao.html
├── milho.html
├── soja.html
├── style.css
├── script.js
├── README.md
├── LICENSE
├── dados/
│   ├── feijao.json
│   ├── milho.json
│   ├── soja.json
│   └── ia_simulada.json
└── img/
    ├── favicon.png
    ├── feijao.png
    ├── milho.png
    └── soja.png


## Como executar o projeto

Para visualizar o projeto localmente, é recomendado utilizar o Visual Studio Code com a extensão Live Server.

Passos:

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Clique com o botão direito no arquivo `index.html`.
4. Selecione a opção `Open with Live Server`.
5. Navegue pelo site usando o menu e os botões das páginas.

O uso do Live Server é recomendado porque o projeto carrega dados de arquivos JSON. Caso o arquivo seja aberto diretamente no navegador, algumas informações podem não aparecer corretamente por causa das regras de segurança do navegador.

Também é possível acessar o projeto publicado pelo GitHub Pages ou Vercel, por meio do link disponível na seção About deste repositório.

## Acessibilidade

O projeto inclui recursos simples de acessibilidade para melhorar a experiência de navegação.

Foram implementados:

* Botão para aumentar o tamanho da fonte;
* Botão para diminuir o tamanho da fonte;
* Botão para restaurar o tamanho padrão da fonte;
* Botão para ler o conteúdo principal da página;
* Botão para parar a leitura;
* Textos alternativos em imagens;
* Uso de elementos estruturais do HTML;
* Navegação organizada por seções;
* Layout responsivo para diferentes dispositivos.

A leitura da página utiliza o recurso de voz do próprio navegador. Esse recurso não substitui leitores de tela profissionais, mas ajuda a tornar o conteúdo mais acessível e mais fácil de acompanhar.

## Sustentabilidade

O projeto se relaciona com o tema do Agrinho ao mostrar que a produção agrícola precisa caminhar junto com o cuidado com o meio ambiente.

Nas páginas das culturas são abordados temas como agricultura familiar, uso do solo, riscos climáticos, produção de alimentos, monocultura, diversidade produtiva e uso responsável da tecnologia.

A proposta é mostrar que o futuro do campo depende do equilíbrio entre produção, conhecimento, renda, preservação ambiental e acesso à informação de qualidade.

## Conceitos de programação aplicados

Durante o desenvolvimento do projeto, foram aplicados conceitos importantes de programação front-end, como:

* Estruturação de páginas com HTML;
* Uso de tags semânticas como `header`, `main`, `section`, `nav` e `footer`;
* Estilização com CSS externo;
* Organização visual com classes e seletores CSS;
* Uso de Flexbox e Grid para organização do layout;
* Responsividade com media queries;
* Manipulação do DOM com JavaScript;
* Uso de variáveis;
* Uso de funções;
* Uso de condicionais;
* Uso de eventos de clique;
* Leitura de arquivos JSON com `fetch`;
* Tratamento de erros no carregamento dos dados;
* Montagem dinâmica de conteúdo na página;
* Organização do código em arquivos separados.

## Principais interações implementadas

O JavaScript foi usado para tornar o site mais dinâmico e interativo. Entre as principais interações implementadas estão:

* Carregamento automático dos dados das culturas a partir dos arquivos JSON;
* Exibição dinâmica das informações de milho, soja e feijão;
* Montagem das listas de dados, fontes e descrições dentro da página;
* Busca simulada em arquivo JSON para responder perguntas relacionadas ao tema;
* Controle de abertura e fechamento do painel de acessibilidade;
* Aumento e diminuição do tamanho da fonte;
* Restauração do tamanho padrão da fonte;
* Leitura do conteúdo principal da página com voz do navegador;
* Interrupção da leitura;
* Exibição de mensagens de erro quando algum arquivo JSON não é encontrado ou possui problema de escrita.

## Simulação de pesquisa com IA

O projeto possui uma área chamada Simulação de Pesquisa com Inteligência Artificial.

Essa função foi criada para demonstrar como uma IA poderia auxiliar em perguntas relacionadas à agricultura, sustentabilidade e culturas agrícolas. No entanto, a função não usa API externa, não envia dados para servidores e não depende de chave de acesso.

A pesquisa funciona com JavaScript. O usuário digita uma pergunta, e o sistema analisa as palavras informadas. Em seguida, o código procura no arquivo local `dados/ia_simulada.json` os trechos mais relacionados ao tema pesquisado.

O arquivo `ia_simulada.json` contém textos sobre agricultura familiar, sustentabilidade, riscos climáticos, tecnologia no campo e as culturas do milho, da soja e do feijão.

Essa escolha foi feita para manter o projeto dentro da proposta da Subcategoria 3, utilizando apenas HTML, CSS, JavaScript e JSON.

## Fontes de pesquisa

As informações do projeto foram organizadas a partir de fontes relacionadas à agricultura, produção agrícola, agricultura familiar, dados oficiais e riscos climáticos.

Entre as fontes utilizadas estão:

* Secretaria da Agricultura e do Abastecimento do Paraná;
* DERAL;
* Página Situação das Principais Culturas;
* Levantamento da Produção Agropecuária do Paraná;
* IBGE;
* IPEA;
* UTFPR;
* eduCAPES;
* Estudos sobre agricultura familiar no Paraná;
* Materiais sobre produção orgânica e sustentabilidade.

As fontes completas estão registradas nos arquivos JSON de cada cultura e também aparecem nas páginas do site.

## Uso de Inteligência Artificial no desenvolvimento

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

O Gemini foi usado como apoio na criação de imagens ilustrativas das culturas agrícolas.

O ChatGPT foi usado como apoio na revisão de códigos HTML, CSS e JavaScript, na organização de ideias e na criação do conteúdo-base do arquivo `ia_simulada.json`.

A organização final do projeto, a escolha das informações, a montagem dos arquivos, a adaptação do conteúdo e os testes foram realizados pelo estudante Willyan da Cruz Ferreira, com orientação do professor Roberto Nunes dos Santos.

A Inteligência Artificial foi usada como apoio educacional, sem substituir a autoria do estudante, a pesquisa realizada e a organização do projeto.

## Modelos de prompts utilizados

Os modelos abaixo representam o tipo de orientação usada nas ferramentas de Inteligência Artificial durante o desenvolvimento do projeto. Eles foram adaptados conforme a necessidade de cada etapa.

### Modelo de prompt para criação de imagem

Crie uma imagem educativa sobre a cultura do [nome da cultura agrícola], mostrando a plantação no campo, com aparência limpa, natural e relacionada ao tema sustentabilidade. A imagem deve representar a importância da agricultura para a produção de alimentos e o equilíbrio entre produção agrícola e cuidado com o meio ambiente.


### Modelo de prompt para correção de código

Analise este código HTML, CSS e JavaScript de um projeto escolar do Concurso Agrinho. Corrija erros de estrutura, organização e funcionamento, mantendo a proposta original do estudante. Não utilize frameworks, não coloque CSS ou JavaScript interno no HTML e mantenha os arquivos separados.


### Modelo de prompt para melhoria do JavaScript

Verifique este código JavaScript e melhore a organização das funções, o carregamento dos arquivos JSON e o tratamento de erros. O projeto deve continuar funcionando apenas com HTML, CSS, JavaScript e JSON, sem uso de API externa.


### Modelo de prompt para criação do arquivo ia_simulada.json

Crie um arquivo JSON educativo para simular respostas de uma Inteligência Artificial em um site escolar sobre agricultura familiar, sustentabilidade, riscos climáticos e culturas agrícolas no Paraná. O conteúdo deve abordar milho, soja e feijão, com linguagem clara, informações resumidas e estrutura organizada para ser lida por JavaScript.


### Modelo de prompt para revisão dos textos

Revise este texto de um projeto escolar sobre agricultura, sustentabilidade e tecnologia no campo. Mantenha uma linguagem simples, clara e adequada para estudantes, sem deixar o texto artificial ou exagerado. Preserve a ideia principal e corrija apenas problemas de clareza, coesão e escrita.


## Créditos dos recursos utilizados

As imagens ilustrativas foram criadas com apoio de ferramenta de Inteligência Artificial e organizadas para fins educacionais no contexto do Concurso Agrinho 2026.

Os textos informativos foram organizados com base em fontes de pesquisa relacionadas à agricultura, sustentabilidade, produção agrícola e agricultura familiar.

O conteúdo do arquivo `ia_simulada.json` foi produzido com apoio do ChatGPT e adaptado para funcionar como uma simulação educativa dentro do site.

As fontes externas consultadas estão indicadas nos arquivos JSON das culturas e nas páginas do projeto.

## Autoria

Estudante: Willyan da Cruz Ferreira

Professor orientador: Roberto Nunes dos Santos

Escola: Escola Estadual Ottilia Homero da Silva

Município: Pinhais – Paraná

## Tags do projeto

Sugestões de tags para o GitHub:

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
acessibilidade

## Licença

Este projeto foi desenvolvido para fins educacionais e para participação no Concurso Agrinho 2026.

O repositório possui um arquivo de licença próprio, disponível em `LICENSE`.

## Considerações finais

O Sistema de Sugestões Agrícolas mostra como a programação pode ser usada para organizar e apresentar informações importantes sobre o campo.

O projeto une tecnologia, agricultura familiar, sustentabilidade e acessibilidade, buscando tornar o conhecimento mais claro e mais fácil de consultar.

A simulação de pesquisa com IA reforça a proposta educativa do projeto, mostrando como recursos tecnológicos podem apoiar a busca por informações, sem depender de serviços externos ou de uma API real.

A intenção principal do projeto é mostrar que o uso da tecnologia no campo pode contribuir para a aprendizagem, para o planejamento e para a valorização de práticas mais responsáveis na produção agrícola.
