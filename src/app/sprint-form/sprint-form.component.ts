import { Component, EventEmitter, Output } from '@angular/core';
import { Story } from '../story.model';

@Component({
  selector: 'app-sprint-add',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.css']
})
export class SprintFormComponent {
  @Output() autoSelectClicked = new EventEmitter<void>();
  @Output() clearStoriesClicked = new EventEmitter<void>();
  @Output() clearSelectedClicked = new EventEmitter<void>();
  targetSprintPoints: any;
  stories: Story[] = [];
  selectedStories: Story[] = [];

  autoSelectStories() {
    this.selectedStories = this.stories.filter(story => story.points <= this.targetSprintPoints);
    this.autoSelectClicked.emit();
  }

  clearStories() {
    this.clearStoriesClicked.emit();
  }

  clearSelectedStories() {
    this.clearSelectedClicked.emit();
  }
}
