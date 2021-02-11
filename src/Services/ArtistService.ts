import { Injectable } from '@angular/core';
import { Convert, ArtistsInfo } from "./../Models/ArtistsInfo";
import {Config} from "./../../config";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable(
    {
    providedIn: 'root'
    }
)
export class ArtistService
{
    allArtist: string;
    artists :ArtistsInfo;
    apikey: string;
user:string;
    constructor(private readonly httpClient: HttpClient)
    {

      this.apikey = Config.SECRET_API_KEY;
      this.user = Config.USER;
    }

    getArtist() : Observable<any>
  {
  
      let URL = '//ws.audioscrobbler.com/2.0/?method=library.getartists&api_key='+this.apikey+'&user='+this.user+'&format=json';
      return this.httpClient.get<any>(URL);
    
  }
     

     

  
}





