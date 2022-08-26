import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, NewApiService } from '../../services/new-api.service';

@Component({
  selector: 'app-news-api-list',
  templateUrl: './news-api-list.component.html',
  styleUrls: ['./news-api-list.component.css']
})
export class NewsApiListComponent implements OnInit {

  articles: Article[];
  numOfPages: number;

  constructor(private newApiService: NewApiService) { 
    this.newApiService.pagesOutput.subscribe((articles)=> {
      console.log(articles)
      this.articles = articles
    })
      this.newApiService.numberOfPages.subscribe((val)=> {
        this.numOfPages = val;
        console.log('ajde', this.numOfPages)
      });
  

    this.newApiService.getPage(1);
  }

  ngOnInit(): void {
  }

}
