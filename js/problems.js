

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

if(!user){

    alert("Please login first!");

    window.location.href = "login.html";

}

const sidebarName =
document.getElementById("sidebarName");

if(sidebarName){

    sidebarName.textContent =
    user.name;

}


const problems = [

{
id:1,
title:"Two Sum",
difficulty:"Easy",
acceptance:"54%",
status:false
},

{
id:2,
title:"Palindrome Number",
difficulty:"Easy",
acceptance:"58%",
status:false
},

{
id:3,
title:"Roman To Integer",
difficulty:"Easy",
acceptance:"61%",
status:false
},

{
id:4,
title:"Longest Common Prefix",
difficulty:"Easy",
acceptance:"45%",
status:false
},

{
id:5,
title:"Valid Parentheses",
difficulty:"Easy",
acceptance:"43%",
status:false
},

{
id:6,
title:"Merge Sorted Array",
difficulty:"Easy",
acceptance:"49%",
status:false
},

{
id:7,
title:"Climbing Stairs",
difficulty:"Easy",
acceptance:"52%",
status:false
},

{
id:8,
title:"Binary Search",
difficulty:"Easy",
acceptance:"57%",
status:false
},

{
id:9,
title:"Best Time To Buy Stock",
difficulty:"Easy",
acceptance:"55%",
status:false
},

{
id:10,
title:"Valid Anagram",
difficulty:"Easy",
acceptance:"67%",
status:false
},

{
id:11,
title:"3Sum",
difficulty:"Medium",
acceptance:"34%",
status:false
},

{
id:12,
title:"Group Anagrams",
difficulty:"Medium",
acceptance:"60%",
status:false
},

{
id:13,
title:"Rotate Image",
difficulty:"Medium",
acceptance:"52%",
status:false
},

{
id:14,
title:"Product Of Array Except Self",
difficulty:"Medium",
acceptance:"66%",
status:false
},

{
id:15,
title:"Longest Substring",
difficulty:"Medium",
acceptance:"39%",
status:false
},

{
id:16,
title:"Top K Frequent Elements",
difficulty:"Medium",
acceptance:"63%",
status:false
},

{
id:17,
title:"Course Schedule",
difficulty:"Medium",
acceptance:"49%",
status:false
},

{
id:18,
title:"Number Of Islands",
difficulty:"Medium",
acceptance:"57%",
status:false
},

{
id:19,
title:"Word Ladder",
difficulty:"Hard",
acceptance:"39%",
status:false
},

{
id:20,
title:"N Queens",
difficulty:"Hard",
acceptance:"41%",
status:false
},

{
id:21,
title:"Merge K Sorted Lists",
difficulty:"Hard",
acceptance:"56%",
status:false
},

{
id:22,
title:"Regular Expression Matching",
difficulty:"Hard",
acceptance:"29%",
status:false
},

{
id:23,
title:"Median Of Two Sorted Arrays",
difficulty:"Hard",
acceptance:"36%",
status:false
},

{
id:24,
title:"Trapping Rain Water",
difficulty:"Hard",
acceptance:"46%",
status:false
}

];



let solvedProblems =

JSON.parse(
localStorage.getItem("solvedProblems")
) || [];

const container =
document.getElementById("problemContainer");

const searchInput =
document.getElementById("searchInput");

const filterButtons =
document.querySelectorAll(".filter-btn");

const progressFill =
document.getElementById("progressFill");

const progressText =
document.getElementById("progressText");



function renderProblems(problemList){

container.innerHTML="";

problemList.forEach(problem=>{

const solved =
solvedProblems.includes(problem.id);

const row =
document.createElement("div");

row.className="problem-row";

row.innerHTML=`

<div class="status">

${
solved
?
'<span class="solved">✔</span>'
:
'<span class="unsolved">○</span>'
}

</div>

<div class="problem-name">

${problem.title}

<small>

Problem #${problem.id}

</small>

</div>

<div>

<span class="badge ${problem.difficulty.toLowerCase()}">

${problem.difficulty}

</span>

</div>

<div>

${problem.acceptance}

</div>

<div>

${
solved
?
`<button
class="solve-btn"
disabled>

Solved

</button>`

:

`<button
class="solve-btn"
onclick="markSolved(${problem.id})">

Solve

</button>`

}

</div>

`;

container.appendChild(row);

});

updateProgress();

}



function updateProgress(){

const solved =
solvedProblems.length;

const total =
problems.length;

const percent =
(solved/total)*100;

progressFill.style.width =
percent + "%";

progressText.textContent =
`${solved} / ${total} Problems Solved`;

}



searchInput.addEventListener("input",()=>{

const value =
searchInput.value.toLowerCase();

const filtered =

problems.filter(problem=>

problem.title
.toLowerCase()
.includes(value)

);

renderProblems(filtered);

});


filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document
.querySelector(".filter-btn.active")
.classList.remove("active");

button.classList.add("active");

const difficulty =
button.dataset.filter;

if(difficulty==="all"){

renderProblems(problems);

}

else{

const filtered =

problems.filter(problem=>

problem.difficulty.toLowerCase()===difficulty

);

renderProblems(filtered);

}

});

});

function markSolved(id){

    if(!solvedProblems.includes(id)){

        solvedProblems.push(id);

        localStorage.setItem(
            "solvedProblems",
            JSON.stringify(solvedProblems)
        );

        updateDashboard();

        renderProblems(problems);

    }

}

function updateDashboard(){

    const solved =
        solvedProblems.length;

    const xp =
        solved * 100;

    let rank = "Beginner";

    if(solved >= 5)
        rank = "Apprentice";

    if(solved >= 10)
        rank = "Specialist";

    if(solved >= 20)
        rank = "Expert";

    if(solved >= 40)
        rank = "Master";

    localStorage.setItem(
        "solvedCount",
        solved
    );

    localStorage.setItem(
        "userXP",
        xp
    );

    localStorage.setItem(
        "userRank",
        rank
    );

}


const logoutBtn =
document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click",(e)=>{

        e.preventDefault();

        localStorage.removeItem(
            "bytebattleUser"
        );

        window.location.href =
        "login.html";

    });

}


document.addEventListener("keydown",(e)=>{

    if(e.key==="/"){

        e.preventDefault();

        searchInput.focus();

    }

});


console.log(

`Welcome ${user.name} to ByteBattle 🚀`

);



updateDashboard();

renderProblems(problems);