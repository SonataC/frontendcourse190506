function allowDrop(ev) {
    // var squares = document.querySelectorAll('.black');
    // for (var i = 0; i < squares.length; i++) ;
    // {
    //     addEventListener('dragover', dragOver, false);
    //     addEventListener('drop', drop, false);
    // }
    ev.preventDefault();
}

// function dragOver(ev) {
//     ev.preventDefault();
//     ev.dataTransfer.dropEffect = 'move';
// }

// var pieces = document.querySelectorAll("div");
// for (i = 0; i < pieces.length; i++) ;{
//     var p = pieces[i];
//     p.addEventListener('dragstart', dragStart, false)
// }

function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
