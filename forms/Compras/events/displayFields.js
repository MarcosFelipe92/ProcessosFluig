/**
 *
 * @param {FormController} form
 * @param {customHTML} customHTML
 */
function displayFields(form, customHTML) {
  var atividadeAtual = parseInt(getValue("WKNumState"));
  var codAtividades = atividades();

  form.setVisibleById("painelAprovacao", false);

  if (atividadeAtual == codAtividades.APROVACAO) {
    form.setVisibleById("painelAprovacao", true);
  }

  var dataset = DatasetFactory.getDataset("dsUsuarioLogado", null, null, null);
  if (dataset.rowsCount > 0) {
    var name = dataset.getValue(0, "name");
    var email = dataset.getValue(0, "email");

    customHTML.append("<script>");
    customHTML.append("$(document).ready(function() {");
    customHTML.append("$('#name').val('" + name + "');");
    customHTML.append("$('#email').val('" + email + "');");
    customHTML.append("});");
    customHTML.append("</script>");
  }
}
