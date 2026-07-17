
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

    window.location.href = "login.html";

}

document.getElementById("sidebarName").textContent =
user.name;


const contests = [

{
    title:"ByteBattle Weekly Challenge #42",
    date:"July 25, 2026",
    duration:"2 Hours",
    problems:"5 Problems",
    status:"Upcoming"
},

{
    title:"DSA Sprint",
    date:"July 20, 2026",
    duration:"90 Minutes",
    problems:"4 Problems",
    status:"Live"
},

{
    title:"Monthly Coding Contest",
    date:"July 12, 2026",
    duration:"3 Hours",
    problems:"6 Problems",
    status:"Ended"
},

{
    title:"Algorithms Arena",
    date:"June 30, 2026",
    duration:"2 Hours",
    problems:"5 Problems",
    status:"Ended"
}

];


const contestContainer =
document.getElementById("contestContainer");

function renderContests(){

contestContainer.innerHTML="";

contests.forEach(contest=>{

const card=document.createElement("div");

card.className="contest-card";

let statusClass="upcoming";

if(contest.status==="Live")
statusClass="live";

if(contest.status==="Ended")
statusClass="ended";

card.innerHTML=`

<div class="contest-info">

<h3>${contest.title}</h3>

<p>📅 ${contest.date}</p>

<p>⏱ ${contest.duration}</p>

<p>📝 ${contest.problems}</p>

<span class="status ${statusClass}">
${contest.status}
</span>

</div>

<button class="leaderboard-btn">

View Leaderboard

</button>

`;

contestContainer.appendChild(card);

});

}

renderContests();


const targetDate =
new Date("July 25, 2026 20:00:00").getTime();

setInterval(()=>{

const now=new Date().getTime();

const distance=
targetDate-now;

const days=Math.floor(
distance/(1000*60*60*24)
);

const hours=Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);

const minutes=Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);

const seconds=Math.floor(
(distance%(1000*60))
/
1000
);

document.getElementById("days").textContent=
days;

document.getElementById("hours").textContent=
hours;

document.getElementById("minutes").textContent=
minutes;

document.getElementById("seconds").textContent=
seconds;

},1000);


const registerBtn=
document.getElementById("registerBtn");

registerBtn.addEventListener("click",()=>{

alert(
"🎉 Successfully Registered for ByteBattle Weekly Challenge!"
);

registerBtn.textContent=
"Registered ✓";

registerBtn.disabled=true;

});


const logoutBtn=
document.getElementById("logoutBtn");

logoutBtn.addEventListener("click",(e)=>{

e.preventDefault();

localStorage.removeItem("bytebattleUser");

window.location.href="login.html";

});