import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsApiListComponent } from './components/news-api-list/news-api-list.component';
import { TrimOutletNamePipe } from './pipes/trim-outlet-name.pipe';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    NewsApiListComponent,
    TrimOutletNamePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ NewsApiListComponent ]
})
export class NewsApiModule { }
