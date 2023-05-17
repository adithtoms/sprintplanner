import { Component, Input } from '@angular/core';
import { Story } from '../story.model';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent {
  @Input() stories:Story[]=[]
  

  clearStories(){
    this.stories=[]
  }

  clearSelectedStories(){
    this.stories = this.stories.filter(s=> !s['selected'] )
  }

}
