import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-fullheight ">
  <!-- Hero head: will stick at the top -->
  <div id="detail" class ="hero-head">
  <nav class="navbar is-transparent is-black">
  <div class="navbar-brand">
    <a class="navbar-item" routerLink="/">
      <img src="/assets/images/polarpod-logo-text.png" alt="PolarpPod" width="112" height="28">
    </a>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" routerLink="/">
        Accueil
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Outils
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="http://www.tipod.rascol.net:1880/ui/#!/1">
            Carte
          </a>
          <a class="navbar-item" href="http://www.tipod.rascol.net:1880/ui/#!/0">
            Données
          </a>
          <a class="navbar-item" href="http://www.tipod.rascol.net:1880/ui/#!/2">
            Open-Source
          </a>
          <a class="navbar-item" href="http://www.tipod.rascol.net:1880/ui/#!/3">
            Page Administrateur
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item nav-bar-red is-active" href="http://www.tipod.rascol.net:1880/">
            Node-Red
          </a>
          <a class="navbar-item is-active" href="https://github.com/Tekkyu/Tipod">
            GitHub
          </a>
        </div>
      </div>
        <a class="navbar-item" routerLink="/projet">
        Expliquation du projet
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="#" target="_blank" href="https://twitter.com/intent/tweet?text=Tipod: Un projet pour sensibiliser sur le changement climatique &amp;hashtags=tipod&amp;url=http://www.tipod.rascol.net/">
              <span>
                Faire un tweet sur nous
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-danger is-rounded " href="https://louis-rascol.mon-ent-occitanie.fr/">
              <span>Lycée Louis-Rascol</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
  </div>

  <!-- 1st hero -->
    <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">

                    <!-- Titre de la page d'accueil-->
                    <div class="column is-5 landing-caption">
                        <h1 class="title is-1 blanc is-semibold is-spaced main-title">Projet <span class=pink-1>Tipod</span></h1>
                        <h2 class="subtitle is-5 blanc is-thin">
                            Les données du projet sont publiées sur ce site internet!
                        </h2>
                        <!-- bouttons -->
                        <p class="buttons">
                            <a class="button is-danger is-light" disabled>
                                <span class="text">Nouvelle fonctionnalitée
                                </span>
                                <span class="front-gradient"></span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

</section>

    <!-- presentation -->
    <app-presentation></app-presentation>
    <!-- renseignement contact -->
    <app-projethome></app-projethome>
    <!-- fonctionnalitées -->
    <app-fonctionnalite></app-fonctionnalite>
  `,

  
  styles: [`

a:hover {
  color:#FF6E33 !important;
  }
  
  .pink-1 {
    color:#f9004d;
  }
  .blanc {
    color:#fff;
  }
  
  .nav-bar-red{
      color:red !important;
    }

  .hero {
    background-image: Url('/assets/images/polarpod-home.jpg') !important;
    background-size:cover;
    background-position: center center;
  }

  .titre-red{
    color: #f9004d;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
