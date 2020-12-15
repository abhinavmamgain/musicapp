import { Component } from "@angular/core";
import {ArtistService} from "./../../Services/ArtistService";
import {ArtistsInfo} from "./../../Models/ArtistsInfo";
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Button } from 'protractor';
import {Config} from "./../../../config";

@Component({
  selector: "tracks-root",
  templateUrl: "./tracks.component.html",
  styleUrls: ["./tracks.component.css"],
})
export class TracksComponent {

  artistService : ArtistService;
  artistInfo : ArtistsInfo;
  display:boolean;
buttontext: string='Show';
apikey: string=Config.SECRET_API_KEY;
user:string=Config.USER;
  constructor (artistService: ArtistService)
  {
    this.artistService = artistService;
    this.display = false;
  }
  tableData: string[] = [];

  tableData2: string[] = [];

  async ngOnInit() {

  
    let url =
      'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+this.user+'&api_key='+this.apikey+'&format=json&page=1';

    

    // // let [a, b] =  Promise.all([
    // //   fetch(url).then((value) => value.json()),
    // //   fetch(url2).then((value) => value.json()),
    // // ])
      
    //     //json response
      
    //   .catch((err) => {
    //     return err;
    //   });

   


    const fetchapi = fetch(url)
      .then((data) => data.json())
      .then((jsonData) => {
        return jsonData.recenttracks.track;
      });

      
    const apis = fetchapi.then((data) => {
      let itemData = data.map(getFullTable);
      return itemData;
    });

    this.tableData = await apis;
console.log(this.tableData);
    // const fetchapi2 = fetch(url2)
    //   .then((data) => data.json())
    //   .then((jsonData) => {
    //     return jsonData.recenttracks.track;
    //   });

    // const apidata = fetchapi.then((data) => {
    //   let itemData = data.map(getFullTable);
    //   return itemData;
    // });

    // const apidata2 = this.tableData.then((data) => {
    //   let itemData = data.map(getFullTable);
    //   return itemData;
    // });

    function getFullTable(item) {
      var fullTable = [
        item.name,
        item.artist["#text"],
        item.album["#text"],
        item.url,
        item.url,
      ];

      return fullTable;
    }

    this.artistInfo =   await this.artistService.getArtist();
    console.log(this.artistInfo.artists.artist.length);
    // this.tableData = await apidata;
    // this.tableData2 = await apidata2;
    // this.tableData = this.tableData.concat(this.tableData2);
  }

  dreamOn()
  {

    this.display=!this.display;
    // if(this.display)
    // this.buttontext = 'Hide'
    // else
    // this.buttontext = 'Show'
    if(this.display==true)
    this.buttontext = 'Hide';
    else
    this.buttontext = 'Show';
  }

  loadData() {
    // this.dataService.query({
    //   page: this.page - 1,
    //   size: this.itemsPerPage,
    // }).subscribe(
    //   (res: Response) => this.onSuccess(res.json(), res.headers),
    //   (res: Response) => this.onError(res.json())
    //   )
  }
}
