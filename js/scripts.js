$(document).ready(function() {
  $("#btnGiraffe").click(function() {
    $("#giraffe").show();
    $("#python").hide();
    $("#penguin").hide();
  });

  $("#btnPython").click(function() {
    $("#python").show();
    $("#giraffe").hide();
    $("#penguin").hide();
  });

  $("#btnPenguin").click(function() {
    $("#penguin").show();
    $("#python").hide();
    $("#giraffe").hide();
  });
});
