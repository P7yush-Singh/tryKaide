gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 2.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );




window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("Sticky", window.scrollY > 0);
})

function sideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function CloseBtn(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

const acordino = document.querySelectorAll('.Acordino');

acordino.forEach((Acordino => {
  Acordino.addEventListener('click', () => {
    Acordino.classList.toggle('active');
  })
}))

// Scroll Reveal
ScrollReveal().reveal(".A-h1,.Acordino, .A-sc, .F, .S, .plans", { delay:2, scale: 2, reset: true, rotate: {
  x: 20,
  y: 12,
  z: 0
} } );
// Image Slider 
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});