/**

 * @param {FormController} form
 */
function validateForm(form) {
  var message = "";
  var atividadeAtual = parseInt(getValue("WKNumState"));
  var codAtividades = atividades();

  message += campoObrigatorio(form, "name", "Nome");
  message += campoObrigatorio(form, "email", "Email");
  message += campoObrigatorio(form, "dataSolicitacao", "Data de Solicitação");

  message += campoObrigatorio(form, "titulo", "titulo");
  message += campoObrigatorio(form, "localVaga", "Local da Vaga");
  message += campoObrigatorio(form, "quantidadeVagas", "Quantidade de Vagas");

  message += campoPaiFilhoObrigatorio(form, "habilidades", "nomeHabilidade", "Nome da Habilidade");

  if (atividadeAtual > codAtividades.INICIO) {
    message += campoObrigatorio(form, "numeroSolicitacao", "Número da Solicitação");
  }

  if (atividadeAtual == codAtividades.APROVACAO) {
    message += campoObrigatorio(form, "aprovacao", "Aprovação");

    if (form.getValue("aprovacao") == "nao") {
      message += campoObrigatorio(form, "justificativa", "Justificativa");
    }
  }

  if (atividadeAtual == codAtividades.INICIA_PROCESSO_SELETIVO) {
    message += campoPaiFilhoObrigatorio(form, "candidatos", "nomeCandidato", "Nome do Candidato");
    message += campoPaiFilhoObrigatorio(form, "candidatos", "emailCandidato", "E-mail do Candidato");
    message += campoPaiFilhoObrigatorio(form, "candidatos", "telefoneCandidato", "Telefone do Candidato");
  }

  if (message) {
    throw message;
  }
}

// Função para validar campo obrigatório
function campoObrigatorio(form, nameField, displayField) {
  if (form.getValue(nameField) == "") {
    return "O <b>" + displayField + "</b> é obrigatório<br>";
  } else {
    return "";
  }
}

// Função para validar campo zoom obrigatório
function campoZoomObrigatorio(form, nameField, displayField) {
  if (form.getValue(nameField) == "" || form.getValue(nameField) == null) {
    return "O <b>" + displayField + "</b> é obrigatório<br>";
  } else {
    return "";
  }
}

// Função para validar campos pai-filho
function campoPaiFilhoObrigatorio(form, tableName, nameField, displayField) {
  var message = "";
  var indexes = form.getChildrenIndexes(tableName);

  for (var i = 0; i < indexes.length; i++) {
    if (form.getValue(nameField + "___" + indexes[i]) == null || form.getValue(nameField + "___" + indexes[i]) == "") {
      message += "O campo <b>" + displayField + "</b> é obrigatório<br>";
    }
  }
  return message;
}
