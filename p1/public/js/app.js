function showpage(idpage){
    if (idpage==0){
        $("#home").show();
        $("#customer").hide();
        $("#shop").hide();
        $("#map").hide();
        $("#videos").hide();
    }

    if (idpage==1){
        $("#customer").show();
        $("#home").hide();
        $("#shop").hide();
        $("#map").hide();
        $("#videos").hide();
    }

    if (idpage==2){
        $("#shop").show();
        $("#customer").hide();
        $("#home").hide();
        $("#map").hide();
        $("#videos").hide();
    }

    if (idpage==3){
        $("#map").show();
        $("#videos").hide();
        $("#shop").hide();
        $("#customer").hide();
        $("#home").hide();
    }

    if (idpage==4){
        $("#map").hide();
        $("#videos").show();
        $("#shop").hide();
        $("#customer").hide();
        $("#home").hide();
    }
}

function showpage2(idpage){
    $("#home").hide();
    $("#customer").hide();
    $("#shop").hide();
    $("#map").hide();
    $("#videos").hide();

    if (idpage==0){
        $("#home").show();
    }

    if (idpage==1){
        $("#customer").show();
    }

    if (idpage==2){
        $("#shop").show();
    }

    if (idpage==3){
        $("#map").show();
    }

    if (idpage==4){
        $("#videos").show();
    }
}