import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projet',
  template: `
    <section class="hero hero-bg is-fullheight ">
  <!-- Hero head: will stick at the top -->
  <div  id="detail" class="hero-head">
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
                        <h1 class="title is-1 blanc is-semibold is-spaced main-title">Le projet <span class=pink-1>Tipod</span></h1>
                        <h2 class="subtitle is-5 blanc is-thin">
                            Une bouée océanographique dérivante mise à l'eau dans le Courant Circumpolaire Antarctique. Cette bouée, autonome en énergie, est équipée d'instruments scientifiques afin de sensibiliser la population au changement climatique. 
                        </h2>
                        <!-- bouttons -->
                        <p class="buttons">
                            <a class="button is-warning is-light" disabled>
                                <span class="text">Nouvelle fonctionnalitée</span>
                                <span class="front-gradient"></span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

</section>

<!-- materiels scientifiques -->
<section class="hero bg-black is-primary">
  <div class="hero-body has-text-centered">
    <p class="title">
      Les différentes fonctionnalitées de la bouée
    </p>
  </div>
</section>

<div class="tile is-ancestor bg-black">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification">
          <p class="title">Hauteur des vagues</p>
          <p class="subtitle">La hauteur des vagues est mesurée via accélérométrie, en utilisant une houle et un traitement de données approprié. </p>
        </article>
        <article class="tile is-child notification">
          <p class="title">Vitesse et direction des vents</p>
          <p class="subtitle">Ces valeurs sont récupérés via des mesures ultrasoniques.</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">Photographies</p>
          <p class="subtitle">Des images seront prises tout les jours.</p>
          <figure class="image is-4by3">
            <img src="/assets/images/Baleines-image.jpg">
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification">
        <p class="title">Température, luminosité, pression athmosphérique</p>
        <p class="subtitle">La température est l'une des données les plus importantes que l'on souhaite examinés. Nous ajoutons aussi des valeurs de luminosité et de pression athmosphérique en utilisant des capteurs similaires.</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification">
      <div class="content">
        <p class="title">Coordonnées GPS</p>
        <p class="subtitle">Pouvoir localiser la bouée a n'importe qu'elle moment est l'une de nos tâches les plus importante. Pour cela, nous utilisons deux méthodes. 
        <br><br>-> La première consiste à utiliser notre prorpe composant GPS qui renvoie en liaison série les données souhaités. Cette méthode est plus précise mais aussi plus fragile que la deuxième.
        <br><br>-> La deuxième consite à utiliser une fonctionnalitée de nos fournisseur de satélittes, qui s'apelle "l'effet Doppler". Après 3 envoie de données, il est possible de déduire la position a une centaine de mètres près de la bouée.
        <br>Pour plus d'information sur la technologie Doppler, nous vous invitons a regarder sur le site de notre partenaire :</p><a target ="blank" href="https://www.argos-system.org/fr/support-et-aide/faq-localisation-argos/">Argos FAQ</a>
      </div>
    </article>
  </div>
</div>

<!-- Organisation -->
<section class="hero bg-black is-primary">
<div class="hero-body has-text-centered ">
    <p class="title ">L'organisation du projet :</p>
    <p class="subtitle "> Le projet est constitué de 4 missions différentes, avec 4 èleves par mission.</p>
  </div>
</section>

<section class="hero hero-bg1 is-primary is-medium">
  <div class="hero-body has-text-centered">
    <div class="columns is-centered">
  <div class="column bg-white placement-col">
    <p class="title black">Mission 1</p>
    <p class="subtitle black">Acquérir, transmettre et présenter les grandeurs physiques. Les élèves auront la responsabilité de mesurer et traiter les informations de la houle, du vent, de la température, de la pression atmosphérique et la luminosité. Chaque mesures seront triplées afin d'en controler la fiabilité.</p>
  </div>
  <div class="column bg-white placement-col">
    <p class="title black">Mission 2</p>
    <p class="subtitle black">Gérer la consommation énergétique de la bouée. Cette partie est crucial, elle permet à la bouée d'avoir assez d'énergie pour fonctionner pendant deux ans. Les élèves devront séquencer les alimentations ainsi que les tâches et mêttre en place une stratégie d'alimentation.</p>
  </div>
  <div class="column bg-white placement-col">
    <p class="title black">Mission 3</p>
    <p class="subtitle black">Visualiser l'environnement. Nous souhaitons photographier et filmer l'environnement du TIPOD et les partager sur le site internet. </p>
  </div>
  <div class="column bg-white placement-col">
    <p class="title black">Mission 4</p>
    <p class="subtitle black">Localiser la bouée. Cette mission consiste a récupérer les informations GPS de la bouée et les transmettre / afficher sur une carte géographique accessible via le site web.</p>
  </div>
</div>
</div>
</section>

<!-- Serveur linux -->

  `,
  styles: [`
  a:hover {
  color:#FF6E33 !important;
  }

  .black {
    color:#4a4a4a!important;
    margin-bottom: 50px;
  }
  .bg-white {
    background-color:#ffffffc4;
  }
  .placement-col {
    margin:5px;
    max-width: 340px;
    padding:40px;
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
  
  .hero-bg {
    background-image: Url('/assets/images/Polar-pod-bg.png') !important;
    background-size:cover;
    background-position: center center;
  }

  .hero-bg1 {
    background-image: Url('/assets/images/bg-img-04.jpg') !important;
    background-size:cover;
    background-position: center center;
  }

  .titre-red{
    color: #f9004d;
  }

  .bg-black{
    background-color: #191919 !important
  }
  `
  ]
})
export class ProjetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}

