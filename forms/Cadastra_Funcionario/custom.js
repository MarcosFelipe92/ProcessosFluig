$(document).ready(() => {
  $(".required > label:first-child").append('<span class="text-danger"> *</span>');

  FLUIGC.calendar("#dataNascimento");
  FLUIGC.calendar("#dataEmissao");
  FLUIGC.calendar("#dataVencimentoChn");
  FLUIGC.calendar("#dataEmissaoCnh");
  FLUIGC.calendar("#prazoEntrega");

  disabledInput("nome");
  disabledInput("email");
  disabledInput("dataSolicitacao");

  hideFields();
  fillCurrentDateTime();
  validateApprobation();
});

function validateApprobation() {
  $("input[name='aprovacao']").change(function () {
    if ($(this).val() === "nao" || $(this).val() === "reajuste") {
      $("#justificativa").prev("label").append('<span class="text-danger"> *</span>');
      $("#justificativa").attr("required", true);
    } else {
      $("#justificativa").prev("label").find("span.text-danger").remove();
      $("#justificativa").removeAttr("required");
    }
  });
}

$("#cnh").change(() => {
  if ($("#cnh").val() === "") {
    $('label[for="cnh"] .text-danger').remove();
    $('label[for="categoriaCnh"] .text-danger').remove();
    $('label[for="dataEmissaoCnh"] .text-danger').remove();
    $('label[for="dataVencimentoChn"] .text-danger').remove();
  } else {
    const labelCnh = $('label[for="cnh"]');
    if (!labelCnh.find(".text-danger").length) {
      labelCnh.append('<span class="text-danger"> *</span>');
    }

    const labelCat = $('label[for="categoriaCnh"]');
    if (!labelCat.find(".text-danger").length) {
      labelCat.append('<span class="text-danger"> *</span>');
    }

    const labelEmi = $('label[for="dataEmissaoCnh"]');
    if (!labelEmi.find(".text-danger").length) {
      labelEmi.append('<span class="text-danger"> *</span>');
    }

    const labelVen = $('label[for="dataVencimentoChn"]');
    if (!labelVen.find(".text-danger").length) {
      labelVen.append('<span class="text-danger"> *</span>');
    }
  }
});

function setSelectedZoomItem(item) {
  if (item.inputId == "tipoContrato") {
    // Limpa os campos de Estágio
    $("#instituicaoEnsino").val("");
    $("#responsavel").val("");
    $("#cargaHoraria").val("");

    // Limpa os campos de Freelancer
    $("#projeto").val("");
    $("#prazoEntrega").val("");
    $("#valorContrato").val("");

    $("#valueTipoContrato").val(item.cod);

    if (item.nome == "Estágio") {
      $("#estagioFields").show();
      $("#freelancerFields").hide();
      $("#vHoras").hide();
      $("#tHoras").hide();

      $("#valorHora").val("");
      $("#totalHoras").val("");
    } else if (item.nome == "Freelancer") {
      $("#freelancerFields").show();
      $("#estagioFields").hide();
      $("#vHoras").hide();
      $("#tHoras").hide();

      $("#valorHora").val("");
      $("#totalHoras").val("");
    } else {
      $("#freelancerFields").hide();
      $("#estagioFields").hide();
    }
  }
}

function removedZoomItem(item) {
  if (item.inputId == "tipoContrato") {
    $("#valueTipoContrato").val("");
    // Limpa os campos de Estágio
    $("#instituicaoEnsino").val("");
    $("#responsavel").val("");
    $("#cargaHoraria").val("");

    // Limpa os campos de Freelancer
    $("#projeto").val("");
    $("#prazoEntrega").val("");
    $("#valorContrato").val("");

    $("#freelancerFields").hide();
    $("#estagioFields").hide();

    $("#vHoras").show();
    $("#tHoras").show();
  }
}

function hideFields() {
  const tipoContrato = $("#valueTipoContrato").val();

  if (tipoContrato === "001") {
    $("#estagioFields").show();
    $("#freelancerFields").hide();
  } else if (tipoContrato === "003") {
    $("#freelancerFields").show();
    $("#estagioFields").hide();
  } else {
    $("#freelancerFields").hide();
    $("#estagioFields").hide();
  }
}
