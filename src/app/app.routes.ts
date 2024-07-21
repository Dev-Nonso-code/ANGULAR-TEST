import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';



export const routes: Routes = [

    {path: "", pathMatch:"full", redirectTo:"app"},
    {path: "form", component:FormsComponent },
    {path: "dash", component:HomeComponent },
    {path: "nav", component:NavbarComponent },
    
];
