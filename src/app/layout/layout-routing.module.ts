import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../page/home/home.component';
import { SubtopicComponent } from '../page/subtopic/subtopic.component';
import { TopicComponent } from '../page/topic/topic.component';
import { ChildtopicComponent } from '../page/childtopic/childtopic.component';
import { PostlessionComponent } from '../page/postlession/postlession.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'topic',
    children:[{
      path: ":name",
      component: TopicComponent
    }]
  },
  {
    path: 'subtopic',
    children:[{
      path: ':name',
      component: SubtopicComponent
    }]
  },
  {
    path: 'childtopic',
    children:[{
      path: ':name',
      component: ChildtopicComponent
    }]
  },
  {
    path: 'post',
    children:[{
      path: ':name',
      component: PostlessionComponent
    }]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
