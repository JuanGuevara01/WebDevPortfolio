
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       
       console.log(this.responseText);
       
    //    document.getElementById("demo").innerHTML = this.responseText;
      } else{
          // erro message for user that API is down.
      }
    };
    xhttp.open("GET", "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=03616572a051d4ed2c8d28574af7fd9b", true);
    xhttp.send();
  }