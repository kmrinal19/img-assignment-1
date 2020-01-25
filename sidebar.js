function opensidebar(){
    document.getElementById("overlay").style.display="block";
    document.getElementById("sidebar").style.width="250px";
    document.getElementById("side-btn").className="fa fa-close";
    document.getElementById("btn-side").setAttribute("onclick","closesidebar()");
}
function closesidebar(){
    document.getElementById("overlay").style.display="none";
    document.getElementById("sidebar").style.width="0";
    document.getElementById("side-btn").className="fa fa-bars";
    document.getElementById("btn-side").setAttribute("onclick","opensidebar()");
}