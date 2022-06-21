import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <!--   footer  -->
  <footer class="footer">
        
  <!-- 3 columns -->
  <div class="columns">
      <!-- Column 1 -->
    <div class="column">
  
      <!-- alignés a gauche -->
      <h4 class="bd-footer-title has-text-weight-medium has-text-left"> Copyright ©2022 Tipod </h4>
  
      <!-- footer content -->
      <p class="bd-footer-link has-text-left"> Le projet Tipod est un projet de fin d'études (BTS) permettant de récupérer et analyser les données envoyées d'une bouée.</p>
  
    </div>
  
    <!-- Column 2 -->
    <div class="column">
      <h4 class="bd-footer-title has-text-weight-medium has-text-justify"> Explorer </h4>
  
      <!-- Column 2 lists with links -->
      <p class="bd-footer-link">
         <a href="http://www.tipod.rascol.net:1880/ui/#!/1">
          <span class="icon-text">
            <span>Carte</span>
          </span>
         </a>
          <br />
          <a href="http://www.tipod.rascol.net:1880/ui/#!/0">
              <span class="icon-text">
                <span>Données</span>
              </span>
            </a>
            <br />
          <a href="https://github.com/Tekkyu/Tipod">
              <span class="icon-text">
                <span>GitHub</span>
              </span>
          </a>
          <br />
          <a routerLink="/">
              <span class="icon-text">
                <span>accueil</span>
              </span>
          </a>
      </p>
  
    </div>
  
    <!-- Column 3 -->
    <div class="column">
      <h4 class="bd-footer-title has-text-weight-medium has-text-justify">Informations suplémentaires </h4>
  
      <!-- Column 3 lists with links -->
      <p class="bd-footer-link">
          <a href="mailto:hugoo.ondedieu@gmail.com">
              <span class="icon-text">
                <span>Email</span>
              </span>
            </a>
          <br />
          <a routerLink="/mentions">
              <span class="icon-text">
                <span>Mention Légales</span>
              </span>
            </a>
      </p>
  
    </div>
  </div>
</footer>
  `,
  styles: [`
  /* unvisited link */
  a:link {
    color: #4a4a4a;
  }

a:hover {
  color:#FF6E33 !important;
  }
  .content{
    color:white;
  }
  .footer{
    background-color:#191919;
    color:#CECECE;
  }
  .bd-footer-link{
    font-weight: bold;
  }
  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
