# Invitation Sites

Проект в разработке: мобильный каталог digital invitation websites.

## Сначала

Перед работой прочитать `PROJECT_STATUS.md`; после каждого изменения структуры или статуса обновить его. Подробные правила и критерии этапов находятся в `PROJECT_HANDOVER.md`.

## Нумерация

Шаблоны имеют только числовые ID: `1`, `2`, `3` и т. д. Первый шаблон расположен в `templates/1/` и открывается по `/templates/1/`.

## Структура

```text
index.html                         # локальная мобильная оболочка
PROJECT_STATUS.md                  # текущий статус и следующие действия
PROJECT_HANDOVER.md                # подробный план и правила
templates/
  1/                               # шаблон №1
    template.json                  # metadata
    demo.json                      # безопасные demo-данные
    src/                            # runtime
    assets/                         # локальные ресурсы
    generated/                      # PNG только имён пары
scripts/                            # генераторы
public/catalog-template/manifest.json # generated manifest
```

## Команды

```bash
npm install
npm run generate:images
npm run generate:catalog-manifest
npm run build
npm run graph:update     # Graphify + инвентарь структуры
npm run graph:watch      # автообновление после любого изменения
```

## Ограничения

- Реальные данные клиентов не хранятся в public Git; для них предназначен private vault.
- Автоматически генерируемые PNG — только имена пары с прозрачным фоном.
- Дата, время, venue, адрес, карта, программа, контакты и RSVP — live HTML/CSS.
- **Vercel используется для этого проекта.** Пользователь уже зарегистрирован; повторная регистрация не требуется. Публикация выполняется только после отдельного прямого разрешения.
- Этап 2 и следующие этапы не запускаются без отдельного разрешения.
