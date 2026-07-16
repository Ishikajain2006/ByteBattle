
function animateCounter(id, target, duration = 1500) {
    const element = document.getElementById(id);

    if (!element) return;

    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {

        start += increment;

        if (start >= target) {
            start = target;
            clearInterval(counter);
        }

        element.textContent = Math.floor(start);

    }, 16);
}

animateCounter("solvedCount", 128);



const dailyChallenges = [

    "Longest Substring Without Repeating Characters",

    "Merge Sorted Array",

    "Best Time To Buy And Sell Stock",

    "Maximum Subarray",

    "Valid Parentheses",

    "Binary Tree Level Order Traversal",

    "Product Of Array Except Self",

    "Climbing Stairs",

    "Two Sum",

    "Group Anagrams"
];

const challengeTitle =
    document.querySelector(".challenge-card h3");

if (challengeTitle) {

    const challengeIndex =
        new Date().getDate() % dailyChallenges.length;

    challengeTitle.textContent =
        dailyChallenges[challengeIndex];
}


window.addEventListener("load", () => {

    const bars = document.querySelectorAll(
        ".easy-progress, .medium-progress, .hard-progress"
    );

    bars.forEach(bar => {

        const width = bar.style.width || getComputedStyle(bar).width;

        bar.style.width = "0";

        setTimeout(() => {
            bar.style.transition = "width 1.5s ease";
            bar.style.width = width;
        }, 300);
    });
});


const quotes = [

    "Consistency beats intensity.",

    "One problem solved today is better than ten postponed.",

    "Every accepted solution improves your thinking.",

    "Focus on progress, not perfection.",

    "Small daily improvements lead to big results.",

    "The best coders were once beginners.",

    "Practice. Debug. Learn. Repeat."
];

function showMotivation() {

    const quote =
        quotes[Math.floor(Math.random() * quotes.length)];

    setTimeout(() => {
        alert("💡 Daily Motivation\n\n" + quote);
    }, 1200);
}

showMotivation();


const challengeBtn =
    document.querySelector(".challenge-btn");

if (challengeBtn) {

    challengeBtn.addEventListener("click", () => {

        alert(
            "🚀 Problem page will open in Phase 3."
        );
    });
}


const rows =
    document.querySelectorAll("tbody tr");

rows.forEach(row => {

    row.addEventListener("mouseenter", () => {
        row.style.cursor = "pointer";
    });

    row.addEventListener("click", () => {

        const problem =
            row.children[0].textContent;

        alert(
            `Viewing submission for: ${problem}`
        );

        
    });

});



const userData = {

    username: "Ishika",

    solved: 128,

    streak: 18,

    rank: 542,

    rating: 1645
};

console.log(
    "User Dashboard Loaded:",
    userData
);



window.addEventListener("DOMContentLoaded", () => {

    const heading =
        document.querySelector(".topbar h1");

    if (heading) {

        const hour =
            new Date().getHours();

        let greeting = "Welcome Back";

        if (hour < 12) {
            greeting = "Good Morning";
        }
        else if (hour < 18) {
            greeting = "Good Afternoon";
        }
        else {
            greeting = "Good Evening";
        }

        heading.textContent =
            `${greeting} 👋`;
    }

});
