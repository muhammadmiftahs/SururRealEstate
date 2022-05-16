const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY > 10){
        navbar.classList.replace('bg-transparent', 'nav-color');
    } else if (this.window.scrollY <= 10){
        navbar.classList.replace('nav-color', 'bg-transparent');
    }
});