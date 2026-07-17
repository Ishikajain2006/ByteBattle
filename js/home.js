

const themeBtn =
document.getElementById("themeToggle");

function loadTheme(){

    const savedTheme =
    localStorage.getItem("theme") || "dark";

    if(savedTheme === "light"){

        document.body.classList.add("light");

        if(themeBtn){

            themeBtn.textContent = "☀️";

        }

    }

}

loadTheme();

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light");

        const isLight =
        document.body.classList.contains("light");

        localStorage.setItem(

            "theme",

            isLight ? "light" : "dark"

        );

        themeBtn.textContent =

        isLight ? "☀️" : "🌙";

    });

}



const user =

JSON.parse(

localStorage.getItem("bytebattleUser")

);

const userName =
document.getElementById("userName");

const welcomeName =
document.getElementById("welcomeName");

const logoutBtn =
document.getElementById("logoutBtn");

const loginBtn =
document.querySelector(".login-btn");

const signupBtn =
document.querySelector(".signup-btn");



if(user){

    if(userName){

        userName.textContent =
        user.name;

    }

    if(welcomeName){

        welcomeName.textContent =
        user.name;

    }

    if(loginBtn){

        loginBtn.style.display =
        "none";

    }

    if(signupBtn){

        signupBtn.style.display =
        "none";

    }

}else{

    if(userName){

        userName.textContent =
        "Guest";

    }

    if(welcomeName){

        welcomeName.textContent =
        "Guest";

    }

}


if(logoutBtn){

    logoutBtn.addEventListener("click",(e)=>{

        e.preventDefault();

        const confirmLogout =
        confirm("Are you sure you want to logout?");

        if(confirmLogout){

            localStorage.removeItem("bytebattleUser");

            alert("Logged out successfully!");

            window.location.href = "pages/login.html";

        }

    });

}



const progressCircle =
document.querySelector(".circle");

const progressText =
document.querySelector(".circle-inner");

let progress = 0;

function animateProgress(){

    const solved =
    Number(localStorage.getItem("solvedCount")) || 0;

    const total = 24;

    const target =
    Math.floor((solved / total) * 100);

    const interval = setInterval(()=>{

        if(progress >= target){

            clearInterval(interval);

        }

        else{

            progress++;

            if(progressCircle){

                progressCircle.style.background =

                `conic-gradient(
                    #d8a04b ${progress*3.6}deg,
                    rgba(255,255,255,.08) 0deg
                )`;

            }

            if(progressText){

                progressText.textContent =
                progress + "%";

            }

        }

    },20);

}

animateProgress();


const stats = {

    solved:
    Number(localStorage.getItem("solvedCount")) || 0,

    xp:
    Number(localStorage.getItem("userXP")) || 0,

    rank:
    localStorage.getItem("userRank") || "Beginner"

};

console.log("Solved :",stats.solved);

console.log("XP :",stats.xp);

console.log("Rank :",stats.rank);



if(user){

    console.log(

        `🚀 Welcome back ${user.name}!`

    );

}
else{

    console.log(

        "Welcome to ByteBattle!"

    );

}




const cards =
document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.opacity = "0";

    card.style.transform =
    "translateY(30px)";

    setTimeout(()=>{

        card.style.transition =
        ".5s ease";

        card.style.opacity = "1";

        card.style.transform =
        "translateY(0)";

    },index*120);

});



const buttons =
document.querySelectorAll(".card button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        window.location.href =
        "html\problems.html";

    });

});



document.addEventListener("keydown",(e)=>{

    if(e.key==="h" || e.key==="H"){

        window.location.href="index.html";

    }

});



const footer =
document.querySelector(".footer div");

if(footer){

    footer.innerHTML =

    `© ${new Date().getFullYear()} <strong>ByteBattle</strong>`;

}





window.addEventListener("load",()=>{

    console.log("ByteBattle Home Loaded Successfully 🚀");

});