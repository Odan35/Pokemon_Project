
// FONCTION 1


function getPokemonsByType(typeName,tab_pokemon){
    Pokemon_of_this_type = [];
    for (let index = 0; index < tab_pokemon.length; index++) {
		for (const p of tab_pokemon[index]["types"]) {
			if (p.name == typeName){
				Pokemon_of_this_type.push(tab_pokemon[index]);
			}
		}
    }
    if (Pokemon_of_this_type.length==0){
        console.log("Erreur sur le type, aucun pokémon ne correspond");
        alert("Erreur sur le type, aucun pokémon ne correspond, voici la liste de tous les pokemons");
        return getPokemonsByType(typeName,Pokemon.all_pokemons);
    } else {
        return Pokemon_of_this_type;
    }
}

// FONCTION 2


function getPokemonsByAttack(attackName){
    Pokemon_of_this_Attack = [];
	

    for (let index = 0; index < Pokemon.all_pokemons.length; index++) {
		for (let i = 0; i < Pokemon.all_pokemons[index]["fast_moves"].length; i++){
			if (Pokemon.all_pokemons[index]["fast_moves"][i]["name"]==attackName){
				Pokemon_of_this_Attack.push(Pokemon.all_pokemons[index]["pokemon_name"]);
			}
		}
		for (let i = 0; i < Pokemon.all_pokemons[index]["charged_moves"].length; i++){
			if (Pokemon.all_pokemons[index]["charged_moves"][i]["name"]==attackName){
				Pokemon_of_this_Attack.push(Pokemon.all_pokemons[index]["pokemon_name"]);
			}
		}
		for (let i = 0; i < Pokemon.all_pokemons[index]["elite_charged_moves"].length; i++){
			if (Pokemon.all_pokemons[index]["elite_charged_moves"][i]["name"]==attackName){
				Pokemon_of_this_Attack.push(Pokemon.all_pokemons[index]["pokemon_name"]);
			}
		}
		for (let i = 0; i < Pokemon.all_pokemons[index]["elite_fast_moves"].length; i++){
			if (Pokemon.all_pokemons[index]["elite_fast_moves"][i]["name"]==attackName){
				Pokemon_of_this_Attack.push(Pokemon.all_pokemons[index]["pokemon_name"]);
			}
		}
    }
    if (Pokemon_of_this_Attack.length==0){
        console.log("Erreur sur l'attaque, aucun pokémon ne correspond");
    }
    return Pokemon_of_this_Attack;
}


// FONCTION 3



function getAttacksByType(typeName){
    Attack_of_this_type = [];
    for ( var index of Attack.all_attacks) {
		if (index!=null){
			if (index["type"]==typeName){
				Attack_of_this_type.push(index["name"]);
			}
		}
    }
    if (Attack_of_this_type.length==0){
        console.log("Erreur sur le type, aucune attaque ne correspond");
    }
    return Attack_of_this_type;
}


// FONCTION 4


function sortPokemonByName(tableau_a_insertion){
	pok_temporaire=[];
	tableau_final=tableau_a_insertion;
	for (let index1 = 0; index1 < tableau_final.length-1; index1++) {
		for (let index = 0; index < tableau_final.length-1; index++) {
			if ( tableau_final[index]["pokemon_name"].localeCompare(tableau_final[index+1]["pokemon_name"])>0){
				pok_temporaire= tableau_final[index+1];
				tableau_final[index+1] = tableau_final[index];
				tableau_final[index] = pok_temporaire;
			}
		}
	}return tableau_final;
}// return tableau_final;


// FONCTION 5


function sortPokemonByStamina(tableau_a_insertion){
	pok_temporaire=[];
	tableau_pokemon_by_stamina=tableau_a_insertion;
	for (let index1 = 0; index1 < tableau_pokemon_by_stamina.length-1; index1++) {
		for (let index = 0; index < tableau_pokemon_by_stamina.length-1; index++) {
			if ( tableau_pokemon_by_stamina[index]["base_stamina"] < tableau_pokemon_by_stamina[index+1]["base_stamina"]){
				pok_temporaire= tableau_pokemon_by_stamina[index+1];
				tableau_pokemon_by_stamina[index+1] = tableau_pokemon_by_stamina[index];
				tableau_pokemon_by_stamina[index] = pok_temporaire;
			}
		}
	}return tableau_pokemon_by_stamina;
}// return tableau_pokemon_by_stamina;





// FONCTION 6

function getWeakerPokemon(attack) {
	finaldefense = "";
	TypeOfPokemon = "";
	TypeOfAttack = "";
	Effectiveness = 0;//3
	PowerAttack = 0;//1
	DefensePokemon = 0;//2
	ListOfPokemon= []
	ListOfEffectiveness = []
	weaker_pokemon = [];


	for ( var index1 of Attack.all_attacks){//(let index = 0; index < Attack.all_attacks.length; index++) {
		if (index1!=null){
			if (index1["name"]==attack){
				TypeOfAttack = index1["type"];
				PowerAttack = index1["power"];
			}
			if (TypeOfAttack==""){
				console.log("erreur dans le nom de l'attaque");
			}
		}
	}
	for (let index = 0; index < Pokemon.all_pokemons.length; index++) {

		ListOfPokemon.push(Pokemon.all_pokemons[index]["pokemon_name"]);
		DefensePokemon = Pokemon.all_pokemons[index]["base_defense"];
		TypeOfPokemon = Pokemon.all_pokemons[index]["types"][0];
		Effectiveness = Type.all_types[TypeOfAttack]["effectiveness"][TypeOfPokemon["name"]];
		finaldefense = (PowerAttack/(DefensePokemon*50))+2*Effectiveness;console.log(finaldefense);
		ListOfEffectiveness.push(finaldefense);
		}
	
	
	weaker_pokemon = sortPokemonByEffectiveness(ListOfPokemon,ListOfEffectiveness);
	return weaker_pokemon;
}



function sortPokemonByEffectiveness(tableau_a_insertion,tab1){
	pok_temporaire=[];
	tab2 = tab1;
	tableau_final=tableau_a_insertion;
	for (let index1 = 0; index1 < tableau_final.length-1; index1++) {
		for (let index = 0; index < tableau_final.length-1; index++) {
			if ( tab2[index] < tab2[index+1]){
				pok_temporaire = tableau_final[index+1];
				tableau_final[index+1] = tableau_final[index];
				tableau_final[index] = pok_temporaire;

				pok_temporaire= tab2[index+1];
				tab2[index+1] = tab2[index];
				tab2[index] = pok_temporaire;
			}
		}
	}
	return tableau_final;
}



function getStrongerPokemon(attack) {
	finaldefense = "";
	TypeOfPokemon = "";
	TypeOfAttack = "";
	Effectiveness = 0;//3
	PowerAttack = 0;//1
	DefensePokemon = 0;//2
	ListOfPokemon= []
	ListOfEffectiveness = []
	weaker_pokemon = [];


	for ( var index1 of Attack.all_attacks){//(let index = 0; index < Attack.all_attacks.length; index++) {
		if (index1!=null){
			if (index1["name"]==attack){
				TypeOfAttack = index1["type"];
				PowerAttack = index1["power"];
			}
			if (TypeOfAttack==""){
				console.log("erreur dans le nom de l'attaque");
			}
		}
	}
	for (let index = 0; index < Pokemon.all_pokemons.length; index++) {

		ListOfPokemon.push(Pokemon.all_pokemons[index]["pokemon_name"]);
		DefensePokemon = Pokemon.all_pokemons[index]["base_defense"];
		TypeOfPokemon = Pokemon.all_pokemons[index]["types"][0];
		Effectiveness = Type.all_types[TypeOfAttack]["effectiveness"][TypeOfPokemon["name"]];
		finaldefense = (PowerAttack/(DefensePokemon*50))+2*Effectiveness;console.log(finaldefense);
		ListOfEffectiveness.push(finaldefense);
		}
	
	
	weaker_pokemon = sortPokemonByStrongness(ListOfPokemon,ListOfEffectiveness);
	return weaker_pokemon;
}



function sortPokemonByStrongness(tableau_a_insertion,tab1){
	pok_temporaire=[];
	tab2 = tab1;
	tableau_final=tableau_a_insertion;
	for (let index1 = 0; index1 < tableau_final.length-1; index1++) {
		for (let index = 0; index < tableau_final.length-1; index++) {
			if ( tab2[index] > tab2[index+1]){
				pok_temporaire = tableau_final[index+1];
				tableau_final[index+1] = tableau_final[index];
				tableau_final[index] = pok_temporaire;

				pok_temporaire= tab2[index+1];
				tab2[index+1] = tab2[index];
				tab2[index] = pok_temporaire;
			}
		}
	}
	return tableau_final;
}

function SortPokemonsByGeneration(gen,tab_pokemon){
    Pokemon_of_this_generation = [];
	for (const pokemon of tab_pokemon) {
		if (gen == pokemon.pokemon_gen) {
			Pokemon_of_this_generation.push(pokemon);
		}
	}
	return Pokemon_of_this_generation;
}


















function calculCompliqué(attack,pokepoke){
	for (let index = 0; index < Attack.all_attacks.length; index++){}
}
function test(){
for ( var index of Attack.all_attacks){
	if (index!=null){
		console.log (index);
	}
	//console.log (index["name"]);
}}

