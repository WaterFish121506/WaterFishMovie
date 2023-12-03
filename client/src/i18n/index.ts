import { createI18n } from 'vue-i18n'

const enum Language {
  CN = 'CN',
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: Language.CN,
})
