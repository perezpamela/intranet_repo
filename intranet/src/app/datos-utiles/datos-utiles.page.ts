import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-datos-utiles',
  templateUrl: './datos-utiles.page.html',
  styleUrls: ['./datos-utiles.page.scss'],
})

export class DatosUtilesPage implements OnInit {



  data: Array<{title: string, details: string, icon: string,imagen: string, showDetails: boolean}> = 
  [
   {title:'Omint',
   details:'Cuando hablamos de los grandes referentes de medicina prepaga en la Argentina no podemos dejar de mencionar a la empresa Omint. Su larga trayectoria, volumen de prestadores y asociados y niveles  de satisfacción, posicionan a la prepaga Omint como una de las top 5 del país.',
   icon:'background: #0075BE;',
   imagen:'http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/Omint-230x112.png',
   showDetails:false},

  {title:'Swiss Medical Group',
  details:'Swiss Medical Group es uno de los principales grupos empresarios de Argentina que se dedica a la protección de personas y es líder en el mercado de la salud.',
  icon:'background: #FFF000;',
  imagen: 'http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/swiss-medical-asistencia-al-viajero-1-230x131.png',
  showDetails:false},

  {title:'Aseguradora',
  details:'Trabajamos para proteger el trabajo de los otros, respaldando a las empresas, los organismos y las instituciones que hacen al crecimiento de nuestro país. Somos la Aseguradora de Riesgos del Trabajo del Grupo Provincia, n° 1 de la Provincia de Buenos Aires y una de las más importantes de la Argentina.',
  icon:'background: #E94E0F;',  
  imagen: 'http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/descarga-1.png',
  showDetails:false},

  {title:'Banco',
  details:'Somos uno de los bancos líderes del mercado argentino. Siempre nos destacamos por estar cerca de nuestros clientes y comprometidos con el desarrollo sustentable de la Argentina. Ofrecemos productos y servicios de calidad buscando constantemente propuestas innovadoras para lograr una mayor satisfacción de nuestros clientes.',
  icon:'background: #5BC5F2;',
  imagen: 'http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/1b049bdf3f9b91ad63215c1480ef06be-830x286.jpg',
  showDetails:false}
  ];
  



  constructor(public navCtrl: NavController,
    private _router: Router,
    public menu: MenuController,) {
/*
    for(let i = 0; i < 4; i++ ){
      this.data.push({
          title: 'Title '+i,
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          icon: 'medkit-outline',
          showDetails: false
        });
    }*/
  }

  ngOnInit() {
  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        
    } else {
        data.showDetails = true;
        
    }

  }

  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
  }

  tMenu(){
   
    this.menu.toggle();
  }
  
  
}
