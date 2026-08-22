console.log(typeof Chart);

const search = document.getElementById("search");
const cards = document.querySelectorAll(".director-card");


search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    cards.forEach(card => {

        const name = card.querySelector("h2").textContent.toLowerCase();

        if (name.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

const ctx = document.getElementById("nolanChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: [
            "The Dark Knight",
            "Oppenheimer",
            "Inception",
            "Interstellar"
        ],
        datasets: [{
            label: "Box Office (Millions USD)",
            data: [1006, 975, 839, 733]
        }]
    },
    options: {
        responsive: true
    }
});


const villeneuveCtx = document.getElementById("villeneuveChart");

new Chart(villeneuveCtx, {
    type: "bar",
    data: {
        labels: [
            "Dune: Part Two",
            "Dune",
            "Blade Runner 2049",
            "Arrival"
        ],
        datasets: [{
            label: "Box Office (Millions USD)",
            data: [714, 407, 268, 203]
        }]
    },
    options: {
        responsive: true
    }
});


const scorseseCtx = document.getElementById("scorseseChart");

new Chart(scorseseCtx, {
    type: "bar",
    data: {
        labels: [
            "The Wolf of Wall Street",
            "Killers of the Flower Moon",
            "The Irishman",
            "Goodfellas"
        ],
        datasets: [{
            label: "Box Office (Millions USD)",
            data: [406, 158, 8, 47]
        }]
    },
    options: {
        responsive: true
    }
});


const tarantinoCtx = document.getElementById("tarantinoChart");

new Chart(tarantinoCtx, {
    type: "bar",
    data: {
        labels: [
            "Django Unchained",
            "Once Upon a Time in Hollywood",
            "Inglourious Basterds",
            "Pulp Fiction"
        ],
        datasets: [{
            label: "Box Office (Millions USD)",
            data: [426, 377, 321, 214]
        }]
    },
    options: {
        responsive: true
    }
});


const ptaCtx = document.getElementById("ptaChart");

new Chart(ptaCtx, {
    type: "bar",
    data: {
        labels: [
            "Boogie Nights",
            "There Will Be Blood",
            "Licorice Pizza",
            "Phantom Thread"
        ],
        datasets: [{
            label: "Box Office (Millions USD)",
            data: [43, 76, 33, 48]
        }]
    },
    options: {
        responsive: true
    }
});


const bongCtx = document.getElementById("bongChart");

new Chart(bongCtx, {
    type: "bar",
    data: {
        labels: [
            "Parasite",
            "Snowpiercer",
            "The Host",
            "Memories of Murder"
        ],
        datasets: [{
            label: "Box Office (Millions USD)",
            data: [263, 87, 89, 5]
        }]
    },
    options: {
        responsive: true
    }
});


const delToroCtx = document.getElementById("delToroChart");

new Chart(delToroCtx, {
    type: "bar",
    data: {
        labels: [
            "The Shape of Water",
            "Pan's Labyrinth",
            "Hellboy II",
            "Pinocchio"
        ],
        datasets: [{
            label: "Box Office (Millions USD)",
            data: [195, 84, 168, 0]
        }]
    },
    options: {
        responsive: true
    }
});


const peeleCtx = document.getElementById("peeleChart");

new Chart(peeleCtx, {
    type: "bar",
    data: {
        labels: [
            "Get Out",
            "Us",
            "Nope"
        ],
        datasets: [{
            label: "Box Office (Millions USD)",
            data: [256, 256, 172]
        }]
    },
    options: {
        responsive: true
    }
});


const wesCtx = document.getElementById("wesChart");

new Chart(wesCtx, {
    type: "bar",
    data: {
        labels: [
            "The Grand Budapest Hotel",
            "Fantastic Mr. Fox",
            "Moonrise Kingdom",
            "The Royal Tenenbaums"
        ],
        datasets: [{
            label: "Box Office (Millions USD)",
            data: [174, 47, 68, 71]
        }]
    },
    options: {
        responsive: true
    }
});


const gerwigCtx = document.getElementById("gerwigChart");

new Chart(gerwigCtx, {
    type: "bar",
    data: {
        labels: [
            "Barbie",
            "Little Women",
            "Lady Bird"
        ],
        datasets: [{
            label: "Box Office (Millions USD)",
            data: [1446, 218, 79]
        }]
    },
    options: {
        responsive: true
    }
});