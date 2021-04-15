import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../page/home/home.component';
import { TopicComponent } from '../page/topic/topic.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SubtopicComponent } from '../page/subtopic/subtopic.component';
import { ChildtopicComponent } from '../page/childtopic/childtopic.component';
import { PostlessionComponent } from '../page/postlession/postlession.component';
import { PipeModule } from '../Pipe/pipe.module';
import { PaginationComponent } from '../shared/pagination/pagination.component';



@NgModule({
  declarations: [
    HomeComponent,
    TopicComponent,
    SubtopicComponent,
    ChildtopicComponent,
    PostlessionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    PipeModule
  ],
  exports: [
    PipeModule,
  ]
})
export class LayoutModule { }
