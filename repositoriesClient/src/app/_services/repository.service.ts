import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { concatMap, map, tap } from 'rxjs/operators';
import { Repository } from '../_models';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private repositories$ = new BehaviorSubject<Repository[]>([]);
  private repositoriesBookmarks$: BehaviorSubject<Repository[]>;
  private repositoriesBookmarks: Repository[];

  constructor(protected http: HttpClient) {
    this.repositoriesBookmarks$ = new BehaviorSubject<Repository[]>(JSON.parse(localStorage.getItem('bookmarks-repo')!) ?? []);
    this.repositoriesBookmarks = JSON.parse(localStorage.getItem('bookmarks-repo')!) ?? [];
  }

  getRepositoriesByQuery(query: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${environment.apiUrl}/search/repositories?query=${query}`).pipe(
      concatMap((res) => {
        //Bookmark repository if exists in local storage
        res.forEach(res => {
          this.repositoriesBookmarks.find(r => r.id === res.id) ? res.isBookmark = true : res.isBookmark = false
        })

        this.repositories$.next(res);
        return this.repositories$.asObservable()
      })
    );
  }

  getRepository(): Observable<Repository[]> {
    return this.repositories$.asObservable()
  }

  setBookmarksRepo(item: Repository) {
    // remove repository
    if (!item.isBookmark)
      this.repositoriesBookmarks = this.repositoriesBookmarks.filter(repo => repo.id !== item.id)
    //add repository
    else
      this.repositoriesBookmarks.push(item);

    this.repositoriesBookmarks$.next(this.repositoriesBookmarks);
    localStorage.setItem('bookmarks-repo', JSON.stringify(this.repositoriesBookmarks$.value))


  }

  getBookmarksRepo(): Observable<Repository[]> {
    return this.repositoriesBookmarks$.asObservable();
  }
}


