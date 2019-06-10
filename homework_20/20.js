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

    butt.innerHTML = "Delete";
    btn.innerHTML = "Change";
    butt.setAttribute("class", "btn btn-danger");
    butt.setAttribute( "id", "deleteRow");
    btn.setAttribute("class", "btn btn-primary");
    btn.setAttribute( "id", "changeRow");

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);
    var km = distance.value / 1000;
    var val = seconds.value / 3600;
    var cell7 = newRow.insertCell(6);

    cel1.innerHTML = carNR.value;
    cel2.innerHTML = date.value;
    cel3.innerHTML = distance.value;
    cel4.innerHTML = seconds.value;
    cel5.innerHTML = km / val;
    cel6.appendChild(butt);
    cell7.appendChild(btn);


}
$(document).ready(function(){
    $('#myTable').on('click', '#deleteRow', function () {
    $(this).closest('tr').remove();
    if (confirm('Do you want to remove this?')) {
    }
});});
$(document).ready(function(){
$('#myTable').on('click', '#changeRow', function open() {
    $('#exampleModal').modal('show');
});});
