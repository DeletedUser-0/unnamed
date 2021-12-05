function refresh() {
    localStorage.player = JSON.stringify(player);
    window.location.reload();
};

window.setInterval(function() {
    // calculate primary points
    if (player.challenge4.completed == false) {
        if (player.gupgrade5.bought == false) {
            if (player.gupgrade6.bought == true) {
                player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(OmegaNum.log10(player.primary.amount).pow(1.5)).times(player.upgrade6.effect).times(15).times(OmegaNum.log10(player.atoms.amount).pow(2.2).pow(player.atoms.exp));
            } else {
                player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(player.upgrade6.effect).times(15).times(OmegaNum.log10(player.atoms.amount).pow(2.2).pow(player.atoms.exp));
            };
        } else {
            if (player.gupgrade6.bought == true) {
                player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(30).times(OmegaNum.log10(player.primary.amount).pow(1.5)).times(player.upgrade6.effect).times(player.upgrade6.effect).times(15).times(OmegaNum.log10(player.atoms.amount).pow(2.2).pow(player.atoms.exp));
            } else {
                player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(30).times(player.upgrade6.effect).times(15).times(OmegaNum.log10(player.atoms.amount).pow(2.2).pow(player.atoms.exp));
            };
        };
    } else {
        if (player.gupgrade5.bought == false) {
            if (player.gupgrade6.bought == true) {
                player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(OmegaNum.log10(player.primary.amount).pow(1.5)).times(15).times(player.upgrade6.effect).times(15).times(OmegaNum.log10(player.atoms.amount).pow(2.2).pow(player.atoms.exp));
            } else {
                player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(15).times(player.upgrade6.effect).times(15).times(OmegaNum.log10(player.atoms.amount).pow(2.2).pow(player.atoms.exp));
            };
        } else {
            if (player.gupgrade6.bought == true) {
                if (player.gupgrade14.bought == true) {
                    player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(30).times(OmegaNum.log10(player.primary.amount).pow(1.5)).times(player.upgrade6.effect).times(15).times(OmegaNum.log10(player.atoms.amount).pow(2.2).pow(player.atoms.exp));
                } else {
                    player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(30).times(OmegaNum.log10(player.primary.amount).pow(1.5)).times(15).times(player.upgrade6.effect).times(15).times(OmegaNum.log10(player.atoms.amount).pow(2.2).pow(player.atoms.exp));
                };
            } else {
                player.primary.earn = OmegaNum.pow(1.02, OmegaNum.log10(player.money.amount)).div(OmegaNum.pow(1.02, 308.255)).times(30).times(15).times(player.upgrade6.effect).times(15).times(OmegaNum.log10(player.atoms.amount).pow(2.2).pow(player.atoms.exp));
            };
        };

    }
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
        upgrade4();
        upgrade5();
        upgrade6();
        upgrade3();
    };
    if (player.gupgrade10.bought == true) {
        if (OmegaNum.cmp(player.primary.total, 1e100) <= 0) {
            player.genpow = OmegaNum.times(player.genpow, 0.999999);
            player.gen1.cost = OmegaNum.pow(player.gen1.cost, 0.999999);
            player.gen2.cost = OmegaNum.pow(player.gen2.cost, 0.999999);
            player.gen3.cost = OmegaNum.pow(player.gen3.cost, 0.999999);
        } else {
            player.genpow = OmegaNum.times(player.genpow, 0.9999998);
            player.gen1.cost = OmegaNum.pow(player.gen1.cost, 0.9999998);
            player.gen2.cost = OmegaNum.pow(player.gen2.cost, 0.9999998);
            player.gen3.cost = OmegaNum.pow(player.gen3.cost, 0.9999998);
        };
    };
    if (player.gupgrade12.bought == false) {
        player.gen3.amount = player.gen3.level;
    };
}, 0);

// runs 50 times per second
window.setInterval(function() {
    player.gen3.before = player.gen3.amount;
    if (player.gupgrade12.bought == true) {
        if (player.gupgrade16.bought == false) {
            player.gen3.amount = OmegaNum.add(player.gen3.amount, OmegaNum.div(OmegaNum.pow(OmegaNum.log10(player.gen3.amount), OmegaNum.add(3, OmegaNum.add(OmegaNum.log10(player.gen3.amount).div(2.5), 1))), 50));
        } else {
            player.gen3.amount = OmegaNum.add(player.gen3.amount, OmegaNum.pow(OmegaNum.log10(player.gen3.amount), OmegaNum.add(3, OmegaNum.add(OmegaNum.log10(player.gen3.amount).div(2.3), 1.2))));
        };
    };
}, 20);

window.setInterval(function() {
    if (player.gupgrade19.bought == true) {
        player.atoms.elapsed = OmegaNum.add(player.atoms.elapsed, 12);
        if (OmegaNum.cmp(player.atoms.elapsed, player.atoms.time) >= 0) {
            player.atoms.elapsed = OmegaNum.sub(player.atoms.elapsed, player.atoms.time);
            console.log(`Time elapsed.`)
            var probability = Math.random();
            if (probability <= player.atoms.chance) {
                player.atoms.amount = OmegaNum.times(player.atoms.amount, player.atoms.mult);
                console.log(`Succeded!`);
            };    
        };
    };
    player.atoms.chance = new OmegaNum(player.atoms.chance);
}, 12);

function addprimary() {
    if (player.gupgrade7.bought == false) {
        if (OmegaNum.cmp(player.money.amount, new OmegaNum("1.7932e308")) >= 0) {
            player.primary.total = OmegaNum.add(player.primary.total, player.primary.earn);
            player.primary.amount = OmegaNum.add(player.primary.amount, player.primary.earn);
            player.primary.reset += 1;
            if (player.primary.reset >= 1) {
                document.getElementById("gupgrade1").style.display = "block-inline";
            };
            if (player.primary.reset == 1) {
                refresh();
                resetprimary();
            };
            if (player.gupgrade7.bought == false) {
                player.money.amount = 0;
                player.money.base = 1;
                player.money.second = 1;
                player.money.maxbase = 1;
                player.money.max = 1;
                resetprimary();
                resetprimary();
            };
        };
    };
};

function resetuniverses() {
    player.money.max = 1;
    player.money.maxbase = 1;
    player.money.second = 1;
    player.money.base = 1;
    player.money.amount = 0;
    player.upgrade1.cost = 10;
    player.upgrade1.effect = 2;
    player.upgrade1.level = 0;
    player.auto.requires = 1000;
    player.auto.effect = 3;
    player.auto.level = 0;
    player.upgrade2.level = 0;
    player.upgrade2.cost = 1e15;
    player.upgrade2.effect = 4;
    player.upgrade3.cost = 1e79;
    player.upgrade3.effect = 1;
    player.upgrade3.level = 0;
    player.upgrade4.cost = 1e113;
    player.upgrade4.effect = 1;
    player.upgrade4.level = 0;
    player.upgrade5.effect = 1;
    player.upgrade5.cost = new OmegaNum("ee3");
    player.upgrade5.level = 0;
    player.upgrade6.effect = 1;
    player.upgrade6.cost = new OmegaNum("ee3");
    player.upgrade6.level = 0;
};

function resetprimary() {
    player.money.max = 1;
    player.money.maxbase = 1;
    player.money.second = 1;
    player.money.base = 1;
    player.money.amount = 0;
    player.upgrade1.cost = 10;
    player.upgrade1.effect = 2;
    player.upgrade1.level = 0;
    player.auto.requires = 1000;
    player.auto.effect = 3;
    player.auto.level = 0;
    player.upgrade2.level = 0;
    player.upgrade2.cost = 1e15;
    player.upgrade2.effect = 4;
    player.upgrade3.cost = 1e79;
    player.upgrade3.effect = 1;
    player.upgrade3.level = 0;
    player.upgrade4.cost = 1e113;
    player.upgrade4.effect = 1;
    player.upgrade4.level = 0;
    player.universes.amount = 0;
    player.universes.requires = 1e60;
    player.upgrade5.effect = 1;
    player.upgrade5.cost = new OmegaNum("ee3");
    player.upgrade5.level = 0;
    player.upgrade6.effect = 1;
    player.upgrade6.cost = new OmegaNum("ee3");
    player.upgrade6.level = 0;
};

function gen1() {
    while (OmegaNum.cmp(player.primary.amount, player.gen1.cost) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, player.gen1.cost);
        if (OmegaNum.cmp(player.gen1.level, 1) <= 0) {
            player.gen1.cost = 1;
        } else {
            if (player.gupgrade10.bought == true) {
                if (OmegaNum.cmp(player.gen1.level, 90) < 0) {
                    player.gen1.cost = OmegaNum.mul(player.gen1.cost, 1.15).pow(1.04);
                } else {
                    player.gen1.cost = OmegaNum.pow(player.gen1.cost, 1.02).times(1.15);
                };
            } else {
                if (OmegaNum.cmp(player.gen1.level, 90) < 0) {
                    player.gen1.cost = OmegaNum.mul(player.gen1.cost, 1.15).pow(1.04);
                } else {
                    player.gen1.cost = OmegaNum.pow(player.gen1.cost, 1.02).times(1.15);
                };
            }
        };
        player.gen1.level += 1;
        player.gen1.total = OmegaNum.add(player.gen1.total, 1);
    };
};

function gen2() {
    while (OmegaNum.cmp(player.primary.amount, player.gen2.cost) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, player.gen2.cost);
        if (player.gupgrade10.bought == true) {
            if (OmegaNum.cmp(player.gen1.level, 90) < 0) {
                player.gen2.cost = OmegaNum.pow(player.gen2.cost, 1.061).times(1.25);
            } else {
                player.gen2.cost = OmegaNum.pow(player.gen2.cost, 1.03);
            };
        } else {
            if (OmegaNum.cmp(player.gen1.level, 90) < 0) {
                player.gen2.cost = OmegaNum.pow(player.gen2.cost, 1.061).times(1.25);
            } else {
                player.gen2.cost = OmegaNum.pow(player.gen2.cost, 1.03);
            };
        };
        player.gen2.level += 1;
        player.gen2.total = OmegaNum.add(player.gen2.total, 1);
    };
};

function gen3() {
    while (OmegaNum.cmp(player.primary.amount, player.gen3.cost) >= 0) {
        player.gen3.level += 1;
        player.gen3.total = OmegaNum.add(player.gen3.total, 1);
        player.primary.amount = OmegaNum.sub(player.primary.amount, player.gen3.cost);
        if (player.gupgrade10.bought == true) {
            if (OmegaNum.cmp(player.gen1.level, 90) < 0) {
                player.gen3.cost = Math.floor(OmegaNum.pow(player.gen3.cost, 1.082));
            } else {
                player.gen3.cost = Math.floor(OmegaNum.pow(player.gen3.cost, 1.041));
            };
        } else {
            if (OmegaNum.cmp(player.gen1.level, 90) < 0) {
                player.gen3.cost = Math.floor(OmegaNum.pow(player.gen3.cost, 1.082));
            } else {
                player.gen3.cost = Math.floor(OmegaNum.pow(player.gen3.cost, 1.041));
            };
        };
    };
};

function gupgrade1() {
    if (OmegaNum.cmp(player.primary.amount, 5) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 5);
        player.gupgrade1.bought = true;
        document.getElementById("gupgrade2").style.display = "block-inline";
        refresh();
    };
};

function gupgrade2() {
    if (OmegaNum.cmp(player.primary.amount, 50) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 50);
        player.gupgrade2.bought = true;
        document.getElementById("gupgrade3").style.display = "block-inline";
        refresh();
    };
};

function gupgrade3() {
    if (OmegaNum.cmp(player.primary.amount, 100) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 100);
        player.gupgrade3.bought = true;
        document.getElementById("gupgrade4").style.display = "block-inline";
        refresh();
    };
};

function gupgrade4() {
    if (OmegaNum.cmp(player.primary.amount, 3e4) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 3e4);
        player.gupgrade4.bought = true;
        document.getElementById("gupgrade5").style.display = "block-inline";
        refresh();
    };
};

function gupgrade5() {
    if (OmegaNum.cmp(player.primary.amount, 3e6) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 3e6);
        player.gupgrade5.bought = true;
        document.getElementById("gupgrade6").style.display = "block-inline";
        refresh();
    };
};

function gupgrade6() {
    if (OmegaNum.cmp(player.primary.amount, 5e7) >= 0) {
        if (player.gupgrade6.bought == false) {
            player.primary.amount = OmegaNum.sub(player.primary.amount, 5e7);
            player.gupgrade6.bought = true;
            document.getElementById("gupgrade7").style.display = "block-inline";
            refresh();
        };
    };
};

function gupgrade7() {
    if (OmegaNum.cmp(player.primary.amount, 2e9) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 2e9);
        player.gupgrade7.bought = true;
        document.getElementById("gupgrade8").style.display = "block-inline";
        refresh();
        resetprimary();
    };
};

function gupgrade8() {
    if (OmegaNum.cmp(player.primary.amount, 4e9) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 4e9);
        player.gupgrade8.bought = true;
        player.money.base = OmegaNum.pow(player.money.base, 1.05);
        document.getElementById("gupgrade9").style.display = "block-inline";
        refresh();
    };
};

function gupgrade9() {
    if (OmegaNum.cmp(player.primary.amount, 1e10) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e10);
        player.gupgrade9.bought = true;
        player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, OmegaNum.pow(OmegaNum.div(0.94, 0.96), player.upgrade3.level));
        document.getElementById("gupgrade10").style.display = "block-inline";
        refresh();
        resetprimary();
    };
};

function gupgrade10() {
    if (OmegaNum.cmp(player.primary.amount, 1e10) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e10);
        player.gupgrade10.bought = true;
        document.getElementById("gupgrade11").style.display = "block-inline";
        refresh();
    };
};

function gupgrade11() {
    if (OmegaNum.cmp(player.primary.amount, 1e11) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e11);
        player.gupgrade11.bought = true;
        document.getElementById("gupgrade12").style.display = "block-inline";
        refresh();
    };
};

function gupgrade12() {
    if (OmegaNum.cmp(player.primary.amount, 1e13) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e13);
        player.gupgrade12.bought = true;
        document.getElementById("gupgrade13").style.display = "block-inline";
        refresh();
    };
};

function gupgrade13() {
    if (OmegaNum.cmp(player.primary.amount, 1e16) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e16);
        player.gupgrade13.bought = true;
        document.getElementById("gupgrade14").style.display = "block-inline";
        refresh();
    };
};

function gupgrade14() {
    if (OmegaNum.cmp(player.primary.amount, 1e17) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e17);
        player.gupgrade14.bought = true;
        document.getElementById("gupgrade15").style.display = "block-inline";
        refresh();
    };
};

function gupgrade15() {
    if (OmegaNum.cmp(player.primary.amount, 1e25) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e25);
        player.gupgrade15.bought = true;
        document.getElementById("gupgrade16").style.display = "block-inline";
        refresh();
    };
};

function gupgrade16() {
    if (OmegaNum.cmp(player.primary.amount, 1e27) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e27);
        player.gupgrade16.bought = true;
        document.getElementById("gupgrade17").style.display = "block-inline";
        refresh();
    };
};

function gupgrade17() {
    if (OmegaNum.cmp(player.primary.amount, 1e30) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e30);
        player.gupgrade17.bought = true;
        document.getElementById("gupgrade18").style.display = "block-inline";
        refresh();
    };
};

function gupgrade18() {
    if (OmegaNum.cmp(player.primary.amount, 1e33) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e33);
        player.gupgrade18.bought = true;
        document.getElementById("gupgrade19").style.display = "block-inline";
        refresh();
    };
};

function gupgrade19() {
    if (OmegaNum.cmp(player.primary.amount, 1e50) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e50);
        player.gupgrade19.bought = true;
        refresh();
    };
};

function gupgrade20() {
    if (OmegaNum.cmp(player.primary.amount, 1e102) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, 1e102);
        player.gupgrade20.bought = true;
        refresh();
    };
};

function atomchance() {
    if (OmegaNum.cmp(player.primary.amount, player.atoms.chancecost) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, player.atoms.chancecost);
        player.atoms.chancecost = OmegaNum.pow(player.atoms.chancecost, 1.02);
        player.atoms.chance = OmegaNum.pow(player.atoms.chance, 0.98);
    };
};

function atommult() {
    if (OmegaNum.cmp(player.primary.amount, player.atoms.multcost) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, player.atoms.multcost);
        player.atoms.multcost = OmegaNum.pow(player.atoms.multcost, 1.035);
        player.atoms.mult = OmegaNum.pow(player.atoms.mult, 1.02).times(1.01);
    };
};

function atomtime() {
    if (OmegaNum.cmp(player.primary.amount, player.atoms.timecost) >= 0) {
        player.primary.amount = OmegaNum.sub(player.primary.amount, player.atoms.timecost);
        player.atoms.timecost = OmegaNum.pow(player.atoms.timecost, 1.05);
        player.atoms.time = OmegaNum.times(player.atoms.time, 0.91);
    };
};

function atomuniverse() {
    if (OmegaNum.cmp(player.atoms.amount, player.atoms.req) >= 0) {
        player.atoms.amount = OmegaNum.div(player.atoms.amount, player.atoms.req);
        player.atoms.total = OmegaNum.add(player.atoms.total, 1);
        player.atoms.req = OmegaNum.pow(player.atoms.req, 1.25).times(2);
        resetuniverses();
        player.universes.amount = OmegaNum.add(player.universes.amount, 1);
        player.money.base = OmegaNum.pow(player.universes.effect, player.universes.amount);
    };
};

function atomexp() {
    if (OmegaNum.cmp(player.atoms.amount, player.atoms.expcost) >= 0) {
        player.atoms.amount = OmegaNum.div(player.atoms.amount, player.atoms.expcost);
        player.atoms.exp = OmegaNum.add(player.atoms.exp, 0.02);
        player.atoms.expcost = OmegaNum.pow(player.atoms.req, 1.15);
    };
};
