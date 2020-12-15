import { TracksComponent } from "./../Components/tracks/tracks.component"; 
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { ArtistComponent } from 'src/Components/Artist/artist.component';

@NgModule({
  declarations: [AppComponent, TracksComponent, ArtistComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
