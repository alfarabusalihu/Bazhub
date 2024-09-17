import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/admin-pages/settings/settings.service';
import { Settings } from 'src/app/admin-pages/shared/interfaces/settings.interfce';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  settings:Settings[]
  commonMail:string=''
  commonAddress:string=''
  commonTel:number=0


  constructor(private SettingsService:SettingsService) { }

  ngOnInit(): void {
    this.settings=this.SettingsService.getSettingsFromStore()
    this.getSettings()
  }

  getSettings(){
    this.settings.map((item:Settings)=>{this.commonMail=item.email}),
    this.settings.map((item:Settings)=>{this.commonAddress=item.address}),
    this.settings.map((item:Settings)=>{this.commonTel=item.mobile})
   //  this.settings.map((item:Settings)=>{this.=item.email}
   //  this.settings.map((item:Settings)=>{this.commonMail=item.email}
     // item.name
 

 }

}
