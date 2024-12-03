/**
 * @param {FormController} form
 * @param {customHTML} customHtml
 */

function displayFields(form, customHTML) {
  var activity = parseInt(getValue("WKNumState"));
  var codAtividades = atividades();

  form.setVisibleById("painelAprovacao", false);

  var dataset = DatasetFactory.getDataset("dsUsuarioLogado", null, null, null);
  if (dataset.rowsCount > 0) {
    var nome = dataset.getValue(0, "name");
    var email = dataset.getValue(0, "email");

    customHTML.append("<script>");
    customHTML.append("$(document).ready(function() {");
    customHTML.append("$('#nome').val('" + nome + "');");
    customHTML.append("$('#email').val('" + email + "');");
    customHTML.append("});");
    customHTML.append("</script>");
  }

  if (activity == codAtividades.APROVACAO) {
    form.setVisibleById("painelAprovacao", true);
  }
  if (activity == codAtividades.REAJUSTE) {
    form.setVisibleById("painelAprovacao", true);
  }
}
