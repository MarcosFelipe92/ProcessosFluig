/**
 *
 *
 * @param {FormController} form
 */
function enableFields(form) {
  var atividadeAtual = parseInt(getValue("WKNumState"));
  var codAtividades = atividades();

  if (atividadeAtual == codAtividades.APROVACAO) {
    form.setEnabled("estado", false);
    form.setEnabled("filial", false);
    form.setEnabled("centroCusto", false);
    form.setEnabled("observacoes", false);

    var indexes = form.getChildrenIndexes("items");

    for (var i = 0; i < indexes.length; i++) {
      form.setEnabled("itemName___" + indexes[i], false);
      form.setEnabled("quantidade___" + indexes[i], false);
      form.setEnabled("preco___" + indexes[i], false);
    }
  }
}
