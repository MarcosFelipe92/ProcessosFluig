/**
 * Função que desabilita um campo
 * @param {string} id Id do campo a ser desabilitado
 */
function disabledInput(id) {
  $("#" + id).attr("disabled", true);
}

/**
 * Função que pega a data atual
 */
function fillCurrentDateTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formattedDateTime = `${day}/${month}/${year} - ${hours}:${minutes}`;
  $("#dataSolicitacao").val(formattedDateTime);
}
