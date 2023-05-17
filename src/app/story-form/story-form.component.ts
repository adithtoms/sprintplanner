import { Component, EventEmitter,Output } from '@angular/core';
import { Story } from '../story.model';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})

export class StoryFormComponent {
  @Output() storyAdded= new EventEmitter<Story>()
  story:Story={title:'', points:0};
  stories:Story[]=[]

  addStory(){
    if(!this.isStoryDuplicate(this.story)){
      this.stories.push(this.story);
      this.storyAdded.emit(this.story)
      this.story={title:'',points:0}
    }
  }

  isStoryDuplicate(story:Story):boolean{
    return this.stories.some(s=>s.title===story.title)
  }

}
