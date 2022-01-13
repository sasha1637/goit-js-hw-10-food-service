const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const Ref = {
themaSwitchToogle: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),

}
console.log(Ref.body.getAttribute);
Ref.body.classList.add(Theme.LIGHT);

Ref.themaSwitchToogle.addEventListener('change', onToogleThema);
function onToogleThema() {
  if (Ref.themaSwitchToogle.checked) {
    Ref.body.classList.remove(Theme.LIGHT);
    Ref.body.classList.add(Theme.DARK);
    localStorage.setItem('thema', Theme.DARK);
  }
    else {
      Ref.body.classList.remove(Theme.DARK);
      Ref.body.classList.add(Theme.LIGHT);
      localStorage.setItem('thema'.Theme.LIGHT);
    }
}
localStorage.getItem('thema',Ref.body.classList() );

//    Ref.body.classList.remove(Theme.LIGHT);
    // Ref.body.classList.add(Theme.DARK) }



