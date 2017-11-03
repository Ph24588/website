$(document).ready(function() {
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene);

  var sceneTwo = document.getElementById("sceneTwo");
  var parallaxInstance = new Parallax(sceneTwo);

  var scrollValue = $(window).scrollTop();

  $('.fakeBottle').click(function() {
    $("html, body").animate({
      scrollTop: 1600
    }, 2800, "swing");
    // return false;
    setTimeout(function() {
      $("#oceanAudio").removeAttr("autoplay loop");
      document.getElementById("oceanAudio").pause();
      document.getElementById("underAudio").play();
      document.getElementById("splashAudio").play().animate({
        volume: "0"
      }, 1000);
    }, 700);
  });


  $(document).scroll(function() {
    var scrollValue = $(window).scrollTop();
    console.log(scrollValue);
    if ((scrollValue <= 250) || (scrollValue >= 1598 && scrollValue <= 3659)) {
      $(".mouse").fadeIn('slow');
    } else {
      $(".mouse").fadeOut('slow');
    };
    if (scrollValue >= 7565) {
      $("html, body").css({
        height: "100%",
        overflow: "hidden"
      });
    };
  });

  var decRate = .7;

  var progressBar = $('.fillBar'); //sets bar width to 0
  var width = 0;
  progressBar.width(width); //puts width variable into bar width

  var isIntervalDead = false;
  var interval = setInterval(function() { //creates loop, sets fish to plastic, makes bar increment
    if (width > 100) {
      clearInterval(interval); //kills loop if width is greater than or equal to 100
      isIntervalDead = true;

      $("#fishGotAway").delay(1000).animate({
        opacity: "1"
      }, 1000);

      return;
    }

    var barOpacity = $(".progressBar").css("opacity");
    if (barOpacity == 1) {
      width += .1 //...that adds .1px width...
    };

    progressBar.css('width', width + '%'); //...and then inserts it into fillBar CSS as a percentage.

    if (width >= 100) {
      $("#yellowFish").delay(500).animate({
        left: "-=900"
      }, 1000);
      $("#navyFish").delay(2000).animate({
        left: "-=900"
      }, 1200);
      $("#stripeFish").delay(1000).animate({
        left: "-=900"
      }, 1400);
      $("#redFish").delay(1500).animate({
        left: "-=1000"
      }, 1600);
      $("#greenFish").delay(1000).animate({
        left: "+=1000"
      }, 1200);
      $("#cookieFish").delay(500).animate({
        left: "+=1000"
      }, 1400);
      setTimeout(function() {
        $("#yellowFish").hide();
        $("#navyFish").hide();
        $("#stripeFish").hide();
        $("#redFish").hide();
        $("#greenFish").hide();
        $("#cookieFish").hide();
      }, 4000);
    };

    var yellowFishLoc = $("#yellowFish").position(); //Makes the yellow fish go back to the plastic pt1

    if (scrollValue >= 3660 && yellowFishLoc.left <= 750) {
      $("#yellowFish").css("left", yellowFishLoc.left--);
    } else if (yellowFishLoc.left === 750) {
      return;
    }

    var navyFishLoc = $("#navyFish").position(); //Makes the navy fish go back to the plastic pt1

    if (scrollValue >= 3660 && navyFishLoc.left !== 725) {
      $("#navyFish").css("left", navyFishLoc.left--);
      // console.log("yo");
    } else if (navyFishLoc.left === 725) {
      return;
    }

    var stripeFishLoc = $("#stripeFish").position(); //Makes the stripe fish go back to the plastic pt1

    if (scrollValue >= 3660 && stripeFishLoc.left !== 650) {
      $("#stripeFish").css("left", stripeFishLoc.left--);
    } else if (stripeFishLoc.left === 650) {
      return;
    }

    var redFishLoc = $("#redFish").position(); //Makes the red fish go back to the plastic pt1

    if (scrollValue >= 3660 && redFishLoc.left !== 750) {
      $("#redFish").css("left", redFishLoc.left--);
    } else if (redFishLoc.left === 750) {
      return;
    }

    var greenFishLoc = $("#greenFish").position(); //Makes the green fish go back to the plastic pt1

    if (scrollValue >= 3660 && greenFishLoc.left !== 525) {
      $("#greenFish").css("left", greenFishLoc.left++);
    } else if (greenFishLoc.left === 525) {
      return;
    }

    var cookieFishLoc = $("#cookieFish").position(); //Makes the cookie fish go back to the plastic pt1

    if (scrollValue >= 3660 && cookieFishLoc.left !== 575) {
      $("#cookieFish").css("left", cookieFishLoc.left++);
    } else if (cookieFishLoc.left === 575) {
      return;
    }

    var blueFishLoc = $("#blueFish").position(); //Makes the blue fish go back to the plastic pt1

    if (scrollValue >= 3660 && blueFishLoc.left !== 525) {
      $("#blueFish").css("left", blueFishLoc.left++);
    } else if (blueFishLoc.left === 525) {
      return;
    }

  }, 10);

  var fishPlasticGravity = setInterval(function() { //Makes the blue fish go back to the plastic pt2
    var scrollValue = $(window).scrollTop();

    var yellowFishLoc = $("#yellowFish").position();
    if (scrollValue >= 3660 && yellowFishLoc.left >= 750) {
      $("#yellowFish").css("left", yellowFishLoc.left - .15);
    }

    var navyFishLoc = $("#navyFish").position();
    if (scrollValue >= 3660 && navyFishLoc.left >= 725) {
      $("#navyFish").css("left", navyFishLoc.left - .15);
    }

    var stripeFishLoc = $("#stripeFish").position();
    if (scrollValue >= 3660 && stripeFishLoc.left >= 650) {
      $("#stripeFish").css("left", stripeFishLoc.left - .15);
    }

    var redFishLoc = $("#redFish").position();
    if (scrollValue >= 3660 && redFishLoc.left >= 750) {
      $("#redFish").css("left", redFishLoc.left - .15);
    }

    var greenFishLoc = $("#greenFish").position();
    if (scrollValue >= 3660 && greenFishLoc.left <= 525) {
      $("#greenFish").css("left", greenFishLoc.left + .15);
    }

    var blueFishLoc = $("#blueFish").position();
    if (scrollValue >= 3660 && blueFishLoc.left <= 525) {
      $("#blueFish").css("left", blueFishLoc.left + .15);
    }

    var cookieFishLoc = $("#cookieFish").position();
    if (scrollValue >= 3660 && cookieFishLoc.left <= 575) {
      $("#cookieFish").css("left", cookieFishLoc.left + .15);
    }
  }, 1);

  $(window).on("keyup", function(event) {
    if (isIntervalDead) return;
    if (event.which === 37) {
      width -= decRate;
      console.log(decRate);
      $(".leftFish").animate({
        left: "-=5px"
      }, 1);
      $(".rightFish").animate({
        left: "+=5px"
      }, 1);
    }
  });

  $("#micro_1").hide();
  $("#micro_2").hide();
  $("#micro_3").hide();

  function microbits() {
    if (width >= 0 && width <= 33) {
      $("#micro_1").show();
    } else if (width >= 34 && width <= 67) {
      $("#micro_1").hide();
      $("#micro_2").show();
    } else if (width >= 68 && width < 100) {
      $("#micro_2").hide();
      $("#micro_3").show();
    } else {
      $("#micro_3").hide();
    }
  }

  setInterval(microbits, 1000)

  $(".expoNurdles").hide();
  $(".expoShards").hide();
  $(".expoFleece").hide();

  function blueFishClickActive() {
    if (width >= 100) {
      $("#blueFish").css("cursor", "pointer").unbind().click(function() {
        $(".spotlight").delay(1000).animate({
          opacity: ".85"
        }).css({
          "z-index": "20"
        });

        $(".dark").animate({
          opacity: "1"
        }, 1000).css({
          "z-index": "20"
        }).delay(1000).animate({
          opacity: "0"
        }, 1000)


        $("#sceneTwo").delay(1000).animate({
          opacity: "1"
        });

        $("#fishGotAway").show();

        hasEnteredFish = true;

        $("#expo-Inside").delay(2000).animate({
          opacity: "1"
        }, 1000).delay(2000).animate({
          opacity: "0"
        }, 1000);

        setTimeout(function() {
          $("#expo-Inside").hide();
        }, 6000);

        clearInterval(blueFishClickActive);

      });
    };
  }

  setInterval(blueFishClickActive, 1000)

  $(".spotlight").on("mousemove", function(e) {
    $(this).css("left", e.clientX - 100)
      .css("top", e.clientY - 100);
  });

  var hasEnteredFish = false;

  $("body").on("mousemove", function(e) {
    if (hasEnteredFish == false) {
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    if (x >= 184 && x <= 560 && y >= 160 && y <= 321 && $("#nurdles").css("display") != "none") {
      $(".expoNurdles").fadeIn();
    } else {
      $(".expoNurdles").fadeOut();
    };

    if (x >= 697 && x <= 1288 && y >= 694 && y <= 857 && $("#shards").css("display") != "none") {
      $(".expoShards").fadeIn();
    } else {
      $(".expoShards").fadeOut();
    };

    if (x >= 111 && x <= 516 && y >= 631 && y <= 861 && $("#fleece").css("display") != "none") {
      $(".expoFleece").fadeIn();
    } else {
      $(".expoFleece").fadeOut();
    };

  });

  $("body").on("click", function(e) {
    if (hasEnteredFish == false) {
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    if (x >= 184 && x <= 560 && y >= 160 && y <= 321) {
      $("#nurdles").fadeOut();
      $(".expoNurdles").fadeOut();
    };

    if (x >= 697 && x <= 1288 && y >= 694 && y <= 857) {
      $("#shards").fadeOut();
      $(".expoShards").fadeOut();
    };

    if (x >= 111 && x <= 516 && y >= 631 && y <= 861) {
      $("#fleece").fadeOut();
      $(".expoFleece").fadeOut();
    };
  });

  $(".exit").css("opacity", "0").hide();
  $(".theresMore").hide();
  var runExitFish = true;

  function exitFish() {

    var nurdlesOpac = $("#nurdles").css("display");
    var shardsOpac = $("#shards").css("display");
    var fleeceOpac = $("#fleece").css("display");

    if (nurdlesOpac == "none" && shardsOpac == "none" && fleeceOpac == "none" && runExitFish) {

      runExitFish = false;

      $(".exit").show().css("z-index", "30");

      $(".exit").animate({
        opacity: "1"
      }, 1000);

      $(".exit").css("cursor", "pointer").unbind().click(function() {

        $(".dark").animate({
          opacity: "1"
        }, 1000).css({
          "z-index": "20"
        }).delay(1000).animate({
          opacity: "0"
        }, 1000)

        $(".exit").hide();

        setTimeout(function() {
          $(".spotlight").hide();
          $("#sceneTwo").hide();
        }, 1000);

        $(".progressBar").hide();
        $("#blueFish").hide();

        $(".theresMore").show();

        hasEnteredFish = false;

        $("#fishGotAway").hide();

        $(".mouse").fadeIn('slow');

        clearInterval(exitFish);

      });
    };
  }

  setInterval(exitFish, 500)


  $(".theresMore").css("cursor", "pointer").unbind().on("click", function() {
    $('html, body').animate({
      scrollTop: $(".seafloor").offset().top
    }, 3000);

    $("#finalExpo_1").show().delay(3000).animate({
      opacity: "1"
    }, 1000);

    $(".theresMore").animate({
      opacity: "0"
    }, 1000);

    setTimeout(function() {
      $(".theresMore").hide();
    }, 1000);
  });

  $(".buttonGroup").hide();

  $("#finalExpo_1").on("click", function() {
    console.log("yee");
    $(this).fadeOut();
    setTimeout(function() {
      $("#finalExpo_1").hide();
    }, 1000);
    $("#finalExpo_2").show().delay(1000).animate({
      opacity: "1"
    }, 1000);
  });

  $("#finalExpo_2").on("click", function() {
    $(this).fadeOut();
    $("#finalExpo_3").show().delay(1000).animate({
      opacity: "1"
    }, 1000);
  });

  $("#finalExpo_3").on("click", function() {
    $(this).fadeOut();
    $("#finalExpo_4").show().delay(1000).animate({
      opacity: "1"
    }, 1000);
  });

  $("#finalExpo_4").on("click", function() {
    $(this).fadeOut();
    $("#finalExpo_5").show().delay(1000).animate({
      opacity: "1"
    }, 1000);
    $(".buttonGroup").show().delay(1000).animate({
      opacity: "1"
    }, 1000);
  });

  function scrollIndicator() {
    $(".ball").fadeIn(350)
      .animate({
          top: "+=40"
        }, 450,
        "swing"
      )
      .fadeOut(500)
      .animate({
        top: "-=40"
      });
  }

  setInterval(scrollIndicator, 500)

  function bottleBobbing() {
    $(".bottle, .fakeBottle").animate({
        top: "-=40"
      }, 2000)
      .animate({
        top: "+=40"
      }, 2000);
  }
  setInterval(bottleBobbing, 0)

  function pollutionBobbing() {
    $(".pollution").animate({
        top: "-=20"
      }, 3000)
      .animate({
        top: "+=20"
      }, 3000);
  }
  setInterval(pollutionBobbing, 0)

  function frontWave() {
    $(".frontWave").animate({
        left: "-=40"
      }, 2000)
      .animate({
        left: "+=40"
      }, 2000);
  }

  setInterval(frontWave, 0)

  function midWave() {
    $(".midWave").animate({
        left: "-=50"
      }, 2250)
      .animate({
        left: "+=50"
      }, 2250);
  }

  setInterval(midWave, 0)

  function backWave() {
    $(".backWave").animate({
        left: "-=60"
      }, 2500)
      .animate({
        left: "+=60"
      }, 2500);
  }

  setInterval(backWave, 0)

});