import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";
import { PokemonService } from '../services/pokemon.service';
import { TrainerService } from '../services/trainer/trainer.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
modalActions = new EventEmitter<string|MaterializeAction>();
ageError: boolean = false
numberError: boolean = false
pokemons;

  constructor(public pkmnService: PokemonService, public trainerService: TrainerService) {
  this.id = 0; }

  ngOnInit() {}

  checkPokemon(pokemon) {
    this.pkmnService.checkPokemon(pokemon.value).subscribe(
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

abreModal() {
  this.modalActions.emit({action:"modal",params:['open']});
}
fechaModal() {
  this.modalActions.emit({action:"modal",params:['close']});
}
onSubmit(login) {
	console.log(login);
	this.trainerService.createTrainer(login.value.nome,login.value.pokemon,login.value.numero).subscribe(res=>console.log(res));
}
checkAge(idade) {
	if(idade.value < 10)
		this.ageError = true;
	else
		this.ageError = false;
}
checkNumber(numero) {
  if(numero.value.length != 8)
    this.numberError = true;
  else
    this.numberError = false;
}

}
