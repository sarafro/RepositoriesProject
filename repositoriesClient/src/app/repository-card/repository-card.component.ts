import { Component, Input } from '@angular/core';
import { Repository } from '../_models';
import { RepositoryService } from '../_services';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})

export class RepositoryCardComponent {
  emptyStart: string = "assets/icons/bookmark.svg";
  fullStart: string = "assets/icons/start-fill.svg";
  @Input() repositories: Repository[] | undefined | null;
  constructor(private repositoryService: RepositoryService) { }

  saveBookmark(item: Repository) {
    item.isBookmark = !item.isBookmark;
    this.repositoryService.setBookmarksRepo(item);
  }
}
