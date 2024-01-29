import { Routes } from '@angular/router';
import { blockedGuard } from './blocked.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FailureComponent } from './password/failure/failure.component';
import { PasswordComponent } from './password/password.component';
import { SuccessComponent } from './password/success/success.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {
        path: "welcome",
        component: WelcomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "password/:email",
        component: PasswordComponent,
        children: [
            {
                path: "success",
                component: SuccessComponent
            },
            {
                path: "fail",
                component: FailureComponent
            }
        ]
    },
    {
        path: "result",
        canActivate: [blockedGuard],
        loadComponent: () => import('./result/result.component').then(m => m.ResultComponent)
    },
    {
        path: "redirect",
        redirectTo: "login"
    },
    {
        path: "", //empty
        component: WelcomeComponent
    },
    {
        path: "**", //wild card
        component: NotfoundComponent
    }
];
