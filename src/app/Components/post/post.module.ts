import { NgModule } from "@angular/core";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostViewComponent } from "./post-view/post-view.component";
import { CommonModule } from "@angular/common";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import { PostRoutingModule } from "./post-routing.module";

@NgModule({
    declarations: [
        PostDetailsComponent,
        PostListComponent,
        PostViewComponent
    ],
    imports: [
        CommonModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCardModule,
        PostRoutingModule
    ],
    exports: [
        PostDetailsComponent,
        PostListComponent,
        PostViewComponent
    ]
})

export class PostModule{}