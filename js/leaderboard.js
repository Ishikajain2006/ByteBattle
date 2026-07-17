
const searchInput =
    document.getElementById(
        "searchInput"
    );

const tableRows =
    document.querySelectorAll(
        "#leaderboardBody tr"
    );

if (searchInput) {

    searchInput.addEventListener(
        "keyup",
        function () {

            const value =
                this.value
                    .toLowerCase();

            tableRows.forEach(row => {

                const username =
                    row.children[1]
                        .textContent
                        .toLowerCase();

                if (
                    username.includes(value)
                ) {
                    row.style.display =
                        "";
                }

                else {

                    row.style.display =
                        "none";
                }

            });

        }
    );
}

tableRows.forEach(
    (row, index) => {

        row.children[0].textContent =
            index + 1;
    }
);

tableRows.forEach(row => {

    row.addEventListener(
        "mouseenter",
        () => {

            row.style.transform =
                "scale(1.01)";
        }
    );

    row.addEventListener(
        "mouseleave",
        () => {

            row.style.transform =
                "scale(1)";
        }
    );

});

const leaderboard =
    document.querySelector(
        ".leaderboard"
    );

if (leaderboard) {

    const info =
        document.createElement(
            "p"
        );

    info.style.textAlign =
        "center";

    info.style.marginBottom =
        "20px";

    info.style.fontWeight =
        "600";

    info.style.color =
        "#38bdf8";

    info.textContent =
        `Total Participants: ${tableRows.length}`;

    leaderboard.insertBefore(
        info,
        leaderboard.firstChild
    );

}

window.addEventListener(
    "load",
    () => {

        console.log(
            "🏆 Welcome to ByteBattle Leaderboard!"
        );

    }
);