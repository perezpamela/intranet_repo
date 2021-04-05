import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDatosService } from '../servicios/usuario-datos.service';

@Component({
  selector: 'app-procesos-org',
  templateUrl: './procesos-org.page.html',
  styleUrls: ['./procesos-org.page.scss'],
})
export class ProcesosOrgPage implements OnInit {
  color:string='background:linear-gradient(90deg,#53AF32 0%, #387823 100%);'
  


  imagenes: Array<{img: string}> = 
  [
  {img:'http://190.210.221.15:9500/intranet/wp-content/uploads/elementor/thumbs/Administraci%C3%B3n--oseqvoa7hah2gqybcutjb15w7mf1vmnmatqpwe8vco.jpg'},

  {img:'http://190.210.221.15:9500/intranet/wp-content/uploads/elementor/thumbs/kisspng-clip-art-business-partner-portable-network-graphic-kyc-solution-customer-relationship-logo-12-x-5cd403c6abbf65.6132761115573984707035-osf9ghe4ak0tcdgyzga6xre0gfy1qks2l4d5r4li2g.png'},

  {img:'http://190.210.221.15:9500/intranet/wp-content/uploads/elementor/thumbs/kisspng-documentary-film-document-management-system-docume-document-5b07853e831693.2204757115272195185369-osf88p2rxe2yib2no0wuab6099ri65y7kebvy3ipx4.png'},

  {img:'http://190.210.221.15:9500/intranet/wp-content/uploads/elementor/thumbs/pngwing.com-5-osf8zzc4b9flitfvcbhz5xap0xa2lv9png2ag92baw.png'},
  
  {img:'http://190.210.221.15:9500/intranet/wp-content/uploads/elementor/thumbs/kisspng-human-resource-management-human-resource-managemen-people-chain-5b31b131b625f7.6604754815299832817461-osf6u84qymzp42dvdpizwjnzzgizv8l2alaba8cq0o.png'},

  {img:'http://190.210.221.15:9500/intranet/wp-content/uploads/elementor/thumbs/1-osf7w32q8etgqne4b2o1bzqdc5x7wcvutz8d5g7veg.png'}
  ];








  imagen="https://media.glassdoor.com/sql/2610962/dicsys-squarelogo-1566572714845.png"

  constructor(    private _router: Router,
    private usuarioDatosService: UsuarioDatosService,) { 
    }

  ngOnInit() {
  }

  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
    this.color='background:linear-gradient(90deg,#0075BE 0%, #004D7E 100%);'
    this.usuarioDatosService.devolverColor(this.color)
    this.usuarioDatosService.refreshMenu();
  }

}