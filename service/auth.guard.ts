import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
  // debugger;
  const router = inject(Router);
  const isLoggedIn = !!localStorage.getItem("token");
  if (!isLoggedIn) {
    router.navigateByUrl("login");
    return false;
  }
  return true;
};
