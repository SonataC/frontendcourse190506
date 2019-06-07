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


    for (var i = 0; i < 50; i++) {

        const th = document.createElement('th');
        const tr = document.createElement('tr');
        const tdBody = document.createElement('td');
        const tdTitle = document.createElement('td');
        const user = document.createElement('td');

        th.textContent = data[i].id;
        tdBody.textContent = data[i].title;
        tdTitle.textContent = data[i].body;
        user.textContent = data[i].userId;


        jsonContainer.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(user);
        tr.appendChild(tdBody);
        tr.appendChild(tdTitle);

    }

}