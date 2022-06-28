let back = document.querySelector('.back');
let nextAr = document.querySelector('.next');
let toAll = document.querySelectorAll('.arr');
let wrap = document.querySelector('.wrapper');
let count = toAll.length + 1;
let trans = 0;

let forE = (el) => {
  el.forEach(item =>{
    item.style.transform = `translateX(${trans}%)`;
  }) 
}

if(toAll.length < count) {
  wrap.style.width = toAll.length * 500 + 'px';
} 
nextAr.addEventListener('click', function() {
  nxt();
})

back.addEventListener('click', function() {
  bck();
})

function nxt() {
  trans -= 100;
  if(trans >= -(toAll.length * 100) ) {
    forE(toAll);
  };
  if(trans == -(toAll.length * 100)) {
    trans = 0;
    forE(toAll);
  }
};

function bck() {
  if(trans >= -(toAll.length * 100) && trans != 0) {
    trans += 100;
    forE(toAll);
  };
}