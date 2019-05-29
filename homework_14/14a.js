var type = "";

function triangle(a, b, c) {
    if(((a < b + c )&& (b < c + a) && (c < b + a)) && (a >0) && (b > 0) && (c > 0)){
        if ((a === b) && (b === c)&& (a === c)){
            type =  "Lygiakraštis";
        } else {
            if (a === b || b === c || c === a){
                type = "Lygiašonis";
            } else {
                if ((a*a + b*b === c*c) || (b*b + c*c === a*a) || (c*c + a*a === b*b)){
                    type =  "Statusis";
                } else {
                    type = "Įvairiakraštis";
                }
            }
        }
    } else {
        type= "Ne trikampis";
    }
    return type;
}

function triArea(a, b, c) {
    var s = Math.sqrt(((a + b + c)/2) * ((a + b + c)/2 - a) * ((a + b + c)/2 - b) * ((a + b + c)/2 - c));
    if (type === "Ne trikampis") {
        s = 0;
    }
    return s;
}

function calc() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    document.getElementById("type").innerHTML = triangle(a, b, c);
    document.getElementById("answ").innerHTML = triArea(a, b, c);
}