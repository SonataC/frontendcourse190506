'use strict';
var arr = [];
var itemsIdCounter = 1;

var myEl = document.getElementById('SubmitForm');
myEl.onclick =  getFormInput;

function getFormInput () {
    var carNR = document.getElementById('CarNumber');
    var date = document.getElementById('Date');
    var distance = document.getElementById('Distance');
    var seconds = document.getElementById('Seconds');
    var tableElement = document.getElementById('myTable');
    var newRow = tableElement.insertRow(0);
    var butt = document.createElement('button');
    var btn = document.createElement('button');

    //buttons
    butt.innerHTML = "Delete";
    btn.innerHTML = "Edit";
    butt.setAttribute("class", "btn btn-danger");
    butt.setAttribute( "id", "deleteRow");
    btn.setAttribute("class", "btn btn-primary");
    btn.setAttribute("id", "editRow");
    btn.setAttribute( "data-car-item-id", "item.id");
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var carId = this.getAttribute('data-car-item-id');
        var carItem = findCarItem(carId);
        return false;
    });

    //row data
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);
    var cel7 = newRow.insertCell(6);

    var carItem = {
        id: itemsIdCounter,
        carNumber:carNR.value,
        date: date.value,
        distance: distance.value,
        duration: seconds.value,
        calcPH: function () {
            return this.distance / (this.duration / 3600)
        },
    };
    itemsIdCounter++;
    arr.push(carItem);

    cel1.innerHTML = carItem.carNumber;
    cel2.innerHTML = carItem.date;
    cel3.innerHTML = carItem.distance;
    cel4.innerHTML = carItem.duration;
    cel5.innerHTML = carItem.calcPH();
    cel6.appendChild(butt);
    cel7.appendChild(btn);
}
var tbl = $('#myTable');

    tbl.on('click', '#deleteRow', function () {
        if (confirm('Do you want to remove this?'))  {
            $(this).closest('tr').remove();
            return true;
        }else
        {
            return false;
        }
    });

    tbl.on('click', '#editRow', function open() {

    $('#exampleModal').modal('show');

});
