import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
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
      <a class="navbar-item" href="#">
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
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="#" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span>
                Nous contacter
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
  `,
  styles: [
    ` 
    .hero {
      background-image: Url('/assets/images/polarpod-home.jpg') !important;
      background-size:cover;
      background-position: center center;
    }

    .nav-bar-red{
      color:red !important;
    }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
