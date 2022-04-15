//Definition des classes et leur méthodes.
class Type{
    constructor(type_effect,n){
        this.name = n;
        this.effectiveness = type_effect;
    }
    static all_types = [];
}

class Attack{
    static _CRITICAL_CHANCE = "critical_chance";
    static _DURATION = "duration";
    static _ENERGY_DELTA = "energy_delta";
    static _MOVE_ID = "move_id";
    static _NAME = "name";
    static _POWER = "power";
    static _STAMINA_LOSS_SCALER = "stamina_loss_scaler";
    static _TYPE = "type";
    constructor(attack,n_t){
        this.critical_chance = attack[Attack._CRITICAL_CHANCE];
        this.duration = attack[Attack._DURATION];
        this.energy_delta = attack[Attack._ENERGY_DELTA];
        this.move_id = attack[Attack._MOVE_ID];
        this.name = attack[Attack._NAME];
        this.power = attack[Attack._POWER];
        this.stamina_loss_scaler = attack[Attack._STAMINA_LOSS_SCALER];
        this.type = attack[Attack._TYPE];
        this.name_type = n_t;
    }
    static all_attacks = []
}

class Pokemon{
    // Constante 
    static _POKEMON_ID = "pokemon_id";
    static _POKEMON_NAME = "pokemon_name";
    static _BASE_ATTACK = "base_attack";
    static _BASE_DEFENSE = "base_defense";
    static _BASE_STAMINA = "base_stamina";
    constructor(pokemon,pokemonType,charged_moves,fast_moves,elite_charged_moves,elite_fast_moves,gen){
        //Affectation des variables "simple" pour les pokemons
        this.pokemon_id = pokemon[Pokemon._POKEMON_ID];
        this.pokemon_name = pokemon[Pokemon._POKEMON_NAME];
        this.pokemon_gen = "Generation :"+gen;
        this.base_attack = pokemon[Pokemon._BASE_ATTACK];
        this.base_defense = pokemon[Pokemon._BASE_DEFENSE];
        this.base_stamina = pokemon[Pokemon._BASE_STAMINA];
        
        //Creation des objets Type dans les attributs des pokemons.
        var types = [];
        for (let index = 0; index < pokemonType.length; index++) {
            types[index] = Type.all_types[pokemonType[index]];
        }
        this.types = types;

        // Creation des objets Attack dans les attributs des pokemons

            //FAST MOVES
        var fast_m = [];
        for (var indice in Attack.all_attacks) {
            var att = Attack.all_attacks[indice];
            for (let index2 = 0; index2 < fast_moves.length; index2++) {
                if (fast_moves[index2] == att.name) {
                    fast_m[index2] = att;
                }  
            }        
        }
        this.fast_moves = fast_m;

            //ELITE FAST MOVES
        var elite_fast_m = [];
        for (var indice in Attack.all_attacks) {
            var att = Attack.all_attacks[indice];
            for (let index2 = 0; index2 < elite_fast_moves.length; index2++) {
                if (elite_fast_moves[index2] == att.name) {
                    elite_fast_m[index2] = att;
                }
                
            }     
        }
        this.elite_fast_moves = elite_fast_m;

            //CHARGED MOVES
        var charged_m = [];
        for (var indice in Attack.all_attacks) {
            var att = Attack.all_attacks[indice];
            for (let index2 = 0; index2 < charged_moves.length; index2++) {
                if (charged_moves[index2] == att.name) {
                    charged_m[index2] = att;
                }
                
            }     
        }
        this.charged_moves = charged_m;

            //ELITE CHARGED MOVES
        var elite_charged_m = []
        for (var indice in Attack.all_attacks) {
            var att = Attack.all_attacks[indice];
            for (let index2 = 0; index2 < elite_charged_moves.length; index2++) {
                if (elite_charged_moves[index2] == att.name) {
                    elite_charged_m[index2] = att;
                }
                
            }     
        }
        this.elite_charged_moves = elite_charged_m;
    }
    static all_pokemons = [];
    toString(){
        return "Identifiant du pokemon:" + this.pokemon_id + "\n" + "Nom du pokemon:" + this.pokemon_name + "\n" + "Attack de base:" + this.base_attack + "\n" + "Defense de base:" + this.base_defense + "\n" + "Stamina de base:" + this.base_stamina;
    }
    getTypes(){
        return this.types;
    }
   getAttacks(){
        let attack = [];
        attack["fast_moves"] = attack.push(this.fast_moves);
        return attack;

    }
    
}


// Fonction import_pokemon()

function import_pokemon() {
    //boucle sur tous les pokemons de form normal
    Pokemon.all_pokemons = [];
    Type.all_types = [];
    Attack.all_attacks = [];

    for (let index = 0; index < POKEMON.length; index++) {
        if (POKEMON[index]["form"] == "Normal") {
            //Type
            let type = POKEMON_TYPE[index]["type"]
            for (let index2 = 0; index2 < type.length; index2++) {
                let nom_type = type[index2];
                if (Type.all_types[nom_type] == undefined) {
                    Type.all_types[nom_type] = new Type(TYPE_EFFECTIVENESS[0][nom_type],nom_type);
                }
            }
            
            // Attack
            let charged_moves = POKEMON_MOVES[index]["charged_moves"];
            let elite_charged_moves = POKEMON_MOVES[index]["elite_charged_moves"];
            let fast_moves = POKEMON_MOVES[index]["fast_moves"];
            let elite_fast_moves = POKEMON_MOVES[index]["elite_fast_moves"];
                //CHARGED MOVES
            for (let index4 = 0; index4 < CHARGED_MOVES.length; index4++) {
                let name = CHARGED_MOVES[index4]["name"];
                let move_id = CHARGED_MOVES[index4]["move_id"];
                let move_id_string = "'";
                move_id_string = move_id_string + move_id.toString();
                for (let index5 = 0; index5 < charged_moves.length; index5++) {
                   if (charged_moves[index5] == name) {
                       if (Attack.all_attacks[move_id_string] == undefined) {
                           Attack.all_attacks[move_id_string] = new Attack(CHARGED_MOVES[index4],"charged_moves");
                       }
                   }
                    
                }

                for (let index6 = 0; index6 < elite_charged_moves.length; index6++) {
                    if (elite_charged_moves[index6] == name) {
                        if (Attack.all_attacks[move_id_string] == undefined) {
                            Attack.all_attacks[move_id_string] = new Attack(CHARGED_MOVES[index4],"elite_charged_moves");
                        }
                    }
                    
                }
                
            }

                //FAST_MOVES 
            for (let index4 = 0; index4 < FAST_MOVES.length; index4++) {
                let fast_move = FAST_MOVES[index4];
                let name = FAST_MOVES[index4]["name"];
                let move_id = FAST_MOVES[index4]["move_id"];
                let move_id_string = "'";
                move_id_string = move_id_string + move_id.toString();
                for (let index5 = 0; index5 < fast_moves.length; index5++) {
                   if (fast_moves[index5] == name) {
                       if (Attack.all_attacks[move_id_string] == undefined) {
                           Attack.all_attacks[move_id_string] = new Attack(fast_move,"fast_moves");
                       }
                   }
                    
                }
                for (let index6 = 0; index6 < elite_fast_moves.length; index6++) {
                    if (elite_fast_moves[index6] == name) {
                        if (Attack.all_attacks[move_id_string] == undefined) {
                            Attack.all_attacks[move_id_string] = new Attack(fast_move,"elite_fast_moves");
                        }
                    }
                     
                 }
                
            }

            //gen
            let pokemonGen;
            for (const gen of GENERATION[0]["Generation 1"]) {
                if (POKEMON[index]["pokemon_id"] == gen["id"]) {
                    pokemonGen = 1;
                }
            }
            for (const gen of GENERATION[0]["Generation 2"]) {
                if (POKEMON[index]["pokemon_id"] == gen["id"]) {
                    pokemonGen = 2;
                }
            }
            for (const gen of GENERATION[0]["Generation 3"]) {
                if (POKEMON[index]["pokemon_id"] == gen["id"]) {
                     pokemonGen = 3;
                }
            }
            for (const gen of GENERATION[0]["Generation 4"]) {
                if (POKEMON[index]["pokemon_id"] == gen["id"]) {
                     pokemonGen = 4;
                }
            }
            for (const gen of GENERATION[0]["Generation 5"]) {
                if (POKEMON[index]["pokemon_id"] == gen["id"]) {
                     pokemonGen = 5;
                }
            }
            for (const gen of GENERATION[0]["Generation 6"]) {
                if (POKEMON[index]["pokemon_id"] == gen["id"]) {
                     pokemonGen = 6;
                }
            }
            for (const gen of GENERATION[0]["Generation 7"]) {
                if (POKEMON[index]["pokemon_id"] == gen["id"]) {
                     pokemonGen = 7;
                }
            }
            for (const gen of GENERATION[0]["Generation 8"]) {
                if (POKEMON[index]["pokemon_id"] == gen["id"]) {
                     pokemonGen = 8;
                }
            }

            // Ajout des pokemons
            Pokemon.all_pokemons[Pokemon.all_pokemons.length] = new Pokemon(POKEMON[index],type,charged_moves,fast_moves,elite_charged_moves,elite_fast_moves,pokemonGen);

        }
    }
}

