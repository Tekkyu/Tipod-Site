import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projethome',
  template: `
  
    <section class="hero is-primary ">
    <div class="columns is-mobile">
      <div class="column abc has-text-centered ">
  <div class="hero-body has-text-centered">
    <p id="start-1" class="title ">
    Le projet est réalisé par les élèves du lycée Louis-Rascol
    </p>
    <p class="subtitle">
    Pour tout renseignements concernant le projet
    </p>
    <p class="buttons is-centered">
        <a href="mailto:hugoo.ondedieu@gmail.com" class="button is-danger ">
            <span class="text ">Nous contacter</span>
            <span class="front-gradient"></span>
        </a>
      </p>
</div>
</div></div>
</section>
  `,
  styles: [`
 @media only screen and (min-width: 960px) {
  .abc{
    background-color:#282727 !important;
    border-radius: 510% 80% / 250% 50% !important;
  }
    }
  

  .hero {
    background-color:#191919 ;
  }
  `]
})
export class ProjethomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
