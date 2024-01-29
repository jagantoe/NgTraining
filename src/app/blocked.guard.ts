import { CanActivateFn } from '@angular/router';

export const blockedGuard: CanActivateFn = (route, state) => {
  var secret = window.prompt("What is the secret?");
  return secret == "cookies";
};
