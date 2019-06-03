var PLAYER_1 = 1;
var PLAYER_2 = 2;
var players = {
    PLAYER_1: {
        figure1: {name: 'b1', status: 0, playerId: PLAYER_1,},
        figure2: {name: 'b2', status: 0, playerId: PLAYER_1,},
        figure3: {name: 'b3', status: 0, playerId: PLAYER_1,},
        figure4: {name: 'b4', status: 0, playerId: PLAYER_1,},
        figure5: {name: 'b5', status: 0, playerId: PLAYER_1,},
        figure6: {name: 'b6', status: 0, playerId: PLAYER_1,},
        figure7: {name: 'b7', status: 0, playerId: PLAYER_1,},
        figure8: {name: 'b8', status: 0, playerId: PLAYER_1,},
        figure9: {name: 'b9', status: 0, playerId: PLAYER_1,},
        figure10: {name: 'b10', status: 0, playerId: PLAYER_1,},
        figure11: {name: 'b11', status: 0, playerId: PLAYER_1,},
        figure12: {name: 'b12', status: 0, playerId: PLAYER_1,},
    },
    PLAYER_2: {
        figure1: {name: 'w1', status: 0, playerId: PLAYER_2,},
        figure2: {name: 'w2', status: 0, playerId: PLAYER_2,},
        figure3: {name: 'w3', status: 0, playerId: PLAYER_2,},
        figure4: {name: 'w4', status: 0, playerId: PLAYER_2,},
        figure5: {name: 'w5', status: 0, playerId: PLAYER_2,},
        figure6: {name: 'w6', status: 0, playerId: PLAYER_2,},
        figure7: {name: 'w7', status: 0, playerId: PLAYER_2,},
        figure8: {name: 'w8', status: 0, playerId: PLAYER_2,},
        figure9: {name: 'w9', status: 0, playerId: PLAYER_2,},
        figure10: {name: 'w10', status: 0, playerId: PLAYER_2,},
        figure11: {name: 'w11', status: 0, playerId: PLAYER_2,},
        figure12: {name: 'w12', status: 0, playerId: PLAYER_2,},
    }
};
function getFigureObj(figureId) {
    var figureObj = null;
    for (var k = 0; k < players.PLAYER_1.length; k++) {
        var item = players.PLAYER_1[k];
        if (item.name === figureId) {
            figureObj = item;
            break;
        }
    }
    if (!figureObj) {
        for (var j = 0; j < players.PLAYER_2.length; j++) {
            var it = players.PLAYER_2[j];
            if (item.name === figureId) {
                figureObj = it;
                break;
            }
        }
    }
    return figureObj;
}
var figureElements = document.getElementsByClassName('round');
for (var l = 0; l < figureElements.length; l++) {
    var elem = figureElements[i];
    elem.addEventListener('dragstart', function (e) {
        var figureObj = getFigureObj(this.getAttribute('id')); 
        drag(e);
    });
}
var black = document.getElementsByClassName('black');
for (var i = 0; i < black.length; i++) {
    var elm = black[i];
    elm.addEventListener('dragover', function (e) {
        allowDrop(e, this.getAttribute('id'));
    });
    elm.addEventListener('drop', function (e) {
        drop(e);
    });
}
function allowDrop(ev, positionId) {
    ev.preventDefault();
    isDropAllowed = true;
    var positionElm = document.getElementById(positionId);
    var figures = positionElm.getElementsByClassName('round');
    var figureElm = null;
    if (figures.length) {
        figureElm = figures[0];
    }
    if (figureElm) {
        isDropAllowed = false;
    }
}
var dragged = null;
var isDropAllowed = false;
function drag(ev) {
    dragged = ev.target;
    ev.dataTransfer.setData("text/plain", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    if (!isDropAllowed){
        return false;
    }
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



