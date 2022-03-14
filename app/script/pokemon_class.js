function import_pokemon(pokemons) {
    for (let index = 0; index < pokemons.length; index++) {
        if (pokemons[index]["form"] == "Normal") {
            Pokemon.all_pokemons[Pokemon.all_pokemons.length] = new Pokemon(pokemons[index]);
        }
    }
}

class Pokemon{
    constructor(pokemon){
        this.pokemon_id = pokemon["pokemon_id"];
        this.pokemon_name = pokemon["pokemon_name"];
        this.base_attack = pokemon["base_attack"];
        this.base_defense = pokemon["base_defense"];
        this.base_stamina = pokemon["base_stamina"];
    }
    static all_pokemons = [];
    toString(){
        return "Identifiant du pokemon:" + this.pokemon_id + "\n" + "Nom du pokemon:" + this.pokemon_name + "\n" + "Attack de base:" + this.base_attack + "\n" + "Defense de base:" + this.base_defense + "\n" + "Stamina de base:" + this.base_stamina;
    }

}

