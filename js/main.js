class Player {
    constructor(data) {

        this.money = {
            amount: data?.money?.amount || 0,
            second: data?.money?.second || 1,
            translate: data?.money?.translate || 1,
            base: data?.money?.base || 1,
            max: data?.money?.max || 0,
            maxbase: data?.money?.maxbase || 0,
            last: data?.money?.last || 1,
        };

        this.upgrade1 = {
            cost: data?.upgrade1?.cost || 10,
            effect: data?.upgrade1?.effect || 2,
            level: data?.upgrade1?.level || 0,
        };

        this.auto = {
            requires: data?.auto?.requires || 1000,
            effect: data?.auto?.effect || 3,
            level: data?.auto?.level || 0,
        };

        this.upgrade2 ={
            cost: data?.upgrade2?.cost || 1e15,
            effect: data?.upgrade2?.effect || 4,
            level: data?.upgrade2?.level || 0,
        };

        this.upgrade3 = {
            cost: data?.upgrade3?.cost || 1e79,
            effect: data?.upgrade3?.effect || 1,
            level: data?.upgrade3?.level || 0,
        };

        this.upgrade4 = {
            cost: data?.upgrade4?.cost || 1e113,
            effect: data?.upgrade4?.effect || 1,
            level: data?.upgrade4?.level || 0,
        };

        this.universes = {
            amount: data?.universes?.amount || 0,
            effect: data?.universes?.effect || 4,
            requires: data?.universes?.requires || 1e60,
        };

        this.primary = {
            amount: data?.primary?.amount || 0,
            earn: data?.primary?.earn || 0,
            reset: data?.primary?.reset || 0,
            total: data?.primary?.total || 0,
        };

        this.genpow = data?.genpow || 1,

        this.gen1 = {
            cost: data?.gen1?.cost || 1,
            level: data?.gen1?.level || 0,
            mult: data?.gen1?.mult || 0.001,
            boost: data?.gen1?.boost || 1,
            total: data?.gen1?.total || 0,
            before: data?.gen1?.before || 0,
        };

        this.gen2 = {
            cost: data?.gen2?.cost || 2,
            level: data?.gen2?.level || 0,
            mult: data?.gen2?.mult || 0.00137,
            total: data?.gen2?.total || 0,
            before: data?.gen2?.before || 0,
        };

        this.gen3 = {
            cost: data?.gen3?.cost || 100,
            level: data?.gen3?.level || 0,
            amount: data?.gen3?.amount || 0,
            mult: data?.gen3?.mult || 0.00188,
            before: data?.gen3?.before || 0,
        };

        this.gupgrade1 = {
            bought: data?.gupgrade1?.bought || false,
        };

        this.gupgrade2 = {
            bought: data?.gupgrade2?.bought || false,
        };

        this.gupgrade3 = {
            bought: data?.gupgrade3?.bought || false,
        };

        this.gupgrade4 = {
            bought: data?.gupgrade4?.bought || false,
        };

        this.gupgrade5 = {
            bought: data?.gupgrade5?.bought || false,
        };

        this.gupgrade6 = {
            bought: data?.gupgrade6?.bought || false,
        };

        this.gupgrade7 = {
            bought: data?.gupgrade7?.bought || false,
        };

        this.gupgrade8 = {
            bought: data?.gupgrade8?.bought || false,
        };

        this.gupgrade9 = {
            bought: data?.gupgrade9?.bought || false,
        };

        this.gupgrade10 = {
            bought: data?.gupgrade10?.bought || false,
        };

        this.gupgrade11 = {
            bought: data?.gupgrade11?.bought || false,
        };

        this.gupgrade12 = {
            bought: data?.gupgrade12?.bought || false,
        };

        this.gupgrade13 = {
            bought: data?.gupgrade13?.bought || false,
        };

        this.gupgrade14 = {
            bought: data?.gupgrade14?.bought || false,
        };

        this.upgrade5 = {
            effect: data?.upgrade5?.effect || 1,
            cost: data?.upgrade5?.cost || new OmegaNum("e1e3"),
            level: data?.upgrade5?.level || 0,
        };

        this.gupgrade15 = {
            bought: data?.gupgrade15?.bought || false,
        };

        this.upgrade6 = {
            effect: data?.upgrade6?.effect || 1,
            cost: data?.upgrade6?.cost || new OmegaNum("ee3"),
            level: data?.upgrade6?.level || 0,
        };

        this.gupgrade16 = {
            bought: data?.gupgrade16?.bought || false,
        };

        this.gupgrade17 = {
            bought: data?.gupgrade17?.bought || false,
        };

        this.gupgrade18 = {
            bought: data?.gupgrade18?.bought || false,
        };

        this.gupgrade19 = {
            bought: data?.gupgrade19?.bought || false,
        };

        this.gupgrade20 = {
            bought: data?.gupgrade20?.bought || false,
        };

        this.challenge = {
            active: data?.challenge?.active || false,
        };

        this.challenge1 = {
            active: data?.challenge1?.active || false,
            completed: data?.challenge1?.completed || false,
            time: data?.challenge1?.time || 120,
        };

        this.challenge2 = {
            active: data?.challenge2?.active || false,
            completed: data?.challenge2?.completed || false,
            time: data?.challenge2?.time || 90,
        };

        this.challenge3 = {
            active: data?.challenge3?.active || false,
            completed: data?.challenge3?.completed || false,
            time: data?.challenge3?.time || 100,
        };

        this.challenge4 = {
            active: data?.challenge4?.active || false,
            completed: data?.challenge4?.completed || false,
            time: data?.challenge4?.time || 30,
        };

        this.challenge5 = {
            active: data?.challenge5?.active || false,
            completed: data?.challenge5?.completed || false,
            time: data?.challenge5?.time || 60,
        };

        this.challenge6 = {
            active: data?.challenge6?.active || false,
            completed: data?.challenge6?.completed || false,
            time: data?.challenge6?.time || 1000,
        };

        this.antipoints = data?.antipoints || 1;

        this.challenge7 = {
            active: data?.challenge7?.active || false,
            completed: data?.challenge7?.completed || false,
            time: data?.challenge7?.time || 200,
            pow: data?.challenge7?.pow || 1,
        };

        this.challenge8 = {
            active: data?.challenge8?.active || false,
            completed: data?.challenge8?.completed || false,
            time: data?.challenge8?.time || 240,
        };

        this.atoms = {
            amount: data?.atoms?.amount || 1,
            req: data?.atoms?.req || 10,
            total: data?.atoms?.total || 0,
            mult: data?.atoms?.mult || 1.1,
            multcost: data?.atoms?.multcost || 1e50,
            chance: data?.atoms?.chance || 0.01,
            chancecost: data?.atoms?.chancecost || 1e50,
            time: data?.atoms?.time || 999.99999,
            timecost: data?.atoms?.timecost || 1e75,
            elapsed: data?.atoms?.elapsed || 0,
            exp: data?.atoms?.exp || 1,
            expcost: data?.atoms?.expcost || 3.3333e33,
        };
    };
};

var player = new Player();

window.setInterval (function() {
    player.money.last = player.money.amount;
    // generator boost to points
    if (OmegaNum.cmp(player.money.translate, 0) <= 0) {
        player.money.second = OmegaNum.times(player.money.base, OmegaNum.add(player.money.translate, 1));
    } else {
        player.money.second = OmegaNum.times(player.money.base, player.money.translate);
    };
    player.gen1.before = player.gen1.total;
    player.gen2.before = player.gen2.total;
    player.money.amount = OmegaNum.add(player.money.amount, OmegaNum.div(player.money.second, 50));
    // translate sub-points to points receivement
    if (player.challenge1.active == false) {
        if (player.challenge5.active == false) {
            if (player.gupgrade11.bought == false) {
                if (player.challenge1.completed == true) {
                    if (player.challenge5.completed == true) {
                        if (player.challenge6.active == false) {
                            player.money.translate = OmegaNum.pow(OmegaNum.add(player.gen1.boost, 1), 0.75);
                        } else {
                            player.money.translate = OmegaNum.pow(1.02, OmegaNum.log(player.gen1.boost));
                        };
                    } else {
                        player.money.translate = OmegaNum.pow(OmegaNum.add(player.gen1.boost, 1), 0.4);
                    };
                } else {
                    player.money.translate = OmegaNum.pow(OmegaNum.add(player.gen1.boost, 1), 0.25);
                };
            } else {
                player.money.translate = OmegaNum.pow(player.gen1.boost, 1.1);
            };
        } else {
            player.money.translate = OmegaNum.pow(OmegaNum.add(player.gen1.boost, 1), 0.125);
        };
    } else {
        player.money.translate = OmegaNum.pow(OmegaNum.add(player.gen1.boost, 1), 0.125);
    };

    if (player.challenge8.completed == true) {
        player.money.translate = OmegaNum.pow(player.gen1.boost, OmegaNum.log10(OmegaNum.log10(player.primary.total)));
    };
    // auto money //
    if (player.challenge8.active == false) {
        if (OmegaNum.cmp(player.auto.requires, 1e105) < 0) {
            if ((player.challenge2.active == true) || player.challenge5.active == true) {
                player.auto.effect = OmegaNum.pow(OmegaNum.sqrt(3), player.upgrade4.effect);
            } else if (player.challenge4.active == true) {
                player.auto.effect = OmegaNum.pow(27, player.upgrade4.effect);
            } else {
                player.auto.effect = OmegaNum.pow(3, player.upgrade4.effect);
            };
        } else if ((OmegaNum.cmp(player.auto.requires, 1e105) >= 0) && (OmegaNum.cmp(player.auto.requires, 1e202) <= 0)) {
            if ((player.challenge2.active == true) || player.challenge5.active == true) {
                player.auto.effect = OmegaNum.pow(OmegaNum.sqrt(27), player.upgrade4.effect);
            } else if (player.challenge4.active == true) {
                player.auto.effect = OmegaNum.pow(19683, player.upgrade4.effect);
            } else {
                player.auto.effect = OmegaNum.pow(27, player.upgrade4.effect);
            }
        } else if ((OmegaNum.cmp(player.auto.requires, 1e202) >= 0) && (OmegaNum.cmp(player.auto.requires, new OmegaNum("e530")) <= 0)) {
            if ((player.challenge2.active == true) || player.challenge5.active == true) {
                player.auto.effect = OmegaNum.pow(OmegaNum.sqrt(1000), player.upgrade4.effect);
            } else if (player.challenge4.active == true) {
                player.auto.effect = OmegaNum.pow(1e9, player.upgrade4.effect);
            } else {
                player.auto.effect = OmegaNum.pow(1000, player.upgrade4.effect);
            };
        } else if ((OmegaNum.cmp(player.auto.requires, new OmegaNum("1e530")) >= 0) && (OmegaNum.cmp(player.auto.requires, new OmegaNum("1e1300")) < 0)) {
            if ((player.challenge2.active == true) || player.challenge5.active == true) {
                player.auto.effect = OmegaNum.pow(OmegaNum.sqrt(30), player.upgrade4.effect);
            } else if (player.challenge4.active == true) {
                player.auto.effect = OmegaNum.pow(27000, player.upgrade4.effect);
            } else {
                player.auto.effect = OmegaNum.pow(30, player.upgrade4.effect);
            };
        } else if (OmegaNum.cmp(player.auto.requires, new OmegaNum("1e1300")) >= 0) {
            if ((player.challenge2.active == true) || player.challenge5.active == true) {
                player.auto.effect = OmegaNum.pow(OmegaNum.sqrt(3), player.upgrade4.effect);
            } else if (player.challenge4.active == true) {
                player.auto.effect = OmegaNum.pow(27, player.upgrade4.effect);
            } else {
                player.auto.effect = OmegaNum.pow(3, player.upgrade4.effect);
            };
        };
    
        if (OmegaNum.cmp(player.money.amount, player.auto.requires) >= 0) {
            player.auto.level = OmegaNum.add(player.auto.level, 1);
            if (OmegaNum.cmp(player.auto.requires, 1e105) < 0) {
                player.auto.requires = OmegaNum.times(player.auto.requires, 1000);
            } else if ((OmegaNum.cmp(player.auto.requires, 1e105) >= 0) && (OmegaNum.cmp(player.auto.requires, 1e202) <= 0)) {
                player.auto.requires = OmegaNum.times(player.auto.requires, 1e9);
            } else if ((OmegaNum.cmp(player.auto.requires, 1e202) >= 0) && (OmegaNum.cmp(player.auto.requires, new OmegaNum("1e530")) < 0)) {
                player.auto.requires = OmegaNum.times(player.auto.requires, 1e11);
            } else if ((OmegaNum.cmp(player.auto.requires, new OmegaNum("1e530")) >= 0) && (OmegaNum.cmp(player.auto.requires, new OmegaNum("1e1300")) < 0)) {
                player.auto.requires = OmegaNum.times(player.auto.requires, 1e9);
            } else if (OmegaNum.cmp(player.auto.requires, new OmegaNum("1e1300")) >= 0) {
                player.auto.effect = OmegaNum.pow(3, player.upgrade4.effect);
                player.auto.requires = OmegaNum.times(player.auto.requires, 1e12);
            };
            player.money.base = OmegaNum.times(player.auto.effect, player.money.base);
        };
        if (player.gupgrade9.bought == false) {
            if (player.challenge3.active == false) {
                player.upgrade3.effect = OmegaNum.pow(0.96, player.upgrade3.level);
            } else {
                player.upgrade3.effect = OmegaNum.pow(1, player.upgrade3.level);
            };
        } else {
            if (player.challenge3.active == false) {
                player.upgrade3.effect = OmegaNum.pow(0.94, player.upgrade3.level);
            } else {
                player.upgrade3.effect = OmegaNum.pow(1, player.upgrade3.level);
            };
        };    
    };
    
    // generators
    player.gen1.boost = OmegaNum.add(player.gen1.boost, OmegaNum.times(player.gen1.total, OmegaNum.div(player.gen1.mult, 50)));
    if (player.gupgrade4.bought == true) {
        if (player.gupgrade18.bought == false) {
            player.gen1.mult = OmegaNum.pow(20, OmegaNum.sub(player.gen1.level, 1));
        } else {
            player.gen1.mult = OmegaNum.pow(20, OmegaNum.sub(player.gen1.level, 1)).times(1e15);
        };
        if (player.gupgrade17.bought == false) {
            player.gen2.mult = OmegaNum.pow(14, OmegaNum.sub(player.gen2.level, 1));
        } else {
            player.gen2.mult = OmegaNum.pow(14, OmegaNum.sub(player.gen2.level, 1)).times(1e24);
        };
        if (player.gupgrade16.bought == false) {
            if (player.gupgrade15.bought == false) {
                player.gen3.mult = OmegaNum.pow(9, OmegaNum.sub(player.gen3.level, 1));
            } else {
                player.gen3.mult = OmegaNum.pow(9, OmegaNum.sub(player.gen3.level, 1)).times(1e13);
            };    
        } else {
            player.gen3.mult = OmegaNum.pow(9, OmegaNum.sub(player.gen3.level, 1)).times(1e18);
        };
    } else {
        player.gen1.mult = OmegaNum.pow(4, OmegaNum.sub(player.gen1.level, 1));
        player.gen2.mult = OmegaNum.pow(3.2, OmegaNum.sub(player.gen2.level, 1));
        player.gen3.mult = OmegaNum.pow(2.7, OmegaNum.sub(player.gen3.level, 1));
    };
    player.gen1.total = OmegaNum.add(player.gen1.total, OmegaNum.times(player.gen2.total, OmegaNum.div(player.gen2.mult, 50)));
    player.gen2.total = OmegaNum.add(player.gen2.total, OmegaNum.times(player.gen3.amount, OmegaNum.div(player.gen3.mult, 50)));
    // automatically earns primary points
    if (player.gupgrade3.bought == true) {
        player.primary.amount = OmegaNum.add(player.primary.amount, OmegaNum.div(player.primary.earn, 50));
        player.primary.total = OmegaNum.add(player.primary.total, OmegaNum.div(player.primary.earn, 50));
    };
    if (isNaN(player.upgrade1.level)) {
        player.upgrade1.level = player.upgrade1.level.array[0];
    };
    if (isNaN(player.upgrade2.level)) {
        player.upgrade2.level = player.upgrade2.level.array[0];
    };
    if (isNaN(player.upgrade4.level)) {
        player.upgrade4.level = player.upgrade4.level.array[0];
    };
    player.upgrade5.cost = OmegaNum.pow(1e5, player.upgrade5.level).times(new OmegaNum("1e1000"));
    player.upgrade5.effect = OmegaNum.pow(0.9975062, player.upgrade5.level);
    if ((OmegaNum.cmp(player.upgrade5.cost, new OmegaNum("1e2000")) < 0)) {
        player.upgrade5.cost = OmegaNum.pow(1e5, player.upgrade5.level).times(new OmegaNum("1e850"));
    } else if ((OmegaNum.cmp(player.upgrade5.cost, new OmegaNum("1e2000")) >= 0)) {
        player.upgrade5.cost = OmegaNum.pow(10, OmegaNum.round(OmegaNum.times(2000, OmegaNum.pow(1.005, OmegaNum.sub(player.upgrade5.level, 200)))));
    };
    // challenge 1
    if (player.challenge1.active == true) {
        player.challenge1.time = OmegaNum.sub(player.challenge1.time, 0.02);
        if (OmegaNum.cmp(player.money.amount, new OmegaNum("1e21")) >= 0) {
            player.challenge1.active = false;
            player.challenge1.completed = true;
            player.challenge.active = false;
            upgrade2();
        };
        if (player.challenge1.time <= 0) {
            challenge1enter();
        };
    };
    // challenge 2
    if (player.challenge2.active == true) {
        player.challenge2.time = OmegaNum.sub(player.challenge2.time, 0.02);
        if (OmegaNum.cmp(player.money.amount, new OmegaNum("1e60")) >= 0) {
            player.challenge2.active = false;
            player.challenge2.completed = true;
            player.challenge.active = false;
            upgrade2();
        };
        if (player.challenge2.time <= 0) {
            challenge2enter();
            resetuniverses();
        };
    };
    // challenge 3
    if (player.challenge3.active == true) {
        player.challenge3.time = OmegaNum.sub(player.challenge3.time, 0.02);
        if (OmegaNum.cmp(player.money.amount, new OmegaNum("7.77e177")) >= 0) {
            player.challenge3.active = false;
            player.challenge3.completed = true;
            player.challenge.active = false;
            upgrade2();
        };
        if (player.challenge3.time <= 0) {
            challenge3enter();
            resetuniverses();
        };
    };

    if (player.challenge7.completed == false) {
        if (player.challenge3.completed == true) {
            if (player.challenge6.active == false) {
                player.universes.effect = 100;
            } else {
                player.universes.effect = 2;
            };
        } else {
            player.universes.effect = 5;
        };
    } else {
        player.universes.effect = OmegaNum.pow(player.money.amount, 0.003);
    };

    // challenge 4
    if (player.challenge4.active == true) {
        player.challenge4.time = OmegaNum.sub(player.challenge4.time, 0.02);
        if (OmegaNum.cmp(player.money.amount, new OmegaNum("1e19")) >= 0) {
            player.challenge4.active = false;
            player.challenge4.completed = true;
            player.challenge.active = false;
            upgrade2();
        };
        if (player.challenge4.time <= 0) {
            challenge4enter();
            resetuniverses();
        };
    };

    // challenge 5
    if (player.challenge5.active == true) {
        player.challenge5.time = OmegaNum.sub(player.challenge5.time, 0.02);
        if (OmegaNum.cmp(player.money.amount, new OmegaNum("1e63")) >= 0) {
            player.challenge5.active = false;
            player.challenge5.completed = true;
            player.challenge.active = false;
            upgrade2();
        };
        if (player.challenge5.time <= 0) {
            challenge5enter();
            resetuniverses();
        };
    };

    // challenge 6
    if (player.challenge6.active == true) {
        player.challenge6.time = OmegaNum.sub(player.challenge6.time, 0.02);
        if (OmegaNum.cmp(player.money.amount, new OmegaNum("5e167")) >= 0) {
            player.challenge6.active = false;
            player.challenge6.completed = true;
            player.challenge.active = false;
            upgrade2();
        };
        if (player.challenge6.time <= 0) {
            challenge6enter();
            resetuniverses();
        };
    };

    // challenge 7
    if (player.challenge7.active == true) {
        player.challenge7.time = OmegaNum.sub(player.challenge7.time, 0.02);
        player.antipoints = OmegaNum.times(player.antipoints, 1.01).pow(player.challenge7.pow);
        player.challenge7.pow = OmegaNum.add(player.challenge7.pow, 0.0000001);
        if (OmegaNum.cmp(player.money.amount, new OmegaNum("1e280")) >= 0) {
            player.challenge7.active = false;
            player.challenge7.completed = true;
            player.challenge.active = false;
            upgrade2(); 
        };
        if ((player.challenge7.time <= 0) || (OmegaNum.cmp(player.antipoints, player.money.second) >= 0)) {
            challenge7enter();
            resetuniverses();
        };
    };

    // challenge 8
    if (player.challenge8.active == true) {
        player.challenge8.time = OmegaNum.sub(player.challenge8.time, 0.02);
        if (OmegaNum.cmp(player.money.amount, new OmegaNum("1e1150")) >= 0) {
            player.challenge8.active = false;
            player.challenge8.completed = true;
            player.challenge.active = false;
            upgrade2();
        };
        if (player.challenge8.time <= 0) {
            challenge8enter();
            resetuniverses();
        };
    };

    if (player.challenge.active == false) {
        if (OmegaNum.cmp(player.money.second, player.money.max) >= 0) {
            player.money.max = player.money.second;
            player.money.maxbase = player.money.base;
        } else if (OmegaNum.cmp(player.money.second, player.money.max) < 0) {
            player.money.second = player.money.max;
            player.money.base = player.money.maxbase;
        };
    };

    if (player.challenge7.active == true) {
        player.upgrade1.cost = Infinity;
    };
}, 20);

player.money.maxbase = 1;
player.money.max = 1;
player.money.second = 1;
player.money.base = 1;

function upgrade1() {
    while (OmegaNum.cmp(player.money.amount, player.upgrade1.cost) >= 0) {
        player.upgrade1.level = OmegaNum.add(player.upgrade1.level, 1);
        player.money.amount = OmegaNum.sub(player.money.amount, player.upgrade1.cost);
        player.money.second = OmegaNum.times(player.money.second, player.upgrade1.effect);
        player.money.base = OmegaNum.times(player.money.base, player.upgrade1.effect);
        if (player.challenge4.active == false) {
            if (player.upgrade1.level >= 90) {
                player.upgrade1.effect = OmegaNum.pow(1.00275, OmegaNum.sub(player.upgrade1.level, 1));
            } else {
                player.upgrade1.effect = OmegaNum.sub(2, OmegaNum.times(0.01, player.upgrade1.level));
            };
            if (player.upgrade1.level >= 200) {
                if (OmegaNum.cmp(player.upgrade1.cost, 1e308) >= 0) {
                    if (player.gupgrade2.bought == true) {
                        player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, 1.01);
                    } else {
                        player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, 1.04);
                    };
                } else {
                    player.upgrade1.cost = OmegaNum.times(player.upgrade1.cost, OmegaNum.pow(player.upgrade1.effect, OmegaNum.add(1.25, OmegaNum.mul(player.upgrade2.level, 0.03))));
                }
            } else {
                player.upgrade1.cost = OmegaNum.times(player.upgrade1.cost, OmegaNum.pow(player.upgrade1.effect, 1.25));
            };
        } else {
            player.upgrade1.effect = 1;
            player.upgrade1.cost = Infinity;
        };
    };
};

function upgrade2() {
    if (player.challenge8.active == false) {
    while (OmegaNum.cmp(player.money.amount, player.upgrade2.cost) >= 0) {
        player.money.amount = OmegaNum.sub(player.money.amount, player.upgrade2.cost);
        player.money.second = OmegaNum.times(player.money.second, player.upgrade2.effect);
        if (OmegaNum.cmp(player.upgrade2.effect, 10) < 0) {
            player.upgrade2.effect = OmegaNum.add(player.upgrade2.effect, 1);
            if (player.challenge2.completed == false) {
                player.upgrade2.cost = OmegaNum.times(player.upgrade2.cost, OmegaNum.pow(10, Math.round(OmegaNum.pow(player.upgrade2.effect, 1.5))));
            } else {
                player.upgrade2.cost = OmegaNum.times(player.upgrade2.cost, OmegaNum.pow(10, Math.round(OmegaNum.pow(player.upgrade2.effect, 1.5)))).pow(0.9);
            };
        } else {
            player.upgrade2.effect = OmegaNum.pow(10, OmegaNum.pow(1.05, OmegaNum.sub(player.upgrade2.level, 5)));
            if (OmegaNum.cmp(player.upgrade2.cost, 1e308) < 0) {
                player.upgrade2.cost = OmegaNum.pow(player.upgrade2.cost, 1.15);
            } else {
                if (player.gupgrade2.bought == true) {
                    if (player.challenge2.completed == false) {
                        player.upgrade2.cost = OmegaNum.pow(player.upgrade2.cost, 1.07);
                    } else {
                        player.upgrade2.cost = OmegaNum.pow(player.upgrade2.cost, 1.055);
                    };
                } else {
                    if (player.challenge2.completed == false) {
                        player.upgrade2.cost = OmegaNum.pow(player.upgrade2.cost, 1.25);
                    } else {
                        player.upgrade2.cost = OmegaNum.pow(player.upgrade2.cost, 1.22);
                    };
                };
            };
        };
        player.upgrade2.level = OmegaNum.add(player.upgrade2.level, 1);
        player.money.base = OmegaNum.times(player.money.base, player.upgrade2.effect);
    };
    };
};

function upgrade3() {
    while (OmegaNum.cmp(player.money.amount, player.upgrade3.cost) >= 0) {
        player.money.amount = OmegaNum.sub(player.money.amount, player.upgrade3.cost);
        if (OmegaNum.cmp(player.upgrade3.cost, 1e308) >= 0) {
            if (player.gupgrade2.bought == true) {
                player.upgrade3.cost = OmegaNum.pow(10, Math.floor(OmegaNum.log10(OmegaNum.pow(player.upgrade3.cost, 1.15))));
            } else {
                player.upgrade3.cost = OmegaNum.pow(10, Math.floor(OmegaNum.log10(OmegaNum.pow(player.upgrade3.cost, 1.375))));
            };
        } else {
            player.upgrade3.cost = OmegaNum.pow(10, Math.floor(OmegaNum.log10(OmegaNum.pow(player.upgrade3.cost, 1.51))));
        };
        if (player.gupgrade9.bought == false) {
            if (player.challenge3.active == false) {
                player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, 0.96);
            } else {
                player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, 1);
            }
        } else {
            if ((player.challenge3.active == true) || (player.challenge3.active == true)) {
                player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, 1);
            } else {
                player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, 0.94);
            }
        };
        player.upgrade3.level += 1;
    };
};

function upgrade4() {
    while (OmegaNum.cmp(player.money.amount, player.upgrade4.cost) >= 0) {
        player.money.amount = OmegaNum.sub(player.money.amount, player.upgrade4.cost);
        if (player.gupgrade2.bought == true) {
            player.upgrade4.cost = OmegaNum.pow(player.upgrade4.cost, 1.1);
        } else {
            player.upgrade4.cost = OmegaNum.pow(player.upgrade4.cost, 1.15);
        };
        player.upgrade4.level = OmegaNum.add(player.upgrade4.level, 1);
        if (player.challenge6.active == false) {
            if (player.gupgrade7.bought == false) {
                player.upgrade4.effect = OmegaNum.add(player.upgrade4.effect, 0.02);
            } else {
                player.upgrade4.effect = OmegaNum.add(player.upgrade4.effect, 0.03);
            };
        } else {
            player.upgrade4.effect = 1;
        };
    };
};

function universes() {
    if (OmegaNum.cmp(player.money.amount, player.universes.requires) >= 0) {
        resetuniverses();
        player.universes.amount = OmegaNum.add(player.universes.amount, 1);
        player.money.base = OmegaNum.pow(player.universes.effect, player.universes.amount);
        if (OmegaNum.cmp(player.universes.amount, 4) <= 0) {
            if (player.challenge6.completed == false) {
                player.universes.requires = OmegaNum.pow(player.universes.requires, 1.23456789);
            } else {
                player.universes.requires = OmegaNum.pow(player.universes.requires, 1.16);
            }
        } else {
            if (player.challenge6.completed == false) {
                player.universes.requires = OmegaNum.pow(player.universes.requires, 1.14);
            } else {
                player.universes.requires = OmegaNum.pow(player.universes.requires, 1.09);
            }
        };
    };
};

function upgrade5() {
    if (player.gupgrade13.bought == true) {
        if (OmegaNum.cmp(player.money.amount, player.upgrade5.cost) >= 0) {
            player.money.amount = OmegaNum.sub(player.money.amount, player.upgrade5.cost);
            if ((OmegaNum.cmp(player.upgrade5.cost, new OmegaNum("1e2000")) < 0)) {
                player.upgrade5.cost = OmegaNum.pow(1e5, player.upgrade5.level).times(new OmegaNum("1e850"));
            } else if ((OmegaNum.cmp(player.upgrade5.cost, new OmegaNum("1e2010")) < 0)) {
                if (player.gupgrade20.bought == false) {
                    player.upgrade5.cost = OmegaNum.pow(10, OmegaNum.round(OmegaNum.times(2000, OmegaNum.pow(1.005, OmegaNum.sub(player.upgrade5.level, 200)))));
                } else {
                    player.upgrade5.cost = OmegaNum.pow(10, OmegaNum.round(OmegaNum.times(2000, OmegaNum.pow(1.002, OmegaNum.sub(player.upgrade5.level, 200)))));
                };
            };
            player.upgrade5.effect = OmegaNum.div(player.upgrade5.effect, 1.0025);
            player.upgrade5.level = OmegaNum.add(player.upgrade5.level, 1);
            player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, 0.99750623);
            player.upgrade2.cost = OmegaNum.pow(player.upgrade2.cost, 0.99750623);
            player.upgrade3.cost = OmegaNum.pow(player.upgrade3.cost, 0.99750623);
            player.upgrade4.cost = OmegaNum.pow(player.upgrade4.cost, 0.99750623);
        };
    };
};

function upgrade6() {
    if (player.gupgrade14.bought == true) {
        if (OmegaNum.cmp(player.money.amount, player.upgrade6.cost) >= 0) {
            player.money.amount = OmegaNum.sub(player.money.amount, player.upgrade6.cost);
            player.upgrade6.cost = OmegaNum.pow(1e75, player.upgrade6.level).times(new OmegaNum("1e1000"));
            player.upgrade6.effect = OmegaNum.times(player.upgrade6.effect, 2);
            player.upgrade6.level = OmegaNum.add(player.upgrade6.level, 1);
        };
    };
};

function challenge1enter() {
    if (player.challenge1.completed == false) {
        if (player.challenge1.active == false) {
            player.challenge1.active = true;
            player.challenge.active = true;
            resetprimary();
        } else if (player.challenge1.active == true) {
            player.challenge1.active = false;
            player.challenge1.time = 120;
            player.challenge.active = false;
            resetprimary();
        };
    } else {
        alert("Challenge 1 is already completed!");
    };
};

function challenge2enter() {
    if (player.challenge2.completed == false) {
        if (player.challenge2.active == false) {
            player.challenge2.active = true;
            player.challenge.active = true;
            resetprimary();
        } else if (player.challenge2.active == true) {
            player.challenge2.active = false;
            player.challenge2.time = 90;
            player.challenge.active = false;
            resetprimary();
        };
    } else {
        alert("Challenge 2 is already completed!");
    };
};

function challenge3enter() {
    if (player.challenge3.completed == false) {
        if (player.challenge3.active == false) {
            player.challenge3.active = true;
            player.challenge.active = true;
            resetprimary();
        } else if (player.challenge3.active == true) {
            player.challenge3.active = false;
            player.challenge3.time = 100;
            player.challenge.active = false;
            resetprimary();
        };
    } else {
        alert("Challenge 3 is already completed!");
    };
};

function challenge4enter() {
    if (player.challenge4.completed == false) {
        if (player.challenge4.active == false) {
            player.challenge4.active = true;
            player.challenge.active = true;
            resetprimary();
        } else if (player.challenge4.active == true) {
            player.challenge4.active = false;
            player.challenge4.time = 30;
            player.challenge.active = false;
            resetprimary();
        };
    } else {
        alert("Challenge 4 is already completed!");
    };
};

function challenge5enter() {
    if (player.challenge5.completed == false) {
        if (player.challenge5.active == false) {
            player.challenge5.active = true;
            player.challenge.active = true;
            resetprimary();
        } else if (player.challenge5.active == true) {
            player.challenge5.active = false;
            player.challenge5.time = 60;
            player.challenge.active = false;
            resetprimary();
        };
    } else {
        alert("Challenge 5 is already completed!");
    };
};

function challenge6enter() {
    if (player.challenge6.completed == false) {
        if (player.challenge6.active == false) {
            player.challenge6.active = true;
            player.challenge.active = true;
            resetprimary();
        } else if (player.challenge6.active == true) {
            player.challenge6.active = false;
            player.challenge6.time = 1000;
            player.challenge.active = false;
            resetprimary();
        };
    } else {
        alert("Challenge 6 is already completed!");
    };
};

function challenge7enter() {
    if (player.challenge7.completed == false) {
        if (player.challenge7.active == false) {
            player.challenge7.active = true;
            player.challenge.active = true;
            resetprimary();
        } else if (player.challenge7.active == true) {
            player.challenge7.active = false;
            player.challenge7.time = 200;
            player.challenge.active = false;
            resetprimary();
            player.antipoints = new OmegaNum("1");
            player.challenge7.pow = new OmegaNum("1");
        };
    } else {
        alert("Challenge 7 is already completed!");
    };
};

function challenge8enter() {
    if (player.challenge8.completed == false) {
        if (player.challenge8.active == false) {
            player.challenge8.active = true;
            player.challenge.active = true;
            resetprimary();
        } else if (player.challenge8.active == true) {
            player.challenge8.active = false;
            player.challenge8.time = 20;
            player.challenge.active = false;
            resetprimary();
        };
    } else {
        alert("Challenge 8 is already completed!");
    };
};

function reset() {
    player.money.maxbase = 1;
    player.money.max = 1;
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
    player.universes.effect = 4;
    player.universes.requires = 1e60;
    player.primary.amount = 0;
    player.primary.reset = 0;
    player.primary.total = 0;
    player.gen1.cost = 1;
    player.gen1.level = 0;
    player.gen1.mult = 0.001;
    player.gen1.boost = 0;
    player.gen1.total = 0;
    player.gen2.cost = 2;
    player.gen2.level = 0;
    player.gen2.mult = 0.00137;
    player.gen2.total = 0;
    player.gen3.cost = 100;
    player.gen3.level = 0;
    player.gen3.mult = 0.00188;
    player.gupgrade1.bought = false;
    player.gupgrade2.bought = false;
    player.gupgrade3.bought = false;
    player.gupgrade4.bought = false;
    player.gupgrade5.bought = false;
    player.gupgrade6.bought = false;
    player.gupgrade7.bought = false;
    player.gupgrade8.bought = false;
    player.gupgrade9.bought = false;
    player.gupgrade10.bought = false;
    player.gupgrade11.bought = false;
    player.gupgrade12.bought = false;
    player.gupgrade13.bought = false;
    player.gupgrade14.bought = false;
    player.gupgrade15.bought = false;
    player.gupgrade16.bought = false;
    player.gupgrade17.bought = false;
    player.upgrade5.effect = 1;
    player.upgrade5.cost = new OmegaNum("ee3");
    player.upgrade5.level = 0;
    player.upgrade6.effect = 1;
    player.upgrade6.cost = new OmegaNum("ee3");
    player.upgrade6.level = 0;
    player.challenge.active = false;
    player.challenge1.active = false;
    player.challenge1.completed = false;
    player.challenge1.time = 120;
    player.challenge2.active = false;
    player.challenge2.completed = false;
    player.challenge2.time = 90;
    player.challenge3.active = false;
    player.challenge3.completed = false;
    player.challenge3.time = 100;
    player.challenge4.active = false;
    player.challenge4.completed = false;
    player.challenge4.time = 30;
    player.challenge5.active = false;
    player.challenge5.completed = false;
    player.challenge5.time = 60;
    player.challenge6.active = false;
    player.challenge6.completed = false;
    player.challenge6.time = 1000;
    player.challenge7.active = false;
    player.challenge7.completed = false;
    player.challenge7.time = 200;
    player.challenge7.pow = 1;
    player.challenge8.active = false;
    player.challenge8.completed = false;
    player.challenge8.time = 20;
    player.genpow = 1;
    player.antipoints = 1;
    player.atoms.amount = 1;
    player.atoms.req = 10;
    player.atoms.total = 0;
    player.atoms.mult = 1.1;
    player.atoms.multcost = 1e50;
    player.atoms.chance = 0.01;
    player.atoms.chancecost = 1e50;
    player.atoms.time = 999.99999;
    player.atoms.timecost = 1e75;
    player.atoms.elapsed = 0;
    player.atoms.exp = 1;
    player.atoms.expcost = 3.3333e33;
};
