/**
 *
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */
/**
 * Criação do dataset com base nas constraints
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */
function createDataset(fields, constraints, sorts) {
  var data = [
    { cod: "001", nome: "Filial Centro SP", estado: "SP" },
    { cod: "002", nome: "Filial Zona Sul SP", estado: "SP" },
    { cod: "003", nome: "Filial Norte RJ", estado: "RJ" },
    { cod: "004", nome: "Filial Centro RJ", estado: "RJ" },
    { cod: "005", nome: "Filial Salvador", estado: "BA" },
    { cod: "006", nome: "Filial Goiânia", estado: "GO" },
    { cod: "007", nome: "Filial Brasília", estado: "DF" },
    { cod: "008", nome: "Filial Fortaleza", estado: "CE" },
    { cod: "009", nome: "Filial Belo Horizonte", estado: "MG" },
    { cod: "010", nome: "Filial Curitiba", estado: "PR" },
    { cod: "011", nome: "Filial Goiânia-Leste", estado: "GO" },
  ];

  var dataset = DatasetBuilder.newDataset();
  dataset.addColumn("COD");
  dataset.addColumn("NOME");
  dataset.addColumn("ESTADO");

  var estadoFiltro = null;

  if (constraints && constraints.length) {
    for (var i = 0; i < constraints.length; ++i) {
      if (constraints[i].fieldName == "ESTADO") {
        estadoFiltro = constraints[i].finalValue;
      }
    }
  }

  // Filtragem dos dados com base na constraint do estado
  for (var j = 0; j < data.length; ++j) {
    // Se o estadoFiltro for null, adiciona todos os dados
    if (estadoFiltro === null || data[j].estado == estadoFiltro) {
      dataset.addRow([data[j].cod, data[j].nome, data[j].estado]);
    }
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
