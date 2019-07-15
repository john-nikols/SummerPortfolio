let url ="http://api.openweathermap.org/data/2.5/forecast?q=Salt+Lake+City,usa&appid=c46c3dbc33a029eaa2adbef7151e94bc";

function loadDoc() { 
    
  //---------------------
  // This is where you would get references to all 
  // HTML elements that you want to update with new data 
  // based on the results of the asynchronous API call you make below 
  //---------------------
  
  var xhttp = new XMLHttpRequest(); 
  xhttp.onreadystatechange = function() { 
      if (this.readyState == 4 && this.status == 200) { 
          
          //---------------------
          console.log("Successful..."); 
          //console.log(this.response); 
          // This is where you would update the HTML elements above 
          // with the data you pull from the API call response 
          // document.getElementById("demo").innerHTML = this.responseText; 
          //---------------------
         


       let dayData = JSON.parse(this.response);
      // console.log(dayData.list);  
       //console.log(dayData.list.length);  
       
       for(let counter = 0; counter < dayData.list.length; counter++){
        let currentDay = dayData.list[counter]; 
        console.log(currentDay);

       } 
       


      } else { 
          
          //---------------------
          console.log("failure...") 
          // error message for user that API is down
          //---------------------
          
      }
  };
  xhttp.open("GET", url, true); 
  xhttp.send(); 
}
      
//---------------------
// Make sure you call the function to begin the request for information 
// In the weather widget, you will want to call this function using the 
// onClick event of the form submit button 
loadDoc(); 
//---------------------