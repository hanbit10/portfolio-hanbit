import { Injectable, OnInit } from '@angular/core';
import { texts } from '../constants/text';
@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  public currentLanguage: string = 'en';
  public loadedLanguage: string = this.loadCurrentLanguage();
  private translations: any = texts;
  constructor() {
    this.currentLanguage = this.loadedLanguage;
    document.addEventListener('click', (e) => {
      if (this.loadedLanguage != this.currentLanguage) {
        this.saveCurrentLanguage();
      }
    });
  }

  getTranslation(key: string): string {
    const keys = key.split('.');
    let translation = this.translations[this.currentLanguage];
    for (const k of keys) {
      if (translation[k]) {
        translation = translation[k];
      } else {
        return key;
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

  saveCurrentLanguage() {
    localStorage.setItem('language', this.currentLanguage);
  }

  loadCurrentLanguage(): string {
    let language = localStorage.getItem('language');
    if (language) {
      return language;
    } else {
      return 'en';
    }
  }
}
