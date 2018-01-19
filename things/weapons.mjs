const weapons = {
    "ranged": {
        "simple": [
            {
                "type": "Crossbow, light",
                "name": "Light Crossbow",
                "cost": "25 gp",
                "damage": "1d8 piercing",
                "weight": "5 lb.",
                "attributes": "Ammunition (range 80/320), loading, two-handed"
            }, {
                "type": "Dart",
                "name": "Dart",
                "cost": "5 cp",
                "damage": "1d4 piercing",
                "weight": "1/4 lb.",
                "attributes": "Finesse, thrown (range 20/60)"
            }, {
                "type": "Shortbow",
                "name": "Shortbow",
                "cost": "25 gp",
                "damage": "1d6 piercing",
                "weight": "2 lb.",
                "attributes": "Ammunition (range 80/320), two-handed"
            }, {
                "type": "Sling",
                "name": "Sling",
                "cost": "1 sp",
                "damage": "1d4 bludgeoning",
                "weight": "—",
                "attributes": "Ammunition (range 30/120)"
            }
        ],
        "martial": [
            {
                "type": "Blowgun",
                "name": "Blowgun",
                "cost": "10 gp",
                "damage": "1 piercing",
                "weight": "1 lb.",
                "attributes": "Ammunition (range 25/100), loading",
            },
            {
                "type": "Crossbow, hand",
                "name": "Hand Crossbow",
                "cost": "75 gp",
                "damage": "1d6 piercing",
                "weight": "3 lb.",
                "attributes": "Ammunition (range 30/120), light, loading",
            },
            {
                "type": "Crossbow, heavy",
                "name": "Heavy Crossbow",
                "cost": "50 gp",
                "damage": "1d10 piercing",
                "weight": "18 lb.",
                "attributes": "Ammunition (range 100/400), heavy, loading, two-handed",
            }, {
                "type": "Longbow",
                "name": "Longbow",
                "cost": "50 gp",
                "damage": "1d8 piercing",
                "weight": "2 lb.",
                "attributes": "Ammunition (range 150/600), heavy, two-handed",
            }, {
                "type": "Net",
                "name": "Net",
                "cost": "1 gp",
                "damage": "—",
                "weight": "3 lb.",
                "attributes": "Special, thrown (range 5/15)"
            }
        ]
    },


    "melee": {
        "simple": [
            {
                "type": "Club",
                "name": "Club",
                "cost": "1 sp",
                "damage": "1d4 bludgeoning",
                "weight": "2 lb.",
                "attributes": "Light"
            }, {
                "type": "Dagger",
                "name": "Dagger",
                "cost": "2 gp",
                "damage": "1d4 piercing",
                "weight": "1 lb.",
                "attributes": "Finesse, light, thrown (range 20/60)"
            }, {
                "type": "Greatclub",
                "name": "Greatclub",
                "cost": "2 sp",
                "damage": "1d8 bludgeoning",
                "weight": "10 lb.",
                "attributes": "Two-handed"
            }, {
                "type": "Handaxe",
                "name": "Handaxe",
                "cost": "5 gp",
                "damage": "1d6 slashing",
                "weight": "2 lb.",
                "attributes": "Light, thrown (range 20/60)"
            }, {
                "type": "Javelin",
                "name": "Javelin",
                "cost": "5 sp",
                "damage": "1d6 piercing",
                "weight": "2 lb.",
                "attributes": "Thrown (range 30/120)"
            }, {
                "type": "Light Hammer",
                "name": "Light Hammer",
                "cost": "2 gp",
                "damage": "1d4 bludgeoning",
                "weight": "2 lb.",
                "attributes": "Light, thrown (range 20/60)"
            }, {
                "type": "Mace",
                "name": "Mace",
                "cost": "5 gp",
                "damage": "1d6 bludgeoning",
                "weight": "4 lb.",
                "attributes": "—"
            }, {
                "type": "Quarterstaff",
                "name": "Quarterstaff",
                "cost": "2 sp",
                "damage": "1d6 bludgeoning",
                "weight": "4 lb.",
                "attributes": "Versatile (1d8)"
            }, {
                "type": "Sickle",
                "name": "Sickle",
                "cost": "1 gp",
                "damage": "1d4 slashing",
                "weight": "2 lb.",
                "attributes": "Light"
            }, {
                "type": "Spear",
                "name": "Spear",
                "cost": "1 gp",
                "damage": "1d6 piercing",
                "weight": "3 lb.",
                "attributes": "Thrown (range 20/60), versatile (1d8)"
            }
        ],
        "martial": [
            {
                "type": "Battleaxe",
                "name": "Battleaxe",
                "cost": "10 gp",
                "damage": "1d8 slashing",
                "weight": "4 lb.",
                "attributes": "Versatile (1d10)"
            }, {
                "type": "Flail",
                "name": "Flail",
                "cost": "10 gp",
                "damage": "1d8 bludgeoning",
                "weight": "2 lb.",
                "attributes": "—"
            }, {
                "type": "Glaive",
                "name": "Glaive",
                "cost": "20 gp",
                "damage": "1d10 slashing",
                "weight": "6 lb.",
                "attributes": "Heavy, reach, two-handed"
            }, {
                "type": "Greataxe",
                "name": "Greataxe",
                "cost": "30 gp",
                "damage": "1d12 slashing",
                "weight": "7 lb.",
                "attributes": "Heavy, two-handed"
            }, {
                "type": "Greatsword",
                "name": "Greatsword",
                "cost": "50 gp",
                "damage": "2d6 slashing",
                "weight": "6 lb.",
                "attributes": "Heavy, two-handed"
            }, {
                "type": "Halberd",
                "name": "Halberd",
                "cost": "20 gp",
                "damage": "1d10 slashing",
                "weight": "6 lb.",
                "attributes": "Heavy, reach, two-handed"
            }, {
                "type": "Lance",
                "name": "Lance",
                "cost": "10 gp",
                "damage": "1d12 piercing",
                "weight": "6 lb.",
                "attributes": "Reach, special"
            }, {
                "type": "Longsword",
                "name": "Longsword",
                "cost": "15 gp",
                "damage": "1d8 slashing",
                "weight": "3 lb.",
                "attributes": "Versatile (1d10)"
            }, {
                "type": "Maul",
                "name": "Maul",
                "cost": "10 gp",
                "damage": "2d6 bludgeoning",
                "weight": "10 lb.",
                "attributes": "Heavy, two-handed"
            }, {
                "type": "Morningstar",
                "name": "Morningstar",
                "cost": "15 gp",
                "damage": "1d8 piercing",
                "weight": "4 lb.",
                "attributes": "—"
            }, {
                "type": "Pike",
                "name": "Pike",
                "cost": "5 gp",
                "damage": "1d10 piercing",
                "weight": "18 lb.",
                "attributes": "Heavy, reach, two-handed"
            }, {
                "type": "Rapier",
                "name": "Rapier",
                "cost": "25 gp",
                "damage": "1d8 piercing",
                "weight": "2 lb.",
                "attributes": "Finesse"
            }, {
                "type": "Scimitar",
                "name": "Scimitar",
                "cost": "25 gp",
                "damage": "1d6 slashing",
                "weight": "3 lb.",
                "attributes": "Finesse, light"
            }, {
                "type": "Shortsword",
                "name": "Shortsword",
                "cost": "10 gp",
                "damage": "1d6 piercing",
                "weight": "2 lb.",
                "attributes": "Finesse, light"
            }, {
                "type": "Trident",
                "name": "Trident",
                "cost": "5 gp",
                "damage": "1d6 piercing",
                "weight": "4 lb.",
                "attributes": "Thrown (range 20/60), versatile (1d8)"
            }, {
                "type": "War Pick",
                "name": "War Pick",
                "cost": "5 gp",
                "damage": "1d8 piercing",
                "weight": "2 lb.",
                "attributes": "—"
            }, {
                "type": "Warhammer",
                "name": "Warhammer",
                "cost": "15 gp",
                "damage": "1d8 bludgeoning",
                "weight": "2 lb.",
                "attributes": "Versatile (1d10)"
            }, {
                "type": "Whip",
                "name": "Whip",
                "cost": "2 gp",
                "damage": "1d4 slashing",
                "weight": "3 lb.",
                "attributes": "Finesse, reach"
            }
        ]
    }
};

const weaponsFlatList = [].concat(weapons.melee.simple).concat(weapons.melee.martial).concat(weapons.ranged.simple).concat(weapons.ranged.martial);

export { weapons, weaponsFlatList }