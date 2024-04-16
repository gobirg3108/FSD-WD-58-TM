// Declare a variable
var myWindows;

//create a function open window
 function openNewWindow( ) {
    var url = document.getElementById("urlInput").value;
    if(url){
        myWindows=window.open(url,"_blank");
    }else{
    //alert("Enter a URL!!!") 
    appendAlert("Enter a URL!!!","success")
    }
}

// function for close wimdow
function closeWindow(){
    if(myWindows){
        myWindows.close();
        myWindows=null;
    }else{
        // alert("Window Cannot Open !");
        appendAlert("Window Cannot Open !","success")
    }
}
//function to check window

function checkWindow() {
    if(myWindows && !myWindows.closed) {
        // alert("The Windows is still open")
        appendAlert("The Windows is still open","success",)
    }else{
        // alert("windows never open")
        appendAlert("windows never open !!!","success")
    }
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)}
