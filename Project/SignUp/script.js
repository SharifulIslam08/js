
var data = document.getElementById("sub");
data.addEventListener("click", catchdisplay);

function catchdisplay()
{
    var nam = document.getElementById("name").value;
    var mail = document.getElementById("gmail").value;
    var pass = document.getElementById("pass").value;
    if(!nam || !mail || !pass)
    {
        alert("fillup all rows");
        return 0;
    }
    //alert(nam);
    var row=1;
    var dis = document.getElementById("display");
    var newrow = dis.insertRow(row);

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);

    cell1.innerHTML = nam ;
    cell2.innerHTML = mail ;
    cell3.innerHTML = pass ;
    row++;
}