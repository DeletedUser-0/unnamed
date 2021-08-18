window.setInterval(function() {
    document.getElementById("money").innerHTML = `<span style="font-size: 50%; color: grey;">You have</span> <strong>${notate(player.money.amount)}</strong> <span style="font-size: 50%; color: grey;">points.</span>`;
    document.getElementById("mps").innerHTML = `+${notate(player.money.second)} points/s`;
    if (OmegaNum.cmp(player.upgrade1.effect, 2) == 1) {
        document.getElementById("upgrade1").innerHTML = `Increase points production by <strong>${notate(player.upgrade1.effect)}x</strong> <br> Cost: <strong>${notate(player.upgrade1.cost)}</strong> points <br> Level: ${Math.floor(player.upgrade1.level).toLocaleString("pt-PT")}`;
    } else {
        document.getElementById("upgrade1").innerHTML = `Increase points production by <strong>${notate(OmegaNum.sub(OmegaNum.times(player.upgrade1.effect, 100), 100))}%</strong> <br> Cost: <strong>${notate(player.upgrade1.cost)}</strong> points <br> Level: ${Math.floor(player.upgrade1.level).toLocaleString("pt-PT")}`;
    }
    document.getElementById("automoney").innerHTML = `Increases automatically the amount of points per second by <strong>${notate(player.auto.effect)}x</strong>: <br> Requires <strong>${notate(player.auto.requires)}</strong> points.`;
    document.getElementById("upgrade2").innerHTML = `Increase points production by <strong>${notate(player.upgrade2.effect)}x</strong> <br> Cost: <strong>${notate(player.upgrade2.cost)}</strong> points <br> Level: ${Math.floor(player.upgrade2.level).toLocaleString("pt-PT")}`;
    document.getElementById("upgrade3").innerHTML = `First upgrade becomes cheaper (x<strong><sup>${notate(player.upgrade3.effect)}</sup></strong>) <br> Cost: <strong>${notate(player.upgrade3.cost)}</strong> points <br> Level: ${Math.floor(player.upgrade3.level).toLocaleString("pt-PT")}`;
    document.getElementById("upgrade4").innerHTML = `You gain more points based on time elapsed (<strong>+${notate(OmegaNum.sub(OmegaNum.times(player.upgrade4.effect, 10000), 10000))}</strong>%/s) <br> Cost: <strong>${notate(player.upgrade4.cost)}</strong> points <br> Level: ${Math.floor(player.upgrade4.level).toLocaleString("pt-PT")}`;
    // generators
    if ((OmegaNum.cmp(player.money.amount, new OmegaNum("1.7932e308")) >= 0) || OmegaNum.cmp(player.primary.reset, 0) > 0) {
        document.getElementById("primary").innerHTML = `You have <strong>${notate2(player.primary.amount)}</strong> primary points.`;
        document.getElementById("primaryadd").innerHTML = `Receive <strong>${notate2(player.primary.earn)}</strong> primary points.`;
        document.getElementById("gentotal").innerHTML = `You have <strong style="font-size: 125%;">${notate(player.gen1.boost)}</strong> sub-points, translating to </strong style="font-size: 125%;">${notate(player.money.translate)}x</strong> on points receivement. <br> <br> <span style="font-size: 75%">+${notate(OmegaNum.times(player.gen1.total, player.gen1.mult))} sub-points/s.</span>`;
        document.getElementById("gen1").innerHTML = `1<sup>st</sup> Generator`;
        document.getElementById("gen1amount").innerHTML = `${notate(player.gen1.total)} (${player.gen1.level})`;
        document.getElementById("gen1cost").innerHTML = `Cost: <b>${notate(player.gen1.cost)}</b> Primary Points`;
        document.getElementById("gen2").innerHTML = `2<sup>nd</sup> Generator`;
        document.getElementById("gen2amount").innerHTML = `${notate(player.gen2.total)} (${player.gen2.level})`;
        document.getElementById("gen2cost").innerHTML = `Cost: <b>${notate2(player.gen2.cost)}</b> Primary Points`;
        document.getElementById("gen3").innerHTML = `3<sup>rd</sup> Generator`;
        document.getElementById("gen3amount").innerHTML = `${notate(player.gen3.total)} (${player.gen3.level})`;
        document.getElementById("gen3cost").innerHTML = `Cost: <b>${notate2(player.gen3.cost)}</b> Primary Points`;
        if (player.gupgrade1.bought == false) {
            document.getElementById("gupgrade1").innerHTML = `Buys main upgrades automatically <br> <br> Cost: <strong>100</strong> Primary Points.`;        } else {
            document.getElementById("gupgrade1").innerHTML = `Buys main upgrades automatically <br> <br> Upgraded`;
            document.getElementById("gupgrade1").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade2.bought == false) {
            document.getElementById("gupgrade2").innerHTML = `Decrease main upgrades cost scailing <br> <br> Cost: <strong>250</strong> Primary Points.`;
        } else {
            document.getElementById("gupgrade2").innerHTML = `Decrease main upgrades cost scailing <br> <br> Upgraded`;
            document.getElementById("gupgrade2").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade3.bought == false) {
            document.getElementById("gupgrade3").innerHTML = `Earns 100% of primary points earning per second <br> <br> Cost: <strong>2000</strong> Primary Points.`;
        } else {
            document.getElementById("gupgrade3").innerHTML = `Earns 100% of primary points earning per second <br> <br> Upgraded`;
            document.getElementById("gupgrade3").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade4.bought == false) {
            document.getElementById("gupgrade4").innerHTML = `Increases sub-points earning <br> <br> Cost: <strong>10 000</strong> Primary Points.`;
        } else {
            document.getElementById("gupgrade4").innerHTML = `Increases sub-points earning <br> <br> Upgraded`;
            document.getElementById("gupgrade4").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade5.bought == false) {
            document.getElementById("gupgrade5").innerHTML = `Earn 30 times more primary points <br> <br> Cost: <strong>250 000</strong> Primary Points.`;
        } else {
            document.getElementById("gupgrade5").innerHTML = `Earn 30 times more primary points <br> <br> Upgraded`;
            document.getElementById("gupgrade5").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade6.bought == false) {
            document.getElementById("gupgrade6").innerHTML = `You gain more primary points based on your primary points <br> Currently: 1.00x <br> Cost: <strong>25 000 000</strong> Primary Points.`;
        } else {
            document.getElementById("gupgrade6").innerHTML = `You gain more primary points based on your primary points <br> Currently: ${notate(OmegaNum.log10(player.primary.amount).pow(1.5))}x<br> Upgraded`;
            document.getElementById("gupgrade6").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade7.bought == false) {
            document.getElementById("gupgrade7").innerHTML = `Your upgrades and points amount don't reset on primary <br> <br> Cost: <strong>2.00e10</strong> Primary Points.`;
        } else {
            document.getElementById("gupgrade7").innerHTML = `Your upgrades and points amount don't reset on primary <br> <br> Upgraded`;
            document.getElementById("gupgrade7").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade8.bought == false) {
            document.getElementById("gupgrade8").innerHTML = `You gain ^1.05 more points <br> <br> Cost: <strong>1.00e12</strong> Primary Points.`;
        } else {
            document.getElementById("gupgrade8").innerHTML = `You gain ^1.05 more points <br> <br> Upgraded`;
            document.getElementById("gupgrade8").style.backgroundColor = "lightgreen";
        };
        if (player.gupgrade9.bought == false) {
            document.getElementById("gupgrade9").innerHTML = `3rd main upgrade becomes 20% stronger <br> <br> Cost: <strong>2.50e14</strong> Primary Points.`;
        } else {
            document.getElementById("gupgrade9").innerHTML = `3rd main upgrade becomes 20% stronger<br> <br> Upgraded`;
            document.getElementById("gupgrade9").style.backgroundColor = "lightgreen";
        };
    } else {
        document.getElementById("primary").innerHTML = `You are <strong>${OmegaNum.div(OmegaNum.log10(OmegaNum.add(player.money.amount, 1)), 308.2537).times(100).toFixed(2)}%</strong> there.`;
        document.getElementById("primaryadd").style.display = `none`;
        document.getElementById("gentotal").innerHTML = `Reach 1.8e308 first`;
        document.getElementById("generators").style.display = "none";
        document.getElementById("gupgrades").style.display = "none";
    };
}, 0);

