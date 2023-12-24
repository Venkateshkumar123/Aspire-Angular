
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { ActiongamesComponent } from './actiongames/actiongames.component';
import { OpenworldgamesComponent } from './openworldgames/openworldgames.component';
import { HorrorgamesComponent } from './horrorgames/horrorgames.component';
import { SimulationgamesComponent } from './simulationgames/simulationgames.component';
import { RacinggamesComponent } from './racinggames/racinggames.component';
import { AboutComponent } from './about/about.component';
import { GtavComponent } from './categories/gtav/gtav.component';
import { GgComponent } from './categories/gg/gg.component';
import { Gta4Component } from './categories/gta4/gta4.component';
import { CyberpunkComponent } from './categories/cyberpunk/cyberpunk.component';
import { CodComponent } from './categories/cod/cod.component';
import { Bussimulator21Component } from './categories/bussimulator21/bussimulator21.component';
import { ConstructionsimComponent } from './categories2/constructionsim/constructionsim.component';
import { FlightsimComponent } from './categories2/flightsim/flightsim.component';
import { ShipsimComponent } from './categories2/shipsim/shipsim.component';
import { RoadsimComponent } from './categories2/roadsim/roadsim.component';
import { TrainsimComponent } from './categories2/trainsim/trainsim.component';
import { GodofwarComponent } from './categories2/godofwar/godofwar.component';
// import { GuaroiansgalaxyComponent } from './categories/guaroiansgalaxy/guaroiansgalaxy.component';
// import { GpayComponent } from './gpay/gpay.component';
// import { GooglePayButtonModule } from '@google-pay/button-angular';
import { PlaguetaleComponent } from './categories3/plaguetale/plaguetale.component';
import { PlaguetalerequiemComponent } from './categories3/plaguetalerequiem/plaguetalerequiem.component';
import { Beyond2soulsComponent } from './categories3/beyond2souls/beyond2souls.component';
import { GalaxyguardiansComponent } from './categories3/galaxyguardians/galaxyguardians.component';
import { SekiroComponent } from './categories3/sekiro/sekiro.component';
import { NfsComponent} from './categories3/nfs/nfs.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { SuccessfultransactionComponent } from './successfultransaction/successfultransaction.component';
import { CrimebosscityComponent } from './trendinggames/crimebosscity/crimebosscity.component';
import { TchieaComponent } from './trendinggames/tchiea/tchiea.component';
import { LastofusComponent } from './trendinggames/lastofus/lastofus.component';
import { Deadisland2Component } from './trendinggames/deadisland2/deadisland2.component';
import { SaintrowComponent } from './trendinggames/saintrow/saintrow.component';
import { FortniteComponent } from './trendinggames/fortnite/fortnite.component';
import { GtavimagesComponent } from './imageslink/gtavimages/gtavimages.component';
import { UpdateComponent } from './update/update.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { FooterComponent } from './footerpage/footer/footer.component';

















const routes:Routes = [
  {path:'',component:HomeComponent },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'actiongames',component:ActiongamesComponent},
  {path:'openworldgames',component:OpenworldgamesComponent},
  {path:'horrorgames',component:HorrorgamesComponent},
  {path:'simulationgames',component:SimulationgamesComponent},
  {path:'racinggames',component:RacinggamesComponent},
  {path:'about',component:AboutComponent},
  {path:'gtav',component:GtavComponent},
  {path:'gg',component:GgComponent},
  {path:'gta4',component:Gta4Component},
  {path:'cyberpunk',component:CyberpunkComponent},
  {path:'cod',component:CodComponent},
  {path:'bussimulator21',component:Bussimulator21Component},
  {path:'constructionsim',component:ConstructionsimComponent},
  {path:'flightsim',component:FlightsimComponent},
  {path:'shipsim',component:ShipsimComponent},
  {path:'roadsim',component:RoadsimComponent},
  {path:'trainsim',component:TrainsimComponent},
  {path:'godofwar',component:GodofwarComponent},
  // {path:'gpay',component:GpayComponent},
  {path:'plaguetale',component:PlaguetaleComponent},
  {path:'plaguetalerequiem',component:PlaguetalerequiemComponent},
  {path:'beyond2souls',component:Beyond2soulsComponent},
  {path:'galaxyguardians',component:GalaxyguardiansComponent},
  {path:'sekiro',component:SekiroComponent},
  {path:'nfs',component:NfsComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'paymentpage',component:PaymentpageComponent},
  {path:'successfultransaction',component:SuccessfultransactionComponent},
  {path:'crimebosscity',component:CrimebosscityComponent},
  {path:'tchiea',component:TchieaComponent},
  {path:'lastofus',component:LastofusComponent},
  {path:'deadisland2',component:Deadisland2Component},
  {path:'saintrow',component:SaintrowComponent},
  {path:'fortnite',component:FortniteComponent},
  {path:'gtavimages',component:GtavimagesComponent},
  {path:'paymentpage',component:PaymentpageComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'addtocart',component:AddtocartComponent},
  {path:'footer',component:FooterComponent},











]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
      ActiongamesComponent,
      OpenworldgamesComponent,
      HorrorgamesComponent,
      SimulationgamesComponent,
      RacinggamesComponent,
      AboutComponent,
      GgComponent,
      Gta4Component,
      CyberpunkComponent,
      CodComponent,
      Bussimulator21Component,
      ConstructionsimComponent,
      FlightsimComponent,
      ShipsimComponent,
      RoadsimComponent,
      TrainsimComponent,
      GodofwarComponent,
      PlaguetaleComponent,
      PlaguetalerequiemComponent,
      Beyond2soulsComponent,
      GalaxyguardiansComponent,
      SekiroComponent,
      NfsComponent,
      AdmindashboardComponent,
     PaymentpageComponent,
      SuccessfultransactionComponent,
      CrimebosscityComponent,
      TchieaComponent,
      LastofusComponent,
      Deadisland2Component,
      SaintrowComponent,
      FortniteComponent,
      GtavimagesComponent,
      PaymentpageComponent,
      UpdateComponent,
      AddtocartComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
