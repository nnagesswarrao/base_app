import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ApiService {

  USER_PERMISSIONS = { slct_in: 0, insrt_in: 0, updt_in: 0, dlte_in: 0, exprt_in: 0 };

  constructor(private http: HttpClient) { }

  // ----------------------------------
  create = (postdata:any, rte:any) => {
    return this.http.post(`/${rte}`, { data: postdata });
  }
  post = (postdata:any, rte:any)  => {
    return this.http.post(`/${rte}`, postdata);
  }
  get = (rte:any)  => {
    return this.http.get(`/${rte}`);
  }

  update = (postdata:any, rte:any) => {
    return this.http.put(`/${rte}`, { data: postdata });
  }

  put = (postdata:any, rte:any)  => {
    return this.http.put(`/${rte}`, { data: postdata });
  }

  delete = (rte:any)  => {
    return this.http.delete(`/${rte}`);
  }

}
