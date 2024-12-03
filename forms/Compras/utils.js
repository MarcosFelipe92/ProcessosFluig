/**
 * Função que desabilita um campo
 * @param {string} id Id do campo a ser desabilitado
 */
function disabledInput(id) {
  $("#" + id).attr("disabled", true);
}

/**
 * Função que habilita um campo
 * @param {string} id Id do campo a ser habilitado
 */
function enableInput(id) {
  $("#" + id).removeAttr("disabled");
}

/**
 * Função que pega a data atual
 */
function fillCurrentDateTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  $("#dataSolicitacao").val(day + "/" + month + "/" + year + " - " + hours + ":" + minutes);
}
