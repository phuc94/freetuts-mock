import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './pages/ContentPost/add-post/add-post.component';
import { ListPostComponent } from './pages/ContentPost/list-post/list-post.component';
import { EditPostComponent } from './pages/ContentPost/edit-post/edit-post.component';
import { AddCategoryComponent } from './pages/Category/add-category/add-category.component';
import { EditCategoryComponent } from './pages/Category/edit-category/edit-category.component';
import { ListCategoryComponent } from './pages/Category/list-category/list-category.component';
import { TagComponent } from './pages/Category/tag/tag.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component : DashboardComponent},
  { path: 'addpost', component: AddPostComponent },
  { path: 'listpost', component: ListPostComponent},
  { path: 'editpost', component: EditPostComponent},
  { path: 'addcategory', component: AddCategoryComponent},
  { path: 'editcategory', component: EditCategoryComponent},
  { path: 'listcategory', component: ListCategoryComponent},
  { path: 'tag', component: TagComponent},
  {
    path: '',
    redirectTo: 'addpost',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
