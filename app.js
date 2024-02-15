// FAQ section list toggler 
const listToggle = document.querySelectorAll('#faq li span');

listToggle.forEach(element => {
  element.addEventListener('click', () => {
    listToggle.forEach(otherElement => {
      const otherPara = otherElement.nextElementSibling;
      if (otherPara !== element.nextElementSibling && otherPara.classList.contains('active')) {
        otherPara.classList.remove('active');
      }
    });

    const para = element.nextElementSibling;
    para.classList.toggle('active');
  });
});

// navbar appearing on scrolling effect
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navscrolltarget');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
 window.addEventListener('scroll',reveal);
 function reveal(){
  const revealsection=document.querySelectorAll('.reveal');
  revealsection.forEach((section)=>{
    let windowheight=window.innerHeight
    let revealtop=section.getBoundingClientRect().top
    let revealpoint=100;
    if(revealtop<windowheight-revealpoint){
      section.classList.add('active')
    }
    else{
      section.classList.remove('active')
    }
  })
 }
 //function to get the height of the elements
 function getTotalheightTop(element) {
  let totalHEIGHT = 0;
  let currentElement = element.previousElementSibling;

  while (currentElement) {
      const height = parseInt(window.getComputedStyle(currentElement).height);
      if (!isNaN(height)) {
          totalHEIGHT += height;
      }
      currentElement = currentElement.previousElementSibling;
  }
  return totalHEIGHT;
}
//adding animations to the work page
const card1=document.querySelector('.card-1')
const card2=document.querySelector('.card-2')
const card3=document.querySelector('.card-3')
const card4=document.querySelector('.card-4')
const card5=document.querySelector('.card-5')
window.addEventListener('scroll', function() {
  const worksectionHeight = getTotalheightTop(document.getElementById('work'))-250; 
  if (window.scrollY > worksectionHeight) {
    card1.classList.add('animate-card');
    card1.style.animation = `appear 1s both .5s`;
    card2.classList.add('animate-card');
    card2.style.animation = `appear 1s both 1s`;
    card3.classList.add('animate-card');
    card3.style.animation = `appear 1s both 1.5s`;
    card4.classList.add('animate-card');
    card4.style.animation = `appear 1s both 2s`;
    card5.classList.add('animate-card');
    card5.style.animation = `appear 1s both 2.5s`;
  }
  else {
    card1.classList.remove('animate-card');
    card2.classList.remove('animate-card');
    card3.classList.remove('animate-card');
    card4.classList.remove('animate-card');
    card5.classList.remove('animate-card');
  }
});
window.addEventListener('scroll', function() { 
  const cards=document.querySelectorAll('.service-card')
  const servicesectionHeight = getTotalheightTop(document.getElementById('service'))-400; 
  if (window.scrollY > servicesectionHeight) {
    cards.forEach((card,index)=>{
      let delay = index * 0.2 + 0.5;
      card.style.animation = `appear 1s both ${delay}s`;
      card.classList.add('animate-card');
    })
  }
  else{
    cards.forEach((card)=>{
      card.classList.remove('animate-card');
    })
  }
  })
  window.addEventListener('scroll', function() { 
    const cards=document.querySelectorAll('.work-card-1')
    const servicesectionHeight = getTotalheightTop(document.getElementById('service'))-200; 
    if (window.scrollY > servicesectionHeight) {
      cards.forEach((card,index)=>{
        let delay = index * 0.2 + 0.5;
        card.style.animation = `appear 1s both ${delay}s`;
        card.classList.add('animate-card');
      })
    }
    else{
      cards.forEach((card)=>{
        card.classList.remove('animate-card');
      })
    }
    })