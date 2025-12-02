import {inject, Injectable} from '@angular/core';
import {STORAGE} from '../injection-tokens/storage.injection-token';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly storage: Storage = inject(STORAGE);

  store(key: string, value: any): void {
    switch (typeof value) {
      case "object":
        value = JSON.stringify(value);
        break;
    }

    this.storage.setItem(key, value);
  }

  getObjectStore<MODEL = any>(key: string): MODEL | null {
    const stringifyObject = this.storage.getItem(key);

    if (stringifyObject) {
      return JSON.parse(stringifyObject) as MODEL;
    }

    return null;
  }

  getFromStore(key: string): string | null {
    return this.storage.getItem(key);
  }

  clearStore(key?: string): void {
    if (key) {
      this.storage.removeItem(key);
    } else {
      this.storage.clear();
    }
  }
}
