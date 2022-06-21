import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  template: `
  <section id="start" class="hero is-danger is-fullheight ">
    <div class="columns pt-7 is-vcentered ">
      <div class="column mt-7 ">
      <h1 class="is-size-1 has-text-white has-text-weight-semibold has-text-centered">Jean Louis Étienne</h1>
      <h2 class="subtitle is-5 blanc is-thin has-text-centered">Médecin|<span class=pink-1>|Explorateur</span> </h2>
      <p class="subtitle is-6 blanc is-thin has-text-centered">Médecin spécialiste de nutrition et de biologie du sport, Jean-Louis Étienne a participé à de nombreuses expéditions en Himalaya, au Groenland, en Patagonie. Infatigable défenseur de la planète, il a mené plusieurs expéditions à vocation pédagogique pour faire connaître les régions polaires et comprendre le rôle qu’elles jouent sur la vie et le climat de la terre. Et en avril 2010, il réussit la première traversée de l’océan arctique en ballon. Il a été le premier homme à atteindre le pôle Nord en solitaire et a réussi la plus longue traversée de l'Antarctique en traîneau à chiens : 6300 km.</p>
      
      <p class="buttons is-centered">
        <a target="blank" href="https://jeanlouisetienne.com/biographie" class="button is-danger is-light rm-top contacter">
            <span class="text ">En savoir plus</span>
            <span class="front-gradient"></span>
        </a>
      </p>
      <p class="buttons is-centered">
        <a class="button is-danger is-light rm-top " disabled>
            <span class="text ">Nouvelle fonctionnalitée</span>
            <span class="front-gradient"></span>
        </a>
      </p>
        </div>
      <div class="column mt-8 has-text-centered">
      <img src="/assets/images/JLE-image.jpg" />
      </div>
       
    </div>

    
   

</section>


  `,
  styles: [`

  .columns{
    background-color:#282727;
    margin-top: 10rem;
  }

  .subtitle{
    text-justify: distribute !important;
  }

  .pink-1 {
    color:#f14668;
  }

  .hero {
    background-color:#191919 !important;
  }

  .rm-top {
  display:inline-block;
  }


  .contacter {
    background-color:#f14668 !important;
    color:white !important;
  }

  `]
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
