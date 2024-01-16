import { Injectable } from '@angular/core';
// import { ApiService } from 'src/app/providers/api.service';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usrDtls;
  private usrPfleDtls = new BehaviorSubject([]);
  currentUserData = this.usrPfleDtls.asObservable();

  constructor(private apisrvce: ApiService) {
    this.usrDtls = JSON.parse(localStorage.getItem('userdata') as any);
    this.getUsrPrfileDtls();
  }

  getUsrPrfileDtls = () => {
    const rte = `/getUsrPrfle/${this.usrDtls.usr_id}`;
    this.apisrvce.get(rte).subscribe((res: any) => {
      return this.usrPfleDtls.next(res[`data`]);
    });
  }
}
