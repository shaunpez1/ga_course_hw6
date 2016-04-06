$(document).ready(function(){

  // Fade in body content
  $("body").fadeIn("slow");

  // On mouseover, bg yellow on p tag
  $(document).on("mouseover", "p", function() {
		$(this)
      .css("background-color","yellow");
	});

  // Set h2 to fade to 0.25, move left 20, fadein to 0.5 opacity
  $(document).on("click","h2", function() {
    $(this)
      .animate({
        "opacity" : "0.25",
        "margin-left" : "+=20px"
        }, function() {
      // Animation complete.
      $("p")
        .fadeTo("fast", 0.5);
    });
  });

  // Style Switcher
  $(document).on("click","#switcher-default",function () {
		$("body").css("font-size","62.5%");
	});
  $(document).on("click","#switcher-large",function () {
		$("body").css("font-size","100%");
	});
	$(document).on("click","#switcher-small",function () {
		$("body").css("font-size","50%");
	});

  // On keydown move to the direction
	$(document).keydown(function(e){
	    if (e.keyCode == 37) {
	       $("#switcher").animate({"margin-left" : "-=20px"}, "fast");
	    }
	    else if (e.keyCode == 38) {
	       $("#switcher").animate({"margin-top" : "-=20px"},"fast");
	    }
	    else if (e.keyCode == 39) {
	       $("#switcher").animate({"margin-left" : "+=20px"},"fast");
	    }
	    else if (e.keyCode == 40) {
	       $("#switcher").animate({"margin-top" : "+=20px"},"fast");
	    }
	});




});
