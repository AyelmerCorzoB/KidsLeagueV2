import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeroComponent } from "../../components/home/hero/hero.component";
import { NoticiasComponent } from "../../components/home/noticias/noticias.component";
import { UltimospartidosComponent } from "../../components/home/ultimospartidos/ultimospartidos.component";

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, FooterComponent, HeroComponent, NoticiasComponent, UltimospartidosComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

}
