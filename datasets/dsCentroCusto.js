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

  // Adiciona as colunas ao dataset
  dataset.addColumn("COD");
  dataset.addColumn("NOME");
  dataset.addColumn("FILIAL");

  // Dados do dataset
  var data = [
    ["CC001", "Centro de Custo Marketing", "001"],
    ["CC002", "Centro de Custo Vendas", "001"],
    ["CC003", "Centro de Custo TI", "002"],
    ["CC004", "Centro de Custo Administrativo", "003"],
    ["CC005", "Centro de Custo Financeiro", "004"],
    ["CC006", "Centro de Custo Logística", "005"],
    ["CC007", "Centro de Custo Suporte", "006"],
    ["CC008", "Centro de Custo Pesquisa", "007"],
    ["CC009", "Centro de Custo RH", "008"],
    ["CC010", "Centro de Custo Projetos", "009"],
    ["CC011", "Centro de Custo TI", "006"],
  ];

  // Verifica as constraints para filtrar a coluna "FILIAL"
  var filtro = null;
  if (constraints !== null) {
    for (var i = 0; i < constraints.length; i++) {
      if (constraints[i].fieldName == "FILIAL") {
        filtro = constraints[i].initialValue;
        break;
      }
    }
  }

  // Adiciona ao dataset apenas as linhas que atendem ao filtro
  for (var i = 0; i < data.length; i++) {
    if (!filtro || data[i][2] == filtro) {
      dataset.addRow(data[i]);
    }
  }

  return dataset;
}

function setSelectedZoomItem(item) {
  if (item.inputId == "estado") {
    reloadZoomFilterValues("filial", "ESTADO," + item.SIGLA);
  }

  if (item.inputId == "filial") {
    reloadZoomFilterValues("centroCusto", "FILIAL," + item.COD);
  }
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
