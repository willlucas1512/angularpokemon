import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PokemonService {

pokeApiUrl = 'https://pokeapi.co/api/v2/';

constructor(public http: HttpClient) {
	console.log('Hello Pokemon Service');
}

getPokemon(id):Observable<any>{
	return this.http.get(this.pokeApiUrl+'pokemon/'+id).pipe(map(res=> res));
}
checkPokemon(id):Observable<any>{
	return this.http.get(this.pokeApiUrl+'pokemon/'+id).pipe(map(res=> res));
}
}