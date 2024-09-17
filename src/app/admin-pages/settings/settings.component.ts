import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isClicked:boolean=false;

  changeCode:number=1
  settingsForm:FormGroup=new FormGroup(
    {
      email:new FormControl('' || this.SettingsService.commonEmail ) ,
      address:new FormControl('' || this.SettingsService.commonAddress ),
      mobile:new FormControl('' || this.SettingsService.commonTel ),
      logo:new FormControl(''|| this.SettingsService.pageLogo ),
      map:new FormControl(''|| this.SettingsService.commonMap )

    }
  )



  constructor(private SettingsService:SettingsService) { }

  ngOnInit(): void {
    console.log(this.SettingsService.commonEmail)
    // this.createSettingsForm()
    console.log(this.isClicked)
 
  }




  changeEmail(){
    this.SettingsService.commonEmail=this.settingsForm.get('email').value 
    console.log(this.SettingsService.commonEmail)

  }

  changeAddress(){
    this.SettingsService.commonAddress=this.settingsForm.get('address').value 
  }
  changeMobileNo(){
    this.SettingsService.commonTel=this.settingsForm.get('mobile').value 
  }

  changeMap(){
    this.SettingsService.commonMap=this.settingsForm.get('map').value 
  }
  changeLogo(){
    this.SettingsService.pageLogo=this.settingsForm.get('logo').value 
  }

  ngOnDestroy(){
    // console.log(this.SettingsService.commonEmail)
    localStorage.removeItem('settings')
    this.SettingsService.changedSettings.push(this.settingsForm.value)
    this.SettingsService.storeSettings()

  }
  isBtnClicked(){
    this.isClicked=!this.isClicked

  }



}
