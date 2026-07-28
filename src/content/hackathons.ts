import type { HackathonEvent } from "./types";

export const hackathons: HackathonEvent[] = [
  {
    id: "2024-03-perm",
    date: { ru: "28–29 марта 2024", en: "March 28–29, 2024" },
    location: { ru: "Пермь", en: "Perm" },
    stage: { ru: "Отборочный этап", en: "Qualifying stage" },
    client: {
      ru: "Ассоциация «Цифровая Эра Транспорта»",
      en: "Digital Era of Transport Association",
    },
    title: {
      ru: "Сервис сбора сведений о перевозках воздушным транспортом",
      en: "Air freight data collection service",
    },
    description: {
      ru: "Разработал сервис сбора сведений о планируемых и фактически выполненных перевозках воздушным транспортом с модулем анализа данных. За два дня собрали готовый продукт и получили путёвку в финал.",
      en: "Built a service for collecting data on planned and completed air freight shipments with an analytics module. In two days we delivered a working product and earned a spot in the final.",
    },
    result: {
      ru: "1 место · путёвка в финал (Москва, сентябрь 2024)",
      en: "1st place · ticket to the final (Moscow, September 2024)",
    },
    sourceUrl: "https://www.istu.edu/novosti/pub/76604",
    photos: [
      {
        src: "/images/hackathons/2024-03-perm/team-work.jpg",
        alt: {
          ru: "Работа над проектом на ИТ-чемпионате в Перми",
          en: "Working on the project at the IT championship in Perm",
        },
        focus: { x: 22.2, y: 22.5, w: 30.7, h: 55.6 },
      },
      {
        src: "/images/hackathons/2024-03-perm/award-with-deputy.jpg",
        alt: {
          ru: "Награждение на фоне баннера «Цифровая Эра Транспорта»",
          en: "Award ceremony in front of the Digital Era of Transport banner",
        },
        focus: { x: 19.1, y: 13.3, w: 18.6, h: 61.6 },
      },
    ],
  },
  {
    id: "2024-09-moscow",
    date: { ru: "18–19 сентября 2024", en: "September 18–19, 2024" },
    location: { ru: "Москва", en: "Moscow" },
    stage: { ru: "Финал", en: "Final" },
    client: { ru: "ФАУ «Росдорнии»", en: "FAI Rosdornii" },
    title: {
      ru: "Анализ состояния дорожного покрытия с помощью AI",
      en: "Road surface analysis powered by AI",
    },
    description: {
      ru: "В финале IX форума «Интеллектуальные транспортные системы России» создал систему анализа дорожного покрытия: пользователи загружают фото ям и препятствий, данные попадают в базу, доступную транспортным организациям.",
      en: "At the final of the 9th Intelligent Transport Systems of Russia forum, built a road surface analysis system: users upload photos of potholes and obstacles, and the data lands in a database accessible to transport organizations.",
    },
    result: {
      ru: "Победа в финале среди 14 команд из 7 городов",
      en: "Final victory among 14 teams from 7 cities",
    },
    sourceUrl: "https://www.istu.edu/novosti/pub/78317",
    photos: [
      {
        src: "/images/hackathons/2024-09-moscow-final/award.jpg",
        alt: {
          ru: "Награждение на финале ИТ-чемпионата в Москве",
          en: "Award ceremony at the IT championship final in Moscow",
        },
        focus: { x: 25.4, y: 9.2, w: 38, h: 74.8 },
      },
    ],
  },
  {
    id: "2025-03-ulan-ude",
    date: { ru: "26–27 марта 2025", en: "March 26–27, 2025" },
    location: { ru: "Улан-Удэ", en: "Ulan-Ude" },
    stage: { ru: "I этап", en: "Stage I" },
    client: { ru: "ООО «Иксолоджи» (XOLOGIE)", en: "XOLOGIE LLC" },
    title: {
      ru: "PWA для обслуживания элементов ИТС в офлайн-режиме",
      en: "Offline-first PWA for ITS maintenance tasks",
    },
    description: {
      ru: "Кейс, который позже лёг в основу моего диплома и флагманского проекта XOLOGIE: PWA-приложение для управления задачами по обслуживанию элементов интеллектуальных транспортных систем в условиях нестабильного интернета.",
      en: "The case that later became my thesis and the flagship XOLOGIE project: a PWA for managing maintenance tasks on intelligent transport system elements in unstable network conditions.",
    },
    result: {
      ru: "1 место · премия 150 000 ₽ · путёвка в финал",
      en: "1st place · 150,000 ₽ prize · ticket to the final",
    },
    sourceUrl: "https://www.istu.edu/novosti/pub/81088",
    photos: [
      {
        src: "/images/hackathons/2025-03-ulan-ude/project-defense.jpg",
        alt: {
          ru: "Защита проекта на конференции «ИТС регионам»",
          en: "Project defense at the ITS Regions conference",
        },
      },
      {
        src: "/images/hackathons/2025-03-ulan-ude/award.jpg",
        alt: {
          ru: "Награждение за 1 место в Улан-Удэ",
          en: "Award ceremony for 1st place in Ulan-Ude",
        },
        focus: { x: 47.8, y: 13.9, w: 20.8, h: 66.9 },
      },
    ],
  },
  {
    id: "2025-09-moscow",
    date: { ru: "23–24 сентября 2025", en: "September 23–24, 2025" },
    location: { ru: "Москва", en: "Moscow" },
    stage: { ru: "Финал", en: "Final" },
    client: { ru: "ФГУП «ЗащитаИнфоТранс»", en: "FGUP ZashchitaInfoTrans" },
    title: {
      ru: "Калькулятор беспилотных трансграничных грузоперевозок",
      en: "Autonomous cross-border freight calculator",
    },
    description: {
      ru: "На финале X форума «Интеллектуальные транспортные системы России» разработал концепцию ритмичной беспилотной трансграничной грузоперевозки и приложение-калькулятор для расчёта оптимальных параметров перевозки.",
      en: "At the final of the 10th Intelligent Transport Systems of Russia forum, designed a rhythmic autonomous cross-border freight concept and a calculator app for optimal shipping parameters.",
    },
    result: {
      ru: "Победа в финале · кейс от ФГУП «ЗащитаИнфоТранс»",
      en: "Final victory · case from FGUP ZashchitaInfoTrans",
    },
    sourceUrl: "https://www.istu.edu/novosti/pub/83795",
    photos: [
      {
        src: "/images/hackathons/2025-09-moscow-final/panel-talk.jpg",
        alt: {
          ru: "Выступление на панельной дискуссии форума «Интеллектуальные транспортные системы России»",
          en: "Panel talk at the Intelligent Transport Systems of Russia forum",
        },
      },
      {
        src: "/images/hackathons/2025-09-moscow-final/award.jpg",
        alt: {
          ru: "Награждение на финале ИТ-чемпионата 2025",
          en: "Award ceremony at the 2025 IT championship final",
        },
        focus: { x: 67.1, y: 17.8, w: 26.4, h: 67.5 },
      },
    ],
  },
];
