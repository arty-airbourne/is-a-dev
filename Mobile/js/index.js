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
}

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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loop8() {
    document.getElementsByClassName("a6")[0].style.display = "block";
    document.getElementsByClassName("a8")[0].style.right = "156vh";
    document.getElementsByClassName("a1")[0].style.right = "104vh";
    document.getElementsByClassName("a2")[0].style.right = "52vh";
    document.getElementsByClassName("a3")[0].style.right = "0px";
    document.getElementsByClassName("a4")[0].style.right = "-52vh";
    document.getElementsByClassName("a5")[0].style.right = "-104vh";
    document.getElementsByClassName("a6")[0].style.right = "-156vh";
    document.getElementsByClassName("a7")[0].style.display = "none";
    document.getElementsByClassName("a7")[0].style.right = "-208vh";
}

function loop7() {
    document.getElementsByClassName("a5")[0].style.display = "block";
    document.getElementsByClassName("a7")[0].style.right = "156vh";
    document.getElementsByClassName("a8")[0].style.right = "104vh";
    document.getElementsByClassName("a1")[0].style.right = "52vh";
    document.getElementsByClassName("a2")[0].style.right = "0px";
    document.getElementsByClassName("a3")[0].style.right = "-52vh";
    document.getElementsByClassName("a4")[0].style.right = "-104vh";
    document.getElementsByClassName("a5")[0].style.right = "-156vh";
    document.getElementsByClassName("a6")[0].style.display = "none";
    document.getElementsByClassName("a6")[0].style.right = "-208vh";
}

function loop6() {
    document.getElementsByClassName("a4")[0].style.display = "block";
    document.getElementsByClassName("a6")[0].style.right = "156vh";
    document.getElementsByClassName("a7")[0].style.right = "104vh";
    document.getElementsByClassName("a8")[0].style.right = "52vh";
    document.getElementsByClassName("a1")[0].style.right = "0px";
    document.getElementsByClassName("a2")[0].style.right = "-52vh";
    document.getElementsByClassName("a3")[0].style.right = "-104vh";
    document.getElementsByClassName("a4")[0].style.right = "-156vh";
    document.getElementsByClassName("a5")[0].style.display = "none";
    document.getElementsByClassName("a5")[0].style.right = "-208vh";
}

function loop5() {
    document.getElementsByClassName("a3")[0].style.display = "block";
    document.getElementsByClassName("a5")[0].style.right = "156vh";
    document.getElementsByClassName("a6")[0].style.right = "104vh";
    document.getElementsByClassName("a7")[0].style.right = "52vh";
    document.getElementsByClassName("a8")[0].style.right = "0px";
    document.getElementsByClassName("a1")[0].style.right = "-52vh";
    document.getElementsByClassName("a2")[0].style.right = "-104vh";
    document.getElementsByClassName("a3")[0].style.right = "-156vh";
    document.getElementsByClassName("a4")[0].style.display = "none";
    document.getElementsByClassName("a4")[0].style.right = "-208vh";
}

function loop4() {
    document.getElementsByClassName("a2")[0].style.display = "block";
    document.getElementsByClassName("a4")[0].style.right = "156vh";
    document.getElementsByClassName("a5")[0].style.right = "104vh";
    document.getElementsByClassName("a6")[0].style.right = "52vh";
    document.getElementsByClassName("a7")[0].style.right = "0px";
    document.getElementsByClassName("a8")[0].style.right = "-52vh";
    document.getElementsByClassName("a1")[0].style.right = "-104vh";
    document.getElementsByClassName("a2")[0].style.right = "-156vh";
    document.getElementsByClassName("a3")[0].style.display = "none";
    document.getElementsByClassName("a3")[0].style.right = "-208vh";
}

function loop3() {
    document.getElementsByClassName("a1")[0].style.display = "block";
    document.getElementsByClassName("a3")[0].style.right = "156vh";
    document.getElementsByClassName("a4")[0].style.right = "104vh";
    document.getElementsByClassName("a5")[0].style.right = "52vh";
    document.getElementsByClassName("a6")[0].style.right = "0px";
    document.getElementsByClassName("a7")[0].style.right = "-52vh";
    document.getElementsByClassName("a8")[0].style.right = "-104vh";
    document.getElementsByClassName("a1")[0].style.right = "-156vh";
    document.getElementsByClassName("a2")[0].style.display = "none";
    document.getElementsByClassName("a2")[0].style.right = "-208vh";
}

function loop2() {
    document.getElementsByClassName("a8")[0].style.display = "block";
    document.getElementsByClassName("a2")[0].style.right = "156vh";
    document.getElementsByClassName("a3")[0].style.right = "104vh";
    document.getElementsByClassName("a4")[0].style.right = "52vh";
    document.getElementsByClassName("a5")[0].style.right = "0px";
    document.getElementsByClassName("a6")[0].style.right = "-52vh";
    document.getElementsByClassName("a7")[0].style.right = "-104vh";
    document.getElementsByClassName("a8")[0].style.right = "-156vh";
    document.getElementsByClassName("a1")[0].style.display = "none";
    document.getElementsByClassName("a1")[0].style.right = "-208vh";
}

function loop1() {
    document.getElementsByClassName("a7")[0].style.display = "block";
    document.getElementsByClassName("a1")[0].style.right = "156vh";
    document.getElementsByClassName("a2")[0].style.right = "104vh";
    document.getElementsByClassName("a3")[0].style.right = "52vh";
    document.getElementsByClassName("a4")[0].style.right = "0px";
    document.getElementsByClassName("a5")[0].style.right = "-52vh";
    document.getElementsByClassName("a6")[0].style.right = "-104vh";
    document.getElementsByClassName("a7")[0].style.right = "-156vh";
    document.getElementsByClassName("a8")[0].style.display = "none";
    document.getElementsByClassName("a8")[0].style.right = "-208vh";
}

async function runLoad() {
    while (true) {
        loop1();
        await delay(3000);
        loop2();
        await delay(3000);
        loop3();
        await delay(3000);
        loop4();
        await delay(3000);
        loop5();
        await delay(3000);
        loop6();
        await delay(3000);
        loop7();
        await delay(3000);
        loop8();
    }
}

window.addEventListener("load", (event) => {
    runLoad();
});