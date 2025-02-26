import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios: any[]=[];
  constructor(private http:HttpClient){}
   ngOnInit(){
     this.http.get<any[]>('assets/servicios.json').subscribe(data=>{
       this.servicios=data;
     })
   }
}