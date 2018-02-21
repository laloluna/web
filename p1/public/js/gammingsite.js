
var myDataProductos;

function getDataProductos() {

    var my_producto = $("#id_productos").val();

    myDataProductos.forEach(function (tweet) {
        //alert(tweet.nombre);
        if (tweet.id == my_producto) {

            $('#Precio').val(tweet.price);
            $('#Descuento').val(tweet.discount);
            $('#Imagen').attr("src", tweet.image);
        }

    });
}


function getProducts() {

    var listProducts = []

    var myProduct1 = new GammingSiteProduct();
    myProduct1.id = "001";
    myProduct1.name = "Coca Cola";
    myProduct1.price = "12";
    myProduct1.image = "https://www.superama.com.mx/Content/images/products/img_large/0750105532062L.jpg";
    myProduct1.discount = 20;

    var myProduct2 = new GammingSiteProduct();
    myProduct2.id = "002";
    myProduct2.name = "Adidas NMD";
    myProduct2.price = "3000";
    myProduct2.image = "https://media.journeys.com/images/products/1_448575_ZM.JPG";
    myProduct2.discount = 30;

    var myProduct3 = new GammingSiteProduct();
    myProduct3.id = "003";
    myProduct3.name = "iPhone X";
    myProduct3.price = "28000";
    myProduct3.image = "https://media.elpalaciodehierro.com/media/catalog/product/cache/1/image/1800x1800/9df78eab33525d08d6e5fb8d27136e95/3/8/38676858_x1.jpg";
    myProduct3.discount = 50;

    listProducts.push(myProduct1);
    listProducts.push(myProduct2);
    listProducts.push(myProduct3);

    try {
        tweets = JSON.stringify(listProducts);


        tweets = JSON.parse(tweets);
        myDataProductos = tweets;

        tweets.forEach(function (tweet) {
            $('#id_productos').append($("<option></option>").attr("value", tweet.id).text(tweet.name));
        });
    }
    catch (e) {
        alert("error : " + e);
    }
}


// <!-- GammingSite -->

var currentUserGammingSite;
var i;


Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
    return this.getItem(key) && JSON.parse(this.getItem(key));
}


function HeaderGammingSite() {
    this.idMov = 0;
    this.idUser = 0;
    this.idCliente = 0;
    this.nombreCliente = '';
    this.tipoMov = 0;

    this.strSerie = '';
    this.strFolio = '';

    this.strConcepto = '';
    this.strFormaPago = '';
    this.decSubTotal = 0;

    this.decDescuento = 0;
    this.decIva = 0;
    this.decTotal = 0;

}

function GammingSiteItem() {
    this.Par = i;
    this.ProductID = 0;

    this.ProductName = '';
    this.Precio = 0;
    this.Cantidad = 0;

    this.Importe = 0;
    this.Descuento = 0;
    this.Imagen = '';

    this.PorcDesc1 = 0;
    this.PorcDesc2 = 0;
    this.PorcDesc3 = 0;
    this.Desc1 = 0;
    this.Desc2 = 0;
    this.Desc3 = 0;
    this.ImporteNeto = 0;

}


function GammingSiteProduct() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.discount = 0;
    this.image = "";
}


function initialize() {
    currentUserGammingSite = new Array();
    i = 0;
    getProducts();
}


function addCar() {

    try {

        var cantidad = document.getElementById("Cantidad").value;

        if (cantidad == "") throw "TECLEAR CANTIDAD !";
        if (isNaN(cantidad)) throw "SOLO NUMEROS";
        if (cantidad < 1) throw "DEBE SER MAYOR DE 0";

        var item = new GammingSiteItem();
        item.Par = i + 1;
        item.ProductID = $("#id_productos").val();

        item.ProductName = $("#id_productos :selected").text().toUpperCase();

        item.Precio = parseFloat(document.getElementById("Precio").value);
        item.Descuento = parseFloat(document.getElementById("Descuento").value);
        item.Imagen = document.getElementById("Imagen").src;
        item.Cantidad = cantidad;
        var importe = 0;

        importe = item.Precio * item.Cantidad * ((100 - item.Descuento) / 100);

        item.Importe = Math.round(importe * 100) / 100;

        var exist = 0;
        for (var c = currentUserGammingSite.length; c--;) {
            var it = currentUserGammingSite[c];

            if (it.ProductID == item.ProductID) {
                var Cantidad = 0;
                Cantidad = parseFloat(currentUserGammingSite[c].Cantidad);
                Cantidad += parseFloat(item.Cantidad);
                currentUserGammingSite[c].Cantidad = Cantidad;

                var importe = 0;

                importe = item.Precio * Cantidad * ((100 - item.Descuento) / 100);

                currentUserGammingSite[c].Importe = Math.round(importe * 100) / 100;

                exist = 1;
            }


        }

        if (exist == 0) {
            currentUserGammingSite[i] = item;
            i++;
        }

        sessionStorage.setObject('UserGammingSite', currentUserGammingSite);
        //alert("show");
        showScar();
        document.getElementById("Precio").innerHTML = '0';
        document.getElementById('id_productos').focus();
    }
    catch (err) {
        var msgError = "Ocurrio un error en la página.\n\n";
        msgError += "Descripción: " + err + "\n\n";
        msgError += "Click OK para continuar.\n\n";

        document.getElementById('Cantidad').value = '';
        document.getElementById('Cantidad').focus();
        alert(msgError);

    }
}



function showScar() {
    var tableCirs = document.getElementById('tableProducts');

    for (var c = tableCirs.rows.length - 1; c > 0; c--) {
        tableCirs.deleteRow(c);
    }

    var userGammingSite = sessionStorage.getObject('UserGammingSite');

    if (!userGammingSite) {
        $('car').innerHTML = '<br />UserGammingSite does NOT exist in sessionStorage.';
        return;
    }


    var totalUni = 0;
    var totImporte = 0;

    userGammingSite.forEach(function (tweet) {

        //alert("" + tweet.cir);

        var rowCir = tableCirs.insertRow(-1);

        var rowCount = tableCirs.rows.length - 1;

        var cellCantidad = rowCir.insertCell(0);
        var cellProducto = rowCir.insertCell(1);
        var cellPrecio = rowCir.insertCell(2);

        var cellImporte = rowCir.insertCell(3);
        var cellImagen = rowCir.insertCell(4);
        var cellDescuento = rowCir.insertCell(5);
        var cellAgregar = rowCir.insertCell(6);
        var cellBorrar = rowCir.insertCell(7);
        var url = "<a class=\"btn btn-outline-danger btn-block\" href=\"javascript: void();\" onclick=\"deleteItem(" + tweet.ProductID + ")\"> - </a>";
        var urlAgregar = "<a class=\"btn btn-outline-success btn-block\" href=\"javascript: void();\" onclick=\"addOneMoreItem(" + tweet.ProductID + ")\"> + </a>";

        cellCantidad.innerHTML = tweet.Cantidad;
        cellProducto.innerHTML = tweet.ProductName;
        cellPrecio.innerHTML = tweet.Precio;
        cellImagen.innerHTML = '<img src="' + tweet.Imagen + '" class="image-thumbnail" height="100" width="100">';
        cellDescuento.innerHTML = tweet.Descuento;

        cellImporte.innerHTML = tweet.Importe;
        cellAgregar.innerHTML = urlAgregar;
        cellBorrar.innerHTML = url;

        totalUni += parseFloat(tweet.Cantidad);

        totImporte += tweet.Importe;

    });

    document.getElementById('totalUnidades').innerHTML = '<b>' + parseFloat(totalUni) + '</b>';

    document.getElementById('totalImporte').innerHTML = '<b id="tImporte">' + totImporte + '</b>';

}

function deleteItem(item) {
    for (var c = currentUserGammingSite.length; c--;) {
        var it = currentUserGammingSite[c];
        if (it.ProductID == item) {
            var cantidad = 0;
            cantidad = parseFloat(currentUserGammingSite[c].Cantidad);
            cantidad--;
            if (cantidad == 0) {
                currentUserGammingSite.splice(c, 1);
                i--;
            } else {
                currentUserGammingSite[c].Cantidad = cantidad;
                var importe = 0;
                importe = it.Precio * cantidad * ((100 - it.Descuento) / 100);
                currentUserGammingSite[c].Importe = Math.round(importe * 100) / 100;
            }
        }
    }
    sessionStorage.setObject('UserGammingSite', currentUserGammingSite);
    showScar();

}

function addOneMoreItem(itemId) {
    for (var c = currentUserGammingSite.length; c--;) {
        var it = currentUserGammingSite[c];

        if (it.ProductID == itemId) {
            var Cantidad = 0;
            Cantidad = parseFloat(currentUserGammingSite[c].Cantidad) + 1;
            currentUserGammingSite[c].Cantidad = Cantidad;
            var importe = 0;
            importe = it.Precio * Cantidad * ((100 - it.Descuento) / 100);
            currentUserGammingSite[c].Importe = Math.round(importe * 100) / 100;
        }
    }
    sessionStorage.setObject('UserGammingSite', currentUserGammingSite);
    showScar();
}

function clearSessionStorage() {
    sessionStorage.clear();
}

// <!-- Gamming Site -->
