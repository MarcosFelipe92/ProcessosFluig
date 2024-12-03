<div id="WidgetFuncionarios_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
    data-params="WidgetFuncionarios.instance()">
    <div class="row">
        <div class="form-group col-md-4">
            <input type="text" class="form-control" id="nomeFuncionario" placeholder="Nome do Funcionário">
        </div>
        <div class="form-group col-md-4">
            <input type="text" class="form-control" id="funcao" placeholder="Função">
        </div>
        <div class="form-group col-md-3">
            <input type="text" class="form-control" id="tipoContrato" placeholder="Tipo de Contrato">
        </div>
        <div>
            <button class=" btn btn-success" data-customSearch>Pesquisar</button>
        </div>
    </div>
    <div id="funcionarioTable"></div>

    <script src="/webdesk/vcXMLRPC.js"></script>
</div>