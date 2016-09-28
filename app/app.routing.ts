import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmDbComponent }  from './omdb/omdb.component';
import { OmDbDetailsComponent }  from './omdb/omdb.details.component';

const appRoutes: Routes = [
  { path: '', component: OmDbComponent },
  {path: 'details/:id', component: OmDbDetailsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);