import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANG, I18N_LANGUAGES } from '../config/language-config';
import { AuthService } from './@core/services/auth.service';
import { ListDataService } from './@core/mock/list-data.service';
@Component({
  selector: 'da-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  currentLang = localStorage.getItem('lang') || window.navigator.language.toLowerCase() || DEFAULT_LANG;

  constructor(private translate: TranslateService , private authService:AuthService) {
    this.translate.addLangs(I18N_LANGUAGES);
    translate.setDefaultLang(DEFAULT_LANG);
    translate.use(this.currentLang);
  }
  ngOnInit(): void {
    
    this.authService.logout();
  }
}
