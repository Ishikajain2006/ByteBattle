
const user = JSON.parse(localStorage.getItem("bytebattleUser"));

if (!user) {
    alert("Please create an account first!");
    window.location.href = "signup.html";
}

document.getElementById("userName").textContent = user.name;

document.getElementById("userEmail").textContent = user.email;

document.getElementById("username").textContent =
    user.email.split("@")[0];

document.getElementById("joinDate").textContent =
    new Date().toLocaleDateString();

document.getElementById("problemsSolved").textContent =
    user.problemsSolved ?? 0;

document.getElementById("userXP").textContent =
    user.xp ?? 0;

document.getElementById("userRank").textContent =
    user.rank ?? "Beginner";