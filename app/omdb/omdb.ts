interface IOmDbSearchOptions{
    search: string;
    page: number;
}

export interface IOmDbResult{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Rated?: string;
    Released?: Date;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Metascore?: string;
    imdbRating?: string;
    imdbVotes?: string;
    Response: string;
}

interface IOmDbListResult{
    Search: IOmDbResult[];
    totalResults: number;
    Response: string;
}

export class OmDbListResult implements IOmDbListResult{
    public Search: IOmDbResult[];
    public totalResults: number;
    public Response: string;
}

export class OmDbSearchOptions implements IOmDbSearchOptions{
    public page: number;
    constructor(public search: string){
        this.page = 1;
    }
}