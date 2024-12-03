/**
 * @param {FormController} form
 */

function validateForm(form) {
  var message = "";
  var activity = parseInt(getValue("WKNumState"));
  var codAtividades = atividades();

  // Validação do solicitante
  message += campoObrigatorio(form, "nome", "Nome");
  message += campoObrigatorio(form, "email", "Email");
  message += campoObrigatorio(form, "dataSolicitacao", "Data da solicitação");

  // Validação do funcionário
  message += campoObrigatorio(form, "nameFuncionario", "Nome do funcionário");
  message += campoObrigatorio(form, "emailFuncionario", "Email do funcionário");
  message += campoObrigatorio(form, "telefone", "Telefone do funcionário");
  message += campoObrigatorio(form, "dataNascimento", "Data de Nascimento");
  message += campoZoomObrigatorio(form, "nacionalidade", "Nacionalidade");
  message += campoZoomObrigatorio(form, "naturalidade", "Naturalidade");
  message += campoZoomObrigatorio(form, "estadoCivil", "Estado Civil");
  message += campoObrigatorio(form, "genero", "Gênero");
  message += campoObrigatorio(form, "cpf", "CPF");
  message += campoObrigatorio(form, "identidade", "Identidade");
  message += campoObrigatorio(form, "orgaoEmissor", "Órgão Emissor");
  message += campoObrigatorio(form, "dataEmissao", "Data de Emissão");
  message += campoZoomObrigatorio(form, "funcao", "Função");

  // Validação do contrato
  message += campoZoomObrigatorio(form, "tipoContrato", "Tipo de Contrato");

  if (form.getValue("valueTipoContrato") == "001") {
    message += campoObrigatorio(form, "instituicaoEnsino", "Instituição Ensino");
    message += campoObrigatorio(form, "responsavel", "Responsável");
    message += campoObrigatorio(form, "cargaHoraria", "Carga Horária");
  } else if (form.getValue("valueTipoContrato") == "003") {
    message += campoObrigatorio(form, "projeto", "Projeto");
    message += campoObrigatorio(form, "prazoEntrega", "Prazo Entrega");
    message += campoObrigatorio(form, "valorContrato", "Valor contrato");
  } else {
    message += campoObrigatorio(form, "valorHora", "Valor Hora");
    message += campoObrigatorio(form, "totalHora", "Total Hora");
  }

  // Validação de CNH
  if (form.getValue("cnh") != "") {
    message += campoZoomObrigatorio(form, "categoriaCnh", "Categoria da CNH");
    message += campoObrigatorio(form, "dataEmissaoCnh", "Data de Emissão da CNH");
    message += campoObrigatorio(form, "dataVencimentoCnh", "Data de vencimento da CNH");
  }

  // Validação de aprovação
  if (activity == codAtividades.APROVACAO) {
    message += campoObrigatorio(form, "aprovacao", "Aprovação");

    if (form.getValue("aprovacao") == "nao" || form.getValue("aprovacao") == "reajuste") {
      message += campoObrigatorio(form, "justificativa", "Justificativa");
    }
  }

  if (message) {
    throw message;
  }
}

// Função auxiliar para validar campo obrigatório
function campoObrigatorio(form, field, fieldName) {
  if (form.getValue(field) == "") {
    return "O <b>" + fieldName + "</b> é obrigatório<br>";
  } else {
    return "";
  }
}

// Função auxiliar para validar campo zoom obrigatório
function campoZoomObrigatorio(form, field, fieldName) {
  if (form.getValue(field) == "" || form.getValue(field) == null) {
    return "O <b>" + fieldName + "</b> é obrigatório<br>";
  } else {
    return "";
  }
}
