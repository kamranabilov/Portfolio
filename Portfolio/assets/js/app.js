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
  let settingall = document.querySelector('.switcher_control');
  let setting = document.getElementById('myDIV');
  if (setting.style.left == '0px' || settingall.style.left == '-50px') {
    settingall.style.left = '-140px';
    setting.style.left = '-90px';
  } else {
    settingall.style.left = '-50px';
    setting.style.left = 0;
  }
}

// click color change

function monoFunction(test) {
  let headercolor = document.querySelector('.dark-mode');
  console.log(window.getComputedStyle(headercolor, '::before').backgroundColor);
  if (test) {
    headercolor.className = 'main-header dark-mode dark';
  } else {
  }
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

let x = document.getElementById('myNav');
console.log(x);
function openNav() {
  document.getElementById('myNav').style.width = '106%';
}

function closeNav() {
  // let open = document.getElementById('myNav');
  // if (open.style.width==0) {
  //   open.style.width = '106%'
  // }
  document.getElementById('myNav').style.width = '0%';
}

// My projects_
let btnavlink = document.querySelectorAll('.btnnav');
let content = document.querySelectorAll('.arrival_content');
for (let btn of btnavlink) {
  btn.addEventListener('click', function () {
    let active = document.querySelector('.contentshow');
    console.log(active);
    active.classList.remove('contentshow');
    this.classList.add('contentshow');
    let index = this.getAttribute('id');
    for (let div of content) {
      if (index == div.getAttribute('id')) {
        div.style = 'display:flex';
      } else {
        div.style = 'display:none';
      }
    }
  });
}

let btnav = document.querySelectorAll('.navbtn');
let contentbody = document.querySelectorAll('.content_tab');
for (let btn of btnav) {
  btn.addEventListener('click', function () {
    let active = document.querySelector('.active_show');
    console.log(active);
    active.classList.remove('active_show');
    this.classList.add('active_show');
    let index = this.getAttribute('id');
    for (let div of contentbody) {
      if (index == div.getAttribute('id')) {
        div.style = 'display:block';
      } else {
        div.style = 'display:none';
      }
    }
  });
}
