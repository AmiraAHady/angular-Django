import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token')){
    return true
  }
  alert('not authed User')
  return false;
};
