import { ModuleWithProviders,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditPostComponent } from './pages/ContentPost/edit-post/edit-post.component';
import { AddPostComponent } from './pages/ContentPost/add-post/add-post.component';
import { AddCategoryComponent } from './pages/Category/add-category/add-category.component';
import { EditCategoryComponent } from './pages/Category/edit-category/edit-category.component';
import { ListPostComponent } from './pages/ContentPost/list-post/list-post.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { ListCategoryComponent } from './pages/Category/list-category/list-category.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatDialogComponent } from './pages/Category/list-category/mat-dialog/mat-dialog.component';
import { LoginComponent } from './user/login/login.component';
import { TagComponent } from './pages/Category/tag/tag.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddPostComponent, 
    EditPostComponent, 
    AddCategoryComponent, 
    EditCategoryComponent, 
    ListPostComponent,
    PaginationComponent,
    ListCategoryComponent,
    MatDialogComponent,
    LoginComponent,
    TagComponent,

    
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ReactiveFormsModule,
    EditorModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents:[MatDialogComponent]
})
export class AdminLayoutModule { }
