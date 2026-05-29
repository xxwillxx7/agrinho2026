let culturaAtual = null;
let dadosCulturaAtual = null;
let nivelFonte = 0;

const imagensCulturas = {
  feijao: "img/feijao.png",
  milho: "img/milho.png",
  soja: "img/soja.png"
};

async function carregarCultura(cultura) {
  const resultado = document.getElementById("resultado");

  if (!resultado) {
    return;
  }

  const caminhoJson = `dados/${cultura}.json`;

  resultado.innerHTML = `
    <div class="resultado-inicial">
      <span>⏳</span>
      <h2>Carregando informações...</h2>
      <p>Buscando o arquivo <strong>${caminhoJson}</strong>.</p>
    </div>
  `;

  try {
    const resposta = await fetch(caminhoJson);

    if (!resposta.ok) {
      throw new Error(`Arquivo não encontrado: ${caminhoJson}`);
    }

    const texto = await resposta.text();
    let dados;

    try {
      dados = JSON.parse(texto);
    } catch (erroJson) {
      throw new Error(`O arquivo ${caminhoJson} foi encontrado, mas o JSON está com erro de escrita. Verifique vírgulas, aspas, chaves e colchetes.`);
    }

    culturaAtual = cultura;
    dadosCulturaAtual = dados;

    mostrarInformacoes(dados, cultura);

    const campoIa = document.getElementById("culturaIa");

    if (campoIa) {
      campoIa.value = dados.cultura || cultura;
    }

  } catch (erro) {
    resultado.innerHTML = `
      <div class="resultado-inicial">
        <span>⚠️</span>
        <h2 class="erro">Erro ao carregar as informações da cultura.</h2>
        <p>${escaparHtml(erro.message)}</p>
        <p>Confira se o arquivo está na pasta <strong>dados</strong> e se o nome está exatamente igual ao chamado pela página.</p>
      </div>
    `;

    console.error(erro);
  }
}

function mostrarInformacoes(dados, cultura) {
  const resultado = document.getElementById("resultado");

  if (!resultado) {
    return;
  }

  const imagem = imagensCulturas[cultura] || "";

  resultado.innerHTML = `
    <div class="resultado-layout">
      <div class="resultado-imagem">
        <img src="${imagem}" alt="Imagem representando a cultura ${escaparHtml(dados.cultura || cultura)}">
      </div>

      <div class="resultado-conteudo">
        <span class="etiqueta">Dados da cultura</span>
        <h2>${escaparHtml(dados.cultura || cultura)}</h2>

        ${montarConteudoDinamico(dados)}

        ${montarFontes(dados)}
      </div>
    </div>
  `;
}

function montarConteudoDinamico(dados) {
  let html = "";

  if (dados.descricao) {
    html += `
      <h3>Descrição</h3>
      <p>${escaparHtml(dados.descricao)}</p>
    `;
  }

  if (dados.contexto_geral) {
    html += `
      <h3>Contexto geral</h3>
      <p>${escaparHtml(dados.contexto_geral)}</p>
    `;
  }

  if (dados.importancia_agricultura_familiar) {
    html += `
      <h3>Importância na agricultura familiar</h3>
      ${montarObjetoComoLista(dados.importancia_agricultura_familiar)}
    `;
  }

  if (dados.analise_mercado_parana_2007_2008) {
    html += `
      <h3>Análise de mercado no Paraná — 2007/2008</h3>
      ${montarObjetoComoLista(dados.analise_mercado_parana_2007_2008)}
    `;
  }

  if (dados.analise_mercado_e_producao_2008) {
    html += `
      <h3>Análise de mercado e produção — 2008</h3>
      ${montarObjetoComoLista(dados.analise_mercado_e_producao_2008)}
    `;
  }

  if (dados.analise_safra_e_clima_2008) {
    html += `
      <h3>Análise da safra e clima — 2008</h3>
      ${montarObjetoComoLista(dados.analise_safra_e_clima_2008)}
    `;
  }

  if (dados.vulnerabilidades_e_riscos) {
    html += `
      <h3>Vulnerabilidades e riscos</h3>
      ${montarObjetoComoLista(dados.vulnerabilidades_e_riscos)}
    `;
  }

  if (dados.riscos_climaticos) {
    html += `
      <h3>Riscos climáticos</h3>
      ${montarObjetoComoLista(dados.riscos_climaticos)}
    `;
  }

  if (dados.contexto_regional) {
    html += `
      <h3>Contexto regional</h3>
      ${montarObjetoComoLista(dados.contexto_regional)}
    `;
  }

  if (dados.dinamica_na_agricultura_familiar_toledo) {
    html += `
      <h3>Dinâmica na agricultura familiar em Toledo</h3>
      ${montarObjetoComoLista(dados.dinamica_na_agricultura_familiar_toledo)}
    `;
  }

  if (dados.dinamica_em_toledo_pr) {
    html += `
      <h3>Dinâmica em Toledo/PR</h3>
      ${montarObjetoComoLista(dados.dinamica_em_toledo_pr)}
    `;
  }

  if (dados.segunda_safra_safrinha) {
    html += `
      <h3>Segunda safra / Safrinha</h3>
      ${montarObjetoComoLista(dados.segunda_safra_safrinha)}
    `;
  }

  if (dados.relacao_com_sustentabilidade) {
    html += `
      <h3>Relação com sustentabilidade</h3>
      ${montarObjetoComoLista(dados.relacao_com_sustentabilidade)}
    `;
  }

  if (dados.climaIdeal) {
    html += `
      <h3>Clima ideal</h3>
      <p>${escaparHtml(dados.climaIdeal)}</p>
    `;
  }

  if (dados.soloRecomendado) {
    html += `
      <h3>Tipo de solo recomendado</h3>
      <p>${escaparHtml(dados.soloRecomendado)}</p>
    `;
  }

  if (dados.epocaPlantio) {
    html += `
      <h3>Época de plantio</h3>
      <p>${escaparHtml(dados.epocaPlantio)}</p>
    `;
  }

  if (dados.dicasManejo) {
    html += `
      <h3>Dicas de manejo</h3>
      ${montarListaSimples(dados.dicasManejo)}
    `;
  }

  if (dados.cuidados) {
    html += `
      <h3>Principais cuidados</h3>
      ${montarListaSimples(dados.cuidados)}
    `;
  }

  if (dados.sugestoes) {
    html += `
      <h3>Sugestões gerais</h3>
      ${montarListaSimples(dados.sugestoes)}
    `;
  }

  if (!html) {
    html = `
      <h3>Informações</h3>
      <p>O arquivo JSON foi carregado, mas não possui campos reconhecidos pelo sistema.</p>
    `;
  }

  return html;
}

function montarListaSimples(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return "<p>Nenhuma informação cadastrada.</p>";
  }

  return `
    <ul class="lista-dados">
      ${lista.map(item => `<li>${escaparHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function montarObjetoComoLista(objeto) {
  if (!objeto || typeof objeto !== "object") {
    return `<p>${escaparHtml(objeto)}</p>`;
  }

  let html = "<ul class='lista-dados'>";

  for (const chave in objeto) {
    const titulo = formatarTitulo(chave);
    const valor = objeto[chave];

    if (Array.isArray(valor)) {
      html += `
        <li>
          <strong>${escaparHtml(titulo)}:</strong>
          <ul>
            ${valor.map(item => {
              if (typeof item === "object" && item !== null) {
                return `<li>${montarObjetoComoLista(item)}</li>`;
              }

              return `<li>${escaparHtml(item)}</li>`;
            }).join("")}
          </ul>
        </li>
      `;
    } else if (typeof valor === "object" && valor !== null) {
      html += `
        <li>
          <strong>${escaparHtml(titulo)}:</strong>
          ${montarObjetoComoLista(valor)}
        </li>
      `;
    } else {
      html += `
        <li>
          <strong>${escaparHtml(titulo)}:</strong> ${escaparHtml(valor)}
        </li>
      `;
    }
  }

  html += "</ul>";

  return html;
}

function montarFontes(dados) {
  const fontes = dados.fontes_de_dados || dados.fontes_consultadas || dados.fontes_de_referencia || dados.fontes || [];

  if (!Array.isArray(fontes) || fontes.length === 0) {
    return `
      <div class="fontes-dados">
        <h3>Fontes dos dados</h3>
        <p>As fontes desta cultura ainda não foram informadas no arquivo JSON.</p>
      </div>
    `;
  }

  return `
    <div class="fontes-dados">
      <h3>Fontes dos dados</h3>
      <ul>
        ${fontes.map(fonte => montarItemFonte(fonte)).join("")}
      </ul>
    </div>
  `;
}

function montarItemFonte(fonte) {
  if (typeof fonte === "object" && fonte !== null) {
    const titulo = escaparHtml(fonte.titulo || "Fonte sem título");
    const instituicao = fonte.instituicao ? `<br><span><strong>Instituição:</strong> ${escaparHtml(fonte.instituicao)}</span>` : "";
    const ano = fonte.ano ? `<br><span><strong>Ano:</strong> ${escaparHtml(fonte.ano)}</span>` : "";
    const observacao = fonte.observacao ? `<br><span><strong>Observação:</strong> ${escaparHtml(fonte.observacao)}</span>` : "";
    const link = fonte.link ? `<br><a href="${escaparAtributo(fonte.link)}" target="_blank" rel="noopener noreferrer">Acessar fonte</a>` : "";

    return `
      <li>
        <strong>${titulo}</strong>
        ${instituicao}
        ${ano}
        ${observacao}
        ${link}
      </li>
    `;
  }

  const textoFonte = String(fonte || "");

  if (textoFonte.startsWith("http://") || textoFonte.startsWith("https://")) {
    return `
      <li>
        <a href="${escaparAtributo(textoFonte)}" target="_blank" rel="noopener noreferrer">
          ${escaparHtml(textoFonte)}
        </a>
      </li>
    `;
  }

  return `<li>${escaparHtml(textoFonte)}</li>`;
}

async function consultarIa() {
  const culturaIaCampo = document.getElementById("culturaIa");
  const perguntaIaCampo = document.getElementById("perguntaIa");
  const respostaIa = document.getElementById("respostaIa");

  if (!culturaIaCampo || !perguntaIaCampo || !respostaIa) {
    return;
  }

  const culturaIa = normalizarTexto(culturaIaCampo.value);
  const perguntaOriginal = perguntaIaCampo.value.trim();
  const perguntaIa = normalizarTexto(perguntaOriginal);

  respostaIa.classList.remove("erro");

  if (!culturaIa) {
    respostaIa.classList.add("erro");
    respostaIa.textContent = "A cultura ainda não foi identificada pela página.";
    return;
  }

  if (!perguntaIa) {
    respostaIa.classList.add("erro");
    respostaIa.textContent = "Digite uma pergunta para pesquisar na simulação.";
    return;
  }

  respostaIa.textContent = "Pesquisando no arquivo da simulação...";

  try {
    const resposta = await fetch("dados/ia_simulada.json");

    if (!resposta.ok) {
      throw new Error("Arquivo dados/ia_simulada.json não encontrado.");
    }

    const texto = await resposta.text();
    let dadosSimulacao;

    try {
      dadosSimulacao = JSON.parse(texto);
    } catch (erroJson) {
      throw new Error("O arquivo ia_simulada.json foi encontrado, mas está com erro de escrita.");
    }

    const respostaMontada = montarRespostaPorBuscaLivre(dadosSimulacao, culturaIa, perguntaIa);

    if (respostaMontada) {
      respostaIa.textContent = respostaMontada;
    } else {
      respostaIa.textContent = dadosSimulacao.resposta_padrao || "Não encontrei informações suficientes no arquivo da simulação. Tente usar palavras como agricultura familiar, clima, solo, renda, mercado, sustentabilidade, feijão, milho ou soja.";
    }

  } catch (erro) {
    respostaIa.classList.add("erro");
    respostaIa.textContent = "Erro na pesquisa simulada: " + erro.message;
    console.error(erro);
  }
}

function montarRespostaPorBuscaLivre(dadosSimulacao, culturaIa, perguntaIa) {
  const palavrasPergunta = extrairPalavrasImportantes(perguntaIa);

  if (palavrasPergunta.length === 0) {
    return "";
  }

  const blocos = criarBlocosPesquisaveis(dadosSimulacao, culturaIa);

  const blocosPontuados = blocos
    .map(bloco => ({
      ...bloco,
      pontuacao: calcularPontuacaoLivre(palavrasPergunta, bloco.textoNormalizado, bloco.culturaNormalizada, culturaIa)
    }))
    .filter(bloco => bloco.pontuacao > 0)
    .sort((a, b) => b.pontuacao - a.pontuacao);

  if (blocosPontuados.length === 0) {
    return "";
  }

  const melhoresBlocos = selecionarBlocosRelevantes(blocosPontuados);

  if (melhoresBlocos.length === 0) {
    return "";
  }

  let resposta = "Resultado da pesquisa simulada:\n\n";

  melhoresBlocos.forEach((bloco, indice) => {
    resposta += `${indice + 1}. ${bloco.titulo}\n`;
    resposta += `${bloco.texto}\n\n`;
  });

  resposta += "Observação: esta resposta foi montada a partir da busca de palavras no arquivo local ia_simulada.json. Não é uma resposta gerada por uma IA real em tempo real.";

  return resposta.trim();
}

function criarBlocosPesquisaveis(dadosSimulacao, culturaIa) {
  const blocos = [];

  if (dadosSimulacao.contexto_geral) {
    Object.keys(dadosSimulacao.contexto_geral).forEach(chave => {
      adicionarBloco(blocos, {
        cultura: "geral",
        titulo: `Contexto geral - ${formatarTitulo(chave)}`,
        texto: dadosSimulacao.contexto_geral[chave]
      });
    });
  }

  const culturas = Array.isArray(dadosSimulacao.culturas) ? dadosSimulacao.culturas : [];

  culturas.forEach(cultura => {
    const id = cultura.id || "";
    const nome = cultura.nome || id;
    const culturaNormalizada = normalizarTexto(id || nome);

    if (culturaNormalizada !== culturaIa) {
      return;
    }

    adicionarBloco(blocos, {
      cultura: id,
      titulo: `${nome} - Resumo`,
      texto: cultura.resumo
    });

    adicionarObjetoComoBlocos(blocos, cultura.importancia_na_agricultura_familiar, id, `${nome} - Importância na agricultura familiar`);
    adicionarObjetoComoBlocos(blocos, cultura.aspectos_produtivos, id, `${nome} - Aspectos produtivos`);
    adicionarObjetoComoBlocos(blocos, cultura.riscos_e_desafios, id, `${nome} - Riscos e desafios`);
    adicionarObjetoComoBlocos(blocos, cultura.relacao_com_sustentabilidade, id, `${nome} - Relação com sustentabilidade`);

    const perguntas = Array.isArray(cultura.perguntas_simuladas) ? cultura.perguntas_simuladas : [];

    perguntas.forEach(item => {
      adicionarBloco(blocos, {
        cultura: id,
        titulo: `${nome} - Pergunta relacionada`,
        texto: `${item.pergunta} ${item.resposta}`
      });
    });
  });

  if (dadosSimulacao.temas_transversais) {
    Object.keys(dadosSimulacao.temas_transversais).forEach(chave => {
      const tema = dadosSimulacao.temas_transversais[chave];

      adicionarBloco(blocos, {
        cultura: "geral",
        titulo: `Tema transversal - ${formatarTitulo(chave)}`,
        texto: transformarValorEmTexto(tema)
      });
    });
  }

  const respostasGerais = Array.isArray(dadosSimulacao.respostas_gerais_para_simulacao)
    ? dadosSimulacao.respostas_gerais_para_simulacao
    : [];

  respostasGerais.forEach(item => {
    adicionarBloco(blocos, {
      cultura: "geral",
      titulo: "Resposta geral da simulação",
      texto: `${(item.palavras_chave || []).join(", ")}. ${item.resposta || ""}`
    });
  });

  return blocos;
}

function adicionarObjetoComoBlocos(blocos, objeto, cultura, tituloBase) {
  if (!objeto) {
    return;
  }

  if (typeof objeto === "string") {
    adicionarBloco(blocos, {
      cultura: cultura,
      titulo: tituloBase,
      texto: objeto
    });
    return;
  }

  if (Array.isArray(objeto)) {
    adicionarBloco(blocos, {
      cultura: cultura,
      titulo: tituloBase,
      texto: objeto.join(" ")
    });
    return;
  }

  if (typeof objeto === "object") {
    Object.keys(objeto).forEach(chave => {
      adicionarBloco(blocos, {
        cultura: cultura,
        titulo: `${tituloBase} - ${formatarTitulo(chave)}`,
        texto: transformarValorEmTexto(objeto[chave])
      });
    });
  }
}

function adicionarBloco(blocos, bloco) {
  if (!bloco || !bloco.texto) {
    return;
  }

  const texto = String(bloco.texto).trim();

  if (!texto) {
    return;
  }

  blocos.push({
    cultura: bloco.cultura || "geral",
    culturaNormalizada: normalizarTexto(bloco.cultura || "geral"),
    titulo: bloco.titulo || "Informação encontrada",
    texto: texto,
    textoNormalizado: normalizarTexto(`${bloco.titulo || ""} ${texto}`)
  });
}

function transformarValorEmTexto(valor) {
  if (!valor) {
    return "";
  }

  if (typeof valor === "string") {
    return valor;
  }

  if (Array.isArray(valor)) {
    return valor.map(item => transformarValorEmTexto(item)).join(" ");
  }

  if (typeof valor === "object") {
    return Object.keys(valor)
      .map(chave => `${formatarTitulo(chave)}: ${transformarValorEmTexto(valor[chave])}`)
      .join(" ");
  }

  return String(valor);
}

function extrairPalavrasImportantes(texto) {
  const palavrasIgnoradas = [
    "qual", "quais", "como", "para", "sobre", "essa", "esse", "esta", "este",
    "uma", "uns", "das", "dos", "com", "por", "que", "sao", "ser", "tem",
    "mais", "menos", "pode", "podem", "deve", "devem", "isso", "nesta",
    "neste", "desta", "deste", "da", "do", "de", "em", "no", "na", "nos",
    "nas", "os", "as", "um", "ao", "aos", "e", "ou", "o", "a", "se",
    "sua", "seu", "suas", "seus", "pela", "pelo", "pelas", "pelos",
    "principal", "principais", "explique", "fale", "diga"
  ];

  return normalizarTexto(texto)
    .split(/\s+/)
    .map(palavra => palavra.trim())
    .filter(palavra => palavra.length > 2)
    .filter(palavra => !palavrasIgnoradas.includes(palavra));
}

function calcularPontuacaoLivre(palavrasPergunta, textoBase, culturaDoBloco, culturaIa) {
  let pontos = 0;

  palavrasPergunta.forEach(palavra => {
    if (textoBase.includes(palavra)) {
      pontos += 2;
    }

    if (palavra.length >= 5 && textoBase.includes(palavra.slice(0, 5))) {
      pontos += 1;
    }
  });

  if (culturaDoBloco === culturaIa) {
    pontos += 2;
  }

  if (culturaDoBloco === "geral") {
    pontos += 1;
  }

  return pontos;
}

function selecionarBlocosRelevantes(blocosPontuados) {
  const maiorPontuacao = blocosPontuados[0].pontuacao;

  if (maiorPontuacao < 3) {
    return [];
  }

  return blocosPontuados
    .filter(bloco => bloco.pontuacao >= Math.max(3, maiorPontuacao - 2))
    .slice(0, 3);
}

function atualizarClasseFonte() {
  document.body.classList.remove("fonte-grande", "fonte-maior", "fonte-extra");

  if (nivelFonte === 1) {
    document.body.classList.add("fonte-grande");
  }

  if (nivelFonte === 2) {
    document.body.classList.add("fonte-maior");
  }

  if (nivelFonte === 3) {
    document.body.classList.add("fonte-extra");
  }
}

function aumentarFonte() {
  if (nivelFonte < 3) {
    nivelFonte++;
    atualizarClasseFonte();
  }
}

function diminuirFonte() {
  if (nivelFonte > 0) {
    nivelFonte--;
    atualizarClasseFonte();
  }
}

function restaurarFonte() {
  nivelFonte = 0;
  atualizarClasseFonte();
}

function lerPagina() {
  if (!("speechSynthesis" in window)) {
    alert("Seu navegador não oferece suporte à leitura de texto.");
    return;
  }

  pararLeitura();

  const conteudo = document.getElementById("conteudo-principal") || document.querySelector("main");
  const texto = conteudo ? conteudo.innerText : document.body.innerText;

  if (!texto.trim()) {
    alert("Não há texto disponível para leitura.");
    return;
  }

  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  fala.rate = 0.95;
  fala.pitch = 1;

  window.speechSynthesis.speak(fala);
}

function pararLeitura() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function iniciarAcessibilidade() {
  const acessibilidade = document.querySelector(".acessibilidade");
  const btnToggle = document.getElementById("btn-toggle-acessibilidade");
  const painel = document.getElementById("painel-acessibilidade");

  const btnAumentar = document.getElementById("btn-aumentar-fonte");
  const btnDiminuir = document.getElementById("btn-diminuir-fonte");
  const btnRestaurar = document.getElementById("btn-restaurar-fonte");
  const btnLer = document.getElementById("btn-ler-pagina");
  const btnParar = document.getElementById("btn-parar-leitura");
  const btnConsultarIa = document.getElementById("btn-consultar-ia");

  if (btnToggle && acessibilidade && painel) {
    btnToggle.addEventListener("click", function () {
      const estaAberto = acessibilidade.classList.toggle("aberta");

      btnToggle.setAttribute("aria-expanded", estaAberto ? "true" : "false");
      painel.setAttribute("aria-hidden", estaAberto ? "false" : "true");

      if (estaAberto) {
        btnToggle.textContent = "Fechar acessibilidade";
      } else {
        btnToggle.textContent = "Acessibilidade";
      }
    });
  }

  if (btnAumentar) {
    btnAumentar.addEventListener("click", aumentarFonte);
  }

  if (btnDiminuir) {
    btnDiminuir.addEventListener("click", diminuirFonte);
  }

  if (btnRestaurar) {
    btnRestaurar.addEventListener("click", restaurarFonte);
  }

  if (btnLer) {
    btnLer.addEventListener("click", lerPagina);
  }

  if (btnParar) {
    btnParar.addEventListener("click", pararLeitura);
  }

  if (btnConsultarIa) {
    btnConsultarIa.addEventListener("click", consultarIa);
  }
}

function formatarTitulo(texto) {
  return String(texto)
    .replaceAll("_", " ")
    .replace(/\b\w/g, letra => letra.toUpperCase());
}

function escaparHtml(valor) {
  return String(valor ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escaparAtributo(valor) {
  return String(valor ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "%3C")
    .replaceAll(">", "%3E");
}

function normalizarTexto(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

document.addEventListener("DOMContentLoaded", function () {
  iniciarAcessibilidade();

  const culturaDaPagina = document.body.dataset.cultura;

  if (culturaDaPagina) {
    carregarCultura(culturaDaPagina);
  }
});
