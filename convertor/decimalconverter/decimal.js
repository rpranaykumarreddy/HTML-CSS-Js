function my1() {
    var x = document.getElementById("hI");

    var input = x.value;
    var i = 1;
    var q;
    var r = 0;
    var out = 0;

    var oinput = x.value;
    var oi = 1;
    var oq;
    var or = 0;
    var oout = 0;

    var hinput = x.value;
    var hi = 1;
    var hq;
    var hr = 0;
    var hout = "";
    var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

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

    for (hi = 1; hq !== 0; hi++) {
        hq = (hinput - hinput % 16) / 16;
        hr = hinput % 16;
        hout = hex[hr] + hout;
        hinput = hq;
    }
    document.getElementById("decimal").innerHTML = x.value;
    document.getElementById("binary").innerHTML = out;
    document.getElementById("octal").innerHTML = oout;
    document.getElementById("hexdecimal").innerHTML = hout;

}