
const themeBtn = document.getElementById("themeToggle");

function loadTheme() {

    const savedTheme = localStorage.getItem("theme") || "dark";

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

        const isLight = document.body.classList.contains("light");

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

        themeBtn.textContent =
            isLight ? "☀️" : "🌙";

    });

}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function (e) {

        e.preventDefault();

        localStorage.removeItem("bytebattleUser");

        window.location.href = "login.html";

    });

}

const user = JSON.parse(localStorage.getItem("bytebattleUser"));

if (user) {

    const sidebarName =
        document.getElementById("sidebarName");

    if (sidebarName)
        sidebarName.textContent = user.name;

}


const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const user = {

            name:
                document.getElementById("name").value,

            email:
                document.getElementById("email").value,

            password:
                document.getElementById("password").value,

            xp: 0,

            problemsSolved: 0,

            rank: "Beginner"

        };

        localStorage.setItem(
            "bytebattleUser",
            JSON.stringify(user)
        );

        alert("Account Created Successfully!");

        window.location.href = "profile.html";

    });

}


const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        const user =
            JSON.parse(
                localStorage.getItem("bytebattleUser")
            );

        if (!user) {

            alert("No account found. Please sign up first.");

            return;
        }

        if (
            email === user.email &&
            password === user.password
        ) {

            alert("Login Successful!");

            window.location.href = "profile.html";

        }

        else {

            alert("Invalid Email or Password!");

        }

    });

}