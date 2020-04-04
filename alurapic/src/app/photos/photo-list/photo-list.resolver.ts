import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo.model';
import { PhotoService } from '../photo.service';

@Injectable({
   providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(private service: PhotoService) {

    }

    resolve(route : ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Photo[]> {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }
    

}