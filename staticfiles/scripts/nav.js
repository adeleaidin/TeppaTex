function nav_main(hrf) {

 document.write('<div class="nav-scroller">');
 document.write('<nav class="nav-scroller__items dragscroll">');

 if(hrf=="main") {
   document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Главная</a>');
 }
 else {
  document.write('<a href="/" class="nav-scroller__item">Главная</a>');
 }
  if(hrf=="dealers") {
   document.write('<a href="#" class="nav-scroller__item  nav-scroller__item_active"> Дилеры </a>');
  }
  else {
   document.write('<a href="/dealers" class="nav-scroller__item"> Дилеры </a>');
 }
  if(hrf=="models") {
    document.write(' <a href="#" class="nav-scroller__item   nav-scroller__item_active"> Модели </a>');
   }
  else {
   document.write(' <a href="/models" class="nav-scroller__item"> Модели </a>');
  }
  if(hrf=="contacts") {
          document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Контакты</a>');
       }
  else {
       document.write('<a href="/contacts" class="nav-scroller__item">Контакты</a>');
       }
   document.write('</nav>');
      document.write('</div>');
}
