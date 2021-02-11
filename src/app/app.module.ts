import { TracksComponent } from "./../Components/tracks/tracks.component"; 
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ArtistComponent } from 'src/Components/Artist/artist.component';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "src/Components/home/home.component";

const appRoutes: Routes =[
{
  path: '', component: TracksComponent
},
{
  path: 'artists', component: ArtistComponent
}
];


@NgModule({
  declarations: [AppComponent, TracksComponent, ArtistComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, RouterModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
