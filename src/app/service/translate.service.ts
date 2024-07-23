import { Injectable } from '@angular/core';
import { texts } from '../constants/text';
@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private currentLanguage = 'en';
  private translations: any = texts;
  constructor() {}

  getTranslation(key: string): string {
    const keys = key.split('.');
    let translation = this.translations[this.currentLanguage];

    for (const k of keys) {
      if (translation[k]) {
        translation = translation[k];
      } else {
        return key; // Return the key if translation not found
      }
    }

    return translation;
  }

  setLanguage(language: string) {
    this.currentLanguage = language;
  }

  getLanguage(): string {
    return this.currentLanguage;
  }
}
