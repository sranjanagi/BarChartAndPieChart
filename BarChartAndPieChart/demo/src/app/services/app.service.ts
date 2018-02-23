import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppServices{


    private _url= '../assets/file.json';
    private _url1= '../assets/pie.json';
  constructor(private _http: Http) {}
  getBar () {
    return this._http.get(this._url)
      .map((response: Response) => response.json());
  }

getPie(){

return this._http.get(this._url1).map((response: Response) => response.json());

}

}