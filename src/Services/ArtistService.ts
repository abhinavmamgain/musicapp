import { Injectable } from '@angular/core';
import { Convert, ArtistsInfo } from "./../Models/ArtistsInfo";

@Injectable(
    {
    providedIn: 'root'
    }
)
export class ArtistService
{
    allArtist: string;
    artists :ArtistsInfo;


    async getArtist() : Promise<ArtistsInfo>
  {
      let url = 'http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=c18406b6eae9831de6ba5b6a102aad4b&user=abhistar8763&format=json';
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





