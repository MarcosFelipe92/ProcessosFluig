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

  dataset.addRow(["001", "Auxiliar Administrativo"]);
  dataset.addRow(["002", "Desenvolvedor Fluig"]);
  dataset.addRow(["003", "Analista de Sistemas"]);
  dataset.addRow(["004", "Gerente de Projetos"]);
  dataset.addRow(["005", "Consultor de TI"]);
  dataset.addRow(["006", "Analista de Suporte"]);
  dataset.addRow(["007", "Engenheiro de Software"]);
  dataset.addRow(["008", "Administrador de Redes"]);
  dataset.addRow(["009", "Arquiteto de Soluções"]);
  dataset.addRow(["010", "Tester de Qualidade"]);
  dataset.addRow(["011", "Data Scientist"]);
  dataset.addRow(["012", "Especialista em Segurança"]);
  dataset.addRow(["013", "Scrum Master"]);
  dataset.addRow(["014", "Product Owner"]);
  dataset.addRow(["015", "UX/UI Designer"]);
  dataset.addRow(["016", "Engenheiro de Dados"]);
  dataset.addRow(["017", "Coordenador de TI"]);
  dataset.addRow(["018", "Técnico de Suporte"]);
  dataset.addRow(["019", "Desenvolvedor Front-end"]);
  dataset.addRow(["020", "Desenvolvedor Back-end"]);

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
