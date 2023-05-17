import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryListComponent } from './story-list/story-list.component';
import { SprintDisplayComponent } from './sprint-display/sprint-display.component';
import { SprintFormComponent } from './sprint-form/sprint-form.component';
import { StoryFormComponent } from './story-form/story-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'story-list', pathMatch: 'full' },
  { path: 'story-list', component: StoryListComponent },
  { path: 'sprint-display', component: SprintDisplayComponent },
  {path:'add-story', component:StoryFormComponent},
  {path:'sprint-form', component:SprintFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
