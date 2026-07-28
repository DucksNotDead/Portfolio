# portfolio

Персональный сайт-визитка на [dev.holuenko.ru](https://dev.holuenko.ru).

Одностраничный билингвальный (RU/EN) лендинг в техно-эстетике: моноширинные акценты, светлая/тёмная тема, флагманский кейс-стади (XOLOGIE, offline-first PWA поверх GraphQL) и виджет активности GitHub.

Полная концепция и мотивация решений: [CONCEPT.md](./CONCEPT.md).

## Стек

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/): дизайн-токены под свет/тёмную техно-тему
- [next-themes](https://github.com/pacocoursey/next-themes): переключение темы (`system` по умолчанию, сохраняется в `localStorage`)
- [Framer Motion](https://www.framer.com/motion/): микроанимации появления секций и аккордиона
- Лёгкий кастомный RU/EN i18n-контекст (без отдельного роутинга, сайт остаётся одностраничным)
- GitHub REST API с ISR-кэшированием (ревалидация раз в 6 часов) для виджета активности

## Структура контента

- `src/content/ru.ts`, `src/content/en.ts`: двуязычные словари текста по секциям
- `src/content/projects.ts`: карточки проектов (кроме флагманского кейса XOLOGIE, который зашит в словари как развёрнутый case-study)
- `src/components/sections/*`: секции лендинга

Новые pet-проекты добавляются записью в `src/content/projects.ts`, без изменения дизайна.

## Разработка

```bash
npm install
npm run dev
```

Сайт откроется на [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # прод-сборка
npm run lint    # ESLint
```

## Лицензия

[MIT](./LICENSE)
