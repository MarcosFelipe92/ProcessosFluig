/**
 *
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */
function createDataset(fields, constraints, sorts) {
  var dataset = DatasetBuilder.newDataset();

  dataset.addColumn("SIGLA");
  dataset.addColumn("NOME");

  dataset.addRow(["AC", "Acre"]);
  dataset.addRow(["AL", "Alagoas"]);
  dataset.addRow(["AP", "Amapá"]);
  dataset.addRow(["AM", "Amazonas"]);
  dataset.addRow(["BA", "Bahia"]);
  dataset.addRow(["CE", "Ceará"]);
  dataset.addRow(["DF", "Distrito Federal"]);
  dataset.addRow(["ES", "Espírito Santo"]);
  dataset.addRow(["GO", "Goiás"]);
  dataset.addRow(["MA", "Maranhão"]);
  dataset.addRow(["MT", "Mato Grosso"]);
  dataset.addRow(["MS", "Mato Grosso do Sul"]);
  dataset.addRow(["MG", "Minas Gerais"]);
  dataset.addRow(["PA", "Pará"]);
  dataset.addRow(["PB", "Paraíba"]);
  dataset.addRow(["PR", "Paraná"]);
  dataset.addRow(["PE", "Pernambuco"]);
  dataset.addRow(["PI", "Piauí"]);
  dataset.addRow(["RJ", "Rio de Janeiro"]);
  dataset.addRow(["RN", "Rio Grande do Norte"]);
  dataset.addRow(["RS", "Rio Grande do Sul"]);
  dataset.addRow(["RO", "Rondônia"]);
  dataset.addRow(["RR", "Roraima"]);
  dataset.addRow(["SC", "Santa Catarina"]);
  dataset.addRow(["SP", "São Paulo"]);
  dataset.addRow(["SE", "Sergipe"]);
  dataset.addRow(["TO", "Tocantins"]);

  return dataset;
}

/**
 *
 */
function defineStructure() {}

/**
 *
 *
 * @param {number} lastSyncDate
 */
function onSync(lastSyncDate) {}

/**
 *
 *
 * @param user
 * @returns {DatasetMobileSync}
 */
function onMobileSync(user) {}
