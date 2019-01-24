$( document ).ready(function(){
 $(".tx").click(function() {
    var total = 0;
    $(".tx:checked").each(function() { total += +this.value; });
    $("#finalTotal").text(total);
  });
  $('#btn').click(function() {
    $(".tx:checked").each(function() {
        var idVal = $(this).attr("item-value");
        $("#selected").text(idVal);
        console.log(idVal);
    });
});

});
