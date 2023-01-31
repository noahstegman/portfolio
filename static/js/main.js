$(window).on('load', function() {
    setTimeout(function() {
    }, 750)
  });


$(".option").on({
    mouseenter: function() {
        $(this).find('div').text("> " + "Hello" + " <");
    },
    mouseleave: function() {
        $(this).find('div').text("Hello")
    }
})