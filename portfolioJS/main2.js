$(document).ready(function () {
  
    function animateContentColor() {
      var getProductColor = $(".Product.active").attr("product-color");
      var styleObj = {
        "background" : getProductColor,
        "background-clip" : "text",
        "-webkit-background-clip" : "text",
        "color" : "transparent"
      }

      $("body").css({
        background: getProductColor,
      });
      
      $(".Product").css(styleObj);
      
  
    }
  
    var productItem = $(".Product"),
      productCurrentItem = productItem.filter(".active");
    var backItem = $(".Back"),
    backCurrentItem = backItem.filter(".active");
    $("#next").on("click", function (e) {
      e.preventDefault();
  
      var nextItem = productCurrentItem.next();
      var backNextItem = backCurrentItem.next();
      productCurrentItem.removeClass("active");
      backCurrentItem.removeClass("active");
  
      if (nextItem.length && backNextItem.length) {
        productCurrentItem = nextItem.addClass("active");
        backCurrentItem = backNextItem.addClass("active");
      } else {
        productCurrentItem = productItem.first().addClass("active");
        backCurrentItem = backItem.first().addClass("active");
      }
  
      // calcProductHeight();
      animateContentColor();
    });

  
    var productItem = $(".Product"),
    productCurrentItem = productItem.filter(".active");
    var backItem = $(".Back"),
    backCurrentItem = backItem.filter(".active");
    $("#prev").on("click", function (e) {
        e.preventDefault();

        var prevItem = productCurrentItem.prev();
        var backPrevItem = backCurrentItem.prev();
        productCurrentItem.removeClass("active");
        backCurrentItem.removeClass("active");

        if (prevItem.length && backPrevItem.length) {
        productCurrentItem = prevItem.addClass("active");
        backCurrentItem = backPrevItem.addClass("active");
        } else {
        productCurrentItem = productItem.last().addClass("active");
        backCurrentItem = backItem.last().addClass("active");
        }

        // calcProductHeight();
        animateContentColor();
    });
  
    // Ripple
    $("[ripple]").on("click", function (e) {
      var rippleDiv = $('<div class="ripple" />'),
        rippleSize = 60,
        rippleOffset = $(this).offset(),
        rippleY = e.pageY - rippleOffset.top,
        rippleX = e.pageX - rippleOffset.left,
        ripple = $(".ripple");
  
      rippleDiv
        .css({
          top: rippleY - rippleSize / 2,
          left: rippleX - rippleSize / 2,
          background: $(this).attr("ripple-color")
        })
        .appendTo($(this));
  
      window.setTimeout(function () {
        rippleDiv.remove();
      }, 1900);
    });
    skillbar($('.button-63.active'));
  });

let lang;

$('.button-63').each(function(index, btn) {
  $(btn).click(function() {
    skillbar(btn);
  })
  
}) 


function makePer() {
  var multiply = 4;
  

  $.each( lang, function( language, pourcent) {
    var delay = 700;
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;

  });
}
function removePer(tab) {
  $(`span[name=${tab}]`).each(function(i, span) {
    $(span).html('');
  })
}

function skillbar(btn) {
  var tab;
    if($(btn).hasClass("back-end")) {
      tab = 'back-end';
      lang = {
        "java" : "100%",
        "spring" : "90%",
        "tomcat" : "70%",
        "aws" : "55%",
        "ajax" : "65%"
      };
    } else if ($(btn).hasClass("front-end"))  {
      tab = 'front-end';
      lang = {
        "html" : "80%",
        "css" : "70%",
        "javascript" : "90%",
        "bootstrap" : "65%",
      };
    } else {
      tab = 'etc';
      lang = {
        "oracle" : "80%",
        "github" : "70%",
        "vscode" : "75%"
      }
    }
    removePer(tab);
    makePer();
}