import { Component, OnInit } from '@angular/core';

import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fonctionnalite',
  template: `
  <section class="hero is-primary is-large">
  <div class="hero-body">
      <p class="title is-2 has-text-centered test">Les fonctionnalitées du site</p>
        <div class="columns ">
        <!-- carte géographique -->
        <div class="column has-text-centered ">
        <fa-icon
        [icon]="faMap"
        [styles]="{ stroke: 'red', color: '#f14668' }"
        size="5x"
        ></fa-icon>
        <h1 class="title has-text-centered">Carte géographique</h1>
        <h2 class="subtitle has-text-centered pink-1">Une carte géographique avec les coordonées GPS de la bouée en temps réel est disponible. Nous utilisons l'effet Dopler ainsi qu'un composant GPS pour la localisation.</h2>
        <p class="buttons is-centered">
          <a target="blank" href="http://www.tipod.rascol.net:1880/ui/#!/1" class="button is-danger b-pink">
              <span class="text ">Accéder a la carte</span>
              <span class="front-gradient"></span>
          </a>
        </p>
        </div>
    <!-- Données -->
    <div class="column has-text-centered ">
        <fa-icon
        [icon]="faDatabase"
        [styles]="{ stroke: 'red', color: '#f14668' }"
        size="5x"
        ></fa-icon>
        <h1 class="title has-text-centered">Données</h1>
        <h2 class="subtitle has-text-centered pink-1">Les données envoyées par la bouée sont automatiquement actualisé sur le site internet. Nous utilisons un programme sous python permettant d'extraire les données.</h2>
        <p class="buttons is-centered">
          <a target="blank" href="http://www.tipod.rascol.net:1880/ui/#!/0" class="button is-danger b-pink">
              <span class="text ">Accéder aux données</span>
              <span class="front-gradient"></span>
          </a>
        </p>  
      </div>
    <!-- open source -->
    <div class="column has-text-centered ">
        <fa-icon
        [icon]="faEye"
        [styles]="{ stroke: 'red', color: '#f14668' }"
        size="5x"
        ></fa-icon>
        <h1 class="title has-text-centered">Open-Source</h1>
        <h2 class="subtitle has-text-centered pink-1">Les différents programmes utilisées durant le projet sont Open-Source ! Un répertoire GitHub est a disposition ainsi qu'un accès au code source du framework Node-Red.</h2>
        <p class="buttons is-centered">
          <a target="blank" href="http://www.tipod.rascol.net:1880/ui/#!/3" class="button is-danger b-pink">
              <span class="text ">Accéder a la carte</span>
              <span class="front-gradient"></span>
          </a>
        </p>  
      </div>
    
      </div>
      <div class="columns is-mobile ">
      <div class="column abc has-text-centered ">
        <h1 class="title">Le projet Tipod</h1>
        <h2 class="subtitle">Vous voulez en savoir plus sur quoi consiste le projet, le cahier des charges, les différentes missions attribué aux éleves? </h2>
        <p class="buttons is-centered">
          <a routerLink="/projet" class="button is-danger is-light">
              <span class="text ">Cliquez ici</span>
              <span class="front-gradient"></span>
          </a>
        </p>
        </div></div>
<router-outlet></router-outlet>
      
  </div>
  
</section>

  `,
  styles: [`


  
  .abc {
    background-color:#191919 !important;
    padding-top: 5em;
  }

  .hero.body {
    padding-bottom: 18rem !important;
  }
  .column{
    background-color:#282727 ;
  }

  .hero {
    background-color:#191919  !important;
  }

  .pink-1 {
    color:#fcfc !important;
  }

  .b-pink {
    background-color:#f14668 !important;
    color:white !important;
  }

  .test {
    margin-bottom: 3rem;
  }

  `]
})
export class FonctionnaliteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faMap = faMap;
  faDatabase = faDatabase;
  faEye = faEye;
}
