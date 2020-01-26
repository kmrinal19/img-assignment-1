window.addEventListener("scroll",function(){
    if(window.scrollY!=0){
        document.getElementById("navbar").className="navbar navbar-shadow";
    }
    else{
        document.getElementById("navbar").className="navbar";
    }
});