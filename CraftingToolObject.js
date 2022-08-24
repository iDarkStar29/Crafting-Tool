var perkName = [
'Sturdy Energy',
'Resilient',
'Freedom',
'Vigor',
'Invigorated',
'Refreshing',
'Refreshing Ward',
'Refreshing Evasion',
'Indestructible',
'Luck',
'Physical Aversion',
'Elemental Aversion',
'Shirking Fortification',
'Ancient Ward',
'Angry Earth Ward',
'Corrupted Ward',
'Lost Ward',
'Corruption Resistance',
'Blight Resistance',
'Sword n Shield Skill Perks',
'Beast Ward',
'Skill perks',
'Logging Luck',
'Harvesting Luck',
'Mining Luck',
'Skinning Luck'
];

var perkEffect = [
'When blocking a hit while below 30% stamina, gain 38% increased stamina regen for 6s. (Effect is removed if player becomes exhausted)',
'Critical hits deal 4.8% less damage to you.',
'Slow, Stun, and Root expires 10% faster.',
'Burn, Bleed, and Poison expires 10% faster.',
'Weaken, Disease, Exhaust, and Rend expires 10% faster.',
'Reduces max cooldowns by 2.8%.',
'Reduces active cooldowns by 1.9% after being hit 4 times. Does not trigger off persistent damage, DoT effects or blocked attacks.',
'Reduces active cooldowns by 0.74% after exiting the dodge animation.',
'This item no longer loses durability.',
'+2.8% chance at rare items from chests and monsters.',
'You take 3.8% less damage from ranged physical attacks.',
'You take 3.8% less damage from ranged elemental attacks.',
'Dodging through an enemy attack grants fortify, increasing damage absorption by 3.8% for 6s. Each armor piece with this perk increases the potency of the effect.',
'+4.8% Damage Absorption against Ancient Guardians.',
'+4.8% Damage Absorption against Angry Earth.',
'+4.8% Damage Absorption against Corrupted.',
'+4.8% Damage Absorption against Lost.',
'+15 Corruption Resistance. Also slows corruption damage.',
'+15 Blight Resistance. Also slows blight damage.',
'SnS Skill Perks have a Higher chance to roll because it is technically 2 weapons.',
'+4.8% Damage Absorption against Beasts.',
'Every other Weapon Skill Perk without SnS',
'While Logging gain 5% chance at finding rare items.',
'While Harvesting gain 5% chance at finding rare items.',
'While Mining gain 5% chance at finding rare items.',
'While Skinning gain 5% chance at finding rare items.',
];

var perkPercent = [
14.49, 14.49, 4.83, 4.83, 4.83, 4.83, 4.83, 4.83, 4.35, 3.62, 2.3, 2.3, 2.3, 1.84, 1.84, 1.84, 1.84, 1.45, 1.45, .23, .23, .21, .04, .04, .04, .04
];

/*
document.getElementById('myTable') = theTable;
function refresh() {
var perkName = perkName.slice(1, 26);
var test = perkName.slice(1, 26);

document.getElementById('myTable') = theTable;

}*/