import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { NoticiasComponent } from "../../components/home/noticias/noticias.component";
import { TorneosActivosComponent } from "../../components/home/torneosactivos/torneosactivos.component";
import { PatrocinadoresComponent } from "../../components/patrocinadores/patrocinadores.component";

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    NoticiasComponent,
    TorneosActivosComponent,
    PatrocinadoresComponent
],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
