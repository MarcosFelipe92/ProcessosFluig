/**
 * @param {FormController} form
 */

function enableFields(form) {
  var activity = parseInt(getValue("WKNumState"));
  var codAtividades = atividades();

  if (activity == codAtividades.APROVACAO) {
    form.setEnabled("nomeFuncionario", false);
    form.setEnabled("emailFuncionario", false);
    form.setEnabled("telefoneFuncionario", false);
    form.setEnabled("dataNascimento", false);
    form.setEnabled("nacionalidade", false);
    form.setEnabled("naturalidade", false);
    form.setEnabled("estadoCivil", false);
    form.setEnabled("genero", false);
    form.setEnabled("cpf", false);
    form.setEnabled("identidade", false);
    form.setEnabled("orgaoEmissor", false);
    form.setEnabled("dataEmissao", false);
    form.setEnabled("cnh", false);
    form.setEnabled("dataValidadeCnh", false);
    form.setEnabled("categoriaCnh", false);
    form.setEnabled("dataEmissaoCnh", false);
    form.setEnabled("dataVencimentoChn", false);
    form.setEnabled("tipoContrato", false);
    form.setEnabled("funcao", false);
    form.setEnabled("valorHora", false);
    form.setEnabled("totalHoras", false);
    form.setEnabled("instituicaoEnsino", false);
    form.setEnabled("responsavel", false);
    form.setEnabled("cargaHoraria", false);
    form.setEnabled("projeto", false);
    form.setEnabled("prazoEntrega", false);
    form.setEnabled("valorContrato", false);
  }

  if (activity != codAtividades.APROVACAO) {
    form.setEnabled("aprovacao", false);
    form.setEnabled("justificativa", false);
  }
}
