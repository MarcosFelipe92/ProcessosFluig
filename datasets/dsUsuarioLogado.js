/**
 *
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */
function createDataset(fields, constraints, sortFields) {
  var dataset = DatasetBuilder.newDataset();

  dataset.addColumn("login");
  dataset.addColumn("name");
  dataset.addColumn("email");

  var usuarioLogado = getValue("WKUser");

  var c1 = DatasetFactory.createConstraint(
    "colleaguePK.colleagueId",
    usuarioLogado,
    usuarioLogado,
    ConstraintType.MUST
  );
  var colleagueDataset = DatasetFactory.getDataset(
    "colleague",
    null,
    [c1],
    null
  );

  if (colleagueDataset.rowsCount > 0) {
    dataset.addRow([
      colleagueDataset.getValue(0, "login"),
      colleagueDataset.getValue(0, "colleagueName"),
      colleagueDataset.getValue(0, "mail"),
    ]);
  }

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
