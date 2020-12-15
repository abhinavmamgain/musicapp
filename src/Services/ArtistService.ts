import { Injectable } from '@angular/core';
import { Convert, ArtistsInfo } from "./../Models/ArtistsInfo";
import {Config} from "./../../config";

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

    constructor()
    {

      this.apikey = Config.SECRET_API_KEY;
    }

    async getArtist() : Promise<ArtistsInfo>
  {
    
      let url = 'http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key='+this.apikey+'&user=abhistar8763&format=json';
    const fetchapi = fetch(url)
      .then((data) => data.json())
      
      let allArtists = await fetchapi;
     this.artists = Convert.toArtistsInfo(allArtists);
     

     var a = new Set();
     a.add(1);
     a.add(2);
     a.add(3);
     

     a.forEach(logSetElements)

     function logSetElements(value1, value2, set) {
      console.log('s[' + value1 + '] = ' + value2);
  }
     
return this.artists;
  }
}





