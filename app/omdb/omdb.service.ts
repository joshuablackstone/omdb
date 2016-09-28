import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { OmDbSearchOptions, IOmDbResult, OmDbListResult } from './omdb';

@Injectable()
export class OmDbService {
    private rootUrl:string = "http://www.omdbapi.com";
    constructor (private http: Http) {}

    getSearch (search:OmDbSearchOptions): Observable<OmDbListResult> {
    return this.http.get(this.rootUrl + "/?s=" + search.search + "&page=" + search.page)
                  .map(this.extractData)
                  .catch(this.handleError);
}

 getDetails (id:string): Promise<IOmDbResult> {
    return this.http.get(this.rootUrl + "/?i=" + id)
                  .toPromise()
                  .then((res:Response) => res.json() as IOmDbResult)
                  .catch(this.handleError);
}

private extractData(res: Response) {
  let body = res.json();
  let searchData = body["Search"];
  return <OmDbListResult>{ Search: searchData, totalResults: body["totalResults"], Response: body["Response"] };
}

private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}

}
