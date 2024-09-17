sendDataAjax();
$('#page_loader').show();
function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "TablaDeCalificacion.aspx/ListaCalificacion",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            evaluar(data.d);
        }
    });
}

function evaluar(obj) {

    var PP = obj[0].PuntosPersonales;
    var CanDirectos = obj[0].CanActivos;
    var VQ = obj[0].VQ;
    var canSuperiorIM = obj[0].canSuperiorIM;
    var canSuperiorTDM = obj[0].canSuperiorTDM;
    var canSuperiorDDM = obj[0].canSuperiorDDM;
    var canSuperiorDM = obj[0].canSuperiorDM;
    var canSuperiorTD = obj[0].canSuperiorTD;
    var canSuperiorDD = obj[0].canSuperiorDD;
    var canSuperiorD = obj[0].canSuperiorD;
    var canSuperiorR = obj[0].canSuperiorR;
    var canSuperiorZ = obj[0].canSuperiorZ;
    var canSuperiorO = obj[0].canSuperiorO;
    var canSuperiorP = obj[0].canSuperiorP;
    var canSuperiorB = obj[0].canSuperiorB;
    var conEmprendedor = 0, conBronce = 0, conPlata = 0, conOro = 0, conZafiro = 0, conRubi = 0, conDiamante = 0, conDDiamante = 0, conTDiamante = 0,
        conDMillonario = 0, conDDMillonario = 0, conTDMillonario = 0, conImperial = 0;


    $("#pts").text(PP);
    $("#CAN").text(CanDirectos);
    $("#VQ").text(VQ);


    if (PP >= 100) {
        $("#xEmpA").hide(); $("#xBroA").hide(); $("#xPlaA").hide(); $("#xOroA").hide(); $("#xZafA").hide(); $("#xRubA").hide(); 
        $("#xDiaA").hide(); $("#xDDiA").hide(); $("#xTDiA").hide(); $("#xDMiA").hide(); $("#xDDMA").hide(); $("#xTDMA").hide(); $("#xImpA").hide(); 
        conImperial += 1; conTDMillonario += 1; conDDMillonario += 1; conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1;
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;}
    else if (PP >= 80) {
        $("#xEmpA").hide(); $("#xBroA").hide(); $("#xPlaA").hide(); $("#xOroA").hide(); $("#xZafA").hide(); $("#xRubA").hide();
        $("#xDiaA").hide(); $("#xDDiA").hide(); $("#xTDiA").hide(); $("#xDMiA").hide(); $("#xDDMA").hide(); $("#xTDMA").hide(); $("#cImpA").hide(); 
        conTDMillonario += 1; conDDMillonario += 1; conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1;
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;}
    else if (PP >= 60) {
        $("#xEmpA").hide(); $("#xBroA").hide(); $("#xPlaA").hide(); $("#xOroA").hide(); $("#xZafA").hide(); $("#xRubA").hide();
        $("#xDiaA").hide(); $("#xDDiA").hide(); $("#xTDiA").hide(); $("#cDMiA").hide(); $("#cDDMA").hide(); $("#cTDMA").hide(); $("#cImpA").hide();
        conTDiamante += 1; conDDiamante += 1; conDiamante += 1; conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;}
    else if (PP >= 40) {
        $("#xEmpA").hide(); $("#xBroA").hide(); $("#xPlaA").hide(); $("#xOroA").hide(); $("#xZafA").hide(); $("#xRubA").hide();
        $("#cDiaA").hide(); $("#cDDiA").hide(); $("#cTDiA").hide(); $("#cDMiA").hide(); $("#cDDMA").hide(); $("#cTDMA").hide(); $("#cImpA").hide();
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;}
    else if (PP >= 20) {
        $("#xEmpA").hide(); $("#xBroA").hide(); $("#cPlaA").hide(); $("#cOroA").hide(); $("#cZafA").hide(); $("#cRubA").hide();
        $("#cDiaA").hide(); $("#cDDiA").hide(); $("#cTDiA").hide(); $("#cDMiA").hide(); $("#cDDMA").hide(); $("#cTDMA").hide(); $("#cImpA").hide();
        conBronce += 1; conEmprendedor += 1;}
    else {
        $("#cEmpA").hide(); $("#cBroA").hide(); $("#cPlaA").hide(); $("#cOroA").hide(); $("#cZafA").hide(); $("#cRubA").hide();
        $("#cDiaA").hide(); $("#cDDiA").hide(); $("#cTDiA").hide(); $("#cDMiA").hide(); $("#cDDMA").hide(); $("#cTDMA").hide(); $("#cImpA").hide();}

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (VQ >= 1000000) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#xOroVC").hide(); $("#xZafVC").hide(); $("#xRubVC").hide(); $("#xDiaVC").hide();
        $("#xDDiVC").hide(); $("#xTDiVC").hide(); $("#xDMiVC").hide(); $("#xDDMVC").hide(); $("#xTDMVC").hide(); $("#xImpVC").hide();
        conImperial += 1; conTDMillonario += 1; conDDMillonario += 1; conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1;
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (VQ >= 500000) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#xOroVC").hide(); $("#xZafVC").hide(); $("#xRubVC").hide(); $("#xDiaVC").hide();
        $("#xDDiVC").hide(); $("#xTDiVC").hide(); $("#xDMiVC").hide(); $("#xDDMVC").hide(); $("#xTDMVC").hide(); $("#cImpVC").hide();
        conTDMillonario += 1; conDDMillonario += 1; conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1;
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (VQ >= 300000) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#xOroVC").hide(); $("#xZafVC").hide(); $("#xRubVC").hide(); $("#xDiaVC").hide();
        $("#xDDiVC").hide(); $("#xTDiVC").hide(); $("#xDMiVC").hide(); $("#xDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide();
        conDDMillonario += 1; conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1; conRubi += 1; conZafiro += 1;
        conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (VQ >= 160000) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#xOroVC").hide(); $("#xZafVC").hide(); $("#xRubVC").hide(); $("#xDiaVC").hide();
        $("#xDDiVC").hide(); $("#xTDiVC").hide(); $("#xDMiVC").hide(); $("#cDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide();
        conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1; conRubi += 1; conZafiro += 1; conOro += 1;
        conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (VQ >= 80000) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#xOroVC").hide(); $("#xZafVC").hide(); $("#xRubVC").hide(); $("#xDiaVC").hide();
        $("#xDDiVC").hide(); $("#xTDiVC").hide(); $("#cDMiVC").hide(); $("#cDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide();
        conTDiamante += 1; conDDiamante += 1; conDiamante += 1; conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1;
        conEmprendedor += 1;
    }
    else if (VQ >= 40000) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#xOroVC").hide(); $("#xZafVC").hide(); $("#xRubVC").hide(); $("#xDiaVC").hide();
        $("#xDDiVC").hide(); $("#cTDiVC").hide(); $("#cDMiVC").hide(); $("#cDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide();
        conDDiamante += 1; conDiamante += 1; conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (VQ >= 20000) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#xOroVC").hide(); $("#xZafVC").hide(); $("#xRubVC").hide(); $("#xDiaVC").hide();
        $("#cDDiVC").hide(); $("#cTDiVC").hide(); $("#cDMiVC").hide(); $("#cDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide();
        conDiamante += 1; conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (VQ >= 10000) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#xOroVC").hide(); $("#xZafVC").hide(); $("#xRubVC").hide(); $("#cDiaVC").hide();
        $("#cDDiVC").hide(); $("#cTDiVC").hide(); $("#cDMiVC").hide(); $("#cDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide();
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (VQ >= 6000) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#xOroVC").hide(); $("#xZafVC").hide(); $("#cRubVC").hide(); $("#cDiaVC").hide();
        $("#cDDiVC").hide(); $("#cTDiVC").hide(); $("#cDMiVC").hide(); $("#cDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide();
        conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (VQ >= 3000) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#xOroVC").hide(); $("#cZafVC").hide(); $("#cRubVC").hide(); $("#cDiaVC").hide();
        $("#cDDiVC").hide(); $("#cTDiVC").hide(); $("#cDMiVC").hide(); $("#cDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide();
        conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (VQ >= 1500) {
        $("#xBroVC").hide(); $("#xPlaVC").hide(); $("#cOroVC").hide(); $("#cZafVC").hide(); $("#cRubVC").hide(); $("#cDiaVC").hide();
        $("#cDDiVC").hide(); $("#cTDiVC").hide(); $("#cDMiVC").hide(); $("#cDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide();
        conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (VQ >= 800) {
        $("#xBroVC").hide(); $("#cPlaVC").hide(); $("#cOroVC").hide(); $("#cZafVC").hide(); $("#cRubVC").hide(); $("#cDiaVC").hide();
        $("#cDDiVC").hide(); $("#cTDiVC").hide(); $("#cDMiVC").hide(); $("#cDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide();
        conBronce += 1; conEmprendedor += 1;
    }
    else {
        $("#cBroVC").hide(); $("#cPlaVC").hide(); $("#cOroVC").hide(); $("#cZafVC").hide(); $("#cRubVC").hide(); $("#cDiaVC").hide();
        $("#cDDiVC").hide(); $("#cTDiVC").hide(); $("#cDMiVC").hide(); $("#cDDMVC").hide(); $("#cTDMVC").hide(); $("#cImpVC").hide(); conEmprendedor += 1;}

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (canSuperiorD >= 4) {
        $("#xRubLC").hide(); $("#xDiaLC").hide(); $("#xDDiLC").hide(); $("#xTDiLC").hide();
        $("#xDMiLC").hide(); $("#xDDMLC").hide(); $("#xTDMLC").hide(); $("#xImpLC").hide();
        conImperial += 1; conTDMillonario += 1; conDDMillonario += 1; conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1;
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (canSuperiorD >= 3) {
        $("#xRubLC").hide(); $("#xDiaLC").hide(); $("#xDDiLC").hide(); $("#xTDiLC").hide();
        $("#xDMiLC").hide(); $("#xDDMLC").hide(); $("#xTDMLC").hide(); $("#cImpLC").hide();
        conTDMillonario += 1; conDDMillonario += 1; conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1;
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (canSuperiorD >= 2 & canSuperiorR >= 1) {
        $("#xRubLC").hide(); $("#xDiaLC").hide(); $("#xDDiLC").hide(); $("#xTDiLC").hide();
        $("#xDMiLC").hide(); $("#xDDMLC").hide(); $("#cTDMLC").hide(); $("#cImpLC").hide();
        conDDMillonario += 1; conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1;
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (canSuperiorD >= 1 & canSuperiorR >= 1) {
        $("#xRubLC").hide(); $("#xDiaLC").hide(); $("#xDDiLC").hide(); $("#xTDiLC").hide();
        $("#xDMiLC").hide(); $("#cDDMLC").hide(); $("#cTDMLC").hide(); $("#cImpLC").hide();
        conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1;
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (canSuperiorZ >= 3 ) {
        $("#xRubLC").hide(); $("#xDiaLC").hide(); $("#xDDiLC").hide(); $("#xTDiLC").hide();
        $("#cDMiLC").hide(); $("#cDDMLC").hide(); $("#cTDMLC").hide(); $("#cImpLC").hide();
        conTDiamante += 1; conDDiamante += 1; conDiamante += 1; conRubi += 1; conZafiro += 1;
        conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (canSuperiorO >= 3 ) {
        $("#xRubLC").hide(); $("#xDiaLC").hide(); $("#xDDiLC").hide(); $("#cTDiLC").hide();
        $("#cDMiLC").hide(); $("#cDDMLC").hide(); $("#cTDMLC").hide(); $("#cImpLC").hide();
        conDDiamante += 1; conDiamante += 1; conRubi += 1; conZafiro += 1; conOro += 1;
        conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else if (canSuperiorB >= 3 ) {
        $("#xRubLC").hide(); $("#xDiaLC").hide(); $("#cDDiLC").hide(); $("#cTDiLC").hide();
        $("#cDMiLC").hide(); $("#cDDMLC").hide(); $("#cTDMLC").hide(); $("#cImpLC").hide();
        conDiamante += 1; conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1;
        conBronce += 1; conEmprendedor += 1;
    }
    else if (canSuperiorB >= 2 ) {
        $("#xRubLC").hide(); $("#cDiaLC").hide(); $("#cDDiLC").hide(); $("#cTDiLC").hide();
        $("#cDMiLC").hide(); $("#cDDMLC").hide(); $("#cTDMLC").hide(); $("#cImpLC").hide();
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    }
    else {
        $("#cRubLC").hide(); $("#cDiaLC").hide(); $("#cDDiLC").hide(); $("#cTDiLC").hide();
        $("#cDMiLC").hide(); $("#cDDMLC").hide(); $("#cTDMLC").hide(); $("#cImpLC").hide();
        conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;}

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (CanDirectos >= 2) {
        $('#proceso td i').removeClass('comple');
        conImperial += 1; conTDMillonario += 1; conDDMillonario += 1; conDMillonario += 1; conTDiamante += 1; conDDiamante += 1; conDiamante += 1;
        conRubi += 1; conZafiro += 1; conOro += 1; conPlata += 1; conBronce += 1; conEmprendedor += 1;
    } else { $('#proceso td i').removeClass('cross'); }

    if (2 > CanDirectos) { conEmprendedor += 1; }

    if (conImperial == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Superado"); $("#Estado4").text("Superado"); $("#Estado5").text("Superado");
        $("#Estado6").text("Superado"); $("#Estado7").text("Superado"); $("#Estado8").text("Superado"); $("#Estado9").text("Superado"); $("#Estado10").text("Superado");
        $("#Estado11").text("Superado"); $("#Estado12").text("Superado"); $("#Estado13").text("Alcanzado");
    }
    else if (conTDMillonario == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Superado"); $("#Estado4").text("Superado"); $("#Estado5").text("Superado");
        $("#Estado6").text("Superado"); $("#Estado7").text("Superado"); $("#Estado8").text("Superado"); $("#Estado9").text("Superado"); $("#Estado10").text("Superado");
        $("#Estado11").text("Superado"); $("#Estado12").text("Alcanzado"); $("#Estado13").text("Por Calificar");
    }
    else if (conDDMillonario == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Superado"); $("#Estado4").text("Superado"); $("#Estado5").text("Superado");
        $("#Estado6").text("Superado"); $("#Estado7").text("Superado"); $("#Estado8").text("Superado"); $("#Estado9").text("Superado"); $("#Estado10").text("Superado");
        $("#Estado11").text("Alcanzado"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    }
    else if (conDMillonario == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Superado"); $("#Estado4").text("Superado"); $("#Estado5").text("Superado");
        $("#Estado6").text("Superado"); $("#Estado7").text("Superado"); $("#Estado8").text("Superado"); $("#Estado9").text("Superado"); $("#Estado10").text("Alcanzado");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    }
    else if (conTDiamante == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Superado"); $("#Estado4").text("Superado"); $("#Estado5").text("Superado");
        $("#Estado6").text("Superado"); $("#Estado7").text("Superado"); $("#Estado8").text("Superado"); $("#Estado9").text("Alcanzado"); $("#Estado10").text("Por Calificar");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    }
    else if (conDDiamante == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Superado"); $("#Estado4").text("Superado"); $("#Estado5").text("Superado");
        $("#Estado6").text("Superado"); $("#Estado7").text("Superado"); $("#Estado8").text("Alcanzado"); $("#Estado9").text("Por Calificar"); $("#Estado10").text("Por Calificar");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    }
    else if (conDiamante == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Superado"); $("#Estado4").text("Superado"); $("#Estado5").text("Superado");
        $("#Estado6").text("Superado"); $("#Estado7").text("Alcanzado"); $("#Estado8").text("Por Calificar"); $("#Estado9").text("Por Calificar"); $("#Estado10").text("Por Calificar");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    }
    else if (conRubi == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Superado"); $("#Estado4").text("Superado"); $("#Estado5").text("Superado");
        $("#Estado6").text("Alcanzado"); $("#Estado7").text("Por Calificar"); $("#Estado8").text("Por Calificar"); $("#Estado9").text("Por Calificar"); $("#Estado10").text("Por Calificar");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    }
    else if (conZafiro == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Superado"); $("#Estado4").text("Superado"); $("#Estado5").text("Alcanzado");
        $("#Estado6").text("Por Calificar"); $("#Estado7").text("Por Calificar"); $("#Estado8").text("Por Calificar"); $("#Estado9").text("Por Calificar"); $("#Estado10").text("Por Calificar");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    }
    else if (conOro == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Superado"); $("#Estado4").text("Alcanzado"); $("#Estado5").text("Por Calificar");
        $("#Estado6").text("Por Calificar"); $("#Estado7").text("Por Calificar"); $("#Estado8").text("Por Calificar"); $("#Estado9").text("Por Calificar"); $("#Estado10").text("Por Calificar");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    }
    else if (conPlata == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Superado"); $("#Estado3").text("Alcanzado"); $("#Estado4").text("Por Calificar"); $("#Estado5").text("Por Calificar");
        $("#Estado6").text("Por Calificar"); $("#Estado7").text("Por Calificar"); $("#Estado8").text("Por Calificar"); $("#Estado9").text("Por Calificar"); $("#Estado10").text("Por Calificar");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    }
    else if (conBronce == 4) {
        $("#Estado1").text("Superado"); $("#Estado2").text("Alcanzado"); $("#Estado3").text("Por Calificar"); $("#Estado4").text("Por Calificar"); $("#Estado5").text("Por Calificar");
        $("#Estado6").text("Por Calificar"); $("#Estado7").text("Por Calificar"); $("#Estado8").text("Por Calificar"); $("#Estado9").text("Por Calificar"); $("#Estado10").text("Por Calificar");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    }
    else if (conEmprendedor == 4) {
        $("#Estado1").text("Alcanzado"); $("#Estado2").text("Por Calificar"); $("#Estado3").text("Por Calificar"); $("#Estado4").text("Por Calificar"); $("#Estado5").text("Por Calificar");
        $("#Estado6").text("Por Calificar"); $("#Estado7").text("Por Calificar"); $("#Estado8").text("Por Calificar"); $("#Estado9").text("Por Calificar"); $("#Estado10").text("Por Calificar");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");
    } else {
        $("#Estado1").text("Por Calificar"); $("#Estado2").text("Por Calificar"); $("#Estado3").text("Por Calificar"); $("#Estado4").text("Por Calificar"); $("#Estado5").text("Por Calificar");
        $("#Estado6").text("Por Calificar"); $("#Estado7").text("Por Calificar"); $("#Estado8").text("Por Calificar"); $("#Estado9").text("Por Calificar"); $("#Estado10").text("Por Calificar");
        $("#Estado11").text("Por Calificar"); $("#Estado12").text("Por Calificar"); $("#Estado13").text("Por Calificar");

    }
    $('#page_loader').hide();
}























