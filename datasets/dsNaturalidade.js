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

  dataset.addRow(["001", "São Paulo"]);
  dataset.addRow(["002", "Rio de Janeiro"]);
  dataset.addRow(["003", "Belo Horizonte"]);
  dataset.addRow(["004", "Brasília"]);
  dataset.addRow(["005", "Salvador"]);
  dataset.addRow(["006", "Fortaleza"]);
  dataset.addRow(["007", "Curitiba"]);
  dataset.addRow(["008", "Recife"]);
  dataset.addRow(["009", "Porto Alegre"]);
  dataset.addRow(["010", "Manaus"]);
  dataset.addRow(["011", "Belém"]);
  dataset.addRow(["012", "Goiânia"]);
  dataset.addRow(["013", "Campinas"]);
  dataset.addRow(["014", "São Luís"]);
  dataset.addRow(["015", "Teresina"]);
  dataset.addRow(["016", "Maceió"]);
  dataset.addRow(["017", "Natal"]);
  dataset.addRow(["018", "João Pessoa"]);
  dataset.addRow(["019", "Florianópolis"]);
  dataset.addRow(["020", "Cuiabá"]);
  dataset.addRow(["021", "Aracaju"]);
  dataset.addRow(["022", "Palmas"]);
  dataset.addRow(["023", "Vitória"]);
  dataset.addRow(["024", "Campo Grande"]);
  dataset.addRow(["025", "Rio Branco"]);
  dataset.addRow(["026", "Buenos Aires"]);
  dataset.addRow(["027", "Madrid"]);
  dataset.addRow(["028", "Lisboa"]);
  dataset.addRow(["029", "Roma"]);
  dataset.addRow(["030", "Paris"]);
  dataset.addRow(["031", "Berlim"]);
  dataset.addRow(["032", "Londres"]);
  dataset.addRow(["033", "Tóquio"]);
  dataset.addRow(["034", "Pequim"]);

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
