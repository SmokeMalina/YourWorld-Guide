# YourWorld-Guide

## Поисковый индекс

Поиск на сайте работает на Pagefind. После локального изменения HTML-страниц
обновите индекс командами:

```powershell
npm ci
npm run build:search
```

В GitHub Actions индекс обновляется автоматически после каждого push в `main`.
