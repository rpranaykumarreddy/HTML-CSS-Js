function my1() {
    var x = document.getElementById("hi");
    var y = "";
    var hex = y + x.value;
    var hexvalue = "0123456789ABCDEF";
    var i;
    var dec = 0;
    var len = hex.length;
    var out = 0;
    for (i = 0; i < len; i++) {
        var cha;
        var stor;
        cha = hex.charAt((len - 1) - i).toUpperCase();
        stor = hexvalue.indexOf(cha);
        dec += stor * (Math.pow(16, i));
    }

    var input = dec;
    var i = 1;
    var q;
    var r = 0;
    var out = 0;

    var oinput = dec;
    var oi = 1;
    var oq;
    var or = 0;
    var oout = 0;


    for (i = 1; q !== 0; i++) {
        q = (input - input % 2) / 2;
        r = input % 2;
        out += r * Math.pow(10, i - 1)
        input = q;
    }


    for (oi = 1; oq !== 0; oi++) {
        oq = (oinput - oinput % 8) / 8;
        or = oinput % 8;
        oout += or * Math.pow(10, oi - 1)
        oinput = oq;
    }
    document.getElementById("hexdecimal").innerHTML = hex;
    document.getElementById("decimal").innerHTML = dec;
    document.getElementById("binary").innerHTML = out;
    document.getElementById("octal").innerHTML = oout;
}