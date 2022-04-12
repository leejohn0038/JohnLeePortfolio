$(document).ready(function () {
  
    function animateContentColor() {
      var getProductColor = $(".Product.active").attr("product-color");
  
      $("body").css({
        background: getProductColor
      });
  
      $(".From-me").css({
        background: getProductColor
      })

      $(".Title").css({
        color: getProductColor
      });
  
      $(".btn").css({
        color: '#ffffff'
      });

      $(".chapter").css({
        color: getProductColor
      });

      $(".desc button").css({
        backgroundColor: getProductColor
      });

      $(".text").css({
        color: getProductColor
      });
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
  });
