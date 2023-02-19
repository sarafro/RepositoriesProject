import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../_models';
import { RepositoryService } from '../_services';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  BookmarksRepo$: Observable<Repository[]>;

  constructor(private repositoryService: RepositoryService) {
    this.BookmarksRepo$ = this.repositoryService.getBookmarksRepo()
  }

  ngOnInit(): void {
  }

}
