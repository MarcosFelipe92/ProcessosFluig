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
  dataset.addColumn("name");

  dataset.addRow(["001", "Solteiro"]);
  dataset.addRow(["002", "Casado"]);
  dataset.addRow(["003", "Divorciado"]);
  dataset.addRow(["004", "Viúvo"]);
  dataset.addRow(["005", "Separado"]);
  dataset.addRow(["006", "União Estável"]);

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
