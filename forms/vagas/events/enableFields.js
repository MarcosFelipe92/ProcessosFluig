/**
 *
 *
 * @param {FormController} form
 */
function enableFields(form) {
  var atividadeAtual = parseInt(getValue("WKNumState"));
  var codAtividades = atividades();

  if (atividadeAtual > codAtividades.INICIO) {
    form.setEnabled("titulo", false);
    form.setEnabled("localVaga", false);
    form.setEnabled("quantidadeVagas", false);
    form.setEnabled("descricao", false);
    form.setEnabled("centroCusto", false);
    form.setEnabled("observacoes", false);

    var indexes = form.getChildrenIndexes("habilidades");

    for (var i = 0; i < indexes.length; i++) {
      form.setEnabled("nomeHabilidade___" + indexes[i], false);
    }
  }

  if (atividadeAtual != codAtividades.APROVACAO) {
    form.setEnabled("aprovacao", false);
    form.setEnabled("justificativa", false);
  }

  if (atividadeAtual == codAtividades.REALIZA_CONTRATACAO) {
    var indexes = form.getChildrenIndexes("candidatos");

    for (var i = 0; i < indexes.length; i++) {
      form.setEnabled("nomeCandidato___" + indexes[i], false);
      form.setEnabled("emailCandidato___" + indexes[i], false);
      form.setEnabled("telefoneCandidato___" + indexes[i], false);
    }
  }
}
