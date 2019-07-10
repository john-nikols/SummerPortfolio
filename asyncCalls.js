function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
   
        console.log(this.responseText);
   
        //  document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=c46c3dbc33a029eaa2adbef7151e94bc", true);
    xhttp.send();
  } 