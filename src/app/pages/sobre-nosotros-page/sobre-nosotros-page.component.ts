import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from "../../components/home/hero/hero.component";
import { NoticiasComponent } from "../../components/home/noticias/noticias.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { EquipoDesarrolloComponent } from "../../components/about-us/equipo-desarrollo/equipo-desarrollo.component";
import { MetasComponent } from "../../components/about-us/metas/metas.component";
import { VisionComponent } from "../../components/about-us/vision/vision.component";

@Component({
  selector: 'app-sobre-nosotros-page',
  imports: [HeaderComponent, HeroComponent, NoticiasComponent, FooterComponent, EquipoDesarrolloComponent, MetasComponent, VisionComponent],
  templateUrl: './sobre-nosotros-page.component.html'
})
export class SobreNosotrosPageComponent {

}
