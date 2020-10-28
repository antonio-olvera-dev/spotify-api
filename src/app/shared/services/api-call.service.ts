import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private https: HttpClient) { }

  getData(url: string) {

    return this.https.get(url);
  }


  getDataSpotify(url){
    const headers = new HttpHeaders({
      Authorization: 'Authorization: Bearer BQCe9jSI3cXGrpPY2bUvp-0un0Rq-4AqvsPa-ZIN-8WLMBMDQJv1_b67qRYSS3eU_fIBWgqpZuiIwyzgaIcE4pbQcKZtYLwj84Tjf1J2jj12FCbljvvqr1gZZgdoZu39OW4NBS8QuRZaTEClbFU_OwAn-DceSgEPHcRbBKYsqvm12EqV_rYONHMSgvQJX-LhGDzI6CA_uLT3BFlkd5yG7tXhnI8vQDoIoYfxNQ6EQbF7-b5-4bc2o5vh_HeuK5RbCUwKarludaKVAxS6EWS5vkTnljimhgYrLGI'
    });
    return this.https.get(url, { headers });
  }

}
