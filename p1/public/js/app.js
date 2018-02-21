function showpage(idpage){
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