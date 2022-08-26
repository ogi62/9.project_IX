import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsApiListComponent } from './components/news-api-list/news-api-list.component';
import { TrimOutletNamePipe } from './pipes/trim-outlet-name.pipe';



@NgModule({
  declarations: [
    NewsApiListComponent,
    TrimOutletNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ NewsApiListComponent ]
})
export class NewsApiModule { }
