const menulist = document.querySelector(".menulist")
const menuIcon = document.querySelector(".menuIcon")

menuIcon.addEventListener("click", function () {
  menulist.classList.toggle("show");
  menuIcon.classList.toggle("show");
  document.body.classList.toggle("overFlowHidden")
  document.querySelector(".menuIcon").classList.toggle("cross")
})
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show"); 

window.addEventListener("scroll", function () {
    if (window.scrollY >600) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    } 
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})

$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  centerMode: true,
  variableWidth: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const checkindate = document.getElementById("checkindate")
const toparrow = document.querySelector(".toparrow")
const bottomarrow = document.querySelector(".bottomarrow")

const currentdate = new Date(2024, 6, 29);
function updatedisplay() {
  const newdate = currentdate.getDate();
  const months = currentdate.getMonth();
  checkindate.innerHTML = `${month[months]} ${newdate} ` 
}
updatedisplay()

toparrow.addEventListener("click", function () {
  currentdate.setDate(currentdate.getDate() + 1);
  updatedisplay()
});
bottomarrow.addEventListener("click", function(){
  currentdate.setDate(currentdate.getDate() - 1);
  updatedisplay()
})

const monthname = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const datedisplay = document.getElementById("datedisplay")
const uparrow = document.querySelector(".uparrow")
const downarrow = document.querySelector(".downarrow")

const latestdate = new Date(2024, 6 , 29);
function showndisplay() {
  const today = latestdate.getDate();
  const month = latestdate.getMonth();
  datedisplay.innerHTML = `${monthname[month]} ${today} ` 
}
showndisplay()

uparrow.addEventListener("click", function () {
  latestdate.setDate(latestdate.getDate() + 1);
  showndisplay()
});
downarrow.addEventListener("click", function () {
  latestdate.setDate(latestdate.getDate() - 1);
  showndisplay()
});
//  console.log(currentdate);

function myFunction() {
  document.querySelector(".drop-menu").classList.toggle("dropshow");
}






