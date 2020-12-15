import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


import { CommonModule } from "@angular/common";
import {ArtistService} from "../../Services/ArtistService";
import { ArtistComponent } from './artist.component';


@NgModule({
  declarations: [ArtistComponent],
  imports: [CommonModule, FormsModule],
  providers: [ArtistService],
  bootstrap: [ArtistComponent],
})
export class ArtistModule {

  
}
