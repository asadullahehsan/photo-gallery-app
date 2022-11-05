import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FeedbackAndChatComponent } from './feedback-and-chat/feedback-and-chat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FeedbackAndChatComponent],
})
export class AppComponent {
  title = 'photo-gallery-app';
}
