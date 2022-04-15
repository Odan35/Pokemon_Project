const CHARGED_MOVES = [
    {
        "critical_chance": 0.05,
        "duration": 2900,
        "energy_delta": -33,
        "move_id": 13,
        "name": "Wrap",
        "power": 60,
        "stamina_loss_scaler": 0.06,
        "type": "Normal"
},
    {
        "critical_chance": 0.05,
        "duration": 3800,
        "energy_delta": -100,
        "move_id": 14,
        "name": "Hyper Beam",
        "power": 150,
        "stamina_loss_scaler": 0.15,
        "type": "Normal"
},
    {
        "critical_chance": 0.05,
        "duration": 3000,
        "energy_delta": -50,
        "move_id": 16,
        "name": "Dark Pulse",
        "power": 80,
        "stamina_loss_scaler": 0.08,
        "type": "Dark"
},
    {
        "critical_chance": 0.05,
        "duration": 2100,
        "energy_delta": -33,
        "move_id": 18,
        "name": "Sludge",
        "power": 50,
        "stamina_loss_scaler": 0.065,
        "type": "Poison"
},
    {
        "critical_chance": 0.05,
        "duration": 1900,
        "energy_delta": -33,
        "move_id": 20,
        "name": "Vice Grip",
        "power": 35,
        "stamina_loss_scaler": 0.055,
        "type": "Normal"
},
    {
        "critical_chance": 0.05,
        "duration": 2700,
        "energy_delta": -50,
        "move_id": 21,
        "name": "Flame Wheel",
        "power": 60,
        "stamina_loss_scaler": 0.06,
        "type": "Fire"
},
    {
        "critical_chance": 0.05,
        "duration": 2200,
        "energy_delta": -100,
        "move_id": 22,
        "name": "Megahorn",
        "power": 110,
        "stamina_loss_scaler": 0.12,
        "type": "Bug"
},
    {
        "critical_chance": 0.05,
        "duration": 2200,
        "energy_delta": -50,
        "move_id": 24,
        "name": "Flamethrower",
        "power": 70,
        "stamina_loss_scaler": 0.09,
        "type": "Fire"
},
    {
        "critical_chance": 0.05,
        "duration": 4700,
        "energy_delta": -50,
        "move_id": 26,
        "name": "Dig",
        "power": 100,
        "stamina_loss_scaler": 0.08,
        "type": "Ground"
},
    {
        "critical_chance": 0.25,
        "duration": 1500,
        "energy_delta": -50,
        "move_id": 28,
        "name": "Cross Chop",
        "power": 50,
        "stamina_loss_scaler": 0.1,
        "type": "Fighting"
},
    {
        "critical_chance": 0.05,
        "duration": 3200,
        "energy_delta": -50,
        "move_id": 30,
        "name": "Psybeam",
        "power": 70,
        "stamina_loss_scaler": 0.065,
        "type": "Psychic"
},
    {
        "critical_chance": 0.05,
        "duration": 3600,
        "energy_delta": -100,
        "move_id": 31,
        "name": "Earthquake",
        "power": 140,
        "stamina_loss_scaler": 0.1,
        "type": "Ground"
},
    {
        "critical_chance": 0.5,
        "duration": 2300,
        "energy_delta": -100,
        "move_id": 32,
        "name": "Stone Edge",
        "power": 100,
        "stamina_loss_scaler": 0.1,
        "type": "Rock"
},
    {
        "critical_chance": 0.05,
        "duration": 1900,
        "energy_delta": -33,
        "move_id": 33,
        "name": "Ice Punch",
        "power": 50,
        "stamina_loss_scaler": 0.075,
        "type": "Ice"
},
    {
        "critical_chance": 0.05,
        "duration": 1900,
        "energy_delta": -33,
        "move_id": 34,
        "name": "Heart Stamp",
        "power": 40,
        "stamina_loss_scaler": 0.06,
        "type": "Psychic"
},
    {
        "critical_chance": 0.05,
        "duration": 2500,
        "energy_delta": -33,
        "move_id": 35,
        "name": "Discharge",
        "power": 65,
        "stamina_loss_scaler": 0.08,
        "type": "Electric"
},
    {
        "critical_chance": 0.05,
        "duration": 2700,
        "energy_delta": -100,
        "move_id": 36,
        "name": "Flash Cannon",
        "power": 100,
        "stamina_loss_scaler": 0.08,
        "type": "Steel"
},
    {
        "critical_chance": 0.05,
        "duration": 2300,
        "energy_delta": -33,
        "move_id": 38,
        "name": "Drill Peck",
        "power": 65,
        "stamina_loss_scaler": 0.08,
        "type": "Flying"
},
    {
        "critical_chance": 0.05,
        "duration": 3300,
        "energy_delta": -50,
        "move_id": 39,
        "name": "Ice Beam",
        "power": 90,
        "stamina_loss_scaler": 0.09,
        "type": "Ice"
},
    {
        "critical_chance": 0.05,
        "duration": 3100,
        "energy_delta": -100,
        "move_id": 40,
        "name": "Blizzard",
        "power": 130,
        "stamina_loss_scaler": 0.11,
        "type": "Ice"
},
    {
        "critical_chance": 0.05,
        "duration": 3000,
        "energy_delta": -100,
        "move_id": 42,
        "name": "Heat Wave",
        "power": 95,
        "stamina_loss_scaler": 0.095,
        "type": "Fire"
},
    {
        "critical_chance": 0.05,
        "duration": 2400,
        "energy_delta": -33,
        "move_id": 45,
        "name": "Aerial Ace",
        "power": 55,
        "stamina_loss_scaler": 0.06,
        "type": "Flying"
},
    {
        "critical_chance": 0.25,
        "duration": 2800,
        "energy_delta": -50,
        "move_id": 46,
        "name": "Drill Run",
        "power": 80,
        "stamina_loss_scaler": 0.08,
        "type": "Ground"
},
    {
        "critical_chance": 0.05,
        "duration": 2600,
        "energy_delta": -100,
        "move_id": 47,
        "name": "Petal Blizzard",
        "power": 110,
        "stamina_loss_scaler": 0.09,
        "type": "Grass"
},
    {
        "critical_chance": 0.05,
        "duration": 2600,
        "energy_delta": -50,
        "heal_scalar": 0.5,
        "move_id": 48,
        "name": "Mega Drain",
        "power": 25,
        "stamina_loss_scaler": 0.04,
        "type": "Grass"
},
    {
        "critical_chance": 0.05,
        "duration": 3700,
        "energy_delta": -50,
        "move_id": 49,
        "name": "Bug Buzz",
        "power": 100,
        "stamina_loss_scaler": 0.09,
        "type": "Bug"
},
    {
        "critical_chance": 0.05,
        "duration": 1700,
        "energy_delta": -33,
        "move_id": 50,
        "name": "Poison Fang",
        "power": 35,
        "stamina_loss_scaler": 0.05,
        "type": "Poison"
},
    {
        "critical_chance": 0.25,
        "duration": 2200,
        "energy_delta": -33,
        "move_id": 51,
        "name": "Night Slash",
        "power": 50,
        "stamina_loss_scaler": 0.07,
        "type": "Dark"
},
    {
        "critical_chance": 0.05,
        "duration": 1900,
        "energy_delta": -33,
        "move_id": 53,
        "name": "Bubble Beam",
        "power": 45,
        "stamina_loss_scaler": 0.065,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 2200,
        "energy_delta": -50,
        "move_id": 54,
        "name": "Submission",
        "power": 60,
        "stamina_loss_scaler": 0.08,
        "type": "Fighting"
},
    {
        "critical_chance": 0.05,
        "duration": 1900,
        "energy_delta": -33,
        "move_id": 56,
        "name": "Low Sweep",
        "power": 40,
        "stamina_loss_scaler": 0.065,
        "type": "Fighting"
},
    {
        "critical_chance": 0.05,
        "duration": 2600,
        "energy_delta": -33,
        "move_id": 57,
        "name": "Aqua Jet",
        "power": 45,
        "stamina_loss_scaler": 0.04,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 1900,
        "energy_delta": -33,
        "move_id": 58,
        "name": "Aqua Tail",
        "power": 50,
        "stamina_loss_scaler": 0.09,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 2100,
        "energy_delta": -33,
        "move_id": 59,
        "name": "Seed Bomb",
        "power": 55,
        "stamina_loss_scaler": 0.08,
        "type": "Grass"
},
    {
        "critical_chance": 0.05,
        "duration": 2700,
        "energy_delta": -33,
        "move_id": 60,
        "name": "Psyshock",
        "power": 65,
        "stamina_loss_scaler": 0.08,
        "type": "Psychic"
},
    {
        "critical_chance": 0.05,
        "duration": 3500,
        "energy_delta": -33,
        "move_id": 62,
        "name": "Ancient Power",
        "power": 70,
        "stamina_loss_scaler": 0.06,
        "type": "Rock"
},
    {
        "critical_chance": 0.25,
        "duration": 3200,
        "energy_delta": -50,
        "move_id": 63,
        "name": "Rock Tomb",
        "power": 70,
        "stamina_loss_scaler": 0.06,
        "type": "Rock"
},
    {
        "critical_chance": 0.05,
        "duration": 2700,
        "energy_delta": -50,
        "move_id": 64,
        "name": "Rock Slide",
        "power": 80,
        "stamina_loss_scaler": 0.075,
        "type": "Rock"
},
    {
        "critical_chance": 0.05,
        "duration": 2900,
        "energy_delta": -50,
        "move_id": 65,
        "name": "Power Gem",
        "power": 80,
        "stamina_loss_scaler": 0.08,
        "type": "Rock"
},
    {
        "critical_chance": 0.05,
        "duration": 2900,
        "energy_delta": -33,
        "move_id": 66,
        "name": "Shadow Sneak",
        "power": 50,
        "stamina_loss_scaler": 0.04,
        "type": "Ghost"
},
    {
        "critical_chance": 0.05,
        "duration": 1700,
        "energy_delta": -33,
        "move_id": 67,
        "name": "Shadow Punch",
        "power": 40,
        "stamina_loss_scaler": 0.06,
        "type": "Ghost"
},
    {
        "critical_chance": 0.05,
        "duration": 2300,
        "energy_delta": -33,
        "move_id": 69,
        "name": "Ominous Wind",
        "power": 50,
        "stamina_loss_scaler": 0.06,
        "type": "Ghost"
},
    {
        "critical_chance": 0.05,
        "duration": 3000,
        "energy_delta": -50,
        "move_id": 70,
        "name": "Shadow Ball",
        "power": 100,
        "stamina_loss_scaler": 0.08,
        "type": "Ghost"
},
    {
        "critical_chance": 0.05,
        "duration": 2800,
        "energy_delta": -33,
        "move_id": 72,
        "name": "Magnet Bomb",
        "power": 70,
        "stamina_loss_scaler": 0.06,
        "type": "Steel"
},
    {
        "critical_chance": 0.05,
        "duration": 1900,
        "energy_delta": -50,
        "move_id": 74,
        "name": "Iron Head",
        "power": 60,
        "stamina_loss_scaler": 0.08,
        "type": "Steel"
},
    {
        "critical_chance": 0.05,
        "duration": 2800,
        "energy_delta": -50,
        "heal_scalar": 0.5,
        "move_id": 75,
        "name": "Parabolic Charge",
        "power": 65,
        "stamina_loss_scaler": 0.05,
        "type": "Electric"
},
    {
        "critical_chance": 0.05,
        "duration": 1800,
        "energy_delta": -33,
        "move_id": 77,
        "name": "Thunder Punch",
        "power": 45,
        "stamina_loss_scaler": 0.075,
        "type": "Electric"
},
    {
        "critical_chance": 0.05,
        "duration": 2400,
        "energy_delta": -100,
        "move_id": 78,
        "name": "Thunder",
        "power": 100,
        "stamina_loss_scaler": 0.11,
        "type": "Electric"
},
    {
        "critical_chance": 0.05,
        "duration": 2500,
        "energy_delta": -50,
        "move_id": 79,
        "name": "Thunderbolt",
        "power": 80,
        "stamina_loss_scaler": 0.09,
        "type": "Electric"
},
    {
        "critical_chance": 0.05,
        "duration": 2800,
        "energy_delta": -33,
        "move_id": 80,
        "name": "Twister",
        "power": 45,
        "stamina_loss_scaler": 0.04,
        "type": "Dragon"
},
    {
        "critical_chance": 0.05,
        "duration": 3600,
        "energy_delta": -50,
        "move_id": 82,
        "name": "Dragon Pulse",
        "power": 90,
        "stamina_loss_scaler": 0.085,
        "type": "Dragon"
},
    {
        "critical_chance": 0.25,
        "duration": 1700,
        "energy_delta": -33,
        "move_id": 83,
        "name": "Dragon Claw",
        "power": 50,
        "stamina_loss_scaler": 0.08,
        "type": "Dragon"
},
    {
        "critical_chance": 0.05,
        "duration": 3900,
        "energy_delta": -33,
        "move_id": 84,
        "name": "Disarming Voice",
        "power": 70,
        "stamina_loss_scaler": 0.04,
        "type": "Fairy"
},
    {
        "critical_chance": 0.05,
        "duration": 2600,
        "energy_delta": -50,
        "heal_scalar": 1.0,
        "move_id": 85,
        "name": "Draining Kiss",
        "power": 60,
        "stamina_loss_scaler": 0.05,
        "type": "Fairy"
},
    {
        "critical_chance": 0.05,
        "duration": 3500,
        "energy_delta": -50,
        "move_id": 86,
        "name": "Dazzling Gleam",
        "power": 100,
        "stamina_loss_scaler": 0.08,
        "type": "Fairy"
},
    {
        "critical_chance": 0.05,
        "duration": 3900,
        "energy_delta": -100,
        "move_id": 87,
        "name": "Moonblast",
        "power": 130,
        "stamina_loss_scaler": 0.095,
        "type": "Fairy"
},
    {
        "critical_chance": 0.05,
        "duration": 2900,
        "energy_delta": -50,
        "move_id": 88,
        "name": "Play Rough",
        "power": 90,
        "stamina_loss_scaler": 0.1,
        "type": "Fairy"
},
    {
        "critical_chance": 0.25,
        "duration": 1500,
        "energy_delta": -33,
        "move_id": 89,
        "name": "Cross Poison",
        "power": 40,
        "stamina_loss_scaler": 0.07,
        "type": "Poison"
},
    {
        "critical_chance": 0.05,
        "duration": 2300,
        "energy_delta": -50,
        "move_id": 90,
        "name": "Sludge Bomb",
        "power": 80,
        "stamina_loss_scaler": 0.09,
        "type": "Poison"
},
    {
        "critical_chance": 0.05,
        "duration": 3200,
        "energy_delta": -100,
        "move_id": 91,
        "name": "Sludge Wave",
        "power": 110,
        "stamina_loss_scaler": 0.095,
        "type": "Poison"
},
    {
        "critical_chance": 0.05,
        "duration": 3100,
        "energy_delta": -100,
        "move_id": 92,
        "name": "Gunk Shot",
        "power": 130,
        "stamina_loss_scaler": 0.12,
        "type": "Poison"
},
    {
        "critical_chance": 0.05,
        "duration": 1600,
        "energy_delta": -33,
        "move_id": 94,
        "name": "Bone Club",
        "power": 40,
        "stamina_loss_scaler": 0.065,
        "type": "Ground"
},
    {
        "critical_chance": 0.05,
        "duration": 3500,
        "energy_delta": -50,
        "move_id": 95,
        "name": "Bulldoze",
        "power": 80,
        "stamina_loss_scaler": 0.06,
        "type": "Ground"
},
    {
        "critical_chance": 0.05,
        "duration": 2300,
        "energy_delta": -33,
        "move_id": 96,
        "name": "Mud Bomb",
        "power": 55,
        "stamina_loss_scaler": 0.065,
        "type": "Ground"
},
    {
        "critical_chance": 0.05,
        "duration": 2900,
        "energy_delta": -50,
        "move_id": 99,
        "name": "Signal Beam",
        "power": 75,
        "stamina_loss_scaler": 0.075,
        "type": "Bug"
},
    {
        "critical_chance": 0.05,
        "duration": 1600,
        "energy_delta": -33,
        "move_id": 100,
        "name": "X Scissor",
        "power": 45,
        "stamina_loss_scaler": 0.08,
        "type": "Bug"
},
    {
        "critical_chance": 0.05,
        "duration": 3800,
        "energy_delta": -33,
        "move_id": 101,
        "name": "Flame Charge",
        "power": 70,
        "stamina_loss_scaler": 0.05,
        "type": "Fire"
},
    {
        "critical_chance": 0.05,
        "duration": 2600,
        "energy_delta": -50,
        "move_id": 102,
        "name": "Flame Burst",
        "power": 70,
        "stamina_loss_scaler": 0.07,
        "type": "Fire"
},
    {
        "critical_chance": 0.05,
        "duration": 4200,
        "energy_delta": -100,
        "move_id": 103,
        "name": "Fire Blast",
        "power": 140,
        "stamina_loss_scaler": 0.11,
        "type": "Fire"
},
    {
        "critical_chance": 0.05,
        "duration": 2300,
        "energy_delta": -50,
        "move_id": 104,
        "name": "Brine",
        "power": 60,
        "stamina_loss_scaler": 0.065,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 3200,
        "energy_delta": -50,
        "move_id": 105,
        "name": "Water Pulse",
        "power": 70,
        "stamina_loss_scaler": 0.06,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 3700,
        "energy_delta": -50,
        "move_id": 106,
        "name": "Scald",
        "power": 80,
        "stamina_loss_scaler": 0.08,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 3300,
        "energy_delta": -100,
        "move_id": 107,
        "name": "Hydro Pump",
        "power": 130,
        "stamina_loss_scaler": 0.11,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 2800,
        "energy_delta": -50,
        "move_id": 108,
        "name": "Psychic",
        "power": 90,
        "stamina_loss_scaler": 0.09,
        "type": "Psychic"
},
    {
        "critical_chance": 0.05,
        "duration": 2300,
        "energy_delta": -50,
        "move_id": 109,
        "name": "Psystrike",
        "power": 90,
        "stamina_loss_scaler": 0.1,
        "type": "Psychic"
},
    {
        "critical_chance": 0.05,
        "duration": 3300,
        "energy_delta": -33,
        "move_id": 111,
        "name": "Icy Wind",
        "power": 60,
        "stamina_loss_scaler": 0.055,
        "type": "Ice"
},
    {
        "critical_chance": 0.05,
        "duration": 3900,
        "energy_delta": -100,
        "heal_scalar": 0.5,
        "move_id": 114,
        "name": "Giga Drain",
        "power": 50,
        "stamina_loss_scaler": 0.075,
        "type": "Grass"
},
    {
        "critical_chance": 0.05,
        "duration": 2200,
        "energy_delta": -33,
        "move_id": 115,
        "name": "Fire Punch",
        "power": 55,
        "stamina_loss_scaler": 0.075,
        "type": "Fire"
},
    {
        "critical_chance": 0.05,
        "duration": 4900,
        "energy_delta": -100,
        "move_id": 116,
        "name": "Solar Beam",
        "power": 180,
        "stamina_loss_scaler": 0.12,
        "type": "Grass"
},
    {
        "critical_chance": 0.25,
        "duration": 2400,
        "energy_delta": -33,
        "move_id": 117,
        "name": "Leaf Blade",
        "power": 70,
        "stamina_loss_scaler": 0.09,
        "type": "Grass"
},
    {
        "duration": 2600,
        "energy_delta": -50,
        "move_id": 118,
        "name": "Power Whip",
        "power": 90,
        "stamina_loss_scaler": 0.12,
        "type": "Grass"
},
    {
        "critical_chance": 0.25,
        "duration": 2700,
        "energy_delta": -50,
        "move_id": 121,
        "name": "Air Cutter",
        "power": 60,
        "stamina_loss_scaler": 0.06,
        "type": "Flying"
},
    {
        "critical_chance": 0.05,
        "duration": 2700,
        "energy_delta": -100,
        "move_id": 122,
        "name": "Hurricane",
        "power": 110,
        "stamina_loss_scaler": 0.11,
        "type": "Flying"
},
    {
        "critical_chance": 0.25,
        "duration": 1600,
        "energy_delta": -33,
        "move_id": 123,
        "name": "Brick Break",
        "power": 40,
        "stamina_loss_scaler": 0.075,
        "type": "Fighting"
},
    {
        "critical_chance": 0.05,
        "duration": 2800,
        "energy_delta": -50,
        "move_id": 125,
        "name": "Swift",
        "power": 60,
        "stamina_loss_scaler": 0.06,
        "type": "Normal"
},
    {
        "critical_chance": 0.05,
        "duration": 1850,
        "energy_delta": -33,
        "move_id": 126,
        "name": "Horn Attack",
        "power": 40,
        "stamina_loss_scaler": 0.065,
        "type": "Normal"
},
    {
        "critical_chance": 0.05,
        "duration": 1700,
        "energy_delta": -50,
        "move_id": 127,
        "name": "Stomp",
        "power": 55,
        "stamina_loss_scaler": 0.065,
        "type": "Normal"
},
    {
        "critical_chance": 0.05,
        "duration": 2500,
        "energy_delta": -50,
        "move_id": 129,
        "name": "Hyper Fang",
        "power": 80,
        "stamina_loss_scaler": 0.08,
        "type": "Normal"
},
    {
        "critical_chance": 0.05,
        "duration": 1900,
        "energy_delta": -33,
        "move_id": 131,
        "name": "Body Slam",
        "power": 50,
        "stamina_loss_scaler": 0.085,
        "type": "Normal"
},
    {
        "duration": 1900,
        "energy_delta": -33,
        "heal_scalar": 1.0,
        "move_id": 132,
        "name": "Rest",
        "power": 50,
        "stamina_loss_scaler": 0,
        "type": "Normal"
},
    {
        "duration": 2200,
        "energy_delta": 0,
        "move_id": 133,
        "name": "Struggle",
        "power": 35,
        "stamina_loss_scaler": 0.1,
        "type": "Normal"
},
    {
        "critical_chance": 0.05,
        "duration": 4700,
        "energy_delta": -100,
        "move_id": 134,
        "name": "Scald Blastoise",
        "power": 50,
        "stamina_loss_scaler": 0.08,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 4500,
        "energy_delta": -100,
        "move_id": 135,
        "name": "Hydro Pump Blastoise",
        "power": 90,
        "stamina_loss_scaler": 0.11,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 2900,
        "energy_delta": -33,
        "move_id": 136,
        "name": "Wrap Green",
        "power": 25,
        "stamina_loss_scaler": 0.06,
        "type": "Normal"
},
    {
        "critical_chance": 0.05,
        "duration": 2900,
        "energy_delta": -33,
        "move_id": 137,
        "name": "Wrap Pink",
        "power": 25,
        "stamina_loss_scaler": 0.06,
        "type": "Normal"
},
    {
        "duration": 1000,
        "energy_delta": 6,
        "move_id": 232,
        "name": "Water Gun Blastoise",
        "power": 10,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 2300,
        "energy_delta": -100,
        "move_id": 245,
        "name": "Close Combat",
        "power": 100,
        "stamina_loss_scaler": 0.04,
        "type": "Fighting"
},
    {
        "critical_chance": 0.05,
        "duration": 2700,
        "energy_delta": -50,
        "move_id": 246,
        "name": "Dynamic Punch",
        "power": 90,
        "stamina_loss_scaler": 0.04,
        "type": "Fighting"
},
    {
        "critical_chance": 0.05,
        "duration": 3500,
        "energy_delta": -100,
        "move_id": 247,
        "name": "Focus Blast",
        "power": 140,
        "stamina_loss_scaler": 0.04,
        "type": "Fighting"
},
    {
        "critical_chance": 0.05,
        "duration": 3550,
        "energy_delta": -50,
        "move_id": 248,
        "name": "Aurora Beam",
        "power": 80,
        "stamina_loss_scaler": 0.04,
        "type": "Ice"
},
    {
        "critical_chance": 0.05,
        "duration": 2600,
        "energy_delta": -50,
        "move_id": 251,
        "name": "Wild Charge",
        "power": 90,
        "stamina_loss_scaler": 0.04,
        "type": "Electric"
},
    {
        "critical_chance": 0.05,
        "duration": 3700,
        "energy_delta": -100,
        "move_id": 252,
        "name": "Zap Cannon",
        "power": 140,
        "stamina_loss_scaler": 0.04,
        "type": "Electric"
},
    {
        "critical_chance": 0.05,
        "duration": 2700,
        "energy_delta": -50,
        "move_id": 254,
        "name": "Avalanche",
        "power": 90,
        "stamina_loss_scaler": 0.04,
        "type": "Ice"
},
    {
        "critical_chance": 0.05,
        "duration": 2000,
        "energy_delta": -100,
        "move_id": 256,
        "name": "Brave Bird",
        "power": 130,
        "stamina_loss_scaler": 0.04,
        "type": "Flying"
},
    {
        "critical_chance": 0.05,
        "duration": 2000,
        "energy_delta": -50,
        "move_id": 257,
        "name": "Sky Attack",
        "power": 80,
        "stamina_loss_scaler": 0.04,
        "type": "Flying"
},
    {
        "critical_chance": 0.05,
        "duration": 4000,
        "energy_delta": -33,
        "move_id": 258,
        "name": "Sand Tomb",
        "power": 60,
        "stamina_loss_scaler": 0.04,
        "type": "Ground"
},
    {
        "critical_chance": 0.05,
        "duration": 2100,
        "energy_delta": -33,
        "move_id": 259,
        "name": "Rock Blast",
        "power": 50,
        "stamina_loss_scaler": 0.04,
        "type": "Rock"
},
    {
        "critical_chance": 0.05,
        "duration": 3700,
        "energy_delta": -33,
        "move_id": 262,
        "name": "Silver Wind",
        "power": 70,
        "stamina_loss_scaler": 0.04,
        "type": "Bug"
},
    {
        "critical_chance": 0.05,
        "duration": 2600,
        "energy_delta": -50,
        "move_id": 265,
        "name": "Night Shade",
        "power": 60,
        "stamina_loss_scaler": 0.04,
        "type": "Ghost"
},
    {
        "critical_chance": 0.05,
        "duration": 3300,
        "energy_delta": -50,
        "move_id": 267,
        "name": "Gyro Ball",
        "power": 80,
        "stamina_loss_scaler": 0.04,
        "type": "Steel"
},
    {
        "critical_chance": 0.05,
        "duration": 2100,
        "energy_delta": -50,
        "move_id": 268,
        "name": "Heavy Slam",
        "power": 70,
        "stamina_loss_scaler": 0.04,
        "type": "Steel"
},
    {
        "critical_chance": 0.05,
        "duration": 4000,
        "energy_delta": -100,
        "move_id": 270,
        "name": "Overheat",
        "power": 160,
        "stamina_loss_scaler": 0.04,
        "type": "Fire"
},
    {
        "critical_chance": 0.05,
        "duration": 2600,
        "energy_delta": -50,
        "move_id": 272,
        "name": "Grass Knot",
        "power": 90,
        "stamina_loss_scaler": 0.04,
        "type": "Grass"
},
    {
        "critical_chance": 0.05,
        "duration": 3900,
        "energy_delta": -50,
        "move_id": 273,
        "name": "Energy Ball",
        "power": 90,
        "stamina_loss_scaler": 0.04,
        "type": "Grass"
},
    {
        "critical_chance": 0.05,
        "duration": 2700,
        "energy_delta": -100,
        "move_id": 275,
        "name": "Futuresight",
        "power": 120,
        "stamina_loss_scaler": 0.04,
        "type": "Psychic"
},
    {
        "critical_chance": 0.05,
        "duration": 2600,
        "energy_delta": -50,
        "move_id": 276,
        "name": "Mirror Coat",
        "power": 60,
        "stamina_loss_scaler": 0.04,
        "type": "Psychic"
},
    {
        "critical_chance": 0.05,
        "duration": 3900,
        "energy_delta": -50,
        "move_id": 277,
        "name": "Outrage",
        "power": 110,
        "stamina_loss_scaler": 0.04,
        "type": "Dragon"
},
    {
        "critical_chance": 0.05,
        "duration": 3200,
        "energy_delta": -33,
        "move_id": 279,
        "name": "Crunch",
        "power": 70,
        "stamina_loss_scaler": 0.04,
        "type": "Dark"
},
    {
        "critical_chance": 0.05,
        "duration": 2000,
        "energy_delta": -50,
        "move_id": 280,
        "name": "Foul Play",
        "power": 70,
        "stamina_loss_scaler": 0.04,
        "type": "Dark"
},
    {
        "duration": 1700,
        "energy_delta": -50,
        "move_id": 284,
        "name": "Surf",
        "power": 65,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 3600,
        "energy_delta": -100,
        "move_id": 285,
        "name": "Draco Meteor",
        "power": 150,
        "stamina_loss_scaler": 0.01,
        "type": "Dragon"
},
    {
        "duration": 1700,
        "energy_delta": -33,
        "move_id": 286,
        "name": "Doom Desire",
        "power": 70,
        "stamina_loss_scaler": 0.01,
        "type": "Steel"
},
    {
        "duration": 4000,
        "energy_delta": -50,
        "move_id": 288,
        "name": "Psycho Boost",
        "power": 70,
        "stamina_loss_scaler": 0.01,
        "type": "Psychic"
},
    {
        "duration": 1700,
        "energy_delta": -100,
        "move_id": 289,
        "name": "Origin Pulse",
        "power": 130,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 1700,
        "energy_delta": -100,
        "move_id": 290,
        "name": "Precipice Blades",
        "power": 130,
        "stamina_loss_scaler": 0.01,
        "type": "Ground"
},
    {
        "duration": 1600,
        "energy_delta": -33,
        "move_id": 292,
        "name": "Weather Ball Fire",
        "power": 55,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "duration": 1600,
        "energy_delta": -33,
        "move_id": 293,
        "name": "Weather Ball Ice",
        "power": 55,
        "stamina_loss_scaler": 0.01,
        "type": "Ice"
},
    {
        "duration": 1600,
        "energy_delta": -33,
        "move_id": 294,
        "name": "Weather Ball Rock",
        "power": 55,
        "stamina_loss_scaler": 0.01,
        "type": "Rock"
},
    {
        "duration": 1600,
        "energy_delta": -33,
        "move_id": 295,
        "name": "Weather Ball Water",
        "power": 55,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 2600,
        "energy_delta": -50,
        "move_id": 296,
        "name": "Frenzy Plant",
        "power": 100,
        "stamina_loss_scaler": 0.01,
        "type": "Grass"
},
    {
        "duration": 3300,
        "energy_delta": -50,
        "move_id": 298,
        "name": "Blast Burn",
        "power": 110,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "critical_chance": 0.05,
        "duration": 1900,
        "energy_delta": -50,
        "move_id": 299,
        "name": "Hydro Cannon",
        "power": 90,
        "stamina_loss_scaler": 0.065,
        "type": "Water"
},
    {
        "critical_chance": 0.05,
        "duration": 2900,
        "energy_delta": -50,
        "move_id": 300,
        "name": "Last Resort",
        "power": 90,
        "stamina_loss_scaler": 0.065,
        "type": "Normal"
},
    {
        "critical_chance": 0.05,
        "duration": 2600,
        "energy_delta": -50,
        "move_id": 301,
        "name": "Meteor Mash",
        "power": 100,
        "stamina_loss_scaler": 0.065,
        "type": "Steel"
},
    {
        "duration": 3100,
        "energy_delta": -100,
        "move_id": 302,
        "name": "Skull Bash",
        "power": 130,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 3000,
        "energy_delta": -50,
        "move_id": 303,
        "name": "Acid Spray",
        "power": 20,
        "stamina_loss_scaler": 0.01,
        "type": "Poison"
},
    {
        "duration": 3600,
        "energy_delta": -50,
        "move_id": 304,
        "name": "Earth Power",
        "power": 100,
        "stamina_loss_scaler": 0.01,
        "type": "Ground"
},
    {
        "duration": 1900,
        "energy_delta": -50,
        "move_id": 305,
        "name": "Crabhammer",
        "power": 85,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 2900,
        "energy_delta": -33,
        "move_id": 306,
        "name": "Lunge",
        "power": 55,
        "stamina_loss_scaler": 0.01,
        "type": "Bug"
},
    {
        "duration": 1900,
        "energy_delta": 0,
        "move_id": 307,
        "name": "Crush Claw",
        "power": 0,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 2300,
        "energy_delta": -50,
        "move_id": 308,
        "name": "Octazooka",
        "power": 50,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 2400,
        "energy_delta": -33,
        "move_id": 309,
        "name": "Mirror Shot",
        "power": 50,
        "stamina_loss_scaler": 0.01,
        "type": "Steel"
},
    {
        "duration": 3000,
        "energy_delta": -50,
        "move_id": 310,
        "name": "Super Power",
        "power": 85,
        "stamina_loss_scaler": 0.01,
        "type": "Fighting"
},
    {
        "duration": 2200,
        "energy_delta": -33,
        "move_id": 311,
        "name": "Fell Stinger",
        "power": 50,
        "stamina_loss_scaler": 0.01,
        "type": "Bug"
},
    {
        "duration": 3100,
        "energy_delta": -33,
        "move_id": 312,
        "name": "Leaf Tornado",
        "power": 45,
        "stamina_loss_scaler": 0.01,
        "type": "Grass"
},
    {
        "duration": 2500,
        "energy_delta": 0,
        "move_id": 313,
        "name": "Leech Life",
        "power": 0,
        "stamina_loss_scaler": 0.01,
        "type": "Bug"
},
    {
        "duration": 2400,
        "energy_delta": 0,
        "move_id": 314,
        "name": "Drain Punch",
        "power": 0,
        "stamina_loss_scaler": 0.01,
        "type": "Fighting"
},
    {
        "duration": 2800,
        "energy_delta": -50,
        "move_id": 315,
        "name": "Shadow Bone",
        "power": 80,
        "stamina_loss_scaler": 0.01,
        "type": "Ghost"
},
    {
        "duration": 2200,
        "energy_delta": -33,
        "move_id": 316,
        "name": "Muddy Water",
        "power": 50,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 1200,
        "energy_delta": -33,
        "move_id": 317,
        "name": "Blaze Kick",
        "power": 45,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "duration": 1300,
        "energy_delta": -33,
        "move_id": 318,
        "name": "Razor Shell",
        "power": 45,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 2000,
        "energy_delta": -33,
        "move_id": 319,
        "name": "Power Up Punch",
        "power": 50,
        "stamina_loss_scaler": 0.01,
        "type": "Fighting"
},
    {
        "duration": 4700,
        "energy_delta": -100,
        "move_id": 321,
        "name": "Giga Impact",
        "power": 200,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 2000,
        "energy_delta": -33,
        "move_id": 322,
        "name": "Frustration",
        "power": 10,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 700,
        "energy_delta": -33,
        "move_id": 323,
        "name": "Return",
        "power": 35,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 2600,
        "energy_delta": -50,
        "move_id": 324,
        "name": "Synchronoise",
        "power": 80,
        "stamina_loss_scaler": 0.01,
        "type": "Psychic"
},
    {
        "duration": 1900,
        "energy_delta": 0,
        "move_id": 328,
        "name": "Horn Drill",
        "power": 0,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 2800,
        "energy_delta": 0,
        "move_id": 329,
        "name": "Fissure",
        "power": 0,
        "stamina_loss_scaler": 0.01,
        "type": "Ground"
},
    {
        "duration": 1200,
        "energy_delta": -33,
        "move_id": 330,
        "name": "Sacred Sword",
        "power": 55,
        "stamina_loss_scaler": 0.01,
        "type": "Fighting"
},
    {
        "duration": 2300,
        "energy_delta": -50,
        "move_id": 331,
        "name": "Flying Press",
        "power": 110,
        "stamina_loss_scaler": 0.01,
        "type": "Fighting"
},
    {
        "duration": 1800,
        "energy_delta": -50,
        "move_id": 332,
        "name": "Aura Sphere",
        "power": 90,
        "stamina_loss_scaler": 0.01,
        "type": "Fighting"
},
    {
        "duration": 2200,
        "energy_delta": -100,
        "move_id": 333,
        "name": "Payback",
        "power": 100,
        "stamina_loss_scaler": 0.01,
        "type": "Dark"
},
    {
        "duration": 3600,
        "energy_delta": -50,
        "move_id": 334,
        "name": "Rock Wrecker",
        "power": 110,
        "stamina_loss_scaler": 0.01,
        "type": "Rock"
},
    {
        "duration": 3400,
        "energy_delta": -100,
        "move_id": 335,
        "name": "Aeroblast",
        "power": 180,
        "stamina_loss_scaler": 0.01,
        "type": "Flying"
},
    {
        "duration": 2000,
        "energy_delta": -100,
        "move_id": 336,
        "name": "Techno Blast Normal",
        "power": 120,
        "stamina_loss_scaler": 0,
        "type": "Normal"
},
    {
        "duration": 2000,
        "energy_delta": -100,
        "move_id": 337,
        "name": "Techno Blast Burn",
        "power": 120,
        "stamina_loss_scaler": 0,
        "type": "Fire"
},
    {
        "duration": 2000,
        "energy_delta": -100,
        "move_id": 338,
        "name": "Techno Blast Chill",
        "power": 120,
        "stamina_loss_scaler": 0,
        "type": "Ice"
},
    {
        "duration": 2000,
        "energy_delta": -100,
        "move_id": 339,
        "name": "Techno Blast Water",
        "power": 120,
        "stamina_loss_scaler": 0,
        "type": "Water"
},
    {
        "duration": 2000,
        "energy_delta": -100,
        "move_id": 340,
        "name": "Techno Blast Shock",
        "power": 120,
        "stamina_loss_scaler": 0,
        "type": "Electric"
},
    {
        "duration": 1800,
        "energy_delta": -50,
        "move_id": 341,
        "name": "Fly",
        "power": 80,
        "stamina_loss_scaler": 0.01,
        "type": "Flying"
},
    {
        "duration": 2800,
        "energy_delta": -33,
        "move_id": 342,
        "name": "V Create",
        "power": 95,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "duration": 2500,
        "energy_delta": -100,
        "move_id": 343,
        "name": "Leaf Storm",
        "power": 130,
        "stamina_loss_scaler": 0.01,
        "type": "Grass"
},
    {
        "duration": 2500,
        "energy_delta": -50,
        "move_id": 344,
        "name": "Tri Attack",
        "power": 75,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 2800,
        "energy_delta": -50,
        "move_id": 348,
        "name": "Feather Dance",
        "power": 35,
        "stamina_loss_scaler": 0.01,
        "type": "Flying"
},
    {
        "duration": 1600,
        "energy_delta": -33,
        "move_id": 352,
        "name": "Weather Ball Normal",
        "power": 55,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 1200,
        "energy_delta": -33,
        "move_id": 353,
        "name": "Psychic Fangs",
        "power": 30,
        "stamina_loss_scaler": 0.01,
        "type": "Psychic"
},
    {
        "duration": 2600,
        "energy_delta": -100,
        "move_id": 358,
        "name": "Sacred Fire",
        "power": 120,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "duration": 2200,
        "energy_delta": -33,
        "move_id": 359,
        "name": "Icicle Spear",
        "power": 60,
        "stamina_loss_scaler": 0.01,
        "type": "Ice"
},
    {
        "duration": 3400,
        "energy_delta": -100,
        "move_id": 360,
        "name": "Aeroblast",
        "power": 200,
        "stamina_loss_scaler": 0.01,
        "type": "Flying"
},
    {
        "duration": 3400,
        "energy_delta": -100,
        "move_id": 361,
        "name": "Aeroblast",
        "power": 225,
        "stamina_loss_scaler": 0.01,
        "type": "Flying"
},
    {
        "duration": 2600,
        "energy_delta": -100,
        "move_id": 362,
        "name": "Sacred Fire",
        "power": 135,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "duration": 2600,
        "energy_delta": -100,
        "move_id": 363,
        "name": "Sacred Fire",
        "power": 155,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "duration": 2000,
        "energy_delta": -100,
        "move_id": 364,
        "name": "Acrobatics",
        "power": 100,
        "stamina_loss_scaler": 0.01,
        "type": "Flying"
}
]

// https://pogoapi.net/api/v1/cp_multiplier.json
// Returns a JSON array of objects, the values of the array are an object with the keys level and multiplier.

const CP_MULTIPLIER = [
    {
        "level": 1,
        "multiplier": 0.09399999678134918
},
    {
        "level": 1.5,
        "multiplier": 0.1351374313235283
},
    {
        "level": 2.0,
        "multiplier": 0.16639786958694458
},
    {
        "level": 2.5,
        "multiplier": 0.1926509141921997
},
    {
        "level": 3.0,
        "multiplier": 0.21573247015476227
},
    {
        "level": 3.5,
        "multiplier": 0.23657265305519104
},
    {
        "level": 4.0,
        "multiplier": 0.2557200491428375
},
    {
        "level": 4.5,
        "multiplier": 0.27353037893772125
},
    {
        "level": 5.0,
        "multiplier": 0.29024988412857056
},
    {
        "level": 5.5,
        "multiplier": 0.3060573786497116
},
    {
        "level": 6.0,
        "multiplier": 0.3210875988006592
},
    {
        "level": 6.5,
        "multiplier": 0.33544503152370453
},
    {
        "level": 7.0,
        "multiplier": 0.3492126762866974
},
    {
        "level": 7.5,
        "multiplier": 0.362457737326622
},
    {
        "level": 8.0,
        "multiplier": 0.37523558735847473
},
    {
        "level": 8.5,
        "multiplier": 0.38759241108516856
},
    {
        "level": 9.0,
        "multiplier": 0.39956727623939514
},
    {
        "level": 9.5,
        "multiplier": 0.4111935495172506
},
    {
        "level": 10.0,
        "multiplier": 0.4225000143051148
},
    {
        "level": 10.5,
        "multiplier": 0.4329264134104144
},
    {
        "level": 11.0,
        "multiplier": 0.443107545375824
},
    {
        "level": 11.5,
        "multiplier": 0.4530599538719858
},
    {
        "level": 12.0,
        "multiplier": 0.46279838681221
},
    {
        "level": 12.5,
        "multiplier": 0.4723360780626535
},
    {
        "level": 13.0,
        "multiplier": 0.4816849529743195
},
    {
        "level": 13.5,
        "multiplier": 0.4908558102324605
},
    {
        "level": 14.0,
        "multiplier": 0.4998584389686584
},
    {
        "level": 14.5,
        "multiplier": 0.5087017565965652
},
    {
        "level": 15.0,
        "multiplier": 0.517393946647644
},
    {
        "level": 15.5,
        "multiplier": 0.5259425118565559
},
    {
        "level": 16.0,
        "multiplier": 0.5343543291091919
},
    {
        "level": 16.5,
        "multiplier": 0.5426357612013817
},
    {
        "level": 17.0,
        "multiplier": 0.5507926940917969
},
    {
        "level": 17.5,
        "multiplier": 0.5588305993005633
},
    {
        "level": 18.0,
        "multiplier": 0.5667545199394226
},
    {
        "level": 18.5,
        "multiplier": 0.574569147080183
},
    {
        "level": 19.0,
        "multiplier": 0.5822789072990417
},
    {
        "level": 19.5,
        "multiplier": 0.5898879119195044
},
    {
        "level": 20.0,
        "multiplier": 0.5974000096321106
},
    {
        "level": 20.5,
        "multiplier": 0.6048236563801765
},
    {
        "level": 21.0,
        "multiplier": 0.6121572852134705
},
    {
        "level": 21.5,
        "multiplier": 0.6194041110575199
},
    {
        "level": 22.0,
        "multiplier": 0.6265671253204346
},
    {
        "level": 22.5,
        "multiplier": 0.633649181574583
},
    {
        "level": 23.0,
        "multiplier": 0.6406529545783997
},
    {
        "level": 23.5,
        "multiplier": 0.6475809663534164
},
    {
        "level": 24.0,
        "multiplier": 0.654435634613037
},
    {
        "level": 24.5,
        "multiplier": 0.6612192690372467
},
    {
        "level": 25.0,
        "multiplier": 0.667934000492096
},
    {
        "level": 25.5,
        "multiplier": 0.6745819002389908
},
    {
        "level": 26.0,
        "multiplier": 0.6811649203300476
},
    {
        "level": 26.5,
        "multiplier": 0.6876849085092545
},
    {
        "level": 27.0,
        "multiplier": 0.6941436529159546
},
    {
        "level": 27.5,
        "multiplier": 0.7005428969860077
},
    {
        "level": 28.0,
        "multiplier": 0.7068842053413391
},
    {
        "level": 28.5,
        "multiplier": 0.7131690979003906
},
    {
        "level": 29.0,
        "multiplier": 0.719399094581604
},
    {
        "level": 29.5,
        "multiplier": 0.7255756109952927
},
    {
        "level": 30.0,
        "multiplier": 0.7317000031471252
},
    {
        "level": 30.5,
        "multiplier": 0.7347410172224045
},
    {
        "level": 31.0,
        "multiplier": 0.7377694845199585
},
    {
        "level": 31.5,
        "multiplier": 0.740785576403141
},
    {
        "level": 32.0,
        "multiplier": 0.7437894344329834
},
    {
        "level": 32.5,
        "multiplier": 0.7467812150716782
},
    {
        "level": 33.0,
        "multiplier": 0.7497610449790955
},
    {
        "level": 33.5,
        "multiplier": 0.7527291029691696
},
    {
        "level": 34.0,
        "multiplier": 0.7556855082511902
},
    {
        "level": 34.5,
        "multiplier": 0.7586303651332855
},
    {
        "level": 35.0,
        "multiplier": 0.7615638375282288
},
    {
        "level": 35.5,
        "multiplier": 0.7644860669970512
},
    {
        "level": 36.0,
        "multiplier": 0.7673971652984619
},
    {
        "level": 36.5,
        "multiplier": 0.7702972739934921
},
    {
        "level": 37.0,
        "multiplier": 0.7731865048408508
},
    {
        "level": 37.5,
        "multiplier": 0.7760649472475052
},
    {
        "level": 38.0,
        "multiplier": 0.7789327502250671
},
    {
        "level": 38.5,
        "multiplier": 0.78179006
},
    {
        "level": 39.0,
        "multiplier": 0.78463697
},
    {
        "level": 39.5,
        "multiplier": 0.78747358
},
    {
        "level": 40.0,
        "multiplier": 0.79030001
},
    {
        "level": 40.5,
        "multiplier": 0.79280001
},
    {
        "level": 41.0,
        "multiplier": 0.79530001
},
    {
        "level": 41.5,
        "multiplier": 0.79780001
},
    {
        "level": 42.0,
        "multiplier": 0.8003
},
    {
        "level": 42.5,
        "multiplier": 0.8028
},
    {
        "level": 43.0,
        "multiplier": 0.8053
},
    {
        "level": 43.5,
        "multiplier": 0.8078
},
    {
        "level": 44.0,
        "multiplier": 0.81029999
},
    {
        "level": 44.5,
        "multiplier": 0.81279999
},
    {
        "level": 45.0,
        "multiplier": 0.81529999
}
]



const FAST_MOVES = [
    {
        "duration": 400,
        "energy_delta": 6,
        "move_id": 200,
        "name": "Fury Cutter",
        "power": 3,
        "stamina_loss_scaler": 0.01,
        "type": "Bug"
},
    {
        "duration": 500,
        "energy_delta": 6,
        "move_id": 201,
        "name": "Bug Bite",
        "power": 5,
        "stamina_loss_scaler": 0.01,
        "type": "Bug"
},
    {
        "duration": 500,
        "energy_delta": 4,
        "move_id": 202,
        "name": "Bite",
        "power": 6,
        "stamina_loss_scaler": 0.01,
        "type": "Dark"
},
    {
        "duration": 700,
        "energy_delta": 8,
        "move_id": 203,
        "name": "Sucker Punch",
        "power": 7,
        "stamina_loss_scaler": 0.01,
        "type": "Dark"
},
    {
        "duration": 500,
        "energy_delta": 4,
        "move_id": 204,
        "name": "Dragon Breath",
        "power": 6,
        "stamina_loss_scaler": 0.01,
        "type": "Dragon"
},
    {
        "duration": 600,
        "energy_delta": 8,
        "move_id": 205,
        "name": "Thunder Shock",
        "power": 5,
        "stamina_loss_scaler": 0.01,
        "type": "Electric"
},
    {
        "duration": 700,
        "energy_delta": 9,
        "move_id": 206,
        "name": "Spark",
        "power": 6,
        "stamina_loss_scaler": 0.01,
        "type": "Electric"
},
    {
        "duration": 600,
        "energy_delta": 6,
        "move_id": 207,
        "name": "Low Kick",
        "power": 6,
        "stamina_loss_scaler": 0.01,
        "type": "Fighting"
},
    {
        "duration": 800,
        "energy_delta": 10,
        "move_id": 208,
        "name": "Karate Chop",
        "power": 8,
        "stamina_loss_scaler": 0.01,
        "type": "Fighting"
},
    {
        "duration": 1000,
        "energy_delta": 10,
        "move_id": 209,
        "name": "Ember",
        "power": 10,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "duration": 800,
        "energy_delta": 9,
        "move_id": 210,
        "name": "Wing Attack",
        "power": 8,
        "stamina_loss_scaler": 0.01,
        "type": "Flying"
},
    {
        "duration": 1000,
        "energy_delta": 10,
        "move_id": 211,
        "name": "Peck",
        "power": 10,
        "stamina_loss_scaler": 0.01,
        "type": "Flying"
},
    {
        "duration": 500,
        "energy_delta": 6,
        "move_id": 212,
        "name": "Lick",
        "power": 5,
        "stamina_loss_scaler": 0.01,
        "type": "Ghost"
},
    {
        "duration": 700,
        "energy_delta": 6,
        "move_id": 213,
        "name": "Shadow Claw",
        "power": 9,
        "stamina_loss_scaler": 0.01,
        "type": "Ghost"
},
    {
        "duration": 600,
        "energy_delta": 6,
        "move_id": 214,
        "name": "Vine Whip",
        "power": 7,
        "stamina_loss_scaler": 0.01,
        "type": "Grass"
},
    {
        "duration": 1000,
        "energy_delta": 7,
        "move_id": 215,
        "name": "Razor Leaf",
        "power": 13,
        "stamina_loss_scaler": 0.01,
        "type": "Grass"
},
    {
        "duration": 600,
        "energy_delta": 7,
        "move_id": 216,
        "name": "Mud Shot",
        "power": 5,
        "stamina_loss_scaler": 0.01,
        "type": "Ground"
},
    {
        "duration": 1200,
        "energy_delta": 12,
        "move_id": 217,
        "name": "Ice Shard",
        "power": 12,
        "stamina_loss_scaler": 0.01,
        "type": "Ice"
},
    {
        "duration": 900,
        "energy_delta": 8,
        "move_id": 218,
        "name": "Frost Breath",
        "power": 10,
        "stamina_loss_scaler": 0.01,
        "type": "Ice"
},
    {
        "duration": 800,
        "energy_delta": 10,
        "move_id": 219,
        "name": "Quick Attack",
        "power": 8,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 500,
        "energy_delta": 4,
        "move_id": 220,
        "name": "Scratch",
        "power": 6,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 500,
        "energy_delta": 5,
        "move_id": 221,
        "name": "Tackle",
        "power": 5,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 600,
        "energy_delta": 6,
        "move_id": 222,
        "name": "Pound",
        "power": 7,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 500,
        "energy_delta": 5,
        "move_id": 223,
        "name": "Cut",
        "power": 5,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 800,
        "energy_delta": 7,
        "move_id": 224,
        "name": "Poison Jab",
        "power": 10,
        "stamina_loss_scaler": 0.01,
        "type": "Poison"
},
    {
        "duration": 800,
        "energy_delta": 8,
        "move_id": 225,
        "name": "Acid",
        "power": 9,
        "stamina_loss_scaler": 0.01,
        "type": "Poison"
},
    {
        "duration": 600,
        "energy_delta": 8,
        "move_id": 226,
        "name": "Psycho Cut",
        "power": 5,
        "stamina_loss_scaler": 0.01,
        "type": "Psychic"
},
    {
        "duration": 900,
        "energy_delta": 7,
        "move_id": 227,
        "name": "Rock Throw",
        "power": 12,
        "stamina_loss_scaler": 0.01,
        "type": "Rock"
},
    {
        "duration": 700,
        "energy_delta": 7,
        "move_id": 228,
        "name": "Metal Claw",
        "power": 8,
        "stamina_loss_scaler": 0.01,
        "type": "Steel"
},
    {
        "duration": 900,
        "energy_delta": 10,
        "move_id": 229,
        "name": "Bullet Punch",
        "power": 9,
        "stamina_loss_scaler": 0.01,
        "type": "Steel"
},
    {
        "duration": 500,
        "energy_delta": 5,
        "move_id": 230,
        "name": "Water Gun",
        "power": 5,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 1730,
        "energy_delta": 20,
        "move_id": 231,
        "name": "Splash",
        "power": 0,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 1400,
        "energy_delta": 12,
        "move_id": 233,
        "name": "Mud Slap",
        "power": 18,
        "stamina_loss_scaler": 0.01,
        "type": "Ground"
},
    {
        "duration": 1100,
        "energy_delta": 10,
        "move_id": 234,
        "name": "Zen Headbutt",
        "power": 12,
        "stamina_loss_scaler": 0.01,
        "type": "Psychic"
},
    {
        "duration": 1600,
        "energy_delta": 15,
        "move_id": 235,
        "name": "Confusion",
        "power": 20,
        "stamina_loss_scaler": 0.01,
        "type": "Psychic"
},
    {
        "duration": 600,
        "energy_delta": 7,
        "move_id": 236,
        "name": "Poison Sting",
        "power": 5,
        "stamina_loss_scaler": 0.01,
        "type": "Poison"
},
    {
        "duration": 1200,
        "energy_delta": 14,
        "move_id": 237,
        "name": "Bubble",
        "power": 12,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 900,
        "energy_delta": 9,
        "move_id": 238,
        "name": "Feint Attack",
        "power": 10,
        "stamina_loss_scaler": 0.01,
        "type": "Dark"
},
    {
        "duration": 800,
        "energy_delta": 6,
        "move_id": 239,
        "name": "Steel Wing",
        "power": 11,
        "stamina_loss_scaler": 0.01,
        "type": "Steel"
},
    {
        "duration": 900,
        "energy_delta": 8,
        "move_id": 240,
        "name": "Fire Fang",
        "power": 12,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "duration": 1300,
        "energy_delta": 10,
        "move_id": 241,
        "name": "Rock Smash",
        "power": 15,
        "stamina_loss_scaler": 0.01,
        "type": "Fighting"
},
    {
        "duration": 2230,
        "energy_delta": 0,
        "move_id": 242,
        "name": "Transform",
        "power": 0,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 900,
        "energy_delta": 8,
        "move_id": 243,
        "name": "Counter",
        "power": 12,
        "stamina_loss_scaler": 0.01,
        "type": "Fighting"
},
    {
        "duration": 1000,
        "energy_delta": 15,
        "move_id": 244,
        "name": "Powder Snow",
        "power": 6,
        "stamina_loss_scaler": 0.01,
        "type": "Ice"
},
    {
        "duration": 1100,
        "energy_delta": 15,
        "move_id": 249,
        "name": "Charge Beam",
        "power": 8,
        "stamina_loss_scaler": 0.01,
        "type": "Electric"
},
    {
        "duration": 1600,
        "energy_delta": 21,
        "move_id": 250,
        "name": "Volt Switch",
        "power": 14,
        "stamina_loss_scaler": 0.01,
        "type": "Electric"
},
    {
        "duration": 1100,
        "energy_delta": 9,
        "move_id": 253,
        "name": "Dragon Tail",
        "power": 15,
        "stamina_loss_scaler": 0.01,
        "type": "Dragon"
},
    {
        "duration": 1200,
        "energy_delta": 10,
        "move_id": 255,
        "name": "Air Slash",
        "power": 14,
        "stamina_loss_scaler": 0.01,
        "type": "Flying"
},
    {
        "duration": 1100,
        "energy_delta": 14,
        "move_id": 260,
        "name": "Infestation",
        "power": 10,
        "stamina_loss_scaler": 0.01,
        "type": "Bug"
},
    {
        "duration": 1500,
        "energy_delta": 15,
        "move_id": 261,
        "name": "Struggle Bug",
        "power": 15,
        "stamina_loss_scaler": 0.01,
        "type": "Bug"
},
    {
        "duration": 1100,
        "energy_delta": 14,
        "move_id": 263,
        "name": "Astonish",
        "power": 8,
        "stamina_loss_scaler": 0.01,
        "type": "Ghost"
},
    {
        "duration": 1200,
        "energy_delta": 16,
        "move_id": 264,
        "name": "Hex",
        "power": 10,
        "stamina_loss_scaler": 0.01,
        "type": "Ghost"
},
    {
        "duration": 1100,
        "energy_delta": 7,
        "move_id": 266,
        "name": "Iron Tail",
        "power": 15,
        "stamina_loss_scaler": 0.01,
        "type": "Steel"
},
    {
        "duration": 1100,
        "energy_delta": 10,
        "move_id": 269,
        "name": "Fire Spin",
        "power": 14,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "duration": 1100,
        "energy_delta": 14,
        "move_id": 271,
        "name": "Bullet Seed",
        "power": 8,
        "stamina_loss_scaler": 0.01,
        "type": "Grass"
},
    {
        "duration": 1100,
        "energy_delta": 12,
        "move_id": 274,
        "name": "Extrasensory",
        "power": 12,
        "stamina_loss_scaler": 0.01,
        "type": "Psychic"
},
    {
        "duration": 1100,
        "energy_delta": 14,
        "move_id": 278,
        "name": "Snarl",
        "power": 12,
        "stamina_loss_scaler": 0.01,
        "type": "Dark"
},
    {
        "duration": 1500,
        "energy_delta": 15,
        "move_id": 281,
        "name": "Hidden Power",
        "power": 15,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 1200,
        "energy_delta": 10,
        "move_id": 282,
        "name": "Take Down",
        "power": 8,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 1200,
        "energy_delta": 8,
        "move_id": 283,
        "name": "Waterfall",
        "power": 16,
        "stamina_loss_scaler": 0.01,
        "type": "Water"
},
    {
        "duration": 1700,
        "energy_delta": 15,
        "move_id": 287,
        "name": "Yawn",
        "power": 0,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 1300,
        "energy_delta": 20,
        "move_id": 291,
        "name": "Present",
        "power": 5,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 1200,
        "energy_delta": 8,
        "move_id": 297,
        "name": "Smack Down",
        "power": 16,
        "stamina_loss_scaler": 0.01,
        "type": "Rock"
},
    {
        "duration": 1500,
        "energy_delta": 11,
        "move_id": 320,
        "name": "Charm",
        "power": 20,
        "stamina_loss_scaler": 0.01,
        "type": "Fairy"
},
    {
        "duration": 300,
        "energy_delta": 6,
        "move_id": 325,
        "name": "Lock On",
        "power": 1,
        "stamina_loss_scaler": 0.01,
        "type": "Normal"
},
    {
        "duration": 1200,
        "energy_delta": 16,
        "move_id": 326,
        "name": "Thunder Fang",
        "power": 12,
        "stamina_loss_scaler": 0.01,
        "type": "Electric"
},
    {
        "duration": 1500,
        "energy_delta": 20,
        "move_id": 327,
        "name": "Ice Fang",
        "power": 12,
        "stamina_loss_scaler": 0.01,
        "type": "Ice"
},
    {
        "duration": 2000,
        "energy_delta": 20,
        "move_id": 345,
        "name": "Gust",
        "power": 25,
        "stamina_loss_scaler": 0.01,
        "type": "Flying"
},
    {
        "duration": 2300,
        "energy_delta": 20,
        "move_id": 346,
        "name": "Incinerate",
        "power": 29,
        "stamina_loss_scaler": 0.01,
        "type": "Fire"
},
    {
        "duration": 1400,
        "energy_delta": 16,
        "move_id": 357,
        "name": "Magical Leaf",
        "power": 16,
        "stamina_loss_scaler": 0.01,
        "type": "Grass"
}
]

// https://pogoapi.net/api/v1/pokemon_generations.json
// Returns a JSON dict where each key is the generation name and the value is a list of 
// Pokemon that are from that generation. 
// Each Pokemon entry has its name, Pokemon ID, and generation number.
const GENERATION = [
    {
        "Generation 1": [
            {
                "generation_number": 1,
                "id": 1,
                "name": "Bulbasaur"
    },
            {
                "generation_number": 1,
                "id": 2,
                "name": "Ivysaur"
    },
            {
                "generation_number": 1,
                "id": 3,
                "name": "Venusaur"
    },
            {
                "generation_number": 1,
                "id": 4,
                "name": "Charmander"
    },
            {
                "generation_number": 1,
                "id": 5,
                "name": "Charmeleon"
    },
            {
                "generation_number": 1,
                "id": 6,
                "name": "Charizard"
    },
            {
                "generation_number": 1,
                "id": 7,
                "name": "Squirtle"
    },
            {
                "generation_number": 1,
                "id": 8,
                "name": "Wartortle"
    },
            {
                "generation_number": 1,
                "id": 9,
                "name": "Blastoise"
    },
            {
                "generation_number": 1,
                "id": 10,
                "name": "Caterpie"
    },
            {
                "generation_number": 1,
                "id": 11,
                "name": "Metapod"
    },
            {
                "generation_number": 1,
                "id": 12,
                "name": "Butterfree"
    },
            {
                "generation_number": 1,
                "id": 13,
                "name": "Weedle"
    },
            {
                "generation_number": 1,
                "id": 14,
                "name": "Kakuna"
    },
            {
                "generation_number": 1,
                "id": 15,
                "name": "Beedrill"
    },
            {
                "generation_number": 1,
                "id": 16,
                "name": "Pidgey"
    },
            {
                "generation_number": 1,
                "id": 17,
                "name": "Pidgeotto"
    },
            {
                "generation_number": 1,
                "id": 18,
                "name": "Pidgeot"
    },
            {
                "generation_number": 1,
                "id": 19,
                "name": "Rattata"
    },
            {
                "generation_number": 1,
                "id": 20,
                "name": "Raticate"
    },
            {
                "generation_number": 1,
                "id": 21,
                "name": "Spearow"
    },
            {
                "generation_number": 1,
                "id": 22,
                "name": "Fearow"
    },
            {
                "generation_number": 1,
                "id": 23,
                "name": "Ekans"
    },
            {
                "generation_number": 1,
                "id": 24,
                "name": "Arbok"
    },
            {
                "generation_number": 1,
                "id": 25,
                "name": "Pikachu"
    },
            {
                "generation_number": 1,
                "id": 26,
                "name": "Raichu"
    },
            {
                "generation_number": 1,
                "id": 27,
                "name": "Sandshrew"
    },
            {
                "generation_number": 1,
                "id": 28,
                "name": "Sandslash"
    },
            {
                "generation_number": 1,
                "id": 29,
                "name": "Nidoran\u2640"
    },
            {
                "generation_number": 1,
                "id": 30,
                "name": "Nidorina"
    },
            {
                "generation_number": 1,
                "id": 31,
                "name": "Nidoqueen"
    },
            {
                "generation_number": 1,
                "id": 32,
                "name": "Nidoran\u2642"
    },
            {
                "generation_number": 1,
                "id": 33,
                "name": "Nidorino"
    },
            {
                "generation_number": 1,
                "id": 34,
                "name": "Nidoking"
    },
            {
                "generation_number": 1,
                "id": 35,
                "name": "Clefairy"
    },
            {
                "generation_number": 1,
                "id": 36,
                "name": "Clefable"
    },
            {
                "generation_number": 1,
                "id": 37,
                "name": "Vulpix"
    },
            {
                "generation_number": 1,
                "id": 38,
                "name": "Ninetales"
    },
            {
                "generation_number": 1,
                "id": 39,
                "name": "Jigglypuff"
    },
            {
                "generation_number": 1,
                "id": 40,
                "name": "Wigglytuff"
    },
            {
                "generation_number": 1,
                "id": 41,
                "name": "Zubat"
    },
            {
                "generation_number": 1,
                "id": 42,
                "name": "Golbat"
    },
            {
                "generation_number": 1,
                "id": 43,
                "name": "Oddish"
    },
            {
                "generation_number": 1,
                "id": 44,
                "name": "Gloom"
    },
            {
                "generation_number": 1,
                "id": 45,
                "name": "Vileplume"
    },
            {
                "generation_number": 1,
                "id": 46,
                "name": "Paras"
    },
            {
                "generation_number": 1,
                "id": 47,
                "name": "Parasect"
    },
            {
                "generation_number": 1,
                "id": 48,
                "name": "Venonat"
    },
            {
                "generation_number": 1,
                "id": 49,
                "name": "Venomoth"
    },
            {
                "generation_number": 1,
                "id": 50,
                "name": "Diglett"
    },
            {
                "generation_number": 1,
                "id": 51,
                "name": "Dugtrio"
    },
            {
                "generation_number": 1,
                "id": 52,
                "name": "Meowth"
    },
            {
                "generation_number": 1,
                "id": 53,
                "name": "Persian"
    },
            {
                "generation_number": 1,
                "id": 54,
                "name": "Psyduck"
    },
            {
                "generation_number": 1,
                "id": 55,
                "name": "Golduck"
    },
            {
                "generation_number": 1,
                "id": 56,
                "name": "Mankey"
    },
            {
                "generation_number": 1,
                "id": 57,
                "name": "Primeape"
    },
            {
                "generation_number": 1,
                "id": 58,
                "name": "Growlithe"
    },
            {
                "generation_number": 1,
                "id": 59,
                "name": "Arcanine"
    },
            {
                "generation_number": 1,
                "id": 60,
                "name": "Poliwag"
    },
            {
                "generation_number": 1,
                "id": 61,
                "name": "Poliwhirl"
    },
            {
                "generation_number": 1,
                "id": 62,
                "name": "Poliwrath"
    },
            {
                "generation_number": 1,
                "id": 63,
                "name": "Abra"
    },
            {
                "generation_number": 1,
                "id": 64,
                "name": "Kadabra"
    },
            {
                "generation_number": 1,
                "id": 65,
                "name": "Alakazam"
    },
            {
                "generation_number": 1,
                "id": 66,
                "name": "Machop"
    },
            {
                "generation_number": 1,
                "id": 67,
                "name": "Machoke"
    },
            {
                "generation_number": 1,
                "id": 68,
                "name": "Machamp"
    },
            {
                "generation_number": 1,
                "id": 69,
                "name": "Bellsprout"
    },
            {
                "generation_number": 1,
                "id": 70,
                "name": "Weepinbell"
    },
            {
                "generation_number": 1,
                "id": 71,
                "name": "Victreebel"
    },
            {
                "generation_number": 1,
                "id": 72,
                "name": "Tentacool"
    },
            {
                "generation_number": 1,
                "id": 73,
                "name": "Tentacruel"
    },
            {
                "generation_number": 1,
                "id": 74,
                "name": "Geodude"
    },
            {
                "generation_number": 1,
                "id": 75,
                "name": "Graveler"
    },
            {
                "generation_number": 1,
                "id": 76,
                "name": "Golem"
    },
            {
                "generation_number": 1,
                "id": 77,
                "name": "Ponyta"
    },
            {
                "generation_number": 1,
                "id": 78,
                "name": "Rapidash"
    },
            {
                "generation_number": 1,
                "id": 79,
                "name": "Slowpoke"
    },
            {
                "generation_number": 1,
                "id": 80,
                "name": "Slowbro"
    },
            {
                "generation_number": 1,
                "id": 81,
                "name": "Magnemite"
    },
            {
                "generation_number": 1,
                "id": 82,
                "name": "Magneton"
    },
            {
                "generation_number": 1,
                "id": 83,
                "name": "Farfetch\u2019d"
    },
            {
                "generation_number": 1,
                "id": 84,
                "name": "Doduo"
    },
            {
                "generation_number": 1,
                "id": 85,
                "name": "Dodrio"
    },
            {
                "generation_number": 1,
                "id": 86,
                "name": "Seel"
    },
            {
                "generation_number": 1,
                "id": 87,
                "name": "Dewgong"
    },
            {
                "generation_number": 1,
                "id": 88,
                "name": "Grimer"
    },
            {
                "generation_number": 1,
                "id": 89,
                "name": "Muk"
    },
            {
                "generation_number": 1,
                "id": 90,
                "name": "Shellder"
    },
            {
                "generation_number": 1,
                "id": 91,
                "name": "Cloyster"
    },
            {
                "generation_number": 1,
                "id": 92,
                "name": "Gastly"
    },
            {
                "generation_number": 1,
                "id": 93,
                "name": "Haunter"
    },
            {
                "generation_number": 1,
                "id": 94,
                "name": "Gengar"
    },
            {
                "generation_number": 1,
                "id": 95,
                "name": "Onix"
    },
            {
                "generation_number": 1,
                "id": 96,
                "name": "Drowzee"
    },
            {
                "generation_number": 1,
                "id": 97,
                "name": "Hypno"
    },
            {
                "generation_number": 1,
                "id": 98,
                "name": "Krabby"
    },
            {
                "generation_number": 1,
                "id": 99,
                "name": "Kingler"
    },
            {
                "generation_number": 1,
                "id": 100,
                "name": "Voltorb"
    },
            {
                "generation_number": 1,
                "id": 101,
                "name": "Electrode"
    },
            {
                "generation_number": 1,
                "id": 102,
                "name": "Exeggcute"
    },
            {
                "generation_number": 1,
                "id": 103,
                "name": "Exeggutor"
    },
            {
                "generation_number": 1,
                "id": 104,
                "name": "Cubone"
    },
            {
                "generation_number": 1,
                "id": 105,
                "name": "Marowak"
    },
            {
                "generation_number": 1,
                "id": 106,
                "name": "Hitmonlee"
    },
            {
                "generation_number": 1,
                "id": 107,
                "name": "Hitmonchan"
    },
            {
                "generation_number": 1,
                "id": 108,
                "name": "Lickitung"
    },
            {
                "generation_number": 1,
                "id": 109,
                "name": "Koffing"
    },
            {
                "generation_number": 1,
                "id": 110,
                "name": "Weezing"
    },
            {
                "generation_number": 1,
                "id": 111,
                "name": "Rhyhorn"
    },
            {
                "generation_number": 1,
                "id": 112,
                "name": "Rhydon"
    },
            {
                "generation_number": 1,
                "id": 113,
                "name": "Chansey"
    },
            {
                "generation_number": 1,
                "id": 114,
                "name": "Tangela"
    },
            {
                "generation_number": 1,
                "id": 115,
                "name": "Kangaskhan"
    },
            {
                "generation_number": 1,
                "id": 116,
                "name": "Horsea"
    },
            {
                "generation_number": 1,
                "id": 117,
                "name": "Seadra"
    },
            {
                "generation_number": 1,
                "id": 118,
                "name": "Goldeen"
    },
            {
                "generation_number": 1,
                "id": 119,
                "name": "Seaking"
    },
            {
                "generation_number": 1,
                "id": 120,
                "name": "Staryu"
    },
            {
                "generation_number": 1,
                "id": 121,
                "name": "Starmie"
    },
            {
                "generation_number": 1,
                "id": 122,
                "name": "Mr. Mime"
    },
            {
                "generation_number": 1,
                "id": 123,
                "name": "Scyther"
    },
            {
                "generation_number": 1,
                "id": 124,
                "name": "Jynx"
    },
            {
                "generation_number": 1,
                "id": 125,
                "name": "Electabuzz"
    },
            {
                "generation_number": 1,
                "id": 126,
                "name": "Magmar"
    },
            {
                "generation_number": 1,
                "id": 127,
                "name": "Pinsir"
    },
            {
                "generation_number": 1,
                "id": 128,
                "name": "Tauros"
    },
            {
                "generation_number": 1,
                "id": 129,
                "name": "Magikarp"
    },
            {
                "generation_number": 1,
                "id": 130,
                "name": "Gyarados"
    },
            {
                "generation_number": 1,
                "id": 131,
                "name": "Lapras"
    },
            {
                "generation_number": 1,
                "id": 132,
                "name": "Ditto"
    },
            {
                "generation_number": 1,
                "id": 133,
                "name": "Eevee"
    },
            {
                "generation_number": 1,
                "id": 134,
                "name": "Vaporeon"
    },
            {
                "generation_number": 1,
                "id": 135,
                "name": "Jolteon"
    },
            {
                "generation_number": 1,
                "id": 136,
                "name": "Flareon"
    },
            {
                "generation_number": 1,
                "id": 137,
                "name": "Porygon"
    },
            {
                "generation_number": 1,
                "id": 138,
                "name": "Omanyte"
    },
            {
                "generation_number": 1,
                "id": 139,
                "name": "Omastar"
    },
            {
                "generation_number": 1,
                "id": 140,
                "name": "Kabuto"
    },
            {
                "generation_number": 1,
                "id": 141,
                "name": "Kabutops"
    },
            {
                "generation_number": 1,
                "id": 142,
                "name": "Aerodactyl"
    },
            {
                "generation_number": 1,
                "id": 143,
                "name": "Snorlax"
    },
            {
                "generation_number": 1,
                "id": 144,
                "name": "Articuno"
    },
            {
                "generation_number": 1,
                "id": 145,
                "name": "Zapdos"
    },
            {
                "generation_number": 1,
                "id": 146,
                "name": "Moltres"
    },
            {
                "generation_number": 1,
                "id": 147,
                "name": "Dratini"
    },
            {
                "generation_number": 1,
                "id": 148,
                "name": "Dragonair"
    },
            {
                "generation_number": 1,
                "id": 149,
                "name": "Dragonite"
    },
            {
                "generation_number": 1,
                "id": 150,
                "name": "Mewtwo"
    },
            {
                "generation_number": 1,
                "id": 151,
                "name": "Mew"
    }
    ],
        "Generation 2": [
            {
                "generation_number": 2,
                "id": 152,
                "name": "Chikorita"
    },
            {
                "generation_number": 2,
                "id": 153,
                "name": "Bayleef"
    },
            {
                "generation_number": 2,
                "id": 154,
                "name": "Meganium"
    },
            {
                "generation_number": 2,
                "id": 155,
                "name": "Cyndaquil"
    },
            {
                "generation_number": 2,
                "id": 156,
                "name": "Quilava"
    },
            {
                "generation_number": 2,
                "id": 157,
                "name": "Typhlosion"
    },
            {
                "generation_number": 2,
                "id": 158,
                "name": "Totodile"
    },
            {
                "generation_number": 2,
                "id": 159,
                "name": "Croconaw"
    },
            {
                "generation_number": 2,
                "id": 160,
                "name": "Feraligatr"
    },
            {
                "generation_number": 2,
                "id": 161,
                "name": "Sentret"
    },
            {
                "generation_number": 2,
                "id": 162,
                "name": "Furret"
    },
            {
                "generation_number": 2,
                "id": 163,
                "name": "Hoothoot"
    },
            {
                "generation_number": 2,
                "id": 164,
                "name": "Noctowl"
    },
            {
                "generation_number": 2,
                "id": 165,
                "name": "Ledyba"
    },
            {
                "generation_number": 2,
                "id": 166,
                "name": "Ledian"
    },
            {
                "generation_number": 2,
                "id": 167,
                "name": "Spinarak"
    },
            {
                "generation_number": 2,
                "id": 168,
                "name": "Ariados"
    },
            {
                "generation_number": 2,
                "id": 169,
                "name": "Crobat"
    },
            {
                "generation_number": 2,
                "id": 170,
                "name": "Chinchou"
    },
            {
                "generation_number": 2,
                "id": 171,
                "name": "Lanturn"
    },
            {
                "generation_number": 2,
                "id": 172,
                "name": "Pichu"
    },
            {
                "generation_number": 2,
                "id": 173,
                "name": "Cleffa"
    },
            {
                "generation_number": 2,
                "id": 174,
                "name": "Igglybuff"
    },
            {
                "generation_number": 2,
                "id": 175,
                "name": "Togepi"
    },
            {
                "generation_number": 2,
                "id": 176,
                "name": "Togetic"
    },
            {
                "generation_number": 2,
                "id": 177,
                "name": "Natu"
    },
            {
                "generation_number": 2,
                "id": 178,
                "name": "Xatu"
    },
            {
                "generation_number": 2,
                "id": 179,
                "name": "Mareep"
    },
            {
                "generation_number": 2,
                "id": 180,
                "name": "Flaaffy"
    },
            {
                "generation_number": 2,
                "id": 181,
                "name": "Ampharos"
    },
            {
                "generation_number": 2,
                "id": 182,
                "name": "Bellossom"
    },
            {
                "generation_number": 2,
                "id": 183,
                "name": "Marill"
    },
            {
                "generation_number": 2,
                "id": 184,
                "name": "Azumarill"
    },
            {
                "generation_number": 2,
                "id": 185,
                "name": "Sudowoodo"
    },
            {
                "generation_number": 2,
                "id": 186,
                "name": "Politoed"
    },
            {
                "generation_number": 2,
                "id": 187,
                "name": "Hoppip"
    },
            {
                "generation_number": 2,
                "id": 188,
                "name": "Skiploom"
    },
            {
                "generation_number": 2,
                "id": 189,
                "name": "Jumpluff"
    },
            {
                "generation_number": 2,
                "id": 190,
                "name": "Aipom"
    },
            {
                "generation_number": 2,
                "id": 191,
                "name": "Sunkern"
    },
            {
                "generation_number": 2,
                "id": 192,
                "name": "Sunflora"
    },
            {
                "generation_number": 2,
                "id": 193,
                "name": "Yanma"
    },
            {
                "generation_number": 2,
                "id": 194,
                "name": "Wooper"
    },
            {
                "generation_number": 2,
                "id": 195,
                "name": "Quagsire"
    },
            {
                "generation_number": 2,
                "id": 196,
                "name": "Espeon"
    },
            {
                "generation_number": 2,
                "id": 197,
                "name": "Umbreon"
    },
            {
                "generation_number": 2,
                "id": 198,
                "name": "Murkrow"
    },
            {
                "generation_number": 2,
                "id": 199,
                "name": "Slowking"
    },
            {
                "generation_number": 2,
                "id": 200,
                "name": "Misdreavus"
    },
            {
                "generation_number": 2,
                "id": 201,
                "name": "Unown"
    },
            {
                "generation_number": 2,
                "id": 202,
                "name": "Wobbuffet"
    },
            {
                "generation_number": 2,
                "id": 203,
                "name": "Girafarig"
    },
            {
                "generation_number": 2,
                "id": 204,
                "name": "Pineco"
    },
            {
                "generation_number": 2,
                "id": 205,
                "name": "Forretress"
    },
            {
                "generation_number": 2,
                "id": 206,
                "name": "Dunsparce"
    },
            {
                "generation_number": 2,
                "id": 207,
                "name": "Gligar"
    },
            {
                "generation_number": 2,
                "id": 208,
                "name": "Steelix"
    },
            {
                "generation_number": 2,
                "id": 209,
                "name": "Snubbull"
    },
            {
                "generation_number": 2,
                "id": 210,
                "name": "Granbull"
    },
            {
                "generation_number": 2,
                "id": 211,
                "name": "Qwilfish"
    },
            {
                "generation_number": 2,
                "id": 212,
                "name": "Scizor"
    },
            {
                "generation_number": 2,
                "id": 213,
                "name": "Shuckle"
    },
            {
                "generation_number": 2,
                "id": 214,
                "name": "Heracross"
    },
            {
                "generation_number": 2,
                "id": 215,
                "name": "Sneasel"
    },
            {
                "generation_number": 2,
                "id": 216,
                "name": "Teddiursa"
    },
            {
                "generation_number": 2,
                "id": 217,
                "name": "Ursaring"
    },
            {
                "generation_number": 2,
                "id": 218,
                "name": "Slugma"
    },
            {
                "generation_number": 2,
                "id": 219,
                "name": "Magcargo"
    },
            {
                "generation_number": 2,
                "id": 220,
                "name": "Swinub"
    },
            {
                "generation_number": 2,
                "id": 221,
                "name": "Piloswine"
    },
            {
                "generation_number": 2,
                "id": 222,
                "name": "Corsola"
    },
            {
                "generation_number": 2,
                "id": 223,
                "name": "Remoraid"
    },
            {
                "generation_number": 2,
                "id": 224,
                "name": "Octillery"
    },
            {
                "generation_number": 2,
                "id": 225,
                "name": "Delibird"
    },
            {
                "generation_number": 2,
                "id": 226,
                "name": "Mantine"
    },
            {
                "generation_number": 2,
                "id": 227,
                "name": "Skarmory"
    },
            {
                "generation_number": 2,
                "id": 228,
                "name": "Houndour"
    },
            {
                "generation_number": 2,
                "id": 229,
                "name": "Houndoom"
    },
            {
                "generation_number": 2,
                "id": 230,
                "name": "Kingdra"
    },
            {
                "generation_number": 2,
                "id": 231,
                "name": "Phanpy"
    },
            {
                "generation_number": 2,
                "id": 232,
                "name": "Donphan"
    },
            {
                "generation_number": 2,
                "id": 233,
                "name": "Porygon2"
    },
            {
                "generation_number": 2,
                "id": 234,
                "name": "Stantler"
    },
            {
                "generation_number": 2,
                "id": 235,
                "name": "Smeargle"
    },
            {
                "generation_number": 2,
                "id": 236,
                "name": "Tyrogue"
    },
            {
                "generation_number": 2,
                "id": 237,
                "name": "Hitmontop"
    },
            {
                "generation_number": 2,
                "id": 238,
                "name": "Smoochum"
    },
            {
                "generation_number": 2,
                "id": 239,
                "name": "Elekid"
    },
            {
                "generation_number": 2,
                "id": 240,
                "name": "Magby"
    },
            {
                "generation_number": 2,
                "id": 241,
                "name": "Miltank"
    },
            {
                "generation_number": 2,
                "id": 242,
                "name": "Blissey"
    },
            {
                "generation_number": 2,
                "id": 243,
                "name": "Raikou"
    },
            {
                "generation_number": 2,
                "id": 244,
                "name": "Entei"
    },
            {
                "generation_number": 2,
                "id": 245,
                "name": "Suicune"
    },
            {
                "generation_number": 2,
                "id": 246,
                "name": "Larvitar"
    },
            {
                "generation_number": 2,
                "id": 247,
                "name": "Pupitar"
    },
            {
                "generation_number": 2,
                "id": 248,
                "name": "Tyranitar"
    },
            {
                "generation_number": 2,
                "id": 249,
                "name": "Lugia"
    },
            {
                "generation_number": 2,
                "id": 250,
                "name": "Ho-Oh"
    },
            {
                "generation_number": 2,
                "id": 251,
                "name": "Celebi"
    }
    ],
        "Generation 3": [
            {
                "generation_number": 3,
                "id": 252,
                "name": "Treecko"
    },
            {
                "generation_number": 3,
                "id": 253,
                "name": "Grovyle"
    },
            {
                "generation_number": 3,
                "id": 254,
                "name": "Sceptile"
    },
            {
                "generation_number": 3,
                "id": 255,
                "name": "Torchic"
    },
            {
                "generation_number": 3,
                "id": 256,
                "name": "Combusken"
    },
            {
                "generation_number": 3,
                "id": 257,
                "name": "Blaziken"
    },
            {
                "generation_number": 3,
                "id": 258,
                "name": "Mudkip"
    },
            {
                "generation_number": 3,
                "id": 259,
                "name": "Marshtomp"
    },
            {
                "generation_number": 3,
                "id": 260,
                "name": "Swampert"
    },
            {
                "generation_number": 3,
                "id": 261,
                "name": "Poochyena"
    },
            {
                "generation_number": 3,
                "id": 262,
                "name": "Mightyena"
    },
            {
                "generation_number": 3,
                "id": 263,
                "name": "Zigzagoon"
    },
            {
                "generation_number": 3,
                "id": 264,
                "name": "Linoone"
    },
            {
                "generation_number": 3,
                "id": 265,
                "name": "Wurmple"
    },
            {
                "generation_number": 3,
                "id": 266,
                "name": "Silcoon"
    },
            {
                "generation_number": 3,
                "id": 267,
                "name": "Beautifly"
    },
            {
                "generation_number": 3,
                "id": 268,
                "name": "Cascoon"
    },
            {
                "generation_number": 3,
                "id": 269,
                "name": "Dustox"
    },
            {
                "generation_number": 3,
                "id": 270,
                "name": "Lotad"
    },
            {
                "generation_number": 3,
                "id": 271,
                "name": "Lombre"
    },
            {
                "generation_number": 3,
                "id": 272,
                "name": "Ludicolo"
    },
            {
                "generation_number": 3,
                "id": 273,
                "name": "Seedot"
    },
            {
                "generation_number": 3,
                "id": 274,
                "name": "Nuzleaf"
    },
            {
                "generation_number": 3,
                "id": 275,
                "name": "Shiftry"
    },
            {
                "generation_number": 3,
                "id": 276,
                "name": "Taillow"
    },
            {
                "generation_number": 3,
                "id": 277,
                "name": "Swellow"
    },
            {
                "generation_number": 3,
                "id": 278,
                "name": "Wingull"
    },
            {
                "generation_number": 3,
                "id": 279,
                "name": "Pelipper"
    },
            {
                "generation_number": 3,
                "id": 280,
                "name": "Ralts"
    },
            {
                "generation_number": 3,
                "id": 281,
                "name": "Kirlia"
    },
            {
                "generation_number": 3,
                "id": 282,
                "name": "Gardevoir"
    },
            {
                "generation_number": 3,
                "id": 283,
                "name": "Surskit"
    },
            {
                "generation_number": 3,
                "id": 284,
                "name": "Masquerain"
    },
            {
                "generation_number": 3,
                "id": 285,
                "name": "Shroomish"
    },
            {
                "generation_number": 3,
                "id": 286,
                "name": "Breloom"
    },
            {
                "generation_number": 3,
                "id": 287,
                "name": "Slakoth"
    },
            {
                "generation_number": 3,
                "id": 288,
                "name": "Vigoroth"
    },
            {
                "generation_number": 3,
                "id": 289,
                "name": "Slaking"
    },
            {
                "generation_number": 3,
                "id": 290,
                "name": "Nincada"
    },
            {
                "generation_number": 3,
                "id": 291,
                "name": "Ninjask"
    },
            {
                "generation_number": 3,
                "id": 292,
                "name": "Shedinja"
    },
            {
                "generation_number": 3,
                "id": 293,
                "name": "Whismur"
    },
            {
                "generation_number": 3,
                "id": 294,
                "name": "Loudred"
    },
            {
                "generation_number": 3,
                "id": 295,
                "name": "Exploud"
    },
            {
                "generation_number": 3,
                "id": 296,
                "name": "Makuhita"
    },
            {
                "generation_number": 3,
                "id": 297,
                "name": "Hariyama"
    },
            {
                "generation_number": 3,
                "id": 298,
                "name": "Azurill"
    },
            {
                "generation_number": 3,
                "id": 299,
                "name": "Nosepass"
    },
            {
                "generation_number": 3,
                "id": 300,
                "name": "Skitty"
    },
            {
                "generation_number": 3,
                "id": 301,
                "name": "Delcatty"
    },
            {
                "generation_number": 3,
                "id": 302,
                "name": "Sableye"
    },
            {
                "generation_number": 3,
                "id": 303,
                "name": "Mawile"
    },
            {
                "generation_number": 3,
                "id": 304,
                "name": "Aron"
    },
            {
                "generation_number": 3,
                "id": 305,
                "name": "Lairon"
    },
            {
                "generation_number": 3,
                "id": 306,
                "name": "Aggron"
    },
            {
                "generation_number": 3,
                "id": 307,
                "name": "Meditite"
    },
            {
                "generation_number": 3,
                "id": 308,
                "name": "Medicham"
    },
            {
                "generation_number": 3,
                "id": 309,
                "name": "Electrike"
    },
            {
                "generation_number": 3,
                "id": 310,
                "name": "Manectric"
    },
            {
                "generation_number": 3,
                "id": 311,
                "name": "Plusle"
    },
            {
                "generation_number": 3,
                "id": 312,
                "name": "Minun"
    },
            {
                "generation_number": 3,
                "id": 313,
                "name": "Volbeat"
    },
            {
                "generation_number": 3,
                "id": 314,
                "name": "Illumise"
    },
            {
                "generation_number": 3,
                "id": 315,
                "name": "Roselia"
    },
            {
                "generation_number": 3,
                "id": 316,
                "name": "Gulpin"
    },
            {
                "generation_number": 3,
                "id": 317,
                "name": "Swalot"
    },
            {
                "generation_number": 3,
                "id": 318,
                "name": "Carvanha"
    },
            {
                "generation_number": 3,
                "id": 319,
                "name": "Sharpedo"
    },
            {
                "generation_number": 3,
                "id": 320,
                "name": "Wailmer"
    },
            {
                "generation_number": 3,
                "id": 321,
                "name": "Wailord"
    },
            {
                "generation_number": 3,
                "id": 322,
                "name": "Numel"
    },
            {
                "generation_number": 3,
                "id": 323,
                "name": "Camerupt"
    },
            {
                "generation_number": 3,
                "id": 324,
                "name": "Torkoal"
    },
            {
                "generation_number": 3,
                "id": 325,
                "name": "Spoink"
    },
            {
                "generation_number": 3,
                "id": 326,
                "name": "Grumpig"
    },
            {
                "generation_number": 3,
                "id": 327,
                "name": "Spinda"
    },
            {
                "generation_number": 3,
                "id": 328,
                "name": "Trapinch"
    },
            {
                "generation_number": 3,
                "id": 329,
                "name": "Vibrava"
    },
            {
                "generation_number": 3,
                "id": 330,
                "name": "Flygon"
    },
            {
                "generation_number": 3,
                "id": 331,
                "name": "Cacnea"
    },
            {
                "generation_number": 3,
                "id": 332,
                "name": "Cacturne"
    },
            {
                "generation_number": 3,
                "id": 333,
                "name": "Swablu"
    },
            {
                "generation_number": 3,
                "id": 334,
                "name": "Altaria"
    },
            {
                "generation_number": 3,
                "id": 335,
                "name": "Zangoose"
    },
            {
                "generation_number": 3,
                "id": 336,
                "name": "Seviper"
    },
            {
                "generation_number": 3,
                "id": 337,
                "name": "Lunatone"
    },
            {
                "generation_number": 3,
                "id": 338,
                "name": "Solrock"
    },
            {
                "generation_number": 3,
                "id": 339,
                "name": "Barboach"
    },
            {
                "generation_number": 3,
                "id": 340,
                "name": "Whiscash"
    },
            {
                "generation_number": 3,
                "id": 341,
                "name": "Corphish"
    },
            {
                "generation_number": 3,
                "id": 342,
                "name": "Crawdaunt"
    },
            {
                "generation_number": 3,
                "id": 343,
                "name": "Baltoy"
    },
            {
                "generation_number": 3,
                "id": 344,
                "name": "Claydol"
    },
            {
                "generation_number": 3,
                "id": 345,
                "name": "Lileep"
    },
            {
                "generation_number": 3,
                "id": 346,
                "name": "Cradily"
    },
            {
                "generation_number": 3,
                "id": 347,
                "name": "Anorith"
    },
            {
                "generation_number": 3,
                "id": 348,
                "name": "Armaldo"
    },
            {
                "generation_number": 3,
                "id": 349,
                "name": "Feebas"
    },
            {
                "generation_number": 3,
                "id": 350,
                "name": "Milotic"
    },
            {
                "generation_number": 3,
                "id": 351,
                "name": "Castform"
    },
            {
                "generation_number": 3,
                "id": 352,
                "name": "Kecleon"
    },
            {
                "generation_number": 3,
                "id": 353,
                "name": "Shuppet"
    },
            {
                "generation_number": 3,
                "id": 354,
                "name": "Banette"
    },
            {
                "generation_number": 3,
                "id": 355,
                "name": "Duskull"
    },
            {
                "generation_number": 3,
                "id": 356,
                "name": "Dusclops"
    },
            {
                "generation_number": 3,
                "id": 357,
                "name": "Tropius"
    },
            {
                "generation_number": 3,
                "id": 358,
                "name": "Chimecho"
    },
            {
                "generation_number": 3,
                "id": 359,
                "name": "Absol"
    },
            {
                "generation_number": 3,
                "id": 360,
                "name": "Wynaut"
    },
            {
                "generation_number": 3,
                "id": 361,
                "name": "Snorunt"
    },
            {
                "generation_number": 3,
                "id": 362,
                "name": "Glalie"
    },
            {
                "generation_number": 3,
                "id": 363,
                "name": "Spheal"
    },
            {
                "generation_number": 3,
                "id": 364,
                "name": "Sealeo"
    },
            {
                "generation_number": 3,
                "id": 365,
                "name": "Walrein"
    },
            {
                "generation_number": 3,
                "id": 366,
                "name": "Clamperl"
    },
            {
                "generation_number": 3,
                "id": 367,
                "name": "Huntail"
    },
            {
                "generation_number": 3,
                "id": 368,
                "name": "Gorebyss"
    },
            {
                "generation_number": 3,
                "id": 369,
                "name": "Relicanth"
    },
            {
                "generation_number": 3,
                "id": 370,
                "name": "Luvdisc"
    },
            {
                "generation_number": 3,
                "id": 371,
                "name": "Bagon"
    },
            {
                "generation_number": 3,
                "id": 372,
                "name": "Shelgon"
    },
            {
                "generation_number": 3,
                "id": 373,
                "name": "Salamence"
    },
            {
                "generation_number": 3,
                "id": 374,
                "name": "Beldum"
    },
            {
                "generation_number": 3,
                "id": 375,
                "name": "Metang"
    },
            {
                "generation_number": 3,
                "id": 376,
                "name": "Metagross"
    },
            {
                "generation_number": 3,
                "id": 377,
                "name": "Regirock"
    },
            {
                "generation_number": 3,
                "id": 378,
                "name": "Regice"
    },
            {
                "generation_number": 3,
                "id": 379,
                "name": "Registeel"
    },
            {
                "generation_number": 3,
                "id": 380,
                "name": "Latias"
    },
            {
                "generation_number": 3,
                "id": 381,
                "name": "Latios"
    },
            {
                "generation_number": 3,
                "id": 382,
                "name": "Kyogre"
    },
            {
                "generation_number": 3,
                "id": 383,
                "name": "Groudon"
    },
            {
                "generation_number": 3,
                "id": 384,
                "name": "Rayquaza"
    },
            {
                "generation_number": 3,
                "id": 385,
                "name": "Jirachi"
    },
            {
                "generation_number": 3,
                "id": 386,
                "name": "Deoxys"
    }
    ],
        "Generation 4": [
            {
                "generation_number": 4,
                "id": 387,
                "name": "Turtwig"
    },
            {
                "generation_number": 4,
                "id": 388,
                "name": "Grotle"
    },
            {
                "generation_number": 4,
                "id": 389,
                "name": "Torterra"
    },
            {
                "generation_number": 4,
                "id": 390,
                "name": "Chimchar"
    },
            {
                "generation_number": 4,
                "id": 391,
                "name": "Monferno"
    },
            {
                "generation_number": 4,
                "id": 392,
                "name": "Infernape"
    },
            {
                "generation_number": 4,
                "id": 393,
                "name": "Piplup"
    },
            {
                "generation_number": 4,
                "id": 394,
                "name": "Prinplup"
    },
            {
                "generation_number": 4,
                "id": 395,
                "name": "Empoleon"
    },
            {
                "generation_number": 4,
                "id": 396,
                "name": "Starly"
    },
            {
                "generation_number": 4,
                "id": 397,
                "name": "Staravia"
    },
            {
                "generation_number": 4,
                "id": 398,
                "name": "Staraptor"
    },
            {
                "generation_number": 4,
                "id": 399,
                "name": "Bidoof"
    },
            {
                "generation_number": 4,
                "id": 400,
                "name": "Bibarel"
    },
            {
                "generation_number": 4,
                "id": 401,
                "name": "Kricketot"
    },
            {
                "generation_number": 4,
                "id": 402,
                "name": "Kricketune"
    },
            {
                "generation_number": 4,
                "id": 403,
                "name": "Shinx"
    },
            {
                "generation_number": 4,
                "id": 404,
                "name": "Luxio"
    },
            {
                "generation_number": 4,
                "id": 405,
                "name": "Luxray"
    },
            {
                "generation_number": 4,
                "id": 406,
                "name": "Budew"
    },
            {
                "generation_number": 4,
                "id": 407,
                "name": "Roserade"
    },
            {
                "generation_number": 4,
                "id": 408,
                "name": "Cranidos"
    },
            {
                "generation_number": 4,
                "id": 409,
                "name": "Rampardos"
    },
            {
                "generation_number": 4,
                "id": 410,
                "name": "Shieldon"
    },
            {
                "generation_number": 4,
                "id": 411,
                "name": "Bastiodon"
    },
            {
                "generation_number": 4,
                "id": 412,
                "name": "Burmy"
    },
            {
                "generation_number": 4,
                "id": 413,
                "name": "Wormadam"
    },
            {
                "generation_number": 4,
                "id": 414,
                "name": "Mothim"
    },
            {
                "generation_number": 4,
                "id": 415,
                "name": "Combee"
    },
            {
                "generation_number": 4,
                "id": 416,
                "name": "Vespiquen"
    },
            {
                "generation_number": 4,
                "id": 417,
                "name": "Pachirisu"
    },
            {
                "generation_number": 4,
                "id": 418,
                "name": "Buizel"
    },
            {
                "generation_number": 4,
                "id": 419,
                "name": "Floatzel"
    },
            {
                "generation_number": 4,
                "id": 420,
                "name": "Cherubi"
    },
            {
                "generation_number": 4,
                "id": 421,
                "name": "Cherrim"
    },
            {
                "generation_number": 4,
                "id": 422,
                "name": "Shellos"
    },
            {
                "generation_number": 4,
                "id": 423,
                "name": "Gastrodon"
    },
            {
                "generation_number": 4,
                "id": 424,
                "name": "Ambipom"
    },
            {
                "generation_number": 4,
                "id": 425,
                "name": "Drifloon"
    },
            {
                "generation_number": 4,
                "id": 426,
                "name": "Drifblim"
    },
            {
                "generation_number": 4,
                "id": 427,
                "name": "Buneary"
    },
            {
                "generation_number": 4,
                "id": 428,
                "name": "Lopunny"
    },
            {
                "generation_number": 4,
                "id": 429,
                "name": "Mismagius"
    },
            {
                "generation_number": 4,
                "id": 430,
                "name": "Honchkrow"
    },
            {
                "generation_number": 4,
                "id": 431,
                "name": "Glameow"
    },
            {
                "generation_number": 4,
                "id": 432,
                "name": "Purugly"
    },
            {
                "generation_number": 4,
                "id": 433,
                "name": "Chingling"
    },
            {
                "generation_number": 4,
                "id": 434,
                "name": "Stunky"
    },
            {
                "generation_number": 4,
                "id": 435,
                "name": "Skuntank"
    },
            {
                "generation_number": 4,
                "id": 436,
                "name": "Bronzor"
    },
            {
                "generation_number": 4,
                "id": 437,
                "name": "Bronzong"
    },
            {
                "generation_number": 4,
                "id": 438,
                "name": "Bonsly"
    },
            {
                "generation_number": 4,
                "id": 439,
                "name": "Mime Jr."
    },
            {
                "generation_number": 4,
                "id": 440,
                "name": "Happiny"
    },
            {
                "generation_number": 4,
                "id": 441,
                "name": "Chatot"
    },
            {
                "generation_number": 4,
                "id": 442,
                "name": "Spiritomb"
    },
            {
                "generation_number": 4,
                "id": 443,
                "name": "Gible"
    },
            {
                "generation_number": 4,
                "id": 444,
                "name": "Gabite"
    },
            {
                "generation_number": 4,
                "id": 445,
                "name": "Garchomp"
    },
            {
                "generation_number": 4,
                "id": 446,
                "name": "Munchlax"
    },
            {
                "generation_number": 4,
                "id": 447,
                "name": "Riolu"
    },
            {
                "generation_number": 4,
                "id": 448,
                "name": "Lucario"
    },
            {
                "generation_number": 4,
                "id": 449,
                "name": "Hippopotas"
    },
            {
                "generation_number": 4,
                "id": 450,
                "name": "Hippowdon"
    },
            {
                "generation_number": 4,
                "id": 451,
                "name": "Skorupi"
    },
            {
                "generation_number": 4,
                "id": 452,
                "name": "Drapion"
    },
            {
                "generation_number": 4,
                "id": 453,
                "name": "Croagunk"
    },
            {
                "generation_number": 4,
                "id": 454,
                "name": "Toxicroak"
    },
            {
                "generation_number": 4,
                "id": 455,
                "name": "Carnivine"
    },
            {
                "generation_number": 4,
                "id": 456,
                "name": "Finneon"
    },
            {
                "generation_number": 4,
                "id": 457,
                "name": "Lumineon"
    },
            {
                "generation_number": 4,
                "id": 458,
                "name": "Mantyke"
    },
            {
                "generation_number": 4,
                "id": 459,
                "name": "Snover"
    },
            {
                "generation_number": 4,
                "id": 460,
                "name": "Abomasnow"
    },
            {
                "generation_number": 4,
                "id": 461,
                "name": "Weavile"
    },
            {
                "generation_number": 4,
                "id": 462,
                "name": "Magnezone"
    },
            {
                "generation_number": 4,
                "id": 463,
                "name": "Lickilicky"
    },
            {
                "generation_number": 4,
                "id": 464,
                "name": "Rhyperior"
    },
            {
                "generation_number": 4,
                "id": 465,
                "name": "Tangrowth"
    },
            {
                "generation_number": 4,
                "id": 466,
                "name": "Electivire"
    },
            {
                "generation_number": 4,
                "id": 467,
                "name": "Magmortar"
    },
            {
                "generation_number": 4,
                "id": 468,
                "name": "Togekiss"
    },
            {
                "generation_number": 4,
                "id": 469,
                "name": "Yanmega"
    },
            {
                "generation_number": 4,
                "id": 470,
                "name": "Leafeon"
    },
            {
                "generation_number": 4,
                "id": 471,
                "name": "Glaceon"
    },
            {
                "generation_number": 4,
                "id": 472,
                "name": "Gliscor"
    },
            {
                "generation_number": 4,
                "id": 473,
                "name": "Mamoswine"
    },
            {
                "generation_number": 4,
                "id": 474,
                "name": "Porygon-Z"
    },
            {
                "generation_number": 4,
                "id": 475,
                "name": "Gallade"
    },
            {
                "generation_number": 4,
                "id": 476,
                "name": "Probopass"
    },
            {
                "generation_number": 4,
                "id": 477,
                "name": "Dusknoir"
    },
            {
                "generation_number": 4,
                "id": 478,
                "name": "Froslass"
    },
            {
                "generation_number": 4,
                "id": 479,
                "name": "Rotom"
    },
            {
                "generation_number": 4,
                "id": 480,
                "name": "Uxie"
    },
            {
                "generation_number": 4,
                "id": 481,
                "name": "Mesprit"
    },
            {
                "generation_number": 4,
                "id": 482,
                "name": "Azelf"
    },
            {
                "generation_number": 4,
                "id": 483,
                "name": "Dialga"
    },
            {
                "generation_number": 4,
                "id": 484,
                "name": "Palkia"
    },
            {
                "generation_number": 4,
                "id": 485,
                "name": "Heatran"
    },
            {
                "generation_number": 4,
                "id": 486,
                "name": "Regigigas"
    },
            {
                "generation_number": 4,
                "id": 487,
                "name": "Giratina"
    },
            {
                "generation_number": 4,
                "id": 488,
                "name": "Cresselia"
    },
            {
                "generation_number": 4,
                "id": 489,
                "name": "Phione"
    },
            {
                "generation_number": 4,
                "id": 490,
                "name": "Manaphy"
    },
            {
                "generation_number": 4,
                "id": 491,
                "name": "Darkrai"
    },
            {
                "generation_number": 4,
                "id": 492,
                "name": "Shaymin"
    },
            {
                "generation_number": 4,
                "id": 493,
                "name": "Arceus"
    }
    ],
        "Generation 5": [
            {
                "generation_number": 5,
                "id": 494,
                "name": "Victini"
    },
            {
                "generation_number": 5,
                "id": 495,
                "name": "Snivy"
    },
            {
                "generation_number": 5,
                "id": 496,
                "name": "Servine"
    },
            {
                "generation_number": 5,
                "id": 497,
                "name": "Serperior"
    },
            {
                "generation_number": 5,
                "id": 498,
                "name": "Tepig"
    },
            {
                "generation_number": 5,
                "id": 499,
                "name": "Pignite"
    },
            {
                "generation_number": 5,
                "id": 500,
                "name": "Emboar"
    },
            {
                "generation_number": 5,
                "id": 501,
                "name": "Oshawott"
    },
            {
                "generation_number": 5,
                "id": 502,
                "name": "Dewott"
    },
            {
                "generation_number": 5,
                "id": 503,
                "name": "Samurott"
    },
            {
                "generation_number": 5,
                "id": 504,
                "name": "Patrat"
    },
            {
                "generation_number": 5,
                "id": 505,
                "name": "Watchog"
    },
            {
                "generation_number": 5,
                "id": 506,
                "name": "Lillipup"
    },
            {
                "generation_number": 5,
                "id": 507,
                "name": "Herdier"
    },
            {
                "generation_number": 5,
                "id": 508,
                "name": "Stoutland"
    },
            {
                "generation_number": 5,
                "id": 509,
                "name": "Purrloin"
    },
            {
                "generation_number": 5,
                "id": 510,
                "name": "Liepard"
    },
            {
                "generation_number": 5,
                "id": 511,
                "name": "Pansage"
    },
            {
                "generation_number": 5,
                "id": 512,
                "name": "Simisage"
    },
            {
                "generation_number": 5,
                "id": 513,
                "name": "Pansear"
    },
            {
                "generation_number": 5,
                "id": 514,
                "name": "Simisear"
    },
            {
                "generation_number": 5,
                "id": 515,
                "name": "Panpour"
    },
            {
                "generation_number": 5,
                "id": 516,
                "name": "Simipour"
    },
            {
                "generation_number": 5,
                "id": 517,
                "name": "Munna"
    },
            {
                "generation_number": 5,
                "id": 518,
                "name": "Musharna"
    },
            {
                "generation_number": 5,
                "id": 519,
                "name": "Pidove"
    },
            {
                "generation_number": 5,
                "id": 520,
                "name": "Tranquill"
    },
            {
                "generation_number": 5,
                "id": 521,
                "name": "Unfezant"
    },
            {
                "generation_number": 5,
                "id": 522,
                "name": "Blitzle"
    },
            {
                "generation_number": 5,
                "id": 523,
                "name": "Zebstrika"
    },
            {
                "generation_number": 5,
                "id": 524,
                "name": "Roggenrola"
    },
            {
                "generation_number": 5,
                "id": 525,
                "name": "Boldore"
    },
            {
                "generation_number": 5,
                "id": 526,
                "name": "Gigalith"
    },
            {
                "generation_number": 5,
                "id": 527,
                "name": "Woobat"
    },
            {
                "generation_number": 5,
                "id": 528,
                "name": "Swoobat"
    },
            {
                "generation_number": 5,
                "id": 529,
                "name": "Drilbur"
    },
            {
                "generation_number": 5,
                "id": 530,
                "name": "Excadrill"
    },
            {
                "generation_number": 5,
                "id": 531,
                "name": "Audino"
    },
            {
                "generation_number": 5,
                "id": 532,
                "name": "Timburr"
    },
            {
                "generation_number": 5,
                "id": 533,
                "name": "Gurdurr"
    },
            {
                "generation_number": 5,
                "id": 534,
                "name": "Conkeldurr"
    },
            {
                "generation_number": 5,
                "id": 535,
                "name": "Tympole"
    },
            {
                "generation_number": 5,
                "id": 536,
                "name": "Palpitoad"
    },
            {
                "generation_number": 5,
                "id": 537,
                "name": "Seismitoad"
    },
            {
                "generation_number": 5,
                "id": 538,
                "name": "Throh"
    },
            {
                "generation_number": 5,
                "id": 539,
                "name": "Sawk"
    },
            {
                "generation_number": 5,
                "id": 540,
                "name": "Sewaddle"
    },
            {
                "generation_number": 5,
                "id": 541,
                "name": "Swadloon"
    },
            {
                "generation_number": 5,
                "id": 542,
                "name": "Leavanny"
    },
            {
                "generation_number": 5,
                "id": 543,
                "name": "Venipede"
    },
            {
                "generation_number": 5,
                "id": 544,
                "name": "Whirlipede"
    },
            {
                "generation_number": 5,
                "id": 545,
                "name": "Scolipede"
    },
            {
                "generation_number": 5,
                "id": 546,
                "name": "Cottonee"
    },
            {
                "generation_number": 5,
                "id": 547,
                "name": "Whimsicott"
    },
            {
                "generation_number": 5,
                "id": 548,
                "name": "Petilil"
    },
            {
                "generation_number": 5,
                "id": 549,
                "name": "Lilligant"
    },
            {
                "generation_number": 5,
                "id": 550,
                "name": "Basculin"
    },
            {
                "generation_number": 5,
                "id": 551,
                "name": "Sandile"
    },
            {
                "generation_number": 5,
                "id": 552,
                "name": "Krokorok"
    },
            {
                "generation_number": 5,
                "id": 553,
                "name": "Krookodile"
    },
            {
                "generation_number": 5,
                "id": 554,
                "name": "Darumaka"
    },
            {
                "generation_number": 5,
                "id": 555,
                "name": "Darmanitan"
    },
            {
                "generation_number": 5,
                "id": 556,
                "name": "Maractus"
    },
            {
                "generation_number": 5,
                "id": 557,
                "name": "Dwebble"
    },
            {
                "generation_number": 5,
                "id": 558,
                "name": "Crustle"
    },
            {
                "generation_number": 5,
                "id": 559,
                "name": "Scraggy"
    },
            {
                "generation_number": 5,
                "id": 560,
                "name": "Scrafty"
    },
            {
                "generation_number": 5,
                "id": 561,
                "name": "Sigilyph"
    },
            {
                "generation_number": 5,
                "id": 562,
                "name": "Yamask"
    },
            {
                "generation_number": 5,
                "id": 563,
                "name": "Cofagrigus"
    },
            {
                "generation_number": 5,
                "id": 564,
                "name": "Tirtouga"
    },
            {
                "generation_number": 5,
                "id": 565,
                "name": "Carracosta"
    },
            {
                "generation_number": 5,
                "id": 566,
                "name": "Archen"
    },
            {
                "generation_number": 5,
                "id": 567,
                "name": "Archeops"
    },
            {
                "generation_number": 5,
                "id": 568,
                "name": "Trubbish"
    },
            {
                "generation_number": 5,
                "id": 569,
                "name": "Garbodor"
    },
            {
                "generation_number": 5,
                "id": 570,
                "name": "Zorua"
    },
            {
                "generation_number": 5,
                "id": 571,
                "name": "Zoroark"
    },
            {
                "generation_number": 5,
                "id": 572,
                "name": "Minccino"
    },
            {
                "generation_number": 5,
                "id": 573,
                "name": "Cinccino"
    },
            {
                "generation_number": 5,
                "id": 574,
                "name": "Gothita"
    },
            {
                "generation_number": 5,
                "id": 575,
                "name": "Gothorita"
    },
            {
                "generation_number": 5,
                "id": 576,
                "name": "Gothitelle"
    },
            {
                "generation_number": 5,
                "id": 577,
                "name": "Solosis"
    },
            {
                "generation_number": 5,
                "id": 578,
                "name": "Duosion"
    },
            {
                "generation_number": 5,
                "id": 579,
                "name": "Reuniclus"
    },
            {
                "generation_number": 5,
                "id": 580,
                "name": "Ducklett"
    },
            {
                "generation_number": 5,
                "id": 581,
                "name": "Swanna"
    },
            {
                "generation_number": 5,
                "id": 582,
                "name": "Vanillite"
    },
            {
                "generation_number": 5,
                "id": 583,
                "name": "Vanillish"
    },
            {
                "generation_number": 5,
                "id": 584,
                "name": "Vanilluxe"
    },
            {
                "generation_number": 5,
                "id": 585,
                "name": "Deerling"
    },
            {
                "generation_number": 5,
                "id": 586,
                "name": "Sawsbuck"
    },
            {
                "generation_number": 5,
                "id": 587,
                "name": "Emolga"
    },
            {
                "generation_number": 5,
                "id": 588,
                "name": "Karrablast"
    },
            {
                "generation_number": 5,
                "id": 589,
                "name": "Escavalier"
    },
            {
                "generation_number": 5,
                "id": 590,
                "name": "Foongus"
    },
            {
                "generation_number": 5,
                "id": 591,
                "name": "Amoonguss"
    },
            {
                "generation_number": 5,
                "id": 592,
                "name": "Frillish"
    },
            {
                "generation_number": 5,
                "id": 593,
                "name": "Jellicent"
    },
            {
                "generation_number": 5,
                "id": 594,
                "name": "Alomomola"
    },
            {
                "generation_number": 5,
                "id": 595,
                "name": "Joltik"
    },
            {
                "generation_number": 5,
                "id": 596,
                "name": "Galvantula"
    },
            {
                "generation_number": 5,
                "id": 597,
                "name": "Ferroseed"
    },
            {
                "generation_number": 5,
                "id": 598,
                "name": "Ferrothorn"
    },
            {
                "generation_number": 5,
                "id": 599,
                "name": "Klink"
    },
            {
                "generation_number": 5,
                "id": 600,
                "name": "Klang"
    },
            {
                "generation_number": 5,
                "id": 601,
                "name": "Klinklang"
    },
            {
                "generation_number": 5,
                "id": 602,
                "name": "Tynamo"
    },
            {
                "generation_number": 5,
                "id": 603,
                "name": "Eelektrik"
    },
            {
                "generation_number": 5,
                "id": 604,
                "name": "Eelektross"
    },
            {
                "generation_number": 5,
                "id": 605,
                "name": "Elgyem"
    },
            {
                "generation_number": 5,
                "id": 606,
                "name": "Beheeyem"
    },
            {
                "generation_number": 5,
                "id": 607,
                "name": "Litwick"
    },
            {
                "generation_number": 5,
                "id": 608,
                "name": "Lampent"
    },
            {
                "generation_number": 5,
                "id": 609,
                "name": "Chandelure"
    },
            {
                "generation_number": 5,
                "id": 610,
                "name": "Axew"
    },
            {
                "generation_number": 5,
                "id": 611,
                "name": "Fraxure"
    },
            {
                "generation_number": 5,
                "id": 612,
                "name": "Haxorus"
    },
            {
                "generation_number": 5,
                "id": 613,
                "name": "Cubchoo"
    },
            {
                "generation_number": 5,
                "id": 614,
                "name": "Beartic"
    },
            {
                "generation_number": 5,
                "id": 615,
                "name": "Cryogonal"
    },
            {
                "generation_number": 5,
                "id": 616,
                "name": "Shelmet"
    },
            {
                "generation_number": 5,
                "id": 617,
                "name": "Accelgor"
    },
            {
                "generation_number": 5,
                "id": 618,
                "name": "Stunfisk"
    },
            {
                "generation_number": 5,
                "id": 619,
                "name": "Mienfoo"
    },
            {
                "generation_number": 5,
                "id": 620,
                "name": "Mienshao"
    },
            {
                "generation_number": 5,
                "id": 621,
                "name": "Druddigon"
    },
            {
                "generation_number": 5,
                "id": 622,
                "name": "Golett"
    },
            {
                "generation_number": 5,
                "id": 623,
                "name": "Golurk"
    },
            {
                "generation_number": 5,
                "id": 624,
                "name": "Pawniard"
    },
            {
                "generation_number": 5,
                "id": 625,
                "name": "Bisharp"
    },
            {
                "generation_number": 5,
                "id": 626,
                "name": "Bouffalant"
    },
            {
                "generation_number": 5,
                "id": 627,
                "name": "Rufflet"
    },
            {
                "generation_number": 5,
                "id": 628,
                "name": "Braviary"
    },
            {
                "generation_number": 5,
                "id": 629,
                "name": "Vullaby"
    },
            {
                "generation_number": 5,
                "id": 630,
                "name": "Mandibuzz"
    },
            {
                "generation_number": 5,
                "id": 631,
                "name": "Heatmor"
    },
            {
                "generation_number": 5,
                "id": 632,
                "name": "Durant"
    },
            {
                "generation_number": 5,
                "id": 633,
                "name": "Deino"
    },
            {
                "generation_number": 5,
                "id": 634,
                "name": "Zweilous"
    },
            {
                "generation_number": 5,
                "id": 635,
                "name": "Hydreigon"
    },
            {
                "generation_number": 5,
                "id": 636,
                "name": "Larvesta"
    },
            {
                "generation_number": 5,
                "id": 637,
                "name": "Volcarona"
    },
            {
                "generation_number": 5,
                "id": 638,
                "name": "Cobalion"
    },
            {
                "generation_number": 5,
                "id": 639,
                "name": "Terrakion"
    },
            {
                "generation_number": 5,
                "id": 640,
                "name": "Virizion"
    },
            {
                "generation_number": 5,
                "id": 641,
                "name": "Tornadus"
    },
            {
                "generation_number": 5,
                "id": 642,
                "name": "Thundurus"
    },
            {
                "generation_number": 5,
                "id": 643,
                "name": "Reshiram"
    },
            {
                "generation_number": 5,
                "id": 644,
                "name": "Zekrom"
    },
            {
                "generation_number": 5,
                "id": 645,
                "name": "Landorus"
    },
            {
                "generation_number": 5,
                "id": 646,
                "name": "Kyurem"
    },
            {
                "generation_number": 5,
                "id": 647,
                "name": "Keldeo"
    },
            {
                "generation_number": 5,
                "id": 648,
                "name": "Meloetta"
    },
            {
                "generation_number": 5,
                "id": 649,
                "name": "Genesect"
    }
    ],
        "Generation 6": [
            {
                "generation_number": 6,
                "id": 650,
                "name": "Chespin"
    },
            {
                "generation_number": 6,
                "id": 651,
                "name": "Quilladin"
    },
            {
                "generation_number": 6,
                "id": 652,
                "name": "Chesnaught"
    },
            {
                "generation_number": 6,
                "id": 653,
                "name": "Fennekin"
    },
            {
                "generation_number": 6,
                "id": 654,
                "name": "Braixen"
    },
            {
                "generation_number": 6,
                "id": 655,
                "name": "Delphox"
    },
            {
                "generation_number": 6,
                "id": 656,
                "name": "Froakie"
    },
            {
                "generation_number": 6,
                "id": 657,
                "name": "Frogadier"
    },
            {
                "generation_number": 6,
                "id": 658,
                "name": "Greninja"
    },
            {
                "generation_number": 6,
                "id": 659,
                "name": "Bunnelby"
    },
            {
                "generation_number": 6,
                "id": 660,
                "name": "Diggersby"
    },
            {
                "generation_number": 6,
                "id": 661,
                "name": "Fletchling"
    },
            {
                "generation_number": 6,
                "id": 662,
                "name": "Fletchinder"
    },
            {
                "generation_number": 6,
                "id": 663,
                "name": "Talonflame"
    },
            {
                "generation_number": 6,
                "id": 664,
                "name": "Scatterbug"
    },
            {
                "generation_number": 6,
                "id": 665,
                "name": "Spewpa"
    },
            {
                "generation_number": 6,
                "id": 666,
                "name": "Vivillon"
    },
            {
                "generation_number": 6,
                "id": 667,
                "name": "Litleo"
    },
            {
                "generation_number": 6,
                "id": 668,
                "name": "Pyroar"
    },
            {
                "generation_number": 6,
                "id": 669,
                "name": "Flabebe"
    },
            {
                "generation_number": 6,
                "id": 670,
                "name": "Floette"
    },
            {
                "generation_number": 6,
                "id": 671,
                "name": "Florges"
    },
            {
                "generation_number": 6,
                "id": 672,
                "name": "Skiddo"
    },
            {
                "generation_number": 6,
                "id": 673,
                "name": "Gogoat"
    },
            {
                "generation_number": 6,
                "id": 674,
                "name": "Pancham"
    },
            {
                "generation_number": 6,
                "id": 675,
                "name": "Pangoro"
    },
            {
                "generation_number": 6,
                "id": 676,
                "name": "Furfrou"
    },
            {
                "generation_number": 6,
                "id": 677,
                "name": "Espurr"
    },
            {
                "generation_number": 6,
                "id": 678,
                "name": "Meowstic"
    },
            {
                "generation_number": 6,
                "id": 679,
                "name": "Honedge"
    },
            {
                "generation_number": 6,
                "id": 680,
                "name": "Doublade"
    },
            {
                "generation_number": 6,
                "id": 681,
                "name": "Aegislash"
    },
            {
                "generation_number": 6,
                "id": 682,
                "name": "Spritzee"
    },
            {
                "generation_number": 6,
                "id": 683,
                "name": "Aromatisse"
    },
            {
                "generation_number": 6,
                "id": 684,
                "name": "Swirlix"
    },
            {
                "generation_number": 6,
                "id": 685,
                "name": "Slurpuff"
    },
            {
                "generation_number": 6,
                "id": 686,
                "name": "Inkay"
    },
            {
                "generation_number": 6,
                "id": 687,
                "name": "Malamar"
    },
            {
                "generation_number": 6,
                "id": 688,
                "name": "Binacle"
    },
            {
                "generation_number": 6,
                "id": 689,
                "name": "Barbaracle"
    },
            {
                "generation_number": 6,
                "id": 690,
                "name": "Skrelp"
    },
            {
                "generation_number": 6,
                "id": 691,
                "name": "Dragalge"
    },
            {
                "generation_number": 6,
                "id": 692,
                "name": "Clauncher"
    },
            {
                "generation_number": 6,
                "id": 693,
                "name": "Clawitzer"
    },
            {
                "generation_number": 6,
                "id": 694,
                "name": "Helioptile"
    },
            {
                "generation_number": 6,
                "id": 695,
                "name": "Heliolisk"
    },
            {
                "generation_number": 6,
                "id": 696,
                "name": "Tyrunt"
    },
            {
                "generation_number": 6,
                "id": 697,
                "name": "Tyrantrum"
    },
            {
                "generation_number": 6,
                "id": 698,
                "name": "Amaura"
    },
            {
                "generation_number": 6,
                "id": 699,
                "name": "Aurorus"
    },
            {
                "generation_number": 6,
                "id": 700,
                "name": "Sylveon"
    },
            {
                "generation_number": 6,
                "id": 701,
                "name": "Hawlucha"
    },
            {
                "generation_number": 6,
                "id": 702,
                "name": "Dedenne"
    },
            {
                "generation_number": 6,
                "id": 703,
                "name": "Carbink"
    },
            {
                "generation_number": 6,
                "id": 704,
                "name": "Goomy"
    },
            {
                "generation_number": 6,
                "id": 705,
                "name": "Sliggoo"
    },
            {
                "generation_number": 6,
                "id": 706,
                "name": "Goodra"
    },
            {
                "generation_number": 6,
                "id": 707,
                "name": "Klefki"
    },
            {
                "generation_number": 6,
                "id": 708,
                "name": "Phantump"
    },
            {
                "generation_number": 6,
                "id": 709,
                "name": "Trevenant"
    },
            {
                "generation_number": 6,
                "id": 710,
                "name": "Pumpkaboo"
    },
            {
                "generation_number": 6,
                "id": 711,
                "name": "Gourgeist"
    },
            {
                "generation_number": 6,
                "id": 712,
                "name": "Bergmite"
    },
            {
                "generation_number": 6,
                "id": 713,
                "name": "Avalugg"
    },
            {
                "generation_number": 6,
                "id": 714,
                "name": "Noibat"
    },
            {
                "generation_number": 6,
                "id": 715,
                "name": "Noivern"
    },
            {
                "generation_number": 6,
                "id": 716,
                "name": "Xerneas"
    },
            {
                "generation_number": 6,
                "id": 717,
                "name": "Yveltal"
    },
            {
                "generation_number": 6,
                "id": 718,
                "name": "Zygarde"
    },
            {
                "generation_number": 6,
                "id": 719,
                "name": "Diancie"
    },
            {
                "generation_number": 6,
                "id": 720,
                "name": "Hoopa"
    },
            {
                "generation_number": 6,
                "id": 721,
                "name": "Volcanion"
    }
    ],
        "Generation 7": [
            {
                "generation_number": 7,
                "id": 722,
                "name": "Rowlet"
    },
            {
                "generation_number": 7,
                "id": 723,
                "name": "Dartrix"
    },
            {
                "generation_number": 7,
                "id": 724,
                "name": "Decidueye"
    },
            {
                "generation_number": 7,
                "id": 725,
                "name": "Litten"
    },
            {
                "generation_number": 7,
                "id": 726,
                "name": "Torracat"
    },
            {
                "generation_number": 7,
                "id": 727,
                "name": "Incineroar"
    },
            {
                "generation_number": 7,
                "id": 728,
                "name": "Popplio"
    },
            {
                "generation_number": 7,
                "id": 729,
                "name": "Brionne"
    },
            {
                "generation_number": 7,
                "id": 730,
                "name": "Primarina"
    },
            {
                "generation_number": 7,
                "id": 731,
                "name": "Pikipek"
    },
            {
                "generation_number": 7,
                "id": 732,
                "name": "Trumbeak"
    },
            {
                "generation_number": 7,
                "id": 733,
                "name": "Toucannon"
    },
            {
                "generation_number": 7,
                "id": 734,
                "name": "Yungoos"
    },
            {
                "generation_number": 7,
                "id": 735,
                "name": "Gumshoos"
    },
            {
                "generation_number": 7,
                "id": 736,
                "name": "Grubbin"
    },
            {
                "generation_number": 7,
                "id": 737,
                "name": "Charjabug"
    },
            {
                "generation_number": 7,
                "id": 738,
                "name": "Vikavolt"
    },
            {
                "generation_number": 7,
                "id": 739,
                "name": "Crabrawler"
    },
            {
                "generation_number": 7,
                "id": 740,
                "name": "Crabominable"
    },
            {
                "generation_number": 7,
                "id": 741,
                "name": "Oricorio"
    },
            {
                "generation_number": 7,
                "id": 742,
                "name": "Cutiefly"
    },
            {
                "generation_number": 7,
                "id": 743,
                "name": "Ribombee"
    },
            {
                "generation_number": 7,
                "id": 744,
                "name": "Rockruff"
    },
            {
                "generation_number": 7,
                "id": 745,
                "name": "Lycanroc"
    },
            {
                "generation_number": 7,
                "id": 746,
                "name": "Wishiwashi"
    },
            {
                "generation_number": 7,
                "id": 747,
                "name": "Mareanie"
    },
            {
                "generation_number": 7,
                "id": 748,
                "name": "Toxapex"
    },
            {
                "generation_number": 7,
                "id": 749,
                "name": "Mudbray"
    },
            {
                "generation_number": 7,
                "id": 750,
                "name": "Mudsdale"
    },
            {
                "generation_number": 7,
                "id": 751,
                "name": "Dewpider"
    },
            {
                "generation_number": 7,
                "id": 752,
                "name": "Araquanid"
    },
            {
                "generation_number": 7,
                "id": 753,
                "name": "Fomantis"
    },
            {
                "generation_number": 7,
                "id": 754,
                "name": "Lurantis"
    },
            {
                "generation_number": 7,
                "id": 755,
                "name": "Morelull"
    },
            {
                "generation_number": 7,
                "id": 756,
                "name": "Shiinotic"
    },
            {
                "generation_number": 7,
                "id": 757,
                "name": "Salandit"
    },
            {
                "generation_number": 7,
                "id": 758,
                "name": "Salazzle"
    },
            {
                "generation_number": 7,
                "id": 759,
                "name": "Stufful"
    },
            {
                "generation_number": 7,
                "id": 760,
                "name": "Bewear"
    },
            {
                "generation_number": 7,
                "id": 761,
                "name": "Bounsweet"
    },
            {
                "generation_number": 7,
                "id": 762,
                "name": "Steenee"
    },
            {
                "generation_number": 7,
                "id": 763,
                "name": "Tsareena"
    },
            {
                "generation_number": 7,
                "id": 764,
                "name": "Comfey"
    },
            {
                "generation_number": 7,
                "id": 765,
                "name": "Oranguru"
    },
            {
                "generation_number": 7,
                "id": 766,
                "name": "Passimian"
    },
            {
                "generation_number": 7,
                "id": 767,
                "name": "Wimpod"
    },
            {
                "generation_number": 7,
                "id": 768,
                "name": "Golisopod"
    },
            {
                "generation_number": 7,
                "id": 769,
                "name": "Sandygast"
    },
            {
                "generation_number": 7,
                "id": 770,
                "name": "Palossand"
    },
            {
                "generation_number": 7,
                "id": 771,
                "name": "Pyukumuku"
    },
            {
                "generation_number": 7,
                "id": 772,
                "name": "Type: Null"
    },
            {
                "generation_number": 7,
                "id": 773,
                "name": "Silvally"
    },
            {
                "generation_number": 7,
                "id": 774,
                "name": "Minior"
    },
            {
                "generation_number": 7,
                "id": 775,
                "name": "Komala"
    },
            {
                "generation_number": 7,
                "id": 776,
                "name": "Turtonator"
    },
            {
                "generation_number": 7,
                "id": 777,
                "name": "Togedemaru"
    },
            {
                "generation_number": 7,
                "id": 778,
                "name": "Mimikyu"
    },
            {
                "generation_number": 7,
                "id": 779,
                "name": "Bruxish"
    },
            {
                "generation_number": 7,
                "id": 780,
                "name": "Drampa"
    },
            {
                "generation_number": 7,
                "id": 781,
                "name": "Dhelmise"
    },
            {
                "generation_number": 7,
                "id": 782,
                "name": "Jangmo-o"
    },
            {
                "generation_number": 7,
                "id": 783,
                "name": "Hakamo-o"
    },
            {
                "generation_number": 7,
                "id": 784,
                "name": "Kommo-o"
    },
            {
                "generation_number": 7,
                "id": 785,
                "name": "Tapu Koko"
    },
            {
                "generation_number": 7,
                "id": 786,
                "name": "Tapu Lele"
    },
            {
                "generation_number": 7,
                "id": 787,
                "name": "Tapu Bulu"
    },
            {
                "generation_number": 7,
                "id": 788,
                "name": "Tapu Fini"
    },
            {
                "generation_number": 7,
                "id": 789,
                "name": "Cosmog"
    },
            {
                "generation_number": 7,
                "id": 790,
                "name": "Cosmoem"
    },
            {
                "generation_number": 7,
                "id": 791,
                "name": "Solgaleo"
    },
            {
                "generation_number": 7,
                "id": 792,
                "name": "Lunala"
    },
            {
                "generation_number": 7,
                "id": 793,
                "name": "Nihilego"
    },
            {
                "generation_number": 7,
                "id": 794,
                "name": "Buzzwole"
    },
            {
                "generation_number": 7,
                "id": 795,
                "name": "Pheromosa"
    },
            {
                "generation_number": 7,
                "id": 796,
                "name": "Xurkitree"
    },
            {
                "generation_number": 7,
                "id": 797,
                "name": "Celesteela"
    },
            {
                "generation_number": 7,
                "id": 798,
                "name": "Kartana"
    },
            {
                "generation_number": 7,
                "id": 799,
                "name": "Guzzlord"
    },
            {
                "generation_number": 7,
                "id": 800,
                "name": "Necrozma"
    },
            {
                "generation_number": 7,
                "id": 801,
                "name": "Magearna"
    },
            {
                "generation_number": 7,
                "id": 802,
                "name": "Marshadow"
    },
            {
                "generation_number": 7,
                "id": 803,
                "name": "Poipole"
    },
            {
                "generation_number": 7,
                "id": 804,
                "name": "Naganadel"
    },
            {
                "generation_number": 7,
                "id": 805,
                "name": "Stakataka"
    },
            {
                "generation_number": 7,
                "id": 806,
                "name": "Blacephalon"
    },
            {
                "generation_number": 7,
                "id": 807,
                "name": "Zeraora"
    },
            {
                "generation_number": 7,
                "id": 808,
                "name": "Meltan"
    },
            {
                "generation_number": 7,
                "id": 809,
                "name": "Melmetal"
    }
    ],
        "Generation 8": [
            {
                "generation_number": 8,
                "id": 810,
                "name": "Grookey"
    },
            {
                "generation_number": 8,
                "id": 811,
                "name": "Thwackey"
    },
            {
                "generation_number": 8,
                "id": 812,
                "name": "Rillaboom"
    },
            {
                "generation_number": 8,
                "id": 813,
                "name": "Scorbunny"
    },
            {
                "generation_number": 8,
                "id": 814,
                "name": "Raboot"
    },
            {
                "generation_number": 8,
                "id": 815,
                "name": "Cinderace"
    },
            {
                "generation_number": 8,
                "id": 816,
                "name": "Sobble"
    },
            {
                "generation_number": 8,
                "id": 817,
                "name": "Drizzile"
    },
            {
                "generation_number": 8,
                "id": 818,
                "name": "Inteleon"
    },
            {
                "generation_number": 8,
                "id": 819,
                "name": "Skwovet"
    },
            {
                "generation_number": 8,
                "id": 820,
                "name": "Greedent"
    },
            {
                "generation_number": 8,
                "id": 821,
                "name": "Rookidee"
    },
            {
                "generation_number": 8,
                "id": 822,
                "name": "Corvisquire"
    },
            {
                "generation_number": 8,
                "id": 823,
                "name": "Corviknight"
    },
            {
                "generation_number": 8,
                "id": 824,
                "name": "Blipbug"
    },
            {
                "generation_number": 8,
                "id": 825,
                "name": "Dottler"
    },
            {
                "generation_number": 8,
                "id": 826,
                "name": "Orbeetle"
    },
            {
                "generation_number": 8,
                "id": 827,
                "name": "Nickit"
    },
            {
                "generation_number": 8,
                "id": 828,
                "name": "Thievul"
    },
            {
                "generation_number": 8,
                "id": 829,
                "name": "Gossifleur"
    },
            {
                "generation_number": 8,
                "id": 830,
                "name": "Eldegoss"
    },
            {
                "generation_number": 8,
                "id": 831,
                "name": "Wooloo"
    },
            {
                "generation_number": 8,
                "id": 832,
                "name": "Dubwool"
    },
            {
                "generation_number": 8,
                "id": 833,
                "name": "Chewtle"
    },
            {
                "generation_number": 8,
                "id": 834,
                "name": "Drednaw"
    },
            {
                "generation_number": 8,
                "id": 835,
                "name": "Yamper"
    },
            {
                "generation_number": 8,
                "id": 836,
                "name": "Boltund"
    },
            {
                "generation_number": 8,
                "id": 837,
                "name": "Rolycoly"
    },
            {
                "generation_number": 8,
                "id": 838,
                "name": "Carkol"
    },
            {
                "generation_number": 8,
                "id": 839,
                "name": "Coalossal"
    },
            {
                "generation_number": 8,
                "id": 840,
                "name": "Applin"
    },
            {
                "generation_number": 8,
                "id": 841,
                "name": "Flapple"
    },
            {
                "generation_number": 8,
                "id": 842,
                "name": "Appletun"
    },
            {
                "generation_number": 8,
                "id": 843,
                "name": "Silicobra"
    },
            {
                "generation_number": 8,
                "id": 844,
                "name": "Sandaconda"
    },
            {
                "generation_number": 8,
                "id": 845,
                "name": "Cramorant"
    },
            {
                "generation_number": 8,
                "id": 846,
                "name": "Arrokuda"
    },
            {
                "generation_number": 8,
                "id": 847,
                "name": "Barraskewda"
    },
            {
                "generation_number": 8,
                "id": 848,
                "name": "Toxel"
    },
            {
                "generation_number": 8,
                "id": 849,
                "name": "Toxtricity"
    },
            {
                "generation_number": 8,
                "id": 850,
                "name": "Sizzlipede"
    },
            {
                "generation_number": 8,
                "id": 851,
                "name": "Centiskorch"
    },
            {
                "generation_number": 8,
                "id": 852,
                "name": "Clobbopus"
    },
            {
                "generation_number": 8,
                "id": 853,
                "name": "Grapploct"
    },
            {
                "generation_number": 8,
                "id": 854,
                "name": "Sinistea"
    },
            {
                "generation_number": 8,
                "id": 855,
                "name": "Polteageist"
    },
            {
                "generation_number": 8,
                "id": 856,
                "name": "Hatenna"
    },
            {
                "generation_number": 8,
                "id": 857,
                "name": "Hattrem"
    },
            {
                "generation_number": 8,
                "id": 858,
                "name": "Hatterene"
    },
            {
                "generation_number": 8,
                "id": 859,
                "name": "Impidimp"
    },
            {
                "generation_number": 8,
                "id": 860,
                "name": "Morgrem"
    },
            {
                "generation_number": 8,
                "id": 861,
                "name": "Grimmsnarl"
    },
            {
                "generation_number": 8,
                "id": 862,
                "name": "Obstagoon"
    },
            {
                "generation_number": 8,
                "id": 863,
                "name": "Perrserker"
    },
            {
                "generation_number": 8,
                "id": 864,
                "name": "Cursola"
    },
            {
                "generation_number": 8,
                "id": 865,
                "name": "Sirfetch\u2019d"
    },
            {
                "generation_number": 8,
                "id": 866,
                "name": "Mr. Rime"
    },
            {
                "generation_number": 8,
                "id": 867,
                "name": "Runerigus"
    },
            {
                "generation_number": 8,
                "id": 868,
                "name": "Milcery"
    },
            {
                "generation_number": 8,
                "id": 869,
                "name": "Alcremie"
    },
            {
                "generation_number": 8,
                "id": 870,
                "name": "Falinks"
    },
            {
                "generation_number": 8,
                "id": 871,
                "name": "Pincurchin"
    },
            {
                "generation_number": 8,
                "id": 872,
                "name": "Snom"
    },
            {
                "generation_number": 8,
                "id": 873,
                "name": "Frosmoth"
    },
            {
                "generation_number": 8,
                "id": 874,
                "name": "Stonjourner"
    },
            {
                "generation_number": 8,
                "id": 875,
                "name": "Eiscue"
    },
            {
                "generation_number": 8,
                "id": 876,
                "name": "Indeedee"
    },
            {
                "generation_number": 8,
                "id": 877,
                "name": "Morpeko"
    },
            {
                "generation_number": 8,
                "id": 878,
                "name": "Cufant"
    },
            {
                "generation_number": 8,
                "id": 879,
                "name": "Copperajah"
    },
            {
                "generation_number": 8,
                "id": 880,
                "name": "Dracozolt"
    },
            {
                "generation_number": 8,
                "id": 881,
                "name": "Arctozolt"
    },
            {
                "generation_number": 8,
                "id": 882,
                "name": "Dracovish"
    },
            {
                "generation_number": 8,
                "id": 883,
                "name": "Arctovish"
    },
            {
                "generation_number": 8,
                "id": 884,
                "name": "Duraludon"
    },
            {
                "generation_number": 8,
                "id": 885,
                "name": "Dreepy"
    },
            {
                "generation_number": 8,
                "id": 886,
                "name": "Drakloak"
    },
            {
                "generation_number": 8,
                "id": 887,
                "name": "Dragapult"
    },
            {
                "generation_number": 8,
                "id": 888,
                "name": "Zacian"
    },
            {
                "generation_number": 8,
                "id": 889,
                "name": "Zamazenta"
    },
            {
                "generation_number": 8,
                "id": 890,
                "name": "Eternatus"
    },
            {
                "generation_number": 8,
                "id": 891,
                "name": "Kubfu"
    },
            {
                "generation_number": 8,
                "id": 892,
                "name": "Urshifu"
    },
            {
                "generation_number": 8,
                "id": 893,
                "name": "Zarude"
    }
    ]
    }
    ]
    
    // http://api/v1/current_pokemon_moves.json
// This API returns all moves that Pokemon can currently learn via catching, evolving, hatching, or using TM's.
// Returns a JSON array where each element is a dict containing :
// - Pokemon ID, 
// - Pokemon name, 
// - an array of charged moves, 
// - an array of fast moves, 
// - an array of charged moves learnable from an elite TM, 
// - an array of fast legacy fast moves, 
// and optionally the form.
const POKEMON_MOVES = [
    {
        "charged_moves": [
            "Sludge Bomb",
            "Seed Bomb",
            "Power Whip"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Fall_2019",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Seed Bomb",
            "Power Whip"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Solar Beam",
            "Power Whip"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 2,
        "pokemon_name": "Ivysaur"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Petal Blizzard",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Vine Whip"
        ],
        "form": "Copy_2019",
        "pokemon_id": 3,
        "pokemon_name": "Venusaur"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Petal Blizzard",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 3,
        "pokemon_name": "Venusaur"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flame Burst",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Scratch"
        ],
        "form": "Fall_2019",
        "pokemon_id": 4,
        "pokemon_name": "Charmander"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flame Burst",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 4,
        "pokemon_name": "Charmander"
    },
    {
        "charged_moves": [
            "Fire Punch",
            "Flame Burst",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Scratch"
        ],
        "fast_moves": [
            "Ember",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 5,
        "pokemon_name": "Charmeleon"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Dragon Claw",
            "Overheat"
        ],
        "elite_charged_moves": [
            "Blast Burn",
            "Flamethrower"
        ],
        "elite_fast_moves": [
            "Ember",
            "Wing Attack",
            "Dragon Breath"
        ],
        "fast_moves": [
            "Fire Spin",
            "Air Slash"
        ],
        "form": "Copy_2019",
        "pokemon_id": 6,
        "pokemon_name": "Charizard"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Dragon Claw",
            "Overheat"
        ],
        "elite_charged_moves": [
            "Blast Burn",
            "Flamethrower"
        ],
        "elite_fast_moves": [
            "Ember",
            "Wing Attack",
            "Dragon Breath"
        ],
        "fast_moves": [
            "Fire Spin",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 6,
        "pokemon_name": "Charizard"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Aqua Tail",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Tackle"
        ],
        "form": "Fall_2019",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Aqua Tail",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Ice Beam",
            "Hydro Pump"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 8,
        "pokemon_name": "Wartortle"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Ice Beam",
            "Hydro Pump",
            "Skull Bash"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Copy_2019",
        "pokemon_id": 9,
        "pokemon_name": "Blastoise"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Ice Beam",
            "Hydro Pump",
            "Skull Bash"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 9,
        "pokemon_name": "Blastoise"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 10,
        "pokemon_name": "Caterpie"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 11,
        "pokemon_name": "Metapod"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Psychic",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Bug Bite"
        ],
        "fast_moves": [
            "Struggle Bug",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 12,
        "pokemon_name": "Butterfree"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 13,
        "pokemon_name": "Weedle"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 14,
        "pokemon_name": "Kakuna"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Aerial Ace",
            "X Scissor",
            "Fell Stinger"
        ],
        "elite_charged_moves": [
            "Drill Run"
        ],
        "elite_fast_moves": [
            "Bug Bite"
        ],
        "fast_moves": [
            "Infestation",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 15,
        "pokemon_name": "Beedrill"
    },
    {
        "charged_moves": [
            "Twister",
            "Aerial Ace",
            "Air Cutter"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 16,
        "pokemon_name": "Pidgey"
    },
    {
        "charged_moves": [
            "Twister",
            "Aerial Ace",
            "Air Cutter"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 17,
        "pokemon_name": "Pidgeotto"
    },
    {
        "charged_moves": [
            "Hurricane",
            "Aerial Ace",
            "Brave Bird",
            "Feather Dance"
        ],
        "elite_charged_moves": [
            "Air Cutter"
        ],
        "elite_fast_moves": [
            "Wing Attack",
            "Gust"
        ],
        "fast_moves": [
            "Air Slash",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 18,
        "pokemon_name": "Pidgeot"
    },
    {
        "charged_moves": [
            "Crunch",
            "Hyper Fang",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Quick Attack"
        ],
        "form": "Alola",
        "pokemon_id": 19,
        "pokemon_name": "Rattata"
    },
    {
        "charged_moves": [
            "Dig",
            "Hyper Fang",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 19,
        "pokemon_name": "Rattata"
    },
    {
        "charged_moves": [
            "Crunch",
            "Hyper Fang",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Quick Attack"
        ],
        "form": "Alola",
        "pokemon_id": 20,
        "pokemon_name": "Raticate"
    },
    {
        "charged_moves": [
            "Dig",
            "Hyper Fang",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 20,
        "pokemon_name": "Raticate"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Drill Peck",
            "Sky Attack"
        ],
        "elite_charged_moves": [
            "Twister"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 21,
        "pokemon_name": "Spearow"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Drill Run",
            "Sky Attack"
        ],
        "elite_charged_moves": [
            "Twister"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 22,
        "pokemon_name": "Fearow"
    },
    {
        "charged_moves": [
            "Wrap",
            "Poison Fang",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [
            "Gunk Shot"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 23,
        "pokemon_name": "Ekans"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Sludge Wave",
            "Gunk Shot",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Acid",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 24,
        "pokemon_name": "Arbok"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [
            "Surf",
            "Thunder"
        ],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Adventure_hat_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [
            "Surf",
            "Thunder"
        ],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Copy_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge",
            "Fly"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Costume_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [
            "Surf",
            "Thunder"
        ],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Fall_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge",
            "Fly"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Flying_5th_anniv",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Kariyushi",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [
            "Surf",
            "Thunder"
        ],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Thunder Punch",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Charm"
        ],
        "form": "Pop_star",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Meteor Mash",
            "Thunder Punch",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Charm"
        ],
        "form": "Rock_star",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Flying Press",
            "Thunder Punch",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Charm"
        ],
        "form": "Vs_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [
            "Surf",
            "Thunder"
        ],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Winter_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Psychic",
            "Thunder Punch",
            "Wild Charge",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Volt Switch",
            "Spark",
            "Thunder Shock"
        ],
        "form": "Alola",
        "pokemon_id": 26,
        "pokemon_name": "Raichu"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Thunder Punch",
            "Wild Charge",
            "Skull Bash"
        ],
        "elite_charged_moves": [
            "Thunder"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Volt Switch",
            "Spark",
            "Charm",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 26,
        "pokemon_name": "Raichu"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Gyro Ball",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Powder Snow"
        ],
        "form": "Alola",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew"
    },
    {
        "charged_moves": [
            "Dig",
            "Rock Slide",
            "Sand Tomb"
        ],
        "elite_charged_moves": [
            "Rock Tomb"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Gyro Ball",
            "Bulldoze",
            "Ice Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Powder Snow"
        ],
        "form": "Alola",
        "pokemon_id": 28,
        "pokemon_name": "Sandslash"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Rock Tomb",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 28,
        "pokemon_name": "Sandslash"
    },
    {
        "charged_moves": [
            "Poison Fang",
            "Body Slam",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 29,
        "pokemon_name": "Nidoran\u2640"
    },
    {
        "charged_moves": [
            "Poison Fang",
            "Dig",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 30,
        "pokemon_name": "Nidorina"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Sludge Wave",
            "Stone Edge",
            "Earth Power",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 31,
        "pokemon_name": "Nidoqueen"
    },
    {
        "charged_moves": [
            "Horn Attack",
            "Body Slam",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 32,
        "pokemon_name": "Nidoran\u2642"
    },
    {
        "charged_moves": [
            "Horn Attack",
            "Dig",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 33,
        "pokemon_name": "Nidorino"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Sludge Wave",
            "Megahorn",
            "Earth Power",
            "Sand Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Fury Cutter"
        ],
        "fast_moves": [
            "Poison Jab",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 34,
        "pokemon_name": "Nidoking"
    },
    {
        "charged_moves": [
            "Disarming Voice",
            "Body Slam",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 35,
        "pokemon_name": "Clefairy"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Psychic",
            "Moonblast",
            "Meteor Mash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Pound"
        ],
        "fast_moves": [
            "Charge Beam",
            "Zen Headbutt",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 36,
        "pokemon_name": "Clefable"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Ice Beam",
            "Blizzard",
            "Weather Ball Ice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Powder Snow"
        ],
        "form": "Alola",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Flamethrower",
            "Flame Charge",
            "Weather Ball Fire"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Ice Beam",
            "Blizzard",
            "Psyshock",
            "Weather Ball Ice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Powder Snow",
            "Charm"
        ],
        "form": "Alola",
        "pokemon_id": 38,
        "pokemon_name": "Ninetales"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Overheat",
            "Solar Beam",
            "Psyshock",
            "Weather Ball Fire"
        ],
        "elite_charged_moves": [
            "Fire Blast",
            "Flamethrower"
        ],
        "elite_fast_moves": [
            "Ember"
        ],
        "fast_moves": [
            "Feint Attack",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 38,
        "pokemon_name": "Ninetales"
    },
    {
        "charged_moves": [
            "Disarming Voice",
            "Gyro Ball",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [
            "Play Rough",
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 39,
        "pokemon_name": "Jigglypuff"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Hyper Beam",
            "Play Rough",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Feint Attack",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 40,
        "pokemon_name": "Wigglytuff"
    },
    {
        "charged_moves": [
            "Poison Fang",
            "Air Cutter",
            "Swift"
        ],
        "elite_charged_moves": [
            "Sludge Bomb"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 41,
        "pokemon_name": "Zubat"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Air Cutter",
            "Poison Fang"
        ],
        "elite_charged_moves": [
            "Ominous Wind"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 42,
        "pokemon_name": "Golbat"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Sludge Bomb",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 43,
        "pokemon_name": "Oddish"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Sludge Bomb",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 44,
        "pokemon_name": "Gloom"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Solar Beam",
            "Moonblast",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 45,
        "pokemon_name": "Vileplume"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "X Scissor",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 46,
        "pokemon_name": "Paras"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "X Scissor",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Bug Bite"
        ],
        "fast_moves": [
            "Struggle Bug",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 47,
        "pokemon_name": "Parasect"
    },
    {
        "charged_moves": [
            "Poison Fang",
            "Psybeam",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 48,
        "pokemon_name": "Venonat"
    },
    {
        "charged_moves": [
            "Silver Wind",
            "Psychic",
            "Bug Buzz",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Bug Bite"
        ],
        "fast_moves": [
            "Infestation",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 49,
        "pokemon_name": "Venomoth"
    },
    {
        "charged_moves": [
            "Dig",
            "Mud Bomb",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Metal Claw"
        ],
        "form": "Alola",
        "pokemon_id": 50,
        "pokemon_name": "Diglett"
    },
    {
        "charged_moves": [
            "Dig",
            "Mud Bomb",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 50,
        "pokemon_name": "Diglett"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Mud Bomb",
            "Iron Head"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Mud Slap"
        ],
        "form": "Alola",
        "pokemon_id": 51,
        "pokemon_name": "Dugtrio"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Mud Bomb",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Sucker Punch",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 51,
        "pokemon_name": "Dugtrio"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Dark Pulse",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Bite"
        ],
        "form": "Alola",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Gyro Ball",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Metal Claw"
        ],
        "form": "Galarian",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Dark Pulse",
            "Foul Play"
        ],
        "elite_charged_moves": [
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Dark Pulse",
            "Play Rough",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Feint Attack"
        ],
        "form": "Alola",
        "pokemon_id": 53,
        "pokemon_name": "Persian"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Power Gem",
            "Play Rough",
            "Payback"
        ],
        "elite_charged_moves": [
            "Night Slash"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 53,
        "pokemon_name": "Persian"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Aqua Tail",
            "Cross Chop"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 54,
        "pokemon_name": "Psyduck"
    },
    {
        "charged_moves": [
            "Psychic",
            "Hydro Pump",
            "Ice Beam",
            "Bubble Beam",
            "Synchronoise",
            "Cross Chop"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 55,
        "pokemon_name": "Golduck"
    },
    {
        "charged_moves": [
            "Cross Chop",
            "Low Sweep",
            "Brick Break"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Karate Chop",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 56,
        "pokemon_name": "Mankey"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Low Sweep",
            "Night Slash",
            "Ice Punch"
        ],
        "elite_charged_moves": [
            "Cross Chop"
        ],
        "elite_fast_moves": [
            "Karate Chop"
        ],
        "fast_moves": [
            "Low Kick",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 57,
        "pokemon_name": "Primeape"
    },
    {
        "charged_moves": [
            "Flame Wheel",
            "Body Slam",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 58,
        "pokemon_name": "Growlithe"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Wild Charge",
            "Crunch",
            "Flamethrower"
        ],
        "elite_charged_moves": [
            "Bulldoze"
        ],
        "elite_fast_moves": [
            "Bite"
        ],
        "fast_moves": [
            "Fire Fang",
            "Snarl",
            "Thunder Fang"
        ],
        "form": "Normal",
        "pokemon_id": 59,
        "pokemon_name": "Arcanine"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Mud Bomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 60,
        "pokemon_name": "Poliwag"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Mud Bomb",
            "Bubble Beam"
        ],
        "elite_charged_moves": [
            "Scald"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 61,
        "pokemon_name": "Poliwhirl"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Dynamic Punch",
            "Ice Punch",
            "Power Up Punch",
            "Scald"
        ],
        "elite_charged_moves": [
            "Submission"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Rock Smash",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 62,
        "pokemon_name": "Poliwrath"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Signal Beam",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 63,
        "pokemon_name": "Abra"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Dazzling Gleam",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 64,
        "pokemon_name": "Kadabra"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Focus Blast",
            "Shadow Ball",
            "Fire Punch"
        ],
        "elite_charged_moves": [
            "Dazzling Gleam",
            "Psychic"
        ],
        "elite_fast_moves": [
            "Counter"
        ],
        "fast_moves": [
            "Psycho Cut",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 65,
        "pokemon_name": "Alakazam"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Brick Break",
            "Cross Chop"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Low Kick"
        ],
        "fast_moves": [
            "Rock Smash",
            "Karate Chop"
        ],
        "form": "Normal",
        "pokemon_id": 66,
        "pokemon_name": "Machop"
    },
    {
        "charged_moves": [
            "Submission",
            "Brick Break",
            "Dynamic Punch"
        ],
        "elite_charged_moves": [
            "Cross Chop"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Karate Chop"
        ],
        "form": "Normal",
        "pokemon_id": 67,
        "pokemon_name": "Machoke"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Dynamic Punch",
            "Close Combat",
            "Rock Slide",
            "Cross Chop"
        ],
        "elite_charged_moves": [
            "Stone Edge",
            "Submission",
            "Payback"
        ],
        "elite_fast_moves": [
            "Karate Chop"
        ],
        "fast_moves": [
            "Bullet Punch",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 68,
        "pokemon_name": "Machamp"
    },
    {
        "charged_moves": [
            "Power Whip",
            "Sludge Bomb",
            "Wrap"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 69,
        "pokemon_name": "Bellsprout"
    },
    {
        "charged_moves": [
            "Power Whip",
            "Sludge Bomb",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Razor Leaf"
        ],
        "fast_moves": [
            "Bullet Seed",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 70,
        "pokemon_name": "Weepinbell"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Sludge Bomb",
            "Solar Beam",
            "Leaf Tornado",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 71,
        "pokemon_name": "Victreebel"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Water Pulse",
            "Wrap"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 72,
        "pokemon_name": "Tentacool"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Sludge Wave",
            "Blizzard",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 73,
        "pokemon_name": "Tentacruel"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Rock Tomb",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Volt Switch"
        ],
        "form": "Alola",
        "pokemon_id": 74,
        "pokemon_name": "Geodude"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Rock Tomb",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 74,
        "pokemon_name": "Geodude"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Stone Edge",
            "Rock Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Volt Switch"
        ],
        "form": "Alola",
        "pokemon_id": 75,
        "pokemon_name": "Graveler"
    },
    {
        "charged_moves": [
            "Dig",
            "Stone Edge",
            "Rock Blast"
        ],
        "elite_charged_moves": [
            "Rock Slide"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 75,
        "pokemon_name": "Graveler"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Rock Blast",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Volt Switch"
        ],
        "form": "Alola",
        "pokemon_id": 76,
        "pokemon_name": "Golem"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Rock Blast",
            "Earthquake",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 76,
        "pokemon_name": "Golem"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Psybeam",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Psycho Cut"
        ],
        "form": "Galarian",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flame Wheel",
            "Stomp"
        ],
        "elite_charged_moves": [
            "Fire Blast"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Psychic",
            "Body Slam",
            "Megahorn"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Psycho Cut"
        ],
        "form": "Galarian",
        "pokemon_id": 78,
        "pokemon_name": "Rapidash"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Drill Run",
            "Heat Wave",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Ember"
        ],
        "fast_moves": [
            "Low Kick",
            "Fire Spin",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 78,
        "pokemon_name": "Rapidash"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Psyshock",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "2020",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "charged_moves": [
            "Surf",
            "Psyshock",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Iron Tail"
        ],
        "form": "Galarian",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Psyshock",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Psychic",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "2021",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro"
    },
    {
        "charged_moves": [
            "Focus Blast",
            "Psychic",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Poison Jab"
        ],
        "form": "Galarian",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Psychic",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro"
    },
    {
        "charged_moves": [
            "Discharge",
            "Magnet Bomb",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 81,
        "pokemon_name": "Magnemite"
    },
    {
        "charged_moves": [
            "Zap Cannon",
            "Magnet Bomb",
            "Flash Cannon",
            "Discharge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Charge Beam",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 82,
        "pokemon_name": "Magneton"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Brave Bird",
            "Leaf Blade"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Fury Cutter"
        ],
        "form": "Galarian",
        "pokemon_id": 83,
        "pokemon_name": "Farfetch\u2019d"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Air Cutter",
            "Leaf Blade"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Cut"
        ],
        "fast_moves": [
            "Air Slash",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 83,
        "pokemon_name": "Farfetch\u2019d"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Aerial Ace",
            "Brave Bird"
        ],
        "elite_charged_moves": [
            "Swift"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 84,
        "pokemon_name": "Doduo"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Aerial Ace",
            "Brave Bird"
        ],
        "elite_charged_moves": [
            "Air Cutter"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 85,
        "pokemon_name": "Dodrio"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Icy Wind",
            "Aqua Tail"
        ],
        "elite_charged_moves": [
            "Aqua Jet"
        ],
        "elite_fast_moves": [
            "Water Gun"
        ],
        "fast_moves": [
            "Ice Shard",
            "Lick"
        ],
        "form": "Normal",
        "pokemon_id": 86,
        "pokemon_name": "Seel"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Water Pulse",
            "Blizzard"
        ],
        "elite_charged_moves": [
            "Aqua Jet",
            "Icy Wind"
        ],
        "elite_fast_moves": [
            "Ice Shard"
        ],
        "fast_moves": [
            "Frost Breath",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 87,
        "pokemon_name": "Dewgong"
    },
    {
        "charged_moves": [
            "Crunch",
            "Gunk Shot",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Bite"
        ],
        "form": "Alola",
        "pokemon_id": 88,
        "pokemon_name": "Grimer"
    },
    {
        "charged_moves": [
            "Sludge",
            "Mud Bomb",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 88,
        "pokemon_name": "Grimer"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Gunk Shot",
            "Sludge Wave",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Poison Jab",
            "Snarl"
        ],
        "form": "Alola",
        "pokemon_id": 89,
        "pokemon_name": "Muk"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Gunk Shot",
            "Sludge Wave",
            "Thunder Punch",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Lick"
        ],
        "fast_moves": [
            "Infestation",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 89,
        "pokemon_name": "Muk"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Water Pulse",
            "Icy Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 90,
        "pokemon_name": "Shellder"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Hydro Pump",
            "Avalanche",
            "Icy Wind"
        ],
        "elite_charged_moves": [
            "Blizzard"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Frost Breath",
            "Ice Shard"
        ],
        "form": "Normal",
        "pokemon_id": 91,
        "pokemon_name": "Cloyster"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Dark Pulse",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [
            "Ominous Wind"
        ],
        "elite_fast_moves": [
            "Sucker Punch"
        ],
        "fast_moves": [
            "Lick",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 92,
        "pokemon_name": "Gastly"
    },
    {
        "charged_moves": [
            "Shadow Punch",
            "Dark Pulse",
            "Sludge Bomb",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Lick"
        ],
        "fast_moves": [
            "Shadow Claw",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 93,
        "pokemon_name": "Haunter"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Focus Blast",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [
            "Sludge Wave",
            "Dark Pulse",
            "Psychic",
            "Shadow Punch"
        ],
        "elite_fast_moves": [
            "Lick"
        ],
        "fast_moves": [
            "Sucker Punch",
            "Hex",
            "Shadow Claw"
        ],
        "form": "Costume_2020",
        "pokemon_id": 94,
        "pokemon_name": "Gengar"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Focus Blast",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [
            "Sludge Wave",
            "Dark Pulse",
            "Psychic",
            "Shadow Punch"
        ],
        "elite_fast_moves": [
            "Lick"
        ],
        "fast_moves": [
            "Sucker Punch",
            "Hex",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 94,
        "pokemon_name": "Gengar"
    },
    {
        "charged_moves": [
            "Sand Tomb",
            "Stone Edge",
            "Heavy Slam"
        ],
        "elite_charged_moves": [
            "Iron Head",
            "Rock Slide"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 95,
        "pokemon_name": "Onix"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psyshock",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 96,
        "pokemon_name": "Drowzee"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Psychic",
            "Focus Blast",
            "Fire Punch",
            "Ice Punch",
            "Thunder Punch",
            "Shadow Ball"
        ],
        "elite_charged_moves": [
            "Psyshock"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 97,
        "pokemon_name": "Hypno"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "Bubble Beam",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 98,
        "pokemon_name": "Krabby"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "X Scissor",
            "Water Pulse",
            "Crabhammer"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Mud Shot"
        ],
        "fast_moves": [
            "Bubble",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 99,
        "pokemon_name": "Kingler"
    },
    {
        "charged_moves": [
            "Swift",
            "Thunderbolt",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charge Beam",
            "Tackle"
        ],
        "form": "Hisuian",
        "pokemon_id": 100,
        "pokemon_name": "Voltorb"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Gyro Ball"
        ],
        "elite_charged_moves": [
            "Signal Beam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 100,
        "pokemon_name": "Voltorb"
    },
    {
        "charged_moves": [
            "Swift",
            "Wild Charge",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Tackle"
        ],
        "form": "Hisuian",
        "pokemon_id": 101,
        "pokemon_name": "Electrode"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Hyper Beam",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Tackle"
        ],
        "fast_moves": [
            "Spark",
            "Volt Switch"
        ],
        "form": "Normal",
        "pokemon_id": 101,
        "pokemon_name": "Electrode"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Psychic",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 102,
        "pokemon_name": "Exeggcute"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Dragon Pulse",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Dragon Tail"
        ],
        "form": "Alola",
        "pokemon_id": 103,
        "pokemon_name": "Exeggutor"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Psychic",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Zen Headbutt"
        ],
        "fast_moves": [
            "Bullet Seed",
            "Extrasensory",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 103,
        "pokemon_name": "Exeggutor"
    },
    {
        "charged_moves": [
            "Bone Club",
            "Dig",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 104,
        "pokemon_name": "Cubone"
    },
    {
        "charged_moves": [
            "Bone Club",
            "Shadow Ball",
            "Fire Blast",
            "Flame Wheel"
        ],
        "elite_charged_moves": [
            "Shadow Bone"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Rock Smash",
            "Fire Spin"
        ],
        "form": "Alola",
        "pokemon_id": 105,
        "pokemon_name": "Marowak"
    },
    {
        "charged_moves": [
            "Bone Club",
            "Dig",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 105,
        "pokemon_name": "Marowak"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Low Sweep",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Stomp",
            "Brick Break"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 106,
        "pokemon_name": "Hitmonlee"
    },
    {
        "charged_moves": [
            "Fire Punch",
            "Ice Punch",
            "Thunder Punch",
            "Close Combat",
            "Power Up Punch"
        ],
        "elite_charged_moves": [
            "Brick Break"
        ],
        "elite_fast_moves": [
            "Rock Smash"
        ],
        "fast_moves": [
            "Bullet Punch",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 107,
        "pokemon_name": "Hitmonchan"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Stomp",
            "Power Whip"
        ],
        "elite_charged_moves": [
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 108,
        "pokemon_name": "Lickitung"
    },
    {
        "charged_moves": [
            "Sludge",
            "Sludge Bomb",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 109,
        "pokemon_name": "Koffing"
    },
    {
        "charged_moves": [
            "Sludge",
            "Hyper Beam",
            "Play Rough",
            "Hyper Beam",
            "Overheat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle"
        ],
        "form": "Galarian",
        "pokemon_id": 110,
        "pokemon_name": "Weezing"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Shadow Ball",
            "Dark Pulse",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 110,
        "pokemon_name": "Weezing"
    },
    {
        "charged_moves": [
            "Bulldoze",
            "Horn Attack",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 111,
        "pokemon_name": "Rhyhorn"
    },
    {
        "charged_moves": [
            "Surf",
            "Earthquake",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Megahorn"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 112,
        "pokemon_name": "Rhydon"
    },
    {
        "charged_moves": [
            "Psychic",
            "Hyper Beam",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 113,
        "pokemon_name": "Chansey"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Sludge Bomb",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Power Whip"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 114,
        "pokemon_name": "Tangela"
    },
    {
        "charged_moves": [
            "Crunch",
            "Earthquake",
            "Outrage",
            "Power Up Punch"
        ],
        "elite_charged_moves": [
            "Brick Break",
            "Stomp"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 115,
        "pokemon_name": "Kangaskhan"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Dragon Pulse",
            "Flash Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 116,
        "pokemon_name": "Horsea"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Dragon Pulse",
            "Hydro Pump"
        ],
        "elite_charged_moves": [
            "Blizzard"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 117,
        "pokemon_name": "Seadra"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Horn Attack",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 118,
        "pokemon_name": "Goldeen"
    },
    {
        "charged_moves": [
            "Ice Beam",
            "Water Pulse",
            "Megahorn"
        ],
        "elite_charged_moves": [
            "Icy Wind",
            "Drill Run"
        ],
        "elite_fast_moves": [
            "Poison Jab"
        ],
        "fast_moves": [
            "Peck",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 119,
        "pokemon_name": "Seaking"
    },
    {
        "charged_moves": [
            "Swift",
            "Bubble Beam",
            "Power Gem"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 120,
        "pokemon_name": "Staryu"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Power Gem",
            "Psychic",
            "Thunder",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Tackle"
        ],
        "fast_moves": [
            "Hidden Power",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 121,
        "pokemon_name": "Starmie"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Ice Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Zen Headbutt"
        ],
        "form": "Galarian",
        "pokemon_id": 122,
        "pokemon_name": "Mr. Mime"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 122,
        "pokemon_name": "Mr. Mime"
    },
    {
        "charged_moves": [
            "Night Slash",
            "X Scissor",
            "Aerial Ace"
        ],
        "elite_charged_moves": [
            "Bug Buzz"
        ],
        "elite_fast_moves": [
            "Steel Wing"
        ],
        "fast_moves": [
            "Fury Cutter",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 123,
        "pokemon_name": "Scyther"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Avalanche",
            "Psyshock",
            "Focus Blast"
        ],
        "elite_charged_moves": [
            "Ice Punch"
        ],
        "elite_fast_moves": [
            "Pound"
        ],
        "fast_moves": [
            "Frost Breath",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 124,
        "pokemon_name": "Jynx"
    },
    {
        "charged_moves": [
            "Thunder Punch",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 125,
        "pokemon_name": "Electabuzz"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Fire Punch",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Karate Chop"
        ],
        "form": "Normal",
        "pokemon_id": 126,
        "pokemon_name": "Magmar"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "X Scissor",
            "Close Combat",
            "Super Power"
        ],
        "elite_charged_moves": [
            "Submission"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Bug Bite",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 127,
        "pokemon_name": "Pinsir"
    },
    {
        "charged_moves": [
            "Horn Attack",
            "Iron Head",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 128,
        "pokemon_name": "Tauros"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash"
        ],
        "form": "Normal",
        "pokemon_id": 129,
        "pokemon_name": "Magikarp"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Crunch",
            "Outrage",
            "Twister"
        ],
        "elite_charged_moves": [
            "Dragon Pulse",
            "Aqua Tail"
        ],
        "elite_fast_moves": [
            "Dragon Tail"
        ],
        "fast_moves": [
            "Bite",
            "Waterfall",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 130,
        "pokemon_name": "Gyarados"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Surf",
            "Blizzard",
            "Skull Bash"
        ],
        "elite_charged_moves": [
            "Dragon Pulse",
            "Ice Beam"
        ],
        "elite_fast_moves": [
            "Ice Shard"
        ],
        "fast_moves": [
            "Frost Breath",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 131,
        "pokemon_name": "Lapras"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Transform"
        ],
        "form": "Normal",
        "pokemon_id": 132,
        "pokemon_name": "Ditto"
    },
    {
        "charged_moves": [
            "Dig",
            "Swift"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 133,
        "pokemon_name": "Eevee"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Hydro Pump",
            "Aqua Tail"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Scald"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 134,
        "pokemon_name": "Vaporeon"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Zap Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Volt Switch"
        ],
        "form": "Normal",
        "pokemon_id": 135,
        "pokemon_name": "Jolteon"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Flamethrower",
            "Overheat"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Heat Wave",
            "Super Power"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 136,
        "pokemon_name": "Flareon"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Hyper Beam",
            "Zap Cannon"
        ],
        "elite_charged_moves": [
            "Signal Beam",
            "Psybeam",
            "Discharge"
        ],
        "elite_fast_moves": [
            "Tackle",
            "Zen Headbutt"
        ],
        "fast_moves": [
            "Charge Beam",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 137,
        "pokemon_name": "Porygon"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Bubble Beam",
            "Rock Blast"
        ],
        "elite_charged_moves": [
            "Rock Tomb",
            "Brine"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 138,
        "pokemon_name": "Omanyte"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Hydro Pump",
            "Rock Blast"
        ],
        "elite_charged_moves": [
            "Rock Slide"
        ],
        "elite_fast_moves": [
            "Rock Throw"
        ],
        "fast_moves": [
            "Mud Shot",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 139,
        "pokemon_name": "Omastar"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Aqua Jet",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 140,
        "pokemon_name": "Kabuto"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Water Pulse",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Fury Cutter"
        ],
        "fast_moves": [
            "Mud Shot",
            "Rock Smash",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 141,
        "pokemon_name": "Kabutops"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Iron Head",
            "Hyper Beam",
            "Rock Slide",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Steel Wing",
            "Bite",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 142,
        "pokemon_name": "Aerodactyl"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Hyper Beam",
            "Earthquake",
            "Outrage",
            "Skull Bash",
            "Body Slam",
            "Super Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Yawn"
        ],
        "fast_moves": [
            "Zen Headbutt",
            "Lick"
        ],
        "form": "Normal",
        "pokemon_id": 143,
        "pokemon_name": "Snorlax"
    },
    {
        "charged_moves": [
            "Ice Beam",
            "Icy Wind",
            "Blizzard",
            "Ancient Power"
        ],
        "elite_charged_moves": [
            "Hurricane"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Frost Breath",
            "Ice Shard"
        ],
        "form": "Normal",
        "pokemon_id": 144,
        "pokemon_name": "Articuno"
    },
    {
        "charged_moves": [
            "Zap Cannon",
            "Thunderbolt",
            "Thunder",
            "Ancient Power",
            "Drill Peck"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Thunder Shock"
        ],
        "fast_moves": [
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 145,
        "pokemon_name": "Zapdos"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Heat Wave",
            "Overheat",
            "Ancient Power"
        ],
        "elite_charged_moves": [
            "Sky Attack"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 146,
        "pokemon_name": "Moltres"
    },
    {
        "charged_moves": [
            "Wrap",
            "Twister",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 147,
        "pokemon_name": "Dratini"
    },
    {
        "charged_moves": [
            "Wrap",
            "Aqua Tail",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 148,
        "pokemon_name": "Dragonair"
    },
    {
        "charged_moves": [
            "Hurricane",
            "Hyper Beam",
            "Outrage",
            "Dragon Claw"
        ],
        "elite_charged_moves": [
            "Draco Meteor",
            "Dragon Pulse"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Steel Wing",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 149,
        "pokemon_name": "Dragonite"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Dynamic Punch",
            "Earthquake",
            "Futuresight"
        ],
        "elite_charged_moves": [
            "Psystrike"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Iron Tail"
        ],
        "form": "A",
        "pokemon_id": 150,
        "pokemon_name": "Mewtwo"
    },
    {
        "charged_moves": [
            "Psychic",
            "Thunderbolt",
            "Ice Beam",
            "Focus Blast",
            "Flamethrower"
        ],
        "elite_charged_moves": [
            "Psystrike",
            "Shadow Ball",
            "Hyper Beam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 150,
        "pokemon_name": "Mewtwo"
    },
    {
        "charged_moves": [
            "Psychic",
            "Ancient Power",
            "Dragon Claw",
            "Psyshock",
            "Ice Beam",
            "Blizzard",
            "Hyper Beam",
            "Solar Beam",
            "Thunderbolt",
            "Thunder",
            "Flame Charge",
            "Low Sweep",
            "Overheat",
            "Focus Blast",
            "Energy Ball",
            "Stone Edge",
            "Gyro Ball",
            "Bulldoze",
            "Rock Slide",
            "Grass Knot",
            "Flash Cannon",
            "Wild Charge",
            "Dark Pulse",
            "Dazzling Gleam",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Steel Wing",
            "Charge Beam",
            "Shadow Claw",
            "Volt Switch",
            "Struggle Bug",
            "Frost Breath",
            "Dragon Tail",
            "Infestation",
            "Poison Jab",
            "Rock Smash",
            "Snarl",
            "Cut",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 151,
        "pokemon_name": "Mew"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 152,
        "pokemon_name": "Chikorita"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 153,
        "pokemon_name": "Bayleef"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Solar Beam",
            "Earthquake"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 154,
        "pokemon_name": "Meganium"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Swift",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 155,
        "pokemon_name": "Cyndaquil"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Dig",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 156,
        "pokemon_name": "Quilava"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Overheat",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Blast Burn"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Shadow Claw",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 157,
        "pokemon_name": "Typhlosion"
    },
    {
        "charged_moves": [
            "Crunch",
            "Aqua Jet",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 158,
        "pokemon_name": "Totodile"
    },
    {
        "charged_moves": [
            "Crunch",
            "Ice Punch",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 159,
        "pokemon_name": "Croconaw"
    },
    {
        "charged_moves": [
            "Crunch",
            "Hydro Pump",
            "Ice Beam"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [
            "Water Gun"
        ],
        "fast_moves": [
            "Waterfall",
            "Bite",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 160,
        "pokemon_name": "Feraligatr"
    },
    {
        "charged_moves": [
            "Dig",
            "Brick Break",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 161,
        "pokemon_name": "Sentret"
    },
    {
        "charged_moves": [
            "Dig",
            "Brick Break",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 162,
        "pokemon_name": "Furret"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Sky Attack",
            "Night Shade"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Peck"
        ],
        "form": "Normal",
        "pokemon_id": 163,
        "pokemon_name": "Hoothoot"
    },
    {
        "charged_moves": [
            "Psychic",
            "Sky Attack",
            "Night Shade",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 164,
        "pokemon_name": "Noctowl"
    },
    {
        "charged_moves": [
            "Silver Wind",
            "Swift",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 165,
        "pokemon_name": "Ledyba"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Silver Wind",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 166,
        "pokemon_name": "Ledian"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Signal Beam",
            "Cross Poison"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 167,
        "pokemon_name": "Spinarak"
    },
    {
        "charged_moves": [
            "Shadow Sneak",
            "Megahorn",
            "Cross Poison",
            "Lunge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 168,
        "pokemon_name": "Ariados"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Air Cutter",
            "Sludge Bomb",
            "Poison Fang",
            "Cross Poison"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 169,
        "pokemon_name": "Crobat"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Thunderbolt",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 170,
        "pokemon_name": "Chinchou"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Charge Beam",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 171,
        "pokemon_name": "Lanturn"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Disarming Voice",
            "Thunder Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 172,
        "pokemon_name": "Pichu"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Psyshock",
            "Signal Beam"
        ],
        "elite_charged_moves": [
            "Psychic",
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 173,
        "pokemon_name": "Cleffa"
    },
    {
        "charged_moves": [
            "Wild Charge",
            "Shadow Ball",
            "Psychic"
        ],
        "elite_charged_moves": [
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 174,
        "pokemon_name": "Igglybuff"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Psyshock",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Zen Headbutt"
        ],
        "fast_moves": [
            "Hidden Power",
            "Peck"
        ],
        "form": "Normal",
        "pokemon_id": 175,
        "pokemon_name": "Togepi"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Dazzling Gleam",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Steel Wing",
            "Zen Headbutt"
        ],
        "fast_moves": [
            "Extrasensory",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 176,
        "pokemon_name": "Togetic"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Psyshock",
            "Drill Peck"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 177,
        "pokemon_name": "Natu"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Futuresight",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 178,
        "pokemon_name": "Xatu"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Thunderbolt",
            "Discharge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 179,
        "pokemon_name": "Mareep"
    },
    {
        "charged_moves": [
            "Power Gem",
            "Thunderbolt",
            "Discharge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 180,
        "pokemon_name": "Flaaffy"
    },
    {
        "charged_moves": [
            "Zap Cannon",
            "Focus Blast",
            "Thunder",
            "Power Gem",
            "Thunder Punch"
        ],
        "elite_charged_moves": [
            "Dragon Pulse"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charge Beam",
            "Volt Switch"
        ],
        "form": "Normal",
        "pokemon_id": 181,
        "pokemon_name": "Ampharos"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Petal Blizzard",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Acid",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 182,
        "pokemon_name": "Bellossom"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Aqua Tail",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 183,
        "pokemon_name": "Marill"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Hydro Pump",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 184,
        "pokemon_name": "Azumarill"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Earthquake",
            "Rock Slide",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 185,
        "pokemon_name": "Sudowoodo"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Surf",
            "Weather Ball Water"
        ],
        "elite_charged_moves": [
            "Earthquake"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 186,
        "pokemon_name": "Politoed"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Dazzling Gleam",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 187,
        "pokemon_name": "Hoppip"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Dazzling Gleam",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 188,
        "pokemon_name": "Skiploom"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Dazzling Gleam",
            "Solar Beam",
            "Aerial Ace"
        ],
        "elite_charged_moves": [
            "Acrobatics"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Infestation",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 189,
        "pokemon_name": "Jumpluff"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Swift",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 190,
        "pokemon_name": "Aipom"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Cut"
        ],
        "form": "Normal",
        "pokemon_id": 191,
        "pokemon_name": "Sunkern"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Petal Blizzard",
            "Sludge Bomb",
            "Leaf Storm"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 192,
        "pokemon_name": "Sunflora"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Aerial Ace",
            "Silver Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 193,
        "pokemon_name": "Yanma"
    },
    {
        "charged_moves": [
            "Mud Bomb",
            "Dig",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 194,
        "pokemon_name": "Wooper"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Earthquake",
            "Stone Edge",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 195,
        "pokemon_name": "Quagsire"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Futuresight"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Shadow Ball"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 196,
        "pokemon_name": "Espeon"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Foul Play"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Psychic"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 197,
        "pokemon_name": "Umbreon"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Foul Play",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 198,
        "pokemon_name": "Murkrow"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Psychic",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "2022",
        "pokemon_id": 199,
        "pokemon_name": "Slowking"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Shadow Ball",
            "Sludge Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Confusion",
            "Acid"
        ],
        "form": "Galarian",
        "pokemon_id": 199,
        "pokemon_name": "Slowking"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Psychic",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 199,
        "pokemon_name": "Slowking"
    },
    {
        "charged_moves": [
            "Shadow Sneak",
            "Dark Pulse",
            "Ominous Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 200,
        "pokemon_name": "Misdreavus"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 201,
        "pokemon_name": "Unown"
    },
    {
        "charged_moves": [
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Splash",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 202,
        "pokemon_name": "Wobbuffet"
    },
    {
        "charged_moves": [
            "Psychic",
            "Thunderbolt",
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 203,
        "pokemon_name": "Girafarig"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Rock Tomb",
            "Sand Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 204,
        "pokemon_name": "Pineco"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Earthquake",
            "Rock Tomb",
            "Sand Tomb",
            "Mirror Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 205,
        "pokemon_name": "Forretress"
    },
    {
        "charged_moves": [
            "Dig",
            "Rock Slide",
            "Drill Run"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 206,
        "pokemon_name": "Dunsparce"
    },
    {
        "charged_moves": [
            "Dig",
            "Aerial Ace",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 207,
        "pokemon_name": "Gligar"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Heavy Slam",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Dragon Tail",
            "Thunder Fang"
        ],
        "form": "Normal",
        "pokemon_id": 208,
        "pokemon_name": "Steelix"
    },
    {
        "charged_moves": [
            "Crunch",
            "Dazzling Gleam",
            "Brick Break"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 209,
        "pokemon_name": "Snubbull"
    },
    {
        "charged_moves": [
            "Crunch",
            "Play Rough",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Snarl",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 210,
        "pokemon_name": "Granbull"
    },
    {
        "charged_moves": [
            "Aqua Tail",
            "Ice Beam",
            "Sludge Wave",
            "Acid Spray",
            "Fell Stinger"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 211,
        "pokemon_name": "Qwilfish"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Iron Head",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Punch",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 212,
        "pokemon_name": "Scizor"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Stone Edge",
            "Gyro Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 213,
        "pokemon_name": "Shuckle"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Close Combat",
            "Earthquake",
            "Rock Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 214,
        "pokemon_name": "Heracross"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Ice Punch",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 215,
        "pokemon_name": "Sneasel"
    },
    {
        "charged_moves": [
            "Cross Chop",
            "Crunch",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Lick"
        ],
        "form": "Normal",
        "pokemon_id": 216,
        "pokemon_name": "Teddiursa"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Hyper Beam",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Counter",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 217,
        "pokemon_name": "Ursaring"
    },
    {
        "charged_moves": [
            "Flame Burst",
            "Flame Charge",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 218,
        "pokemon_name": "Slugma"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Overheat",
            "Stone Edge",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Rock Throw",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 219,
        "pokemon_name": "Magcargo"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Body Slam",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Powder Snow"
        ],
        "form": "Normal",
        "pokemon_id": 220,
        "pokemon_name": "Swinub"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Bulldoze",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Powder Snow"
        ],
        "form": "Normal",
        "pokemon_id": 221,
        "pokemon_name": "Piloswine"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Power Gem",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 222,
        "pokemon_name": "Corsola"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Water Pulse",
            "Rock Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 223,
        "pokemon_name": "Remoraid"
    },
    {
        "charged_moves": [
            "Gunk Shot",
            "Water Pulse",
            "Aurora Beam",
            "Acid Spray",
            "Octazooka"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 224,
        "pokemon_name": "Octillery"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Icy Wind",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Present"
        ],
        "form": "Normal",
        "pokemon_id": 225,
        "pokemon_name": "Delibird"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Icy Wind",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Present"
        ],
        "form": "Winter_2020",
        "pokemon_id": 225,
        "pokemon_name": "Delibird"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Ice Beam",
            "Aerial Ace",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Wing Attack",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 226,
        "pokemon_name": "Mantine"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Sky Attack",
            "Flash Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Steel Wing",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 227,
        "pokemon_name": "Skarmory"
    },
    {
        "charged_moves": [
            "Crunch",
            "Flamethrower",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 228,
        "pokemon_name": "Houndour"
    },
    {
        "charged_moves": [
            "Crunch",
            "Fire Blast",
            "Foul Play",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 229,
        "pokemon_name": "Houndoom"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Outrage",
            "Octazooka"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Water Gun"
        ],
        "fast_moves": [
            "Waterfall",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 230,
        "pokemon_name": "Kingdra"
    },
    {
        "charged_moves": [
            "Bulldoze",
            "Rock Slide",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 231,
        "pokemon_name": "Phanpy"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Heavy Slam",
            "Play Rough",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Counter",
            "Mud Slap",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 232,
        "pokemon_name": "Donphan"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Hyper Beam",
            "Zap Cannon",
            "Tri Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Charge Beam",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 233,
        "pokemon_name": "Porygon2"
    },
    {
        "charged_moves": [
            "Stomp",
            "Wild Charge",
            "Megahorn"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 234,
        "pokemon_name": "Stantler"
    },
    {
        "charged_moves": [],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [],
        "form": "Normal",
        "pokemon_id": 235,
        "pokemon_name": "Smeargle"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Rock Slide",
            "Low Sweep"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 236,
        "pokemon_name": "Tyrogue"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Gyro Ball",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 237,
        "pokemon_name": "Hitmontop"
    },
    {
        "charged_moves": [
            "Ice Beam",
            "Ice Punch",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Frost Breath"
        ],
        "fast_moves": [
            "Powder Snow",
            "Pound"
        ],
        "form": "Normal",
        "pokemon_id": 238,
        "pokemon_name": "Smoochum"
    },
    {
        "charged_moves": [
            "Thunder Punch",
            "Brick Break",
            "Discharge"
        ],
        "elite_charged_moves": [
            "Thunderbolt"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 239,
        "pokemon_name": "Elekid"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Fire Punch",
            "Flame Burst"
        ],
        "elite_charged_moves": [
            "Flamethrower"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Karate Chop"
        ],
        "form": "Normal",
        "pokemon_id": 240,
        "pokemon_name": "Magby"
    },
    {
        "charged_moves": [
            "Stomp",
            "Body Slam",
            "Gyro Ball",
            "Thunderbolt",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 241,
        "pokemon_name": "Miltank"
    },
    {
        "charged_moves": [
            "Psychic",
            "Hyper Beam",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 242,
        "pokemon_name": "Blissey"
    },
    {
        "charged_moves": [
            "Thunder",
            "Thunderbolt",
            "Wild Charge",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Volt Switch"
        ],
        "form": "Normal",
        "pokemon_id": 243,
        "pokemon_name": "Raikou"
    },
    {
        "charged_moves": [
            "Thunder",
            "Thunderbolt",
            "Wild Charge",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Volt Switch"
        ],
        "form": "S",
        "pokemon_id": 243,
        "pokemon_name": "Raikou"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Fire Blast",
            "Overheat",
            "Iron Head",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 244,
        "pokemon_name": "Entei"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Fire Blast",
            "Overheat",
            "Iron Head",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Fire Fang"
        ],
        "form": "S",
        "pokemon_id": 244,
        "pokemon_name": "Entei"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Bubble Beam",
            "Water Pulse",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Hidden Power"
        ],
        "fast_moves": [
            "Extrasensory",
            "Snarl",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 245,
        "pokemon_name": "Suicune"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Bubble Beam",
            "Water Pulse",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Hidden Power"
        ],
        "fast_moves": [
            "Extrasensory",
            "Snarl",
            "Ice Fang"
        ],
        "form": "S",
        "pokemon_id": 245,
        "pokemon_name": "Suicune"
    },
    {
        "charged_moves": [
            "Stomp",
            "Crunch",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 246,
        "pokemon_name": "Larvitar"
    },
    {
        "charged_moves": [
            "Dig",
            "Crunch",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 247,
        "pokemon_name": "Pupitar"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Crunch",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Smack Down"
        ],
        "fast_moves": [
            "Bite",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 248,
        "pokemon_name": "Tyranitar"
    },
    {
        "charged_moves": [
            "Sky Attack",
            "Hydro Pump",
            "Futuresight"
        ],
        "elite_charged_moves": [
            "Aeroblast"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 249,
        "pokemon_name": "Lugia"
    },
    {
        "charged_moves": [
            "Sky Attack",
            "Hydro Pump",
            "Futuresight"
        ],
        "elite_charged_moves": [
            "Aeroblast"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Dragon Tail"
        ],
        "form": "S",
        "pokemon_id": 249,
        "pokemon_name": "Lugia"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Fire Blast",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Earthquake",
            "Sacred Fire"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Steel Wing",
            "Hidden Power",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 250,
        "pokemon_name": "Ho-Oh"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Fire Blast",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Earthquake",
            "Sacred Fire"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Steel Wing",
            "Hidden Power",
            "Incinerate"
        ],
        "form": "S",
        "pokemon_id": 250,
        "pokemon_name": "Ho-Oh"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Psychic",
            "Dazzling Gleam",
            "Seed Bomb",
            "Leaf Storm"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Magical Leaf"
        ],
        "fast_moves": [
            "Confusion",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 251,
        "pokemon_name": "Celebi"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Aerial Ace",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 252,
        "pokemon_name": "Treecko"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Aerial Ace",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 253,
        "pokemon_name": "Grovyle"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Aerial Ace",
            "Earthquake",
            "Dragon Claw"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 254,
        "pokemon_name": "Sceptile"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 255,
        "pokemon_name": "Torchic"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 256,
        "pokemon_name": "Combusken"
    },
    {
        "charged_moves": [
            "Focus Blast",
            "Overheat",
            "Brave Bird",
            "Blaze Kick"
        ],
        "elite_charged_moves": [
            "Blast Burn",
            "Stone Edge"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 257,
        "pokemon_name": "Blaziken"
    },
    {
        "charged_moves": [
            "Dig",
            "Sludge",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 258,
        "pokemon_name": "Mudkip"
    },
    {
        "charged_moves": [
            "Mud Bomb",
            "Sludge",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 259,
        "pokemon_name": "Marshtomp"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Sludge Wave",
            "Surf",
            "Muddy Water"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 260,
        "pokemon_name": "Swampert"
    },
    {
        "charged_moves": [
            "Crunch",
            "Dig",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 261,
        "pokemon_name": "Poochyena"
    },
    {
        "charged_moves": [
            "Crunch",
            "Play Rough",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Fire Fang",
            "Thunder Fang",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 262,
        "pokemon_name": "Mightyena"
    },
    {
        "charged_moves": [
            "Dig",
            "Body Slam",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Galarian",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon"
    },
    {
        "charged_moves": [
            "Dig",
            "Grass Knot",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon"
    },
    {
        "charged_moves": [
            "Dig",
            "Body Slam",
            "Gunk Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Lick"
        ],
        "form": "Galarian",
        "pokemon_id": 264,
        "pokemon_name": "Linoone"
    },
    {
        "charged_moves": [
            "Dig",
            "Grass Knot",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Shadow Claw",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 264,
        "pokemon_name": "Linoone"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 265,
        "pokemon_name": "Wurmple"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 266,
        "pokemon_name": "Silcoon"
    },
    {
        "charged_moves": [
            "Silver Wind",
            "Air Cutter",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 267,
        "pokemon_name": "Beautifly"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 268,
        "pokemon_name": "Cascoon"
    },
    {
        "charged_moves": [
            "Silver Wind",
            "Sludge Bomb",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 269,
        "pokemon_name": "Dustox"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 270,
        "pokemon_name": "Lotad"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Ice Beam",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 271,
        "pokemon_name": "Lombre"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Solar Beam",
            "Ice Beam",
            "Energy Ball",
            "Leaf Storm"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 272,
        "pokemon_name": "Ludicolo"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 273,
        "pokemon_name": "Seedot"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Grass Knot",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 274,
        "pokemon_name": "Nuzleaf"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Hurricane",
            "Foul Play",
            "Leaf Tornado"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Bullet Seed"
        ],
        "fast_moves": [
            "Razor Leaf",
            "Feint Attack",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 275,
        "pokemon_name": "Shiftry"
    },
    {
        "charged_moves": [
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 276,
        "pokemon_name": "Taillow"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Brave Bird",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 277,
        "pokemon_name": "Swellow"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Air Cutter",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 278,
        "pokemon_name": "Wingull"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Hurricane",
            "Blizzard",
            "Weather Ball Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 279,
        "pokemon_name": "Pelipper"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Disarming Voice",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 280,
        "pokemon_name": "Ralts"
    },
    {
        "charged_moves": [
            "Psychic",
            "Disarming Voice",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 281,
        "pokemon_name": "Kirlia"
    },
    {
        "charged_moves": [
            "Psychic",
            "Dazzling Gleam",
            "Shadow Ball"
        ],
        "elite_charged_moves": [
            "Synchronoise"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charge Beam",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 282,
        "pokemon_name": "Gardevoir"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Bubble Beam",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 283,
        "pokemon_name": "Surskit"
    },
    {
        "charged_moves": [
            "Air Cutter",
            "Ominous Wind",
            "Silver Wind",
            "Bubble Beam",
            "Lunge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Infestation",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 284,
        "pokemon_name": "Masquerain"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Grass Knot",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 285,
        "pokemon_name": "Shroomish"
    },
    {
        "charged_moves": [
            "Dynamic Punch",
            "Seed Bomb",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [
            "Grass Knot"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 286,
        "pokemon_name": "Breloom"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Night Slash",
            "Brick Break"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Yawn"
        ],
        "form": "Normal",
        "pokemon_id": 287,
        "pokemon_name": "Slakoth"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Bulldoze",
            "Brick Break"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 288,
        "pokemon_name": "Vigoroth"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Play Rough",
            "Earthquake"
        ],
        "elite_charged_moves": [
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Yawn"
        ],
        "form": "Normal",
        "pokemon_id": 289,
        "pokemon_name": "Slaking"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Bug Buzz",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 290,
        "pokemon_name": "Nincada"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Bug Buzz",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 291,
        "pokemon_name": "Ninjask"
    },
    {
        "charged_moves": [
            "Shadow Sneak",
            "Aerial Ace",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Struggle Bug"
        ],
        "fast_moves": [
            "Bug Bite",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 292,
        "pokemon_name": "Shedinja"
    },
    {
        "charged_moves": [
            "Stomp",
            "Disarming Voice",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 293,
        "pokemon_name": "Whismur"
    },
    {
        "charged_moves": [
            "Stomp",
            "Disarming Voice",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 294,
        "pokemon_name": "Loudred"
    },
    {
        "charged_moves": [
            "Crunch",
            "Disarming Voice",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 295,
        "pokemon_name": "Exploud"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Low Sweep",
            "Cross Chop"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 296,
        "pokemon_name": "Makuhita"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Close Combat",
            "Dynamic Punch",
            "Super Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Bullet Punch"
        ],
        "form": "Normal",
        "pokemon_id": 297,
        "pokemon_name": "Hariyama"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Ice Beam",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 298,
        "pokemon_name": "Azurill"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Rock Slide",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 299,
        "pokemon_name": "Nosepass"
    },
    {
        "charged_moves": [
            "Dig",
            "Disarming Voice",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 300,
        "pokemon_name": "Skitty"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Disarming Voice",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Zen Headbutt",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 301,
        "pokemon_name": "Delcatty"
    },
    {
        "charged_moves": [
            "Power Gem",
            "Foul Play",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Shadow Claw",
            "Feint Attack"
        ],
        "form": "Costume_2020",
        "pokemon_id": 302,
        "pokemon_name": "Sableye"
    },
    {
        "charged_moves": [
            "Power Gem",
            "Foul Play",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Shadow Claw",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 302,
        "pokemon_name": "Sableye"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Vice Grip",
            "Iron Head",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Astonish",
            "Ice Fang",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 303,
        "pokemon_name": "Mawile"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Rock Tomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 304,
        "pokemon_name": "Aron"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Rock Slide",
            "Heavy Slam",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 305,
        "pokemon_name": "Lairon"
    },
    {
        "charged_moves": [
            "Thunder",
            "Stone Edge",
            "Heavy Slam",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Iron Tail",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 306,
        "pokemon_name": "Aggron"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Psyshock",
            "Low Sweep"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 307,
        "pokemon_name": "Meditite"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Psychic",
            "Dynamic Punch",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 308,
        "pokemon_name": "Medicham"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Discharge",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 309,
        "pokemon_name": "Electrike"
    },
    {
        "charged_moves": [
            "Thunder",
            "Wild Charge",
            "Flame Burst",
            "Overheat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Charge Beam",
            "Thunder Fang"
        ],
        "form": "Normal",
        "pokemon_id": 310,
        "pokemon_name": "Manectric"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Discharge",
            "Swift",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 311,
        "pokemon_name": "Plusle"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Discharge",
            "Swift",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 312,
        "pokemon_name": "Minun"
    },
    {
        "charged_moves": [
            "Signal Beam",
            "Bug Buzz",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 313,
        "pokemon_name": "Volbeat"
    },
    {
        "charged_moves": [
            "Silver Wind",
            "Bug Buzz",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 314,
        "pokemon_name": "Illumise"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Sludge Bomb",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 315,
        "pokemon_name": "Roselia"
    },
    {
        "charged_moves": [
            "Sludge",
            "Gunk Shot",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 316,
        "pokemon_name": "Gulpin"
    },
    {
        "charged_moves": [
            "Gunk Shot",
            "Sludge Bomb",
            "Ice Beam",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 317,
        "pokemon_name": "Swalot"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Crunch",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 318,
        "pokemon_name": "Carvanha"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Crunch",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 319,
        "pokemon_name": "Sharpedo"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Water Pulse",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 320,
        "pokemon_name": "Wailmer"
    },
    {
        "charged_moves": [
            "Surf",
            "Blizzard",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 321,
        "pokemon_name": "Wailord"
    },
    {
        "charged_moves": [
            "Bulldoze",
            "Heat Wave",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 322,
        "pokemon_name": "Numel"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Overheat",
            "Solar Beam",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 323,
        "pokemon_name": "Camerupt"
    },
    {
        "charged_moves": [
            "Overheat",
            "Solar Beam",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 324,
        "pokemon_name": "Torkoal"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Shadow Ball",
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 325,
        "pokemon_name": "Spoink"
    },
    {
        "charged_moves": [
            "Psychic",
            "Shadow Ball",
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charge Beam",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 326,
        "pokemon_name": "Grumpig"
    },
    {
        "charged_moves": [
            "Dig",
            "Rock Tomb",
            "Icy Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Sucker Punch",
            "Psycho Cut"
        ],
        "form": "Normal",
        "pokemon_id": 327,
        "pokemon_name": "Spinda"
    },
    {
        "charged_moves": [
            "Sand Tomb",
            "Dig",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 328,
        "pokemon_name": "Trapinch"
    },
    {
        "charged_moves": [
            "Sand Tomb",
            "Bulldoze",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 329,
        "pokemon_name": "Vibrava"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Dragon Claw",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Earth Power"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 330,
        "pokemon_name": "Flygon"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Brick Break",
            "Seed Bomb",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 331,
        "pokemon_name": "Cacnea"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Dynamic Punch",
            "Grass Knot",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 332,
        "pokemon_name": "Cacturne"
    },
    {
        "charged_moves": [
            "Disarming Voice",
            "Aerial Ace",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 333,
        "pokemon_name": "Swablu"
    },
    {
        "charged_moves": [
            "Sky Attack",
            "Dazzling Gleam",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [
            "Moonblast"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 334,
        "pokemon_name": "Altaria"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Night Slash",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 335,
        "pokemon_name": "Zangoose"
    },
    {
        "charged_moves": [
            "Poison Fang",
            "Crunch",
            "Wrap"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 336,
        "pokemon_name": "Seviper"
    },
    {
        "charged_moves": [
            "Psychic",
            "Rock Slide",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 337,
        "pokemon_name": "Lunatone"
    },
    {
        "charged_moves": [
            "Psychic",
            "Rock Slide",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 338,
        "pokemon_name": "Solrock"
    },
    {
        "charged_moves": [
            "Aqua Tail",
            "Ice Beam",
            "Mud Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 339,
        "pokemon_name": "Barboach"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Blizzard",
            "Mud Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 340,
        "pokemon_name": "Whiscash"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "Bubble Beam",
            "Aqua Jet"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 341,
        "pokemon_name": "Corphish"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "Bubble Beam",
            "Night Slash",
            "Crabhammer"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 342,
        "pokemon_name": "Crawdaunt"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Psybeam",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 343,
        "pokemon_name": "Baltoy"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Psychic",
            "Earthquake",
            "Earth Power",
            "Ice Beam",
            "Shadow Ball",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Confusion",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 344,
        "pokemon_name": "Claydol"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Mirror Coat",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 345,
        "pokemon_name": "Lileep"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Bulldoze",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Infestation",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 346,
        "pokemon_name": "Cradily"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Aqua Jet",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 347,
        "pokemon_name": "Anorith"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Water Pulse",
            "Rock Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 348,
        "pokemon_name": "Armaldo"
    },
    {
        "charged_moves": [
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 349,
        "pokemon_name": "Feebas"
    },
    {
        "charged_moves": [
            "Surf",
            "Blizzard",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 350,
        "pokemon_name": "Milotic"
    },
    {
        "charged_moves": [
            "Hurricane",
            "Energy Ball",
            "Weather Ball Rock",
            "Weather Ball Normal"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Thunder",
            "Weather Ball Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Tackle"
        ],
        "form": "Rainy",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Ice Beam",
            "Weather Ball Ice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Tackle"
        ],
        "form": "Snowy",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Solar Beam",
            "Weather Ball Fire"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Tackle"
        ],
        "form": "Sunny",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Flamethrower",
            "Thunder",
            "Ice Beam",
            "Aerial Ace",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 352,
        "pokemon_name": "Kecleon"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Night Shade",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 353,
        "pokemon_name": "Shuppet"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dazzling Gleam",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 354,
        "pokemon_name": "Banette"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Night Shade",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 355,
        "pokemon_name": "Duskull"
    },
    {
        "charged_moves": [
            "Shadow Punch",
            "Ice Punch",
            "Fire Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 356,
        "pokemon_name": "Dusclops"
    },
    {
        "charged_moves": [
            "Stomp",
            "Aerial Ace",
            "Leaf Blade"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 357,
        "pokemon_name": "Tropius"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Shadow Ball",
            "Psyshock",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 358,
        "pokemon_name": "Chimecho"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Thunder",
            "Megahorn",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 359,
        "pokemon_name": "Absol"
    },
    {
        "charged_moves": [
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 360,
        "pokemon_name": "Wynaut"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Icy Wind",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 361,
        "pokemon_name": "Snorunt"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Gyro Ball",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Frost Breath"
        ],
        "form": "Normal",
        "pokemon_id": 362,
        "pokemon_name": "Glalie"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Body Slam",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 363,
        "pokemon_name": "Spheal"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Body Slam",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Powder Snow"
        ],
        "form": "Normal",
        "pokemon_id": 364,
        "pokemon_name": "Sealeo"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Earthquake",
            "Water Pulse"
        ],
        "elite_charged_moves": [
            "Icicle Spear"
        ],
        "elite_fast_moves": [
            "Powder Snow"
        ],
        "fast_moves": [
            "Waterfall",
            "Frost Breath"
        ],
        "form": "Normal",
        "pokemon_id": 365,
        "pokemon_name": "Walrein"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Ice Beam",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 366,
        "pokemon_name": "Clamperl"
    },
    {
        "charged_moves": [
            "Crunch",
            "Ice Beam",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 367,
        "pokemon_name": "Huntail"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Psychic",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 368,
        "pokemon_name": "Gorebyss"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Aqua Tail",
            "Hydro Pump"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 369,
        "pokemon_name": "Relicanth"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Water Pulse",
            "Aqua Jet"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Splash"
        ],
        "form": "Normal",
        "pokemon_id": 370,
        "pokemon_name": "Luvdisc"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Twister",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 371,
        "pokemon_name": "Bagon"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Dragon Pulse",
            "Twister"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 372,
        "pokemon_name": "Shelgon"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Hydro Pump",
            "Draco Meteor"
        ],
        "elite_charged_moves": [
            "Outrage"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Fire Fang",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 373,
        "pokemon_name": "Salamence"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 374,
        "pokemon_name": "Beldum"
    },
    {
        "charged_moves": [
            "Psychic",
            "Gyro Ball",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 375,
        "pokemon_name": "Metang"
    },
    {
        "charged_moves": [
            "Psychic",
            "Flash Cannon",
            "Earthquake"
        ],
        "elite_charged_moves": [
            "Meteor Mash"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Punch",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 376,
        "pokemon_name": "Metagross"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Zap Cannon",
            "Focus Blast"
        ],
        "elite_charged_moves": [
            "Earthquake"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Rock Smash",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 377,
        "pokemon_name": "Regirock"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Earthquake",
            "Focus Blast"
        ],
        "elite_charged_moves": [
            "Thunder"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Frost Breath",
            "Rock Smash",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 378,
        "pokemon_name": "Regice"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Hyper Beam",
            "Focus Blast"
        ],
        "elite_charged_moves": [
            "Zap Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Rock Smash",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 379,
        "pokemon_name": "Registeel"
    },
    {
        "charged_moves": [
            "Psychic",
            "Outrage",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Zen Headbutt",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 380,
        "pokemon_name": "Latias"
    },
    {
        "charged_moves": [
            "Psychic",
            "Dragon Claw",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 381,
        "pokemon_name": "Latios"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Thunder",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 382,
        "pokemon_name": "Kyogre"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Fire Blast",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Fire Punch"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 383,
        "pokemon_name": "Groudon"
    },
    {
        "charged_moves": [
            "Outrage",
            "Aerial Ace",
            "Ancient Power"
        ],
        "elite_charged_moves": [
            "Hurricane"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 384,
        "pokemon_name": "Rayquaza"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Psychic",
            "Doom Desire"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 385,
        "pokemon_name": "Jirachi"
    },
    {
        "charged_moves": [
            "Psycho Boost",
            "Zap Cannon",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Poison Jab"
        ],
        "form": "Attack",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
    },
    {
        "charged_moves": [
            "Psycho Boost",
            "Thunderbolt",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Counter"
        ],
        "form": "Defense",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
    },
    {
        "charged_moves": [
            "Psycho Boost",
            "Thunderbolt",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
    },
    {
        "charged_moves": [
            "Psycho Boost",
            "Thunderbolt",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Charge Beam"
        ],
        "form": "Speed",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 387,
        "pokemon_name": "Turtwig"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Solar Beam",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 388,
        "pokemon_name": "Grotle"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Solar Beam",
            "Earthquake",
            "Sand Tomb"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 389,
        "pokemon_name": "Torterra"
    },
    {
        "charged_moves": [
            "Flame Wheel",
            "Flamethrower",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 390,
        "pokemon_name": "Chimchar"
    },
    {
        "charged_moves": [
            "Flame Wheel",
            "Flamethrower",
            "Low Sweep"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 391,
        "pokemon_name": "Monferno"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Flamethrower",
            "Close Combat"
        ],
        "elite_charged_moves": [
            "Blast Burn"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 392,
        "pokemon_name": "Infernape"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Drill Peck",
            "Icy Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Pound"
        ],
        "form": "Normal",
        "pokemon_id": 393,
        "pokemon_name": "Piplup"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Hydro Pump",
            "Icy Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 394,
        "pokemon_name": "Prinplup"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Flash Cannon",
            "Drill Peck"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 395,
        "pokemon_name": "Empoleon"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 396,
        "pokemon_name": "Starly"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Brave Bird",
            "Heat Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 397,
        "pokemon_name": "Staravia"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Heat Wave",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 398,
        "pokemon_name": "Staraptor"
    },
    {
        "charged_moves": [
            "Hyper Fang",
            "Crunch",
            "Grass Knot"
        ],
        "elite_charged_moves": [
            "Shadow Ball",
            "Thunderbolt",
            "Ice Beam",
            "Super Power"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 399,
        "pokemon_name": "Bidoof"
    },
    {
        "charged_moves": [
            "Hyper Fang",
            "Hyper Beam",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 400,
        "pokemon_name": "Bibarel"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 401,
        "pokemon_name": "Kricketot"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "X Scissor",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 402,
        "pokemon_name": "Kricketune"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 403,
        "pokemon_name": "Shinx"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Wild Charge",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 404,
        "pokemon_name": "Luxio"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Wild Charge",
            "Crunch"
        ],
        "elite_charged_moves": [
            "Psychic Fangs"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Snarl",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 405,
        "pokemon_name": "Luxray"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 406,
        "pokemon_name": "Budew"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Sludge Bomb",
            "Dazzling Gleam",
            "Grass Knot",
            "Leaf Storm"
        ],
        "elite_charged_moves": [
            "Weather Ball Fire"
        ],
        "elite_fast_moves": [
            "Bullet Seed"
        ],
        "fast_moves": [
            "Poison Jab",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 407,
        "pokemon_name": "Roserade"
    },
    {
        "charged_moves": [
            "Rock Tomb",
            "Ancient Power",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 408,
        "pokemon_name": "Cranidos"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Outrage",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 409,
        "pokemon_name": "Rampardos"
    },
    {
        "charged_moves": [
            "Rock Tomb",
            "Ancient Power",
            "Heavy Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 410,
        "pokemon_name": "Shieldon"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Flamethrower",
            "Flash Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Smack Down",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 411,
        "pokemon_name": "Bastiodon"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Plant",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Sandy",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Trash",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Energy Ball",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Bug Bite"
        ],
        "form": "Plant",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Bulldoze",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Bug Bite"
        ],
        "form": "Sandy",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Iron Head",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Bug Bite"
        ],
        "form": "Trash",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Aerial Ace",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 414,
        "pokemon_name": "Mothim"
    },
    {
        "charged_moves": [
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 415,
        "pokemon_name": "Combee"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Power Gem",
            "X Scissor",
            "Fell Stinger",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Sting",
            "Fury Cutter",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 416,
        "pokemon_name": "Vespiquen"
    },
    {
        "charged_moves": [
            "Thunder",
            "Thunderbolt",
            "Thunder Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Volt Switch"
        ],
        "form": "Normal",
        "pokemon_id": 417,
        "pokemon_name": "Pachirisu"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Water Pulse",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 418,
        "pokemon_name": "Buizel"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Hydro Pump",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 419,
        "pokemon_name": "Floatzel"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 420,
        "pokemon_name": "Cherubi"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Hyper Beam",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bullet Seed"
        ],
        "form": "Overcast",
        "pokemon_id": 421,
        "pokemon_name": "Cherrim"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Hyper Beam",
            "Solar Beam",
            "Weather Ball Fire"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bullet Seed"
        ],
        "form": "Sunny",
        "pokemon_id": 421,
        "pokemon_name": "Cherrim"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Mud Bomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Hidden Power"
        ],
        "form": "East_sea",
        "pokemon_id": 422,
        "pokemon_name": "Shellos"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Mud Bomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Hidden Power"
        ],
        "form": "West_sea",
        "pokemon_id": 422,
        "pokemon_name": "Shellos"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Earth Power",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Hidden Power"
        ],
        "form": "East_sea",
        "pokemon_id": 423,
        "pokemon_name": "Gastrodon"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Earth Power",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Hidden Power"
        ],
        "form": "West_sea",
        "pokemon_id": 423,
        "pokemon_name": "Gastrodon"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Hyper Beam",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 424,
        "pokemon_name": "Ambipom"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Icy Wind",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 425,
        "pokemon_name": "Drifloon"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Icy Wind",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 426,
        "pokemon_name": "Drifblim"
    },
    {
        "charged_moves": [
            "Fire Punch",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 427,
        "pokemon_name": "Buneary"
    },
    {
        "charged_moves": [
            "Fire Punch",
            "Hyper Beam",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 428,
        "pokemon_name": "Lopunny"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Sucker Punch",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 429,
        "pokemon_name": "Mismagius"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Psychic",
            "Dark Pulse",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 430,
        "pokemon_name": "Honchkrow"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Thunderbolt",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 431,
        "pokemon_name": "Glameow"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Thunder",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 432,
        "pokemon_name": "Purugly"
    },
    {
        "charged_moves": [
            "Wrap",
            "Shadow Ball",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 433,
        "pokemon_name": "Chingling"
    },
    {
        "charged_moves": [
            "Crunch",
            "Flamethrower",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 434,
        "pokemon_name": "Stunky"
    },
    {
        "charged_moves": [
            "Crunch",
            "Flamethrower",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 435,
        "pokemon_name": "Skuntank"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Psyshock",
            "Heavy Slam",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 436,
        "pokemon_name": "Bronzor"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Psychic",
            "Heavy Slam",
            "Bulldoze",
            "Psyshock",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 437,
        "pokemon_name": "Bronzong"
    },
    {
        "charged_moves": [
            "Rock Tomb",
            "Earthquake",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 438,
        "pokemon_name": "Bonsly"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Pound"
        ],
        "form": "Normal",
        "pokemon_id": 439,
        "pokemon_name": "Mime Jr."
    },
    {
        "charged_moves": [
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 440,
        "pokemon_name": "Happiny"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Sky Attack",
            "Heat Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 441,
        "pokemon_name": "Chatot"
    },
    {
        "charged_moves": [
            "Shadow Sneak",
            "Ominous Wind",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 442,
        "pokemon_name": "Spiritomb"
    },
    {
        "charged_moves": [
            "Dig",
            "Twister",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 443,
        "pokemon_name": "Gible"
    },
    {
        "charged_moves": [
            "Dig",
            "Twister",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 444,
        "pokemon_name": "Gabite"
    },
    {
        "charged_moves": [
            "Outrage",
            "Earthquake",
            "Fire Blast",
            "Sand Tomb"
        ],
        "elite_charged_moves": [
            "Earth Power"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 445,
        "pokemon_name": "Garchomp"
    },
    {
        "charged_moves": [
            "Gunk Shot",
            "Body Slam",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Lick"
        ],
        "form": "Normal",
        "pokemon_id": 446,
        "pokemon_name": "Munchlax"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Low Sweep",
            "Cross Chop"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 447,
        "pokemon_name": "Riolu"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Shadow Ball",
            "Close Combat",
            "Power Up Punch",
            "Aura Sphere"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Bullet Punch"
        ],
        "form": "Normal",
        "pokemon_id": 448,
        "pokemon_name": "Lucario"
    },
    {
        "charged_moves": [
            "Dig",
            "Rock Tomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 449,
        "pokemon_name": "Hippopotas"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Stone Edge",
            "Body Slam",
            "Earth Power",
            "Weather Ball Rock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Fang",
            "Bite",
            "Thunder Fang",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 450,
        "pokemon_name": "Hippowdon"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Aqua Tail",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 451,
        "pokemon_name": "Skorupi"
    },
    {
        "charged_moves": [
            "Crunch",
            "Aqua Tail",
            "Sludge Bomb",
            "Fell Stinger"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Infestation",
            "Bite",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 452,
        "pokemon_name": "Drapion"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Low Sweep",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 453,
        "pokemon_name": "Croagunk"
    },
    {
        "charged_moves": [
            "Dynamic Punch",
            "Mud Bomb",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 454,
        "pokemon_name": "Toxicroak"
    },
    {
        "charged_moves": [
            "Power Whip",
            "Energy Ball",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 455,
        "pokemon_name": "Carnivine"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Ice Beam",
            "Silver Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 456,
        "pokemon_name": "Finneon"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Blizzard",
            "Silver Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 457,
        "pokemon_name": "Lumineon"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Ice Beam",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 458,
        "pokemon_name": "Mantyke"
    },
    {
        "charged_moves": [
            "Ice Beam",
            "Energy Ball",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Ice Shard"
        ],
        "form": "Normal",
        "pokemon_id": 459,
        "pokemon_name": "Snover"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Energy Ball",
            "Outrage",
            "Weather Ball Ice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 460,
        "pokemon_name": "Abomasnow"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Focus Blast",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Feint Attack",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 461,
        "pokemon_name": "Weavile"
    },
    {
        "charged_moves": [
            "Zap Cannon",
            "Wild Charge",
            "Flash Cannon",
            "Mirror Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 462,
        "pokemon_name": "Magnezone"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Earthquake",
            "Solar Beam",
            "Shadow Ball"
        ],
        "elite_charged_moves": [
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 463,
        "pokemon_name": "Lickilicky"
    },
    {
        "charged_moves": [
            "Surf",
            "Earthquake",
            "Stone Edge",
            "Skull Bash",
            "Super Power"
        ],
        "elite_charged_moves": [
            "Rock Wrecker"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 464,
        "pokemon_name": "Rhyperior"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Sludge Bomb",
            "Solar Beam",
            "Power Whip",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 465,
        "pokemon_name": "Tangrowth"
    },
    {
        "charged_moves": [
            "Thunder Punch",
            "Wild Charge",
            "Thunder",
            "Ice Punch"
        ],
        "elite_charged_moves": [
            "Flamethrower"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 466,
        "pokemon_name": "Electivire"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Fire Punch",
            "Fire Blast",
            "Psychic"
        ],
        "elite_charged_moves": [
            "Thunderbolt"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Karate Chop"
        ],
        "form": "Normal",
        "pokemon_id": 467,
        "pokemon_name": "Magmortar"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Dazzling Gleam",
            "Aerial Ace",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Hidden Power",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 468,
        "pokemon_name": "Togekiss"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Aerial Ace",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 469,
        "pokemon_name": "Yanmega"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Leaf Blade",
            "Energy Ball"
        ],
        "elite_charged_moves": [
            "Last Resort"
        ],
        "elite_fast_moves": [
            "Bullet Seed"
        ],
        "fast_moves": [
            "Razor Leaf",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 470,
        "pokemon_name": "Leafeon"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Icy Wind",
            "Ice Beam"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Water Pulse"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Frost Breath"
        ],
        "form": "Normal",
        "pokemon_id": 471,
        "pokemon_name": "Glaceon"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Aerial Ace",
            "Night Slash",
            "Sand Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 472,
        "pokemon_name": "Gliscor"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Bulldoze",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Ancient Power"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Powder Snow"
        ],
        "form": "Normal",
        "pokemon_id": 473,
        "pokemon_name": "Mamoswine"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Hyper Beam",
            "Zap Cannon",
            "Blizzard"
        ],
        "elite_charged_moves": [
            "Tri Attack"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Charge Beam",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 474,
        "pokemon_name": "Porygon-Z"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Psychic",
            "Leaf Blade"
        ],
        "elite_charged_moves": [
            "Synchronoise"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Low Kick",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 475,
        "pokemon_name": "Gallade"
    },
    {
        "charged_moves": [
            "Magnet Bomb",
            "Rock Slide",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 476,
        "pokemon_name": "Probopass"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Psychic",
            "Dark Pulse"
        ],
        "elite_charged_moves": [
            "Shadow Ball"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 477,
        "pokemon_name": "Dusknoir"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Crunch",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 478,
        "pokemon_name": "Froslass"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Air Slash"
        ],
        "form": "Fan",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Frost",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Overheat",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Heat",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Mow",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Wash",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Swift",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 480,
        "pokemon_name": "Uxie"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Swift",
            "Blizzard"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 481,
        "pokemon_name": "Mesprit"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Swift",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 482,
        "pokemon_name": "Azelf"
    },
    {
        "charged_moves": [
            "Draco Meteor",
            "Iron Head",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 483,
        "pokemon_name": "Dialga"
    },
    {
        "charged_moves": [
            "Draco Meteor",
            "Fire Blast",
            "Hydro Pump",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 484,
        "pokemon_name": "Palkia"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Iron Head",
            "Stone Edge",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 485,
        "pokemon_name": "Heatran"
    },
    {
        "charged_moves": [
            "Giga Impact",
            "Focus Blast",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 486,
        "pokemon_name": "Regigigas"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Ancient Power",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Shadow Claw"
        ],
        "form": "Altered",
        "pokemon_id": 487,
        "pokemon_name": "Giratina"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Ominous Wind",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Shadow Claw"
        ],
        "form": "Origin",
        "pokemon_id": 487,
        "pokemon_name": "Giratina"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Moonblast",
            "Futuresight"
        ],
        "elite_charged_moves": [
            "Grass Knot"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 488,
        "pokemon_name": "Cresselia"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Water Pulse",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 489,
        "pokemon_name": "Phione"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Psychic",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 490,
        "pokemon_name": "Manaphy"
    },
    {
        "charged_moves": [
            "Focus Blast",
            "Shadow Ball",
            "Dark Pulse"
        ],
        "elite_charged_moves": [
            "Sludge Bomb"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 491,
        "pokemon_name": "Darkrai"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Zen Headbutt"
        ],
        "form": "Land",
        "pokemon_id": 492,
        "pokemon_name": "Shaymin"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Zen Headbutt"
        ],
        "form": "Sky",
        "pokemon_id": 492,
        "pokemon_name": "Shaymin"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Bug",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Dark",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Dragon",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Electric",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Fairy",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Fighting",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Fire",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Flying",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Ghost",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Grass",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Ground",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Ice",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Poison",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Psychic",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Rock",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Steel",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Water",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Overheat",
            "Focus Blast",
            "Psychic",
            "V Create"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 494,
        "pokemon_name": "Victini"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Wrap"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 495,
        "pokemon_name": "Snivy"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Leaf Tornado",
            "Wrap"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 496,
        "pokemon_name": "Servine"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Leaf Tornado",
            "Aerial Ace"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 497,
        "pokemon_name": "Serperior"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 498,
        "pokemon_name": "Tepig"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 499,
        "pokemon_name": "Pignite"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Rock Slide",
            "Focus Blast",
            "Flame Charge"
        ],
        "elite_charged_moves": [
            "Blast Burn"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 500,
        "pokemon_name": "Emboar"
    },
    {
        "charged_moves": [
            "Aqua Tail",
            "Water Pulse",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 501,
        "pokemon_name": "Oshawott"
    },
    {
        "charged_moves": [
            "Aqua Tail",
            "Water Pulse",
            "X Scissor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 502,
        "pokemon_name": "Dewott"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Megahorn",
            "Razor Shell"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 503,
        "pokemon_name": "Samurott"
    },
    {
        "charged_moves": [
            "Dig",
            "Hyper Fang",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 504,
        "pokemon_name": "Patrat"
    },
    {
        "charged_moves": [
            "Crunch",
            "Hyper Fang",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 505,
        "pokemon_name": "Watchog"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Rock Tomb",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 506,
        "pokemon_name": "Lillipup"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Play Rough",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 507,
        "pokemon_name": "Herdier"
    },
    {
        "charged_moves": [
            "Wild Charge",
            "Play Rough",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Take Down",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 508,
        "pokemon_name": "Stoutland"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Play Rough",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 509,
        "pokemon_name": "Purrloin"
    },
    {
        "charged_moves": [
            "Gunk Shot",
            "Play Rough",
            "Dark Pulse",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 510,
        "pokemon_name": "Liepard"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 511,
        "pokemon_name": "Pansage"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Grass Knot",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 512,
        "pokemon_name": "Simisage"
    },
    {
        "charged_moves": [
            "Flame Burst",
            "Flame Charge",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 513,
        "pokemon_name": "Pansear"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Fire Blast",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 514,
        "pokemon_name": "Simisear"
    },
    {
        "charged_moves": [
            "Surf",
            "Water Pulse",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 515,
        "pokemon_name": "Panpour"
    },
    {
        "charged_moves": [
            "Surf",
            "Hydro Pump",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 516,
        "pokemon_name": "Simipour"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Dazzling Gleam",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 517,
        "pokemon_name": "Munna"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Dazzling Gleam",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 518,
        "pokemon_name": "Musharna"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Aerial Ace",
            "Air Cutter"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 519,
        "pokemon_name": "Pidove"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Aerial Ace",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 520,
        "pokemon_name": "Tranquill"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Hyper Beam",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 521,
        "pokemon_name": "Unfezant"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Discharge",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 522,
        "pokemon_name": "Blitzle"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Discharge",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 523,
        "pokemon_name": "Zebstrika"
    },
    {
        "charged_moves": [
            "Bulldoze",
            "Rock Blast",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 524,
        "pokemon_name": "Roggenrola"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Bulldoze",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 525,
        "pokemon_name": "Boldore"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Solar Beam",
            "Super Power",
            "Heavy Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 526,
        "pokemon_name": "Gigalith"
    },
    {
        "charged_moves": [
            "Air Cutter",
            "Aerial Ace",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 527,
        "pokemon_name": "Woobat"
    },
    {
        "charged_moves": [
            "Psychic",
            "Aerial Ace",
            "Futuresight"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 528,
        "pokemon_name": "Swoobat"
    },
    {
        "charged_moves": [
            "Rock Tomb",
            "Dig",
            "Drill Run"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 529,
        "pokemon_name": "Drilbur"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Earthquake",
            "Drill Run",
            "Iron Head"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Mud Slap",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 530,
        "pokemon_name": "Excadrill"
    },
    {
        "charged_moves": [
            "Disarming Voice",
            "Dazzling Gleam",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 531,
        "pokemon_name": "Audino"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Brick Break",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Pound"
        ],
        "form": "Normal",
        "pokemon_id": 532,
        "pokemon_name": "Timburr"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Brick Break",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 533,
        "pokemon_name": "Gurdurr"
    },
    {
        "charged_moves": [
            "Dynamic Punch",
            "Focus Blast",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 534,
        "pokemon_name": "Conkeldurr"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Mud Bomb",
            "Sludge Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 535,
        "pokemon_name": "Tympole"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Earth Power",
            "Sludge Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 536,
        "pokemon_name": "Palpitoad"
    },
    {
        "charged_moves": [
            "Muddy Water",
            "Earth Power",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 537,
        "pokemon_name": "Seismitoad"
    },
    {
        "charged_moves": [
            "Focus Blast",
            "Low Sweep",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 538,
        "pokemon_name": "Throh"
    },
    {
        "charged_moves": [
            "Focus Blast",
            "Low Sweep",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 539,
        "pokemon_name": "Sawk"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Silver Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 540,
        "pokemon_name": "Sewaddle"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Bug Buzz",
            "Silver Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 541,
        "pokemon_name": "Swadloon"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "X Scissor",
            "Silver Wind",
            "Leaf Storm"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 542,
        "pokemon_name": "Leavanny"
    },
    {
        "charged_moves": [
            "Signal Beam",
            "Sludge Bomb",
            "Gyro Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 543,
        "pokemon_name": "Venipede"
    },
    {
        "charged_moves": [
            "Signal Beam",
            "Sludge Bomb",
            "Gyro Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 544,
        "pokemon_name": "Whirlipede"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Sludge Bomb",
            "Gyro Ball",
            "X Scissor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 545,
        "pokemon_name": "Scolipede"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 546,
        "pokemon_name": "Cottonee"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Hurricane",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 547,
        "pokemon_name": "Whimsicott"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 548,
        "pokemon_name": "Petilil"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Hyper Beam",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 549,
        "pokemon_name": "Lilligant"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Aqua Tail",
            "Muddy Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Water Gun"
        ],
        "form": "Blue_striped",
        "pokemon_id": 550,
        "pokemon_name": "Basculin"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Aqua Tail",
            "Muddy Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Water Gun"
        ],
        "form": "Red_striped",
        "pokemon_id": 550,
        "pokemon_name": "Basculin"
    },
    {
        "charged_moves": [
            "Dig",
            "Crunch",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 551,
        "pokemon_name": "Sandile"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Crunch",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 552,
        "pokemon_name": "Krokorok"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Crunch",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 553,
        "pokemon_name": "Krookodile"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ice Fang"
        ],
        "form": "Galarian",
        "pokemon_id": 554,
        "pokemon_name": "Darumaka"
    },
    {
        "charged_moves": [
            "Fire Punch",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 554,
        "pokemon_name": "Darumaka"
    },
    {
        "charged_moves": [
            "Overheat",
            "Avalanche",
            "Super Power",
            "Ice Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ice Fang"
        ],
        "form": "Galarian_standard",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
    },
    {
        "charged_moves": [
            "Overheat",
            "Avalanche",
            "Super Power",
            "Ice Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ice Fang"
        ],
        "form": "Galarian_zen",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
    },
    {
        "charged_moves": [
            "Overheat",
            "Focus Blast",
            "Psychic",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Fire Fang",
            "Incinerate"
        ],
        "form": "Standard",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
    },
    {
        "charged_moves": [
            "Overheat",
            "Focus Blast",
            "Psychic",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Fire Fang",
            "Incinerate"
        ],
        "form": "Zen",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Petal Blizzard",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 556,
        "pokemon_name": "Maractus"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "X Scissor",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Cut",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 557,
        "pokemon_name": "Dwebble"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "X Scissor",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 558,
        "pokemon_name": "Crustle"
    },
    {
        "charged_moves": [
            "Acid Spray",
            "Brick Break",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 559,
        "pokemon_name": "Scraggy"
    },
    {
        "charged_moves": [
            "Acid Spray",
            "Power Up Punch",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 560,
        "pokemon_name": "Scrafty"
    },
    {
        "charged_moves": [
            "Air Cutter",
            "Psybeam",
            "Ancient Power",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 561,
        "pokemon_name": "Sigilyph"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish"
        ],
        "form": "Galarian",
        "pokemon_id": 562,
        "pokemon_name": "Yamask"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Ominous Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 562,
        "pokemon_name": "Yamask"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Zen Headbutt",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 563,
        "pokemon_name": "Cofagrigus"
    },
    {
        "charged_moves": [
            "Surf",
            "Ancient Power",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 564,
        "pokemon_name": "Tirtouga"
    },
    {
        "charged_moves": [
            "Surf",
            "Ancient Power",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 565,
        "pokemon_name": "Carracosta"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Ancient Power",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 566,
        "pokemon_name": "Archen"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Ancient Power",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Steel Wing",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 567,
        "pokemon_name": "Archeops"
    },
    {
        "charged_moves": [
            "Gunk Shot",
            "Seed Bomb",
            "Gunk Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 568,
        "pokemon_name": "Trubbish"
    },
    {
        "charged_moves": [
            "Acid Spray",
            "Seed Bomb",
            "Gunk Shot",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Infestation",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 569,
        "pokemon_name": "Garbodor"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Aerial Ace",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 570,
        "pokemon_name": "Zorua"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Sludge Bomb",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Shadow Claw",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 571,
        "pokemon_name": "Zoroark"
    },
    {
        "charged_moves": [
            "Swift",
            "Thunderbolt",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 572,
        "pokemon_name": "Minccino"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Thunderbolt",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 573,
        "pokemon_name": "Cinccino"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psyshock",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 574,
        "pokemon_name": "Gothita"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Futuresight",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 575,
        "pokemon_name": "Gothorita"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Futuresight",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 576,
        "pokemon_name": "Gothitelle"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Night Shade",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 577,
        "pokemon_name": "Solosis"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Night Shade",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 578,
        "pokemon_name": "Duosion"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Shadow Ball",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 579,
        "pokemon_name": "Reuniclus"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Bubble Beam",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 580,
        "pokemon_name": "Ducklett"
    },
    {
        "charged_moves": [
            "Ice Beam",
            "Bubble Beam",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 581,
        "pokemon_name": "Swanna"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Ice Beam",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 582,
        "pokemon_name": "Vanillite"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Ice Beam",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Frost Breath",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 583,
        "pokemon_name": "Vanillish"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Flash Cannon",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Frost Breath",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 584,
        "pokemon_name": "Vanilluxe"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Autumn",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Spring",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Summer",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Winter",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Solar Beam",
            "Wild Charge",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Take Down"
        ],
        "form": "Autumn",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Solar Beam",
            "Wild Charge",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Take Down"
        ],
        "form": "Spring",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Solar Beam",
            "Wild Charge",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Take Down"
        ],
        "form": "Summer",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Solar Beam",
            "Wild Charge",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Take Down"
        ],
        "form": "Winter",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
    },
    {
        "charged_moves": [
            "Discharge",
            "Aerial Ace",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 587,
        "pokemon_name": "Emolga"
    },
    {
        "charged_moves": [
            "Signal Beam",
            "X Scissor",
            "Drill Run",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 588,
        "pokemon_name": "Karrablast"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Acid Spray",
            "Drill Run",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 589,
        "pokemon_name": "Escavalier"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Body Slam",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 590,
        "pokemon_name": "Foongus"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Sludge Bomb",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 591,
        "pokemon_name": "Amoonguss"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Ice Beam",
            "Ominous Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Hex"
        ],
        "form": "Female",
        "pokemon_id": 592,
        "pokemon_name": "Frillish"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Ice Beam",
            "Ominous Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 592,
        "pokemon_name": "Frillish"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Ice Beam",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Hex"
        ],
        "form": "Female",
        "pokemon_id": 593,
        "pokemon_name": "Jellicent"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Ice Beam",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 593,
        "pokemon_name": "Jellicent"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 594,
        "pokemon_name": "Alomomola"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Bug Buzz",
            "Discharge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charge Beam",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 595,
        "pokemon_name": "Joltik"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Bug Buzz",
            "Discharge",
            "Energy Ball",
            "Lunge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Volt Switch",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 596,
        "pokemon_name": "Galvantula"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Flash Cannon",
            "Iron Head"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 597,
        "pokemon_name": "Ferroseed"
    },
    {
        "charged_moves": [
            "Power Whip",
            "Flash Cannon",
            "Acid Spray",
            "Thunder",
            "Mirror Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 598,
        "pokemon_name": "Ferrothorn"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "Discharge",
            "Zap Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Volt Switch",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 599,
        "pokemon_name": "Klink"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "Thunderbolt",
            "Zap Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 600,
        "pokemon_name": "Klang"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Flash Cannon",
            "Zap Cannon",
            "Mirror Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 601,
        "pokemon_name": "Klinklang"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 602,
        "pokemon_name": "Tynamo"
    },
    {
        "charged_moves": [
            "Crunch",
            "Thunderbolt",
            "Discharge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 603,
        "pokemon_name": "Eelektrik"
    },
    {
        "charged_moves": [
            "Crunch",
            "Thunderbolt",
            "Acid Spray",
            "Dragon Claw"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 604,
        "pokemon_name": "Eelektross"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 605,
        "pokemon_name": "Elgyem"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 606,
        "pokemon_name": "Beheeyem"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flame Burst",
            "Heat Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 607,
        "pokemon_name": "Litwick"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Flame Burst",
            "Heat Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 608,
        "pokemon_name": "Lampent"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Shadow Ball",
            "Overheat",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Fire Spin",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 609,
        "pokemon_name": "Chandelure"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Aqua Tail",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 610,
        "pokemon_name": "Axew"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Aqua Tail",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 611,
        "pokemon_name": "Fraxure"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Surf",
            "Night Slash",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 612,
        "pokemon_name": "Haxorus"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Icy Wind",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 613,
        "pokemon_name": "Cubchoo"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Icy Wind",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Charm"
        ],
        "form": "Winter_2020",
        "pokemon_id": 613,
        "pokemon_name": "Cubchoo"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Surf",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 614,
        "pokemon_name": "Beartic"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Night Slash",
            "Solar Beam",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Frost Breath"
        ],
        "form": "Normal",
        "pokemon_id": 615,
        "pokemon_name": "Cryogonal"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Body Slam",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 616,
        "pokemon_name": "Shelmet"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Acid Spray",
            "Signal Beam",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 617,
        "pokemon_name": "Accelgor"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Flash Cannon",
            "Muddy Water",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Metal Claw"
        ],
        "form": "Galarian",
        "pokemon_id": 618,
        "pokemon_name": "Stunfisk"
    },
    {
        "charged_moves": [
            "Mud Bomb",
            "Discharge",
            "Muddy Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 618,
        "pokemon_name": "Stunfisk"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Low Sweep",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Pound"
        ],
        "form": "Normal",
        "pokemon_id": 619,
        "pokemon_name": "Mienfoo"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Grass Knot",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 620,
        "pokemon_name": "Mienshao"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Night Slash",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 621,
        "pokemon_name": "Druddigon"
    },
    {
        "charged_moves": [
            "Shadow Punch",
            "Brick Break",
            "Night Shade"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 622,
        "pokemon_name": "Golett"
    },
    {
        "charged_moves": [
            "Shadow Punch",
            "Dynamic Punch",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 623,
        "pokemon_name": "Golurk"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Iron Head",
            "X Scissor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 624,
        "pokemon_name": "Pawniard"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Iron Head",
            "X Scissor",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 625,
        "pokemon_name": "Bisharp"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Stomp",
            "Skull Bash",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 626,
        "pokemon_name": "Bouffalant"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Brave Bird",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 627,
        "pokemon_name": "Rufflet"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Brave Bird",
            "Rock Slide",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Steel Wing",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 628,
        "pokemon_name": "Braviary"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Brave Bird",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 629,
        "pokemon_name": "Vullaby"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Aerial Ace",
            "Foul Play",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 630,
        "pokemon_name": "Mandibuzz"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Thunder Punch",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 631,
        "pokemon_name": "Heatmor"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Iron Head",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 632,
        "pokemon_name": "Durant"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Crunch",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 633,
        "pokemon_name": "Deino"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Dark Pulse",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 634,
        "pokemon_name": "Zweilous"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Dark Pulse",
            "Flash Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 635,
        "pokemon_name": "Hydreigon"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Bug Buzz",
            "Flame Wheel"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 636,
        "pokemon_name": "Larvesta"
    },
    {
        "charged_moves": [
            "Overheat",
            "Bug Buzz",
            "Solar Beam",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 637,
        "pokemon_name": "Volcarona"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Iron Head",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Sacred Sword"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 638,
        "pokemon_name": "Cobalion"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Earthquake",
            "Rock Slide"
        ],
        "elite_charged_moves": [
            "Sacred Sword"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Smack Down",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 639,
        "pokemon_name": "Terrakion"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Leaf Blade",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Sacred Sword"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 640,
        "pokemon_name": "Virizion"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Dark Pulse",
            "Hyper Beam",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Air Slash"
        ],
        "form": "Incarnate",
        "pokemon_id": 641,
        "pokemon_name": "Tornadus"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Psychic",
            "Focus Blast",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Gust"
        ],
        "form": "Therian",
        "pokemon_id": 641,
        "pokemon_name": "Tornadus"
    },
    {
        "charged_moves": [
            "Crunch",
            "Thunder",
            "Brick Break",
            "Thunder Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Incarnate",
        "pokemon_id": 642,
        "pokemon_name": "Thundurus"
    },
    {
        "charged_moves": [
            "Sludge Wave",
            "Thunder",
            "Focus Blast",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Volt Switch"
        ],
        "form": "Therian",
        "pokemon_id": 642,
        "pokemon_name": "Thundurus"
    },
    {
        "charged_moves": [
            "Crunch",
            "Overheat",
            "Draco Meteor",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 643,
        "pokemon_name": "Reshiram"
    },
    {
        "charged_moves": [
            "Outrage",
            "Wild Charge",
            "Flash Cannon",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 644,
        "pokemon_name": "Zekrom"
    },
    {
        "charged_moves": [
            "Earth Power",
            "Outrage",
            "Rock Slide",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Rock Throw"
        ],
        "form": "Incarnate",
        "pokemon_id": 645,
        "pokemon_name": "Landorus"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Bulldoze",
            "Stone Edge",
            "Super Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Extrasensory"
        ],
        "form": "Therian",
        "pokemon_id": 645,
        "pokemon_name": "Landorus"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Blizzard",
            "Stone Edge",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Shadow Claw"
        ],
        "form": "Black",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Blizzard",
            "Draco Meteor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Blizzard",
            "Ancient Power",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Steel Wing"
        ],
        "form": "White",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Close Combat",
            "Hydro Pump",
            "X Scissor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Low Kick"
        ],
        "form": "Ordinary",
        "pokemon_id": 647,
        "pokemon_name": "Keldeo"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Close Combat",
            "Hydro Pump",
            "X Scissor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Low Kick"
        ],
        "form": "Resolute",
        "pokemon_id": 647,
        "pokemon_name": "Keldeo"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Thunderbolt",
            "Dazzling Gleam",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Confusion"
        ],
        "form": "Aria",
        "pokemon_id": 648,
        "pokemon_name": "Meloetta"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Fire Punch",
            "Ice Punch",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Low Kick"
        ],
        "form": "Pirouette",
        "pokemon_id": 648,
        "pokemon_name": "Meloetta"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Magnet Bomb",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Fury Cutter"
        ],
        "form": "Burn",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Magnet Bomb",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Fury Cutter"
        ],
        "form": "Chill",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Magnet Bomb",
            "Gunk Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Fury Cutter"
        ],
        "form": "Douse",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Magnet Bomb",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Magnet Bomb",
            "Zap Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Fury Cutter"
        ],
        "form": "Shock",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Seed Bomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 650,
        "pokemon_name": "Chespin"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Energy Ball",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 651,
        "pokemon_name": "Quilladin"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Energy Ball",
            "Super Power",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Vine Whip",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 652,
        "pokemon_name": "Chesnaught"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Flamethrower",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 653,
        "pokemon_name": "Fennekin"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Flamethrower",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 654,
        "pokemon_name": "Braixen"
    },
    {
        "charged_moves": [
            "Psychic",
            "Flamethrower",
            "Flame Charge",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Fire Spin",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 655,
        "pokemon_name": "Delphox"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Aerial Ace",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 656,
        "pokemon_name": "Froakie"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Aerial Ace",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 657,
        "pokemon_name": "Frogadier"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Aerial Ace",
            "Surf",
            "Hydro Pump"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 658,
        "pokemon_name": "Greninja"
    },
    {
        "charged_moves": [
            "Dig",
            "Bulldoze",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 659,
        "pokemon_name": "Bunnelby"
    },
    {
        "charged_moves": [
            "Dig",
            "Hyper Beam",
            "Earthquake",
            "Fire Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 660,
        "pokemon_name": "Diggersby"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Heat Wave",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 661,
        "pokemon_name": "Fletchling"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Heat Wave",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Ember",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 662,
        "pokemon_name": "Fletchinder"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Fire Blast",
            "Flame Charge",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Incinerate"
        ],
        "fast_moves": [
            "Peck",
            "Fire Spin",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 663,
        "pokemon_name": "Talonflame"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 664,
        "pokemon_name": "Scatterbug"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 665,
        "pokemon_name": "Spewpa"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Aerial Ace",
            "Energy Ball",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Gust",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 666,
        "pokemon_name": "Vivillon"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Fang",
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 667,
        "pokemon_name": "Litleo"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Solar Beam",
            "Dark Pulse",
            "Overheat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Fang",
            "Take Down"
        ],
        "form": "Female",
        "pokemon_id": 668,
        "pokemon_name": "Pyroar"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Solar Beam",
            "Dark Pulse",
            "Overheat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Fang",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 668,
        "pokemon_name": "Pyroar"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Blue",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Orange",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Red",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "White",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Yellow",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Blue",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Orange",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Red",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "White",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Yellow",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Petal Blizzard",
            "Psychic",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Blue",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Petal Blizzard",
            "Psychic",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Orange",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Petal Blizzard",
            "Psychic",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Red",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Petal Blizzard",
            "Psychic",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle",
            "Razor Leaf"
        ],
        "form": "White",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Petal Blizzard",
            "Psychic",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Yellow",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Rock Slide",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 672,
        "pokemon_name": "Skiddo"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Rock Slide",
            "Leaf Blade",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Rock Smash",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 673,
        "pokemon_name": "Gogoat"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Crunch",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 674,
        "pokemon_name": "Pancham"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Night Slash",
            "Iron Head",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Snarl",
            "Bullet Punch"
        ],
        "form": "Normal",
        "pokemon_id": 675,
        "pokemon_name": "Pangoro"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Dandy",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Debutante",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Diamond",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Heart",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Kabuki",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "La_reine",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Matron",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Natural",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Pharaoh",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Star",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Energy Ball",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 677,
        "pokemon_name": "Espurr"
    },
    {
        "charged_moves": [
            "Psychic",
            "Energy Ball",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charm"
        ],
        "form": "Female",
        "pokemon_id": 678,
        "pokemon_name": "Meowstic"
    },
    {
        "charged_moves": [
            "Psychic",
            "Energy Ball",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 678,
        "pokemon_name": "Meowstic"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Gyro Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 679,
        "pokemon_name": "Honedge"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Gyro Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 680,
        "pokemon_name": "Doublade"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Gyro Ball",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 681,
        "pokemon_name": "Aegislash"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 682,
        "pokemon_name": "Spritzee"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Thunderbolt",
            "Psychic",
            "Draining Kiss"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 683,
        "pokemon_name": "Aromatisse"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 684,
        "pokemon_name": "Swirlix"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Energy Ball",
            "Flamethrower",
            "Draining Kiss"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 685,
        "pokemon_name": "Slurpuff"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 686,
        "pokemon_name": "Inkay"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Foul Play",
            "Super Power",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Psycho Cut"
        ],
        "form": "Normal",
        "pokemon_id": 687,
        "pokemon_name": "Malamar"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Cross Chop",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 688,
        "pokemon_name": "Binacle"
    },
    {
        "charged_moves": [
            "Skull Bash",
            "Cross Chop",
            "Stone Edge",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Slap",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 689,
        "pokemon_name": "Barbaracle"
    },
    {
        "charged_moves": [
            "Aqua Tail",
            "Water Pulse",
            "Twister",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 690,
        "pokemon_name": "Skrelp"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Aqua Tail",
            "Outrage",
            "Gunk Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Acid",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 691,
        "pokemon_name": "Dragalge"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Crabhammer",
            "Aqua Jet"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 692,
        "pokemon_name": "Clauncher"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Dark Pulse",
            "Ice Beam",
            "Crabhammer"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 693,
        "pokemon_name": "Clawitzer"
    },
    {
        "charged_moves": [
            "Parabolic Charge",
            "Bulldoze",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 694,
        "pokemon_name": "Helioptile"
    },
    {
        "charged_moves": [
            "Parabolic Charge",
            "Bulldoze",
            "Thunderbolt",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Volt Switch",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 695,
        "pokemon_name": "Heliolisk"
    },
    {
        "charged_moves": [
            "Stomp",
            "Ancient Power",
            "Dragon Claw"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 696,
        "pokemon_name": "Tyrunt"
    },
    {
        "charged_moves": [
            "Crunch",
            "Stone Edge",
            "Outrage",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Charm",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 697,
        "pokemon_name": "Tyrantrum"
    },
    {
        "charged_moves": [
            "Weather Ball Ice",
            "Ancient Power",
            "Aurora Beam",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Frost Breath"
        ],
        "form": "Normal",
        "pokemon_id": 698,
        "pokemon_name": "Amaura"
    },
    {
        "charged_moves": [
            "Weather Ball Ice",
            "Ancient Power",
            "Blizzard",
            "Thunderbolt",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Frost Breath",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 699,
        "pokemon_name": "Aurorus"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Dazzling Gleam",
            "Draining Kiss"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Psyshock"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 700,
        "pokemon_name": "Sylveon"
    },
    {
        "charged_moves": [
            "Flying Press",
            "Sky Attack",
            "X Scissor",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Low Kick",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 701,
        "pokemon_name": "Hawlucha"
    },
    {
        "charged_moves": [
            "Discharge",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 702,
        "pokemon_name": "Dedenne"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Moonblast",
            "Power Gem"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 703,
        "pokemon_name": "Carbink"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Sludge Wave",
            "Muddy Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 704,
        "pokemon_name": "Goomy"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Sludge Wave",
            "Muddy Water",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 705,
        "pokemon_name": "Sliggoo"
    },
    {
        "charged_moves": [
            "Draco Meteor",
            "Sludge Wave",
            "Muddy Water",
            "Power Whip"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 706,
        "pokemon_name": "Goodra"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Play Rough",
            "Draining Kiss",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 707,
        "pokemon_name": "Klefki"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 708,
        "pokemon_name": "Phantump"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Shadow Claw",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 709,
        "pokemon_name": "Trevenant"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Shadow Sneak",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Razor Leaf"
        ],
        "form": "Average",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Shadow Sneak",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Razor Leaf"
        ],
        "form": "Large",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Shadow Sneak",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Razor Leaf"
        ],
        "form": "Small",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Shadow Sneak",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Razor Leaf"
        ],
        "form": "Super",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Razor Leaf"
        ],
        "form": "Average",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Razor Leaf"
        ],
        "form": "Large",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Razor Leaf"
        ],
        "form": "Small",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Razor Leaf"
        ],
        "form": "Super",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
    },
    {
        "charged_moves": [
            "Crunch",
            "Icy Wind",
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 712,
        "pokemon_name": "Bergmite"
    },
    {
        "charged_moves": [
            "Crunch",
            "Avalanche",
            "Earthquake",
            "Body Slam",
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 713,
        "pokemon_name": "Avalugg"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Air Cutter",
            "Heat Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 714,
        "pokemon_name": "Noibat"
    },
    {
        "charged_moves": [
            "Draco Meteor",
            "Hurricane",
            "Heat Wave",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 715,
        "pokemon_name": "Noivern"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Megahorn",
            "Close Combat",
            "Giga Impact",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 716,
        "pokemon_name": "Xerneas"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Hurricane",
            "Focus Blast",
            "Hyper Beam",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Sucker Punch",
            "Snarl",
            "Gust"
        ],
        "form": "Normal",
        "pokemon_id": 717,
        "pokemon_name": "Yveltal"
    },
    {
        "charged_moves": [
            "Outrage",
            "Earthquake",
            "Crunch",
            "Hyper Beam",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Bite",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 718,
        "pokemon_name": "Zygarde"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Moonblast",
            "Power Gem"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 719,
        "pokemon_name": "Diancie"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Psybeam",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Astonish"
        ],
        "form": "Confined",
        "pokemon_id": 720,
        "pokemon_name": "Hoopa"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Astonish"
        ],
        "form": "Unbound",
        "pokemon_id": 720,
        "pokemon_name": "Hoopa"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Overheat",
            "Earth Power",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Incinerate",
            "Water Gun",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 721,
        "pokemon_name": "Volcanion"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 722,
        "pokemon_name": "Rowlet"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Energy Ball",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 723,
        "pokemon_name": "Dartrix"
    },
    {
        "charged_moves": [
            "Shadow Sneak",
            "Energy Ball",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 724,
        "pokemon_name": "Decidueye"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Flame Charge",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 725,
        "pokemon_name": "Litten"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Flame Charge",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 726,
        "pokemon_name": "Torracat"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Flame Charge",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 727,
        "pokemon_name": "Incineroar"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Water Pulse",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 728,
        "pokemon_name": "Popplio"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Water Pulse",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 729,
        "pokemon_name": "Brionne"
    },
    {
        "charged_moves": [
            "Psychic",
            "Hydro Pump",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 730,
        "pokemon_name": "Primarina"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Aerial Ace",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 731,
        "pokemon_name": "Pikipek"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Rock Blast",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 732,
        "pokemon_name": "Trumbeak"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Rock Blast",
            "Flash Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Rock Smash",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 733,
        "pokemon_name": "Toucannon"
    },
    {
        "charged_moves": [
            "Hyper Fang",
            "Crunch",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 734,
        "pokemon_name": "Yungoos"
    },
    {
        "charged_moves": [
            "Hyper Fang",
            "Crunch",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 735,
        "pokemon_name": "Gumshoos"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 736,
        "pokemon_name": "Grubbin"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 737,
        "pokemon_name": "Charjabug"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 738,
        "pokemon_name": "Vikavolt"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 739,
        "pokemon_name": "Crabrawler"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 740,
        "pokemon_name": "Crabominable"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 742,
        "pokemon_name": "Cutiefly"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 743,
        "pokemon_name": "Ribombee"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Rock Tomb",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 744,
        "pokemon_name": "Rockruff"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Dusk",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Drill Run",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Sucker Punch",
            "Rock Throw"
        ],
        "form": "Midday",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Psychic Fangs",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Rock Throw"
        ],
        "form": "Midnight",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "School",
        "pokemon_id": 746,
        "pokemon_name": "Wishiwashi"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Solo",
        "pokemon_id": 746,
        "pokemon_name": "Wishiwashi"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 747,
        "pokemon_name": "Mareanie"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 748,
        "pokemon_name": "Toxapex"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 749,
        "pokemon_name": "Mudbray"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 750,
        "pokemon_name": "Mudsdale"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 751,
        "pokemon_name": "Dewpider"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 752,
        "pokemon_name": "Araquanid"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 753,
        "pokemon_name": "Fomantis"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 754,
        "pokemon_name": "Lurantis"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 755,
        "pokemon_name": "Morelull"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 756,
        "pokemon_name": "Shiinotic"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 757,
        "pokemon_name": "Salandit"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 758,
        "pokemon_name": "Salazzle"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 759,
        "pokemon_name": "Stufful"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 760,
        "pokemon_name": "Bewear"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 761,
        "pokemon_name": "Bounsweet"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 762,
        "pokemon_name": "Steenee"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 763,
        "pokemon_name": "Tsareena"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Grass Knot",
            "Draining Kiss"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 764,
        "pokemon_name": "Comfey"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 765,
        "pokemon_name": "Oranguru"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 766,
        "pokemon_name": "Passimian"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 767,
        "pokemon_name": "Wimpod"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 768,
        "pokemon_name": "Golisopod"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 769,
        "pokemon_name": "Sandygast"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 770,
        "pokemon_name": "Palossand"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 771,
        "pokemon_name": "Pyukumuku"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 772,
        "pokemon_name": "Type: Null"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Bug",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Dark",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Dragon",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Electric",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Fairy",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Fighting",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Fire",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Flying",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Ghost",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Grass",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Ground",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Ice",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Poison",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Psychic",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Rock",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Steel",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Water",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Blue",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Green",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Indigo",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Meteor",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Orange",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Red",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Violet",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Yellow",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 775,
        "pokemon_name": "Komala"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 776,
        "pokemon_name": "Turtonator"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 777,
        "pokemon_name": "Togedemaru"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Busted",
        "pokemon_id": 778,
        "pokemon_name": "Mimikyu"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Disguised",
        "pokemon_id": 778,
        "pokemon_name": "Mimikyu"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 779,
        "pokemon_name": "Bruxish"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 780,
        "pokemon_name": "Drampa"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 781,
        "pokemon_name": "Dhelmise"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Brick Break",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 782,
        "pokemon_name": "Jangmo-o"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Brick Break",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 783,
        "pokemon_name": "Hakamo-o"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Close Combat",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 784,
        "pokemon_name": "Kommo-o"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Dazzling Gleam",
            "Brave Bird",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Volt Switch",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 785,
        "pokemon_name": "Tapu Koko"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 786,
        "pokemon_name": "Tapu Lele"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 787,
        "pokemon_name": "Tapu Bulu"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 788,
        "pokemon_name": "Tapu Fini"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 789,
        "pokemon_name": "Cosmog"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 790,
        "pokemon_name": "Cosmoem"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 791,
        "pokemon_name": "Solgaleo"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 792,
        "pokemon_name": "Lunala"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 793,
        "pokemon_name": "Nihilego"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 794,
        "pokemon_name": "Buzzwole"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 795,
        "pokemon_name": "Pheromosa"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 796,
        "pokemon_name": "Xurkitree"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 797,
        "pokemon_name": "Celesteela"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 798,
        "pokemon_name": "Kartana"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 799,
        "pokemon_name": "Guzzlord"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Dawn_wings",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Dusk_mane",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Ultra",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 801,
        "pokemon_name": "Magearna"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Original_color",
        "pokemon_id": 801,
        "pokemon_name": "Magearna"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 802,
        "pokemon_name": "Marshadow"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 803,
        "pokemon_name": "Poipole"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 804,
        "pokemon_name": "Naganadel"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 805,
        "pokemon_name": "Stakataka"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 806,
        "pokemon_name": "Blacephalon"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 807,
        "pokemon_name": "Zeraora"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 808,
        "pokemon_name": "Meltan"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Thunderbolt",
            "Hyper Beam",
            "Rock Slide",
            "Super Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 809,
        "pokemon_name": "Melmetal"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 810,
        "pokemon_name": "Grookey"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 811,
        "pokemon_name": "Thwackey"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 812,
        "pokemon_name": "Rillaboom"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 813,
        "pokemon_name": "Scorbunny"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 814,
        "pokemon_name": "Raboot"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 815,
        "pokemon_name": "Cinderace"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 816,
        "pokemon_name": "Sobble"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 817,
        "pokemon_name": "Drizzile"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Surf",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 818,
        "pokemon_name": "Inteleon"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 819,
        "pokemon_name": "Skwovet"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 820,
        "pokemon_name": "Greedent"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 821,
        "pokemon_name": "Rookidee"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 822,
        "pokemon_name": "Corvisquire"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Brave Bird",
            "Iron Head"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Steel Wing",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 823,
        "pokemon_name": "Corviknight"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 824,
        "pokemon_name": "Blipbug"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 825,
        "pokemon_name": "Dottler"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 826,
        "pokemon_name": "Orbeetle"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 827,
        "pokemon_name": "Nickit"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 828,
        "pokemon_name": "Thievul"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 829,
        "pokemon_name": "Gossifleur"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 830,
        "pokemon_name": "Eldegoss"
    },
    {
        "charged_moves": [
            "Wild Charge",
            "Payback",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 831,
        "pokemon_name": "Wooloo"
    },
    {
        "charged_moves": [
            "Wild Charge",
            "Payback",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 832,
        "pokemon_name": "Dubwool"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 833,
        "pokemon_name": "Chewtle"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Surf",
            "Rock Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 834,
        "pokemon_name": "Drednaw"
    },
    {
        "charged_moves": [
            "Crunch",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 835,
        "pokemon_name": "Yamper"
    },
    {
        "charged_moves": [
            "Crunch",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 836,
        "pokemon_name": "Boltund"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Smack Down",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 837,
        "pokemon_name": "Rolycoly"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Rock Slide",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Smack Down",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 838,
        "pokemon_name": "Carkol"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Rock Slide",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Smack Down",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 839,
        "pokemon_name": "Coalossal"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 840,
        "pokemon_name": "Applin"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Fly",
            "Outrage",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 841,
        "pokemon_name": "Flapple"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Energy Ball",
            "Outrage",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 842,
        "pokemon_name": "Appletun"
    },
    {
        "charged_moves": [
            "Dig",
            "Bulldoze",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 843,
        "pokemon_name": "Silicobra"
    },
    {
        "charged_moves": [
            "Dig",
            "Bulldoze",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 844,
        "pokemon_name": "Sandaconda"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Fly",
            "Hydro Pump"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 845,
        "pokemon_name": "Cramorant"
    },
    {
        "charged_moves": [
            "Crunch",
            "Aqua Jet",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Bite",
            "Peck"
        ],
        "form": "Normal",
        "pokemon_id": 846,
        "pokemon_name": "Arrokuda"
    },
    {
        "charged_moves": [
            "Crunch",
            "Aqua Jet",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Bite",
            "Peck"
        ],
        "form": "Normal",
        "pokemon_id": 847,
        "pokemon_name": "Barraskewda"
    },
    {
        "charged_moves": [
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 848,
        "pokemon_name": "Toxel"
    },
    {
        "charged_moves": [
            "Acid Spray",
            "Discharge",
            "Wild Charge",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Spark",
            "Poison Jab"
        ],
        "form": "Amped",
        "pokemon_id": 849,
        "pokemon_name": "Toxtricity"
    },
    {
        "charged_moves": [
            "Acid Spray",
            "Discharge",
            "Wild Charge",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Spark",
            "Poison Jab"
        ],
        "form": "Low_key",
        "pokemon_id": 849,
        "pokemon_name": "Toxtricity"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Bug Buzz",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 850,
        "pokemon_name": "Sizzlipede"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Bug Buzz",
            "Crunch",
            "Lunge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 851,
        "pokemon_name": "Centiskorch"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Super Power",
            "Ice Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 852,
        "pokemon_name": "Clobbopus"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Super Power",
            "Ice Punch",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 853,
        "pokemon_name": "Grapploct"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Sucker Punch"
        ],
        "form": "Antique",
        "pokemon_id": 854,
        "pokemon_name": "Sinistea"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Sucker Punch"
        ],
        "form": "Phony",
        "pokemon_id": 854,
        "pokemon_name": "Sinistea"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Sucker Punch",
            "Hex"
        ],
        "form": "Antique",
        "pokemon_id": 855,
        "pokemon_name": "Polteageist"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Sucker Punch",
            "Hex"
        ],
        "form": "Phony",
        "pokemon_id": 855,
        "pokemon_name": "Polteageist"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 856,
        "pokemon_name": "Hatenna"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 857,
        "pokemon_name": "Hattrem"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Dazzling Gleam",
            "Power Whip"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charm",
            "Psycho Cut"
        ],
        "form": "Normal",
        "pokemon_id": 858,
        "pokemon_name": "Hatterene"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Dark Pulse",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 859,
        "pokemon_name": "Impidimp"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Dark Pulse",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 860,
        "pokemon_name": "Morgrem"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Dark Pulse",
            "Play Rough",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Sucker Punch",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 861,
        "pokemon_name": "Grimmsnarl"
    },
    {
        "charged_moves": [
            "Cross Chop",
            "Night Slash",
            "Hyper Beam",
            "Gunk Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Lick"
        ],
        "form": "Galarian",
        "pokemon_id": 862,
        "pokemon_name": "Obstagoon"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Close Combat",
            "Play Rough",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Shadow Claw"
        ],
        "form": "Galarian",
        "pokemon_id": 863,
        "pokemon_name": "Perrserker"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Brine",
            "Night Shade",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 864,
        "pokemon_name": "Cursola"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Brave Bird",
            "Leaf Blade",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Fury Cutter"
        ],
        "form": "Galarian",
        "pokemon_id": 865,
        "pokemon_name": "Sirfetch\u2019d"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Ice Punch",
            "Icy Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Zen Headbutt",
            "Ice Shard"
        ],
        "form": "Galarian",
        "pokemon_id": 866,
        "pokemon_name": "Mr. Rime"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Sand Tomb",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish"
        ],
        "form": "Galarian",
        "pokemon_id": 867,
        "pokemon_name": "Runerigus"
    },
    {
        "charged_moves": [
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 868,
        "pokemon_name": "Milcery"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Psyshock",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 869,
        "pokemon_name": "Alcremie"
    },
    {
        "charged_moves": [
            "Super Power",
            "Brick Break",
            "Megahorn"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 870,
        "pokemon_name": "Falinks"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Water Gun",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 871,
        "pokemon_name": "Pincurchin"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 872,
        "pokemon_name": "Snom"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Bug Buzz",
            "Ice Beam",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 873,
        "pokemon_name": "Frosmoth"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Rock Slide",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 874,
        "pokemon_name": "Stonjourner"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Weather Ball Ice",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow"
        ],
        "form": "Ice",
        "pokemon_id": 875,
        "pokemon_name": "Eiscue"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Weather Ball Ice",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow"
        ],
        "form": "Noice",
        "pokemon_id": 875,
        "pokemon_name": "Eiscue"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory"
        ],
        "form": "Female",
        "pokemon_id": 876,
        "pokemon_name": "Indeedee"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory"
        ],
        "form": "Male",
        "pokemon_id": 876,
        "pokemon_name": "Indeedee"
    },
    {
        "charged_moves": [
            "Crunch",
            "Payback",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Bite"
        ],
        "form": "Full_belly",
        "pokemon_id": 877,
        "pokemon_name": "Morpeko"
    },
    {
        "charged_moves": [
            "Crunch",
            "Payback",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Bite"
        ],
        "form": "Hangry",
        "pokemon_id": 877,
        "pokemon_name": "Morpeko"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Dig",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 878,
        "pokemon_name": "Cufant"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Dig",
            "Play Rough",
            "Heavy Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 879,
        "pokemon_name": "Copperajah"
    },
    {
        "charged_moves": [
            "Discharge",
            "Dragon Pulse",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 880,
        "pokemon_name": "Dracozolt"
    },
    {
        "charged_moves": [
            "Discharge",
            "Avalanche",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 881,
        "pokemon_name": "Arctozolt"
    },
    {
        "charged_moves": [
            "Brine",
            "Dragon Pulse",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 882,
        "pokemon_name": "Dracovish"
    },
    {
        "charged_moves": [
            "Brine",
            "Avalanche",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 883,
        "pokemon_name": "Arctovish"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Dragon Claw",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 884,
        "pokemon_name": "Duraludon"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 885,
        "pokemon_name": "Dreepy"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Shadow Ball",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 886,
        "pokemon_name": "Drakloak"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Shadow Ball",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 887,
        "pokemon_name": "Dragapult"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Iron Head",
            "Wild Charge",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Snarl",
            "Quick Attack",
            "Fire Fang"
        ],
        "form": "Crowned_sword",
        "pokemon_id": 888,
        "pokemon_name": "Zacian"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Iron Head",
            "Wild Charge",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Snarl",
            "Quick Attack",
            "Fire Fang"
        ],
        "form": "Hero",
        "pokemon_id": 888,
        "pokemon_name": "Zacian"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Iron Head",
            "Crunch",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Snarl",
            "Quick Attack",
            "Ice Fang"
        ],
        "form": "Crowned_shield",
        "pokemon_id": 889,
        "pokemon_name": "Zamazenta"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Iron Head",
            "Crunch",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Snarl",
            "Quick Attack",
            "Ice Fang"
        ],
        "form": "Hero",
        "pokemon_id": 889,
        "pokemon_name": "Zamazenta"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Dragon Pulse",
            "Flamethrower",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Poison Jab"
        ],
        "form": "Eternamax",
        "pokemon_id": 890,
        "pokemon_name": "Eternatus"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Dragon Pulse",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 890,
        "pokemon_name": "Eternatus"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Dynamic Punch",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 891,
        "pokemon_name": "Kubfu"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Dynamic Punch",
            "Close Combat",
            "Aqua Jet"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Counter",
            "Waterfall"
        ],
        "form": "Rapid_strike",
        "pokemon_id": 892,
        "pokemon_name": "Urshifu"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Dynamic Punch",
            "Close Combat",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Counter",
            "Sucker Punch"
        ],
        "form": "Single_strike",
        "pokemon_id": 892,
        "pokemon_name": "Urshifu"
    },
    {
        "charged_moves": [
            "Power Whip",
            "Energy Ball",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 893,
        "pokemon_name": "Zarude"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Thunder",
            "Zap Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 894,
        "pokemon_name": "Regieleki"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Outrage",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 895,
        "pokemon_name": "Regidrago"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Icy Wind",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 896,
        "pokemon_name": "Glastrier"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Foul Play",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 897,
        "pokemon_name": "Spectrier"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Psychic",
            "Energy Ball",
            "Avalanche"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Take Down"
        ],
        "form": "Ice_rider",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Psychic",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Psychic",
            "Energy Ball",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Take Down"
        ],
        "form": "Shadow_rider",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex"
    }
]

// http://PoGoApi.net/api/v1/pokemon_types.json
// Returns a JSON array where each element is a dict containing 
// - Pokemon ID, 
// - Pokemon_name,
// - type (an array of one or two items)
// and optionally the form.

const POKEMON_TYPE = [
    {
        "form": "Fall_2019",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur",
        "type": [
            "Grass",
            "Poison"
        ]
},
    {
        "form": "Normal",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 2,
        "pokemon_name": "Ivysaur",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Copy_2019",
        "pokemon_id": 3,
        "pokemon_name": "Venusaur",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 3,
        "pokemon_name": "Venusaur",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Fall_2019",
        "pokemon_id": 4,
        "pokemon_name": "Charmander",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 4,
        "pokemon_name": "Charmander",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 5,
        "pokemon_name": "Charmeleon",
        "type": [
"Fire"
]
},
    {
        "form": "Copy_2019",
        "pokemon_id": 6,
        "pokemon_name": "Charizard",
        "type": [
"Fire",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 6,
        "pokemon_name": "Charizard",
        "type": [
"Fire",
"Flying"
]
},
    {
        "form": "Fall_2019",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 8,
        "pokemon_name": "Wartortle",
        "type": [
"Water"
]
},
    {
        "form": "Copy_2019",
        "pokemon_id": 9,
        "pokemon_name": "Blastoise",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 9,
        "pokemon_name": "Blastoise",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 10,
        "pokemon_name": "Caterpie",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 11,
        "pokemon_name": "Metapod",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 12,
        "pokemon_name": "Butterfree",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 13,
        "pokemon_name": "Weedle",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 14,
        "pokemon_name": "Kakuna",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 15,
        "pokemon_name": "Beedrill",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 16,
        "pokemon_name": "Pidgey",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 17,
        "pokemon_name": "Pidgeotto",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 18,
        "pokemon_name": "Pidgeot",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Alola",
        "pokemon_id": 19,
        "pokemon_name": "Rattata",
        "type": [
"Dark",
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 19,
        "pokemon_name": "Rattata",
        "type": [
"Normal"
]
},
    {
        "form": "Alola",
        "pokemon_id": 20,
        "pokemon_name": "Raticate",
        "type": [
"Dark",
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 20,
        "pokemon_name": "Raticate",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 21,
        "pokemon_name": "Spearow",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 22,
        "pokemon_name": "Fearow",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 23,
        "pokemon_name": "Ekans",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 24,
        "pokemon_name": "Arbok",
        "type": [
"Poison"
]
},
    {
        "form": "Adventure_hat_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Copy_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Costume_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Fall_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Flying_5th_anniv",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Kariyushi",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Pop_star",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Rock_star",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Vs_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Winter_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu",
        "type": [
"Electric"
]
},
    {
        "form": "Alola",
        "pokemon_id": 26,
        "pokemon_name": "Raichu",
        "type": [
"Electric",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 26,
        "pokemon_name": "Raichu",
        "type": [
"Electric"
]
},
    {
        "form": "Alola",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew",
        "type": [
"Ice",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew",
        "type": [
"Ground"
]
},
    {
        "form": "Alola",
        "pokemon_id": 28,
        "pokemon_name": "Sandslash",
        "type": [
"Ice",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 28,
        "pokemon_name": "Sandslash",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 29,
        "pokemon_name": "Nidoran\u2640",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 30,
        "pokemon_name": "Nidorina",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 31,
        "pokemon_name": "Nidoqueen",
        "type": [
"Poison",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 32,
        "pokemon_name": "Nidoran\u2642",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 33,
        "pokemon_name": "Nidorino",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 34,
        "pokemon_name": "Nidoking",
        "type": [
"Poison",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 35,
        "pokemon_name": "Clefairy",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 36,
        "pokemon_name": "Clefable",
        "type": [
"Fairy"
]
},
    {
        "form": "Alola",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix",
        "type": [
"Fire"
]
},
    {
        "form": "Alola",
        "pokemon_id": 38,
        "pokemon_name": "Ninetales",
        "type": [
"Ice",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 38,
        "pokemon_name": "Ninetales",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 39,
        "pokemon_name": "Jigglypuff",
        "type": [
"Normal",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 40,
        "pokemon_name": "Wigglytuff",
        "type": [
"Normal",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 41,
        "pokemon_name": "Zubat",
        "type": [
"Poison",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 42,
        "pokemon_name": "Golbat",
        "type": [
"Poison",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 43,
        "pokemon_name": "Oddish",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 44,
        "pokemon_name": "Gloom",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 45,
        "pokemon_name": "Vileplume",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 46,
        "pokemon_name": "Paras",
        "type": [
"Bug",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 47,
        "pokemon_name": "Parasect",
        "type": [
"Bug",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 48,
        "pokemon_name": "Venonat",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 49,
        "pokemon_name": "Venomoth",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Alola",
        "pokemon_id": 50,
        "pokemon_name": "Diglett",
        "type": [
"Ground",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 50,
        "pokemon_name": "Diglett",
        "type": [
"Ground"
]
},
    {
        "form": "Alola",
        "pokemon_id": 51,
        "pokemon_name": "Dugtrio",
        "type": [
"Ground",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 51,
        "pokemon_name": "Dugtrio",
        "type": [
"Ground"
]
},
    {
        "form": "Alola",
        "pokemon_id": 52,
        "pokemon_name": "Meowth",
        "type": [
"Dark"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 52,
        "pokemon_name": "Meowth",
        "type": [
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 52,
        "pokemon_name": "Meowth",
        "type": [
"Normal"
]
},
    {
        "form": "Alola",
        "pokemon_id": 53,
        "pokemon_name": "Persian",
        "type": [
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 53,
        "pokemon_name": "Persian",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 54,
        "pokemon_name": "Psyduck",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 55,
        "pokemon_name": "Golduck",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 56,
        "pokemon_name": "Mankey",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 57,
        "pokemon_name": "Primeape",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 58,
        "pokemon_name": "Growlithe",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 59,
        "pokemon_name": "Arcanine",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 60,
        "pokemon_name": "Poliwag",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 61,
        "pokemon_name": "Poliwhirl",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 62,
        "pokemon_name": "Poliwrath",
        "type": [
"Water",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 63,
        "pokemon_name": "Abra",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 64,
        "pokemon_name": "Kadabra",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 65,
        "pokemon_name": "Alakazam",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 66,
        "pokemon_name": "Machop",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 67,
        "pokemon_name": "Machoke",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 68,
        "pokemon_name": "Machamp",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 69,
        "pokemon_name": "Bellsprout",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 70,
        "pokemon_name": "Weepinbell",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 71,
        "pokemon_name": "Victreebel",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 72,
        "pokemon_name": "Tentacool",
        "type": [
"Water",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 73,
        "pokemon_name": "Tentacruel",
        "type": [
"Water",
"Poison"
]
},
    {
        "form": "Alola",
        "pokemon_id": 74,
        "pokemon_name": "Geodude",
        "type": [
"Rock",
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 74,
        "pokemon_name": "Geodude",
        "type": [
"Rock",
"Ground"
]
},
    {
        "form": "Alola",
        "pokemon_id": 75,
        "pokemon_name": "Graveler",
        "type": [
"Rock",
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 75,
        "pokemon_name": "Graveler",
        "type": [
"Rock",
"Ground"
]
},
    {
        "form": "Alola",
        "pokemon_id": 76,
        "pokemon_name": "Golem",
        "type": [
"Rock",
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 76,
        "pokemon_name": "Golem",
        "type": [
"Rock",
"Ground"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta",
        "type": [
"Fire"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 78,
        "pokemon_name": "Rapidash",
        "type": [
"Psychic",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 78,
        "pokemon_name": "Rapidash",
        "type": [
"Fire"
]
},
    {
        "form": "2020",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke",
        "type": [
"Water",
"Psychic"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke",
        "type": [
"Water",
"Psychic"
]
},
    {
        "form": "2021",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro",
        "type": [
"Water",
"Psychic"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro",
        "type": [
"Poison",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro",
        "type": [
"Water",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 81,
        "pokemon_name": "Magnemite",
        "type": [
"Electric",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 82,
        "pokemon_name": "Magneton",
        "type": [
"Electric",
"Steel"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 83,
        "pokemon_name": "Farfetch\u2019d",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 83,
        "pokemon_name": "Farfetch\u2019d",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 84,
        "pokemon_name": "Doduo",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 85,
        "pokemon_name": "Dodrio",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 86,
        "pokemon_name": "Seel",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 87,
        "pokemon_name": "Dewgong",
        "type": [
"Water",
"Ice"
]
},
    {
        "form": "Alola",
        "pokemon_id": 88,
        "pokemon_name": "Grimer",
        "type": [
"Poison",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 88,
        "pokemon_name": "Grimer",
        "type": [
"Poison"
]
},
    {
        "form": "Alola",
        "pokemon_id": 89,
        "pokemon_name": "Muk",
        "type": [
"Poison",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 89,
        "pokemon_name": "Muk",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 90,
        "pokemon_name": "Shellder",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 91,
        "pokemon_name": "Cloyster",
        "type": [
"Water",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 92,
        "pokemon_name": "Gastly",
        "type": [
"Ghost",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 93,
        "pokemon_name": "Haunter",
        "type": [
"Ghost",
"Poison"
]
},
    {
        "form": "Costume_2020",
        "pokemon_id": 94,
        "pokemon_name": "Gengar",
        "type": [
"Ghost",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 94,
        "pokemon_name": "Gengar",
        "type": [
"Ghost",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 95,
        "pokemon_name": "Onix",
        "type": [
"Rock",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 96,
        "pokemon_name": "Drowzee",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 97,
        "pokemon_name": "Hypno",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 98,
        "pokemon_name": "Krabby",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 99,
        "pokemon_name": "Kingler",
        "type": [
"Water"
]
},
    {
        "form": "Hisuian",
        "pokemon_id": 100,
        "pokemon_name": "Voltorb",
        "type": [
"Electric",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 100,
        "pokemon_name": "Voltorb",
        "type": [
"Electric"
]
},
    {
        "form": "Hisuian",
        "pokemon_id": 101,
        "pokemon_name": "Electrode",
        "type": [
"Electric",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 101,
        "pokemon_name": "Electrode",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 102,
        "pokemon_name": "Exeggcute",
        "type": [
"Grass",
"Psychic"
]
},
    {
        "form": "Alola",
        "pokemon_id": 103,
        "pokemon_name": "Exeggutor",
        "type": [
"Grass",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 103,
        "pokemon_name": "Exeggutor",
        "type": [
"Grass",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 104,
        "pokemon_name": "Cubone",
        "type": [
"Ground"
]
},
    {
        "form": "Alola",
        "pokemon_id": 105,
        "pokemon_name": "Marowak",
        "type": [
"Fire",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 105,
        "pokemon_name": "Marowak",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 106,
        "pokemon_name": "Hitmonlee",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 107,
        "pokemon_name": "Hitmonchan",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 108,
        "pokemon_name": "Lickitung",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 109,
        "pokemon_name": "Koffing",
        "type": [
"Poison"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 110,
        "pokemon_name": "Weezing",
        "type": [
"Poison",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 110,
        "pokemon_name": "Weezing",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 111,
        "pokemon_name": "Rhyhorn",
        "type": [
"Ground",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 112,
        "pokemon_name": "Rhydon",
        "type": [
"Ground",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 113,
        "pokemon_name": "Chansey",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 114,
        "pokemon_name": "Tangela",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 115,
        "pokemon_name": "Kangaskhan",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 116,
        "pokemon_name": "Horsea",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 117,
        "pokemon_name": "Seadra",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 118,
        "pokemon_name": "Goldeen",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 119,
        "pokemon_name": "Seaking",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 120,
        "pokemon_name": "Staryu",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 121,
        "pokemon_name": "Starmie",
        "type": [
"Water",
"Psychic"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 122,
        "pokemon_name": "Mr. Mime",
        "type": [
"Ice",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 122,
        "pokemon_name": "Mr. Mime",
        "type": [
"Psychic",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 123,
        "pokemon_name": "Scyther",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 124,
        "pokemon_name": "Jynx",
        "type": [
"Ice",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 125,
        "pokemon_name": "Electabuzz",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 126,
        "pokemon_name": "Magmar",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 127,
        "pokemon_name": "Pinsir",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 128,
        "pokemon_name": "Tauros",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 129,
        "pokemon_name": "Magikarp",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 130,
        "pokemon_name": "Gyarados",
        "type": [
"Water",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 131,
        "pokemon_name": "Lapras",
        "type": [
"Water",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 132,
        "pokemon_name": "Ditto",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 133,
        "pokemon_name": "Eevee",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 134,
        "pokemon_name": "Vaporeon",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 135,
        "pokemon_name": "Jolteon",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 136,
        "pokemon_name": "Flareon",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 137,
        "pokemon_name": "Porygon",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 138,
        "pokemon_name": "Omanyte",
        "type": [
"Rock",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 139,
        "pokemon_name": "Omastar",
        "type": [
"Rock",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 140,
        "pokemon_name": "Kabuto",
        "type": [
"Rock",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 141,
        "pokemon_name": "Kabutops",
        "type": [
"Rock",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 142,
        "pokemon_name": "Aerodactyl",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 143,
        "pokemon_name": "Snorlax",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 144,
        "pokemon_name": "Articuno",
        "type": [
"Ice",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 145,
        "pokemon_name": "Zapdos",
        "type": [
"Electric",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 146,
        "pokemon_name": "Moltres",
        "type": [
"Fire",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 147,
        "pokemon_name": "Dratini",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 148,
        "pokemon_name": "Dragonair",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 149,
        "pokemon_name": "Dragonite",
        "type": [
"Dragon",
"Flying"
]
},
    {
        "form": "A",
        "pokemon_id": 150,
        "pokemon_name": "Mewtwo",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 150,
        "pokemon_name": "Mewtwo",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 151,
        "pokemon_name": "Mew",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 152,
        "pokemon_name": "Chikorita",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 153,
        "pokemon_name": "Bayleef",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 154,
        "pokemon_name": "Meganium",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 155,
        "pokemon_name": "Cyndaquil",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 156,
        "pokemon_name": "Quilava",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 157,
        "pokemon_name": "Typhlosion",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 158,
        "pokemon_name": "Totodile",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 159,
        "pokemon_name": "Croconaw",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 160,
        "pokemon_name": "Feraligatr",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 161,
        "pokemon_name": "Sentret",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 162,
        "pokemon_name": "Furret",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 163,
        "pokemon_name": "Hoothoot",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 164,
        "pokemon_name": "Noctowl",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 165,
        "pokemon_name": "Ledyba",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 166,
        "pokemon_name": "Ledian",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 167,
        "pokemon_name": "Spinarak",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 168,
        "pokemon_name": "Ariados",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 169,
        "pokemon_name": "Crobat",
        "type": [
"Poison",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 170,
        "pokemon_name": "Chinchou",
        "type": [
"Water",
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 171,
        "pokemon_name": "Lanturn",
        "type": [
"Water",
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 172,
        "pokemon_name": "Pichu",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 173,
        "pokemon_name": "Cleffa",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 174,
        "pokemon_name": "Igglybuff",
        "type": [
"Normal",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 175,
        "pokemon_name": "Togepi",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 176,
        "pokemon_name": "Togetic",
        "type": [
"Fairy",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 177,
        "pokemon_name": "Natu",
        "type": [
"Psychic",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 178,
        "pokemon_name": "Xatu",
        "type": [
"Psychic",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 179,
        "pokemon_name": "Mareep",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 180,
        "pokemon_name": "Flaaffy",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 181,
        "pokemon_name": "Ampharos",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 182,
        "pokemon_name": "Bellossom",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 183,
        "pokemon_name": "Marill",
        "type": [
"Water",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 184,
        "pokemon_name": "Azumarill",
        "type": [
"Water",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 185,
        "pokemon_name": "Sudowoodo",
        "type": [
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 186,
        "pokemon_name": "Politoed",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 187,
        "pokemon_name": "Hoppip",
        "type": [
"Grass",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 188,
        "pokemon_name": "Skiploom",
        "type": [
"Grass",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 189,
        "pokemon_name": "Jumpluff",
        "type": [
"Grass",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 190,
        "pokemon_name": "Aipom",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 191,
        "pokemon_name": "Sunkern",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 192,
        "pokemon_name": "Sunflora",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 193,
        "pokemon_name": "Yanma",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 194,
        "pokemon_name": "Wooper",
        "type": [
"Water",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 195,
        "pokemon_name": "Quagsire",
        "type": [
"Water",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 196,
        "pokemon_name": "Espeon",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 197,
        "pokemon_name": "Umbreon",
        "type": [
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 198,
        "pokemon_name": "Murkrow",
        "type": [
"Dark",
"Flying"
]
},
    {
        "form": "2022",
        "pokemon_id": 199,
        "pokemon_name": "Slowking",
        "type": [
"Water",
"Psychic"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 199,
        "pokemon_name": "Slowking",
        "type": [
"Poison",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 199,
        "pokemon_name": "Slowking",
        "type": [
"Water",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 200,
        "pokemon_name": "Misdreavus",
        "type": [
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 201,
        "pokemon_name": "Unown",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 202,
        "pokemon_name": "Wobbuffet",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 203,
        "pokemon_name": "Girafarig",
        "type": [
"Normal",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 204,
        "pokemon_name": "Pineco",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 205,
        "pokemon_name": "Forretress",
        "type": [
"Bug",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 206,
        "pokemon_name": "Dunsparce",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 207,
        "pokemon_name": "Gligar",
        "type": [
"Ground",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 208,
        "pokemon_name": "Steelix",
        "type": [
"Steel",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 209,
        "pokemon_name": "Snubbull",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 210,
        "pokemon_name": "Granbull",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 211,
        "pokemon_name": "Qwilfish",
        "type": [
"Water",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 212,
        "pokemon_name": "Scizor",
        "type": [
"Bug",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 213,
        "pokemon_name": "Shuckle",
        "type": [
"Bug",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 214,
        "pokemon_name": "Heracross",
        "type": [
"Bug",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 215,
        "pokemon_name": "Sneasel",
        "type": [
"Dark",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 216,
        "pokemon_name": "Teddiursa",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 217,
        "pokemon_name": "Ursaring",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 218,
        "pokemon_name": "Slugma",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 219,
        "pokemon_name": "Magcargo",
        "type": [
"Fire",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 220,
        "pokemon_name": "Swinub",
        "type": [
"Ice",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 221,
        "pokemon_name": "Piloswine",
        "type": [
"Ice",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 222,
        "pokemon_name": "Corsola",
        "type": [
"Water",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 223,
        "pokemon_name": "Remoraid",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 224,
        "pokemon_name": "Octillery",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 225,
        "pokemon_name": "Delibird",
        "type": [
"Ice",
"Flying"
]
},
    {
        "form": "Winter_2020",
        "pokemon_id": 225,
        "pokemon_name": "Delibird",
        "type": [
"Ice",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 226,
        "pokemon_name": "Mantine",
        "type": [
"Water",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 227,
        "pokemon_name": "Skarmory",
        "type": [
"Steel",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 228,
        "pokemon_name": "Houndour",
        "type": [
"Dark",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 229,
        "pokemon_name": "Houndoom",
        "type": [
"Dark",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 230,
        "pokemon_name": "Kingdra",
        "type": [
"Water",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 231,
        "pokemon_name": "Phanpy",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 232,
        "pokemon_name": "Donphan",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 233,
        "pokemon_name": "Porygon2",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 234,
        "pokemon_name": "Stantler",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 235,
        "pokemon_name": "Smeargle",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 236,
        "pokemon_name": "Tyrogue",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 237,
        "pokemon_name": "Hitmontop",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 238,
        "pokemon_name": "Smoochum",
        "type": [
"Ice",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 239,
        "pokemon_name": "Elekid",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 240,
        "pokemon_name": "Magby",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 241,
        "pokemon_name": "Miltank",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 242,
        "pokemon_name": "Blissey",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 243,
        "pokemon_name": "Raikou",
        "type": [
"Electric"
]
},
    {
        "form": "S",
        "pokemon_id": 243,
        "pokemon_name": "Raikou",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 244,
        "pokemon_name": "Entei",
        "type": [
"Fire"
]
},
    {
        "form": "S",
        "pokemon_id": 244,
        "pokemon_name": "Entei",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 245,
        "pokemon_name": "Suicune",
        "type": [
"Water"
]
},
    {
        "form": "S",
        "pokemon_id": 245,
        "pokemon_name": "Suicune",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 246,
        "pokemon_name": "Larvitar",
        "type": [
"Rock",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 247,
        "pokemon_name": "Pupitar",
        "type": [
"Rock",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 248,
        "pokemon_name": "Tyranitar",
        "type": [
"Rock",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 249,
        "pokemon_name": "Lugia",
        "type": [
"Psychic",
"Flying"
]
},
    {
        "form": "S",
        "pokemon_id": 249,
        "pokemon_name": "Lugia",
        "type": [
"Psychic",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 250,
        "pokemon_name": "Ho-Oh",
        "type": [
"Fire",
"Flying"
]
},
    {
        "form": "S",
        "pokemon_id": 250,
        "pokemon_name": "Ho-Oh",
        "type": [
"Fire",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 251,
        "pokemon_name": "Celebi",
        "type": [
"Psychic",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 252,
        "pokemon_name": "Treecko",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 253,
        "pokemon_name": "Grovyle",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 254,
        "pokemon_name": "Sceptile",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 255,
        "pokemon_name": "Torchic",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 256,
        "pokemon_name": "Combusken",
        "type": [
"Fire",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 257,
        "pokemon_name": "Blaziken",
        "type": [
"Fire",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 258,
        "pokemon_name": "Mudkip",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 259,
        "pokemon_name": "Marshtomp",
        "type": [
"Water",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 260,
        "pokemon_name": "Swampert",
        "type": [
"Water",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 261,
        "pokemon_name": "Poochyena",
        "type": [
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 262,
        "pokemon_name": "Mightyena",
        "type": [
"Dark"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon",
        "type": [
"Dark",
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon",
        "type": [
"Normal"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 264,
        "pokemon_name": "Linoone",
        "type": [
"Dark",
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 264,
        "pokemon_name": "Linoone",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 265,
        "pokemon_name": "Wurmple",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 266,
        "pokemon_name": "Silcoon",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 267,
        "pokemon_name": "Beautifly",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 268,
        "pokemon_name": "Cascoon",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 269,
        "pokemon_name": "Dustox",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 270,
        "pokemon_name": "Lotad",
        "type": [
"Water",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 271,
        "pokemon_name": "Lombre",
        "type": [
"Water",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 272,
        "pokemon_name": "Ludicolo",
        "type": [
"Water",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 273,
        "pokemon_name": "Seedot",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 274,
        "pokemon_name": "Nuzleaf",
        "type": [
"Grass",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 275,
        "pokemon_name": "Shiftry",
        "type": [
"Grass",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 276,
        "pokemon_name": "Taillow",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 277,
        "pokemon_name": "Swellow",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 278,
        "pokemon_name": "Wingull",
        "type": [
"Water",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 279,
        "pokemon_name": "Pelipper",
        "type": [
"Water",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 280,
        "pokemon_name": "Ralts",
        "type": [
"Psychic",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 281,
        "pokemon_name": "Kirlia",
        "type": [
"Psychic",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 282,
        "pokemon_name": "Gardevoir",
        "type": [
"Psychic",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 283,
        "pokemon_name": "Surskit",
        "type": [
"Bug",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 284,
        "pokemon_name": "Masquerain",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 285,
        "pokemon_name": "Shroomish",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 286,
        "pokemon_name": "Breloom",
        "type": [
"Grass",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 287,
        "pokemon_name": "Slakoth",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 288,
        "pokemon_name": "Vigoroth",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 289,
        "pokemon_name": "Slaking",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 290,
        "pokemon_name": "Nincada",
        "type": [
"Bug",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 291,
        "pokemon_name": "Ninjask",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 292,
        "pokemon_name": "Shedinja",
        "type": [
"Bug",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 293,
        "pokemon_name": "Whismur",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 294,
        "pokemon_name": "Loudred",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 295,
        "pokemon_name": "Exploud",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 296,
        "pokemon_name": "Makuhita",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 297,
        "pokemon_name": "Hariyama",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 298,
        "pokemon_name": "Azurill",
        "type": [
"Normal",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 299,
        "pokemon_name": "Nosepass",
        "type": [
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 300,
        "pokemon_name": "Skitty",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 301,
        "pokemon_name": "Delcatty",
        "type": [
"Normal"
]
},
    {
        "form": "Costume_2020",
        "pokemon_id": 302,
        "pokemon_name": "Sableye",
        "type": [
"Dark",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 302,
        "pokemon_name": "Sableye",
        "type": [
"Dark",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 303,
        "pokemon_name": "Mawile",
        "type": [
"Steel",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 304,
        "pokemon_name": "Aron",
        "type": [
"Steel",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 305,
        "pokemon_name": "Lairon",
        "type": [
"Steel",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 306,
        "pokemon_name": "Aggron",
        "type": [
"Steel",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 307,
        "pokemon_name": "Meditite",
        "type": [
"Fighting",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 308,
        "pokemon_name": "Medicham",
        "type": [
"Fighting",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 309,
        "pokemon_name": "Electrike",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 310,
        "pokemon_name": "Manectric",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 311,
        "pokemon_name": "Plusle",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 312,
        "pokemon_name": "Minun",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 313,
        "pokemon_name": "Volbeat",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 314,
        "pokemon_name": "Illumise",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 315,
        "pokemon_name": "Roselia",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 316,
        "pokemon_name": "Gulpin",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 317,
        "pokemon_name": "Swalot",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 318,
        "pokemon_name": "Carvanha",
        "type": [
"Water",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 319,
        "pokemon_name": "Sharpedo",
        "type": [
"Water",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 320,
        "pokemon_name": "Wailmer",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 321,
        "pokemon_name": "Wailord",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 322,
        "pokemon_name": "Numel",
        "type": [
"Fire",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 323,
        "pokemon_name": "Camerupt",
        "type": [
"Fire",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 324,
        "pokemon_name": "Torkoal",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 325,
        "pokemon_name": "Spoink",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 326,
        "pokemon_name": "Grumpig",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 327,
        "pokemon_name": "Spinda",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 328,
        "pokemon_name": "Trapinch",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 329,
        "pokemon_name": "Vibrava",
        "type": [
"Ground",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 330,
        "pokemon_name": "Flygon",
        "type": [
"Ground",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 331,
        "pokemon_name": "Cacnea",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 332,
        "pokemon_name": "Cacturne",
        "type": [
"Grass",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 333,
        "pokemon_name": "Swablu",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 334,
        "pokemon_name": "Altaria",
        "type": [
"Dragon",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 335,
        "pokemon_name": "Zangoose",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 336,
        "pokemon_name": "Seviper",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 337,
        "pokemon_name": "Lunatone",
        "type": [
"Rock",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 338,
        "pokemon_name": "Solrock",
        "type": [
"Rock",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 339,
        "pokemon_name": "Barboach",
        "type": [
"Water",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 340,
        "pokemon_name": "Whiscash",
        "type": [
"Water",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 341,
        "pokemon_name": "Corphish",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 342,
        "pokemon_name": "Crawdaunt",
        "type": [
"Water",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 343,
        "pokemon_name": "Baltoy",
        "type": [
"Ground",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 344,
        "pokemon_name": "Claydol",
        "type": [
"Ground",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 345,
        "pokemon_name": "Lileep",
        "type": [
"Rock",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 346,
        "pokemon_name": "Cradily",
        "type": [
"Rock",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 347,
        "pokemon_name": "Anorith",
        "type": [
"Rock",
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 348,
        "pokemon_name": "Armaldo",
        "type": [
"Rock",
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 349,
        "pokemon_name": "Feebas",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 350,
        "pokemon_name": "Milotic",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 351,
        "pokemon_name": "Castform",
        "type": [
"Normal"
]
},
    {
        "form": "Rainy",
        "pokemon_id": 351,
        "pokemon_name": "Castform",
        "type": [
"Water"
]
},
    {
        "form": "Snowy",
        "pokemon_id": 351,
        "pokemon_name": "Castform",
        "type": [
"Ice"
]
},
    {
        "form": "Sunny",
        "pokemon_id": 351,
        "pokemon_name": "Castform",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 352,
        "pokemon_name": "Kecleon",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 353,
        "pokemon_name": "Shuppet",
        "type": [
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 354,
        "pokemon_name": "Banette",
        "type": [
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 355,
        "pokemon_name": "Duskull",
        "type": [
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 356,
        "pokemon_name": "Dusclops",
        "type": [
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 357,
        "pokemon_name": "Tropius",
        "type": [
"Grass",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 358,
        "pokemon_name": "Chimecho",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 359,
        "pokemon_name": "Absol",
        "type": [
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 360,
        "pokemon_name": "Wynaut",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 361,
        "pokemon_name": "Snorunt",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 362,
        "pokemon_name": "Glalie",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 363,
        "pokemon_name": "Spheal",
        "type": [
"Ice",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 364,
        "pokemon_name": "Sealeo",
        "type": [
"Ice",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 365,
        "pokemon_name": "Walrein",
        "type": [
"Ice",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 366,
        "pokemon_name": "Clamperl",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 367,
        "pokemon_name": "Huntail",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 368,
        "pokemon_name": "Gorebyss",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 369,
        "pokemon_name": "Relicanth",
        "type": [
"Water",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 370,
        "pokemon_name": "Luvdisc",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 371,
        "pokemon_name": "Bagon",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 372,
        "pokemon_name": "Shelgon",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 373,
        "pokemon_name": "Salamence",
        "type": [
"Dragon",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 374,
        "pokemon_name": "Beldum",
        "type": [
"Steel",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 375,
        "pokemon_name": "Metang",
        "type": [
"Steel",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 376,
        "pokemon_name": "Metagross",
        "type": [
"Steel",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 377,
        "pokemon_name": "Regirock",
        "type": [
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 378,
        "pokemon_name": "Regice",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 379,
        "pokemon_name": "Registeel",
        "type": [
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 380,
        "pokemon_name": "Latias",
        "type": [
"Dragon",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 381,
        "pokemon_name": "Latios",
        "type": [
"Dragon",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 382,
        "pokemon_name": "Kyogre",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 383,
        "pokemon_name": "Groudon",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 384,
        "pokemon_name": "Rayquaza",
        "type": [
"Dragon",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 385,
        "pokemon_name": "Jirachi",
        "type": [
"Steel",
"Psychic"
]
},
    {
        "form": "Attack",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys",
        "type": [
"Psychic"
]
},
    {
        "form": "Defense",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys",
        "type": [
"Psychic"
]
},
    {
        "form": "Speed",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 387,
        "pokemon_name": "Turtwig",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 388,
        "pokemon_name": "Grotle",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 389,
        "pokemon_name": "Torterra",
        "type": [
"Grass",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 390,
        "pokemon_name": "Chimchar",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 391,
        "pokemon_name": "Monferno",
        "type": [
"Fire",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 392,
        "pokemon_name": "Infernape",
        "type": [
"Fire",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 393,
        "pokemon_name": "Piplup",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 394,
        "pokemon_name": "Prinplup",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 395,
        "pokemon_name": "Empoleon",
        "type": [
"Water",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 396,
        "pokemon_name": "Starly",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 397,
        "pokemon_name": "Staravia",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 398,
        "pokemon_name": "Staraptor",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 399,
        "pokemon_name": "Bidoof",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 400,
        "pokemon_name": "Bibarel",
        "type": [
"Normal",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 401,
        "pokemon_name": "Kricketot",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 402,
        "pokemon_name": "Kricketune",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 403,
        "pokemon_name": "Shinx",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 404,
        "pokemon_name": "Luxio",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 405,
        "pokemon_name": "Luxray",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 406,
        "pokemon_name": "Budew",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 407,
        "pokemon_name": "Roserade",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 408,
        "pokemon_name": "Cranidos",
        "type": [
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 409,
        "pokemon_name": "Rampardos",
        "type": [
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 410,
        "pokemon_name": "Shieldon",
        "type": [
"Rock",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 411,
        "pokemon_name": "Bastiodon",
        "type": [
"Rock",
"Steel"
]
},
    {
        "form": "Plant",
        "pokemon_id": 412,
        "pokemon_name": "Burmy",
        "type": [
"Bug"
]
},
    {
        "form": "Sandy",
        "pokemon_id": 412,
        "pokemon_name": "Burmy",
        "type": [
"Bug"
]
},
    {
        "form": "Trash",
        "pokemon_id": 412,
        "pokemon_name": "Burmy",
        "type": [
"Bug"
]
},
    {
        "form": "Plant",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam",
        "type": [
"Bug",
"Grass"
]
},
    {
        "form": "Sandy",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam",
        "type": [
"Bug",
"Ground"
]
},
    {
        "form": "Trash",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam",
        "type": [
"Bug",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 414,
        "pokemon_name": "Mothim",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 415,
        "pokemon_name": "Combee",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 416,
        "pokemon_name": "Vespiquen",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 417,
        "pokemon_name": "Pachirisu",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 418,
        "pokemon_name": "Buizel",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 419,
        "pokemon_name": "Floatzel",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 420,
        "pokemon_name": "Cherubi",
        "type": [
"Grass"
]
},
    {
        "form": "Overcast",
        "pokemon_id": 421,
        "pokemon_name": "Cherrim",
        "type": [
"Grass"
]
},
    {
        "form": "Sunny",
        "pokemon_id": 421,
        "pokemon_name": "Cherrim",
        "type": [
"Grass"
]
},
    {
        "form": "East_sea",
        "pokemon_id": 422,
        "pokemon_name": "Shellos",
        "type": [
"Water"
]
},
    {
        "form": "West_sea",
        "pokemon_id": 422,
        "pokemon_name": "Shellos",
        "type": [
"Water"
]
},
    {
        "form": "East_sea",
        "pokemon_id": 423,
        "pokemon_name": "Gastrodon",
        "type": [
"Water",
"Ground"
]
},
    {
        "form": "West_sea",
        "pokemon_id": 423,
        "pokemon_name": "Gastrodon",
        "type": [
"Water",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 424,
        "pokemon_name": "Ambipom",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 425,
        "pokemon_name": "Drifloon",
        "type": [
"Ghost",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 426,
        "pokemon_name": "Drifblim",
        "type": [
"Ghost",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 427,
        "pokemon_name": "Buneary",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 428,
        "pokemon_name": "Lopunny",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 429,
        "pokemon_name": "Mismagius",
        "type": [
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 430,
        "pokemon_name": "Honchkrow",
        "type": [
"Dark",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 431,
        "pokemon_name": "Glameow",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 432,
        "pokemon_name": "Purugly",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 433,
        "pokemon_name": "Chingling",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 434,
        "pokemon_name": "Stunky",
        "type": [
"Poison",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 435,
        "pokemon_name": "Skuntank",
        "type": [
"Poison",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 436,
        "pokemon_name": "Bronzor",
        "type": [
"Steel",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 437,
        "pokemon_name": "Bronzong",
        "type": [
"Steel",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 438,
        "pokemon_name": "Bonsly",
        "type": [
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 439,
        "pokemon_name": "Mime Jr.",
        "type": [
"Psychic",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 440,
        "pokemon_name": "Happiny",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 441,
        "pokemon_name": "Chatot",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 442,
        "pokemon_name": "Spiritomb",
        "type": [
"Ghost",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 443,
        "pokemon_name": "Gible",
        "type": [
"Dragon",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 444,
        "pokemon_name": "Gabite",
        "type": [
"Dragon",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 445,
        "pokemon_name": "Garchomp",
        "type": [
"Dragon",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 446,
        "pokemon_name": "Munchlax",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 447,
        "pokemon_name": "Riolu",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 448,
        "pokemon_name": "Lucario",
        "type": [
"Fighting",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 449,
        "pokemon_name": "Hippopotas",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 450,
        "pokemon_name": "Hippowdon",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 451,
        "pokemon_name": "Skorupi",
        "type": [
"Poison",
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 452,
        "pokemon_name": "Drapion",
        "type": [
"Poison",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 453,
        "pokemon_name": "Croagunk",
        "type": [
"Poison",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 454,
        "pokemon_name": "Toxicroak",
        "type": [
"Poison",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 455,
        "pokemon_name": "Carnivine",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 456,
        "pokemon_name": "Finneon",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 457,
        "pokemon_name": "Lumineon",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 458,
        "pokemon_name": "Mantyke",
        "type": [
"Water",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 459,
        "pokemon_name": "Snover",
        "type": [
"Grass",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 460,
        "pokemon_name": "Abomasnow",
        "type": [
"Grass",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 461,
        "pokemon_name": "Weavile",
        "type": [
"Dark",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 462,
        "pokemon_name": "Magnezone",
        "type": [
"Electric",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 463,
        "pokemon_name": "Lickilicky",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 464,
        "pokemon_name": "Rhyperior",
        "type": [
"Ground",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 465,
        "pokemon_name": "Tangrowth",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 466,
        "pokemon_name": "Electivire",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 467,
        "pokemon_name": "Magmortar",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 468,
        "pokemon_name": "Togekiss",
        "type": [
"Fairy",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 469,
        "pokemon_name": "Yanmega",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 470,
        "pokemon_name": "Leafeon",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 471,
        "pokemon_name": "Glaceon",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 472,
        "pokemon_name": "Gliscor",
        "type": [
"Ground",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 473,
        "pokemon_name": "Mamoswine",
        "type": [
"Ice",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 474,
        "pokemon_name": "Porygon-Z",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 475,
        "pokemon_name": "Gallade",
        "type": [
"Psychic",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 476,
        "pokemon_name": "Probopass",
        "type": [
"Rock",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 477,
        "pokemon_name": "Dusknoir",
        "type": [
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 478,
        "pokemon_name": "Froslass",
        "type": [
"Ice",
"Ghost"
]
},
    {
        "form": "Fan",
        "pokemon_id": 479,
        "pokemon_name": "Rotom",
        "type": [
"Electric",
"Flying"
]
},
    {
        "form": "Frost",
        "pokemon_id": 479,
        "pokemon_name": "Rotom",
        "type": [
"Electric",
"Ice"
]
},
    {
        "form": "Heat",
        "pokemon_id": 479,
        "pokemon_name": "Rotom",
        "type": [
"Electric",
"Fire"
]
},
    {
        "form": "Mow",
        "pokemon_id": 479,
        "pokemon_name": "Rotom",
        "type": [
"Electric",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 479,
        "pokemon_name": "Rotom",
        "type": [
"Electric",
"Ghost"
]
},
    {
        "form": "Wash",
        "pokemon_id": 479,
        "pokemon_name": "Rotom",
        "type": [
"Electric",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 480,
        "pokemon_name": "Uxie",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 481,
        "pokemon_name": "Mesprit",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 482,
        "pokemon_name": "Azelf",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 483,
        "pokemon_name": "Dialga",
        "type": [
"Steel",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 484,
        "pokemon_name": "Palkia",
        "type": [
"Water",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 485,
        "pokemon_name": "Heatran",
        "type": [
"Fire",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 486,
        "pokemon_name": "Regigigas",
        "type": [
"Normal"
]
},
    {
        "form": "Altered",
        "pokemon_id": 487,
        "pokemon_name": "Giratina",
        "type": [
"Ghost",
"Dragon"
]
},
    {
        "form": "Origin",
        "pokemon_id": 487,
        "pokemon_name": "Giratina",
        "type": [
"Ghost",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 488,
        "pokemon_name": "Cresselia",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 489,
        "pokemon_name": "Phione",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 490,
        "pokemon_name": "Manaphy",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 491,
        "pokemon_name": "Darkrai",
        "type": [
"Dark"
]
},
    {
        "form": "Land",
        "pokemon_id": 492,
        "pokemon_name": "Shaymin",
        "type": [
"Grass"
]
},
    {
        "form": "Sky",
        "pokemon_id": 492,
        "pokemon_name": "Shaymin",
        "type": [
"Grass",
"Flying"
]
},
    {
        "form": "Bug",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Bug"
]
},
    {
        "form": "Dark",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Dark"
]
},
    {
        "form": "Dragon",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Dragon"
]
},
    {
        "form": "Electric",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Electric"
]
},
    {
        "form": "Fairy",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Fairy"
]
},
    {
        "form": "Fighting",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Fighting"
]
},
    {
        "form": "Fire",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Fire"
]
},
    {
        "form": "Flying",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Flying"
]
},
    {
        "form": "Ghost",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Ghost"
]
},
    {
        "form": "Grass",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Grass"
]
},
    {
        "form": "Ground",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Ground"
]
},
    {
        "form": "Ice",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Normal"
]
},
    {
        "form": "Poison",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Poison"
]
},
    {
        "form": "Psychic",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Psychic"
]
},
    {
        "form": "Rock",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Rock"
]
},
    {
        "form": "Steel",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Steel"
]
},
    {
        "form": "Water",
        "pokemon_id": 493,
        "pokemon_name": "Arceus",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 494,
        "pokemon_name": "Victini",
        "type": [
"Psychic",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 495,
        "pokemon_name": "Snivy",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 496,
        "pokemon_name": "Servine",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 497,
        "pokemon_name": "Serperior",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 498,
        "pokemon_name": "Tepig",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 499,
        "pokemon_name": "Pignite",
        "type": [
"Fire",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 500,
        "pokemon_name": "Emboar",
        "type": [
"Fire",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 501,
        "pokemon_name": "Oshawott",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 502,
        "pokemon_name": "Dewott",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 503,
        "pokemon_name": "Samurott",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 504,
        "pokemon_name": "Patrat",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 505,
        "pokemon_name": "Watchog",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 506,
        "pokemon_name": "Lillipup",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 507,
        "pokemon_name": "Herdier",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 508,
        "pokemon_name": "Stoutland",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 509,
        "pokemon_name": "Purrloin",
        "type": [
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 510,
        "pokemon_name": "Liepard",
        "type": [
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 511,
        "pokemon_name": "Pansage",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 512,
        "pokemon_name": "Simisage",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 513,
        "pokemon_name": "Pansear",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 514,
        "pokemon_name": "Simisear",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 515,
        "pokemon_name": "Panpour",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 516,
        "pokemon_name": "Simipour",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 517,
        "pokemon_name": "Munna",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 518,
        "pokemon_name": "Musharna",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 519,
        "pokemon_name": "Pidove",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 520,
        "pokemon_name": "Tranquill",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 521,
        "pokemon_name": "Unfezant",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 522,
        "pokemon_name": "Blitzle",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 523,
        "pokemon_name": "Zebstrika",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 524,
        "pokemon_name": "Roggenrola",
        "type": [
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 525,
        "pokemon_name": "Boldore",
        "type": [
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 526,
        "pokemon_name": "Gigalith",
        "type": [
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 527,
        "pokemon_name": "Woobat",
        "type": [
"Psychic",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 528,
        "pokemon_name": "Swoobat",
        "type": [
"Psychic",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 529,
        "pokemon_name": "Drilbur",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 530,
        "pokemon_name": "Excadrill",
        "type": [
"Ground",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 531,
        "pokemon_name": "Audino",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 532,
        "pokemon_name": "Timburr",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 533,
        "pokemon_name": "Gurdurr",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 534,
        "pokemon_name": "Conkeldurr",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 535,
        "pokemon_name": "Tympole",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 536,
        "pokemon_name": "Palpitoad",
        "type": [
"Water",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 537,
        "pokemon_name": "Seismitoad",
        "type": [
"Water",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 538,
        "pokemon_name": "Throh",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 539,
        "pokemon_name": "Sawk",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 540,
        "pokemon_name": "Sewaddle",
        "type": [
"Bug",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 541,
        "pokemon_name": "Swadloon",
        "type": [
"Bug",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 542,
        "pokemon_name": "Leavanny",
        "type": [
"Bug",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 543,
        "pokemon_name": "Venipede",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 544,
        "pokemon_name": "Whirlipede",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 545,
        "pokemon_name": "Scolipede",
        "type": [
"Bug",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 546,
        "pokemon_name": "Cottonee",
        "type": [
"Grass",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 547,
        "pokemon_name": "Whimsicott",
        "type": [
"Grass",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 548,
        "pokemon_name": "Petilil",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 549,
        "pokemon_name": "Lilligant",
        "type": [
"Grass"
]
},
    {
        "form": "Blue_striped",
        "pokemon_id": 550,
        "pokemon_name": "Basculin",
        "type": [
"Water"
]
},
    {
        "form": "Red_striped",
        "pokemon_id": 550,
        "pokemon_name": "Basculin",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 551,
        "pokemon_name": "Sandile",
        "type": [
"Ground",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 552,
        "pokemon_name": "Krokorok",
        "type": [
"Ground",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 553,
        "pokemon_name": "Krookodile",
        "type": [
"Ground",
"Dark"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 554,
        "pokemon_name": "Darumaka",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 554,
        "pokemon_name": "Darumaka",
        "type": [
"Fire"
]
},
    {
        "form": "Galarian_standard",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan",
        "type": [
"Ice"
]
},
    {
        "form": "Galarian_zen",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan",
        "type": [
"Ice",
"Fire"
]
},
    {
        "form": "Standard",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan",
        "type": [
"Fire"
]
},
    {
        "form": "Zen",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan",
        "type": [
"Fire",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 556,
        "pokemon_name": "Maractus",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 557,
        "pokemon_name": "Dwebble",
        "type": [
"Bug",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 558,
        "pokemon_name": "Crustle",
        "type": [
"Bug",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 559,
        "pokemon_name": "Scraggy",
        "type": [
"Dark",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 560,
        "pokemon_name": "Scrafty",
        "type": [
"Dark",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 561,
        "pokemon_name": "Sigilyph",
        "type": [
"Psychic",
"Flying"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 562,
        "pokemon_name": "Yamask",
        "type": [
"Ground",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 562,
        "pokemon_name": "Yamask",
        "type": [
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 563,
        "pokemon_name": "Cofagrigus",
        "type": [
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 564,
        "pokemon_name": "Tirtouga",
        "type": [
"Water",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 565,
        "pokemon_name": "Carracosta",
        "type": [
"Water",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 566,
        "pokemon_name": "Archen",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 567,
        "pokemon_name": "Archeops",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 568,
        "pokemon_name": "Trubbish",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 569,
        "pokemon_name": "Garbodor",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 570,
        "pokemon_name": "Zorua",
        "type": [
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 571,
        "pokemon_name": "Zoroark",
        "type": [
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 572,
        "pokemon_name": "Minccino",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 573,
        "pokemon_name": "Cinccino",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 574,
        "pokemon_name": "Gothita",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 575,
        "pokemon_name": "Gothorita",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 576,
        "pokemon_name": "Gothitelle",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 577,
        "pokemon_name": "Solosis",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 578,
        "pokemon_name": "Duosion",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 579,
        "pokemon_name": "Reuniclus",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 580,
        "pokemon_name": "Ducklett",
        "type": [
"Water",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 581,
        "pokemon_name": "Swanna",
        "type": [
"Water",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 582,
        "pokemon_name": "Vanillite",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 583,
        "pokemon_name": "Vanillish",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 584,
        "pokemon_name": "Vanilluxe",
        "type": [
"Ice"
]
},
    {
        "form": "Autumn",
        "pokemon_id": 585,
        "pokemon_name": "Deerling",
        "type": [
"Normal",
"Grass"
]
},
    {
        "form": "Spring",
        "pokemon_id": 585,
        "pokemon_name": "Deerling",
        "type": [
"Normal",
"Grass"
]
},
    {
        "form": "Summer",
        "pokemon_id": 585,
        "pokemon_name": "Deerling",
        "type": [
"Normal",
"Grass"
]
},
    {
        "form": "Winter",
        "pokemon_id": 585,
        "pokemon_name": "Deerling",
        "type": [
"Normal",
"Grass"
]
},
    {
        "form": "Autumn",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck",
        "type": [
"Normal",
"Grass"
]
},
    {
        "form": "Spring",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck",
        "type": [
"Normal",
"Grass"
]
},
    {
        "form": "Summer",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck",
        "type": [
"Normal",
"Grass"
]
},
    {
        "form": "Winter",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck",
        "type": [
"Normal",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 587,
        "pokemon_name": "Emolga",
        "type": [
"Electric",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 588,
        "pokemon_name": "Karrablast",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 589,
        "pokemon_name": "Escavalier",
        "type": [
"Bug",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 590,
        "pokemon_name": "Foongus",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 591,
        "pokemon_name": "Amoonguss",
        "type": [
"Grass",
"Poison"
]
},
    {
        "form": "Female",
        "pokemon_id": 592,
        "pokemon_name": "Frillish",
        "type": [
"Water",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 592,
        "pokemon_name": "Frillish",
        "type": [
"Water",
"Ghost"
]
},
    {
        "form": "Female",
        "pokemon_id": 593,
        "pokemon_name": "Jellicent",
        "type": [
"Water",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 593,
        "pokemon_name": "Jellicent",
        "type": [
"Water",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 594,
        "pokemon_name": "Alomomola",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 595,
        "pokemon_name": "Joltik",
        "type": [
"Bug",
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 596,
        "pokemon_name": "Galvantula",
        "type": [
"Bug",
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 597,
        "pokemon_name": "Ferroseed",
        "type": [
"Grass",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 598,
        "pokemon_name": "Ferrothorn",
        "type": [
"Grass",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 599,
        "pokemon_name": "Klink",
        "type": [
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 600,
        "pokemon_name": "Klang",
        "type": [
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 601,
        "pokemon_name": "Klinklang",
        "type": [
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 602,
        "pokemon_name": "Tynamo",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 603,
        "pokemon_name": "Eelektrik",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 604,
        "pokemon_name": "Eelektross",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 605,
        "pokemon_name": "Elgyem",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 606,
        "pokemon_name": "Beheeyem",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 607,
        "pokemon_name": "Litwick",
        "type": [
"Ghost",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 608,
        "pokemon_name": "Lampent",
        "type": [
"Ghost",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 609,
        "pokemon_name": "Chandelure",
        "type": [
"Ghost",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 610,
        "pokemon_name": "Axew",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 611,
        "pokemon_name": "Fraxure",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 612,
        "pokemon_name": "Haxorus",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 613,
        "pokemon_name": "Cubchoo",
        "type": [
"Ice"
]
},
    {
        "form": "Winter_2020",
        "pokemon_id": 613,
        "pokemon_name": "Cubchoo",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 614,
        "pokemon_name": "Beartic",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 615,
        "pokemon_name": "Cryogonal",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 616,
        "pokemon_name": "Shelmet",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 617,
        "pokemon_name": "Accelgor",
        "type": [
"Bug"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 618,
        "pokemon_name": "Stunfisk",
        "type": [
"Ground",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 618,
        "pokemon_name": "Stunfisk",
        "type": [
"Ground",
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 619,
        "pokemon_name": "Mienfoo",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 620,
        "pokemon_name": "Mienshao",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 621,
        "pokemon_name": "Druddigon",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 622,
        "pokemon_name": "Golett",
        "type": [
"Ground",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 623,
        "pokemon_name": "Golurk",
        "type": [
"Ground",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 624,
        "pokemon_name": "Pawniard",
        "type": [
"Dark",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 625,
        "pokemon_name": "Bisharp",
        "type": [
"Dark",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 626,
        "pokemon_name": "Bouffalant",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 627,
        "pokemon_name": "Rufflet",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 628,
        "pokemon_name": "Braviary",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 629,
        "pokemon_name": "Vullaby",
        "type": [
"Dark",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 630,
        "pokemon_name": "Mandibuzz",
        "type": [
"Dark",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 631,
        "pokemon_name": "Heatmor",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 632,
        "pokemon_name": "Durant",
        "type": [
"Bug",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 633,
        "pokemon_name": "Deino",
        "type": [
"Dark",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 634,
        "pokemon_name": "Zweilous",
        "type": [
"Dark",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 635,
        "pokemon_name": "Hydreigon",
        "type": [
"Dark",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 636,
        "pokemon_name": "Larvesta",
        "type": [
"Bug",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 637,
        "pokemon_name": "Volcarona",
        "type": [
"Bug",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 638,
        "pokemon_name": "Cobalion",
        "type": [
"Steel",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 639,
        "pokemon_name": "Terrakion",
        "type": [
"Rock",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 640,
        "pokemon_name": "Virizion",
        "type": [
"Grass",
"Fighting"
]
},
    {
        "form": "Incarnate",
        "pokemon_id": 641,
        "pokemon_name": "Tornadus",
        "type": [
"Flying"
]
},
    {
        "form": "Therian",
        "pokemon_id": 641,
        "pokemon_name": "Tornadus",
        "type": [
"Flying"
]
},
    {
        "form": "Incarnate",
        "pokemon_id": 642,
        "pokemon_name": "Thundurus",
        "type": [
"Electric",
"Flying"
]
},
    {
        "form": "Therian",
        "pokemon_id": 642,
        "pokemon_name": "Thundurus",
        "type": [
"Electric",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 643,
        "pokemon_name": "Reshiram",
        "type": [
"Dragon",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 644,
        "pokemon_name": "Zekrom",
        "type": [
"Dragon",
"Electric"
]
},
    {
        "form": "Incarnate",
        "pokemon_id": 645,
        "pokemon_name": "Landorus",
        "type": [
"Ground",
"Flying"
]
},
    {
        "form": "Therian",
        "pokemon_id": 645,
        "pokemon_name": "Landorus",
        "type": [
"Ground",
"Flying"
]
},
    {
        "form": "Black",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem",
        "type": [
"Dragon",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem",
        "type": [
"Dragon",
"Ice"
]
},
    {
        "form": "White",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem",
        "type": [
"Dragon",
"Ice"
]
},
    {
        "form": "Ordinary",
        "pokemon_id": 647,
        "pokemon_name": "Keldeo",
        "type": [
"Water",
"Fighting"
]
},
    {
        "form": "Resolute",
        "pokemon_id": 647,
        "pokemon_name": "Keldeo",
        "type": [
"Water",
"Fighting"
]
},
    {
        "form": "Aria",
        "pokemon_id": 648,
        "pokemon_name": "Meloetta",
        "type": [
"Normal",
"Psychic"
]
},
    {
        "form": "Pirouette",
        "pokemon_id": 648,
        "pokemon_name": "Meloetta",
        "type": [
"Normal",
"Fighting"
]
},
    {
        "form": "Burn",
        "pokemon_id": 649,
        "pokemon_name": "Genesect",
        "type": [
"Bug",
"Steel"
]
},
    {
        "form": "Chill",
        "pokemon_id": 649,
        "pokemon_name": "Genesect",
        "type": [
"Bug",
"Steel"
]
},
    {
        "form": "Douse",
        "pokemon_id": 649,
        "pokemon_name": "Genesect",
        "type": [
"Bug",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 649,
        "pokemon_name": "Genesect",
        "type": [
"Bug",
"Steel"
]
},
    {
        "form": "Shock",
        "pokemon_id": 649,
        "pokemon_name": "Genesect",
        "type": [
"Bug",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 650,
        "pokemon_name": "Chespin",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 651,
        "pokemon_name": "Quilladin",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 652,
        "pokemon_name": "Chesnaught",
        "type": [
"Grass",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 653,
        "pokemon_name": "Fennekin",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 654,
        "pokemon_name": "Braixen",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 655,
        "pokemon_name": "Delphox",
        "type": [
"Fire",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 656,
        "pokemon_name": "Froakie",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 657,
        "pokemon_name": "Frogadier",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 658,
        "pokemon_name": "Greninja",
        "type": [
"Water",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 659,
        "pokemon_name": "Bunnelby",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 660,
        "pokemon_name": "Diggersby",
        "type": [
"Normal",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 661,
        "pokemon_name": "Fletchling",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 662,
        "pokemon_name": "Fletchinder",
        "type": [
"Fire",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 663,
        "pokemon_name": "Talonflame",
        "type": [
"Fire",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 664,
        "pokemon_name": "Scatterbug",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 665,
        "pokemon_name": "Spewpa",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 666,
        "pokemon_name": "Vivillon",
        "type": [
"Bug",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 667,
        "pokemon_name": "Litleo",
        "type": [
"Fire",
"Normal"
]
},
    {
        "form": "Female",
        "pokemon_id": 668,
        "pokemon_name": "Pyroar",
        "type": [
"Fire",
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 668,
        "pokemon_name": "Pyroar",
        "type": [
"Fire",
"Normal"
]
},
    {
        "form": "Blue",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe",
        "type": [
"Fairy"
]
},
    {
        "form": "Orange",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe",
        "type": [
"Fairy"
]
},
    {
        "form": "Red",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe",
        "type": [
"Fairy"
]
},
    {
        "form": "White",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe",
        "type": [
"Fairy"
]
},
    {
        "form": "Yellow",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe",
        "type": [
"Fairy"
]
},
    {
        "form": "Blue",
        "pokemon_id": 670,
        "pokemon_name": "Floette",
        "type": [
"Fairy"
]
},
    {
        "form": "Orange",
        "pokemon_id": 670,
        "pokemon_name": "Floette",
        "type": [
"Fairy"
]
},
    {
        "form": "Red",
        "pokemon_id": 670,
        "pokemon_name": "Floette",
        "type": [
"Fairy"
]
},
    {
        "form": "White",
        "pokemon_id": 670,
        "pokemon_name": "Floette",
        "type": [
"Fairy"
]
},
    {
        "form": "Yellow",
        "pokemon_id": 670,
        "pokemon_name": "Floette",
        "type": [
"Fairy"
]
},
    {
        "form": "Blue",
        "pokemon_id": 671,
        "pokemon_name": "Florges",
        "type": [
"Fairy"
]
},
    {
        "form": "Orange",
        "pokemon_id": 671,
        "pokemon_name": "Florges",
        "type": [
"Fairy"
]
},
    {
        "form": "Red",
        "pokemon_id": 671,
        "pokemon_name": "Florges",
        "type": [
"Fairy"
]
},
    {
        "form": "White",
        "pokemon_id": 671,
        "pokemon_name": "Florges",
        "type": [
"Fairy"
]
},
    {
        "form": "Yellow",
        "pokemon_id": 671,
        "pokemon_name": "Florges",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 672,
        "pokemon_name": "Skiddo",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 673,
        "pokemon_name": "Gogoat",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 674,
        "pokemon_name": "Pancham",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 675,
        "pokemon_name": "Pangoro",
        "type": [
"Fighting",
"Dark"
]
},
    {
        "form": "Dandy",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou",
        "type": [
"Normal"
]
},
    {
        "form": "Debutante",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou",
        "type": [
"Normal"
]
},
    {
        "form": "Diamond",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou",
        "type": [
"Normal"
]
},
    {
        "form": "Heart",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou",
        "type": [
"Normal"
]
},
    {
        "form": "Kabuki",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou",
        "type": [
"Normal"
]
},
    {
        "form": "La_reine",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou",
        "type": [
"Normal"
]
},
    {
        "form": "Matron",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou",
        "type": [
"Normal"
]
},
    {
        "form": "Natural",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou",
        "type": [
"Normal"
]
},
    {
        "form": "Pharaoh",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou",
        "type": [
"Normal"
]
},
    {
        "form": "Star",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 677,
        "pokemon_name": "Espurr",
        "type": [
"Psychic"
]
},
    {
        "form": "Female",
        "pokemon_id": 678,
        "pokemon_name": "Meowstic",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 678,
        "pokemon_name": "Meowstic",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 679,
        "pokemon_name": "Honedge",
        "type": [
"Steel",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 680,
        "pokemon_name": "Doublade",
        "type": [
"Steel",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 681,
        "pokemon_name": "Aegislash",
        "type": [
"Steel",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 682,
        "pokemon_name": "Spritzee",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 683,
        "pokemon_name": "Aromatisse",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 684,
        "pokemon_name": "Swirlix",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 685,
        "pokemon_name": "Slurpuff",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 686,
        "pokemon_name": "Inkay",
        "type": [
"Dark",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 687,
        "pokemon_name": "Malamar",
        "type": [
"Dark",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 688,
        "pokemon_name": "Binacle",
        "type": [
"Rock",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 689,
        "pokemon_name": "Barbaracle",
        "type": [
"Rock",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 690,
        "pokemon_name": "Skrelp",
        "type": [
"Poison",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 691,
        "pokemon_name": "Dragalge",
        "type": [
"Poison",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 692,
        "pokemon_name": "Clauncher",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 693,
        "pokemon_name": "Clawitzer",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 694,
        "pokemon_name": "Helioptile",
        "type": [
"Electric",
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 695,
        "pokemon_name": "Heliolisk",
        "type": [
"Electric",
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 696,
        "pokemon_name": "Tyrunt",
        "type": [
"Rock",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 697,
        "pokemon_name": "Tyrantrum",
        "type": [
"Rock",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 698,
        "pokemon_name": "Amaura",
        "type": [
"Rock",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 699,
        "pokemon_name": "Aurorus",
        "type": [
"Rock",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 700,
        "pokemon_name": "Sylveon",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 701,
        "pokemon_name": "Hawlucha",
        "type": [
"Fighting",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 702,
        "pokemon_name": "Dedenne",
        "type": [
"Electric",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 703,
        "pokemon_name": "Carbink",
        "type": [
"Rock",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 704,
        "pokemon_name": "Goomy",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 705,
        "pokemon_name": "Sliggoo",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 706,
        "pokemon_name": "Goodra",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 707,
        "pokemon_name": "Klefki",
        "type": [
"Steel",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 708,
        "pokemon_name": "Phantump",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 709,
        "pokemon_name": "Trevenant",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Average",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Large",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Small",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Super",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Average",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Large",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Small",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Super",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 712,
        "pokemon_name": "Bergmite",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 713,
        "pokemon_name": "Avalugg",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 714,
        "pokemon_name": "Noibat",
        "type": [
"Flying",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 715,
        "pokemon_name": "Noivern",
        "type": [
"Flying",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 716,
        "pokemon_name": "Xerneas",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 717,
        "pokemon_name": "Yveltal",
        "type": [
"Dark",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 718,
        "pokemon_name": "Zygarde",
        "type": [
"Dragon",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 719,
        "pokemon_name": "Diancie",
        "type": [
"Rock",
"Fairy"
]
},
    {
        "form": "Confined",
        "pokemon_id": 720,
        "pokemon_name": "Hoopa",
        "type": [
"Psychic",
"Ghost"
]
},
    {
        "form": "Unbound",
        "pokemon_id": 720,
        "pokemon_name": "Hoopa",
        "type": [
"Psychic",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 721,
        "pokemon_name": "Volcanion",
        "type": [
"Fire",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 722,
        "pokemon_name": "Rowlet",
        "type": [
"Grass",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 723,
        "pokemon_name": "Dartrix",
        "type": [
"Grass",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 724,
        "pokemon_name": "Decidueye",
        "type": [
"Grass",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 725,
        "pokemon_name": "Litten",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 726,
        "pokemon_name": "Torracat",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 727,
        "pokemon_name": "Incineroar",
        "type": [
"Fire",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 728,
        "pokemon_name": "Popplio",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 729,
        "pokemon_name": "Brionne",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 730,
        "pokemon_name": "Primarina",
        "type": [
"Water",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 731,
        "pokemon_name": "Pikipek",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 732,
        "pokemon_name": "Trumbeak",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 733,
        "pokemon_name": "Toucannon",
        "type": [
"Normal",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 734,
        "pokemon_name": "Yungoos",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 735,
        "pokemon_name": "Gumshoos",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 736,
        "pokemon_name": "Grubbin",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 737,
        "pokemon_name": "Charjabug",
        "type": [
"Bug",
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 738,
        "pokemon_name": "Vikavolt",
        "type": [
"Bug",
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 739,
        "pokemon_name": "Crabrawler",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 740,
        "pokemon_name": "Crabominable",
        "type": [
"Fighting",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 742,
        "pokemon_name": "Cutiefly",
        "type": [
"Bug",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 743,
        "pokemon_name": "Ribombee",
        "type": [
"Bug",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 744,
        "pokemon_name": "Rockruff",
        "type": [
"Rock"
]
},
    {
        "form": "Dusk",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc",
        "type": [
"Rock"
]
},
    {
        "form": "Midday",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc",
        "type": [
"Rock"
]
},
    {
        "form": "Midnight",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc",
        "type": [
"Rock"
]
},
    {
        "form": "School",
        "pokemon_id": 746,
        "pokemon_name": "Wishiwashi",
        "type": [
"Water"
]
},
    {
        "form": "Solo",
        "pokemon_id": 746,
        "pokemon_name": "Wishiwashi",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 747,
        "pokemon_name": "Mareanie",
        "type": [
"Poison",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 748,
        "pokemon_name": "Toxapex",
        "type": [
"Poison",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 749,
        "pokemon_name": "Mudbray",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 750,
        "pokemon_name": "Mudsdale",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 751,
        "pokemon_name": "Dewpider",
        "type": [
"Water",
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 752,
        "pokemon_name": "Araquanid",
        "type": [
"Water",
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 753,
        "pokemon_name": "Fomantis",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 754,
        "pokemon_name": "Lurantis",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 755,
        "pokemon_name": "Morelull",
        "type": [
"Grass",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 756,
        "pokemon_name": "Shiinotic",
        "type": [
"Grass",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 757,
        "pokemon_name": "Salandit",
        "type": [
"Poison",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 758,
        "pokemon_name": "Salazzle",
        "type": [
"Poison",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 759,
        "pokemon_name": "Stufful",
        "type": [
"Normal",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 760,
        "pokemon_name": "Bewear",
        "type": [
"Normal",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 761,
        "pokemon_name": "Bounsweet",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 762,
        "pokemon_name": "Steenee",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 763,
        "pokemon_name": "Tsareena",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 764,
        "pokemon_name": "Comfey",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 765,
        "pokemon_name": "Oranguru",
        "type": [
"Normal",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 766,
        "pokemon_name": "Passimian",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 767,
        "pokemon_name": "Wimpod",
        "type": [
"Bug",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 768,
        "pokemon_name": "Golisopod",
        "type": [
"Bug",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 769,
        "pokemon_name": "Sandygast",
        "type": [
"Ghost",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 770,
        "pokemon_name": "Palossand",
        "type": [
"Ghost",
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 771,
        "pokemon_name": "Pyukumuku",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 772,
        "pokemon_name": "Type: Null",
        "type": [
"Normal"
]
},
    {
        "form": "Bug",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Bug"
]
},
    {
        "form": "Dark",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Dark"
]
},
    {
        "form": "Dragon",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Dragon"
]
},
    {
        "form": "Electric",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Electric"
]
},
    {
        "form": "Fairy",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Fairy"
]
},
    {
        "form": "Fighting",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Fighting"
]
},
    {
        "form": "Fire",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Fire"
]
},
    {
        "form": "Flying",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Flying"
]
},
    {
        "form": "Ghost",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Ghost"
]
},
    {
        "form": "Grass",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Grass"
]
},
    {
        "form": "Ground",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Ground"
]
},
    {
        "form": "Ice",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Normal"
]
},
    {
        "form": "Poison",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Poison"
]
},
    {
        "form": "Psychic",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Psychic"
]
},
    {
        "form": "Rock",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Rock"
]
},
    {
        "form": "Steel",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Steel"
]
},
    {
        "form": "Water",
        "pokemon_id": 773,
        "pokemon_name": "Silvally",
        "type": [
"Water"
]
},
    {
        "form": "Blue",
        "pokemon_id": 774,
        "pokemon_name": "Minior",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Green",
        "pokemon_id": 774,
        "pokemon_name": "Minior",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Indigo",
        "pokemon_id": 774,
        "pokemon_name": "Minior",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Meteor",
        "pokemon_id": 774,
        "pokemon_name": "Minior",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Orange",
        "pokemon_id": 774,
        "pokemon_name": "Minior",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Red",
        "pokemon_id": 774,
        "pokemon_name": "Minior",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Violet",
        "pokemon_id": 774,
        "pokemon_name": "Minior",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Yellow",
        "pokemon_id": 774,
        "pokemon_name": "Minior",
        "type": [
"Rock",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 775,
        "pokemon_name": "Komala",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 776,
        "pokemon_name": "Turtonator",
        "type": [
"Fire",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 777,
        "pokemon_name": "Togedemaru",
        "type": [
"Electric",
"Steel"
]
},
    {
        "form": "Busted",
        "pokemon_id": 778,
        "pokemon_name": "Mimikyu",
        "type": [
"Ghost",
"Fairy"
]
},
    {
        "form": "Disguised",
        "pokemon_id": 778,
        "pokemon_name": "Mimikyu",
        "type": [
"Ghost",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 779,
        "pokemon_name": "Bruxish",
        "type": [
"Water",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 780,
        "pokemon_name": "Drampa",
        "type": [
"Normal",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 781,
        "pokemon_name": "Dhelmise",
        "type": [
"Ghost",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 782,
        "pokemon_name": "Jangmo-o",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 783,
        "pokemon_name": "Hakamo-o",
        "type": [
"Dragon",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 784,
        "pokemon_name": "Kommo-o",
        "type": [
"Dragon",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 785,
        "pokemon_name": "Tapu Koko",
        "type": [
"Electric",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 786,
        "pokemon_name": "Tapu Lele",
        "type": [
"Psychic",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 787,
        "pokemon_name": "Tapu Bulu",
        "type": [
"Grass",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 788,
        "pokemon_name": "Tapu Fini",
        "type": [
"Water",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 789,
        "pokemon_name": "Cosmog",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 790,
        "pokemon_name": "Cosmoem",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 791,
        "pokemon_name": "Solgaleo",
        "type": [
"Psychic",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 792,
        "pokemon_name": "Lunala",
        "type": [
"Psychic",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 793,
        "pokemon_name": "Nihilego",
        "type": [
"Rock",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 794,
        "pokemon_name": "Buzzwole",
        "type": [
"Bug",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 795,
        "pokemon_name": "Pheromosa",
        "type": [
"Bug",
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 796,
        "pokemon_name": "Xurkitree",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 797,
        "pokemon_name": "Celesteela",
        "type": [
"Steel",
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 798,
        "pokemon_name": "Kartana",
        "type": [
"Grass",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 799,
        "pokemon_name": "Guzzlord",
        "type": [
"Dark",
"Ghost"
]
},
    {
        "form": "Dawn_wings",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma",
        "type": [
"Psychic",
"Ghost"
]
},
    {
        "form": "Dusk_mane",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma",
        "type": [
"Psychic",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma",
        "type": [
"Psychic"
]
},
    {
        "form": "Ultra",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma",
        "type": [
"Psychic",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 801,
        "pokemon_name": "Magearna",
        "type": [
"Steel",
"Fairy"
]
},
    {
        "form": "Original_color",
        "pokemon_id": 801,
        "pokemon_name": "Magearna",
        "type": [
"Steel",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 802,
        "pokemon_name": "Marshadow",
        "type": [
"Fighting",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 803,
        "pokemon_name": "Poipole",
        "type": [
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 804,
        "pokemon_name": "Naganadel",
        "type": [
"Poison",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 805,
        "pokemon_name": "Stakataka",
        "type": [
"Rock",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 806,
        "pokemon_name": "Blacephalon",
        "type": [
"Fire",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 807,
        "pokemon_name": "Zeraora",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 808,
        "pokemon_name": "Meltan",
        "type": [
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 809,
        "pokemon_name": "Melmetal",
        "type": [
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 810,
        "pokemon_name": "Grookey",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 811,
        "pokemon_name": "Thwackey",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 812,
        "pokemon_name": "Rillaboom",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 813,
        "pokemon_name": "Scorbunny",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 814,
        "pokemon_name": "Raboot",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 815,
        "pokemon_name": "Cinderace",
        "type": [
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 816,
        "pokemon_name": "Sobble",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 817,
        "pokemon_name": "Drizzile",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 818,
        "pokemon_name": "Inteleon",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 819,
        "pokemon_name": "Skwovet",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 820,
        "pokemon_name": "Greedent",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 821,
        "pokemon_name": "Rookidee",
        "type": [
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 822,
        "pokemon_name": "Corvisquire",
        "type": [
"Flying"
]
},
    {
        "form": "Normal",
        "pokemon_id": 823,
        "pokemon_name": "Corviknight",
        "type": [
"Flying",
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 824,
        "pokemon_name": "Blipbug",
        "type": [
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 825,
        "pokemon_name": "Dottler",
        "type": [
"Bug",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 826,
        "pokemon_name": "Orbeetle",
        "type": [
"Bug",
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 827,
        "pokemon_name": "Nickit",
        "type": [
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 828,
        "pokemon_name": "Thievul",
        "type": [
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 829,
        "pokemon_name": "Gossifleur",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 830,
        "pokemon_name": "Eldegoss",
        "type": [
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 831,
        "pokemon_name": "Wooloo",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 832,
        "pokemon_name": "Dubwool",
        "type": [
"Normal"
]
},
    {
        "form": "Normal",
        "pokemon_id": 833,
        "pokemon_name": "Chewtle",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 834,
        "pokemon_name": "Drednaw",
        "type": [
"Water",
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 835,
        "pokemon_name": "Yamper",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 836,
        "pokemon_name": "Boltund",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 837,
        "pokemon_name": "Rolycoly",
        "type": [
"Rock"
]
},
    {
        "form": "Normal",
        "pokemon_id": 838,
        "pokemon_name": "Carkol",
        "type": [
"Rock",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 839,
        "pokemon_name": "Coalossal",
        "type": [
"Rock",
"Fire"
]
},
    {
        "form": "Normal",
        "pokemon_id": 840,
        "pokemon_name": "Applin",
        "type": [
"Grass",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 841,
        "pokemon_name": "Flapple",
        "type": [
"Grass",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 842,
        "pokemon_name": "Appletun",
        "type": [
"Grass",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 843,
        "pokemon_name": "Silicobra",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 844,
        "pokemon_name": "Sandaconda",
        "type": [
"Ground"
]
},
    {
        "form": "Normal",
        "pokemon_id": 845,
        "pokemon_name": "Cramorant",
        "type": [
"Flying",
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 846,
        "pokemon_name": "Arrokuda",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 847,
        "pokemon_name": "Barraskewda",
        "type": [
"Water"
]
},
    {
        "form": "Normal",
        "pokemon_id": 848,
        "pokemon_name": "Toxel",
        "type": [
"Electric",
"Poison"
]
},
    {
        "form": "Amped",
        "pokemon_id": 849,
        "pokemon_name": "Toxtricity",
        "type": [
"Electric",
"Poison"
]
},
    {
        "form": "Low_key",
        "pokemon_id": 849,
        "pokemon_name": "Toxtricity",
        "type": [
"Electric",
"Poison"
]
},
    {
        "form": "Normal",
        "pokemon_id": 850,
        "pokemon_name": "Sizzlipede",
        "type": [
"Fire",
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 851,
        "pokemon_name": "Centiskorch",
        "type": [
"Fire",
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 852,
        "pokemon_name": "Clobbopus",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 853,
        "pokemon_name": "Grapploct",
        "type": [
"Fighting"
]
},
    {
        "form": "Antique",
        "pokemon_id": 854,
        "pokemon_name": "Sinistea",
        "type": [
"Ghost"
]
},
    {
        "form": "Phony",
        "pokemon_id": 854,
        "pokemon_name": "Sinistea",
        "type": [
"Ghost"
]
},
    {
        "form": "Antique",
        "pokemon_id": 855,
        "pokemon_name": "Polteageist",
        "type": [
"Ghost"
]
},
    {
        "form": "Phony",
        "pokemon_id": 855,
        "pokemon_name": "Polteageist",
        "type": [
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 856,
        "pokemon_name": "Hatenna",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 857,
        "pokemon_name": "Hattrem",
        "type": [
"Psychic"
]
},
    {
        "form": "Normal",
        "pokemon_id": 858,
        "pokemon_name": "Hatterene",
        "type": [
"Psychic",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 859,
        "pokemon_name": "Impidimp",
        "type": [
"Dark",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 860,
        "pokemon_name": "Morgrem",
        "type": [
"Dark",
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 861,
        "pokemon_name": "Grimmsnarl",
        "type": [
"Dark",
"Fairy"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 862,
        "pokemon_name": "Obstagoon",
        "type": [
"Dark",
"Normal"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 863,
        "pokemon_name": "Perrserker",
        "type": [
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 864,
        "pokemon_name": "Cursola",
        "type": [
"Ghost"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 865,
        "pokemon_name": "Sirfetch\u2019d",
        "type": [
"Fighting"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 866,
        "pokemon_name": "Mr. Rime",
        "type": [
"Ice",
"Psychic"
]
},
    {
        "form": "Galarian",
        "pokemon_id": 867,
        "pokemon_name": "Runerigus",
        "type": [
"Ground",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 868,
        "pokemon_name": "Milcery",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 869,
        "pokemon_name": "Alcremie",
        "type": [
"Fairy"
]
},
    {
        "form": "Normal",
        "pokemon_id": 870,
        "pokemon_name": "Falinks",
        "type": [
"Fighting"
]
},
    {
        "form": "Normal",
        "pokemon_id": 871,
        "pokemon_name": "Pincurchin",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 872,
        "pokemon_name": "Snom",
        "type": [
"Ice",
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 873,
        "pokemon_name": "Frosmoth",
        "type": [
"Ice",
"Bug"
]
},
    {
        "form": "Normal",
        "pokemon_id": 874,
        "pokemon_name": "Stonjourner",
        "type": [
"Rock"
]
},
    {
        "form": "Ice",
        "pokemon_id": 875,
        "pokemon_name": "Eiscue",
        "type": [
"Ice"
]
},
    {
        "form": "Noice",
        "pokemon_id": 875,
        "pokemon_name": "Eiscue",
        "type": [
"Ice"
]
},
    {
        "form": "Female",
        "pokemon_id": 876,
        "pokemon_name": "Indeedee",
        "type": [
"Psychic",
"Normal"
]
},
    {
        "form": "Male",
        "pokemon_id": 876,
        "pokemon_name": "Indeedee",
        "type": [
"Psychic",
"Normal"
]
},
    {
        "form": "Full_belly",
        "pokemon_id": 877,
        "pokemon_name": "Morpeko",
        "type": [
"Electric",
"Dark"
]
},
    {
        "form": "Hangry",
        "pokemon_id": 877,
        "pokemon_name": "Morpeko",
        "type": [
"Electric",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 878,
        "pokemon_name": "Cufant",
        "type": [
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 879,
        "pokemon_name": "Copperajah",
        "type": [
"Steel"
]
},
    {
        "form": "Normal",
        "pokemon_id": 880,
        "pokemon_name": "Dracozolt",
        "type": [
"Electric",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 881,
        "pokemon_name": "Arctozolt",
        "type": [
"Electric",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 882,
        "pokemon_name": "Dracovish",
        "type": [
"Water",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 883,
        "pokemon_name": "Arctovish",
        "type": [
"Water",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 884,
        "pokemon_name": "Duraludon",
        "type": [
"Steel",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 885,
        "pokemon_name": "Dreepy",
        "type": [
"Dragon",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 886,
        "pokemon_name": "Drakloak",
        "type": [
"Dragon",
"Ghost"
]
},
    {
        "form": "Normal",
        "pokemon_id": 887,
        "pokemon_name": "Dragapult",
        "type": [
"Dragon",
"Ghost"
]
},
    {
        "form": "Crowned_sword",
        "pokemon_id": 888,
        "pokemon_name": "Zacian",
        "type": [
"Fairy",
"Steel"
]
},
    {
        "form": "Hero",
        "pokemon_id": 888,
        "pokemon_name": "Zacian",
        "type": [
"Fairy"
]
},
    {
        "form": "Crowned_shield",
        "pokemon_id": 889,
        "pokemon_name": "Zamazenta",
        "type": [
"Fighting",
"Steel"
]
},
    {
        "form": "Hero",
        "pokemon_id": 889,
        "pokemon_name": "Zamazenta",
        "type": [
"Fighting"
]
},
    {
        "form": "Eternamax",
        "pokemon_id": 890,
        "pokemon_name": "Eternatus",
        "type": [
"Poison",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 890,
        "pokemon_name": "Eternatus",
        "type": [
"Poison",
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 891,
        "pokemon_name": "Kubfu",
        "type": [
"Fighting"
]
},
    {
        "form": "Rapid_strike",
        "pokemon_id": 892,
        "pokemon_name": "Urshifu",
        "type": [
"Fighting",
"Water"
]
},
    {
        "form": "Single_strike",
        "pokemon_id": 892,
        "pokemon_name": "Urshifu",
        "type": [
"Fighting",
"Dark"
]
},
    {
        "form": "Normal",
        "pokemon_id": 893,
        "pokemon_name": "Zarude",
        "type": [
"Dark",
"Grass"
]
},
    {
        "form": "Normal",
        "pokemon_id": 894,
        "pokemon_name": "Regieleki",
        "type": [
"Electric"
]
},
    {
        "form": "Normal",
        "pokemon_id": 895,
        "pokemon_name": "Regidrago",
        "type": [
"Dragon"
]
},
    {
        "form": "Normal",
        "pokemon_id": 896,
        "pokemon_name": "Glastrier",
        "type": [
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 897,
        "pokemon_name": "Spectrier",
        "type": [
"Ghost"
]
},
    {
        "form": "Ice_rider",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex",
        "type": [
"Psychic",
"Ice"
]
},
    {
        "form": "Normal",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex",
        "type": [
"Psychic",
"Grass"
]
},
    {
        "form": "Shadow_rider",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex",
        "type": [
"Psychic",
"Ghost"
]
}
]

// http://PoGoApi.net/api/v1/pokemon_stats.json
// Returns a JSON array where each element is a dict containing :
// - base_attack,
// - base_defense,
// - base_stamina, 
// - pokemon_ID,  
// - pokemon name.

const POKEMON = [
    {
        "base_attack": 118,
        "base_defense": 111,
        "base_stamina": 128,
        "form": "Fall_2019",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur"
},
    {
        "base_attack": 118,
        "base_defense": 111,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur"
},
    {
        "base_attack": 151,
        "base_defense": 143,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 2,
        "pokemon_name": "Ivysaur"
},
    {
        "base_attack": 198,
        "base_defense": 189,
        "base_stamina": 190,
        "form": "Copy_2019",
        "pokemon_id": 3,
        "pokemon_name": "Venusaur"
},
    {
        "base_attack": 198,
        "base_defense": 189,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 3,
        "pokemon_name": "Venusaur"
},
    {
        "base_attack": 116,
        "base_defense": 93,
        "base_stamina": 118,
        "form": "Fall_2019",
        "pokemon_id": 4,
        "pokemon_name": "Charmander"
},
    {
        "base_attack": 116,
        "base_defense": 93,
        "base_stamina": 118,
        "form": "Normal",
        "pokemon_id": 4,
        "pokemon_name": "Charmander"
},
    {
        "base_attack": 158,
        "base_defense": 126,
        "base_stamina": 151,
        "form": "Normal",
        "pokemon_id": 5,
        "pokemon_name": "Charmeleon"
},
    {
        "base_attack": 223,
        "base_defense": 173,
        "base_stamina": 186,
        "form": "Copy_2019",
        "pokemon_id": 6,
        "pokemon_name": "Charizard"
},
    {
        "base_attack": 223,
        "base_defense": 173,
        "base_stamina": 186,
        "form": "Normal",
        "pokemon_id": 6,
        "pokemon_name": "Charizard"
},
    {
        "base_attack": 94,
        "base_defense": 121,
        "base_stamina": 127,
        "form": "Fall_2019",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle"
},
    {
        "base_attack": 94,
        "base_defense": 121,
        "base_stamina": 127,
        "form": "Normal",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle"
},
    {
        "base_attack": 126,
        "base_defense": 155,
        "base_stamina": 153,
        "form": "Normal",
        "pokemon_id": 8,
        "pokemon_name": "Wartortle"
},
    {
        "base_attack": 171,
        "base_defense": 207,
        "base_stamina": 188,
        "form": "Copy_2019",
        "pokemon_id": 9,
        "pokemon_name": "Blastoise"
},
    {
        "base_attack": 171,
        "base_defense": 207,
        "base_stamina": 188,
        "form": "Normal",
        "pokemon_id": 9,
        "pokemon_name": "Blastoise"
},
    {
        "base_attack": 55,
        "base_defense": 55,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 10,
        "pokemon_name": "Caterpie"
},
    {
        "base_attack": 45,
        "base_defense": 80,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 11,
        "pokemon_name": "Metapod"
},
    {
        "base_attack": 167,
        "base_defense": 137,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 12,
        "pokemon_name": "Butterfree"
},
    {
        "base_attack": 63,
        "base_defense": 50,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 13,
        "pokemon_name": "Weedle"
},
    {
        "base_attack": 46,
        "base_defense": 75,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 14,
        "pokemon_name": "Kakuna"
},
    {
        "base_attack": 169,
        "base_defense": 130,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 15,
        "pokemon_name": "Beedrill"
},
    {
        "base_attack": 85,
        "base_defense": 73,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 16,
        "pokemon_name": "Pidgey"
},
    {
        "base_attack": 117,
        "base_defense": 105,
        "base_stamina": 160,
        "form": "Normal",
        "pokemon_id": 17,
        "pokemon_name": "Pidgeotto"
},
    {
        "base_attack": 166,
        "base_defense": 154,
        "base_stamina": 195,
        "form": "Normal",
        "pokemon_id": 18,
        "pokemon_name": "Pidgeot"
},
    {
        "base_attack": 103,
        "base_defense": 70,
        "base_stamina": 102,
        "form": "Alola",
        "pokemon_id": 19,
        "pokemon_name": "Rattata"
},
    {
        "base_attack": 103,
        "base_defense": 70,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 19,
        "pokemon_name": "Rattata"
},
    {
        "base_attack": 135,
        "base_defense": 154,
        "base_stamina": 181,
        "form": "Alola",
        "pokemon_id": 20,
        "pokemon_name": "Raticate"
},
    {
        "base_attack": 161,
        "base_defense": 139,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 20,
        "pokemon_name": "Raticate"
},
    {
        "base_attack": 112,
        "base_defense": 60,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 21,
        "pokemon_name": "Spearow"
},
    {
        "base_attack": 182,
        "base_defense": 133,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 22,
        "pokemon_name": "Fearow"
},
    {
        "base_attack": 110,
        "base_defense": 97,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 23,
        "pokemon_name": "Ekans"
},
    {
        "base_attack": 167,
        "base_defense": 153,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 24,
        "pokemon_name": "Arbok"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Adventure_hat_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Copy_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Costume_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Fall_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Flying_5th_anniv",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Kariyushi",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Pop_star",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Rock_star",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Vs_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 112,
        "base_defense": 96,
        "base_stamina": 111,
        "form": "Winter_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
},
    {
        "base_attack": 201,
        "base_defense": 154,
        "base_stamina": 155,
        "form": "Alola",
        "pokemon_id": 26,
        "pokemon_name": "Raichu"
},
    {
        "base_attack": 193,
        "base_defense": 151,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 26,
        "pokemon_name": "Raichu"
},
    {
        "base_attack": 125,
        "base_defense": 129,
        "base_stamina": 137,
        "form": "Alola",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew"
},
    {
        "base_attack": 126,
        "base_defense": 120,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew"
},
    {
        "base_attack": 177,
        "base_defense": 195,
        "base_stamina": 181,
        "form": "Alola",
        "pokemon_id": 28,
        "pokemon_name": "Sandslash"
},
    {
        "base_attack": 182,
        "base_defense": 175,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 28,
        "pokemon_name": "Sandslash"
},
    {
        "base_attack": 86,
        "base_defense": 89,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 29,
        "pokemon_name": "Nidoran\u2640"
},
    {
        "base_attack": 117,
        "base_defense": 120,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 30,
        "pokemon_name": "Nidorina"
},
    {
        "base_attack": 180,
        "base_defense": 173,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 31,
        "pokemon_name": "Nidoqueen"
},
    {
        "base_attack": 105,
        "base_defense": 76,
        "base_stamina": 130,
        "form": "Normal",
        "pokemon_id": 32,
        "pokemon_name": "Nidoran\u2642"
},
    {
        "base_attack": 137,
        "base_defense": 111,
        "base_stamina": 156,
        "form": "Normal",
        "pokemon_id": 33,
        "pokemon_name": "Nidorino"
},
    {
        "base_attack": 204,
        "base_defense": 156,
        "base_stamina": 191,
        "form": "Normal",
        "pokemon_id": 34,
        "pokemon_name": "Nidoking"
},
    {
        "base_attack": 107,
        "base_defense": 108,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 35,
        "pokemon_name": "Clefairy"
},
    {
        "base_attack": 178,
        "base_defense": 162,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 36,
        "pokemon_name": "Clefable"
},
    {
        "base_attack": 96,
        "base_defense": 109,
        "base_stamina": 116,
        "form": "Alola",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix"
},
    {
        "base_attack": 96,
        "base_defense": 109,
        "base_stamina": 116,
        "form": "Normal",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix"
},
    {
        "base_attack": 170,
        "base_defense": 193,
        "base_stamina": 177,
        "form": "Alola",
        "pokemon_id": 38,
        "pokemon_name": "Ninetales"
},
    {
        "base_attack": 169,
        "base_defense": 190,
        "base_stamina": 177,
        "form": "Normal",
        "pokemon_id": 38,
        "pokemon_name": "Ninetales"
},
    {
        "base_attack": 80,
        "base_defense": 41,
        "base_stamina": 251,
        "form": "Normal",
        "pokemon_id": 39,
        "pokemon_name": "Jigglypuff"
},
    {
        "base_attack": 156,
        "base_defense": 90,
        "base_stamina": 295,
        "form": "Normal",
        "pokemon_id": 40,
        "pokemon_name": "Wigglytuff"
},
    {
        "base_attack": 83,
        "base_defense": 73,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 41,
        "pokemon_name": "Zubat"
},
    {
        "base_attack": 161,
        "base_defense": 150,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 42,
        "pokemon_name": "Golbat"
},
    {
        "base_attack": 131,
        "base_defense": 112,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 43,
        "pokemon_name": "Oddish"
},
    {
        "base_attack": 153,
        "base_defense": 136,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 44,
        "pokemon_name": "Gloom"
},
    {
        "base_attack": 202,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 45,
        "pokemon_name": "Vileplume"
},
    {
        "base_attack": 121,
        "base_defense": 99,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 46,
        "pokemon_name": "Paras"
},
    {
        "base_attack": 165,
        "base_defense": 146,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 47,
        "pokemon_name": "Parasect"
},
    {
        "base_attack": 100,
        "base_defense": 100,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 48,
        "pokemon_name": "Venonat"
},
    {
        "base_attack": 179,
        "base_defense": 143,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 49,
        "pokemon_name": "Venomoth"
},
    {
        "base_attack": 108,
        "base_defense": 81,
        "base_stamina": 67,
        "form": "Alola",
        "pokemon_id": 50,
        "pokemon_name": "Diglett"
},
    {
        "base_attack": 109,
        "base_defense": 78,
        "base_stamina": 67,
        "form": "Normal",
        "pokemon_id": 50,
        "pokemon_name": "Diglett"
},
    {
        "base_attack": 201,
        "base_defense": 142,
        "base_stamina": 111,
        "form": "Alola",
        "pokemon_id": 51,
        "pokemon_name": "Dugtrio"
},
    {
        "base_attack": 167,
        "base_defense": 136,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 51,
        "pokemon_name": "Dugtrio"
},
    {
        "base_attack": 99,
        "base_defense": 78,
        "base_stamina": 120,
        "form": "Alola",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
},
    {
        "base_attack": 115,
        "base_defense": 92,
        "base_stamina": 137,
        "form": "Galarian",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
},
    {
        "base_attack": 92,
        "base_defense": 78,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
},
    {
        "base_attack": 158,
        "base_defense": 136,
        "base_stamina": 163,
        "form": "Alola",
        "pokemon_id": 53,
        "pokemon_name": "Persian"
},
    {
        "base_attack": 150,
        "base_defense": 136,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 53,
        "pokemon_name": "Persian"
},
    {
        "base_attack": 122,
        "base_defense": 95,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 54,
        "pokemon_name": "Psyduck"
},
    {
        "base_attack": 191,
        "base_defense": 162,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 55,
        "pokemon_name": "Golduck"
},
    {
        "base_attack": 148,
        "base_defense": 82,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 56,
        "pokemon_name": "Mankey"
},
    {
        "base_attack": 207,
        "base_defense": 138,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 57,
        "pokemon_name": "Primeape"
},
    {
        "base_attack": 136,
        "base_defense": 93,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 58,
        "pokemon_name": "Growlithe"
},
    {
        "base_attack": 227,
        "base_defense": 166,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 59,
        "pokemon_name": "Arcanine"
},
    {
        "base_attack": 101,
        "base_defense": 82,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 60,
        "pokemon_name": "Poliwag"
},
    {
        "base_attack": 130,
        "base_defense": 123,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 61,
        "pokemon_name": "Poliwhirl"
},
    {
        "base_attack": 182,
        "base_defense": 184,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 62,
        "pokemon_name": "Poliwrath"
},
    {
        "base_attack": 195,
        "base_defense": 82,
        "base_stamina": 93,
        "form": "Normal",
        "pokemon_id": 63,
        "pokemon_name": "Abra"
},
    {
        "base_attack": 232,
        "base_defense": 117,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 64,
        "pokemon_name": "Kadabra"
},
    {
        "base_attack": 271,
        "base_defense": 167,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 65,
        "pokemon_name": "Alakazam"
},
    {
        "base_attack": 137,
        "base_defense": 82,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 66,
        "pokemon_name": "Machop"
},
    {
        "base_attack": 177,
        "base_defense": 125,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 67,
        "pokemon_name": "Machoke"
},
    {
        "base_attack": 234,
        "base_defense": 159,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 68,
        "pokemon_name": "Machamp"
},
    {
        "base_attack": 139,
        "base_defense": 61,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 69,
        "pokemon_name": "Bellsprout"
},
    {
        "base_attack": 172,
        "base_defense": 92,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 70,
        "pokemon_name": "Weepinbell"
},
    {
        "base_attack": 207,
        "base_defense": 135,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 71,
        "pokemon_name": "Victreebel"
},
    {
        "base_attack": 97,
        "base_defense": 149,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 72,
        "pokemon_name": "Tentacool"
},
    {
        "base_attack": 166,
        "base_defense": 209,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 73,
        "pokemon_name": "Tentacruel"
},
    {
        "base_attack": 132,
        "base_defense": 132,
        "base_stamina": 120,
        "form": "Alola",
        "pokemon_id": 74,
        "pokemon_name": "Geodude"
},
    {
        "base_attack": 132,
        "base_defense": 132,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 74,
        "pokemon_name": "Geodude"
},
    {
        "base_attack": 164,
        "base_defense": 164,
        "base_stamina": 146,
        "form": "Alola",
        "pokemon_id": 75,
        "pokemon_name": "Graveler"
},
    {
        "base_attack": 164,
        "base_defense": 164,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 75,
        "pokemon_name": "Graveler"
},
    {
        "base_attack": 211,
        "base_defense": 198,
        "base_stamina": 190,
        "form": "Alola",
        "pokemon_id": 76,
        "pokemon_name": "Golem"
},
    {
        "base_attack": 211,
        "base_defense": 198,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 76,
        "pokemon_name": "Golem"
},
    {
        "base_attack": 170,
        "base_defense": 127,
        "base_stamina": 137,
        "form": "Galarian",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta"
},
    {
        "base_attack": 170,
        "base_defense": 127,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta"
},
    {
        "base_attack": 207,
        "base_defense": 162,
        "base_stamina": 163,
        "form": "Galarian",
        "pokemon_id": 78,
        "pokemon_name": "Rapidash"
},
    {
        "base_attack": 207,
        "base_defense": 162,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 78,
        "pokemon_name": "Rapidash"
},
    {
        "base_attack": 109,
        "base_defense": 98,
        "base_stamina": 207,
        "form": "2020",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
},
    {
        "base_attack": 109,
        "base_defense": 98,
        "base_stamina": 207,
        "form": "Galarian",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
},
    {
        "base_attack": 109,
        "base_defense": 98,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
},
    {
        "base_attack": 177,
        "base_defense": 180,
        "base_stamina": 216,
        "form": "2021",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro"
},
    {
        "base_attack": 182,
        "base_defense": 156,
        "base_stamina": 216,
        "form": "Galarian",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro"
},
    {
        "base_attack": 177,
        "base_defense": 180,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro"
},
    {
        "base_attack": 165,
        "base_defense": 121,
        "base_stamina": 93,
        "form": "Normal",
        "pokemon_id": 81,
        "pokemon_name": "Magnemite"
},
    {
        "base_attack": 223,
        "base_defense": 169,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 82,
        "pokemon_name": "Magneton"
},
    {
        "base_attack": 174,
        "base_defense": 114,
        "base_stamina": 141,
        "form": "Galarian",
        "pokemon_id": 83,
        "pokemon_name": "Farfetch\u2019d"
},
    {
        "base_attack": 124,
        "base_defense": 115,
        "base_stamina": 141,
        "form": "Normal",
        "pokemon_id": 83,
        "pokemon_name": "Farfetch\u2019d"
},
    {
        "base_attack": 158,
        "base_defense": 83,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 84,
        "pokemon_name": "Doduo"
},
    {
        "base_attack": 218,
        "base_defense": 140,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 85,
        "pokemon_name": "Dodrio"
},
    {
        "base_attack": 85,
        "base_defense": 121,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 86,
        "pokemon_name": "Seel"
},
    {
        "base_attack": 139,
        "base_defense": 177,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 87,
        "pokemon_name": "Dewgong"
},
    {
        "base_attack": 135,
        "base_defense": 90,
        "base_stamina": 190,
        "form": "Alola",
        "pokemon_id": 88,
        "pokemon_name": "Grimer"
},
    {
        "base_attack": 135,
        "base_defense": 90,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 88,
        "pokemon_name": "Grimer"
},
    {
        "base_attack": 190,
        "base_defense": 172,
        "base_stamina": 233,
        "form": "Alola",
        "pokemon_id": 89,
        "pokemon_name": "Muk"
},
    {
        "base_attack": 190,
        "base_defense": 172,
        "base_stamina": 233,
        "form": "Normal",
        "pokemon_id": 89,
        "pokemon_name": "Muk"
},
    {
        "base_attack": 116,
        "base_defense": 134,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 90,
        "pokemon_name": "Shellder"
},
    {
        "base_attack": 186,
        "base_defense": 256,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 91,
        "pokemon_name": "Cloyster"
},
    {
        "base_attack": 186,
        "base_defense": 67,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 92,
        "pokemon_name": "Gastly"
},
    {
        "base_attack": 223,
        "base_defense": 107,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 93,
        "pokemon_name": "Haunter"
},
    {
        "base_attack": 261,
        "base_defense": 149,
        "base_stamina": 155,
        "form": "Costume_2020",
        "pokemon_id": 94,
        "pokemon_name": "Gengar"
},
    {
        "base_attack": 261,
        "base_defense": 149,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 94,
        "pokemon_name": "Gengar"
},
    {
        "base_attack": 85,
        "base_defense": 232,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 95,
        "pokemon_name": "Onix"
},
    {
        "base_attack": 89,
        "base_defense": 136,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 96,
        "pokemon_name": "Drowzee"
},
    {
        "base_attack": 144,
        "base_defense": 193,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 97,
        "pokemon_name": "Hypno"
},
    {
        "base_attack": 181,
        "base_defense": 124,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 98,
        "pokemon_name": "Krabby"
},
    {
        "base_attack": 240,
        "base_defense": 181,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 99,
        "pokemon_name": "Kingler"
},
    {
        "base_attack": 109,
        "base_defense": 111,
        "base_stamina": 120,
        "form": "Hisuian",
        "pokemon_id": 100,
        "pokemon_name": "Voltorb"
},
    {
        "base_attack": 109,
        "base_defense": 111,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 100,
        "pokemon_name": "Voltorb"
},
    {
        "base_attack": 176,
        "base_defense": 176,
        "base_stamina": 155,
        "form": "Hisuian",
        "pokemon_id": 101,
        "pokemon_name": "Electrode"
},
    {
        "base_attack": 173,
        "base_defense": 173,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 101,
        "pokemon_name": "Electrode"
},
    {
        "base_attack": 107,
        "base_defense": 125,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 102,
        "pokemon_name": "Exeggcute"
},
    {
        "base_attack": 230,
        "base_defense": 153,
        "base_stamina": 216,
        "form": "Alola",
        "pokemon_id": 103,
        "pokemon_name": "Exeggutor"
},
    {
        "base_attack": 233,
        "base_defense": 149,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 103,
        "pokemon_name": "Exeggutor"
},
    {
        "base_attack": 90,
        "base_defense": 144,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 104,
        "pokemon_name": "Cubone"
},
    {
        "base_attack": 144,
        "base_defense": 186,
        "base_stamina": 155,
        "form": "Alola",
        "pokemon_id": 105,
        "pokemon_name": "Marowak"
},
    {
        "base_attack": 144,
        "base_defense": 186,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 105,
        "pokemon_name": "Marowak"
},
    {
        "base_attack": 224,
        "base_defense": 181,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 106,
        "pokemon_name": "Hitmonlee"
},
    {
        "base_attack": 193,
        "base_defense": 197,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 107,
        "pokemon_name": "Hitmonchan"
},
    {
        "base_attack": 108,
        "base_defense": 137,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 108,
        "pokemon_name": "Lickitung"
},
    {
        "base_attack": 119,
        "base_defense": 141,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 109,
        "pokemon_name": "Koffing"
},
    {
        "base_attack": 174,
        "base_defense": 197,
        "base_stamina": 163,
        "form": "Galarian",
        "pokemon_id": 110,
        "pokemon_name": "Weezing"
},
    {
        "base_attack": 174,
        "base_defense": 197,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 110,
        "pokemon_name": "Weezing"
},
    {
        "base_attack": 140,
        "base_defense": 127,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 111,
        "pokemon_name": "Rhyhorn"
},
    {
        "base_attack": 222,
        "base_defense": 171,
        "base_stamina": 233,
        "form": "Normal",
        "pokemon_id": 112,
        "pokemon_name": "Rhydon"
},
    {
        "base_attack": 60,
        "base_defense": 128,
        "base_stamina": 487,
        "form": "Normal",
        "pokemon_id": 113,
        "pokemon_name": "Chansey"
},
    {
        "base_attack": 183,
        "base_defense": 169,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 114,
        "pokemon_name": "Tangela"
},
    {
        "base_attack": 181,
        "base_defense": 165,
        "base_stamina": 233,
        "form": "Normal",
        "pokemon_id": 115,
        "pokemon_name": "Kangaskhan"
},
    {
        "base_attack": 129,
        "base_defense": 103,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 116,
        "pokemon_name": "Horsea"
},
    {
        "base_attack": 187,
        "base_defense": 156,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 117,
        "pokemon_name": "Seadra"
},
    {
        "base_attack": 123,
        "base_defense": 110,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 118,
        "pokemon_name": "Goldeen"
},
    {
        "base_attack": 175,
        "base_defense": 147,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 119,
        "pokemon_name": "Seaking"
},
    {
        "base_attack": 137,
        "base_defense": 112,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 120,
        "pokemon_name": "Staryu"
},
    {
        "base_attack": 210,
        "base_defense": 184,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 121,
        "pokemon_name": "Starmie"
},
    {
        "base_attack": 183,
        "base_defense": 169,
        "base_stamina": 137,
        "form": "Galarian",
        "pokemon_id": 122,
        "pokemon_name": "Mr. Mime"
},
    {
        "base_attack": 192,
        "base_defense": 205,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 122,
        "pokemon_name": "Mr. Mime"
},
    {
        "base_attack": 218,
        "base_defense": 170,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 123,
        "pokemon_name": "Scyther"
},
    {
        "base_attack": 223,
        "base_defense": 151,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 124,
        "pokemon_name": "Jynx"
},
    {
        "base_attack": 198,
        "base_defense": 158,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 125,
        "pokemon_name": "Electabuzz"
},
    {
        "base_attack": 206,
        "base_defense": 154,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 126,
        "pokemon_name": "Magmar"
},
    {
        "base_attack": 238,
        "base_defense": 182,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 127,
        "pokemon_name": "Pinsir"
},
    {
        "base_attack": 198,
        "base_defense": 183,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 128,
        "pokemon_name": "Tauros"
},
    {
        "base_attack": 29,
        "base_defense": 85,
        "base_stamina": 85,
        "form": "Normal",
        "pokemon_id": 129,
        "pokemon_name": "Magikarp"
},
    {
        "base_attack": 237,
        "base_defense": 186,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 130,
        "pokemon_name": "Gyarados"
},
    {
        "base_attack": 165,
        "base_defense": 174,
        "base_stamina": 277,
        "form": "Normal",
        "pokemon_id": 131,
        "pokemon_name": "Lapras"
},
    {
        "base_attack": 91,
        "base_defense": 91,
        "base_stamina": 134,
        "form": "Normal",
        "pokemon_id": 132,
        "pokemon_name": "Ditto"
},
    {
        "base_attack": 104,
        "base_defense": 114,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 133,
        "pokemon_name": "Eevee"
},
    {
        "base_attack": 205,
        "base_defense": 161,
        "base_stamina": 277,
        "form": "Normal",
        "pokemon_id": 134,
        "pokemon_name": "Vaporeon"
},
    {
        "base_attack": 232,
        "base_defense": 182,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 135,
        "pokemon_name": "Jolteon"
},
    {
        "base_attack": 246,
        "base_defense": 179,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 136,
        "pokemon_name": "Flareon"
},
    {
        "base_attack": 153,
        "base_defense": 136,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 137,
        "pokemon_name": "Porygon"
},
    {
        "base_attack": 155,
        "base_defense": 153,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 138,
        "pokemon_name": "Omanyte"
},
    {
        "base_attack": 207,
        "base_defense": 201,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 139,
        "pokemon_name": "Omastar"
},
    {
        "base_attack": 148,
        "base_defense": 140,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 140,
        "pokemon_name": "Kabuto"
},
    {
        "base_attack": 220,
        "base_defense": 186,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 141,
        "pokemon_name": "Kabutops"
},
    {
        "base_attack": 221,
        "base_defense": 159,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 142,
        "pokemon_name": "Aerodactyl"
},
    {
        "base_attack": 190,
        "base_defense": 169,
        "base_stamina": 330,
        "form": "Normal",
        "pokemon_id": 143,
        "pokemon_name": "Snorlax"
},
    {
        "base_attack": 192,
        "base_defense": 236,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 144,
        "pokemon_name": "Articuno"
},
    {
        "base_attack": 253,
        "base_defense": 185,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 145,
        "pokemon_name": "Zapdos"
},
    {
        "base_attack": 251,
        "base_defense": 181,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 146,
        "pokemon_name": "Moltres"
},
    {
        "base_attack": 119,
        "base_defense": 91,
        "base_stamina": 121,
        "form": "Normal",
        "pokemon_id": 147,
        "pokemon_name": "Dratini"
},
    {
        "base_attack": 163,
        "base_defense": 135,
        "base_stamina": 156,
        "form": "Normal",
        "pokemon_id": 148,
        "pokemon_name": "Dragonair"
},
    {
        "base_attack": 263,
        "base_defense": 198,
        "base_stamina": 209,
        "form": "Normal",
        "pokemon_id": 149,
        "pokemon_name": "Dragonite"
},
    {
        "base_attack": 182,
        "base_defense": 278,
        "base_stamina": 214,
        "form": "A",
        "pokemon_id": 150,
        "pokemon_name": "Mewtwo"
},
    {
        "base_attack": 300,
        "base_defense": 182,
        "base_stamina": 214,
        "form": "Normal",
        "pokemon_id": 150,
        "pokemon_name": "Mewtwo"
},
    {
        "base_attack": 210,
        "base_defense": 210,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 151,
        "pokemon_name": "Mew"
},
    {
        "base_attack": 92,
        "base_defense": 122,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 152,
        "pokemon_name": "Chikorita"
},
    {
        "base_attack": 122,
        "base_defense": 155,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 153,
        "pokemon_name": "Bayleef"
},
    {
        "base_attack": 168,
        "base_defense": 202,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 154,
        "pokemon_name": "Meganium"
},
    {
        "base_attack": 116,
        "base_defense": 93,
        "base_stamina": 118,
        "form": "Normal",
        "pokemon_id": 155,
        "pokemon_name": "Cyndaquil"
},
    {
        "base_attack": 158,
        "base_defense": 126,
        "base_stamina": 151,
        "form": "Normal",
        "pokemon_id": 156,
        "pokemon_name": "Quilava"
},
    {
        "base_attack": 223,
        "base_defense": 173,
        "base_stamina": 186,
        "form": "Normal",
        "pokemon_id": 157,
        "pokemon_name": "Typhlosion"
},
    {
        "base_attack": 117,
        "base_defense": 109,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 158,
        "pokemon_name": "Totodile"
},
    {
        "base_attack": 150,
        "base_defense": 142,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 159,
        "pokemon_name": "Croconaw"
},
    {
        "base_attack": 205,
        "base_defense": 188,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 160,
        "pokemon_name": "Feraligatr"
},
    {
        "base_attack": 79,
        "base_defense": 73,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 161,
        "pokemon_name": "Sentret"
},
    {
        "base_attack": 148,
        "base_defense": 125,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 162,
        "pokemon_name": "Furret"
},
    {
        "base_attack": 67,
        "base_defense": 88,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 163,
        "pokemon_name": "Hoothoot"
},
    {
        "base_attack": 145,
        "base_defense": 156,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 164,
        "pokemon_name": "Noctowl"
},
    {
        "base_attack": 72,
        "base_defense": 118,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 165,
        "pokemon_name": "Ledyba"
},
    {
        "base_attack": 107,
        "base_defense": 179,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 166,
        "pokemon_name": "Ledian"
},
    {
        "base_attack": 105,
        "base_defense": 73,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 167,
        "pokemon_name": "Spinarak"
},
    {
        "base_attack": 161,
        "base_defense": 124,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 168,
        "pokemon_name": "Ariados"
},
    {
        "base_attack": 194,
        "base_defense": 178,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 169,
        "pokemon_name": "Crobat"
},
    {
        "base_attack": 106,
        "base_defense": 97,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 170,
        "pokemon_name": "Chinchou"
},
    {
        "base_attack": 146,
        "base_defense": 137,
        "base_stamina": 268,
        "form": "Normal",
        "pokemon_id": 171,
        "pokemon_name": "Lanturn"
},
    {
        "base_attack": 77,
        "base_defense": 53,
        "base_stamina": 85,
        "form": "Normal",
        "pokemon_id": 172,
        "pokemon_name": "Pichu"
},
    {
        "base_attack": 75,
        "base_defense": 79,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 173,
        "pokemon_name": "Cleffa"
},
    {
        "base_attack": 69,
        "base_defense": 32,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 174,
        "pokemon_name": "Igglybuff"
},
    {
        "base_attack": 67,
        "base_defense": 116,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 175,
        "pokemon_name": "Togepi"
},
    {
        "base_attack": 139,
        "base_defense": 181,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 176,
        "pokemon_name": "Togetic"
},
    {
        "base_attack": 134,
        "base_defense": 89,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 177,
        "pokemon_name": "Natu"
},
    {
        "base_attack": 192,
        "base_defense": 146,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 178,
        "pokemon_name": "Xatu"
},
    {
        "base_attack": 114,
        "base_defense": 79,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 179,
        "pokemon_name": "Mareep"
},
    {
        "base_attack": 145,
        "base_defense": 109,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 180,
        "pokemon_name": "Flaaffy"
},
    {
        "base_attack": 211,
        "base_defense": 169,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 181,
        "pokemon_name": "Ampharos"
},
    {
        "base_attack": 169,
        "base_defense": 186,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 182,
        "pokemon_name": "Bellossom"
},
    {
        "base_attack": 37,
        "base_defense": 93,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 183,
        "pokemon_name": "Marill"
},
    {
        "base_attack": 112,
        "base_defense": 152,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 184,
        "pokemon_name": "Azumarill"
},
    {
        "base_attack": 167,
        "base_defense": 176,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 185,
        "pokemon_name": "Sudowoodo"
},
    {
        "base_attack": 174,
        "base_defense": 179,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 186,
        "pokemon_name": "Politoed"
},
    {
        "base_attack": 67,
        "base_defense": 94,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 187,
        "pokemon_name": "Hoppip"
},
    {
        "base_attack": 91,
        "base_defense": 120,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 188,
        "pokemon_name": "Skiploom"
},
    {
        "base_attack": 118,
        "base_defense": 183,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 189,
        "pokemon_name": "Jumpluff"
},
    {
        "base_attack": 136,
        "base_defense": 112,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 190,
        "pokemon_name": "Aipom"
},
    {
        "base_attack": 55,
        "base_defense": 55,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 191,
        "pokemon_name": "Sunkern"
},
    {
        "base_attack": 185,
        "base_defense": 135,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 192,
        "pokemon_name": "Sunflora"
},
    {
        "base_attack": 154,
        "base_defense": 94,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 193,
        "pokemon_name": "Yanma"
},
    {
        "base_attack": 75,
        "base_defense": 66,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 194,
        "pokemon_name": "Wooper"
},
    {
        "base_attack": 152,
        "base_defense": 143,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 195,
        "pokemon_name": "Quagsire"
},
    {
        "base_attack": 261,
        "base_defense": 175,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 196,
        "pokemon_name": "Espeon"
},
    {
        "base_attack": 126,
        "base_defense": 240,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 197,
        "pokemon_name": "Umbreon"
},
    {
        "base_attack": 175,
        "base_defense": 87,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 198,
        "pokemon_name": "Murkrow"
},
    {
        "base_attack": 177,
        "base_defense": 180,
        "base_stamina": 216,
        "form": "2022",
        "pokemon_id": 199,
        "pokemon_name": "Slowking"
},
    {
        "base_attack": 190,
        "base_defense": 180,
        "base_stamina": 216,
        "form": "Galarian",
        "pokemon_id": 199,
        "pokemon_name": "Slowking"
},
    {
        "base_attack": 177,
        "base_defense": 180,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 199,
        "pokemon_name": "Slowking"
},
    {
        "base_attack": 167,
        "base_defense": 154,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 200,
        "pokemon_name": "Misdreavus"
},
    {
        "base_attack": 136,
        "base_defense": 91,
        "base_stamina": 134,
        "form": "Normal",
        "pokemon_id": 201,
        "pokemon_name": "Unown"
},
    {
        "base_attack": 60,
        "base_defense": 106,
        "base_stamina": 382,
        "form": "Normal",
        "pokemon_id": 202,
        "pokemon_name": "Wobbuffet"
},
    {
        "base_attack": 182,
        "base_defense": 133,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 203,
        "pokemon_name": "Girafarig"
},
    {
        "base_attack": 108,
        "base_defense": 122,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 204,
        "pokemon_name": "Pineco"
},
    {
        "base_attack": 161,
        "base_defense": 205,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 205,
        "pokemon_name": "Forretress"
},
    {
        "base_attack": 131,
        "base_defense": 128,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 206,
        "pokemon_name": "Dunsparce"
},
    {
        "base_attack": 143,
        "base_defense": 184,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 207,
        "pokemon_name": "Gligar"
},
    {
        "base_attack": 148,
        "base_defense": 272,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 208,
        "pokemon_name": "Steelix"
},
    {
        "base_attack": 137,
        "base_defense": 85,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 209,
        "pokemon_name": "Snubbull"
},
    {
        "base_attack": 212,
        "base_defense": 131,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 210,
        "pokemon_name": "Granbull"
},
    {
        "base_attack": 184,
        "base_defense": 138,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 211,
        "pokemon_name": "Qwilfish"
},
    {
        "base_attack": 236,
        "base_defense": 181,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 212,
        "pokemon_name": "Scizor"
},
    {
        "base_attack": 17,
        "base_defense": 396,
        "base_stamina": 85,
        "form": "Normal",
        "pokemon_id": 213,
        "pokemon_name": "Shuckle"
},
    {
        "base_attack": 234,
        "base_defense": 179,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 214,
        "pokemon_name": "Heracross"
},
    {
        "base_attack": 189,
        "base_defense": 146,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 215,
        "pokemon_name": "Sneasel"
},
    {
        "base_attack": 142,
        "base_defense": 93,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 216,
        "pokemon_name": "Teddiursa"
},
    {
        "base_attack": 236,
        "base_defense": 144,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 217,
        "pokemon_name": "Ursaring"
},
    {
        "base_attack": 118,
        "base_defense": 71,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 218,
        "pokemon_name": "Slugma"
},
    {
        "base_attack": 139,
        "base_defense": 191,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 219,
        "pokemon_name": "Magcargo"
},
    {
        "base_attack": 90,
        "base_defense": 69,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 220,
        "pokemon_name": "Swinub"
},
    {
        "base_attack": 181,
        "base_defense": 138,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 221,
        "pokemon_name": "Piloswine"
},
    {
        "base_attack": 118,
        "base_defense": 156,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 222,
        "pokemon_name": "Corsola"
},
    {
        "base_attack": 127,
        "base_defense": 69,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 223,
        "pokemon_name": "Remoraid"
},
    {
        "base_attack": 197,
        "base_defense": 141,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 224,
        "pokemon_name": "Octillery"
},
    {
        "base_attack": 128,
        "base_defense": 90,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 225,
        "pokemon_name": "Delibird"
},
    {
        "base_attack": 128,
        "base_defense": 90,
        "base_stamina": 128,
        "form": "Winter_2020",
        "pokemon_id": 225,
        "pokemon_name": "Delibird"
},
    {
        "base_attack": 148,
        "base_defense": 226,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 226,
        "pokemon_name": "Mantine"
},
    {
        "base_attack": 148,
        "base_defense": 226,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 227,
        "pokemon_name": "Skarmory"
},
    {
        "base_attack": 152,
        "base_defense": 83,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 228,
        "pokemon_name": "Houndour"
},
    {
        "base_attack": 224,
        "base_defense": 144,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 229,
        "pokemon_name": "Houndoom"
},
    {
        "base_attack": 194,
        "base_defense": 194,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 230,
        "pokemon_name": "Kingdra"
},
    {
        "base_attack": 107,
        "base_defense": 98,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 231,
        "pokemon_name": "Phanpy"
},
    {
        "base_attack": 214,
        "base_defense": 185,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 232,
        "pokemon_name": "Donphan"
},
    {
        "base_attack": 198,
        "base_defense": 180,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 233,
        "pokemon_name": "Porygon2"
},
    {
        "base_attack": 192,
        "base_defense": 131,
        "base_stamina": 177,
        "form": "Normal",
        "pokemon_id": 234,
        "pokemon_name": "Stantler"
},
    {
        "base_attack": 40,
        "base_defense": 83,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 235,
        "pokemon_name": "Smeargle"
},
    {
        "base_attack": 64,
        "base_defense": 64,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 236,
        "pokemon_name": "Tyrogue"
},
    {
        "base_attack": 173,
        "base_defense": 207,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 237,
        "pokemon_name": "Hitmontop"
},
    {
        "base_attack": 153,
        "base_defense": 91,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 238,
        "pokemon_name": "Smoochum"
},
    {
        "base_attack": 135,
        "base_defense": 101,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 239,
        "pokemon_name": "Elekid"
},
    {
        "base_attack": 151,
        "base_defense": 99,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 240,
        "pokemon_name": "Magby"
},
    {
        "base_attack": 157,
        "base_defense": 193,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 241,
        "pokemon_name": "Miltank"
},
    {
        "base_attack": 129,
        "base_defense": 169,
        "base_stamina": 496,
        "form": "Normal",
        "pokemon_id": 242,
        "pokemon_name": "Blissey"
},
    {
        "base_attack": 241,
        "base_defense": 195,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 243,
        "pokemon_name": "Raikou"
},
    {
        "base_attack": 241,
        "base_defense": 195,
        "base_stamina": 207,
        "form": "S",
        "pokemon_id": 243,
        "pokemon_name": "Raikou"
},
    {
        "base_attack": 235,
        "base_defense": 171,
        "base_stamina": 251,
        "form": "Normal",
        "pokemon_id": 244,
        "pokemon_name": "Entei"
},
    {
        "base_attack": 235,
        "base_defense": 171,
        "base_stamina": 251,
        "form": "S",
        "pokemon_id": 244,
        "pokemon_name": "Entei"
},
    {
        "base_attack": 180,
        "base_defense": 235,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 245,
        "pokemon_name": "Suicune"
},
    {
        "base_attack": 180,
        "base_defense": 235,
        "base_stamina": 225,
        "form": "S",
        "pokemon_id": 245,
        "pokemon_name": "Suicune"
},
    {
        "base_attack": 115,
        "base_defense": 93,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 246,
        "pokemon_name": "Larvitar"
},
    {
        "base_attack": 155,
        "base_defense": 133,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 247,
        "pokemon_name": "Pupitar"
},
    {
        "base_attack": 251,
        "base_defense": 207,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 248,
        "pokemon_name": "Tyranitar"
},
    {
        "base_attack": 193,
        "base_defense": 310,
        "base_stamina": 235,
        "form": "Normal",
        "pokemon_id": 249,
        "pokemon_name": "Lugia"
},
    {
        "base_attack": 193,
        "base_defense": 310,
        "base_stamina": 235,
        "form": "S",
        "pokemon_id": 249,
        "pokemon_name": "Lugia"
},
    {
        "base_attack": 239,
        "base_defense": 244,
        "base_stamina": 214,
        "form": "Normal",
        "pokemon_id": 250,
        "pokemon_name": "Ho-Oh"
},
    {
        "base_attack": 239,
        "base_defense": 244,
        "base_stamina": 214,
        "form": "S",
        "pokemon_id": 250,
        "pokemon_name": "Ho-Oh"
},
    {
        "base_attack": 210,
        "base_defense": 210,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 251,
        "pokemon_name": "Celebi"
},
    {
        "base_attack": 124,
        "base_defense": 94,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 252,
        "pokemon_name": "Treecko"
},
    {
        "base_attack": 172,
        "base_defense": 120,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 253,
        "pokemon_name": "Grovyle"
},
    {
        "base_attack": 223,
        "base_defense": 169,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 254,
        "pokemon_name": "Sceptile"
},
    {
        "base_attack": 130,
        "base_defense": 87,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 255,
        "pokemon_name": "Torchic"
},
    {
        "base_attack": 163,
        "base_defense": 115,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 256,
        "pokemon_name": "Combusken"
},
    {
        "base_attack": 240,
        "base_defense": 141,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 257,
        "pokemon_name": "Blaziken"
},
    {
        "base_attack": 126,
        "base_defense": 93,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 258,
        "pokemon_name": "Mudkip"
},
    {
        "base_attack": 156,
        "base_defense": 133,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 259,
        "pokemon_name": "Marshtomp"
},
    {
        "base_attack": 208,
        "base_defense": 175,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 260,
        "pokemon_name": "Swampert"
},
    {
        "base_attack": 96,
        "base_defense": 61,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 261,
        "pokemon_name": "Poochyena"
},
    {
        "base_attack": 171,
        "base_defense": 132,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 262,
        "pokemon_name": "Mightyena"
},
    {
        "base_attack": 58,
        "base_defense": 80,
        "base_stamina": 116,
        "form": "Galarian",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon"
},
    {
        "base_attack": 58,
        "base_defense": 80,
        "base_stamina": 116,
        "form": "Normal",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon"
},
    {
        "base_attack": 142,
        "base_defense": 128,
        "base_stamina": 186,
        "form": "Galarian",
        "pokemon_id": 264,
        "pokemon_name": "Linoone"
},
    {
        "base_attack": 142,
        "base_defense": 128,
        "base_stamina": 186,
        "form": "Normal",
        "pokemon_id": 264,
        "pokemon_name": "Linoone"
},
    {
        "base_attack": 75,
        "base_defense": 59,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 265,
        "pokemon_name": "Wurmple"
},
    {
        "base_attack": 60,
        "base_defense": 77,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 266,
        "pokemon_name": "Silcoon"
},
    {
        "base_attack": 189,
        "base_defense": 98,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 267,
        "pokemon_name": "Beautifly"
},
    {
        "base_attack": 60,
        "base_defense": 77,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 268,
        "pokemon_name": "Cascoon"
},
    {
        "base_attack": 98,
        "base_defense": 162,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 269,
        "pokemon_name": "Dustox"
},
    {
        "base_attack": 71,
        "base_defense": 77,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 270,
        "pokemon_name": "Lotad"
},
    {
        "base_attack": 112,
        "base_defense": 119,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 271,
        "pokemon_name": "Lombre"
},
    {
        "base_attack": 173,
        "base_defense": 176,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 272,
        "pokemon_name": "Ludicolo"
},
    {
        "base_attack": 71,
        "base_defense": 77,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 273,
        "pokemon_name": "Seedot"
},
    {
        "base_attack": 134,
        "base_defense": 78,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 274,
        "pokemon_name": "Nuzleaf"
},
    {
        "base_attack": 200,
        "base_defense": 121,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 275,
        "pokemon_name": "Shiftry"
},
    {
        "base_attack": 106,
        "base_defense": 61,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 276,
        "pokemon_name": "Taillow"
},
    {
        "base_attack": 185,
        "base_defense": 124,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 277,
        "pokemon_name": "Swellow"
},
    {
        "base_attack": 106,
        "base_defense": 61,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 278,
        "pokemon_name": "Wingull"
},
    {
        "base_attack": 175,
        "base_defense": 174,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 279,
        "pokemon_name": "Pelipper"
},
    {
        "base_attack": 79,
        "base_defense": 59,
        "base_stamina": 99,
        "form": "Normal",
        "pokemon_id": 280,
        "pokemon_name": "Ralts"
},
    {
        "base_attack": 117,
        "base_defense": 90,
        "base_stamina": 116,
        "form": "Normal",
        "pokemon_id": 281,
        "pokemon_name": "Kirlia"
},
    {
        "base_attack": 237,
        "base_defense": 195,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 282,
        "pokemon_name": "Gardevoir"
},
    {
        "base_attack": 93,
        "base_defense": 87,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 283,
        "pokemon_name": "Surskit"
},
    {
        "base_attack": 192,
        "base_defense": 150,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 284,
        "pokemon_name": "Masquerain"
},
    {
        "base_attack": 74,
        "base_defense": 110,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 285,
        "pokemon_name": "Shroomish"
},
    {
        "base_attack": 241,
        "base_defense": 144,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 286,
        "pokemon_name": "Breloom"
},
    {
        "base_attack": 104,
        "base_defense": 92,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 287,
        "pokemon_name": "Slakoth"
},
    {
        "base_attack": 159,
        "base_defense": 145,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 288,
        "pokemon_name": "Vigoroth"
},
    {
        "base_attack": 290,
        "base_defense": 166,
        "base_stamina": 284,
        "form": "Normal",
        "pokemon_id": 289,
        "pokemon_name": "Slaking"
},
    {
        "base_attack": 80,
        "base_defense": 126,
        "base_stamina": 104,
        "form": "Normal",
        "pokemon_id": 290,
        "pokemon_name": "Nincada"
},
    {
        "base_attack": 199,
        "base_defense": 112,
        "base_stamina": 156,
        "form": "Normal",
        "pokemon_id": 291,
        "pokemon_name": "Ninjask"
},
    {
        "base_attack": 153,
        "base_defense": 73,
        "base_stamina": 1,
        "form": "Normal",
        "pokemon_id": 292,
        "pokemon_name": "Shedinja"
},
    {
        "base_attack": 92,
        "base_defense": 42,
        "base_stamina": 162,
        "form": "Normal",
        "pokemon_id": 293,
        "pokemon_name": "Whismur"
},
    {
        "base_attack": 134,
        "base_defense": 81,
        "base_stamina": 197,
        "form": "Normal",
        "pokemon_id": 294,
        "pokemon_name": "Loudred"
},
    {
        "base_attack": 179,
        "base_defense": 137,
        "base_stamina": 232,
        "form": "Normal",
        "pokemon_id": 295,
        "pokemon_name": "Exploud"
},
    {
        "base_attack": 99,
        "base_defense": 54,
        "base_stamina": 176,
        "form": "Normal",
        "pokemon_id": 296,
        "pokemon_name": "Makuhita"
},
    {
        "base_attack": 209,
        "base_defense": 114,
        "base_stamina": 302,
        "form": "Normal",
        "pokemon_id": 297,
        "pokemon_name": "Hariyama"
},
    {
        "base_attack": 36,
        "base_defense": 71,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 298,
        "pokemon_name": "Azurill"
},
    {
        "base_attack": 82,
        "base_defense": 215,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 299,
        "pokemon_name": "Nosepass"
},
    {
        "base_attack": 84,
        "base_defense": 79,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 300,
        "pokemon_name": "Skitty"
},
    {
        "base_attack": 132,
        "base_defense": 127,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 301,
        "pokemon_name": "Delcatty"
},
    {
        "base_attack": 141,
        "base_defense": 136,
        "base_stamina": 137,
        "form": "Costume_2020",
        "pokemon_id": 302,
        "pokemon_name": "Sableye"
},
    {
        "base_attack": 141,
        "base_defense": 136,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 302,
        "pokemon_name": "Sableye"
},
    {
        "base_attack": 155,
        "base_defense": 141,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 303,
        "pokemon_name": "Mawile"
},
    {
        "base_attack": 121,
        "base_defense": 141,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 304,
        "pokemon_name": "Aron"
},
    {
        "base_attack": 158,
        "base_defense": 198,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 305,
        "pokemon_name": "Lairon"
},
    {
        "base_attack": 198,
        "base_defense": 257,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 306,
        "pokemon_name": "Aggron"
},
    {
        "base_attack": 78,
        "base_defense": 107,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 307,
        "pokemon_name": "Meditite"
},
    {
        "base_attack": 121,
        "base_defense": 152,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 308,
        "pokemon_name": "Medicham"
},
    {
        "base_attack": 123,
        "base_defense": 78,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 309,
        "pokemon_name": "Electrike"
},
    {
        "base_attack": 215,
        "base_defense": 127,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 310,
        "pokemon_name": "Manectric"
},
    {
        "base_attack": 167,
        "base_defense": 129,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 311,
        "pokemon_name": "Plusle"
},
    {
        "base_attack": 147,
        "base_defense": 150,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 312,
        "pokemon_name": "Minun"
},
    {
        "base_attack": 143,
        "base_defense": 166,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 313,
        "pokemon_name": "Volbeat"
},
    {
        "base_attack": 143,
        "base_defense": 166,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 314,
        "pokemon_name": "Illumise"
},
    {
        "base_attack": 186,
        "base_defense": 131,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 315,
        "pokemon_name": "Roselia"
},
    {
        "base_attack": 80,
        "base_defense": 99,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 316,
        "pokemon_name": "Gulpin"
},
    {
        "base_attack": 140,
        "base_defense": 159,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 317,
        "pokemon_name": "Swalot"
},
    {
        "base_attack": 171,
        "base_defense": 39,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 318,
        "pokemon_name": "Carvanha"
},
    {
        "base_attack": 243,
        "base_defense": 83,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 319,
        "pokemon_name": "Sharpedo"
},
    {
        "base_attack": 136,
        "base_defense": 68,
        "base_stamina": 277,
        "form": "Normal",
        "pokemon_id": 320,
        "pokemon_name": "Wailmer"
},
    {
        "base_attack": 175,
        "base_defense": 87,
        "base_stamina": 347,
        "form": "Normal",
        "pokemon_id": 321,
        "pokemon_name": "Wailord"
},
    {
        "base_attack": 119,
        "base_defense": 79,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 322,
        "pokemon_name": "Numel"
},
    {
        "base_attack": 194,
        "base_defense": 136,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 323,
        "pokemon_name": "Camerupt"
},
    {
        "base_attack": 151,
        "base_defense": 203,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 324,
        "pokemon_name": "Torkoal"
},
    {
        "base_attack": 125,
        "base_defense": 122,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 325,
        "pokemon_name": "Spoink"
},
    {
        "base_attack": 171,
        "base_defense": 188,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 326,
        "pokemon_name": "Grumpig"
},
    {
        "base_attack": 116,
        "base_defense": 116,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 327,
        "pokemon_name": "Spinda"
},
    {
        "base_attack": 162,
        "base_defense": 78,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 328,
        "pokemon_name": "Trapinch"
},
    {
        "base_attack": 134,
        "base_defense": 99,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 329,
        "pokemon_name": "Vibrava"
},
    {
        "base_attack": 205,
        "base_defense": 168,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 330,
        "pokemon_name": "Flygon"
},
    {
        "base_attack": 156,
        "base_defense": 74,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 331,
        "pokemon_name": "Cacnea"
},
    {
        "base_attack": 221,
        "base_defense": 115,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 332,
        "pokemon_name": "Cacturne"
},
    {
        "base_attack": 76,
        "base_defense": 132,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 333,
        "pokemon_name": "Swablu"
},
    {
        "base_attack": 141,
        "base_defense": 201,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 334,
        "pokemon_name": "Altaria"
},
    {
        "base_attack": 222,
        "base_defense": 124,
        "base_stamina": 177,
        "form": "Normal",
        "pokemon_id": 335,
        "pokemon_name": "Zangoose"
},
    {
        "base_attack": 196,
        "base_defense": 118,
        "base_stamina": 177,
        "form": "Normal",
        "pokemon_id": 336,
        "pokemon_name": "Seviper"
},
    {
        "base_attack": 178,
        "base_defense": 153,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 337,
        "pokemon_name": "Lunatone"
},
    {
        "base_attack": 178,
        "base_defense": 153,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 338,
        "pokemon_name": "Solrock"
},
    {
        "base_attack": 93,
        "base_defense": 82,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 339,
        "pokemon_name": "Barboach"
},
    {
        "base_attack": 151,
        "base_defense": 141,
        "base_stamina": 242,
        "form": "Normal",
        "pokemon_id": 340,
        "pokemon_name": "Whiscash"
},
    {
        "base_attack": 141,
        "base_defense": 99,
        "base_stamina": 125,
        "form": "Normal",
        "pokemon_id": 341,
        "pokemon_name": "Corphish"
},
    {
        "base_attack": 224,
        "base_defense": 142,
        "base_stamina": 160,
        "form": "Normal",
        "pokemon_id": 342,
        "pokemon_name": "Crawdaunt"
},
    {
        "base_attack": 77,
        "base_defense": 124,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 343,
        "pokemon_name": "Baltoy"
},
    {
        "base_attack": 140,
        "base_defense": 229,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 344,
        "pokemon_name": "Claydol"
},
    {
        "base_attack": 105,
        "base_defense": 150,
        "base_stamina": 165,
        "form": "Normal",
        "pokemon_id": 345,
        "pokemon_name": "Lileep"
},
    {
        "base_attack": 152,
        "base_defense": 194,
        "base_stamina": 200,
        "form": "Normal",
        "pokemon_id": 346,
        "pokemon_name": "Cradily"
},
    {
        "base_attack": 176,
        "base_defense": 100,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 347,
        "pokemon_name": "Anorith"
},
    {
        "base_attack": 222,
        "base_defense": 174,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 348,
        "pokemon_name": "Armaldo"
},
    {
        "base_attack": 29,
        "base_defense": 85,
        "base_stamina": 85,
        "form": "Normal",
        "pokemon_id": 349,
        "pokemon_name": "Feebas"
},
    {
        "base_attack": 192,
        "base_defense": 219,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 350,
        "pokemon_name": "Milotic"
},
    {
        "base_attack": 139,
        "base_defense": 139,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
},
    {
        "base_attack": 139,
        "base_defense": 139,
        "base_stamina": 172,
        "form": "Rainy",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
},
    {
        "base_attack": 139,
        "base_defense": 139,
        "base_stamina": 172,
        "form": "Snowy",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
},
    {
        "base_attack": 139,
        "base_defense": 139,
        "base_stamina": 172,
        "form": "Sunny",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
},
    {
        "base_attack": 161,
        "base_defense": 189,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 352,
        "pokemon_name": "Kecleon"
},
    {
        "base_attack": 138,
        "base_defense": 65,
        "base_stamina": 127,
        "form": "Normal",
        "pokemon_id": 353,
        "pokemon_name": "Shuppet"
},
    {
        "base_attack": 218,
        "base_defense": 126,
        "base_stamina": 162,
        "form": "Normal",
        "pokemon_id": 354,
        "pokemon_name": "Banette"
},
    {
        "base_attack": 70,
        "base_defense": 162,
        "base_stamina": 85,
        "form": "Normal",
        "pokemon_id": 355,
        "pokemon_name": "Duskull"
},
    {
        "base_attack": 124,
        "base_defense": 234,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 356,
        "pokemon_name": "Dusclops"
},
    {
        "base_attack": 136,
        "base_defense": 163,
        "base_stamina": 223,
        "form": "Normal",
        "pokemon_id": 357,
        "pokemon_name": "Tropius"
},
    {
        "base_attack": 175,
        "base_defense": 170,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 358,
        "pokemon_name": "Chimecho"
},
    {
        "base_attack": 246,
        "base_defense": 120,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 359,
        "pokemon_name": "Absol"
},
    {
        "base_attack": 41,
        "base_defense": 86,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 360,
        "pokemon_name": "Wynaut"
},
    {
        "base_attack": 95,
        "base_defense": 95,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 361,
        "pokemon_name": "Snorunt"
},
    {
        "base_attack": 162,
        "base_defense": 162,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 362,
        "pokemon_name": "Glalie"
},
    {
        "base_attack": 95,
        "base_defense": 90,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 363,
        "pokemon_name": "Spheal"
},
    {
        "base_attack": 137,
        "base_defense": 132,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 364,
        "pokemon_name": "Sealeo"
},
    {
        "base_attack": 182,
        "base_defense": 176,
        "base_stamina": 242,
        "form": "Normal",
        "pokemon_id": 365,
        "pokemon_name": "Walrein"
},
    {
        "base_attack": 133,
        "base_defense": 135,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 366,
        "pokemon_name": "Clamperl"
},
    {
        "base_attack": 197,
        "base_defense": 179,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 367,
        "pokemon_name": "Huntail"
},
    {
        "base_attack": 211,
        "base_defense": 179,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 368,
        "pokemon_name": "Gorebyss"
},
    {
        "base_attack": 162,
        "base_defense": 203,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 369,
        "pokemon_name": "Relicanth"
},
    {
        "base_attack": 81,
        "base_defense": 128,
        "base_stamina": 125,
        "form": "Normal",
        "pokemon_id": 370,
        "pokemon_name": "Luvdisc"
},
    {
        "base_attack": 134,
        "base_defense": 93,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 371,
        "pokemon_name": "Bagon"
},
    {
        "base_attack": 172,
        "base_defense": 155,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 372,
        "pokemon_name": "Shelgon"
},
    {
        "base_attack": 277,
        "base_defense": 168,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 373,
        "pokemon_name": "Salamence"
},
    {
        "base_attack": 96,
        "base_defense": 132,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 374,
        "pokemon_name": "Beldum"
},
    {
        "base_attack": 138,
        "base_defense": 176,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 375,
        "pokemon_name": "Metang"
},
    {
        "base_attack": 257,
        "base_defense": 228,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 376,
        "pokemon_name": "Metagross"
},
    {
        "base_attack": 179,
        "base_defense": 309,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 377,
        "pokemon_name": "Regirock"
},
    {
        "base_attack": 179,
        "base_defense": 309,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 378,
        "pokemon_name": "Regice"
},
    {
        "base_attack": 143,
        "base_defense": 285,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 379,
        "pokemon_name": "Registeel"
},
    {
        "base_attack": 228,
        "base_defense": 246,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 380,
        "pokemon_name": "Latias"
},
    {
        "base_attack": 268,
        "base_defense": 212,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 381,
        "pokemon_name": "Latios"
},
    {
        "base_attack": 270,
        "base_defense": 228,
        "base_stamina": 205,
        "form": "Normal",
        "pokemon_id": 382,
        "pokemon_name": "Kyogre"
},
    {
        "base_attack": 270,
        "base_defense": 228,
        "base_stamina": 205,
        "form": "Normal",
        "pokemon_id": 383,
        "pokemon_name": "Groudon"
},
    {
        "base_attack": 284,
        "base_defense": 170,
        "base_stamina": 213,
        "form": "Normal",
        "pokemon_id": 384,
        "pokemon_name": "Rayquaza"
},
    {
        "base_attack": 210,
        "base_defense": 210,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 385,
        "pokemon_name": "Jirachi"
},
    {
        "base_attack": 414,
        "base_defense": 46,
        "base_stamina": 137,
        "form": "Attack",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
},
    {
        "base_attack": 144,
        "base_defense": 330,
        "base_stamina": 137,
        "form": "Defense",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
},
    {
        "base_attack": 345,
        "base_defense": 115,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
},
    {
        "base_attack": 230,
        "base_defense": 218,
        "base_stamina": 137,
        "form": "Speed",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
},
    {
        "base_attack": 119,
        "base_defense": 110,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 387,
        "pokemon_name": "Turtwig"
},
    {
        "base_attack": 157,
        "base_defense": 143,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 388,
        "pokemon_name": "Grotle"
},
    {
        "base_attack": 202,
        "base_defense": 188,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 389,
        "pokemon_name": "Torterra"
},
    {
        "base_attack": 113,
        "base_defense": 86,
        "base_stamina": 127,
        "form": "Normal",
        "pokemon_id": 390,
        "pokemon_name": "Chimchar"
},
    {
        "base_attack": 158,
        "base_defense": 105,
        "base_stamina": 162,
        "form": "Normal",
        "pokemon_id": 391,
        "pokemon_name": "Monferno"
},
    {
        "base_attack": 222,
        "base_defense": 151,
        "base_stamina": 183,
        "form": "Normal",
        "pokemon_id": 392,
        "pokemon_name": "Infernape"
},
    {
        "base_attack": 112,
        "base_defense": 102,
        "base_stamina": 142,
        "form": "Normal",
        "pokemon_id": 393,
        "pokemon_name": "Piplup"
},
    {
        "base_attack": 150,
        "base_defense": 139,
        "base_stamina": 162,
        "form": "Normal",
        "pokemon_id": 394,
        "pokemon_name": "Prinplup"
},
    {
        "base_attack": 210,
        "base_defense": 186,
        "base_stamina": 197,
        "form": "Normal",
        "pokemon_id": 395,
        "pokemon_name": "Empoleon"
},
    {
        "base_attack": 101,
        "base_defense": 58,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 396,
        "pokemon_name": "Starly"
},
    {
        "base_attack": 142,
        "base_defense": 94,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 397,
        "pokemon_name": "Staravia"
},
    {
        "base_attack": 234,
        "base_defense": 140,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 398,
        "pokemon_name": "Staraptor"
},
    {
        "base_attack": 80,
        "base_defense": 73,
        "base_stamina": 153,
        "form": "Normal",
        "pokemon_id": 399,
        "pokemon_name": "Bidoof"
},
    {
        "base_attack": 162,
        "base_defense": 119,
        "base_stamina": 188,
        "form": "Normal",
        "pokemon_id": 400,
        "pokemon_name": "Bibarel"
},
    {
        "base_attack": 45,
        "base_defense": 74,
        "base_stamina": 114,
        "form": "Normal",
        "pokemon_id": 401,
        "pokemon_name": "Kricketot"
},
    {
        "base_attack": 160,
        "base_defense": 100,
        "base_stamina": 184,
        "form": "Normal",
        "pokemon_id": 402,
        "pokemon_name": "Kricketune"
},
    {
        "base_attack": 117,
        "base_defense": 64,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 403,
        "pokemon_name": "Shinx"
},
    {
        "base_attack": 159,
        "base_defense": 95,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 404,
        "pokemon_name": "Luxio"
},
    {
        "base_attack": 232,
        "base_defense": 156,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 405,
        "pokemon_name": "Luxray"
},
    {
        "base_attack": 91,
        "base_defense": 109,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 406,
        "pokemon_name": "Budew"
},
    {
        "base_attack": 243,
        "base_defense": 185,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 407,
        "pokemon_name": "Roserade"
},
    {
        "base_attack": 218,
        "base_defense": 71,
        "base_stamina": 167,
        "form": "Normal",
        "pokemon_id": 408,
        "pokemon_name": "Cranidos"
},
    {
        "base_attack": 295,
        "base_defense": 109,
        "base_stamina": 219,
        "form": "Normal",
        "pokemon_id": 409,
        "pokemon_name": "Rampardos"
},
    {
        "base_attack": 76,
        "base_defense": 195,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 410,
        "pokemon_name": "Shieldon"
},
    {
        "base_attack": 94,
        "base_defense": 286,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 411,
        "pokemon_name": "Bastiodon"
},
    {
        "base_attack": 53,
        "base_defense": 83,
        "base_stamina": 120,
        "form": "Plant",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
},
    {
        "base_attack": 53,
        "base_defense": 83,
        "base_stamina": 120,
        "form": "Sandy",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
},
    {
        "base_attack": 53,
        "base_defense": 83,
        "base_stamina": 120,
        "form": "Trash",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
},
    {
        "base_attack": 141,
        "base_defense": 180,
        "base_stamina": 155,
        "form": "Plant",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam"
},
    {
        "base_attack": 141,
        "base_defense": 180,
        "base_stamina": 155,
        "form": "Sandy",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam"
},
    {
        "base_attack": 127,
        "base_defense": 175,
        "base_stamina": 155,
        "form": "Trash",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam"
},
    {
        "base_attack": 185,
        "base_defense": 98,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 414,
        "pokemon_name": "Mothim"
},
    {
        "base_attack": 59,
        "base_defense": 83,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 415,
        "pokemon_name": "Combee"
},
    {
        "base_attack": 149,
        "base_defense": 190,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 416,
        "pokemon_name": "Vespiquen"
},
    {
        "base_attack": 94,
        "base_defense": 172,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 417,
        "pokemon_name": "Pachirisu"
},
    {
        "base_attack": 132,
        "base_defense": 67,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 418,
        "pokemon_name": "Buizel"
},
    {
        "base_attack": 221,
        "base_defense": 114,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 419,
        "pokemon_name": "Floatzel"
},
    {
        "base_attack": 108,
        "base_defense": 92,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 420,
        "pokemon_name": "Cherubi"
},
    {
        "base_attack": 170,
        "base_defense": 153,
        "base_stamina": 172,
        "form": "Overcast",
        "pokemon_id": 421,
        "pokemon_name": "Cherrim"
},
    {
        "base_attack": 170,
        "base_defense": 153,
        "base_stamina": 172,
        "form": "Sunny",
        "pokemon_id": 421,
        "pokemon_name": "Cherrim"
},
    {
        "base_attack": 103,
        "base_defense": 105,
        "base_stamina": 183,
        "form": "East_sea",
        "pokemon_id": 422,
        "pokemon_name": "Shellos"
},
    {
        "base_attack": 103,
        "base_defense": 105,
        "base_stamina": 183,
        "form": "West_sea",
        "pokemon_id": 422,
        "pokemon_name": "Shellos"
},
    {
        "base_attack": 169,
        "base_defense": 143,
        "base_stamina": 244,
        "form": "East_sea",
        "pokemon_id": 423,
        "pokemon_name": "Gastrodon"
},
    {
        "base_attack": 169,
        "base_defense": 143,
        "base_stamina": 244,
        "form": "West_sea",
        "pokemon_id": 423,
        "pokemon_name": "Gastrodon"
},
    {
        "base_attack": 205,
        "base_defense": 143,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 424,
        "pokemon_name": "Ambipom"
},
    {
        "base_attack": 117,
        "base_defense": 80,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 425,
        "pokemon_name": "Drifloon"
},
    {
        "base_attack": 180,
        "base_defense": 102,
        "base_stamina": 312,
        "form": "Normal",
        "pokemon_id": 426,
        "pokemon_name": "Drifblim"
},
    {
        "base_attack": 130,
        "base_defense": 105,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 427,
        "pokemon_name": "Buneary"
},
    {
        "base_attack": 156,
        "base_defense": 194,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 428,
        "pokemon_name": "Lopunny"
},
    {
        "base_attack": 211,
        "base_defense": 187,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 429,
        "pokemon_name": "Mismagius"
},
    {
        "base_attack": 243,
        "base_defense": 103,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 430,
        "pokemon_name": "Honchkrow"
},
    {
        "base_attack": 109,
        "base_defense": 82,
        "base_stamina": 135,
        "form": "Normal",
        "pokemon_id": 431,
        "pokemon_name": "Glameow"
},
    {
        "base_attack": 172,
        "base_defense": 133,
        "base_stamina": 174,
        "form": "Normal",
        "pokemon_id": 432,
        "pokemon_name": "Purugly"
},
    {
        "base_attack": 114,
        "base_defense": 94,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 433,
        "pokemon_name": "Chingling"
},
    {
        "base_attack": 121,
        "base_defense": 90,
        "base_stamina": 160,
        "form": "Normal",
        "pokemon_id": 434,
        "pokemon_name": "Stunky"
},
    {
        "base_attack": 184,
        "base_defense": 132,
        "base_stamina": 230,
        "form": "Normal",
        "pokemon_id": 435,
        "pokemon_name": "Skuntank"
},
    {
        "base_attack": 43,
        "base_defense": 154,
        "base_stamina": 149,
        "form": "Normal",
        "pokemon_id": 436,
        "pokemon_name": "Bronzor"
},
    {
        "base_attack": 161,
        "base_defense": 213,
        "base_stamina": 167,
        "form": "Normal",
        "pokemon_id": 437,
        "pokemon_name": "Bronzong"
},
    {
        "base_attack": 124,
        "base_defense": 133,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 438,
        "pokemon_name": "Bonsly"
},
    {
        "base_attack": 125,
        "base_defense": 142,
        "base_stamina": 85,
        "form": "Normal",
        "pokemon_id": 439,
        "pokemon_name": "Mime Jr."
},
    {
        "base_attack": 25,
        "base_defense": 77,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 440,
        "pokemon_name": "Happiny"
},
    {
        "base_attack": 183,
        "base_defense": 91,
        "base_stamina": 183,
        "form": "Normal",
        "pokemon_id": 441,
        "pokemon_name": "Chatot"
},
    {
        "base_attack": 169,
        "base_defense": 199,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 442,
        "pokemon_name": "Spiritomb"
},
    {
        "base_attack": 124,
        "base_defense": 84,
        "base_stamina": 151,
        "form": "Normal",
        "pokemon_id": 443,
        "pokemon_name": "Gible"
},
    {
        "base_attack": 172,
        "base_defense": 125,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 444,
        "pokemon_name": "Gabite"
},
    {
        "base_attack": 261,
        "base_defense": 193,
        "base_stamina": 239,
        "form": "Normal",
        "pokemon_id": 445,
        "pokemon_name": "Garchomp"
},
    {
        "base_attack": 137,
        "base_defense": 117,
        "base_stamina": 286,
        "form": "Normal",
        "pokemon_id": 446,
        "pokemon_name": "Munchlax"
},
    {
        "base_attack": 127,
        "base_defense": 78,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 447,
        "pokemon_name": "Riolu"
},
    {
        "base_attack": 236,
        "base_defense": 144,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 448,
        "pokemon_name": "Lucario"
},
    {
        "base_attack": 124,
        "base_defense": 118,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 449,
        "pokemon_name": "Hippopotas"
},
    {
        "base_attack": 201,
        "base_defense": 191,
        "base_stamina": 239,
        "form": "Normal",
        "pokemon_id": 450,
        "pokemon_name": "Hippowdon"
},
    {
        "base_attack": 93,
        "base_defense": 151,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 451,
        "pokemon_name": "Skorupi"
},
    {
        "base_attack": 180,
        "base_defense": 202,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 452,
        "pokemon_name": "Drapion"
},
    {
        "base_attack": 116,
        "base_defense": 76,
        "base_stamina": 134,
        "form": "Normal",
        "pokemon_id": 453,
        "pokemon_name": "Croagunk"
},
    {
        "base_attack": 211,
        "base_defense": 133,
        "base_stamina": 195,
        "form": "Normal",
        "pokemon_id": 454,
        "pokemon_name": "Toxicroak"
},
    {
        "base_attack": 187,
        "base_defense": 136,
        "base_stamina": 179,
        "form": "Normal",
        "pokemon_id": 455,
        "pokemon_name": "Carnivine"
},
    {
        "base_attack": 96,
        "base_defense": 116,
        "base_stamina": 135,
        "form": "Normal",
        "pokemon_id": 456,
        "pokemon_name": "Finneon"
},
    {
        "base_attack": 142,
        "base_defense": 170,
        "base_stamina": 170,
        "form": "Normal",
        "pokemon_id": 457,
        "pokemon_name": "Lumineon"
},
    {
        "base_attack": 105,
        "base_defense": 179,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 458,
        "pokemon_name": "Mantyke"
},
    {
        "base_attack": 115,
        "base_defense": 105,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 459,
        "pokemon_name": "Snover"
},
    {
        "base_attack": 178,
        "base_defense": 158,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 460,
        "pokemon_name": "Abomasnow"
},
    {
        "base_attack": 243,
        "base_defense": 171,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 461,
        "pokemon_name": "Weavile"
},
    {
        "base_attack": 238,
        "base_defense": 205,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 462,
        "pokemon_name": "Magnezone"
},
    {
        "base_attack": 161,
        "base_defense": 181,
        "base_stamina": 242,
        "form": "Normal",
        "pokemon_id": 463,
        "pokemon_name": "Lickilicky"
},
    {
        "base_attack": 241,
        "base_defense": 190,
        "base_stamina": 251,
        "form": "Normal",
        "pokemon_id": 464,
        "pokemon_name": "Rhyperior"
},
    {
        "base_attack": 207,
        "base_defense": 184,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 465,
        "pokemon_name": "Tangrowth"
},
    {
        "base_attack": 249,
        "base_defense": 163,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 466,
        "pokemon_name": "Electivire"
},
    {
        "base_attack": 247,
        "base_defense": 172,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 467,
        "pokemon_name": "Magmortar"
},
    {
        "base_attack": 225,
        "base_defense": 217,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 468,
        "pokemon_name": "Togekiss"
},
    {
        "base_attack": 231,
        "base_defense": 156,
        "base_stamina": 200,
        "form": "Normal",
        "pokemon_id": 469,
        "pokemon_name": "Yanmega"
},
    {
        "base_attack": 216,
        "base_defense": 219,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 470,
        "pokemon_name": "Leafeon"
},
    {
        "base_attack": 238,
        "base_defense": 205,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 471,
        "pokemon_name": "Glaceon"
},
    {
        "base_attack": 185,
        "base_defense": 222,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 472,
        "pokemon_name": "Gliscor"
},
    {
        "base_attack": 247,
        "base_defense": 146,
        "base_stamina": 242,
        "form": "Normal",
        "pokemon_id": 473,
        "pokemon_name": "Mamoswine"
},
    {
        "base_attack": 264,
        "base_defense": 150,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 474,
        "pokemon_name": "Porygon-Z"
},
    {
        "base_attack": 237,
        "base_defense": 195,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 475,
        "pokemon_name": "Gallade"
},
    {
        "base_attack": 135,
        "base_defense": 275,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 476,
        "pokemon_name": "Probopass"
},
    {
        "base_attack": 180,
        "base_defense": 254,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 477,
        "pokemon_name": "Dusknoir"
},
    {
        "base_attack": 171,
        "base_defense": 150,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 478,
        "pokemon_name": "Froslass"
},
    {
        "base_attack": 204,
        "base_defense": 219,
        "base_stamina": 137,
        "form": "Fan",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
},
    {
        "base_attack": 204,
        "base_defense": 219,
        "base_stamina": 137,
        "form": "Frost",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
},
    {
        "base_attack": 204,
        "base_defense": 219,
        "base_stamina": 137,
        "form": "Heat",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
},
    {
        "base_attack": 204,
        "base_defense": 219,
        "base_stamina": 137,
        "form": "Mow",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
},
    {
        "base_attack": 185,
        "base_defense": 159,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
},
    {
        "base_attack": 204,
        "base_defense": 219,
        "base_stamina": 137,
        "form": "Wash",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
},
    {
        "base_attack": 156,
        "base_defense": 270,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 480,
        "pokemon_name": "Uxie"
},
    {
        "base_attack": 212,
        "base_defense": 212,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 481,
        "pokemon_name": "Mesprit"
},
    {
        "base_attack": 270,
        "base_defense": 151,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 482,
        "pokemon_name": "Azelf"
},
    {
        "base_attack": 275,
        "base_defense": 211,
        "base_stamina": 205,
        "form": "Normal",
        "pokemon_id": 483,
        "pokemon_name": "Dialga"
},
    {
        "base_attack": 280,
        "base_defense": 215,
        "base_stamina": 189,
        "form": "Normal",
        "pokemon_id": 484,
        "pokemon_name": "Palkia"
},
    {
        "base_attack": 251,
        "base_defense": 213,
        "base_stamina": 209,
        "form": "Normal",
        "pokemon_id": 485,
        "pokemon_name": "Heatran"
},
    {
        "base_attack": 287,
        "base_defense": 210,
        "base_stamina": 221,
        "form": "Normal",
        "pokemon_id": 486,
        "pokemon_name": "Regigigas"
},
    {
        "base_attack": 187,
        "base_defense": 225,
        "base_stamina": 284,
        "form": "Altered",
        "pokemon_id": 487,
        "pokemon_name": "Giratina"
},
    {
        "base_attack": 225,
        "base_defense": 187,
        "base_stamina": 284,
        "form": "Origin",
        "pokemon_id": 487,
        "pokemon_name": "Giratina"
},
    {
        "base_attack": 152,
        "base_defense": 258,
        "base_stamina": 260,
        "form": "Normal",
        "pokemon_id": 488,
        "pokemon_name": "Cresselia"
},
    {
        "base_attack": 162,
        "base_defense": 162,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 489,
        "pokemon_name": "Phione"
},
    {
        "base_attack": 210,
        "base_defense": 210,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 490,
        "pokemon_name": "Manaphy"
},
    {
        "base_attack": 285,
        "base_defense": 198,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 491,
        "pokemon_name": "Darkrai"
},
    {
        "base_attack": 210,
        "base_defense": 210,
        "base_stamina": 225,
        "form": "Land",
        "pokemon_id": 492,
        "pokemon_name": "Shaymin"
},
    {
        "base_attack": 261,
        "base_defense": 166,
        "base_stamina": 225,
        "form": "Sky",
        "pokemon_id": 492,
        "pokemon_name": "Shaymin"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Bug",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Dark",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Dragon",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Electric",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Fairy",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Fighting",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Fire",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Flying",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Ghost",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Grass",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Ground",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Ice",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Normal",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Poison",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Psychic",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Rock",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Steel",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 238,
        "base_defense": 238,
        "base_stamina": 237,
        "form": "Water",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
},
    {
        "base_attack": 210,
        "base_defense": 210,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 494,
        "pokemon_name": "Victini"
},
    {
        "base_attack": 88,
        "base_defense": 107,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 495,
        "pokemon_name": "Snivy"
},
    {
        "base_attack": 122,
        "base_defense": 152,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 496,
        "pokemon_name": "Servine"
},
    {
        "base_attack": 161,
        "base_defense": 204,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 497,
        "pokemon_name": "Serperior"
},
    {
        "base_attack": 115,
        "base_defense": 85,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 498,
        "pokemon_name": "Tepig"
},
    {
        "base_attack": 173,
        "base_defense": 106,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 499,
        "pokemon_name": "Pignite"
},
    {
        "base_attack": 235,
        "base_defense": 127,
        "base_stamina": 242,
        "form": "Normal",
        "pokemon_id": 500,
        "pokemon_name": "Emboar"
},
    {
        "base_attack": 117,
        "base_defense": 85,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 501,
        "pokemon_name": "Oshawott"
},
    {
        "base_attack": 159,
        "base_defense": 116,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 502,
        "pokemon_name": "Dewott"
},
    {
        "base_attack": 212,
        "base_defense": 157,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 503,
        "pokemon_name": "Samurott"
},
    {
        "base_attack": 98,
        "base_defense": 73,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 504,
        "pokemon_name": "Patrat"
},
    {
        "base_attack": 165,
        "base_defense": 139,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 505,
        "pokemon_name": "Watchog"
},
    {
        "base_attack": 107,
        "base_defense": 86,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 506,
        "pokemon_name": "Lillipup"
},
    {
        "base_attack": 145,
        "base_defense": 126,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 507,
        "pokemon_name": "Herdier"
},
    {
        "base_attack": 206,
        "base_defense": 182,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 508,
        "pokemon_name": "Stoutland"
},
    {
        "base_attack": 98,
        "base_defense": 73,
        "base_stamina": 121,
        "form": "Normal",
        "pokemon_id": 509,
        "pokemon_name": "Purrloin"
},
    {
        "base_attack": 187,
        "base_defense": 106,
        "base_stamina": 162,
        "form": "Normal",
        "pokemon_id": 510,
        "pokemon_name": "Liepard"
},
    {
        "base_attack": 104,
        "base_defense": 94,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 511,
        "pokemon_name": "Pansage"
},
    {
        "base_attack": 206,
        "base_defense": 133,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 512,
        "pokemon_name": "Simisage"
},
    {
        "base_attack": 104,
        "base_defense": 94,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 513,
        "pokemon_name": "Pansear"
},
    {
        "base_attack": 206,
        "base_defense": 133,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 514,
        "pokemon_name": "Simisear"
},
    {
        "base_attack": 104,
        "base_defense": 94,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 515,
        "pokemon_name": "Panpour"
},
    {
        "base_attack": 206,
        "base_defense": 133,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 516,
        "pokemon_name": "Simipour"
},
    {
        "base_attack": 111,
        "base_defense": 92,
        "base_stamina": 183,
        "form": "Normal",
        "pokemon_id": 517,
        "pokemon_name": "Munna"
},
    {
        "base_attack": 183,
        "base_defense": 166,
        "base_stamina": 253,
        "form": "Normal",
        "pokemon_id": 518,
        "pokemon_name": "Musharna"
},
    {
        "base_attack": 98,
        "base_defense": 80,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 519,
        "pokemon_name": "Pidove"
},
    {
        "base_attack": 144,
        "base_defense": 107,
        "base_stamina": 158,
        "form": "Normal",
        "pokemon_id": 520,
        "pokemon_name": "Tranquill"
},
    {
        "base_attack": 226,
        "base_defense": 146,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 521,
        "pokemon_name": "Unfezant"
},
    {
        "base_attack": 118,
        "base_defense": 64,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 522,
        "pokemon_name": "Blitzle"
},
    {
        "base_attack": 211,
        "base_defense": 136,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 523,
        "pokemon_name": "Zebstrika"
},
    {
        "base_attack": 121,
        "base_defense": 110,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 524,
        "pokemon_name": "Roggenrola"
},
    {
        "base_attack": 174,
        "base_defense": 143,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 525,
        "pokemon_name": "Boldore"
},
    {
        "base_attack": 226,
        "base_defense": 201,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 526,
        "pokemon_name": "Gigalith"
},
    {
        "base_attack": 107,
        "base_defense": 85,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 527,
        "pokemon_name": "Woobat"
},
    {
        "base_attack": 161,
        "base_defense": 119,
        "base_stamina": 167,
        "form": "Normal",
        "pokemon_id": 528,
        "pokemon_name": "Swoobat"
},
    {
        "base_attack": 154,
        "base_defense": 85,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 529,
        "pokemon_name": "Drilbur"
},
    {
        "base_attack": 255,
        "base_defense": 129,
        "base_stamina": 242,
        "form": "Normal",
        "pokemon_id": 530,
        "pokemon_name": "Excadrill"
},
    {
        "base_attack": 114,
        "base_defense": 163,
        "base_stamina": 230,
        "form": "Normal",
        "pokemon_id": 531,
        "pokemon_name": "Audino"
},
    {
        "base_attack": 134,
        "base_defense": 87,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 532,
        "pokemon_name": "Timburr"
},
    {
        "base_attack": 180,
        "base_defense": 134,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 533,
        "pokemon_name": "Gurdurr"
},
    {
        "base_attack": 243,
        "base_defense": 158,
        "base_stamina": 233,
        "form": "Normal",
        "pokemon_id": 534,
        "pokemon_name": "Conkeldurr"
},
    {
        "base_attack": 98,
        "base_defense": 78,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 535,
        "pokemon_name": "Tympole"
},
    {
        "base_attack": 128,
        "base_defense": 109,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 536,
        "pokemon_name": "Palpitoad"
},
    {
        "base_attack": 188,
        "base_defense": 150,
        "base_stamina": 233,
        "form": "Normal",
        "pokemon_id": 537,
        "pokemon_name": "Seismitoad"
},
    {
        "base_attack": 172,
        "base_defense": 160,
        "base_stamina": 260,
        "form": "Normal",
        "pokemon_id": 538,
        "pokemon_name": "Throh"
},
    {
        "base_attack": 231,
        "base_defense": 153,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 539,
        "pokemon_name": "Sawk"
},
    {
        "base_attack": 96,
        "base_defense": 124,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 540,
        "pokemon_name": "Sewaddle"
},
    {
        "base_attack": 115,
        "base_defense": 162,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 541,
        "pokemon_name": "Swadloon"
},
    {
        "base_attack": 205,
        "base_defense": 165,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 542,
        "pokemon_name": "Leavanny"
},
    {
        "base_attack": 83,
        "base_defense": 99,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 543,
        "pokemon_name": "Venipede"
},
    {
        "base_attack": 100,
        "base_defense": 173,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 544,
        "pokemon_name": "Whirlipede"
},
    {
        "base_attack": 203,
        "base_defense": 175,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 545,
        "pokemon_name": "Scolipede"
},
    {
        "base_attack": 71,
        "base_defense": 111,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 546,
        "pokemon_name": "Cottonee"
},
    {
        "base_attack": 164,
        "base_defense": 176,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 547,
        "pokemon_name": "Whimsicott"
},
    {
        "base_attack": 119,
        "base_defense": 91,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 548,
        "pokemon_name": "Petilil"
},
    {
        "base_attack": 214,
        "base_defense": 155,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 549,
        "pokemon_name": "Lilligant"
},
    {
        "base_attack": 189,
        "base_defense": 129,
        "base_stamina": 172,
        "form": "Blue_striped",
        "pokemon_id": 550,
        "pokemon_name": "Basculin"
},
    {
        "base_attack": 189,
        "base_defense": 129,
        "base_stamina": 172,
        "form": "Red_striped",
        "pokemon_id": 550,
        "pokemon_name": "Basculin"
},
    {
        "base_attack": 132,
        "base_defense": 69,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 551,
        "pokemon_name": "Sandile"
},
    {
        "base_attack": 155,
        "base_defense": 90,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 552,
        "pokemon_name": "Krokorok"
},
    {
        "base_attack": 229,
        "base_defense": 158,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 553,
        "pokemon_name": "Krookodile"
},
    {
        "base_attack": 153,
        "base_defense": 86,
        "base_stamina": 172,
        "form": "Galarian",
        "pokemon_id": 554,
        "pokemon_name": "Darumaka"
},
    {
        "base_attack": 153,
        "base_defense": 86,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 554,
        "pokemon_name": "Darumaka"
},
    {
        "base_attack": 263,
        "base_defense": 114,
        "base_stamina": 233,
        "form": "Galarian_standard",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
},
    {
        "base_attack": 323,
        "base_defense": 123,
        "base_stamina": 233,
        "form": "Galarian_zen",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
},
    {
        "base_attack": 263,
        "base_defense": 114,
        "base_stamina": 233,
        "form": "Standard",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
},
    {
        "base_attack": 243,
        "base_defense": 202,
        "base_stamina": 233,
        "form": "Zen",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
},
    {
        "base_attack": 201,
        "base_defense": 130,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 556,
        "pokemon_name": "Maractus"
},
    {
        "base_attack": 118,
        "base_defense": 128,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 557,
        "pokemon_name": "Dwebble"
},
    {
        "base_attack": 188,
        "base_defense": 200,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 558,
        "pokemon_name": "Crustle"
},
    {
        "base_attack": 132,
        "base_defense": 132,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 559,
        "pokemon_name": "Scraggy"
},
    {
        "base_attack": 163,
        "base_defense": 222,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 560,
        "pokemon_name": "Scrafty"
},
    {
        "base_attack": 204,
        "base_defense": 167,
        "base_stamina": 176,
        "form": "Normal",
        "pokemon_id": 561,
        "pokemon_name": "Sigilyph"
},
    {
        "base_attack": 95,
        "base_defense": 141,
        "base_stamina": 116,
        "form": "Galarian",
        "pokemon_id": 562,
        "pokemon_name": "Yamask"
},
    {
        "base_attack": 95,
        "base_defense": 141,
        "base_stamina": 116,
        "form": "Normal",
        "pokemon_id": 562,
        "pokemon_name": "Yamask"
},
    {
        "base_attack": 163,
        "base_defense": 237,
        "base_stamina": 151,
        "form": "Normal",
        "pokemon_id": 563,
        "pokemon_name": "Cofagrigus"
},
    {
        "base_attack": 134,
        "base_defense": 146,
        "base_stamina": 144,
        "form": "Normal",
        "pokemon_id": 564,
        "pokemon_name": "Tirtouga"
},
    {
        "base_attack": 192,
        "base_defense": 197,
        "base_stamina": 179,
        "form": "Normal",
        "pokemon_id": 565,
        "pokemon_name": "Carracosta"
},
    {
        "base_attack": 213,
        "base_defense": 89,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 566,
        "pokemon_name": "Archen"
},
    {
        "base_attack": 292,
        "base_defense": 139,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 567,
        "pokemon_name": "Archeops"
},
    {
        "base_attack": 96,
        "base_defense": 122,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 568,
        "pokemon_name": "Trubbish"
},
    {
        "base_attack": 181,
        "base_defense": 164,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 569,
        "pokemon_name": "Garbodor"
},
    {
        "base_attack": 153,
        "base_defense": 78,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 570,
        "pokemon_name": "Zorua"
},
    {
        "base_attack": 250,
        "base_defense": 127,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 571,
        "pokemon_name": "Zoroark"
},
    {
        "base_attack": 98,
        "base_defense": 80,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 572,
        "pokemon_name": "Minccino"
},
    {
        "base_attack": 198,
        "base_defense": 130,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 573,
        "pokemon_name": "Cinccino"
},
    {
        "base_attack": 98,
        "base_defense": 112,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 574,
        "pokemon_name": "Gothita"
},
    {
        "base_attack": 137,
        "base_defense": 153,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 575,
        "pokemon_name": "Gothorita"
},
    {
        "base_attack": 176,
        "base_defense": 205,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 576,
        "pokemon_name": "Gothitelle"
},
    {
        "base_attack": 170,
        "base_defense": 83,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 577,
        "pokemon_name": "Solosis"
},
    {
        "base_attack": 208,
        "base_defense": 103,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 578,
        "pokemon_name": "Duosion"
},
    {
        "base_attack": 214,
        "base_defense": 148,
        "base_stamina": 242,
        "form": "Normal",
        "pokemon_id": 579,
        "pokemon_name": "Reuniclus"
},
    {
        "base_attack": 84,
        "base_defense": 96,
        "base_stamina": 158,
        "form": "Normal",
        "pokemon_id": 580,
        "pokemon_name": "Ducklett"
},
    {
        "base_attack": 182,
        "base_defense": 132,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 581,
        "pokemon_name": "Swanna"
},
    {
        "base_attack": 118,
        "base_defense": 106,
        "base_stamina": 113,
        "form": "Normal",
        "pokemon_id": 582,
        "pokemon_name": "Vanillite"
},
    {
        "base_attack": 151,
        "base_defense": 138,
        "base_stamina": 139,
        "form": "Normal",
        "pokemon_id": 583,
        "pokemon_name": "Vanillish"
},
    {
        "base_attack": 218,
        "base_defense": 184,
        "base_stamina": 174,
        "form": "Normal",
        "pokemon_id": 584,
        "pokemon_name": "Vanilluxe"
},
    {
        "base_attack": 115,
        "base_defense": 100,
        "base_stamina": 155,
        "form": "Autumn",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
},
    {
        "base_attack": 115,
        "base_defense": 100,
        "base_stamina": 155,
        "form": "Spring",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
},
    {
        "base_attack": 115,
        "base_defense": 100,
        "base_stamina": 155,
        "form": "Summer",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
},
    {
        "base_attack": 115,
        "base_defense": 100,
        "base_stamina": 155,
        "form": "Winter",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
},
    {
        "base_attack": 198,
        "base_defense": 146,
        "base_stamina": 190,
        "form": "Autumn",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
},
    {
        "base_attack": 198,
        "base_defense": 146,
        "base_stamina": 190,
        "form": "Spring",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
},
    {
        "base_attack": 198,
        "base_defense": 146,
        "base_stamina": 190,
        "form": "Summer",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
},
    {
        "base_attack": 198,
        "base_defense": 146,
        "base_stamina": 190,
        "form": "Winter",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
},
    {
        "base_attack": 158,
        "base_defense": 127,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 587,
        "pokemon_name": "Emolga"
},
    {
        "base_attack": 137,
        "base_defense": 87,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 588,
        "pokemon_name": "Karrablast"
},
    {
        "base_attack": 223,
        "base_defense": 187,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 589,
        "pokemon_name": "Escavalier"
},
    {
        "base_attack": 97,
        "base_defense": 91,
        "base_stamina": 170,
        "form": "Normal",
        "pokemon_id": 590,
        "pokemon_name": "Foongus"
},
    {
        "base_attack": 155,
        "base_defense": 139,
        "base_stamina": 249,
        "form": "Normal",
        "pokemon_id": 591,
        "pokemon_name": "Amoonguss"
},
    {
        "base_attack": 115,
        "base_defense": 134,
        "base_stamina": 146,
        "form": "Female",
        "pokemon_id": 592,
        "pokemon_name": "Frillish"
},
    {
        "base_attack": 115,
        "base_defense": 134,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 592,
        "pokemon_name": "Frillish"
},
    {
        "base_attack": 159,
        "base_defense": 178,
        "base_stamina": 225,
        "form": "Female",
        "pokemon_id": 593,
        "pokemon_name": "Jellicent"
},
    {
        "base_attack": 159,
        "base_defense": 178,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 593,
        "pokemon_name": "Jellicent"
},
    {
        "base_attack": 138,
        "base_defense": 131,
        "base_stamina": 338,
        "form": "Normal",
        "pokemon_id": 594,
        "pokemon_name": "Alomomola"
},
    {
        "base_attack": 110,
        "base_defense": 98,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 595,
        "pokemon_name": "Joltik"
},
    {
        "base_attack": 201,
        "base_defense": 128,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 596,
        "pokemon_name": "Galvantula"
},
    {
        "base_attack": 82,
        "base_defense": 155,
        "base_stamina": 127,
        "form": "Normal",
        "pokemon_id": 597,
        "pokemon_name": "Ferroseed"
},
    {
        "base_attack": 158,
        "base_defense": 223,
        "base_stamina": 179,
        "form": "Normal",
        "pokemon_id": 598,
        "pokemon_name": "Ferrothorn"
},
    {
        "base_attack": 98,
        "base_defense": 121,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 599,
        "pokemon_name": "Klink"
},
    {
        "base_attack": 150,
        "base_defense": 174,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 600,
        "pokemon_name": "Klang"
},
    {
        "base_attack": 199,
        "base_defense": 214,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 601,
        "pokemon_name": "Klinklang"
},
    {
        "base_attack": 105,
        "base_defense": 78,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 602,
        "pokemon_name": "Tynamo"
},
    {
        "base_attack": 156,
        "base_defense": 130,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 603,
        "pokemon_name": "Eelektrik"
},
    {
        "base_attack": 217,
        "base_defense": 152,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 604,
        "pokemon_name": "Eelektross"
},
    {
        "base_attack": 148,
        "base_defense": 100,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 605,
        "pokemon_name": "Elgyem"
},
    {
        "base_attack": 221,
        "base_defense": 163,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 606,
        "pokemon_name": "Beheeyem"
},
    {
        "base_attack": 108,
        "base_defense": 98,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 607,
        "pokemon_name": "Litwick"
},
    {
        "base_attack": 169,
        "base_defense": 115,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 608,
        "pokemon_name": "Lampent"
},
    {
        "base_attack": 271,
        "base_defense": 182,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 609,
        "pokemon_name": "Chandelure"
},
    {
        "base_attack": 154,
        "base_defense": 101,
        "base_stamina": 130,
        "form": "Normal",
        "pokemon_id": 610,
        "pokemon_name": "Axew"
},
    {
        "base_attack": 212,
        "base_defense": 123,
        "base_stamina": 165,
        "form": "Normal",
        "pokemon_id": 611,
        "pokemon_name": "Fraxure"
},
    {
        "base_attack": 284,
        "base_defense": 172,
        "base_stamina": 183,
        "form": "Normal",
        "pokemon_id": 612,
        "pokemon_name": "Haxorus"
},
    {
        "base_attack": 128,
        "base_defense": 74,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 613,
        "pokemon_name": "Cubchoo"
},
    {
        "base_attack": 128,
        "base_defense": 74,
        "base_stamina": 146,
        "form": "Winter_2020",
        "pokemon_id": 613,
        "pokemon_name": "Cubchoo"
},
    {
        "base_attack": 233,
        "base_defense": 152,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 614,
        "pokemon_name": "Beartic"
},
    {
        "base_attack": 190,
        "base_defense": 218,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 615,
        "pokemon_name": "Cryogonal"
},
    {
        "base_attack": 72,
        "base_defense": 140,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 616,
        "pokemon_name": "Shelmet"
},
    {
        "base_attack": 220,
        "base_defense": 120,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 617,
        "pokemon_name": "Accelgor"
},
    {
        "base_attack": 144,
        "base_defense": 171,
        "base_stamina": 240,
        "form": "Galarian",
        "pokemon_id": 618,
        "pokemon_name": "Stunfisk"
},
    {
        "base_attack": 144,
        "base_defense": 171,
        "base_stamina": 240,
        "form": "Normal",
        "pokemon_id": 618,
        "pokemon_name": "Stunfisk"
},
    {
        "base_attack": 160,
        "base_defense": 98,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 619,
        "pokemon_name": "Mienfoo"
},
    {
        "base_attack": 258,
        "base_defense": 127,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 620,
        "pokemon_name": "Mienshao"
},
    {
        "base_attack": 213,
        "base_defense": 170,
        "base_stamina": 184,
        "form": "Normal",
        "pokemon_id": 621,
        "pokemon_name": "Druddigon"
},
    {
        "base_attack": 127,
        "base_defense": 92,
        "base_stamina": 153,
        "form": "Normal",
        "pokemon_id": 622,
        "pokemon_name": "Golett"
},
    {
        "base_attack": 222,
        "base_defense": 154,
        "base_stamina": 205,
        "form": "Normal",
        "pokemon_id": 623,
        "pokemon_name": "Golurk"
},
    {
        "base_attack": 154,
        "base_defense": 114,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 624,
        "pokemon_name": "Pawniard"
},
    {
        "base_attack": 232,
        "base_defense": 176,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 625,
        "pokemon_name": "Bisharp"
},
    {
        "base_attack": 195,
        "base_defense": 182,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 626,
        "pokemon_name": "Bouffalant"
},
    {
        "base_attack": 150,
        "base_defense": 97,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 627,
        "pokemon_name": "Rufflet"
},
    {
        "base_attack": 232,
        "base_defense": 152,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 628,
        "pokemon_name": "Braviary"
},
    {
        "base_attack": 105,
        "base_defense": 139,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 629,
        "pokemon_name": "Vullaby"
},
    {
        "base_attack": 129,
        "base_defense": 205,
        "base_stamina": 242,
        "form": "Normal",
        "pokemon_id": 630,
        "pokemon_name": "Mandibuzz"
},
    {
        "base_attack": 204,
        "base_defense": 129,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 631,
        "pokemon_name": "Heatmor"
},
    {
        "base_attack": 217,
        "base_defense": 188,
        "base_stamina": 151,
        "form": "Normal",
        "pokemon_id": 632,
        "pokemon_name": "Durant"
},
    {
        "base_attack": 116,
        "base_defense": 93,
        "base_stamina": 141,
        "form": "Normal",
        "pokemon_id": 633,
        "pokemon_name": "Deino"
},
    {
        "base_attack": 159,
        "base_defense": 135,
        "base_stamina": 176,
        "form": "Normal",
        "pokemon_id": 634,
        "pokemon_name": "Zweilous"
},
    {
        "base_attack": 256,
        "base_defense": 188,
        "base_stamina": 211,
        "form": "Normal",
        "pokemon_id": 635,
        "pokemon_name": "Hydreigon"
},
    {
        "base_attack": 156,
        "base_defense": 107,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 636,
        "pokemon_name": "Larvesta"
},
    {
        "base_attack": 264,
        "base_defense": 189,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 637,
        "pokemon_name": "Volcarona"
},
    {
        "base_attack": 192,
        "base_defense": 229,
        "base_stamina": 209,
        "form": "Normal",
        "pokemon_id": 638,
        "pokemon_name": "Cobalion"
},
    {
        "base_attack": 260,
        "base_defense": 192,
        "base_stamina": 209,
        "form": "Normal",
        "pokemon_id": 639,
        "pokemon_name": "Terrakion"
},
    {
        "base_attack": 192,
        "base_defense": 229,
        "base_stamina": 209,
        "form": "Normal",
        "pokemon_id": 640,
        "pokemon_name": "Virizion"
},
    {
        "base_attack": 266,
        "base_defense": 164,
        "base_stamina": 188,
        "form": "Incarnate",
        "pokemon_id": 641,
        "pokemon_name": "Tornadus"
},
    {
        "base_attack": 238,
        "base_defense": 189,
        "base_stamina": 188,
        "form": "Therian",
        "pokemon_id": 641,
        "pokemon_name": "Tornadus"
},
    {
        "base_attack": 266,
        "base_defense": 164,
        "base_stamina": 188,
        "form": "Incarnate",
        "pokemon_id": 642,
        "pokemon_name": "Thundurus"
},
    {
        "base_attack": 295,
        "base_defense": 161,
        "base_stamina": 188,
        "form": "Therian",
        "pokemon_id": 642,
        "pokemon_name": "Thundurus"
},
    {
        "base_attack": 275,
        "base_defense": 211,
        "base_stamina": 205,
        "form": "Normal",
        "pokemon_id": 643,
        "pokemon_name": "Reshiram"
},
    {
        "base_attack": 275,
        "base_defense": 211,
        "base_stamina": 205,
        "form": "Normal",
        "pokemon_id": 644,
        "pokemon_name": "Zekrom"
},
    {
        "base_attack": 261,
        "base_defense": 182,
        "base_stamina": 205,
        "form": "Incarnate",
        "pokemon_id": 645,
        "pokemon_name": "Landorus"
},
    {
        "base_attack": 289,
        "base_defense": 179,
        "base_stamina": 205,
        "form": "Therian",
        "pokemon_id": 645,
        "pokemon_name": "Landorus"
},
    {
        "base_attack": 310,
        "base_defense": 183,
        "base_stamina": 245,
        "form": "Black",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem"
},
    {
        "base_attack": 246,
        "base_defense": 170,
        "base_stamina": 245,
        "form": "Normal",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem"
},
    {
        "base_attack": 310,
        "base_defense": 183,
        "base_stamina": 245,
        "form": "White",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem"
},
    {
        "base_attack": 260,
        "base_defense": 192,
        "base_stamina": 209,
        "form": "Ordinary",
        "pokemon_id": 647,
        "pokemon_name": "Keldeo"
},
    {
        "base_attack": 260,
        "base_defense": 192,
        "base_stamina": 209,
        "form": "Resolute",
        "pokemon_id": 647,
        "pokemon_name": "Keldeo"
},
    {
        "base_attack": 250,
        "base_defense": 225,
        "base_stamina": 225,
        "form": "Aria",
        "pokemon_id": 648,
        "pokemon_name": "Meloetta"
},
    {
        "base_attack": 269,
        "base_defense": 188,
        "base_stamina": 225,
        "form": "Pirouette",
        "pokemon_id": 648,
        "pokemon_name": "Meloetta"
},
    {
        "base_attack": 252,
        "base_defense": 199,
        "base_stamina": 174,
        "form": "Burn",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
},
    {
        "base_attack": 252,
        "base_defense": 199,
        "base_stamina": 174,
        "form": "Chill",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
},
    {
        "base_attack": 252,
        "base_defense": 199,
        "base_stamina": 174,
        "form": "Douse",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
},
    {
        "base_attack": 252,
        "base_defense": 199,
        "base_stamina": 174,
        "form": "Normal",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
},
    {
        "base_attack": 252,
        "base_defense": 199,
        "base_stamina": 174,
        "form": "Shock",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
},
    {
        "base_attack": 110,
        "base_defense": 106,
        "base_stamina": 148,
        "form": "Normal",
        "pokemon_id": 650,
        "pokemon_name": "Chespin"
},
    {
        "base_attack": 146,
        "base_defense": 156,
        "base_stamina": 156,
        "form": "Normal",
        "pokemon_id": 651,
        "pokemon_name": "Quilladin"
},
    {
        "base_attack": 201,
        "base_defense": 204,
        "base_stamina": 204,
        "form": "Normal",
        "pokemon_id": 652,
        "pokemon_name": "Chesnaught"
},
    {
        "base_attack": 116,
        "base_defense": 102,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 653,
        "pokemon_name": "Fennekin"
},
    {
        "base_attack": 171,
        "base_defense": 130,
        "base_stamina": 153,
        "form": "Normal",
        "pokemon_id": 654,
        "pokemon_name": "Braixen"
},
    {
        "base_attack": 230,
        "base_defense": 189,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 655,
        "pokemon_name": "Delphox"
},
    {
        "base_attack": 122,
        "base_defense": 84,
        "base_stamina": 121,
        "form": "Normal",
        "pokemon_id": 656,
        "pokemon_name": "Froakie"
},
    {
        "base_attack": 168,
        "base_defense": 114,
        "base_stamina": 144,
        "form": "Normal",
        "pokemon_id": 657,
        "pokemon_name": "Frogadier"
},
    {
        "base_attack": 223,
        "base_defense": 152,
        "base_stamina": 176,
        "form": "Normal",
        "pokemon_id": 658,
        "pokemon_name": "Greninja"
},
    {
        "base_attack": 68,
        "base_defense": 72,
        "base_stamina": 116,
        "form": "Normal",
        "pokemon_id": 659,
        "pokemon_name": "Bunnelby"
},
    {
        "base_attack": 112,
        "base_defense": 155,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 660,
        "pokemon_name": "Diggersby"
},
    {
        "base_attack": 95,
        "base_defense": 80,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 661,
        "pokemon_name": "Fletchling"
},
    {
        "base_attack": 145,
        "base_defense": 110,
        "base_stamina": 158,
        "form": "Normal",
        "pokemon_id": 662,
        "pokemon_name": "Fletchinder"
},
    {
        "base_attack": 176,
        "base_defense": 155,
        "base_stamina": 186,
        "form": "Normal",
        "pokemon_id": 663,
        "pokemon_name": "Talonflame"
},
    {
        "base_attack": 63,
        "base_defense": 63,
        "base_stamina": 116,
        "form": "Normal",
        "pokemon_id": 664,
        "pokemon_name": "Scatterbug"
},
    {
        "base_attack": 48,
        "base_defense": 89,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 665,
        "pokemon_name": "Spewpa"
},
    {
        "base_attack": 176,
        "base_defense": 103,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 666,
        "pokemon_name": "Vivillon"
},
    {
        "base_attack": 139,
        "base_defense": 112,
        "base_stamina": 158,
        "form": "Normal",
        "pokemon_id": 667,
        "pokemon_name": "Litleo"
},
    {
        "base_attack": 221,
        "base_defense": 149,
        "base_stamina": 200,
        "form": "Female",
        "pokemon_id": 668,
        "pokemon_name": "Pyroar"
},
    {
        "base_attack": 221,
        "base_defense": 149,
        "base_stamina": 200,
        "form": "Normal",
        "pokemon_id": 668,
        "pokemon_name": "Pyroar"
},
    {
        "base_attack": 108,
        "base_defense": 120,
        "base_stamina": 127,
        "form": "Blue",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
},
    {
        "base_attack": 108,
        "base_defense": 120,
        "base_stamina": 127,
        "form": "Orange",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
},
    {
        "base_attack": 108,
        "base_defense": 120,
        "base_stamina": 127,
        "form": "Red",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
},
    {
        "base_attack": 108,
        "base_defense": 120,
        "base_stamina": 127,
        "form": "White",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
},
    {
        "base_attack": 108,
        "base_defense": 120,
        "base_stamina": 127,
        "form": "Yellow",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
},
    {
        "base_attack": 136,
        "base_defense": 151,
        "base_stamina": 144,
        "form": "Blue",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
},
    {
        "base_attack": 136,
        "base_defense": 151,
        "base_stamina": 144,
        "form": "Orange",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
},
    {
        "base_attack": 136,
        "base_defense": 151,
        "base_stamina": 144,
        "form": "Red",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
},
    {
        "base_attack": 136,
        "base_defense": 151,
        "base_stamina": 144,
        "form": "White",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
},
    {
        "base_attack": 136,
        "base_defense": 151,
        "base_stamina": 144,
        "form": "Yellow",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
},
    {
        "base_attack": 212,
        "base_defense": 244,
        "base_stamina": 186,
        "form": "Blue",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
},
    {
        "base_attack": 212,
        "base_defense": 244,
        "base_stamina": 186,
        "form": "Orange",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
},
    {
        "base_attack": 212,
        "base_defense": 244,
        "base_stamina": 186,
        "form": "Red",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
},
    {
        "base_attack": 212,
        "base_defense": 244,
        "base_stamina": 186,
        "form": "White",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
},
    {
        "base_attack": 212,
        "base_defense": 244,
        "base_stamina": 186,
        "form": "Yellow",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
},
    {
        "base_attack": 123,
        "base_defense": 102,
        "base_stamina": 165,
        "form": "Normal",
        "pokemon_id": 672,
        "pokemon_name": "Skiddo"
},
    {
        "base_attack": 196,
        "base_defense": 146,
        "base_stamina": 265,
        "form": "Normal",
        "pokemon_id": 673,
        "pokemon_name": "Gogoat"
},
    {
        "base_attack": 145,
        "base_defense": 107,
        "base_stamina": 167,
        "form": "Normal",
        "pokemon_id": 674,
        "pokemon_name": "Pancham"
},
    {
        "base_attack": 226,
        "base_defense": 146,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 675,
        "pokemon_name": "Pangoro"
},
    {
        "base_attack": 164,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "Dandy",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
},
    {
        "base_attack": 164,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "Debutante",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
},
    {
        "base_attack": 164,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "Diamond",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
},
    {
        "base_attack": 164,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "Heart",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
},
    {
        "base_attack": 164,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "Kabuki",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
},
    {
        "base_attack": 164,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "La_reine",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
},
    {
        "base_attack": 164,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "Matron",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
},
    {
        "base_attack": 164,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "Natural",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
},
    {
        "base_attack": 164,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "Pharaoh",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
},
    {
        "base_attack": 164,
        "base_defense": 167,
        "base_stamina": 181,
        "form": "Star",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
},
    {
        "base_attack": 120,
        "base_defense": 114,
        "base_stamina": 158,
        "form": "Normal",
        "pokemon_id": 677,
        "pokemon_name": "Espurr"
},
    {
        "base_attack": 166,
        "base_defense": 167,
        "base_stamina": 179,
        "form": "Female",
        "pokemon_id": 678,
        "pokemon_name": "Meowstic"
},
    {
        "base_attack": 166,
        "base_defense": 167,
        "base_stamina": 179,
        "form": "Normal",
        "pokemon_id": 678,
        "pokemon_name": "Meowstic"
},
    {
        "base_attack": 0,
        "base_defense": 0,
        "base_stamina": 0,
        "form": "Normal",
        "pokemon_id": 679,
        "pokemon_name": "Honedge"
},
    {
        "base_attack": 0,
        "base_defense": 0,
        "base_stamina": 0,
        "form": "Normal",
        "pokemon_id": 680,
        "pokemon_name": "Doublade"
},
    {
        "base_attack": 0,
        "base_defense": 0,
        "base_stamina": 0,
        "form": "Normal",
        "pokemon_id": 681,
        "pokemon_name": "Aegislash"
},
    {
        "base_attack": 110,
        "base_defense": 113,
        "base_stamina": 186,
        "form": "Normal",
        "pokemon_id": 682,
        "pokemon_name": "Spritzee"
},
    {
        "base_attack": 173,
        "base_defense": 150,
        "base_stamina": 226,
        "form": "Normal",
        "pokemon_id": 683,
        "pokemon_name": "Aromatisse"
},
    {
        "base_attack": 109,
        "base_defense": 119,
        "base_stamina": 158,
        "form": "Normal",
        "pokemon_id": 684,
        "pokemon_name": "Swirlix"
},
    {
        "base_attack": 168,
        "base_defense": 163,
        "base_stamina": 193,
        "form": "Normal",
        "pokemon_id": 685,
        "pokemon_name": "Slurpuff"
},
    {
        "base_attack": 98,
        "base_defense": 95,
        "base_stamina": 142,
        "form": "Normal",
        "pokemon_id": 686,
        "pokemon_name": "Inkay"
},
    {
        "base_attack": 177,
        "base_defense": 165,
        "base_stamina": 200,
        "form": "Normal",
        "pokemon_id": 687,
        "pokemon_name": "Malamar"
},
    {
        "base_attack": 96,
        "base_defense": 120,
        "base_stamina": 123,
        "form": "Normal",
        "pokemon_id": 688,
        "pokemon_name": "Binacle"
},
    {
        "base_attack": 194,
        "base_defense": 205,
        "base_stamina": 176,
        "form": "Normal",
        "pokemon_id": 689,
        "pokemon_name": "Barbaracle"
},
    {
        "base_attack": 109,
        "base_defense": 109,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 690,
        "pokemon_name": "Skrelp"
},
    {
        "base_attack": 177,
        "base_defense": 207,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 691,
        "pokemon_name": "Dragalge"
},
    {
        "base_attack": 108,
        "base_defense": 117,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 692,
        "pokemon_name": "Clauncher"
},
    {
        "base_attack": 221,
        "base_defense": 171,
        "base_stamina": 174,
        "form": "Normal",
        "pokemon_id": 693,
        "pokemon_name": "Clawitzer"
},
    {
        "base_attack": 115,
        "base_defense": 78,
        "base_stamina": 127,
        "form": "Normal",
        "pokemon_id": 694,
        "pokemon_name": "Helioptile"
},
    {
        "base_attack": 219,
        "base_defense": 168,
        "base_stamina": 158,
        "form": "Normal",
        "pokemon_id": 695,
        "pokemon_name": "Heliolisk"
},
    {
        "base_attack": 158,
        "base_defense": 123,
        "base_stamina": 151,
        "form": "Normal",
        "pokemon_id": 696,
        "pokemon_name": "Tyrunt"
},
    {
        "base_attack": 227,
        "base_defense": 191,
        "base_stamina": 193,
        "form": "Normal",
        "pokemon_id": 697,
        "pokemon_name": "Tyrantrum"
},
    {
        "base_attack": 124,
        "base_defense": 109,
        "base_stamina": 184,
        "form": "Normal",
        "pokemon_id": 698,
        "pokemon_name": "Amaura"
},
    {
        "base_attack": 186,
        "base_defense": 163,
        "base_stamina": 265,
        "form": "Normal",
        "pokemon_id": 699,
        "pokemon_name": "Aurorus"
},
    {
        "base_attack": 203,
        "base_defense": 205,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 700,
        "pokemon_name": "Sylveon"
},
    {
        "base_attack": 195,
        "base_defense": 153,
        "base_stamina": 186,
        "form": "Normal",
        "pokemon_id": 701,
        "pokemon_name": "Hawlucha"
},
    {
        "base_attack": 164,
        "base_defense": 134,
        "base_stamina": 167,
        "form": "Normal",
        "pokemon_id": 702,
        "pokemon_name": "Dedenne"
},
    {
        "base_attack": 95,
        "base_defense": 285,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 703,
        "pokemon_name": "Carbink"
},
    {
        "base_attack": 101,
        "base_defense": 112,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 704,
        "pokemon_name": "Goomy"
},
    {
        "base_attack": 159,
        "base_defense": 176,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 705,
        "pokemon_name": "Sliggoo"
},
    {
        "base_attack": 220,
        "base_defense": 242,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 706,
        "pokemon_name": "Goodra"
},
    {
        "base_attack": 160,
        "base_defense": 179,
        "base_stamina": 149,
        "form": "Normal",
        "pokemon_id": 707,
        "pokemon_name": "Klefki"
},
    {
        "base_attack": 125,
        "base_defense": 103,
        "base_stamina": 125,
        "form": "Normal",
        "pokemon_id": 708,
        "pokemon_name": "Phantump"
},
    {
        "base_attack": 201,
        "base_defense": 154,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 709,
        "pokemon_name": "Trevenant"
},
    {
        "base_attack": 121,
        "base_defense": 123,
        "base_stamina": 135,
        "form": "Average",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
},
    {
        "base_attack": 120,
        "base_defense": 122,
        "base_stamina": 144,
        "form": "Large",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
},
    {
        "base_attack": 122,
        "base_defense": 124,
        "base_stamina": 127,
        "form": "Small",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
},
    {
        "base_attack": 118,
        "base_defense": 120,
        "base_stamina": 153,
        "form": "Super",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
},
    {
        "base_attack": 175,
        "base_defense": 213,
        "base_stamina": 163,
        "form": "Average",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
},
    {
        "base_attack": 179,
        "base_defense": 206,
        "base_stamina": 181,
        "form": "Large",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
},
    {
        "base_attack": 171,
        "base_defense": 219,
        "base_stamina": 146,
        "form": "Small",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
},
    {
        "base_attack": 182,
        "base_defense": 200,
        "base_stamina": 198,
        "form": "Super",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
},
    {
        "base_attack": 117,
        "base_defense": 120,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 712,
        "pokemon_name": "Bergmite"
},
    {
        "base_attack": 196,
        "base_defense": 240,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 713,
        "pokemon_name": "Avalugg"
},
    {
        "base_attack": 83,
        "base_defense": 73,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 714,
        "pokemon_name": "Noibat"
},
    {
        "base_attack": 205,
        "base_defense": 175,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 715,
        "pokemon_name": "Noivern"
},
    {
        "base_attack": 250,
        "base_defense": 185,
        "base_stamina": 246,
        "form": "Normal",
        "pokemon_id": 716,
        "pokemon_name": "Xerneas"
},
    {
        "base_attack": 250,
        "base_defense": 185,
        "base_stamina": 246,
        "form": "Normal",
        "pokemon_id": 717,
        "pokemon_name": "Yveltal"
},
    {
        "base_attack": 0,
        "base_defense": 0,
        "base_stamina": 0,
        "form": "Normal",
        "pokemon_id": 718,
        "pokemon_name": "Zygarde"
},
    {
        "base_attack": 190,
        "base_defense": 285,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 719,
        "pokemon_name": "Diancie"
},
    {
        "base_attack": 261,
        "base_defense": 187,
        "base_stamina": 173,
        "form": "Confined",
        "pokemon_id": 720,
        "pokemon_name": "Hoopa"
},
    {
        "base_attack": 311,
        "base_defense": 191,
        "base_stamina": 173,
        "form": "Unbound",
        "pokemon_id": 720,
        "pokemon_name": "Hoopa"
},
    {
        "base_attack": 252,
        "base_defense": 216,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 721,
        "pokemon_name": "Volcanion"
},
    {
        "base_attack": 102,
        "base_defense": 99,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 722,
        "pokemon_name": "Rowlet"
},
    {
        "base_attack": 142,
        "base_defense": 139,
        "base_stamina": 186,
        "form": "Normal",
        "pokemon_id": 723,
        "pokemon_name": "Dartrix"
},
    {
        "base_attack": 210,
        "base_defense": 179,
        "base_stamina": 186,
        "form": "Normal",
        "pokemon_id": 724,
        "pokemon_name": "Decidueye"
},
    {
        "base_attack": 128,
        "base_defense": 79,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 725,
        "pokemon_name": "Litten"
},
    {
        "base_attack": 174,
        "base_defense": 103,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 726,
        "pokemon_name": "Torracat"
},
    {
        "base_attack": 214,
        "base_defense": 175,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 727,
        "pokemon_name": "Incineroar"
},
    {
        "base_attack": 120,
        "base_defense": 103,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 728,
        "pokemon_name": "Popplio"
},
    {
        "base_attack": 168,
        "base_defense": 145,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 729,
        "pokemon_name": "Brionne"
},
    {
        "base_attack": 232,
        "base_defense": 195,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 730,
        "pokemon_name": "Primarina"
},
    {
        "base_attack": 136,
        "base_defense": 59,
        "base_stamina": 111,
        "form": "Normal",
        "pokemon_id": 731,
        "pokemon_name": "Pikipek"
},
    {
        "base_attack": 159,
        "base_defense": 100,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 732,
        "pokemon_name": "Trumbeak"
},
    {
        "base_attack": 222,
        "base_defense": 146,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 733,
        "pokemon_name": "Toucannon"
},
    {
        "base_attack": 122,
        "base_defense": 56,
        "base_stamina": 134,
        "form": "Normal",
        "pokemon_id": 734,
        "pokemon_name": "Yungoos"
},
    {
        "base_attack": 194,
        "base_defense": 113,
        "base_stamina": 204,
        "form": "Normal",
        "pokemon_id": 735,
        "pokemon_name": "Gumshoos"
},
    {
        "base_attack": 115,
        "base_defense": 85,
        "base_stamina": 132,
        "form": "Normal",
        "pokemon_id": 736,
        "pokemon_name": "Grubbin"
},
    {
        "base_attack": 145,
        "base_defense": 161,
        "base_stamina": 149,
        "form": "Normal",
        "pokemon_id": 737,
        "pokemon_name": "Charjabug"
},
    {
        "base_attack": 254,
        "base_defense": 158,
        "base_stamina": 184,
        "form": "Normal",
        "pokemon_id": 738,
        "pokemon_name": "Vikavolt"
},
    {
        "base_attack": 150,
        "base_defense": 104,
        "base_stamina": 132,
        "form": "Normal",
        "pokemon_id": 739,
        "pokemon_name": "Crabrawler"
},
    {
        "base_attack": 231,
        "base_defense": 138,
        "base_stamina": 219,
        "form": "Normal",
        "pokemon_id": 740,
        "pokemon_name": "Crabominable"
},
    {
        "base_attack": 110,
        "base_defense": 81,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 742,
        "pokemon_name": "Cutiefly"
},
    {
        "base_attack": 198,
        "base_defense": 146,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 743,
        "pokemon_name": "Ribombee"
},
    {
        "base_attack": 117,
        "base_defense": 78,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 744,
        "pokemon_name": "Rockruff"
},
    {
        "base_attack": 234,
        "base_defense": 139,
        "base_stamina": 181,
        "form": "Dusk",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc"
},
    {
        "base_attack": 231,
        "base_defense": 140,
        "base_stamina": 181,
        "form": "Midday",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc"
},
    {
        "base_attack": 218,
        "base_defense": 152,
        "base_stamina": 198,
        "form": "Midnight",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc"
},
    {
        "base_attack": 255,
        "base_defense": 242,
        "base_stamina": 128,
        "form": "School",
        "pokemon_id": 746,
        "pokemon_name": "Wishiwashi"
},
    {
        "base_attack": 46,
        "base_defense": 43,
        "base_stamina": 128,
        "form": "Solo",
        "pokemon_id": 746,
        "pokemon_name": "Wishiwashi"
},
    {
        "base_attack": 98,
        "base_defense": 110,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 747,
        "pokemon_name": "Mareanie"
},
    {
        "base_attack": 114,
        "base_defense": 273,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 748,
        "pokemon_name": "Toxapex"
},
    {
        "base_attack": 175,
        "base_defense": 121,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 749,
        "pokemon_name": "Mudbray"
},
    {
        "base_attack": 214,
        "base_defense": 174,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 750,
        "pokemon_name": "Mudsdale"
},
    {
        "base_attack": 72,
        "base_defense": 117,
        "base_stamina": 116,
        "form": "Normal",
        "pokemon_id": 751,
        "pokemon_name": "Dewpider"
},
    {
        "base_attack": 126,
        "base_defense": 219,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 752,
        "pokemon_name": "Araquanid"
},
    {
        "base_attack": 100,
        "base_defense": 64,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 753,
        "pokemon_name": "Fomantis"
},
    {
        "base_attack": 192,
        "base_defense": 169,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 754,
        "pokemon_name": "Lurantis"
},
    {
        "base_attack": 108,
        "base_defense": 119,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 755,
        "pokemon_name": "Morelull"
},
    {
        "base_attack": 154,
        "base_defense": 168,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 756,
        "pokemon_name": "Shiinotic"
},
    {
        "base_attack": 136,
        "base_defense": 80,
        "base_stamina": 134,
        "form": "Normal",
        "pokemon_id": 757,
        "pokemon_name": "Salandit"
},
    {
        "base_attack": 228,
        "base_defense": 130,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 758,
        "pokemon_name": "Salazzle"
},
    {
        "base_attack": 136,
        "base_defense": 95,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 759,
        "pokemon_name": "Stufful"
},
    {
        "base_attack": 226,
        "base_defense": 141,
        "base_stamina": 260,
        "form": "Normal",
        "pokemon_id": 760,
        "pokemon_name": "Bewear"
},
    {
        "base_attack": 55,
        "base_defense": 69,
        "base_stamina": 123,
        "form": "Normal",
        "pokemon_id": 761,
        "pokemon_name": "Bounsweet"
},
    {
        "base_attack": 78,
        "base_defense": 94,
        "base_stamina": 141,
        "form": "Normal",
        "pokemon_id": 762,
        "pokemon_name": "Steenee"
},
    {
        "base_attack": 222,
        "base_defense": 195,
        "base_stamina": 176,
        "form": "Normal",
        "pokemon_id": 763,
        "pokemon_name": "Tsareena"
},
    {
        "base_attack": 165,
        "base_defense": 215,
        "base_stamina": 139,
        "form": "Normal",
        "pokemon_id": 764,
        "pokemon_name": "Comfey"
},
    {
        "base_attack": 168,
        "base_defense": 192,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 765,
        "pokemon_name": "Oranguru"
},
    {
        "base_attack": 222,
        "base_defense": 160,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 766,
        "pokemon_name": "Passimian"
},
    {
        "base_attack": 67,
        "base_defense": 74,
        "base_stamina": 93,
        "form": "Normal",
        "pokemon_id": 767,
        "pokemon_name": "Wimpod"
},
    {
        "base_attack": 218,
        "base_defense": 226,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 768,
        "pokemon_name": "Golisopod"
},
    {
        "base_attack": 120,
        "base_defense": 118,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 769,
        "pokemon_name": "Sandygast"
},
    {
        "base_attack": 178,
        "base_defense": 178,
        "base_stamina": 198,
        "form": "Normal",
        "pokemon_id": 770,
        "pokemon_name": "Palossand"
},
    {
        "base_attack": 97,
        "base_defense": 224,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 771,
        "pokemon_name": "Pyukumuku"
},
    {
        "base_attack": 184,
        "base_defense": 184,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 772,
        "pokemon_name": "Type: Null"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Bug",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Dark",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Dragon",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Electric",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Fairy",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Fighting",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Fire",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Flying",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Ghost",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Grass",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Ground",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Ice",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Poison",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Psychic",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Rock",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Steel",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 198,
        "base_defense": 198,
        "base_stamina": 216,
        "form": "Water",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
},
    {
        "base_attack": 218,
        "base_defense": 131,
        "base_stamina": 155,
        "form": "Blue",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
},
    {
        "base_attack": 218,
        "base_defense": 131,
        "base_stamina": 155,
        "form": "Green",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
},
    {
        "base_attack": 218,
        "base_defense": 131,
        "base_stamina": 155,
        "form": "Indigo",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
},
    {
        "base_attack": 116,
        "base_defense": 194,
        "base_stamina": 155,
        "form": "Meteor",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
},
    {
        "base_attack": 218,
        "base_defense": 131,
        "base_stamina": 155,
        "form": "Orange",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
},
    {
        "base_attack": 218,
        "base_defense": 131,
        "base_stamina": 155,
        "form": "Red",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
},
    {
        "base_attack": 218,
        "base_defense": 131,
        "base_stamina": 155,
        "form": "Violet",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
},
    {
        "base_attack": 218,
        "base_defense": 131,
        "base_stamina": 155,
        "form": "Yellow",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
},
    {
        "base_attack": 216,
        "base_defense": 165,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 775,
        "pokemon_name": "Komala"
},
    {
        "base_attack": 165,
        "base_defense": 215,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 776,
        "pokemon_name": "Turtonator"
},
    {
        "base_attack": 190,
        "base_defense": 145,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 777,
        "pokemon_name": "Togedemaru"
},
    {
        "base_attack": 177,
        "base_defense": 199,
        "base_stamina": 146,
        "form": "Busted",
        "pokemon_id": 778,
        "pokemon_name": "Mimikyu"
},
    {
        "base_attack": 177,
        "base_defense": 199,
        "base_stamina": 146,
        "form": "Disguised",
        "pokemon_id": 778,
        "pokemon_name": "Mimikyu"
},
    {
        "base_attack": 208,
        "base_defense": 145,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 779,
        "pokemon_name": "Bruxish"
},
    {
        "base_attack": 231,
        "base_defense": 164,
        "base_stamina": 186,
        "form": "Normal",
        "pokemon_id": 780,
        "pokemon_name": "Drampa"
},
    {
        "base_attack": 233,
        "base_defense": 179,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 781,
        "pokemon_name": "Dhelmise"
},
    {
        "base_attack": 102,
        "base_defense": 108,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 782,
        "pokemon_name": "Jangmo-o"
},
    {
        "base_attack": 145,
        "base_defense": 162,
        "base_stamina": 146,
        "form": "Normal",
        "pokemon_id": 783,
        "pokemon_name": "Hakamo-o"
},
    {
        "base_attack": 222,
        "base_defense": 240,
        "base_stamina": 181,
        "form": "Normal",
        "pokemon_id": 784,
        "pokemon_name": "Kommo-o"
},
    {
        "base_attack": 250,
        "base_defense": 181,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 785,
        "pokemon_name": "Tapu Koko"
},
    {
        "base_attack": 259,
        "base_defense": 208,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 786,
        "pokemon_name": "Tapu Lele"
},
    {
        "base_attack": 249,
        "base_defense": 215,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 787,
        "pokemon_name": "Tapu Bulu"
},
    {
        "base_attack": 189,
        "base_defense": 254,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 788,
        "pokemon_name": "Tapu Fini"
},
    {
        "base_attack": 54,
        "base_defense": 57,
        "base_stamina": 125,
        "form": "Normal",
        "pokemon_id": 789,
        "pokemon_name": "Cosmog"
},
    {
        "base_attack": 54,
        "base_defense": 242,
        "base_stamina": 125,
        "form": "Normal",
        "pokemon_id": 790,
        "pokemon_name": "Cosmoem"
},
    {
        "base_attack": 255,
        "base_defense": 191,
        "base_stamina": 264,
        "form": "Normal",
        "pokemon_id": 791,
        "pokemon_name": "Solgaleo"
},
    {
        "base_attack": 255,
        "base_defense": 191,
        "base_stamina": 264,
        "form": "Normal",
        "pokemon_id": 792,
        "pokemon_name": "Lunala"
},
    {
        "base_attack": 249,
        "base_defense": 210,
        "base_stamina": 240,
        "form": "Normal",
        "pokemon_id": 793,
        "pokemon_name": "Nihilego"
},
    {
        "base_attack": 236,
        "base_defense": 196,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 794,
        "pokemon_name": "Buzzwole"
},
    {
        "base_attack": 316,
        "base_defense": 85,
        "base_stamina": 174,
        "form": "Normal",
        "pokemon_id": 795,
        "pokemon_name": "Pheromosa"
},
    {
        "base_attack": 330,
        "base_defense": 144,
        "base_stamina": 195,
        "form": "Normal",
        "pokemon_id": 796,
        "pokemon_name": "Xurkitree"
},
    {
        "base_attack": 207,
        "base_defense": 199,
        "base_stamina": 219,
        "form": "Normal",
        "pokemon_id": 797,
        "pokemon_name": "Celesteela"
},
    {
        "base_attack": 323,
        "base_defense": 182,
        "base_stamina": 139,
        "form": "Normal",
        "pokemon_id": 798,
        "pokemon_name": "Kartana"
},
    {
        "base_attack": 188,
        "base_defense": 99,
        "base_stamina": 440,
        "form": "Normal",
        "pokemon_id": 799,
        "pokemon_name": "Guzzlord"
},
    {
        "base_attack": 277,
        "base_defense": 220,
        "base_stamina": 200,
        "form": "Dawn_wings",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
},
    {
        "base_attack": 277,
        "base_defense": 220,
        "base_stamina": 200,
        "form": "Dusk_mane",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
},
    {
        "base_attack": 251,
        "base_defense": 195,
        "base_stamina": 219,
        "form": "Normal",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
},
    {
        "base_attack": 337,
        "base_defense": 196,
        "base_stamina": 200,
        "form": "Ultra",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
},
    {
        "base_attack": 246,
        "base_defense": 225,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 801,
        "pokemon_name": "Magearna"
},
    {
        "base_attack": 246,
        "base_defense": 225,
        "base_stamina": 190,
        "form": "Original_color",
        "pokemon_id": 801,
        "pokemon_name": "Magearna"
},
    {
        "base_attack": 265,
        "base_defense": 190,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 802,
        "pokemon_name": "Marshadow"
},
    {
        "base_attack": 145,
        "base_defense": 133,
        "base_stamina": 167,
        "form": "Normal",
        "pokemon_id": 803,
        "pokemon_name": "Poipole"
},
    {
        "base_attack": 263,
        "base_defense": 159,
        "base_stamina": 177,
        "form": "Normal",
        "pokemon_id": 804,
        "pokemon_name": "Naganadel"
},
    {
        "base_attack": 213,
        "base_defense": 298,
        "base_stamina": 156,
        "form": "Normal",
        "pokemon_id": 805,
        "pokemon_name": "Stakataka"
},
    {
        "base_attack": 315,
        "base_defense": 148,
        "base_stamina": 142,
        "form": "Normal",
        "pokemon_id": 806,
        "pokemon_name": "Blacephalon"
},
    {
        "base_attack": 252,
        "base_defense": 177,
        "base_stamina": 204,
        "form": "Normal",
        "pokemon_id": 807,
        "pokemon_name": "Zeraora"
},
    {
        "base_attack": 118,
        "base_defense": 99,
        "base_stamina": 130,
        "form": "Normal",
        "pokemon_id": 808,
        "pokemon_name": "Meltan"
},
    {
        "base_attack": 226,
        "base_defense": 190,
        "base_stamina": 264,
        "form": "Normal",
        "pokemon_id": 809,
        "pokemon_name": "Melmetal"
},
    {
        "base_attack": 122,
        "base_defense": 91,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 810,
        "pokemon_name": "Grookey"
},
    {
        "base_attack": 165,
        "base_defense": 134,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 811,
        "pokemon_name": "Thwackey"
},
    {
        "base_attack": 239,
        "base_defense": 168,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 812,
        "pokemon_name": "Rillaboom"
},
    {
        "base_attack": 132,
        "base_defense": 79,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 813,
        "pokemon_name": "Scorbunny"
},
    {
        "base_attack": 170,
        "base_defense": 125,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 814,
        "pokemon_name": "Raboot"
},
    {
        "base_attack": 238,
        "base_defense": 163,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 815,
        "pokemon_name": "Cinderace"
},
    {
        "base_attack": 132,
        "base_defense": 79,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 816,
        "pokemon_name": "Sobble"
},
    {
        "base_attack": 186,
        "base_defense": 113,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 817,
        "pokemon_name": "Drizzile"
},
    {
        "base_attack": 262,
        "base_defense": 142,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 818,
        "pokemon_name": "Inteleon"
},
    {
        "base_attack": 95,
        "base_defense": 86,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 819,
        "pokemon_name": "Skwovet"
},
    {
        "base_attack": 160,
        "base_defense": 156,
        "base_stamina": 260,
        "form": "Normal",
        "pokemon_id": 820,
        "pokemon_name": "Greedent"
},
    {
        "base_attack": 88,
        "base_defense": 67,
        "base_stamina": 116,
        "form": "Normal",
        "pokemon_id": 821,
        "pokemon_name": "Rookidee"
},
    {
        "base_attack": 129,
        "base_defense": 110,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 822,
        "pokemon_name": "Corvisquire"
},
    {
        "base_attack": 163,
        "base_defense": 192,
        "base_stamina": 221,
        "form": "Normal",
        "pokemon_id": 823,
        "pokemon_name": "Corviknight"
},
    {
        "base_attack": 46,
        "base_defense": 67,
        "base_stamina": 93,
        "form": "Normal",
        "pokemon_id": 824,
        "pokemon_name": "Blipbug"
},
    {
        "base_attack": 87,
        "base_defense": 157,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 825,
        "pokemon_name": "Dottler"
},
    {
        "base_attack": 156,
        "base_defense": 240,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 826,
        "pokemon_name": "Orbeetle"
},
    {
        "base_attack": 85,
        "base_defense": 82,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 827,
        "pokemon_name": "Nickit"
},
    {
        "base_attack": 172,
        "base_defense": 164,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 828,
        "pokemon_name": "Thievul"
},
    {
        "base_attack": 70,
        "base_defense": 104,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 829,
        "pokemon_name": "Gossifleur"
},
    {
        "base_attack": 148,
        "base_defense": 211,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 830,
        "pokemon_name": "Eldegoss"
},
    {
        "base_attack": 76,
        "base_defense": 97,
        "base_stamina": 123,
        "form": "Normal",
        "pokemon_id": 831,
        "pokemon_name": "Wooloo"
},
    {
        "base_attack": 159,
        "base_defense": 198,
        "base_stamina": 176,
        "form": "Normal",
        "pokemon_id": 832,
        "pokemon_name": "Dubwool"
},
    {
        "base_attack": 114,
        "base_defense": 85,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 833,
        "pokemon_name": "Chewtle"
},
    {
        "base_attack": 213,
        "base_defense": 164,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 834,
        "pokemon_name": "Drednaw"
},
    {
        "base_attack": 80,
        "base_defense": 90,
        "base_stamina": 153,
        "form": "Normal",
        "pokemon_id": 835,
        "pokemon_name": "Yamper"
},
    {
        "base_attack": 197,
        "base_defense": 131,
        "base_stamina": 170,
        "form": "Normal",
        "pokemon_id": 836,
        "pokemon_name": "Boltund"
},
    {
        "base_attack": 73,
        "base_defense": 91,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 837,
        "pokemon_name": "Rolycoly"
},
    {
        "base_attack": 114,
        "base_defense": 157,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 838,
        "pokemon_name": "Carkol"
},
    {
        "base_attack": 146,
        "base_defense": 198,
        "base_stamina": 242,
        "form": "Normal",
        "pokemon_id": 839,
        "pokemon_name": "Coalossal"
},
    {
        "base_attack": 71,
        "base_defense": 116,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 840,
        "pokemon_name": "Applin"
},
    {
        "base_attack": 214,
        "base_defense": 144,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 841,
        "pokemon_name": "Flapple"
},
    {
        "base_attack": 178,
        "base_defense": 146,
        "base_stamina": 242,
        "form": "Normal",
        "pokemon_id": 842,
        "pokemon_name": "Appletun"
},
    {
        "base_attack": 103,
        "base_defense": 123,
        "base_stamina": 141,
        "form": "Normal",
        "pokemon_id": 843,
        "pokemon_name": "Silicobra"
},
    {
        "base_attack": 202,
        "base_defense": 207,
        "base_stamina": 176,
        "form": "Normal",
        "pokemon_id": 844,
        "pokemon_name": "Sandaconda"
},
    {
        "base_attack": 173,
        "base_defense": 163,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 845,
        "pokemon_name": "Cramorant"
},
    {
        "base_attack": 118,
        "base_defense": 72,
        "base_stamina": 121,
        "form": "Normal",
        "pokemon_id": 846,
        "pokemon_name": "Arrokuda"
},
    {
        "base_attack": 258,
        "base_defense": 127,
        "base_stamina": 156,
        "form": "Normal",
        "pokemon_id": 847,
        "pokemon_name": "Barraskewda"
},
    {
        "base_attack": 97,
        "base_defense": 65,
        "base_stamina": 120,
        "form": "Normal",
        "pokemon_id": 848,
        "pokemon_name": "Toxel"
},
    {
        "base_attack": 224,
        "base_defense": 140,
        "base_stamina": 181,
        "form": "Amped",
        "pokemon_id": 849,
        "pokemon_name": "Toxtricity"
},
    {
        "base_attack": 224,
        "base_defense": 140,
        "base_stamina": 181,
        "form": "Low_key",
        "pokemon_id": 849,
        "pokemon_name": "Toxtricity"
},
    {
        "base_attack": 118,
        "base_defense": 90,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 850,
        "pokemon_name": "Sizzlipede"
},
    {
        "base_attack": 220,
        "base_defense": 158,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 851,
        "pokemon_name": "Centiskorch"
},
    {
        "base_attack": 121,
        "base_defense": 103,
        "base_stamina": 137,
        "form": "Normal",
        "pokemon_id": 852,
        "pokemon_name": "Clobbopus"
},
    {
        "base_attack": 209,
        "base_defense": 162,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 853,
        "pokemon_name": "Grapploct"
},
    {
        "base_attack": 134,
        "base_defense": 96,
        "base_stamina": 120,
        "form": "Antique",
        "pokemon_id": 854,
        "pokemon_name": "Sinistea"
},
    {
        "base_attack": 134,
        "base_defense": 96,
        "base_stamina": 120,
        "form": "Phony",
        "pokemon_id": 854,
        "pokemon_name": "Sinistea"
},
    {
        "base_attack": 248,
        "base_defense": 189,
        "base_stamina": 155,
        "form": "Antique",
        "pokemon_id": 855,
        "pokemon_name": "Polteageist"
},
    {
        "base_attack": 248,
        "base_defense": 189,
        "base_stamina": 155,
        "form": "Phony",
        "pokemon_id": 855,
        "pokemon_name": "Polteageist"
},
    {
        "base_attack": 98,
        "base_defense": 93,
        "base_stamina": 123,
        "form": "Normal",
        "pokemon_id": 856,
        "pokemon_name": "Hatenna"
},
    {
        "base_attack": 153,
        "base_defense": 133,
        "base_stamina": 149,
        "form": "Normal",
        "pokemon_id": 857,
        "pokemon_name": "Hattrem"
},
    {
        "base_attack": 237,
        "base_defense": 182,
        "base_stamina": 149,
        "form": "Normal",
        "pokemon_id": 858,
        "pokemon_name": "Hatterene"
},
    {
        "base_attack": 103,
        "base_defense": 69,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 859,
        "pokemon_name": "Impidimp"
},
    {
        "base_attack": 145,
        "base_defense": 102,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 860,
        "pokemon_name": "Morgrem"
},
    {
        "base_attack": 227,
        "base_defense": 139,
        "base_stamina": 216,
        "form": "Normal",
        "pokemon_id": 861,
        "pokemon_name": "Grimmsnarl"
},
    {
        "base_attack": 180,
        "base_defense": 194,
        "base_stamina": 212,
        "form": "Galarian",
        "pokemon_id": 862,
        "pokemon_name": "Obstagoon"
},
    {
        "base_attack": 195,
        "base_defense": 162,
        "base_stamina": 172,
        "form": "Galarian",
        "pokemon_id": 863,
        "pokemon_name": "Perrserker"
},
    {
        "base_attack": 253,
        "base_defense": 182,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 864,
        "pokemon_name": "Cursola"
},
    {
        "base_attack": 248,
        "base_defense": 176,
        "base_stamina": 158,
        "form": "Galarian",
        "pokemon_id": 865,
        "pokemon_name": "Sirfetch\u2019d"
},
    {
        "base_attack": 212,
        "base_defense": 179,
        "base_stamina": 190,
        "form": "Galarian",
        "pokemon_id": 866,
        "pokemon_name": "Mr. Rime"
},
    {
        "base_attack": 163,
        "base_defense": 237,
        "base_stamina": 151,
        "form": "Galarian",
        "pokemon_id": 867,
        "pokemon_name": "Runerigus"
},
    {
        "base_attack": 90,
        "base_defense": 97,
        "base_stamina": 128,
        "form": "Normal",
        "pokemon_id": 868,
        "pokemon_name": "Milcery"
},
    {
        "base_attack": 203,
        "base_defense": 203,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 869,
        "pokemon_name": "Alcremie"
},
    {
        "base_attack": 193,
        "base_defense": 170,
        "base_stamina": 163,
        "form": "Normal",
        "pokemon_id": 870,
        "pokemon_name": "Falinks"
},
    {
        "base_attack": 176,
        "base_defense": 161,
        "base_stamina": 134,
        "form": "Normal",
        "pokemon_id": 871,
        "pokemon_name": "Pincurchin"
},
    {
        "base_attack": 76,
        "base_defense": 59,
        "base_stamina": 102,
        "form": "Normal",
        "pokemon_id": 872,
        "pokemon_name": "Snom"
},
    {
        "base_attack": 230,
        "base_defense": 155,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 873,
        "pokemon_name": "Frosmoth"
},
    {
        "base_attack": 222,
        "base_defense": 182,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 874,
        "pokemon_name": "Stonjourner"
},
    {
        "base_attack": 148,
        "base_defense": 195,
        "base_stamina": 181,
        "form": "Ice",
        "pokemon_id": 875,
        "pokemon_name": "Eiscue"
},
    {
        "base_attack": 173,
        "base_defense": 139,
        "base_stamina": 181,
        "form": "Noice",
        "pokemon_id": 875,
        "pokemon_name": "Eiscue"
},
    {
        "base_attack": 184,
        "base_defense": 184,
        "base_stamina": 172,
        "form": "Female",
        "pokemon_id": 876,
        "pokemon_name": "Indeedee"
},
    {
        "base_attack": 208,
        "base_defense": 166,
        "base_stamina": 155,
        "form": "Male",
        "pokemon_id": 876,
        "pokemon_name": "Indeedee"
},
    {
        "base_attack": 192,
        "base_defense": 121,
        "base_stamina": 151,
        "form": "Full_belly",
        "pokemon_id": 877,
        "pokemon_name": "Morpeko"
},
    {
        "base_attack": 192,
        "base_defense": 121,
        "base_stamina": 151,
        "form": "Hangry",
        "pokemon_id": 877,
        "pokemon_name": "Morpeko"
},
    {
        "base_attack": 140,
        "base_defense": 91,
        "base_stamina": 176,
        "form": "Normal",
        "pokemon_id": 878,
        "pokemon_name": "Cufant"
},
    {
        "base_attack": 226,
        "base_defense": 126,
        "base_stamina": 263,
        "form": "Normal",
        "pokemon_id": 879,
        "pokemon_name": "Copperajah"
},
    {
        "base_attack": 195,
        "base_defense": 165,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 880,
        "pokemon_name": "Dracozolt"
},
    {
        "base_attack": 190,
        "base_defense": 166,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 881,
        "pokemon_name": "Arctozolt"
},
    {
        "base_attack": 175,
        "base_defense": 185,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 882,
        "pokemon_name": "Dracovish"
},
    {
        "base_attack": 171,
        "base_defense": 185,
        "base_stamina": 207,
        "form": "Normal",
        "pokemon_id": 883,
        "pokemon_name": "Arctovish"
},
    {
        "base_attack": 239,
        "base_defense": 185,
        "base_stamina": 172,
        "form": "Normal",
        "pokemon_id": 884,
        "pokemon_name": "Duraludon"
},
    {
        "base_attack": 117,
        "base_defense": 61,
        "base_stamina": 99,
        "form": "Normal",
        "pokemon_id": 885,
        "pokemon_name": "Dreepy"
},
    {
        "base_attack": 163,
        "base_defense": 105,
        "base_stamina": 169,
        "form": "Normal",
        "pokemon_id": 886,
        "pokemon_name": "Drakloak"
},
    {
        "base_attack": 266,
        "base_defense": 170,
        "base_stamina": 204,
        "form": "Normal",
        "pokemon_id": 887,
        "pokemon_name": "Dragapult"
},
    {
        "base_attack": 332,
        "base_defense": 240,
        "base_stamina": 192,
        "form": "Crowned_sword",
        "pokemon_id": 888,
        "pokemon_name": "Zacian"
},
    {
        "base_attack": 254,
        "base_defense": 236,
        "base_stamina": 192,
        "form": "Hero",
        "pokemon_id": 888,
        "pokemon_name": "Zacian"
},
    {
        "base_attack": 250,
        "base_defense": 292,
        "base_stamina": 192,
        "form": "Crowned_shield",
        "pokemon_id": 889,
        "pokemon_name": "Zamazenta"
},
    {
        "base_attack": 254,
        "base_defense": 236,
        "base_stamina": 192,
        "form": "Hero",
        "pokemon_id": 889,
        "pokemon_name": "Zamazenta"
},
    {
        "base_attack": 251,
        "base_defense": 505,
        "base_stamina": 452,
        "form": "Eternamax",
        "pokemon_id": 890,
        "pokemon_name": "Eternatus"
},
    {
        "base_attack": 278,
        "base_defense": 192,
        "base_stamina": 268,
        "form": "Normal",
        "pokemon_id": 890,
        "pokemon_name": "Eternatus"
},
    {
        "base_attack": 170,
        "base_defense": 112,
        "base_stamina": 155,
        "form": "Normal",
        "pokemon_id": 891,
        "pokemon_name": "Kubfu"
},
    {
        "base_attack": 254,
        "base_defense": 177,
        "base_stamina": 225,
        "form": "Rapid_strike",
        "pokemon_id": 892,
        "pokemon_name": "Urshifu"
},
    {
        "base_attack": 254,
        "base_defense": 177,
        "base_stamina": 225,
        "form": "Single_strike",
        "pokemon_id": 892,
        "pokemon_name": "Urshifu"
},
    {
        "base_attack": 242,
        "base_defense": 215,
        "base_stamina": 233,
        "form": "Normal",
        "pokemon_id": 893,
        "pokemon_name": "Zarude"
},
    {
        "base_attack": 250,
        "base_defense": 125,
        "base_stamina": 190,
        "form": "Normal",
        "pokemon_id": 894,
        "pokemon_name": "Regieleki"
},
    {
        "base_attack": 202,
        "base_defense": 101,
        "base_stamina": 400,
        "form": "Normal",
        "pokemon_id": 895,
        "pokemon_name": "Regidrago"
},
    {
        "base_attack": 246,
        "base_defense": 223,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 896,
        "pokemon_name": "Glastrier"
},
    {
        "base_attack": 273,
        "base_defense": 146,
        "base_stamina": 205,
        "form": "Normal",
        "pokemon_id": 897,
        "pokemon_name": "Spectrier"
},
    {
        "base_attack": 268,
        "base_defense": 246,
        "base_stamina": 205,
        "form": "Ice_rider",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex"
},
    {
        "base_attack": 162,
        "base_defense": 162,
        "base_stamina": 225,
        "form": "Normal",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex"
},
    {
        "base_attack": 324,
        "base_defense": 194,
        "base_stamina": 205,
        "form": "Shadow_rider",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex"
}
]

//Returns a JSON dict where each key is the attacking type and the value is a dict of defender types and the damage multiplier.
// PoGoAPI.net/api/v1/type_effectiveness.json

const TYPE_EFFECTIVENESS = [
    {
        "Bug": {
            "Bug": 1.0,
            "Dark": 1.6,
            "Dragon": 1.0,
            "Electric": 1.0,
            "Fairy": 0.625,
            "Fighting": 0.625,
            "Fire": 0.625,
            "Flying": 0.625,
            "Ghost": 0.625,
            "Grass": 1.6,
            "Ground": 1.0,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 0.625,
            "Psychic": 1.6,
            "Rock": 1.0,
            "Steel": 0.625,
            "Water": 1.0
        },
        "Dark": {
            "Bug": 1.0,
            "Dark": 0.625,
            "Dragon": 1.0,
            "Electric": 1.0,
            "Fairy": 0.625,
            "Fighting": 0.625,
            "Fire": 1.0,
            "Flying": 1.0,
            "Ghost": 1.6,
            "Grass": 1.0,
            "Ground": 1.0,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 1.0,
            "Psychic": 1.6,
            "Rock": 1.0,
            "Steel": 1.0,
            "Water": 1.0
        },
        "Dragon": {
            "Bug": 1.0,
            "Dark": 1.0,
            "Dragon": 1.6,
            "Electric": 1.0,
            "Fairy": 0.390625,
            "Fighting": 1.0,
            "Fire": 1.0,
            "Flying": 1.0,
            "Ghost": 1.0,
            "Grass": 1.0,
            "Ground": 1.0,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 1.0,
            "Psychic": 1.0,
            "Rock": 1.0,
            "Steel": 0.625,
            "Water": 1.0
        },
        "Electric": {
            "Bug": 1.0,
            "Dark": 1.0,
            "Dragon": 0.625,
            "Electric": 0.625,
            "Fairy": 1.0,
            "Fighting": 1.0,
            "Fire": 1.0,
            "Flying": 1.6,
            "Ghost": 1.0,
            "Grass": 0.625,
            "Ground": 0.390625,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 1.0,
            "Psychic": 1.0,
            "Rock": 1.0,
            "Steel": 1.0,
            "Water": 1.6
        },
        "Fairy": {
            "Bug": 1.0,
            "Dark": 1.6,
            "Dragon": 1.6,
            "Electric": 1.0,
            "Fairy": 1.0,
            "Fighting": 1.6,
            "Fire": 0.625,
            "Flying": 1.0,
            "Ghost": 1.0,
            "Grass": 1.0,
            "Ground": 1.0,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 0.625,
            "Psychic": 1.0,
            "Rock": 1.0,
            "Steel": 0.625,
            "Water": 1.0
        },
        "Fighting": {
            "Bug": 0.625,
            "Dark": 1.6,
            "Dragon": 1.0,
            "Electric": 1.0,
            "Fairy": 0.625,
            "Fighting": 1.0,
            "Fire": 1.0,
            "Flying": 0.625,
            "Ghost": 0.390625,
            "Grass": 1.0,
            "Ground": 1.0,
            "Ice": 1.6,
            "Normal": 1.6,
            "Poison": 0.625,
            "Psychic": 0.625,
            "Rock": 1.6,
            "Steel": 1.6,
            "Water": 1.0
        },
        "Fire": {
            "Bug": 1.6,
            "Dark": 1.0,
            "Dragon": 0.625,
            "Electric": 1.0,
            "Fairy": 1.0,
            "Fighting": 1.0,
            "Fire": 0.625,
            "Flying": 1.0,
            "Ghost": 1.0,
            "Grass": 1.6,
            "Ground": 1.0,
            "Ice": 1.6,
            "Normal": 1.0,
            "Poison": 1.0,
            "Psychic": 1.0,
            "Rock": 0.625,
            "Steel": 1.6,
            "Water": 0.625
        },
        "Flying": {
            "Bug": 1.6,
            "Dark": 1.0,
            "Dragon": 1.0,
            "Electric": 0.625,
            "Fairy": 1.0,
            "Fighting": 1.6,
            "Fire": 1.0,
            "Flying": 1.0,
            "Ghost": 1.0,
            "Grass": 1.6,
            "Ground": 1.0,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 1.0,
            "Psychic": 1.0,
            "Rock": 0.625,
            "Steel": 0.625,
            "Water": 1.0
        },
        "Ghost": {
            "Bug": 1.0,
            "Dark": 0.625,
            "Dragon": 1.0,
            "Electric": 1.0,
            "Fairy": 1.0,
            "Fighting": 1.0,
            "Fire": 1.0,
            "Flying": 1.0,
            "Ghost": 1.6,
            "Grass": 1.0,
            "Ground": 1.0,
            "Ice": 1.0,
            "Normal": 0.390625,
            "Poison": 1.0,
            "Psychic": 1.6,
            "Rock": 1.0,
            "Steel": 1.0,
            "Water": 1.0
        },
        "Grass": {
            "Bug": 0.625,
            "Dark": 1.0,
            "Dragon": 0.625,
            "Electric": 1.0,
            "Fairy": 1.0,
            "Fighting": 1.0,
            "Fire": 0.625,
            "Flying": 0.625,
            "Ghost": 1.0,
            "Grass": 0.625,
            "Ground": 1.6,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 0.625,
            "Psychic": 1.0,
            "Rock": 1.6,
            "Steel": 0.625,
            "Water": 1.6
        },
        "Ground": {
            "Bug": 0.625,
            "Dark": 1.0,
            "Dragon": 1.0,
            "Electric": 1.6,
            "Fairy": 1.0,
            "Fighting": 1.0,
            "Fire": 1.6,
            "Flying": 0.390625,
            "Ghost": 1.0,
            "Grass": 0.625,
            "Ground": 1.0,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 1.6,
            "Psychic": 1.0,
            "Rock": 1.6,
            "Steel": 1.6,
            "Water": 1.0
        },
        "Ice": {
            "Bug": 1.0,
            "Dark": 1.0,
            "Dragon": 1.6,
            "Electric": 1.0,
            "Fairy": 1.0,
            "Fighting": 1.0,
            "Fire": 0.625,
            "Flying": 1.6,
            "Ghost": 1.0,
            "Grass": 1.6,
            "Ground": 1.6,
            "Ice": 0.625,
            "Normal": 1.0,
            "Poison": 1.0,
            "Psychic": 1.0,
            "Rock": 1.0,
            "Steel": 0.625,
            "Water": 0.625
        },
        "Normal": {
            "Bug": 1.0,
            "Dark": 1.0,
            "Dragon": 1.0,
            "Electric": 1.0,
            "Fairy": 1.0,
            "Fighting": 1.0,
            "Fire": 1.0,
            "Flying": 1.0,
            "Ghost": 0.390625,
            "Grass": 1.0,
            "Ground": 1.0,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 1.0,
            "Psychic": 1.0,
            "Rock": 0.625,
            "Steel": 0.625,
            "Water": 1.0
        },
        "Poison": {
            "Bug": 1.0,
            "Dark": 1.0,
            "Dragon": 1.0,
            "Electric": 1.0,
            "Fairy": 1.6,
            "Fighting": 1.0,
            "Fire": 1.0,
            "Flying": 1.0,
            "Ghost": 0.625,
            "Grass": 1.6,
            "Ground": 0.625,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 0.625,
            "Psychic": 1.0,
            "Rock": 0.625,
            "Steel": 0.390625,
            "Water": 1.0
        },
        "Psychic": {
            "Bug": 1.0,
            "Dark": 0.390625,
            "Dragon": 1.0,
            "Electric": 1.0,
            "Fairy": 1.0,
            "Fighting": 1.6,
            "Fire": 1.0,
            "Flying": 1.0,
            "Ghost": 1.0,
            "Grass": 1.0,
            "Ground": 1.0,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 1.6,
            "Psychic": 0.625,
            "Rock": 1.0,
            "Steel": 0.625,
            "Water": 1.0
        },
        "Rock": {
            "Bug": 1.6,
            "Dark": 1.0,
            "Dragon": 1.0,
            "Electric": 1.0,
            "Fairy": 1.0,
            "Fighting": 0.625,
            "Fire": 1.6,
            "Flying": 1.6,
            "Ghost": 1.0,
            "Grass": 1.0,
            "Ground": 0.625,
            "Ice": 1.6,
            "Normal": 1.0,
            "Poison": 1.0,
            "Psychic": 1.0,
            "Rock": 1.0,
            "Steel": 0.625,
            "Water": 1.0
        },
        "Steel": {
            "Bug": 1.0,
            "Dark": 1.0,
            "Dragon": 1.0,
            "Electric": 0.625,
            "Fairy": 1.6,
            "Fighting": 1.0,
            "Fire": 0.625,
            "Flying": 1.0,
            "Ghost": 1.0,
            "Grass": 1.0,
            "Ground": 1.0,
            "Ice": 1.6,
            "Normal": 1.0,
            "Poison": 1.0,
            "Psychic": 1.0,
            "Rock": 1.6,
            "Steel": 0.625,
            "Water": 0.625
        },
        "Water": {
            "Bug": 1.0,
            "Dark": 1.0,
            "Dragon": 0.625,
            "Electric": 1.0,
            "Fairy": 1.0,
            "Fighting": 1.0,
            "Fire": 1.6,
            "Flying": 1.0,
            "Ghost": 1.0,
            "Grass": 0.625,
            "Ground": 1.6,
            "Ice": 1.0,
            "Normal": 1.0,
            "Poison": 1.0,
            "Psychic": 1.0,
            "Rock": 1.6,
            "Steel": 1.0,
            "Water": 0.625
        }
    }
    ]
    