import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-eventos-page',
  imports: [HeaderComponent],
  templateUrl: './eventos-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventosPageComponent { }
