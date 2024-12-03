var WidgetFuncionarios = SuperWidget.extend({
  init: function () {
    this.loadTable();
  },

  bindings: {
    local: {
      customSearch: ["click_loadTable"],
    },
    global: {},
  },

  loadTable: function () {
    var nomeFuncionario = $("#nomeFuncionario").val();
    var funcao = $("#funcao").val();
    var tipoContrato = $("#tipoContrato").val();

    var constraints = [];
    if (nomeFuncionario != "") {
      constraints.push(DatasetFactory.createConstraint("nomeFuncionario", nomeFuncionario, nomeFuncionario, ConstraintType.MUST));
    }
    if (funcao != "") {
      constraints.push(DatasetFactory.createConstraint("funcao", funcao, funcao, ConstraintType.MUST));
    }
    if (tipoContrato != "") {
      constraints.push(DatasetFactory.createConstraint("tipoContrato", tipoContrato, tipoContrato, ConstraintType.MUST));
    }

    var dataset = DatasetFactory.getDataset("dsConsultaFuncionario", null, constraints, null);

    this.myTable = FLUIGC.datatable("#funcionarioTable", {
      dataRequest: dataset.values,
      renderContent: ["nomeFuncionario", "funcao", "tipoContrato", "valorHora", "totalHoras"],
      header: [{ title: "Nome" }, { title: "Função" }, { title: "Tipo de Contrato" }, { title: "Valor Hora" }, { title: "Total Horas" }],
      search: { enabled: false },
      navButtons: { enabled: false },
    });
  },

  // customSearch: function () {
  //   var nomeFuncionario = $("#nomeFuncionario").val();
  //   var funcao = $("#funcao").val();
  //   var tipoContrato = $("#tipoContrato").val();

  //   // Cria as constraints com base nos valores de entrada
  //   var constraints = [];
  //   if (nomeFuncionario) {
  //     constraints.push(DatasetFactory.createConstraint("nomeFuncionario", nomeFuncionario, nomeFuncionario, ConstraintType.MUST));
  //   }
  //   if (funcao) {
  //     constraints.push(DatasetFactory.createConstraint("funcao", funcao, funcao, ConstraintType.MUST));
  //   }
  //   if (tipoContrato) {
  //     constraints.push(DatasetFactory.createConstraint("tipoContrato", tipoContrato, tipoContrato, ConstraintType.MUST));
  //   }

  //   // Chama o dataset personalizado com as constraints
  //   var dataset = DatasetFactory.getDataset("ds_FiltroFuncionario", null, constraints, null);

  //   // Verifica se há dados e recarrega a tabela
  //   if (dataset && dataset.values.length) {
  //     this.myTable.reload(dataset.values);
  //   } else {
  //     FLUIGC.toast({
  //       title: "Pesquisa: ",
  //       message: "Nenhum resultado encontrado",
  //       type: "warning",
  //     });
  //   }
  // },
});
