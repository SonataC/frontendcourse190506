var PLAYER_1 = 1;
var PLAYER_2 = 2;
var players = {
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
        figure13: {name: 'w1', status: 0, playerId: PLAYER_2,},
        figure14: {name: 'w2', status: 0, playerId: PLAYER_2,},
        figure15: {name: 'w3', status: 0, playerId: PLAYER_2,},
        figure16: {name: 'w4', status: 0, playerId: PLAYER_2,},
        figure17: {name: 'w5', status: 0, playerId: PLAYER_2,},
        figure18: {name: 'w6', status: 0, playerId: PLAYER_2,},
        figure19: {name: 'w7', status: 0, playerId: PLAYER_2,},
        figure20: {name: 'w8', status: 0, playerId: PLAYER_2,},
        figure21: {name: 'w9', status: 0, playerId: PLAYER_2,},
        figure22: {name: 'w10', status: 0, playerId: PLAYER_2,},
        figure23: {name: 'w11', status: 0, playerId: PLAYER_2,},
        figure24: {name: 'w12', status: 0, playerId: PLAYER_2,},

};
var dragged = null;
var turnCounter = 0;
function getFigureObj(figureId) {
    var y;

        for ( y in players){
            if (players[y].name === figureId) {
                dragged = players[y];
                break;
            }


    }
    return dragged;
}

var figureElements = document.getElementsByClassName('round');
for (var l = 0; l < figureElements.length; l++) {
    var elem = figureElements[l];
    elem.addEventListener('dragstart', function (e) {
        console.log(this);
        getFigureObj(this.getAttribute('id'));
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
        var currenrObject = getFigureObj(figureId);
        if((currenrObject.playerId === PLAYER_1)&& (turnCounter % 2 !==0)){
            return false;
        }
        if ((currenrObject.playerId === PLAYER_2)&& (turnCounter % 2 === 0)){
            return false;
        }
        drop(e);

        console.log(turnCounter);
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

var isDropAllowed = false;
var figureId = null;
function drag(ev) {
  figureId =  ev.dataTransfer.setData("text/plain", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    if (!isDropAllowed) {
        return false;
    }
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    turnCounter++;
}
