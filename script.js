let culturaAtual = null;
let dadosCulturaAtual = null;

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

async function consultarIa() {
  const chaveIaCampo = document.getElementById("chaveIa");
  const culturaIaCampo = document.getElementById("culturaIa");
  const perguntaIaCampo = document.getElementById("perguntaIa");
  const respostaIa = document.getElementById("respostaIa");

  if (!chaveIaCampo || !culturaIaCampo || !perguntaIaCampo || !respostaIa) {
    return;
  }

  const chaveIa = chaveIaCampo.value.trim();
  const culturaIa = culturaIaCampo.value.trim();
  const perguntaIa = perguntaIaCampo.value.trim();

  respostaIa.classList.remove("erro");

  if (!chaveIa) {
    respostaIa.classList.add("erro");
    respostaIa.textContent = "Digite uma chave temporária de IA.";
    return;
  }

  if (!culturaIa) {
    respostaIa.classList.add("erro");
    respostaIa.textContent = "Digite o nome da cultura agrícola que deseja consultar.";
    return;
  }

  if (!perguntaIa) {
    respostaIa.classList.add("erro");
    respostaIa.textContent = "Digite uma pergunta relacionada à agricultura.";
    return;
  }

  respostaIa.textContent = "Consultando a IA...";

  try {
    const resposta = await fetch("https://ceducap.com.br/ia/agrinho_openai.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chaveIa: chaveIa,
        cultura: culturaIa,
        pergunta: perguntaIa,
        dadosCultura: dadosCulturaAtual
      })
    });

    const tipoConteudo = resposta.headers.get("content-type");

    if (!tipoConteudo || !tipoConteudo.includes("application/json")) {
      throw new Error("O servidor PHP não retornou JSON válido.");
    }

    const resultado = await resposta.json();

    if (!resposta.ok) {
      throw new Error(resultado.erro || "Erro ao consultar a IA.");
    }

    respostaIa.textContent = resultado.resposta || "A IA não retornou uma resposta.";

    const apagarChaveCampo = document.getElementById("apagarChaveAposConsulta");
    const apagarChave = apagarChaveCampo ? apagarChaveCampo.checked : true;

    if (apagarChave) {
      chaveIaCampo.value = "";
    }

  } catch (erro) {
    respostaIa.classList.add("erro");
    respostaIa.textContent = "Erro: " + erro.message;
    console.error(erro);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const culturaDaPagina = document.body.dataset.cultura;

  if (culturaDaPagina) {
    carregarCultura(culturaDaPagina);
  }
});
