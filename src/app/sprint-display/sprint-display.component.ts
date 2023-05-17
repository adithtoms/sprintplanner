import { Component, Input } from '@angular/core';
import { Story } from '../story.model';

@Component({
  selector: 'app-sprint-display',
  templateUrl: './sprint-display.component.html',
  styleUrls: ['./sprint-display.component.css']
})
export class SprintDisplayComponent {
  @Input() sprint:Story[]=[]

  selectedStories: any;

 generateSprint(){
  this.sprint = this.selectedStories.slice();
 }
}
