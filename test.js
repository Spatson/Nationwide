$( document ).ready(function(){
 $(".tx").click(function() {
    var total = 0;
    $(".tx:checked").each(function() { total += +this.value; });
    $("#finalTotal").text(total);
  });

});