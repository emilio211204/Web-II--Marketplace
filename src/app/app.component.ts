import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { NosotrosComponent } from './pages/nosotros/nosotros.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NosotrosComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Marketplace';
}
