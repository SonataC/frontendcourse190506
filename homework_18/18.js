function loadDoc() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
            var info = JSON.parse(this.responseText);
            var x;
            for ( x in info){
                document.getElementById("table").innerHTML += info[x] + "<br>";
            }
        }
    };
    xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xmlhttp.send();
}


