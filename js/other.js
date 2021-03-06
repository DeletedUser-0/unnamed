function Load() {
    player = new Player(JSON.parse(localStorage.player));
    console.log(`The page and all it's variables were loaded successfully.`);
    console.log(`Here's your number: ${Math.round(OmegaNum.pow(10, OmegaNum.times(Math.random(), 3.05)))}. If it's more than 1000, consider yourself lucky!`);
    return player.obj || "default";
};

// has .toPrecision(3) before 1000
function notate(n = new OmegaNum(0)) {
    n = new OmegaNum(n);

    if (n.sign == -1) { return `-${n.abs()}`; }
    if (isNaN(n.array[0])) { return "NaN"; }
    if (!isFinite(n.array[0])) { return Infinity; }

    if (!n.array[1]) {
        let e = Math.floor(Math.log10(n.array[0]));
        let m = n.array[0] / 10 ** e;
        return e < 3 ? n.toPrecision(3) : `${m.toFixed(2)}e${e}`;
    } else if (n.array[1] < 2) {
        return `${Math.pow(10, n.array[0] - Math.floor(n.array[0])).toFixed(2)}e${Math.floor(n.array[0]).toLocaleString("pt-PT")}</sup>`;
    } else {
        return `${"e".repeat(n.array[1])}${Math.floor(n.array[0])}`;
    };
};

// has whole number before 1000
function notate2(n = new OmegaNum(0)) {
    n = new OmegaNum(n);

    if (n.sign == -1) { return `-${n.abs()}`; }
    if (isNaN(n.array[0])) { return "NaN"; }
    if (!isFinite(n.array[0])) { return Infinity; }

    if (!n.array[1]) {
        let e = Math.floor(Math.log10(n.array[0]));
        let m = n.array[0] / 10 ** e;
        return e < 3 ? Math.floor(n) : `${m.toPrecision(3)}e${e}`;
    } else if (n.array[1] < 2) {
        return `${Math.pow(10, n.array[0] - Math.floor(n.array[0])).toPrecision(3)}e${Math.floor(n.array[0]).toLocaleString("pt-PT")}</sup>`;
    } else {
        return `${"e".repeat(n.array[1])}${Math.floor(n.array[0])}`;
    };
};

window.setInterval(function () {
    if (player.challenge.active == false) {
        localStorage.player = JSON.stringify(player);
    };
}, 30 * 1000)

Load();

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
};


window.onbeforeunload = function () {
    refresh();
};
