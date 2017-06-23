import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Image } from '../domain/entities';

@Injectable()
export class BingImageService {

  imageUrl: string;
  headers = new Headers({
    'Content-Type': 'application/json',
    //把你获得API key在这里替换掉下面的enter-your-api-key-here
    'Ocp-Apim-Subscription-Key': '103ee07bf85a413e8212d556b011bf13'
  });

  constructor(private http: Http) {
    const q = '北极+墙纸';
    const baseUrl: string = `https://api.cognitive.microsoft.com/bing/v5.0/images/search`;
    this.imageUrl = baseUrl + `?q=${q}&count=5&mkt=zh-CN&imageType=Photo&size=Large`;
  }

  getImageUrl(): Observable<Image[]>{
    return this.http.get(this.imageUrl, { headers: this.headers })
            .map(res => res.json().value as Image[])
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}