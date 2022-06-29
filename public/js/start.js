//Replace Text function
$(function () {
  count = 0;
  wordsArray = [
    "Share your thoughts.",
    "Share your moments.",
    "Share everything.",
  ];
  setInterval(function () {
    count++;
    $("#word").fadeOut(800, function () {
      $(this)
        .text(wordsArray[count % wordsArray.length])
        .fadeIn(800);
    });
  }, 2000);
});
//End Replace Text function
