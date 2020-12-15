import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { TracksComponent } from "./tracks.component";
import { CommonModule } from "@angular/common";
import {ArtistService} from "./../../Services/ArtistService";


@NgModule({
  declarations: [TracksComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
  providers: [ArtistService],
  bootstrap: [TracksComponent],
})
export class TrackModule {

  
}
