import { Component, OnDestroy, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    @Output() emissor = new EventEmitter<string>()

    @Input() filter : string

    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300))    
            .subscribe(filter => {
                this.emissor.emit(filter)
            })
        }
    
    ngOnDestroy(): void {
       this.debounce.unsubscribe();
    }

}