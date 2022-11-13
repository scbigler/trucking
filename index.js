function loadTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://mobile.fmcsa.dot.gov/qc/services/carriers/2789661?webKey=d4f2668246f74ef1ca188ac0347b400a6c2575bc");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var trHTML = ''; 
      const object = JSON.parse(this.responseText);
      console.log(object)
        trHTML += '<tr>'; 
        trHTML += '<td>'+object.content.carrier["dotNumber"]+'</td>';
        trHTML += '<td>'+object.content.carrier["legalName"]+'</td>';
        trHTML += '<td>'+object.content.carrier["dbaName"]+'</td>';
        trHTML += '<td>'+object.content.carrier.carrierOperation["carrierOperationDesc"]+'</td>';
        trHTML += '<td>'+object.content.carrier["totalDrivers"]+'</td>';
        trHTML += "</tr>";
        document.getElementById("mytable1").innerHTML = trHTML;
        var trHTML = '';
        trHTML += '<tr>'; 
        trHTML += '<td>'+object.content.carrier["phyStreet"]+'</td>';
        trHTML += '<td>'+object.content.carrier["phyCity"]+'</td>';
        trHTML += '<td>'+object.content.carrier["phyState"]+'</td>';
        trHTML += '<td>'+object.content.carrier["phyZipcode"]+'</td>';
        trHTML += '<td>'+object.content.carrier["totalPowerUnits"]+'</td>';
        trHTML += "</tr>";
        document.getElementById("mytable2").innerHTML = trHTML;
        var trHTML = '';
        trHTML += '<tr>'; 
        trHTML += '<td>'+object.content.carrier["vehicleOosRateNationalAverage"]+'</td>';
        trHTML += "</tr>";
        document.getElementById("mytable3").innerHTML = trHTML;

    }
  };
}

loadTable();