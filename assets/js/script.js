//$("#a-div").hide();
//$("#d-div").hide();

var mode = 'add';
//var mode = 'delete';
if (mode === 'add') {
    $("#a-div").show();
} else {
    $("#d-div").show();
}

document.getElementById("#portfolio").addEventListener("click", displayPortfolio)
function displayPortfolio(){
    console.log(displayPortfolio)
    if (mode = "add"){
        $("#portfolio")[0].style.display = 'block';
    }


}