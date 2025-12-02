import {InjectionToken} from '@angular/core';

export const STORAGE: InjectionToken<Storage> = new InjectionToken(
  'StorageInjectionToken',
  {
    providedIn: 'root',
    factory: () => sessionStorage
  }
);
