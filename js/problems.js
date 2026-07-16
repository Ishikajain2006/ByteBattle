
const problems = [

    {
        id: 1,
        title: "Two Sum",
        difficulty: "easy",
        description:
            "Find indices of two numbers that add up to a target."
    },

    {
        id: 2,
        title: "Valid Parentheses",
        difficulty: "easy",
        description:
            "Determine whether the input string is valid."
    },

    {
        id: 3,
        title: "Merge Sorted Array",
        difficulty: "easy",
        description:
            "Merge two sorted arrays into one sorted array."
    },

    {
        id: 4,
        title: "Best Time To Buy And Sell Stock",
        difficulty: "easy",
        description:
            "Find maximum profit from stock prices."
    },

    {
        id: 5,
        title: "Climbing Stairs",
        difficulty: "easy",
        description:
            "Count distinct ways to reach the top."
    },

    {
        id: 6,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "medium",
        description:
            "Find length of longest unique substring."
    },

    {
        id: 7,
        title: "Group Anagrams",
        difficulty: "medium",
        description:
            "Group words that are anagrams."
    },

    {
        id: 8,
        title: "Product Of Array Except Self",
        difficulty: "medium",
        description:
            "Return array except current index product."
    },

    {
        id: 9,
        title: "Container With Most Water",
        difficulty: "medium",
        description:
            "Find maximum area using two pointers."
    },

    {
        id: 10,
        title: "3Sum",
        difficulty: "medium",
        description:
            "Find unique triplets with sum equal to zero."
    },

    {
        id: 11,
        title: "Binary Tree Level Order Traversal",
        difficulty: "medium",
        description:
            "Traverse tree level by level."
    },

    {
        id: 12,
        title: "Top K Frequent Elements",
        difficulty: "medium",
        description:
            "Find k most frequent elements."
    },

    {
        id: 13,
        title: "Number Of Islands",
        difficulty: "medium",
        description:
            "Count connected islands in a grid."
    },

    {
        id: 14,
        title: "Word Ladder",
        difficulty: "hard",
        description:
            "Transform one word into another."
    },

    {
        id: 15,
        title: "Median Of Two Sorted Arrays",
        difficulty: "hard",
        description:
            "Find median in logarithmic complexity."
    },

    {
        id: 16,
        title: "Merge K Sorted Lists",
        difficulty: "hard",
        description:
            "Merge multiple sorted linked lists."
    },

    {
        id: 17,
        title: "N Queens",
        difficulty: "hard",
        description:
            "Place queens safely on a chessboard."
    },

    {
        id: 18,
        title: "Regular Expression Matching",
        difficulty: "hard",
        description:
            "Implement regex matching support."
    }

];

const container =
    document.getElementById("problemContainer");

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-btn");



let solvedProblems =
    JSON.parse(
        localStorage.getItem("solvedProblems")
    ) || [];

function renderProblems(problemList) {

    container.innerHTML = "";

    if(problemList.length === 0){

        container.innerHTML = `
            <div class="no-results">
                No problems found.
            </div>
        `;

        return;
    }

    problemList.forEach(problem => {

        const solved =
            solvedProblems.includes(problem.id);

        const card =
        document.createElement("div");

        card.className = "problem-card";

        card.innerHTML = `

            <h3>${problem.title}</h3>

            <p>
                ${problem.description}
            </p>

            <span class="badge ${problem.difficulty}">
                ${capitalize(problem.difficulty)}
            </span>

            <div class="card-footer">

                ${
                    solved
                    ?
                    `<span class="solved">
                        ✓ Solved
                    </span>`
                    :
                    `<button
                        class="solve-btn"
                        onclick="markSolved(${problem.id})"
                    >
                        Solve
                    </button>`
                }

            </div>

        `;

        container.appendChild(card);
    });

}

function capitalize(word){

    return word.charAt(0).toUpperCase()
           + word.slice(1);

}


searchInput.addEventListener("input", () => {

    const query =
        searchInput.value.toLowerCase();

    const filtered =
        problems.filter(problem =>
            problem.title
            .toLowerCase()
            .includes(query)
        );

    renderProblems(filtered);

});



filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelector(".active-filter")
            .classList
            .remove("active-filter");

        button.classList.add(
            "active-filter"
        );

        const difficulty =
            button.dataset.filter;

        if(difficulty === "all"){

            renderProblems(problems);
        }
        else{

            const filtered =
                problems.filter(
                    problem =>
                    problem.difficulty
                    === difficulty
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
    }

    renderProblems(problems);

}



container.addEventListener("click", (e) => {

    const card =
        e.target.closest(".problem-card");

    if(!card) return;


});

renderProblems(problems);

function updateStats(){

    localStorage.setItem(
        "solvedCount",
        solvedProblems.length
    );

}

updateStats();