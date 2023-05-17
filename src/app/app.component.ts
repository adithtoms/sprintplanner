import { Component } from '@angular/core';
import { Story } from './story.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stories: Story[] = [];
  sprint: Story[] = [];
  targetSprintPoints: any;

  onStoryAdded(story: Story) {
    this.stories.push(story);
  }

  onAutoSelectClicked() {
  }

  onClearStoriesClicked() {
    this.stories = [];
  }

  onClearSelectedClicked() {
    this.sprint = [];
  }
}
