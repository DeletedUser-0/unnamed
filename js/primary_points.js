window.setInterval(function() {
    // calculate primary points
    if (player.gupgrade5.bought == false) {
        if (player.gupgrade6.bought == true) {
            player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(OmegaNum.log10(player.primary.amount).pow(1.5));
        } else {
            player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255));
        };
    } else {
        if (player.gupgrade6.bought == true) {
            player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(30).times(OmegaNum.log10(player.primary.amount).pow(1.5));
        } else {
            player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(30);
        };
    };
    // fix NaN errors
    if (isNaN(player.gen1.total)) {
        player.gen1.total = player.gen1.total.array[0];
    };
    if (isNaN(player.gen2.total)) {
        player.gen2.total = player.gen2.level;
    };
    if (isNaN(player.gen3.total)) {
        player.gen3.total = player.gen3.level;
    };
    if (isNaN(player.primary.amount)) {
        player.primary.amount = player.primary.amount.array[0];
    };
    if (player.gupgrade1.bought == true) {
        upgrade1();
        upgrade2();
        upgrade3();
        upgrade4();
    };
}, 0);

function addprimary() {
    if (OmegaNum.cmp(player.money.amount, new OmegaNum("1.7932e308")) >= 0) {
        player.primary.amount = OmegaNum.add(player.primary.amount, player.primary.earn);
        player.primary.reset += 1;
        if (player.gupgrade7.bought == false) {
            player.money.amount = 0;
            player.money.base = 1;
            player.money.second = 1;
            resetprimary();
            resetprimary();
        };
    };
};

function resetprimary() {
    player.money.base = 1;
    player.money.amount = 0;
    player.upgrade1.cost = 10;
    player.upgrade1.effect = 2;
    player.upgrade1.level = 0;
    player.auto.requires = 1000;
    player.auto.effect = 3;
    player.upgrade2.level = 0;
    player.upgrade2.cost = 1e12;
    player.upgrade2.effect = 4;
    player.upgrade3.cost = 1e51;
    player.upgrade3.effect = 1;
    player.upgrade3.level = 0;
    player.upgrade4.cost = 1e109;
    player.upgrade4.level = 0;
    player.upgrade4.effect = 1;
};

function gen1() {
    if (OmegaNum.cmp(player.primary.amount, player.gen1.cost) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, player.gen1.cost);
        if (OmegaNum.cmp(player.gen1.level, 15) <= 0) {
            player.gen1.cost = 1;
        } else {
            player.gen1.cost = OmegaNum.mul(player.gen1.cost, 1.15).pow(1.04);
        }
        player.gen1.level += 1;
        player.gen1.total = OmegaNum.add(player.gen1.total, 1);
    };
};

function gen2() {
    if (OmegaNum.cmp(player.primary.amount, player.gen2.cost) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, player.gen2.cost);
        player.gen2.cost = OmegaNum.pow(player.gen2.cost, 1.061).times(1.25);
        player.gen2.level += 1;
        player.gen2.total = OmegaNum.add(player.gen2.total, 1);
    };
};

function gen3() {
    if (OmegaNum.cmp(player.primary.amount, player.gen3.cost) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, player.gen3.cost);
        player.gen3.cost = Math.floor(OmegaNum.pow(player.gen3.cost, 1.082));
        player.gen3.level += 1;
        player.gen3.total = OmegaNum.add(player.gen3.total, 1);
    };
};

function gupgrade1() {
    if (OmegaNum.cmp(player.primary.amount, 100) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 100);
        player.gupgrade1.bought = true;
    };
};

function gupgrade2() {
    if (OmegaNum.cmp(player.primary.amount, 250) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 250);
        player.gupgrade2.bought = true;
    };
};

function gupgrade3() {
    if (OmegaNum.cmp(player.primary.amount, 2000) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 2000);
        player.gupgrade3.bought = true;
    };
};

function gupgrade4() {
    if (OmegaNum.cmp(player.primary.amount, 10000) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 10000);
        player.gupgrade4.bought = true;
    };
};

function gupgrade5() {
    if (OmegaNum.cmp(player.primary.amount, 250000) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 250000);
        player.gupgrade5.bought = true;
    };
};

function gupgrade6() {
    if (OmegaNum.cmp(player.primary.amount, 2.5e7) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 2.5e7);
        player.gupgrade6.bought = true;
    };
};

function gupgrade7() {
    if (OmegaNum.cmp(player.primary.amount, 2e10) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 2e10);
        player.gupgrade7.bought = true;
    };
};

function gupgrade8() {
    if (OmegaNum.cmp(player.primary.amount, 1e12) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e12);
        player.gupgrade8.bought = true;
        player.money.second = OmegaNum.pow(player.money.second, 1.05);
    };
};

function gupgrade9() {
    if (OmegaNum.cmp(player.primary.amount, 2.5e14) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 2.5e14);
        player.gupgrade9.bought = true;
        player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, OmegaNum.pow(OmegaNum.div(0.95, 0.96), player.upgrade3.level));
    };
};