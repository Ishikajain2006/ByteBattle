const themeBtn = document.getElementById("themeToggle");

function loadTheme() {

    const savedTheme =
        localStorage.getItem("theme") || "dark";

    if(savedTheme === "light"){
        document.body.classList.add("light");
        if(themeBtn) themeBtn.textContent = "☀️";
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