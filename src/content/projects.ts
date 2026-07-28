import type { ProjectCard } from "./types";

export const projects: ProjectCard[] = [
  {
    id: "egis-otb",
    title: {
      ru: "ЕГИС ОТБ",
      en: "EGIS OTB",
    },
    period: {
      ru: "2025 – 2026",
      en: "2025 – 2026",
    },
    description: {
      ru: "Единая государственная информационная система обеспечения транспортной безопасности. Участвовал в архитектуре и найме на старте, затем реализовал ключевые модули.",
      en: "A federal information system for transport security. Took part in early architecture decisions and hiring, then built out key modules.",
    },
    bullets: [
      {
        ru: "24 функциональных модуля для 4 транспортных сегментов с переиспользованием логики",
        en: "24 feature modules across 4 transport segments with shared logic reuse",
      },
      {
        ru: "AI-инструменты ускорили разработку типового сегмента примерно в 4 раза",
        en: "AI tooling sped up delivery of a typical segment roughly 4x",
      },
      {
        ru: "За месяц пересобрали ~80% готового портала под новые требования, сдано в срок",
        en: "Rebuilt ~80% of a finished portal in a month for new requirements, delivered on time",
      },
    ],
    stack: ["React", "Redux", "i18n"],
    badge: { ru: "ФГУП «ЗащитаИнфоТранс»", en: "State enterprise" },
  },
  {
    id: "gis-epd",
    title: {
      ru: "ГИС ЭПД",
      en: "GIS EPD",
    },
    period: {
      ru: "2025",
      en: "2025",
    },
    description: {
      ru: "Государственная информационная система электронных перевозочных документов: фуллстек-разработка для системы с 1000+ участниками рынка грузоперевозок.",
      en: "A government system for electronic freight documents: fullstack work on a platform serving 1000+ market participants.",
    },
    bullets: [
      {
        ru: "Покрытие unit-тестами 8 микросервисов доведено до 85%+",
        en: "Raised unit test coverage of 8 microservices to 85%+",
      },
      {
        ru: "Вынес общую логику сервисов в переиспользуемую библиотеку",
        en: "Extracted shared service logic into a reusable library",
      },
      {
        ru: "Расширил ролевую модель на клеймах (~12 ролей) под новый функционал",
        en: "Extended the claims-based role model (~12 roles) for new features",
      },
    ],
    stack: ["Angular", "ng-zorro", ".NET ASP", "PostgreSQL"],
    badge: { ru: "ФГУП «ЗащитаИнфоТранс»", en: "State enterprise" },
  },
  {
    id: "propusk-system",
    title: {
      ru: "АС «Интегрированная система пропуска»",
      en: "Integrated Access System",
    },
    period: {
      ru: "2024 – 2025",
      en: "2024 – 2025",
    },
    description: {
      ru: "Автоматизированная система пропускного режима с реактивным real-time стеком и хаотичной на старте кодовой базой.",
      en: "An access-control automation system with a reactive real-time stack and a chaotic codebase at the start.",
    },
    bullets: [
      {
        ru: "Поднял тестовое покрытие с 5% до 73% (по 12 ключевым модулям: с 0% до 100%)",
        en: "Raised test coverage from 5% to 73% (0% to 100% on 12 key modules)",
      },
      {
        ru: "Внедрил обязательные prettier/eslint через pre-commit хуки (husky)",
        en: "Enforced prettier/eslint via pre-commit hooks (husky)",
      },
      {
        ru: "Настроил real-time обновления: WebSocket, подписки на запросы, polling",
        en: "Set up real-time updates: WebSocket, request subscriptions, polling",
      },
    ],
    stack: ["Angular", "RxJS", "Jest", "Playwright"],
    badge: { ru: "ФГУП «ЗащитаИнфоТранс»", en: "State enterprise" },
  },
  {
    id: "pgpo",
    title: {
      ru: "ПГПО",
      en: "Hazardous Cargo Monitoring",
    },
    period: {
      ru: "2024",
      en: "2024",
    },
    description: {
      ru: "Система мониторинга перевозок грузов повышенной опасности: динамические формы, конфигурируемые под роли и статусы согласования.",
      en: "A monitoring system for hazardous cargo transportation: dynamic forms configurable by role and approval status.",
    },
    bullets: [
      {
        ru: "Динамическая типизированная форма (Ant Design) с валидацией по regex",
        en: "A dynamic typed form (Ant Design) with regex-based validation",
      },
      {
        ru: "Работа в кросс-функциональной команде из 5 человек",
        en: "Worked in a 5-person cross-functional team",
      },
      {
        ru: "Проект дошёл до межведомственных испытаний и принят в промышленную эксплуатацию",
        en: "Reached interdepartmental testing and was accepted into production use",
      },
    ],
    stack: ["React 18", "Ant Design"],
    badge: { ru: "ФГУП «ЗащитаИнфоТранс»", en: "State enterprise" },
  },
  {
    id: "ddoctors",
    title: {
      ru: "ddoctors.ru",
      en: "ddoctors.ru",
    },
    period: {
      ru: "2023 – 2024",
      en: "2023 – 2024",
    },
    description: {
      ru: "Медицинская социальная сеть для врачей с аудиторией 10 000+ подписчиков в соцсетях и внутренняя CRM компании.",
      en: "A medical social network for doctors with a 10,000+ social media audience, plus the company's internal CRM.",
    },
    bullets: [
      {
        ru: "Новые компоненты и редактор постов, SEO-интеграция через JSON-LD",
        en: "New components and a post editor, SEO integration via JSON-LD",
      },
      {
        ru: "Рефакторинг .then()-цепочек на async/await устранил зависания интерфейса на 2-3 секунды",
        en: "Refactoring .then() chains to async/await removed 2-3 second UI freezes",
      },
      {
        ru: "Real-time синхронизация задач через WebSocket во внутренней CRM",
        en: "Real-time task sync via WebSocket in the internal CRM",
      },
    ],
    stack: ["Vue 2/3", "Nuxt", "Vuex", "WebSocket"],
    link: {
      label: { ru: "Открыть сайт", en: "Visit site" },
      href: "https://ddoctors.ru",
    },
  },
];
