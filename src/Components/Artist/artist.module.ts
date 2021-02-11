import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


import { CommonModule } from "@angular/common";
import {ArtistService} from "../../Services/ArtistService";
import { ArtistComponent } from './artist.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [ArtistComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
  providers: [ArtistService],
  bootstrap: [ArtistComponent],
})
export class ArtistModule {

  
}
