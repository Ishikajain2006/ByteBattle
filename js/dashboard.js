

const themeBtn = document.getElementById("themeToggle");

function loadTheme() {

    const savedTheme =
        localStorage.getItem("theme") || "dark";

    if (savedTheme === "light") {

        document.body.classList.add("light");

        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }
    }
}

loadTheme();

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

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

if (!user) {

    alert("Please login first!");

    window.location.href =
        "login.html";
}


const sidebarName =
    document.getElementById("sidebarName");

if (sidebarName) {

    sidebarName.textContent =
        user.name;
}


const welcomeName =
    document.getElementById("welcomeName");

if (welcomeName) {

    welcomeName.textContent =
        user.name;
}



const solved =
    JSON.parse(
        localStorage.getItem("solvedProblems")
    ) || [];

const solvedElement =
    document.getElementById("solvedCount");

if (solvedElement) {

    solvedElement.textContent =
        solved.length;
}




const xp =
    solved.length * 100;

const xpElement =
    document.getElementById("xpValue");

if (xpElement) {

    xpElement.textContent = xp;
}




let rank = "Beginner";

if (solved.length >= 5)
    rank = "Apprentice";

if (solved.length >= 10)
    rank = "Specialist";

if (solved.length >= 20)
    rank = "Expert";

if (solved.length >= 40)
    rank = "Master";

const rankElement =
    document.getElementById("userRank");

if (rankElement) {

    rankElement.textContent =
        rank;
}


const streakElement =
    document.getElementById("streakCount");

if (streakElement) {

    streakElement.textContent =
        Math.max(1, solved.length);
}


const easyFill =
    document.querySelector(".easy-fill");

const mediumFill =
    document.querySelector(".medium-fill");

const hardFill =
    document.querySelector(".hard-fill");

if (easyFill)
    easyFill.style.width =
        Math.min(solved.length * 10,100) + "%";

if (mediumFill)
    mediumFill.style.width =
        Math.min(solved.length * 6,100) + "%";

if (hardFill)
    hardFill.style.width =
        Math.min(solved.length * 3,100) + "%";



const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click",(e)=>{

        e.preventDefault();

        localStorage.removeItem(
            "bytebattleUser"
        );

        window.location.href =
            "login.html";

    });

}