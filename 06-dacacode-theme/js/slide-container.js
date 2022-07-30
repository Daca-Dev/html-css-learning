$(document).ready(function () {
  $(".icons").slick({
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 1000,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  });
});

var slickOptions = {
  vertical: true,
  verticalSwiping: true,
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 5,
  arrows: false,
};

$(".slick").slick(slickOptions);

$(".slick")
  .on("init", function () {
    $(".slick-current").addClass("slick-animate");
  })
  .on("beforeChange", function () {
    $(".item").removeClass("slick-animate");
  })
  .on("afterChange", function () {
    $(".slick-current").addClass("slick-animate");
  });

var root = "https://jsonplaceholder.typicode.com";
$(".btn").click(function () {
  $.ajax({
    url: root + "/photos",
    method: "GET",
  }).then(function (data) {
    $(".slick").slick("unslick");
    $(".item").remove();
    // $('.slick').slick('slickRemove')
    console.log(data);
    $.each(data, function (index) {
      // console.log(data[index].title);
      $.each(this, function () {
        // console.log(data[index].title);
        $(".slick").html("<div>" + data[index].title + "</div>");
      });
    });
  });
});

// '<div class="item idn-'+data[index].id'"><img src="'+data[index].url'"/></div>'
