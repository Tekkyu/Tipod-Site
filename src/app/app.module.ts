import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FonctionnaliteComponent } from './fonctionnalite/fonctionnalite.component';

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';

import { faMap, fas } from '@fortawesome/free-solid-svg-icons';
import { ProjethomeComponent } from './projethome/projethome.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MentionsComponent } from './mentions/mentions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PresentationComponent,
    FonctionnaliteComponent,
    ProjethomeComponent,
    ProjetComponent,
    MentionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faMap);
  }
}
