function toggleNav(){
 document.body.classList.toggle("nav-open"); 
}

document.querySelector("nav-close").removeEventListener("click", () =>{
toggleNav();
});