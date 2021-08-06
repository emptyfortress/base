# Base

Это составной проект для перехода но монохром в ВК, а также для попытка синхронизации со сторибуком.

- vite
- vue 3 (no typescript)
- router
- quasar
- pug
- scss
- eslint + prettier (only emacs works, nvim partly, vim not working)

### Ветки

Проекты лежат в разных ветках

- old - рыба старого мультицветного дизайна
- current - текущая разработка
- master - основная ветка

### Иконки

использование custom icons - SvgIcon(name="name" color="color" spin)
- положить иконку в папку
- запустить gulp
- напрямую назначить атрибут color="var(--q-primary)", color="red" или
- унаследовать цвет родителя из css: color: red; fill: red;
