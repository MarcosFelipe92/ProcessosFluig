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
  dataset.addColumn("descricao");

  dataset.addRow(["A", "Categoria A"]);
  dataset.addRow(["B", "Categoria B"]);
  dataset.addRow(["C", "Categoria C"]);
  dataset.addRow(["D", "Categoria D"]);
  dataset.addRow(["E", "Categoria E"]);

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
