$(document).ready(function(){
    $(this).scrollTop(0);
});
$( document ).ready(function(){
 
    $(".tx").click(function() {
    var total = 0;
    $(".tx:checked").each(function() { total += +this.value; });
    $("#subTotal").text(total);
  });
 

});
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "pass123"){
window.location = "Models.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
function codespeedy(){
    $("#finaltotes").empty();
    var text = document.getElementById("AddNotes").value;
    document.getElementById("inputText").innerHTML = text;

    var total = 0;
    $(".tx:checked").each(function() { total += +this.value; });
    var surtotal = 0;
    var surcharge = parseFloat(document.getElementById("Surcharge").value);
    surcharge = surcharge/100;
    surtotal = (total*surcharge);
    var martotal = 0;
    var markup = parseFloat(document.getElementById("Markup").value);
    markup = markup/100;
    martotal = (total*markup);
    var FinalTotal = martotal+surtotal+total;
    FinalTotal = FinalTotal.toFixed(2);
    $("#finaltotes").append(FinalTotal);


   
    $("#selected").empty();
    $(".tx:checked").each(function() {
       var idVal = $(this).attr("id");
        $("#selected").append(idVal+ "<br>");
    });
    var print_div = document.getElementById("Title");
    var image = document.getElementById("TrailerPic");
    var print_div3 = document.getElementById("Selections");
    var print_div4 = document.getElementById("AdditionalNotes");
    var print_div5 = document.getElementById("FinalTotal");
    var print_area = window.open();
    print_area.document.write(print_div.innerHTML);
    print_area.document.write(image);
    print_area.document.write(print_div3.innerHTML);
    print_area.document.write(print_div4.innerHTML);
    print_area.document.write(print_div5.innerHTML);
    //print_area.document.write(FinalTotal);
    print_area.document.close();
    print_area.focus();
    print_area.print();
    print_area.close();
}
    
        
