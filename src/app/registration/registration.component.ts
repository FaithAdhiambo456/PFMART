import { HttpClient } from '@angular/common/http';
import { Component, Inject,} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(
    private http: HttpClient
  ) { }
  //http: HttpClient = Inject(HttpClient)


  
    OnFormSubmitted(form: NgForm){
      // this.http.post('https://pfmart-d8656-default-rtdb.firebaseio.com/users.json', form)
      // .subscribe((response) => {
      //   console.log(response);
      // });
  console.log(form.value);
  }
}
