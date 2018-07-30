import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(public pkmnService: PokemonService) {
  this.id = 0; }

  ngOnInit() {
  }
	getPokemon(){
  console.log("Entrei na função")
    this.id++;
    this.pkmnService.getPokemon(this.id)
  .subscribe(
  (res)=>{
    this.pokemons.push(res);
  console.log(res);

  }

  }
  checkPokemon(pokemon) {
    this.pokemonservice.checkPokemon(pokemon.value).subscribe(
      (res)=>{
        this.pokemons = res;
        console.log(res);
        console.log(this.pokemons);
        this.pokemonsError = false;
      },
      (error)=> {
        this.pokemonsError = true;
      });
        
  }

}
