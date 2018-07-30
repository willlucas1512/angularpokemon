import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './pages/home/home.component';
import { BerriesComponent } from './pages/berries/berries.component';
import { AppRoutingModule } from './app.routing.module';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { ModalComponent } from './modal/modal.component';
import { TrainerService } from './services/trainer/trainer.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
    HomeComponent,
    BerriesComponent,
    TrainerComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  PokemonService,
  TrainerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
