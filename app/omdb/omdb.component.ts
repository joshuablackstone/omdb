import { Component, OnInit } from '@angular/core';
import {OmDbService} from './omdb.service';
import { OmDbSearchOptions, IOmDbResult } from './omdb';
import '/app/rxjs-operators';
@Component({
    templateUrl: '/app/omdb/omdb.component.html'
})
export class OmDbComponent implements OnInit {
    search:string = "Batman";
    page:number = 1;
    values:IOmDbResult[];
    totalResults: number = 0;
    pageSize: number = 10;

    constructor(private _service:OmDbService){}

    ngOnInit(): void{
        this.searchForm();
    }

    searchForm(): void{
        var search = new OmDbSearchOptions(this.search);
        this._searchForm(search);
    }

     pagePrev(): void{
         if (this.page > 1){
            this.page--;
            var search = <OmDbSearchOptions>{ search: this.search, page: this.page};
            this._searchForm(search);
         }
    }

    pageNext(): void{
        if (this.values.length >= 10 && this.totalPages() > this.page){
            this.page++;
            var search = <OmDbSearchOptions>{ search: this.search, page: this.page};
            this._searchForm(search);
        }
    }

    private totalPages(): number{
        if (this.totalResults == 0) return 0;
        return this.totalResults / this.pageSize;
    } 

    private _searchForm(search:OmDbSearchOptions): void{
         this._service.getSearch(search)
        .subscribe(values => {
            this.values = values.Search; 
            this.totalResults = values.totalResults; },
            error =>  console.log(error));
    }
 }
