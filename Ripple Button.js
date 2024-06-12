const btn=document.querySelector(".btn");
const container = document.querySelector(".container");

let ripple;

btn.addEventListener("mouseenter",(e)=>{
    const left=e.clientX-e.target.getBoundingClientRect().left;
    const top=e.clientY-e.target.getBoundingClientRect().top;

    ripple=document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left=`${left}px`;
    ripple.style.top=`${top}px`;
    btn.prepend(ripple);

    container.style.backgroundColor = "black";
});

btn.addEventListener('mouseleave',()=>{
    btn.removeChild(ripple);
    container.style.backgroundColor = "rgb(29, 29, 52)";
})