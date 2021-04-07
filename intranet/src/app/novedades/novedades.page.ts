import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';
import { UsuarioDatosService } from '../servicios/usuario-datos.service';


@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})
export class NovedadesPage implements OnInit {

  color:string='background:linear-gradient(90deg,#53AF32 0%, #387823 100%);'


  data=
  [
    {
        "nombre": "Ivan",
        "imagen": "http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/aa.jpg?",
        "funcion": "Desarrollador Bi",
        "sede": "Buenos Aires"
    },
    {
        "nombre": "Soledad",
        "imagen": "http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/wwww.jpg",
        "funcion": "Analista Desarrollador Bi",
        "sede": "Cordoba"
    },
    {
        "nombre": "Luciano",
        "imagen": "http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/aaa.png",
        "funcion": "Analista Desarrollador Bi",
        "sede": "Cordoba"
    },
    {
        "nombre": "Miguel",
        "imagen": "http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/www.jpg",
        "funcion": "Analista Desarrollador Bi",
        "sede": "Cordoba"
    },
    {
      "nombre": "Raúl",
      "imagen": "http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/qqq.jpg",
      "funcion": "Analista Desarrollador",
      "sede": "Cordoba"
  },
  {
    "nombre": "Raúl",
    "imagen": "http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/qqq.jpg",
    "funcion": "Analista Desarrollador",
    "sede": "Cordoba"
},
{
  "nombre": "Raúl",
  "imagen": "http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/qqq.jpg",
  "funcion": "Analista Desarrollador",
  "sede": "Cordoba"
},
{
  "nombre": "Raúl",
  "imagen": "http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/qqq.jpg",
  "funcion": "Analista Desarrollador",
  "sede": "Cordoba"
},
{
  "nombre": "Raúl",
  "imagen": "http://190.210.221.15:9500/intranet/wp-content/uploads/2020/05/qqq.jpg",
  "funcion": "Analista Desarrollador",
  "sede": "Cordoba"
},
    
  ]

  colores: Array<{codigo: string}> = 
  [
  {codigo:"background-image: radial-gradient(circle at 52% 37%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 70% 3%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 33%,transparent 33%, transparent 62%,transparent 62%, transparent 100%),radial-gradient(circle at 38% 28%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 94%,transparent 94%, transparent 100%),radial-gradient(circle at 12% 92%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 1%,transparent 1%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 50% 84%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 28%,transparent 28%, transparent 96%,transparent 96%, transparent 100%),radial-gradient(circle at 11% 43%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 20%,transparent 20%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 45% 11%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 19%,transparent 19%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 90% 54%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 11%,transparent 11%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 23% 100%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 35%,transparent 35%, transparent 86%,transparent 86%, transparent 100%),linear-gradient(0deg, rgb(0, 39, 63),rgb(0,  117, 190));"},

  {codigo:"background-image: radial-gradient(circle at 52% 37%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 70% 3%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 33%,transparent 33%, transparent 62%,transparent 62%, transparent 100%),radial-gradient(circle at 38% 28%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 94%,transparent 94%, transparent 100%),radial-gradient(circle at 12% 92%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 1%,transparent 1%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 50% 84%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 28%,transparent 28%, transparent 96%,transparent 96%, transparent 100%),radial-gradient(circle at 11% 43%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 20%,transparent 20%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 45% 11%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 19%,transparent 19%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 90% 54%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 11%,transparent 11%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 23% 100%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 35%,transparent 35%, transparent 86%,transparent 86%, transparent 100%),linear-gradient(0deg, rgb(92, 73, 0),rgb(255, 204, 0));"},

  {codigo:"background-image: radial-gradient(circle at 52% 37%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 70% 3%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 33%,transparent 33%, transparent 62%,transparent 62%, transparent 100%),radial-gradient(circle at 38% 28%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 94%,transparent 94%, transparent 100%),radial-gradient(circle at 12% 92%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 1%,transparent 1%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 50% 84%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 28%,transparent 28%, transparent 96%,transparent 96%, transparent 100%),radial-gradient(circle at 11% 43%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 20%,transparent 20%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 45% 11%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 19%,transparent 19%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 90% 54%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 11%,transparent 11%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 23% 100%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 35%,transparent 35%, transparent 86%,transparent 86%, transparent 100%),linear-gradient(0deg, rgb(82, 23, 0),rgb(233, 78, 15));"},

  {codigo:"background-image: radial-gradient(circle at 52% 37%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 70% 3%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 33%,transparent 33%, transparent 62%,transparent 62%, transparent 100%),radial-gradient(circle at 38% 28%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 94%,transparent 94%, transparent 100%),radial-gradient(circle at 12% 92%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 1%,transparent 1%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 50% 84%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 28%,transparent 28%, transparent 96%,transparent 96%, transparent 100%),radial-gradient(circle at 11% 43%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 20%,transparent 20%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 45% 11%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 19%,transparent 19%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 90% 54%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 11%,transparent 11%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 23% 100%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 35%,transparent 35%, transparent 86%,transparent 86%, transparent 100%),linear-gradient(0deg, rgb(0, 54, 77),rgb(91, 197, 242));"},

  {codigo:"background-image: radial-gradient(circle at 52% 37%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 70% 3%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 33%,transparent 33%, transparent 62%,transparent 62%, transparent 100%),radial-gradient(circle at 38% 28%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 94%,transparent 94%, transparent 100%),radial-gradient(circle at 12% 92%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 1%,transparent 1%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 50% 84%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 28%,transparent 28%, transparent 96%,transparent 96%, transparent 100%),radial-gradient(circle at 11% 43%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 20%,transparent 20%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 45% 11%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 19%,transparent 19%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 90% 54%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 11%,transparent 11%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 23% 100%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 35%,transparent 35%, transparent 86%,transparent 86%, transparent 100%),linear-gradient(0deg, rgb(19, 70, 0),rgb(83, 175, 50));"},

  {codigo:"background-image: radial-gradient(circle at 52% 37%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 70% 3%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 33%,transparent 33%, transparent 62%,transparent 62%, transparent 100%),radial-gradient(circle at 38% 28%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 94%,transparent 94%, transparent 100%),radial-gradient(circle at 12% 92%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 1%,transparent 1%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 50% 84%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 28%,transparent 28%, transparent 96%,transparent 96%, transparent 100%),radial-gradient(circle at 11% 43%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 20%,transparent 20%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 45% 11%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 19%,transparent 19%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 90% 54%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 11%,transparent 11%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 23% 100%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 35%,transparent 35%, transparent 86%,transparent 86%, transparent 100%),linear-gradient(0deg, rgb(75, 51, 0),rgb(247, 167, 0));"},

  ];

  colorElegido;

  coloresx: Array<{codigo: string}> = 
  [
  {codigo:'color:rgba(0, 117, 190 ); text-shadow: 0 0 4px #ffffff;opacity: 0.8'},

  {codigo:'color:rgba(255, 204, 0); text-shadow: 0 0 4px #000000;opacity: 0.8'},

  {codigo:'color:rgba(233, 78, 15); text-shadow: 0 0 4px #ffffff;opacity: 0.8'},

  {codigo:'color:rgba(91, 197, 242); text-shadow: 0 0 4px #000000;opacity: 0.8'},
  
  {codigo:'color:rgba(83, 175, 50); text-shadow: 0 0 4px #ffffff;opacity: 0.8'},

  {codigo:'color:rgba(247, 167, 0); text-shadow: 0 0 4px #000000;opacity: 0.8'}
  ];

  colorElegidox;

  




  constructor(  private _router: Router,
    public menu: MenuController,
    private uService: UsuarioDatosService,
    ) {
      this.uService.devolverColor(this.color)
     }

  ngOnInit() {
    this.cargar()
    this.cargarCumpleaños()
  }

  tMenu(){
    this.menu.toggle();
    this.color='background:linear-gradient(90deg,#53AF32 0%, #387823 100%);'
    this.uService.devolverColor(this.color)
    this.uService.refreshMenu();
  } 


  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
    this.color='background:linear-gradient(90deg,#0075BE 0%, #004D7E 100%);'
    this.uService.devolverColor(this.color)
    this.uService.refreshMenu();
  }

  cargar(){
    var num=this.data.length
    var col=new Array(num);
    var contador=0;

    //var colx=new Array(num);
    for (var i = 0 ; i< num ; i++) {
        if(contador==6){
          contador=0
        }
        col[i]=this.colores[contador];
        //colx[i]=this.coloresx[contador];
        contador++;
      }
      this.colorElegido = col;
      //this.colorElegidox = colx;
    }


    slideOpts = {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      }
    };



listaCumpleaños
    



cargarCumpleaños(){
  
  
  this.uService.traerCumpleaños().subscribe(u => {
   
    //let res= u["data"];


    let num=3;
    

    if(num>=1){
      this.listaCumpleaños = 2;
    }

    else{

      this.listaCumpleaños = [{comment_content:"Sin Cumpleaños este mes"},{comment_content:"Feliz mes de la Margarita"},{comment_content:"Feliz mes del Diamante"},{comment_content:"A comprar mandarinas"},];
    }

  })

};
    


}






