import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class PservicesService {
  http: HttpClient = Inject(HttpClient)
  
  constructor() { }
// OnFormSubmitted(users: User){
//   this.http.post('https://pfmart-d8656-default-rtdb.firebaseio.com/users.json', users)
//       .subscribe((response) => {
//         console.log(response);
//       });
//   // console.log(form.value);
// }

}
