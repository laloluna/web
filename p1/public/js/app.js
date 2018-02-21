function showpage(idpage){
    if (idpage==0){
        $("#home").show();
        $("#customer").hide();
        $("#shop").hide();
        $("#map").hide();
        $("#youtube").hide();
    }

    if (idpage==1){
        $("#customer").show();
        $("#home").hide();
        $("#shop").hide();
        $("#map").hide();
        $("#youtube").hide();
    }

    if (idpage==2){
        $("#shop").show();
        $("#customer").hide();
        $("#home").hide();
        $("#map").hide();
        $("#youtube").hide();
    }

    if (idpage==3){
        $("#map").show();
        $("#youtube").hide();
        $("#shop").hide();
        $("#customer").hide();
        $("#home").hide();
    }

    if (idpage==4){
        $("#map").hide();
        $("#youtube").show();
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
    $("#youtube").hide();

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
        $("#youtube").show();
    }
}