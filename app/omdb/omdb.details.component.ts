import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { IOmDbResult } from './omdb';
import {OmDbService} from './omdb.service';
import '/app/rxjs-operators';
@Component({
    templateUrl: '/app/omdb/omdb.details.component.html'
})
export class OmDbDetailsComponent implements OnInit {
    model: IOmDbResult;

    constructor(private _service:OmDbService,
                private route: ActivatedRoute,
                private location: Location){}

    ngOnInit(): void{
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this._service.getDetails(id)
                .then(data => {
                    this.model = data;
                    console.log(JSON.stringify(data));
                });
    });
    }
}