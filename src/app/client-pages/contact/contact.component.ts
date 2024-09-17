import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SettingsService } from 'src/app/admin-pages/settings/settings.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  commonMail:string=this.SettingsService.commonEmail
  commonAddress:string=this.SettingsService.commonAddress
  commonTel:number=this.SettingsService.commonTel
  commonmap:string=this.SettingsService.commonMap

  constructor(private SettingsService:SettingsService) { }

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });


  ngOnInit(): void {
    console.log(this.contactForm.value)
  }

}
