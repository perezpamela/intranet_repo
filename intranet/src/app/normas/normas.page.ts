import { Component, OnInit } from '@angular/core';
import { UsuarioDatosService } from '../servicios/usuario-datos.service';

@Component({
  selector: 'app-normas',
  templateUrl: './normas.page.html',
  styleUrls: ['./normas.page.scss'],
})
export class NormasPage implements OnInit {
  color:string='background:linear-gradient(90deg,#53AF32 0%, #387823 100%);';

  

  constructor(    
    private usuarioDatosService: UsuarioDatosService,
    ) 
    { }

  ngOnInit() {}  

  volverInicio(){
   
    this.color='background:linear-gradient(90deg,#0075BE 0%, #004D7E 100%);'
    this.usuarioDatosService.devolverColor(this.color)
    this.usuarioDatosService.refreshMenu();
  }

 



  data: Array<{title: string, backdif: string}> = 
  [
    {title:'Política de Calidad',
    backdif:'text-align: center;  background-image: linear-gradient(rgb(255, 255, 255),rgb(255, 255, 255), rgb(91, 197, 242, 0.3));'},

   {title:'Normas de Convivencia',
   backdif:'text-align: center;  background-image: linear-gradient(rgb(255, 255, 255),rgb(255, 255, 255), rgb(91, 197, 242, 0.3));'},

  {title:'Política de RRHH',
  backdif:'text-align: center;  background-image: linear-gradient(rgb(255, 255, 255),rgb(255, 255, 255), rgb(91, 197, 242, 0.3));'},

  {title:'Normas por Ley de Software',
  backdif:'text-align: center;  background-image: linear-gradient(rgb(255, 255, 255),rgb(255, 255, 255), rgb(91, 197, 242, 0.3));'}
  ];




  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        
    } else {
        data.showDetails = true;
        
    }

  }

  

}