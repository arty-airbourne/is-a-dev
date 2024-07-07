const queryString = window.location.search;
console.log(queryString);

function removeBanner() {
    document.getElementById("banner").style.display = "none";
    document.getElementById("menuBar").style.height = "100vh";
    document.getElementById("HomeText").href = '../index.html?hideBanner=true';
    document.getElementById("MyWorksText").href = '../myworks.html?hideBanner=true';
    document.getElementById("GithubText").href = '../github.html?hideBanner=true';
    document.getElementById("ContactText").href = '../contact.html?hideBanner=true';
    document.getElementById("sitetext").href = '../about.html?hideBanner=true';
};

window.onload = function() {
if (queryString == '?hideBanner=true') {
    removeBanner();
}
}

function closeBar() {
    if (document.getElementById("menuBar").style.Width == "75vw") {
        document.getElementById("menuBar").style.Width = "0vw";
    } else if (document.getElementById("menuBar").style.Width == "0vw") {
        console.log("button hit but not visible");
    }
}

function changeTopNav() {
    if (document.getElementById("menuBar").style.width == "0vw") {
        document.getElementById("topNav").style.width = "10vw";
        document.getElementById("topNav").style.marginLeft = "88vw";
        document.getElementById("BarImg").src = "https://dv.artyworks.xyz/imageassets/barhover.png";
    } else if (document.getElementById("menuBar").style.width == "75vw") {
        document.getElementById("topNav").style.marginLeft = "1vw";
        document.getElementById("topNav").style.width = "98vw";
        document.getElementById("BarImg").src = "https://dv.artyworks.xyz/imageassets/bar.png";
    }
}   

function changeBarIconOn() {
    document.getElementById("BarImg").src = "https://dv.artyworks.xyz/imageassets/barhover.png";
}

function changeBarIconOff() {
    document.getElementById("BarImg").src = "https://dv.artyworks.xyz/imageassets/bar.png";
}

document.addEventListener("DOMContentLoaded", function(){
    var button = document.getElementById("menuBarButtonJS");
    var menuBar = document.getElementById('menuBar');
    var topNav = document.getElementById('topNav');
    button.addEventListener('click', function(e){
        e.preventDefault();
        menuBar.classList.toggle('menubar--open');
        topNav.classList.toggle('topNav--hide');
        
        
        
    });  
});function menuBar() {
    if (document.getElementById("menuBar").style.width == "0vw") {
        document.getElementById("menuBar").style.width = "75vw";
    } else if (document.getElementById("menuBar").style.width == "75vw") {
        document.getElementById("menuBar").style.width = "0vw";
    };
}