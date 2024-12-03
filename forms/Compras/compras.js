$(document).ready(function () {
  $(".required label:first-child").append('<span class="text-danger"> *</span>');

  disabledInput("name");
  disabledInput("email");
  disabledInput("dataSolicitacao");

  fillCurrentDateTime();
  validateApprobation();
  initializeTableItems();
});

function validateApprobation() {
  const $justificativa = $("#justificativa");
  $("input[name='aprovacao']").change(function () {
    if ($(this).val() === "nao") {
      $justificativa.prev("label").append('<span class="text-danger"> *</span>');
      $justificativa.attr("required", true);
    } else {
      $justificativa.prev("label").find("span.text-danger").remove();
      $justificativa.removeAttr("required");
    }
  });
}

function setSelectedZoomItem(item) {
  if (item.inputId == "estado") {
    reloadZoomFilterValues("filial", "ESTADO," + item.SIGLA);
  }

  if (item.inputId == "filial") {
    reloadZoomFilterValues("centroCusto", "FILIAL," + item.COD);
  }
}

function addLine() {
  wdkAddChild("items");
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
      message: "É necessário pelo menos um item.",
      type: "warning",
    });
  }
}

function initializeTableItems() {
  const $tabelaPai = $('[tablename="items"]');

  // Contando o número de tr (excluindo o tr padrão)
  const quantidadeFilhos = $tabelaPai.find("tbody tr").length - 1;

  console.log("Quantidade de filhos:", quantidadeFilhos);

  if (quantidadeFilhos === 0) {
    wdkAddChild("items");
  }
}
