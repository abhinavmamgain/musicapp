import { Component } from "@angular/core";
import {ArtistService} from "./../../Services/ArtistService";
import {Artist, ArtistsInfo} from "./../../Models/ArtistsInfo";


@Component({
  selector: "artist-root",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"],
})
export class ArtistComponent {

  artistService : ArtistService;
  artistInfo : ArtistsInfo;
 artistData : Artist[];
  constructor (artistService: ArtistService)
  {
    this.artistService = artistService;
  }
  tableData: string[] = [];

  tableData2: string[] = [];

  async ngOnInit() {

  
    this.artistInfo =   await this.artistService.getArtist();
    console.log(this.artistInfo.artists.artist);
    this.artistData = this.artistInfo.artists.artist;
    // this.tableData = await apidata;
    // this.tableData2 = await apidata2;
    // this.tableData = this.tableData.concat(this.tableData2);
  }

  

 
}
