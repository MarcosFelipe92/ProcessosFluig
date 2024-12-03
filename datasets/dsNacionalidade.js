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

  dataset.addRow(["001", "Brasileira"]);
  dataset.addRow(["002", "Espanhola"]);
  dataset.addRow(["003", "Argentina"]);
  dataset.addRow(["004", "Portuguesa"]);
  dataset.addRow(["005", "Italiana"]);
  dataset.addRow(["006", "Francesa"]);
  dataset.addRow(["007", "Alemã"]);
  dataset.addRow(["008", "Inglesa"]);
  dataset.addRow(["009", "Japonesa"]);
  dataset.addRow(["010", "Chinesa"]);
  dataset.addRow(["011", "Canadense"]);
  dataset.addRow(["012", "Mexicana"]);
  dataset.addRow(["013", "Australiana"]);
  dataset.addRow(["014", "Belga"]);
  dataset.addRow(["015", "Sueca"]);
  dataset.addRow(["016", "Norueguesa"]);
  dataset.addRow(["017", "Dinamarquesa"]);
  dataset.addRow(["018", "Suíça"]);
  dataset.addRow(["019", "Holandesa"]);
  dataset.addRow(["020", "Russa"]);
  dataset.addRow(["021", "Tailandesa"]);
  dataset.addRow(["022", "Indiana"]);
  dataset.addRow(["023", "Sul-Africana"]);
  dataset.addRow(["024", "Turca"]);
  dataset.addRow(["025", "Coreana"]);

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
