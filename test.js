$(document).ready(function () {
    $(this).scrollTop(0);
  });
  $(document).ready(function () {
    $(".tx").click(function () {
      var total = 0;
      $(".tx:checked").each(function () {
        total += +this.value;
      });
      $("#subTotal").text(total);
    });
  });
  var attempt = 3; // Variable to count number of attempts.
  // Below function Executes on click of login button.
  function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "pass123") {
      window.location = "Models.html"; // Redirecting to other page.
      return false;
    } else {
      attempt--; // Decrementing by one.
      alert("You have left " + attempt + " attempt;");
      // Disabling fields after 3 attempts.
      if (attempt == 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
      }
    }
  }
  
  function codespeedy() {
    $("#finaltotes").empty();
    var text = document.getElementById("AddNotes").value;
    document.getElementById("inputText").innerHTML = text;
  
    var total = 0;
    $(".tx:checked").each(function () {
      total += +this.value;
    });
    var surtotal = 0;
    var surcharge = parseFloat(document.getElementById("Surcharge").value);
    surcharge = surcharge / 100;
    surtotal = total * surcharge;
    var martotal = 0;
    var markup = parseFloat(document.getElementById("Markup").value);
    markup = markup / 100;
    martotal = total * markup;
    var FinalTotal = martotal + surtotal + total;
    FinalTotal = FinalTotal.toFixed(2);
    $("#finaltotes").append(FinalTotal);
  
    $("#selected").empty();
    $(".tx:checked").each(function () {
      var idVal = $(this).attr("id");
      $("#selected").append(idVal + "<br>");
    });
    var print_div = document.getElementById("Title");
    var imageID = $("#TrailerPic").attr('src')
    var image = `<img src="${imageID}" alt="FD1 width="400" height="200">`
    var StandFID = $("#StandardFeatures").attr('src')
    var image1 = `<img src="${StandFID}" alt="sf" width="550" height="250">`
    var print_div3 = document.getElementById("Selections");
    var print_div4 = document.getElementById("AdditionalNotes");
    var print_div5 = document.getElementById("FinalTotal");
    var pwa = window.open();
    pwa.document.write(print_div.innerHTML);
    pwa.document.write( );
    pwa.document.write(image);
    pwa.document.write( );
    pwa.document.write(image1);
    pwa.document.write(print_div3.innerHTML);
    pwa.document.write(print_div4.innerHTML);
    pwa.document.write(print_div5.innerHTML);
    var printPreview = function () {
      pwa.print()
    }
    setTimeout(printPreview, 10);
  }
    
        
