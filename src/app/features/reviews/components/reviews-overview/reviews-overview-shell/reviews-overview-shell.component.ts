import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { ReviewFacade } from 'src/app/features/reviews/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-reviews-overview-shell',
  templateUrl: './reviews-overview-shell.component.html',
  styleUrls: ['./reviews-overview-shell.component.scss']
})
export class ReviewsOverviewShellComponent implements OnInit {

  title: string = 'Overzicht reviews';

  authenticatedUser$: Observable<IUser>;
  isLoading$: Observable<boolean>;
  articles$: Observable<IArticle[]>;

  constructor(
    private reviewFacade: ReviewFacade,
    private authFacade: AuthFacade,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authenticatedUser$ = this.authFacade.getCurrentUser();
    this.isLoading$ = this.reviewFacade.getOverviewIsLoading();
    this.articles$ = this.reviewFacade.getAll();
  }

  edit(id: number): void {
    this.router.navigate([`/app/reviews/${id}/review`])
  }

  remove(id: number): void {
    this.reviewFacade.remove(id);
  }

}
