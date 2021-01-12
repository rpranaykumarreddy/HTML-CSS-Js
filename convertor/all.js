//function for all convertor
function f1() {
    var type;
    type = document.getElementById("inputtype").value;
    if (type == "Decimal") {
        var xyz;
        xyz = decf1();
    } else if (type == "Binary") {
        var xyz;
        xyz = binf1();
    } else if (type == "Octal") {
        var xyz;
        xyz = octf1();
    } else if (type == "Hexdecimal") {
        var xyz;
        xyz = hexf1();
    }
}

//declaration and intialization of HTML DOM
var giv = document.getElementById("given");
var ret1 = document.getElementById("ret1");
var ret2 = document.getElementById("ret2");
var ret3 = document.getElementById("ret3");

//function for decimal convertor
function decf1() {
    var inp = document.getElementById("hi").value;
    giv.innerHTML = "Decimal : " + inp;
    ret1.innerHTML = "Binary : " + d2b(inp);
    ret2.innerHTML = "Octal : " + d2o(inp);
    ret3.innerHTML = "Hexdecimal : " + d2h(inp);
}

//function for binary convertor
function binf1() {
    var inp = document.getElementById("hi").value;
    var dec = b2d(inp);
    ret1.innerHTML = "Decimal : " + dec;
    giv.innerHTML = "Binary : " + inp;
    ret2.innerHTML = "Octal : " + d2o(dec);
    ret3.innerHTML = "Hexdecimal : " + d2h(dec);
}

//function for octal convertor
function octf1() {
    var inp = document.getElementById("hi").value;
    var dec = o2d(inp);
    ret1.innerHTML = "Decimal : " + dec;
    ret2.innerHTML = "Binary : " + d2b(dec);
    giv.innerHTML = "Octal : " + inp;
    ret3.innerHTML = "Hexdecimal : " + d2h(dec);
}

//function for hexdecimal convertor
function hexf1() {
    var inp = document.getElementById("hi").value;
    var dec = h2d(inp);
    ret1.innerHTML = "Decimal : " + dec;
    ret2.innerHTML = "Binary : " + d2b(dec);
    ret3.innerHTML = "Octal : " + d2o(dec);
    giv.innerHTML = "Hexdecimal : " + inp;
}

//function for decimal to binary
function d2b(dec) {
    var q;
    var r = 0;
    var db = 0;
    var i = 1;

    for (i = 1; q !== 0; i++) {
        q = (dec - dec % 2) / 2;
        r = dec % 2;
        db += r * Math.pow(10, i - 1)
        dec = q;
    }
    return db;
}


//function for decimal to octal
function d2o(oct) {
    var q;
    var r = 0;
    var ot = 0;
    var i = 1;

    for (i = 1; q !== 0; i++) {
        q = (oct - oct % 8) / 8;
        r = oct % 8;
        ot += r * Math.pow(10, i - 1)
        oct = q;
    }
    return ot;
}


//function for decimal to hexdecimal    
function d2h(hex) {
    var q;
    var r = 0;
    var dh = "";
    var val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    for (i = 1; q !== 0; i++) {
        q = (hex - hex % 16) / 16;
        r = hex % 16;
        dh = val[r] + dh;
        hex = q;
    }
    return dh;
}

//function for binary to decimal
function b2d(bin) {
    var binvalue = "01";
    var i;
    var bd = 0;
    var len = bin.length;
    for (i = 0; i < len; i++) {
        var cha;
        var stor;
        cha = bin.charAt((len - 1) - i).toUpperCase();
        stor = binvalue.indexOf(cha);
        bd += stor * (Math.pow(2, i));
    }
    return bd;
}

//function for octal to decimal
function o2d(oct) {
    var octvalue = "01234567";
    var i;
    var od = 0;
    var len = oct.length;
    for (i = 0; i < len; i++) {
        var cha;
        var stor;
        cha = oct.charAt((len - 1) - i).toUpperCase();
        stor = octvalue.indexOf(cha);
        od += stor * (Math.pow(8, i));
    }
    return od;
}

//function for hexdecimal to decimal
function h2d(hex) {
    var hexvalue = "0123456789ABCDEF";
    var i;
    var ht = 0;
    var len = hex.length;
    for (i = 0; i < len; i++) {
        var cha;
        var stor;
        cha = hex.charAt((len - 1) - i).toUpperCase();
        stor = hexvalue.indexOf(cha);
        ht += stor * (Math.pow(16, i));
    }
    return ht;
}