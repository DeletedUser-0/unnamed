window.setInterval(function() {
    document.getElementById("money").innerHTML = `<span style="font-size: 50%; color: grey;">You have</span> <strong>${notate(player.money.amount)}</strong> <span style="font-size: 50%; color: grey;">points.</span>`;
    document.getElementById("mps").innerHTML = `+${notate(player.money.second)} points/s`;
    if (OmegaNum.cmp(player.upgrade1.effect, 2) == 1) {
        document.getElementById("upgrade1").innerHTML = `Increase points production by <strong>${notate(player.upgrade1.effect)}x</strong> <br> Cost: <strong>${notate(player.upgrade1.cost)}</strong> points <br> Level: ${Math.floor(player.upgrade1.level).toLocaleString("pt-PT")}`;
    } else {
        document.getElementById("upgrade1").innerHTML = `Increase points production by <strong>${notate(OmegaNum.sub(OmegaNum.times(player.upgrade1.effect, 100), 100))}%</strong> <br> Cost: <strong>${notate(player.upgrade1.cost)}</strong> points <br> Level: ${Math.floor(player.upgrade1.level).toLocaleString("pt-PT")}`;
    }
    document.getElementById("automoney").innerHTML = `Increases automatically the amount of points per second by <strong>${notate(player.auto.effect)}x</strong>: <br> Requires <strong>${notate(player.auto.requires)}</strong> points (${notate2(player.auto.level)})`;
    document.getElementById("upgrade2").innerHTML = `Increase points production by <strong>${notate2(player.upgrade2.effect)}x</strong> <br> Cost: <strong>${notate(player.upgrade2.cost)}</strong> points <br> Level: ${Math.floor(player.upgrade2.level).toLocaleString("pt-PT")}`;
    document.getElementById("upgrade3").innerHTML = `First upgrade becomes cheaper (x<strong><sup>${notate(player.upgrade3.effect)}</sup></strong>) <br> Cost: <strong>${notate(player.upgrade3.cost)}</strong> points <br> Level: ${Math.floor(player.upgrade3.level).toLocaleString("pt-PT")}`;
    document.getElementById("upgrade4").innerHTML = `The automatic points earning multiplier becomes better (x<strong><sup>${notate(player.upgrade4.effect)}</sup></strong>) <br> Cost: <strong>${notate(player.upgrade4.cost)}</strong> points <br> Level: ${Math.floor(player.upgrade4.level).toLocaleString("pt-PT")}`;
    document.getElementById("universes").innerHTML = `Universes: <b>${OmegaNum.floor(player.universes.amount)}</b> (x${notate(OmegaNum.pow(player.universes.effect, player.universes.amount))})`;
    document.getElementById("universegain").innerHTML = `Get another universe (<b>${notate(player.universes.requires)}</b> points)`
    // AFTER INFINITY
    if ((OmegaNum.cmp(player.money.amount, new OmegaNum("1.7932e308")) >= 0) || OmegaNum.cmp(player.primary.reset, 1) >= 0) {
        document.getElementById("chal").style.display = "block";
        document.getElementById("primary").innerHTML = `You have <strong>${notate(player.primary.amount)}</strong> primary points.`;
        if (player.gupgrade7.bought == false) {
            document.getElementById("primaryadd").innerHTML = `Receive <strong>${notate(player.primary.earn)}</strong> primary points.`;
        } else if (player.gupgrade7.bought == true) {
            document.getElementById("primaryadd").innerHTML = `+<strong>${notate(player.primary.earn)}</strong>/s.`;
        };
        document.getElementById("gentotal").innerHTML = `You have <strong style="font-size: 125%;">${notate(player.gen1.boost)}</strong> sub-points, translating to </strong style="font-size: 125%;">${notate(player.money.translate)}x</strong> on points receivement. <br> <br> <span style="font-size: 75%">+${notate(OmegaNum.times(player.gen1.total, player.gen1.mult))} sub-points/s.</span>`;
        if (OmegaNum.cmp(player.gen1.mult, 1) <= 0) {
            document.getElementById("gen1").innerHTML = `1<sup>st</sup> Generator (x1.00)`;
        } else {
            document.getElementById("gen1").innerHTML = `1<sup>st</sup> Generator (x${notate(player.gen1.mult)})`;
        };
        document.getElementById("gen1amount").innerHTML = `${notate(player.gen1.total)} (${player.gen1.level})`;
        document.getElementById("gen1cost").innerHTML = `Cost: <b>${notate(player.gen1.cost)}</b> Primary Points`;
        if (OmegaNum.cmp(OmegaNum.pow(OmegaNum.div(player.gen1.total, player.gen1.before), 50).times(100).sub(100).toFixed(2), 100) < 0) {
            document.getElementById("gen1mult").innerHTML = `+${OmegaNum.pow(OmegaNum.div(player.gen1.total, player.gen1.before), 50).times(100).sub(100).toFixed(2)}%/s`;
        } else {
            document.getElementById("gen1mult").innerHTML = `+${notate(OmegaNum.pow(OmegaNum.div(player.gen1.total, player.gen1.before), 50))}x/s`;
        };
        if (OmegaNum.cmp(player.gen2.mult, 1) <= 0) {
            document.getElementById("gen2").innerHTML = `2<sup>nd</sup> Generator (x1.00)`;
        } else {
            document.getElementById("gen2").innerHTML = `2<sup>nd</sup> Generator (x${notate(player.gen2.mult)})`;
        };
        document.getElementById("gen2amount").innerHTML = `${notate(player.gen2.total)} (${player.gen2.level})`;
        document.getElementById("gen2cost").innerHTML = `Cost: <b>${notate2(player.gen2.cost)}</b> Primary Points`;
        if (OmegaNum.cmp(OmegaNum.pow(OmegaNum.div(player.gen2.total, player.gen2.before), 50).times(100).sub(100).toFixed(2), 100) < 0) {
            document.getElementById("gen2mult").innerHTML = `+${OmegaNum.pow(OmegaNum.div(player.gen2.total, player.gen2.before), 50).times(100).sub(100).toFixed(2)}%/s`;
        } else {
            document.getElementById("gen2mult").innerHTML = `+${notate(OmegaNum.pow(OmegaNum.div(player.gen2.total, player.gen2.before), 50))}x/s`;
        };
        if (OmegaNum.cmp(player.gen3.mult, 1) <= 0) {
            document.getElementById("gen3").innerHTML = `3<sup>rd</sup> Generator (x1.00)`;
        } else {
            document.getElementById("gen3").innerHTML = `3<sup>rd</sup> Generator (x${notate(player.gen3.mult)})`;
        };
        if (player.gupgrade12.bought == false) {
            document.getElementById("gen3amount").innerHTML = `${player.gen3.level}`;
            document.getElementById("gen3mult").style.display = `none`;
        } else {
            document.getElementById("gen3amount").innerHTML = `${notate(player.gen3.amount)} (${player.gen3.level})`;
            if (OmegaNum.cmp(OmegaNum.pow(OmegaNum.div(player.gen3.amount, player.gen3.before), 50).times(100).sub(100).toFixed(2), 100) < 0) {
                document.getElementById("gen3mult").innerHTML = `+${OmegaNum.pow(OmegaNum.div(player.gen3.amount, player.gen3.before), 50).times(100).sub(100).toFixed(2)}%/s`;
            } else {
                document.getElementById("gen3mult").innerHTML = `+${notate(OmegaNum.pow(OmegaNum.div(player.gen3.amount, player.gen3.before), 50))}x/s`;
            };
        };
        document.getElementById("gen3cost").innerHTML = `Cost: <b>${notate2(player.gen3.cost)}</b> Primary Points`;
        if (player.gupgrade1.bought == false) {
            document.getElementById("gupgrade1").innerHTML = `Buys main upgrades automatically<br> <br> Cost: <strong>10</strong> Primary Points.`;
            document.getElementById("gupgrade2").style.display = "none";
        } else {
            document.getElementById("gupgrade1").innerHTML = `Buys main upgrades automatically<br> <br> Upgraded`;
            document.getElementById("gupgrade1").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade2.bought == false) {
            document.getElementById("gupgrade2").innerHTML = `Decrease main upgrades cost scailing <br> <br> Cost: <strong>250</strong> Primary Points.`;
            document.getElementById("gupgrade3").style.display = "none";
        } else {
            document.getElementById("gupgrade2").innerHTML = `Decrease main upgrades cost scailing <br> <br> Upgraded`;
            document.getElementById("gupgrade2").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade3.bought == false) {
            document.getElementById("gupgrade3").innerHTML = `Earns 100% of primary points earning per second <br> <br> Cost: <strong>1.00e4</strong> Primary Points.`;
            document.getElementById("gupgrade4").style.display = "none";
        } else {
            document.getElementById("gupgrade3").innerHTML = `Earns 100% of primary points earning per second <br> <br> Upgraded`;
            document.getElementById("gupgrade3").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade4.bought == false) {
            document.getElementById("gupgrade4").innerHTML = `Increases sub-points earning <br> <br> Cost: <strong>1.00e6</strong> Primary Points.`;
            document.getElementById("gupgrade5").style.display = "none";
        } else {
            document.getElementById("gupgrade4").innerHTML = `Increases sub-points earning <br> <br> Upgraded`;
            document.getElementById("gupgrade4").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade5.bought == false) {
            document.getElementById("gupgrade5").innerHTML = `Earn 30 times more primary points <br> <br> Cost: <strong>1.00e7</strong> Primary Points.`;
            document.getElementById("gupgrade6").style.display = "none";
        } else {
            document.getElementById("gupgrade5").innerHTML = `Earn 30 times more primary points <br> <br> Upgraded`;
            document.getElementById("gupgrade5").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade6.bought == false) {
            document.getElementById("gupgrade6").innerHTML = `Primary points gain boost each other <br> Currently: 1.00x <br> Cost: <strong>2.00e6</strong> Primary Points.`;
            document.getElementById("gupgrade7").style.display = "none";
        } else {
            document.getElementById("gupgrade6").innerHTML = `Primary points gain boost each other <br> Currently: ${notate(OmegaNum.log10(player.primary.amount).pow(1.5))}x<br> Upgraded`;
            document.getElementById("gupgrade6").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade7.bought == false) {
            document.getElementById("gupgrade7").innerHTML = `4th upgrade becomes 50% stronger <br> Your upgrades and points don't reset on primary <br> Cost: <strong>1.00e8</strong> Primary Points.`;
            document.getElementById("gupgrade8").style.display = "none";
        } else {
            document.getElementById("gupgrade7").innerHTML = `4th upgrade becomes 50% stronger <br> Your upgrades and points don't reset on primary <br> Upgraded`;
            document.getElementById("gupgrade7").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade8.bought == false) {
            document.getElementById("gupgrade8").innerHTML = `You gain ^1.05 more points <br> <br> Cost: <strong>3.00e8</strong> Primary Points.`;
            document.getElementById("gupgrade9").style.display = "none";
        } else {
            document.getElementById("gupgrade8").innerHTML = `You gain ^1.05 more points <br> <br> Upgraded`;
            document.getElementById("gupgrade8").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade9.bought == false) {
            document.getElementById("gupgrade9").innerHTML = `3rd main upgrade becomes 50% stronger <br> <br> Cost: <strong>1.00e10</strong> Primary Points.`;
            document.getElementById("gupgrade10").style.display = "none";
        } else {
            document.getElementById("gupgrade9").innerHTML = `3rd main upgrade becomes 50% stronger<br> <br> Upgraded`;
            document.getElementById("gupgrade9").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade10.bought == false) {
            document.getElementById("gupgrade10").innerHTML = `Generator costs become cheaper based on your primary points <br> Currently: x<sup>1.000</sup> <br> Cost: <strong>1.00e11</strong> Primary Points.`;
            document.getElementById("gupgrade11").style.display = "none";
        } else {
            document.getElementById("gupgrade10").innerHTML = `Generator costs become cheaper based on your primary points <br> Currently: x<sup>${OmegaNum.div(1, OmegaNum.pow(OmegaNum.log10(player.primary.amount), 0.2)).toFixed(3)}</sup> <br> Upgraded`;
            document.getElementById("gupgrade10").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade11.bought == false) {
            if (player.challenge1.completed == true) {
                document.getElementById("gupgrade11").innerHTML = `Increase sub-points effect on points amount <br> x<sup>1.2</sup> -> x<sup>1.6</sup> <br> Cost: <strong>3.00e11</strong> Primary Points.`;
            } else {
                document.getElementById("gupgrade11").innerHTML = `Increase sub-points effect on points amount <br> x<sup>0.75</sup> -> x<sup>1.6</sup> <br> Cost: <strong>3.00e11</strong> Primary Points.`;
            };
            document.getElementById("gupgrade12").style.display = "none";
        } else {
            if (player.challenge1.completed == true) {
                document.getElementById("gupgrade11").innerHTML = `Increase sub-points effect on points amount <br> x<sup>1.2</sup> -> x<sup>1.6</sup> <br> Upgraded`;
            } else {
                document.getElementById("gupgrade11").innerHTML = `Increase sub-points effect on points amount <br> x<sup>0.6</sup> -> x<sup>1.6</sup> <br> Upgraded`;
            };
            document.getElementById("gupgrade11").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade12.bought == false) {
            document.getElementById("gupgrade12").innerHTML = `Earn more 3rd generators depending on your 3rd generator amount <br> Currently: 0.00/s <br> Cost: <strong>1.00e13</strong> Primary Points.`;
            document.getElementById("gupgrade13").style.display = "none";
        } else {
            document.getElementById("gupgrade12").innerHTML = `Earn more 3rd generators depending on your 3rd generator amount <br> Currently: ${notate(OmegaNum.times(player.gen3.amount, OmegaNum.sub(OmegaNum.pow(OmegaNum.div(player.gen3.amount, player.gen3.before), 50), 1)))}/s <br> Upgraded`;
            document.getElementById("gupgrade12").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade13.bought == false) {
            document.getElementById("gupgrade13").innerHTML = `Generators multiplier become stronger based on your points amount <br> Currently: x<sup>1.000</sup> <br> Cost: <strong>1.00e14</strong> Primary Points.`;
            document.getElementById("gupgrade14").style.display = "none";
        } else {
            document.getElementById("gupgrade13").innerHTML = `Generators multiplier become stronger based on your points amount <br> Currently: x<sup>${OmegaNum.pow(1.1, OmegaNum.log10(OmegaNum.log10(player.money.amount))).toFixed(3)}</sup> <br> Upgraded`;
            document.getElementById("gupgrade13").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade14.bought == false) {
            document.getElementById("gupgrade14").innerHTML = `You unlock 1 new main upgrade <br> <br> Cost: <strong>1.00e16</strong> Primary Points.`;
            document.getElementById("gupgrade15").style.display = "none";
        } else {
            document.getElementById("gupgrade14").innerHTML = `You unlock 1 new main upgrade <br> <br> Upgraded`;
            document.getElementById("gupgrade14").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade15.bought == false) {
            document.getElementById("gupgrade15").innerHTML = `You unlock 1 new main upgrade <br> <br> Cost: <strong>1.00e17</strong> Primary Points.`;
            document.getElementById("gupgrade16").style.display = "none";
        } else {
            document.getElementById("gupgrade15").innerHTML = `You unlock 1 new main upgrade <br> <br> Upgraded`;
            document.getElementById("gupgrade15").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade16.bought == false) {
            document.getElementById("gupgrade16").innerHTML = `3rd generator multiplier is increased by 1.00e13x <br> <br> Cost: <strong>1.00e25</strong> Primary Points.`;
            document.getElementById("gupgrade17").style.display = "none";
        } else {
            document.getElementById("gupgrade16").innerHTML = `3rd generator multiplier is increased by 1.00e13x <br> <br> Upgraded`;
            document.getElementById("gupgrade16").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade17.bought == false) {
            document.getElementById("gupgrade17").innerHTML = `You produce even more 3rd generators <br> <br> Cost: <strong>1.00e27</strong> Primary Points.`;
            document.getElementById("gupgrade18").style.display = "none";
        } else {
            document.getElementById("gupgrade17").innerHTML = `You produce even more 3rd generators <br> <br> Upgraded`;
            document.getElementById("gupgrade17").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade18.bought == false) {
            document.getElementById("gupgrade18").innerHTML = `2nd generator multiplier is increased by 1.00e24x <br> <br> Cost: <strong>1.00e30</strong> Primary Points.`;
        } else {
            document.getElementById("gupgrade18").innerHTML = `2nd generator multiplier is increased by 1.00e24x <br> <br> Upgraded`;
            document.getElementById("gupgrade18").style.backgroundColor = "lightgreen";
        };
    // BEFORE INFINITY
    } else {
        document.getElementById("primary").innerHTML = `You are <strong>${OmegaNum.div(OmegaNum.log10(OmegaNum.add(player.money.amount, 1)), 308.2537).times(100).toFixed(2)}%</strong> there.`;
        document.getElementById("primaryadd").innerHTML = `Reach 1.8e308 points first`;
        document.getElementById("gentotal").innerHTML = `Reach 1.8e308 points first`;
        document.getElementById("generators").style.display = "none";
        document.getElementById("gupgrades").style.display = "none";
        document.getElementById("chal").style.display = "none";
        document.getElementById("Challenges").style.display = "none";
    };
    if (player.gupgrade14.bought == true) {
        document.getElementById("upgrade5").style.display = "block-inline";
        document.getElementById("upgrade5").innerHTML = `Every upgrade (expect this one) and all generators become cheaper <br> Currently: x<sup>${notate(player.upgrade5.effect)}</sup> <br> Cost: <strong>${notate(player.upgrade5.cost)}</strong> points.`
    } else {
        document.getElementById("upgrade5").style.display = "none";
    };
    if (player.gupgrade15.bought == true) {
        document.getElementById("upgrade6").style.display = "block-inline";
        document.getElementById("upgrade6").innerHTML = `You earn twice as many primary points as you earn now <br> Currently: x${notate2(OmegaNum.pow(2, player.upgrade6.level))} <br> Cost: <strong>${notate(player.upgrade6.cost)}</strong> points.`
    } else {
        document.getElementById("upgrade6").style.display = "none";
    };
    if (player.challenge1.completed == false) {
        document.getElementById("chal1").innerHTML = `Challenge 1 <br> <br> Sub-points effect is powered by x<sup>0.125</sup> <br> Goal: 1.00e21 in ${notate(player.challenge1.time)} seconds`;
        document.getElementById("chal2").style.display = `none`;
        if (player.challenge1.active == false) {
            document.getElementById("chal1").style.backgroundColor = "lightgrey";
        } else {
            document.getElementById("chal1").style.backgroundColor = "orange";
        };
    } else {
        document.getElementById("chal1").innerHTML = `Challenge 1 <br> <br> Sub-points effect is powered by x<sup>0.125</sup> <br> Reward: Sub-points translation improved to x<sup>0.4</sup>`;
        document.getElementById("chal1").style.backgroundColor = "lightgreen";
        document.getElementById("chal2").style.display = `block-inline`;
    };
    if (player.challenge2.completed == false) {
        document.getElementById("chal2").innerHTML = `Challenge 2 <br> <br> Automatic points earning becomes weakened <br> Goal: 1.00e60 in ${notate(player.challenge2.time)} seconds`;
        if (player.challenge2.active == false) {
            document.getElementById("chal2").style.backgroundColor = "lightgrey";
        } else {
            document.getElementById("chal2").style.backgroundColor = "orange";
        };
    } else {
        document.getElementById("chal2").innerHTML = `Challenge 2 <br> <br> Automatic points earning becomes weakened <br> Reward: Second upgrade's cost is reduced by x<sup>0.9</sup>.`;
        document.getElementById("chal2").style.backgroundColor = "lightgreen";
    };
    if (player.challenge3.completed == false) {
        document.getElementById("chal3").innerHTML = `Challenge 3 <br> <br> 3<sup>rd</sup> upgrade does nothing <br> Goal: 1.00e160 in ${notate(player.challenge3.time)} seconds`;
        if (player.challenge3.active == false) {
            document.getElementById("chal3").style.backgroundColor = "lightgrey";
        } else {
            document.getElementById("chal3").style.backgroundColor = "orange";
        };
    } else {
        document.getElementById("chal3").innerHTML = `Challenge 3 <br> <br> 3<sup>rd</sup> upgrade does nothing <br> Reward: Universes effect to money becomes bigger.`;
        document.getElementById("chal3").style.backgroundColor = "lightgreen";
    };
    if (player.challenge4.completed == false) {
        document.getElementById("chal4").innerHTML = `Challenge 4 <br> <br> 1<sup>st</sup> upgrade does nothing. <br> Automatic points earning becomes stronger. <br> Goal: 1.00e19 in ${notate(player.challenge4.time)} seconds`;
        if (player.challenge4.active == false) {
            document.getElementById("chal4").style.backgroundColor = "lightgrey";
        } else {
            document.getElementById("chal4").style.backgroundColor = "orange";
        };
    } else {
        document.getElementById("chal4").innerHTML = `Challenge 4 <br> <br> 1<sup>st</sup> upgrade does nothing. <br> Automatic points earning becomes stronger. <br> Reward: You gain 15 times more prestige points.`;
        document.getElementById("chal4").style.backgroundColor = "lightgreen";
    };
    if (player.challenge5.completed == false) {
        document.getElementById("chal5").innerHTML = `Challenge 5 <br> <br> Challenges 1 and 2 are combined <br> Goal: 1.00e63 in ${notate(player.challenge5.time)} seconds`;
        if (player.challenge5.active == false) {
            document.getElementById("chal5").style.backgroundColor = "lightgrey";
        } else {
            document.getElementById("chal5").style.backgroundColor = "orange";
        };
    } else {
        document.getElementById("chal5").innerHTML = `Challenge 5 <br> <br> Challenges 1 and 2 are combined <br> Reward: Sub-points translation improved to x<sup>0.75</sup>`;
        document.getElementById("chal5").style.backgroundColor = "lightgreen";
    };
    if (player.challenge6.completed == false) {
        document.getElementById("chal6").innerHTML = `Challenge 6 <br> <br> Universes boost only 2x to money. 4th upgrade is disabled. Sub-points effect becomes worse. <br> Goal: 1.00e162 in ${player.challenge6.time.toFixed(1)} seconds`;
        if (player.challenge6.active == false) {
            document.getElementById("chal6").style.backgroundColor = "lightgrey";
        } else {
            document.getElementById("chal6").style.backgroundColor = "orange";
        };
    } else {
        document.getElementById("chal6").innerHTML = `Challenge 6 <br> <br> Universes boost only 2x to money. 4th upgrade is disabled. Sub-points translation is disabled. <br> Reward: Decrease universe cost scailing.`;
        document.getElementById("chal6").style.backgroundColor = "lightgreen";
    };
}, 0);
