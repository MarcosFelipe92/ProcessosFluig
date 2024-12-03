$(document).ready(() => {
  $(".required > label:first-child").append('<span class="text-danger"> *</span>');

  disabledInput("numeroSolicitacao");
  disabledInput("name");
  disabledInput("email");
  disabledInput("dataSolicitacao");

  fillCurrentDateTime();
  initializeTable("habilidades");
  initializeTable("candidatos");
});

function addLine(table) {
  wdkAddChild(table);
}

function removeLine(element) {
  const $tabelaPai = $(element).closest("table");

  // Menos o cabeçalho e a tr hidden padrão
  const quantidadeFilhos = $tabelaPai.find("tr").length - 2;

  if (quantidadeFilhos > 1) {
    fnWdkRemoveChild(element);
  } else {
    FLUIGC.toast({
      title: "Erro: ",
      message: "É necessário ao menos um item.",
      type: "warning",
    });
  }
}

function initializeTable(table) {
  const $tabelaPai = $(`[tablename="${table}"]`);

  const quantidadeFilhos = $tabelaPai.find("tbody tr").length - 1;

  if (quantidadeFilhos == 0) {
    wdkAddChild(table);
  }
}

function initializeTableCandidatos() {
  const $tabelaPai = $('[tablename="habilidades"]');

  const quantidadeFilhos = $tabelaPai.find("tbody tr").length - 1;

  if (quantidadeFilhos == 0) {
    wdkAddChild("habilidades");
  }
}
