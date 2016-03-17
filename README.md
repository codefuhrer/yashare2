## yashare2
> **Внимание:** этот проект никак не связан с Яндексом.

### Что это?
Готовые стили для [блока «Поделиться»](https://tech.yandex.ru/share/) Яндекса.

![Превью](/demo.png)

### Зачем?
Чтобы использовать блок со своими стилями, не пользуясь сторонним CSS. Специально для этого предусмотрена загрузка блока с атрибутом `data-bare` (см. [документацию](https://tech.yandex.ru/share/doc/dg/add-docpage/)).

### Как?
1. Подключить блок на страницу с указанием атрибута `data-bare`:
  ```html
  <script src="//yastatic.net/share2/share.js" async="async"></script>
  <div class="ya-share2" data-services="..." data-bare></div>
  ```

2. Установить пакет:
  ```bash
  npm install yashare2 --save
  ```

3. Подключить этот репозиторий в свой SCSS.

  Попутно можно менять шрифт, размеры кнопок и отключить ненужные сервисы:
  ```sass
  $yashare2__icon-size: 24px;
  $yashare2__font: 'PT Serif', Georgia, serif;

  $yashare2__blogger = true;
  $yashare2__evernote = true;
  $yashare2__moimir = false;

  @import '../../../node_modules/yashare2/src/yashare';
  ```
