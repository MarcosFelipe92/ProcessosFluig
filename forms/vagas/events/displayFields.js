/**
 * @param {FormController} form
 * @param {customHTML} customHtml
 */

function displayFields(form, customHTML) {
  var activity = parseInt(getValue("WKNumState"));
  var codAtividades = atividades();

  form.setVisibleById("painelAprovacao", false);
  form.setVisibleById("painelCandidatos", false);

  if (form.getFormMode() == "ADD" || (form.getFormMode() == "MOD" && activity == codAtividades.INICIO)) {
    var user = fluigAPI.getUserService().getCurrent();

    form.setValue("name", user.getFullName());
    form.setValue("email", user.getCode());

    return;
  }

  if (activity > codAtividades.INICIO) {
    customHTML.append('<script>$(function () { $(".action-habilidades").remove(); });</script>');
  }

  if (activity != codAtividades.INICIA_PROCESSO_SELETIVO && activity != codAtividades.FINALIZA_PROCESSO_SELETIVO) {
    customHTML.append('<script>$(function () { $(".action-candidatos").remove(); });</script>');
  }

  if (activity == codAtividades.APROVACAO) {
    form.setVisibleById("painelAprovacao", true);
  }

  if (activity >= codAtividades.INICIA_PROCESSO_SELETIVO) {
    form.setVisibleById("painelCandidatos", true);
  }
}
