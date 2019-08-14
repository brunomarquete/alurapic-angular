import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo.model';


@Pipe({
    name: "filterByDescription"
})
export class FilterByDescriptionPipe implements PipeTransform {

    transform(photos: Photo[], descriptionQuery: string) {
        
        if (descriptionQuery) {

            descriptionQuery = descriptionQuery.trim().toLowerCase();

            return photos.filter(photo => photo.description.trim().toLowerCase().includes(descriptionQuery))

        } else {

            return photos;
        }

    }

}