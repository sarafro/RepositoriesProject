import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../_models';
import { RepositoryService } from '../_services';


@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.scss']
})
export class SearchRepositoryComponent {

  repositories$: Observable<Repository[] | undefined>;

  constructor(private repositoryService: RepositoryService) {
    this.repositories$ = this.repositoryService.getRepository();
  }

  searchRepo(event: any) {
    this.repositories$ = this.repositoryService.getRepositoriesByQuery(event.target.value);
  }
}
