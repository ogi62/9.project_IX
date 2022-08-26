import { Injectable } from '@angular/core';
import { Subject, tap, map, switchMap, Observable, pluck } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface Article {
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsApiResponseInterface {
  totalResults: number;
  articles: Article[];
}

@Injectable({
  providedIn: 'root'
})
export class NewApiService {

  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = '8a118e2e149b42f0a9e1b2ca32308043';
  private country = 'it';

  private pagesInput: Subject<number>;
  pagesOutput: Observable<Article[]>;
  numberOfPages: Subject<number>;

  constructor(private http: HttpClient) { 
    this.numberOfPages = new Subject();

    this.pagesInput = new Subject();
    this.pagesOutput = this.pagesInput.pipe(
      map((page)=> {
        console.log(page)

        return  new HttpParams()
        .set('apiKey', this.apiKey)
        .set('country', this.country)
        .set('pageSize', String(this.pageSize))
        .set('page', String(page));

      }),
      switchMap((params)=> {
        console.log(params)

        return this.http.get<NewsApiResponseInterface>(this.url, { params });
      }),
      tap((response)=> {
        console.log(response)
        const totalPages = Math.ceil( response.totalResults / this.pageSize );
        this.numberOfPages.next(totalPages);
      }),
      pluck('articles')
    );
  }

  getPage(page: number) {
    this.pagesInput.next(page);
  }
}
