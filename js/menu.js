//Open Menu
function openmenu() {
    document.getElementById("open-menu-icon").style.display = "none";
    document.getElementById("close-menu-icon").style.display = "block";
    document.getElementById("menu-board").style.display = "block";
}
//Close Menu
function closemenu() {
    document.getElementById("close-menu-icon").style.display = "none";
    document.getElementById("open-menu-icon").style.display = "block";
    document.getElementById("menu-board").style.display = "none";
}

//Back To Top
window.onscroll = function backToTop() {
    if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
    ) {
        document.getElementById("btt").style.visibility = "visible";
    } else {
        document.getElementById("btt").style.visibility = "";
    }
};