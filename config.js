/*
  Настройки лендинга Tatyana Richmann.
  Здесь только публичные идентификаторы. Никаких паролей, токенов и API-ключей:
  этот файл открыт любому посетителю сайта.
  Пустая строка = функция выключена.
*/
window.TR_CONFIG = {
  // Адрес сайта после публикации (для canonical и Open Graph)
  siteUrl: "https://ai.adsnew.org",  // одобрено Татьяной 14.10.2026, ещё не опубликовано

  // ИИ-администратор: публичный webhook n8n (Webhook node, метод POST).
  // Пусто = на сайте работает встроенный демо-сценарий.
  agentEndpoint: "",

  // Заявки с формы: публичный webhook n8n (Webhook node, метод POST).
  // Пусто = после отправки открывается WhatsApp с текстом заявки.
  leadEndpoint: "https://adsmeta888.app.n8n.cloud/webhook/tr-landing-lead",

  // Запись на консультацию (Cal.com / Calendly, бесплатный тариф). Пусто = кнопка ведёт в WhatsApp.
  bookingUrl: "",

  // Контакты
  whatsapp: "972537086545",          // с сайта adsnew.org
  telegram: "mailovaja",               // подтверждено Татьяной 14.10.2026, показывать после согласования превью
  email: "adsmeta888@gmail.com",
  instagramRu: "",                    // ссылка на русскоязычный Instagram, когда будет создан
  instagramEn: "",                    // ссылка на англоязычный Instagram, когда будет создан

  // Аналитика и пиксели. Загружаются только после согласия посетителя на cookies.
  ga4Id: "",          // "G-XXXXXXXXXX"
  metaPixelId: "1630705058143577",  // пиксель link.adsnew.org, выбран Татьяной 19.10.2026
  tiktokPixelId: "",  // "CXXXXXXXXXXXXXXX"

  // Цены тарифов, утверждены Татьяной 16.10.2026 (07_tariff_table_RU.xlsx).
  // Пусто = «Расчёт после аудита». Валюта выбирается на сайте (автоопределение региона + ручной выбор).
  prices: {
    IL: { symbol: "₪", start: { setup: 1990, monthly: 490 }, business: { setup: 4900, monthly: 1190 } },
    US: { symbol: "$", start: { setup: 590,  monthly: 149 }, business: { setup: 1490, monthly: 349 } },
    EU: { symbol: "€", start: { setup: 590,  monthly: 149 }, business: { setup: 1490, monthly: 349 } }
  },

  // Программа «Первые клиенты»: скидка на подключение за публичный кейс.
  // slotsLeft: сколько мест осталось (0 = блок скрывается).
  promo: { setupDiscount: 0.5, slotsLeft: 3 }
};
