document.addEventListener('DOMContentLoaded', function() {
  let menuButton = document.querySelector('.header-side-menu')
  let menuList = document.querySelector('.menu-list')
  
  menuButton.onclick = function() {
    menuButton.classList.toggle('active')
    menuList.classList.toggle('active')
  }
})



  document.addEventListener('DOMContentLoaded', function(){
    let literacy = document.querySelector('.literacy')
    let functionalLiteracyLink = document.querySelector('.functional-literacy-link')
    let triangle = document.querySelector('.triangle')

    functionalLiteracyLink.onclick =  function(){
        literacy.classList.toggle('active')
        triangle.classList.toggle('active')
    }
  })

