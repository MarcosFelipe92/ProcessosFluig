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

  dataset.addRow(["001", "Suprimentos de informática"]);
  dataset.addRow(["002", "Material de escritório"]);
  dataset.addRow(["003", "Equipamentos de TI"]);
  dataset.addRow(["004", "Mobiliário"]);
  dataset.addRow(["005", "Serviços terceirizados"]);
  dataset.addRow(["006", "Higiene e limpeza"]);
  dataset.addRow(["007", "Manutenção e reparos"]);
  dataset.addRow(["008", "Equipamentos de segurança"]);
  dataset.addRow(["009", "Material promocional"]);
  dataset.addRow(["010", "Ferramentas e utensílios"]);
  dataset.addRow(["011", "Equipamentos audiovisuais"]);
  dataset.addRow(["012", "Eletrodomésticos para escritório"]);

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
