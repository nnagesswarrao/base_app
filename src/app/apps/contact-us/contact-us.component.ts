import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  addressData:any = 
    {
      village: 'Srungavaram', 
    
      mandal: 'Rowthulapudi mandal', 
    
      district: 'kakinada',
    
      pincode: '533446',
      Email: 'jesu@jesus.com',
      Phone:'+919515302024'
    }
  

}


// {
//   name: 'jesu@jesus.com', icon: 'email', id: '5', code: 'cnt'
// },
// {
//   name: '+919515302024', icon: 'phone', id: '6', code: 'cnt'
// }