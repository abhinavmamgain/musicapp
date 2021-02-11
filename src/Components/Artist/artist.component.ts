import { Component } from "@angular/core";
import {ArtistService} from "./../../Services/ArtistService";
import {Artist, ArtistsInfo} from "./../../Models/ArtistsInfo";
import { from, Observable } from 'rxjs';

@Component({
  selector: "artist-root",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"],
})
export class ArtistComponent {

  artistService : ArtistService;
  artistInfo : ArtistsInfo;
 artistData : Artist[];
 showLoader=false;
  constructor (artistService: ArtistService)
  {
    this.artistService = artistService;
  }
  tableData: string[] = [];

  tableData2: string[] = [];

   ngOnInit() {

  
     this.artistService.getArtist().subscribe((data) =>
      {
        this.showLoader = true;
        this.artistData = data.artists.artist;
        console.log(data);
        this.showLoader = false;
      }
    );
    
    // this.tableData = await apidata;
    // this.tableData2 = await apidata2;
    // this.tableData = this.tableData.concat(this.tableData2);
  }

  

 
}
