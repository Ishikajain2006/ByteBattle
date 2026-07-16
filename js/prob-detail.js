

const runBtn =
    document.getElementById("runBtn");

const submitBtn =
    document.getElementById("submitBtn");

const outputBox =
    document.getElementById("outputBox");

const editor =
    document.getElementById("codeEditor");

const testcase =
    document.getElementById("testCaseInput");



runBtn.addEventListener("click", () => {

    const code =
        editor.value.trim();

    if(code.length < 20){

        outputBox.innerHTML =
        `
        ❌ Code is too short.
        `;

        return;
    }

    outputBox.innerHTML =
    `
    ⏳ Running test case...
    `;

    setTimeout(() => {

        outputBox.innerHTML =
        `
        ✅ Execution Successful

        Output:
        [0,1]

        Runtime: 1 ms
        Memory: 40 MB
        `;

    },1500);

});



submitBtn.addEventListener("click", () => {

    outputBox.innerHTML =
    `
    ⏳ Evaluating solution...
    `;

    setTimeout(() => {

        const verdicts = [

            {
                status:"Accepted",
                emoji:"✅"
            },

            {
                status:"Wrong Answer",
                emoji:"❌"
            },

            {
                status:"Time Limit Exceeded",
                emoji:"⏱️"
            },

            {
                status:"Runtime Error",
                emoji:"⚠️"
            }

        ];

        const random =
        verdicts[
            Math.floor(
                Math.random()
                * verdicts.length
            )
        ];

        outputBox.innerHTML =
        `
        ${random.emoji}
        ${random.status}
        `;

        saveSubmission(
            random.status
        );

    },2000);

});



function saveSubmission(status){

    let submissions =
        JSON.parse(
            localStorage.getItem(
                "submissions"
            )
        ) || [];

    submissions.unshift({

        problem:"Two Sum",

        language:
        document
        .getElementById(
            "languageSelect"
        ).value,

        status:status,

        time:
        new Date()
        .toLocaleString()

    });

    localStorage.setItem(
        "submissions",
        JSON.stringify(
            submissions
        )
    );

}


document.addEventListener(
    "keydown",
    (e) => {

    if(
        e.ctrlKey &&
        e.key === "Enter"
    ){

        runBtn.click();

    }

});



const STORAGE_KEY =
    "codearena_twosum_code";

window.addEventListener(
    "load",
    () => {

    const saved =
        localStorage.getItem(
            STORAGE_KEY
        );

    if(saved){

        editor.value = saved;
    }

});

editor.addEventListener(
    "input",
    () => {

    localStorage.setItem(
        STORAGE_KEY,
        editor.value
    );

});


setTimeout(() => {

    outputBox.innerHTML =
    `
    🚀 Ready to code.

    Press Ctrl + Enter
    to run instantly.
    `;

},500);

