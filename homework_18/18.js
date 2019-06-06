var jsonContainer = document.getElementById('jsonContainer');


function getJson(){
    var ourRequest = new XMLHttpRequest ();
    ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
}


function renderHTML(data) {
    var htmlString = "";

    for (var i = 0; i < data.length; i++) {
        htmlString += "<h1>" + data[i].id + "<h1>";
        htmlString += "<h3>" + data[i].title + "</h3>";
        htmlString += "<tr>" + data[i].body + "</tr>" ;
    }
    jsonContainer.insertAdjacentHTML('beforebegin', htmlString);

}