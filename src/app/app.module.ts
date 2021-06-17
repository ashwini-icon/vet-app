import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VetContentComponent } from './Component/home/vet-content/vet-content.component';
import { VideosComponent } from './Component/home/videos/videos.component';
import { ClinicalCalculatorComponent } from './Component/home/clinical-calculator/clinical-calculator.component';
import { ResourcesComponent } from './Component/home/resources/resources.component';
import { NewsCommentaryComponent } from './Component/home/news-commentary/news-commentary.component';
import { PetHealthComponent } from './Component/home/pet-health/pet-health.component';
import { FavoritesComponent } from './Component/home/favorites/favorites.component';
import { VetcontentService } from './services/vetcontent.service';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VetContentComponent,
    VideosComponent,
    ClinicalCalculatorComponent,
    ResourcesComponent,
    NewsCommentaryComponent,
    PetHealthComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  
    AppRoutingModule, BrowserAnimationsModule,
    AngularEditorModule
    
  ],
  providers: [VetcontentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
