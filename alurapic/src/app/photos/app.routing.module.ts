import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { NotFoundComponent } from '../errors/not-found/not-found.component';


const routes: Routes = [
    {path: 'user/:userName', component: PhotoListComponent},
    {path: 'photo/add', component: PhotoFormComponent},
    {path: "**", component: NotFoundComponent}
]

@NgModule ({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}