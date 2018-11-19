
function ValidateFormReservation() {
    
    if (document.getElementById("name").value.length == 0 ||
    document.getElementById("date").value.length == 0 ||
    document.getElementById("time").value.length == 0 ||
    document.getElementById("people").value.length == 0 ||
    document.getElementById("phone").value.length == 0 ){
        alert("Please fill in all required fields");
    }else{ 

        if (confirm("Please confirm or cancel your reservation request!")) {
            txt = "Reservation has been accepted!";
        } else {
            txt = "Reservation was cancelled";
        }       
        document.querySelector('#afterSomething').innerHTML = txt;
    }  
}

function ValidateFormReservation2() {
    
    if (document.getElementById("name1").value.length == 0 ||
    document.getElementById("date1").value.length == 0 ||
    document.getElementById("time1").value.length == 0 ||
    document.getElementById("people1").value.length == 0 ||
    document.getElementById("phone1").value.length == 0 ){
        alert("Please fill in all required fields");
    }else{ 

        if (confirm("Please confirm or cancel your request!")) {
            txt = "Request has been accepted! Please wait for a phone call for further information";
        } else {
            txt = "Reservation was cancelled";
        }        
        document.querySelector('#afterSomething1').innerHTML = txt;
    }
}
var date = new Date();
function addChatMsg(){

    if (document.getElementById("chat-name").value.length == 0 ||
    document.getElementById("chat-txt").value.length == 0 ){
        alert("Please fill in all required fields");
    }else{ 
    var name = document.getElementById('chat-name').value;
    var msg = document.getElementById('chat-txt').value;

    

    document.querySelector('#message-box').innerHTML = name + " on " + date.toUTCString() + " writes: "+ msg;
    document.querySelector('#noChat').innerHTML = "Chat option is currently unavaliable";

}
}



var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

