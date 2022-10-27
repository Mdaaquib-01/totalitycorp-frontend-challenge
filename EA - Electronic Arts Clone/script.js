nav = document.querySelector(".navbar");
dot = document.querySelector(".dots");
clos = document.querySelector('.close');
centerLogo = document.querySelector('.center');
width = document.documentElement.clientWidth;
document.querySelector("body").onresize=()=>{
    if(width<=500){
        dot.innerHTML=`<i class='bx bx-menu bx-md' ></i>`;
    }else{
        dot.innerHTML=`<bx bx-dots-vertical-rounded bx-md' ></i>`;
    }
}

dot.addEventListener('click',()=>{
    nav.classList.toggle('active');
   console.log(nav)
})
clos.onclick = ()=>{
  nav.classList.toggle('active')
}