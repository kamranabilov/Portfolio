// Scroll top

let mybutton = document.getElementById('myBtn');
console.log(mybutton);
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// click setting

function myFunction() {
  let setting = document.getElementById('myDIV');
  if (setting.style.display == 'none') {
    setting.style.display = 'block';
  } else {
    setting.style.display = 'none';
  }
}

// click color change

function MYFunction() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}

// PageYOFFset
window.addEventListener('scroll', function () {
  let menu_wrapper = document.querySelector('.menu');

  if (window.pageYOffset > 50) {
    menu_wrapper.classList.add('sticky');
  } else {
    menu_wrapper.classList.remove('sticky');
  }
});

// active navbar

let navbar = document.getElementById('sticky');
let btns = navbar.getElementsByClassName('btnall');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

//SideBar menu
let x = document.getElementById("myNav");
console.log(x)
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// My projects_
let btnavlink=document.querySelectorAll(".btnnav");
let content =document.querySelectorAll(".arrival_content");
for (let btn of btnavlink) {
  btn.addEventListener("click",function(){
    let active =document.querySelector(".contentshow");
    console.log(active);
    active.classList.remove("contentshow")
    this.classList.add("contentshow")
    let index=this.getAttribute("id");
    for (let div of content) {
      if(index==div.getAttribute("id")){
        div.style="display:flex";
      }
      else{
        div.style="display:none";
      }
      }
    })
}


