import { Component, Input } from '@angular/core';
import { Repository } from '../_models';
import { RepositoryService } from '../_services';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repositories-cards.component.html',
  styleUrls: ['./repositories-cards.component.scss']
})
export class RepositoriesCardsComponent{
  emptyStart: string = "assets/icons/bookmark.svg";
  fullStart: string = "assets/icons/start-fill.svg";
  @Input() repositories: Repository[] | undefined | null;
  constructor(private repositoryService: RepositoryService) { }

  saveBookmark(item: Repository) {
    this.repositoryService.setBookmarksRepo(item);
  }
}
