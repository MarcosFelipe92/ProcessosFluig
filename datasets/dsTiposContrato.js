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

  dataset.addColumn("cod");
  dataset.addColumn("nome");

  dataset.addRow(["001", "Estágio"]);
  dataset.addRow(["002", "Contrato Temporário"]);
  dataset.addRow(["003", "Freelancer"]);
  dataset.addRow(["004", "Consultoria"]);
  dataset.addRow(["005", "Empregado CLT"]);
  dataset.addRow(["006", "Contrato PJ"]);
  dataset.addRow(["007", "Terceirizado"]);
  dataset.addRow(["008", "Contrato de Experiência"]);
  dataset.addRow(["009", "Sociedade Empresária"]);
  dataset.addRow(["010", "Associação"]);

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
