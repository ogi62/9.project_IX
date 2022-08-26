import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsApiListComponent } from './components/news-api-list/news-api-list.component';



@NgModule({
  declarations: [
    NewsApiListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ NewsApiListComponent ]
})
export class NewsApiModule { }
