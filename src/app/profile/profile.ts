import { Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userName: string | null = '';

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscribe = this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.userName = paramMap.get('userName');
    });
    this.destroyRef.onDestroy(() => subscribe.unsubscribe());
  }
}
