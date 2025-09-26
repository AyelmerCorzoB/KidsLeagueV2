import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from "../../components/home/hero/hero.component";
import { UltimospartidosComponent } from "../../components/home/ultimospartidos/ultimospartidos.component";
import { NoticiasComponent } from "../../components/home/noticias/noticias.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-sobre-nosotros-page',
  imports: [HeaderComponent, HeroComponent, UltimospartidosComponent, NoticiasComponent, FooterComponent],
  templateUrl: './sobre-nosotros-page.component.html'
})
export class SobreNosotrosPageComponent {

}
