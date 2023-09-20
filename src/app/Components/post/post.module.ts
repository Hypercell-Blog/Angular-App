import { NgModule } from "@angular/core";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostViewComponent } from "./post-view/post-view.component";
import { CommonModule } from "@angular/common";
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatCardModule} from '@angular/material/card';
import { PostRoutingModule } from "./post-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { PostCardComponent } from './post-card/post-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PostDetailsComponent,
        PostListComponent,
        PostViewComponent,
        PostCardComponent
    ],
    imports: [
        CommonModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCardModule,
        PostRoutingModule,
        MatIconModule,
      MatTooltipModule,
      MatInputModule,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
        PostDetailsComponent,
        PostListComponent,
        PostViewComponent
    ]
})

export class PostModule{}
