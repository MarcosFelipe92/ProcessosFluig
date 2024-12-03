/**
 *
 *
 * @param {FormController} form
 */
function validateForm(form) {
  var message = "";
  var atividadeAtual = parseInt(getValue("WKNumState"));
  var codAtividades = atividades();

  message += campoObrigatorio(form, "name", "Nome");
  message += campoObrigatorio(form, "email", "Email");
  message += campoObrigatorio(form, "dataSolicitacao", "Data de Solicitação");
  message += campoZoomObrigatorio(form, "estado", "Estado");
  message += campoZoomObrigatorio(form, "filial", "Filial");
  message += campoZoomObrigatorio(form, "centroCusto", "Centro de Custo");
  message += campoPaiFilhoObrigatorio(form, "items", "itemName", "Nome do Item");
  message += campoPaiFilhoObrigatorio(form, "items", "quantidade", "Quantidade do Item");
  message += campoPaiFilhoObrigatorio(form, "items", "preco", "Preço do Item");

  if (atividadeAtual == codAtividades.APROVACAO) {
    message += campoObrigatorio(form, "aprovacao", "Aprovação");

    if (form.getValue("aprovacao") == "nao") {
      message += campoObrigatorio(form, "justificativa", "Justificativa");
    }
  }

  if (message) {
    throw message;
  }
}

// Função para validar campo obrigatório
function campoObrigatorio(form, field, fieldName) {
  if (form.getValue(field) == "") {
    return "O <b>" + fieldName + "</b> é obrigatório<br>";
  } else {
    return "";
  }
}

// Função para validar campo zoom obrigatório
function campoZoomObrigatorio(form, field, fieldName) {
  if (form.getValue(field) == "" || form.getValue(field) == null) {
    return "O <b>" + fieldName + "</b> é obrigatório<br>";
  } else {
    return "";
  }
}

// Função para validar campos pai-filho
function campoPaiFilhoObrigatorio(form, tableName, field, fieldName) {
  var message = "";
  var indexes = form.getChildrenIndexes(tableName);

  for (var i = 0; i < indexes.length; i++) {
    if (form.getValue(field + "___" + indexes[i]) == null || form.getValue(field + "___" + indexes[i]) == "") {
      message += "O campo <b>" + fieldName + "</b> é obrigatório<br>";
    }
  }
  return message;
}
