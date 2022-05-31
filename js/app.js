// slicks
$(document).ready(function(){
  $("#big-slider .item-list").slick({
    autoplay:false,
    slidesToScroll:1
  })
$(".partner-list").slick({
  autoplay:false,
  infinite: false,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 2024,
      settings: {
        slidesToShow: 6,
        rows:4,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        rows:4
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
           rows:2
      }
    }
  ]
})

$("#testimonials .item-list").slick({
  autoplay:false,
  slidesToScroll:1,
  infinite:true
})

// before rounded slider change
$('#testimonials .item-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $("#testimonials .slider li").css("border","none")
  $("#testimonials .slider li")[nextSlide+1].style.border="2px solid #FFD338"
let menu = document.querySelectorAll('#testimonials .slider li img')[nextSlide+1];
let clonedMenu = menu.getAttribute("src")
var base=document.querySelectorAll('#testimonials .slider li img')[0]
base.setAttribute("src",clonedMenu)
$("#testimonials .slider li").eq(0).hide(0)
});
});
// after rounded slider change
$('#testimonials .item-list').on('afterChange',function(event, slick, currentSlide, nextSlide){
  $("#testimonials .slider li").eq(0).show(200)
})


//clicks
$(document).ready(function(){
  $(".slick-prev").click(function(){
    $(".slick-prev").css("background-color","#FFD338")
    setTimeout(() => {
    $(".slick-prev").css("background-color","transparent")
    }, 200);
  })
  
  $(".slick-next").click(function(){
    $(".slick-next").css("background-color","#FFD338")
    setTimeout(() => {
    $(".slick-next").css("background-color","transparent")
    }, 200);
  })
})

//load more
$(document).ready(function(){
    var cut=6
    if (window.innerWidth <=600 ) {
      cut=3
    }
    $("#training .items").slice(0, cut).show();
    $("#training .load").on("click", function(){
      $("#training .items:hidden").slice(0, 3).slideDown();
      if($("#training .items:hidden").length == 0) {
        $("#training .load").hide()
      }
    });

    var cutBook=8
    if (window.innerWidth <=600 ) {
      cutBook=4
    }
    $("#books .items").slice(0, cutBook).show();
    $("#books .load").on("click", function(){
      $("#books .items:hidden").slice(0, 4).slideDown();
      if($("#books .items:hidden").length == 0) {
        $("#books .load").hide()
      }
    });
})

// slider
$(document).ready(function(){
  // add default big centered li > img
  var slider= document.querySelector("#testimonials .slider ul")
  var src=document.querySelector("#testimonials .slider li img")
  var li = document.createElement('li');
  var img = document.createElement('img');
  img.setAttribute('src',src.getAttribute("src"));
  li.appendChild(img)
  slider.prepend(li);
  
  //sort image list
  var sliderCount= document.querySelectorAll("#testimonials .slider li")
  sliderCount[0].style.width="14em"
  sliderCount[0].style.height="14em"
  sliderCount[0].style.margin="-7em"
  sliderCount[1].style.border="2px solid #FFD338"


    var rot=(360 / (sliderCount.length));
    for (let i = sliderCount.length-1; i > 0; i--){
     sliderCount[i].style.transform=`rotate(${rot}deg) translate(-${12.5}em) rotate(${-rot}deg)`
      rot=rot + (360 / (sliderCount.length-1))
    }

})