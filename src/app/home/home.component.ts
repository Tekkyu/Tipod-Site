import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  
  <section class="hero is-info is-fullheight is-bold">

  <div id = "tm-section-1" class="hero-body">
    <p class="subtitle sub-pink is-4" >
    Bienvenue sur le
    </p>
    <h1 class="title">
      Projet  
      <span class="titre-red">Tipod</span>
    </h1>
    <p class="control">
            <a class="button is-danger button-home" href="#tm-section-2">
              <span>Lycée Louis-Rascol</span>
            </a>
          </p>
  </div>
  
</section>
  `,
  styles: [`
  .hero {
    background-image: Url('/assets/images/polarpod-home.jpg') !important;
    background-size:cover;
    background-position: center center;
  }

  .sub-pink {
    position: absolute;
    top: 49%;
    left:5%;
    transform: translateY(-50%);
    color : #fcfc !important;
  }
  .title{
    position: absolute;
    font-size: 75px;
    font-weight: bold;
    margin: 20px px 20px;
  }

  .button-home{
    position: absolute;
    margin-top: 50px;
    left:30%;
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
