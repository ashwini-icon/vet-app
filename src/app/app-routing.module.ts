import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalCalculatorComponent } from './Component/home/clinical-calculator/clinical-calculator.component';
import { FavoritesComponent } from './Component/home/favorites/favorites.component';
import { HomeComponent } from './Component/home/home.component';
import { NewsCommentaryComponent } from './Component/home/news-commentary/news-commentary.component';
import { PetHealthComponent } from './Component/home/pet-health/pet-health.component';
import { ResourcesComponent } from './Component/home/resources/resources.component';
import { VideosComponent } from './Component/home/videos/videos.component';
import { LoginComponent } from './Component/login/login.component';
import { VetContentComponent } from './Component/home/vet-content/vet-content.component';

const routes: Routes = [
  { path:'',redirectTo: 'home',pathMatch:'full' },
  { path:'login' , component:LoginComponent},
  { path:'home',component:HomeComponent},
  { path:'vet-content',component:VetContentComponent},
  { path:'videos',component:VideosComponent},
  { path:'clinical-calculator',component:ClinicalCalculatorComponent},
  { path:'resources',component:ResourcesComponent},
  { path:'news-commentary',component:NewsCommentaryComponent},
  { path:'pet-health',component:PetHealthComponent},
  { path:'favorites',component:FavoritesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
