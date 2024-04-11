import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PservicesService } from '../Pfmart Services/pservices.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent{
  http: HttpClient = Inject(HttpClient)
  userService: PservicesService = inject(PservicesService);


  
  
    OnFormSubmitted(form: NgForm){
      this.http.post('https://pfmart-d8656-default-rtdb.firebaseio.com/users.json', form)
      .subscribe((response) => {
        console.log(response);
      });
  console.log(form.value);
  }
  
  private fetchAllUsers(){
    this.http.get('https://pfmart-d8656-default-rtdb.firebaseio.com/users.json')
    .subscribe((response) => {
      console.log(response);

    })
  }


}
