import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {
  router = inject(Router)
  route = inject(ActivatedRoute);
  @Input() email!: string;

  login(password: string) {
    if (password == "secret") {
      this.router.navigate(["success"], { relativeTo: this.route });
    }
    else {
      this.router.navigate(["fail"], { relativeTo: this.route });
    }
  }
}
