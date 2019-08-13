import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';


@NgModule({
    declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent, FilterByDescriptionPipe],
    exports: [PhotoComponent],
    imports: [HttpClientModule, CommonModule]
})
export class PhotosModule {

}