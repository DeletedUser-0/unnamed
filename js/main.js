class Player {
    constructor(data) {
        this.money = {
            amount: data?.money?.amount || 0,
            second: data?.money?.second || 1,
            translate: data?.money?.translate || 1,
            base: data?.money?.base || 1,
        };

        this.upgrade1 = {
            cost: data?.upgrade1?.cost || 10,
            effect: data?.upgrade1?.effect || 2,
            level: data?.upgrade1?.level || 0,
        };

        this.auto = {
            requires: data?.auto?.requires || 1000,
            effect: data?.auto?.effect || 3,
        };

        this.upgrade2 ={
            cost: data?.upgrade2?.cost || 1e12,
            effect: data?.upgrade2?.effect || 4,
            level: data?.upgrade2?.level || 0,
        };

        this.upgrade3 = {
            cost: data?.upgrade3?.cost || 1e51,
            effect: data?.upgrade3?.effect || 1,
            level: data?.upgrade3?.level || 0,
        };

        this.primary = {
            amount: data?.primary?.amount || 0,
            earn: data?.primary?.earn || 0,
            reset: data?.primary?.reset || 0,
        };

        this.upgrade4 = {
            cost: data?.upgrade4?.cost || 1e109,
            level: data?.upgrade4?.level || 0,
            effect: data?.upgrade4?.effect || 1,
        };

        this.gen1 = {
            cost: data?.gen1?.cost || 1,
            level: data?.gen1?.level || 0,
            mult: data?.gen1?.mult || 0.333,
            boost: data?.gen1?.boost || 1,
            total: data?.gen1?.total || 0,
        };

        this.gen2 = {
            cost: data?.gen2?.cost || 1.2,
            level: data?.gen2?.level || 0,
            mult: data?.gen2?.mult || 0.333,
            total: data?.gen2?.total || 0,
        };

        this.gen3 = {
            cost: data?.gen3?.cost || 100,
            level: data?.gen3?.level || 0,
            mult: data?.gen3?.mult || 0.333,
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
    };
};

var player = new Player();

window.setInterval (function() {
    player.money.amount = OmegaNum.add(player.money.amount, OmegaNum.div(player.money.second, OmegaNum.div(1000, 10)));
    // auto money //
    while (OmegaNum.cmp(player.money.amount, player.auto.requires) >= 0) {
        if (OmegaNum.cmp(player.auto.requires, 1e105) < 0) {
            player.auto.requires = OmegaNum.times(player.auto.requires, 1000);
            player.auto.effect = 3;
        } else if ((OmegaNum.cmp(player.auto.requires, 1e105) >= 0) && (OmegaNum.cmp(player.auto.requires, 1e212) < 0)) {
            player.auto.requires = OmegaNum.times(player.auto.requires, 1e9);
            player.auto.effect = 9;
        } else if ((OmegaNum.cmp(player.auto.requires, 1e213) >= 0) && (OmegaNum.cmp(player.auto.requires, new OmegaNum("1e730") < 0))) {
            player.auto.requires = OmegaNum.times(player.auto.requires, 1e11);
            player.auto.effect = 100;
        } else if (OmegaNum.cmp(player.auto.requires, new OmegaNum("1e730")) >= 0) {
            player.auto.requires = OmegaNum.times(player.auto.requires, 1e9);
            player.auto.effect = 1000.1;
        };
        player.money.base = OmegaNum.times(player.auto.effect, player.money.base);
    };
    if (player.gupgrade9.bought == false) {
        player.upgrade3.effect = OmegaNum.pow(0.96, player.upgrade3.level);
    } else {
        player.upgrade3.effect = OmegaNum.pow(0.95, player.upgrade3.level);
    };
    // upgrade 4
    if (OmegaNum.cmp(player.upgrade4.level, 1) >= 0) {
        if (OmegaNum.cmp(player.money.amount, 1e308) >= 0) {
            player.upgrade4.effect = OmegaNum.pow(1.00002, player.upgrade4.level);
            player.money.base = OmegaNum.times(player.money.base, OmegaNum.pow(1.00002, player.upgrade4.level));
        } else {
            player.money.base = OmegaNum.times(player.money.base, OmegaNum.pow(1.00004, player.upgrade4.level));
            player.upgrade4.effect = OmegaNum.pow(1.00004, player.upgrade4.level);
        };
    };
    // generators
    player.gen1.boost = OmegaNum.add(player.gen1.boost, OmegaNum.times(player.gen1.total, OmegaNum.div(player.gen1.mult, 100)));
    if (player.gupgrade4.bought == true) {
        player.gen1.mult = OmegaNum.pow(10000, OmegaNum.sub(player.gen1.level, 1));
        player.gen2.mult = OmegaNum.pow(6561, OmegaNum.sub(player.gen2.level, 1));
        player.gen3.mult = OmegaNum.pow(4305, OmegaNum.sub(player.gen3.level, 1));
    } else {
        player.gen1.mult = OmegaNum.pow(1000, OmegaNum.sub(player.gen1.level, 1));
        player.gen2.mult = OmegaNum.pow(729, OmegaNum.sub(player.gen2.level, 1));
        player.gen3.mult = OmegaNum.pow(531, OmegaNum.sub(player.gen3.level, 1));
    };
    player.gen1.total = OmegaNum.add(player.gen1.total, OmegaNum.times(player.gen2.total, OmegaNum.div(player.gen2.mult, 100)));
    player.gen2.total = OmegaNum.add(player.gen2.total, OmegaNum.times(player.gen3.total, OmegaNum.div(player.gen3.mult, 100)));
    // generator boost to points
    if (OmegaNum.cmp(player.money.translate, 0) <= 0) {
        player.money.second = OmegaNum.times(player.money.base, OmegaNum.add(player.money.translate, 1));
    } else {
        player.money.second = OmegaNum.times(player.money.base, player.money.translate);
    };
    player.money.translate = OmegaNum.pow(player.gen1.boost, 0.25);
    // automatically earns primary points
    if (player.gupgrade3.bought == true) {
        player.primary.amount = OmegaNum.add(player.primary.amount, OmegaNum.div(player.primary.earn, 100));
    };
}, 10);

function upgrade1() {
    while (OmegaNum.cmp(player.money.amount, player.upgrade1.cost) >= 0) {
        player.upgrade1.level += 1;
        player.money.amount = OmegaNum.sub(player.money.amount, player.upgrade1.cost);
        player.money.second = OmegaNum.times(player.money.second, player.upgrade1.effect);
        player.money.base = OmegaNum.times(player.money.base, player.upgrade1.effect);
        if (player.upgrade1.level >= 157) {
            player.upgrade1.effect = OmegaNum.times(OmegaNum.sub(player.upgrade1.effect, 1), 1.01).add(1);
        } else {
            player.upgrade1.effect = OmegaNum.pow(2, OmegaNum.pow(0.98, player.upgrade1.level));
        };
        if (player.upgrade1.level >= 400) {
            if (OmegaNum.cmp(player.upgrade1.cost, 1e308) >= 0) {
                if (player.gupgrade2.bought == true) {
                    player.upgrade1.cost = OmegaNum.times(player.upgrade1.cost, OmegaNum.pow(player.upgrade1.effect, OmegaNum.add(1.4, OmegaNum.mul(player.upgrade2.level, 0.07))));
                } else {
                    player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, 1.04);
                };
            } else {
                player.upgrade1.cost = OmegaNum.times(player.upgrade1.cost, OmegaNum.pow(player.upgrade1.effect, OmegaNum.add(1.25, OmegaNum.mul(player.upgrade2.level, 0.04))));
            }
        } else {
            player.upgrade1.cost = OmegaNum.times(player.upgrade1.cost, OmegaNum.pow(player.upgrade1.effect, 1.25));
        };
    };
};

function upgrade2() {
    while (OmegaNum.cmp(player.money.amount, player.upgrade2.cost) >= 0) {
        player.money.amount = OmegaNum.sub(player.money.amount, player.upgrade2.cost);
        player.money.second = OmegaNum.times(player.money.second, player.upgrade2.effect);
        if (OmegaNum.cmp(player.upgrade2.effect, 14) < 0) {
            player.upgrade2.effect = OmegaNum.add(player.upgrade2.effect, 1);
            player.upgrade2.cost = OmegaNum.times(player.upgrade2.cost, OmegaNum.pow(10, player.upgrade2.effect));
        } else {
            player.upgrade2.effect = OmegaNum.pow(14, OmegaNum.pow(1.15, OmegaNum.sub(player.upgrade2.level, 1)));
            if (OmegaNum.cmp(player.upgrade1.cost, 1e308) < 0) {
                player.upgrade2.cost = OmegaNum.pow(player.upgrade2.cost, 1.3);
            } else {
                if (player.gupgrade2.bought == true) {
                    player.upgrade2.cost = OmegaNum.pow(player.upgrade2.cost, 1.25);
                } else {
                    player.upgrade2.cost = OmegaNum.pow(player.upgrade2.cost, 1.45);
                };
            };
        };
        player.upgrade2.level += 1;
        player.money.base = OmegaNum.times(player.money.base, player.upgrade2.effect);
    };
};

function upgrade3() {
    while (OmegaNum.cmp(player.money.amount, player.upgrade3.cost) >= 0) {
        player.money.amount = OmegaNum.sub(player.money.amount, player.upgrade3.cost);
        if (OmegaNum.cmp(player.upgrade1.cost, 1e308) >= 0) {
            if (player.gupgrade2.bought == true) {
                player.upgrade3.cost = OmegaNum.pow(10, Math.floor(OmegaNum.log10(OmegaNum.pow(player.upgrade3.cost, 1.29))));
            } else {
                player.upgrade3.cost = OmegaNum.pow(10, Math.floor(OmegaNum.log10(OmegaNum.pow(player.upgrade3.cost, 1.375))));
            };
        } else {
            player.upgrade3.cost = OmegaNum.pow(10, Math.floor(OmegaNum.log10(OmegaNum.pow(player.upgrade3.cost, 1.25))));
        };
        if (player.gupgrade9.bought == false) {
            player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, 0.96);
        } else {
            player.upgrade1.cost = OmegaNum.pow(player.upgrade1.cost, 0.95);
        };
        player.upgrade3.level += 1;
    };
};

function upgrade4() {
    while (OmegaNum.cmp(player.money.amount, player.upgrade4.cost) >= 0) {
        player.money.amount = OmegaNum.sub(player.money.amount, player.upgrade4.cost);
        if (OmegaNum.cmp(player.upgrade1.cost, 1e308) < 0) {
            player.upgrade4.cost = OmegaNum.pow(10, Math.floor(OmegaNum.log10(OmegaNum.pow(player.upgrade4.cost, 1.2))));
        } else {
            if (player.gupgrade2.bought == true) {
                player.upgrade4.cost = OmegaNum.pow(10, Math.floor(OmegaNum.log10(OmegaNum.pow(player.upgrade4.cost, 1.24))));
            } else {
                player.upgrade4.cost = OmegaNum.pow(10, Math.floor(OmegaNum.log10(OmegaNum.pow(player.upgrade4.cost, 1.35))));
            };
        };
        player.upgrade4.level += 1;
    };
};

function reset() {
    player.money.second = 1;
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
    player.upgrade4.time = 0;
    player.primary.amount = 0;
    player.primary.reset = 0;
};