document.addEventListener("scroll",()=>{
    console.log(scrollY)
    if(scrollY>550)
    {
        document.querySelector(".scroll-link").classList.remove("d-none");
        console.log("true");
    }
    else 
    {
        document.querySelector(".scroll-link").classList.add("d-none");
        
    }
})