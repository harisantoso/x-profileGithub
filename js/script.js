// event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  // ambil isi href(harf disini adl tujuan)
  var tujuan = $(this).attr("href");
  // tangkap elemen yg bersangkutan
  var elemenTujuan = $(tujuan);

  //   pindahkan scroll animasi
  $("html,body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1500,
    "swing"
  );

  e.preventDefault();

  //   pindahkan scroll
  //   $("body").scrollTtop(elemenTujuan.offset().top);
  //   console.log(elemenTujuan.scrollTtop());
});

// parallax

// about
$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // jumbotorn
  // gambar
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  // h1
  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  // paragrap
  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });

  // portfolio
  if (wScroll > $(".certificate").offset().top - 400) {
    $(".certificate .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".certificate .thumbnail").eq(i).addClass("muncul");
      }, 300 * i);
    });
  }
});
