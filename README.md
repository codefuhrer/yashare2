## yashare2
> **Note:** This project is not affiliated with Yandex.

### What is it?
These are ready styles for Yandex [sharing widget](https://tech.yandex.ru/share/).

![Preview](/demo.png)

### What for?
So that you can style the widget any way you want, without having to load external CSS. Especially for this case there is a `data-bare` attribute (see [docs](https://tech.yandex.ru/share/doc/dg/add-docpage/)).

### How?
Install the widget and add the `data-bare` attribute:
```html
<script async src="//yastatic.net/share2/share.js"></script>
<div data-bare class="ya-share2" data-services="desired services list"></div>
```

Install this package:
```bash
npm install yashare2 --save
```

Include to your app's styles.
```sass
@import '../../../node_modules/yashare2/src/yashare';
```

### What about customizing?
You can change some essential styles by changing the variables:
```sass
// Counter font family and size:
$yashare2__font: 'PT Serif', Georgia, serif;
$yashare2__icon-size: 24px;

// Enable and disable the services you need:
$yashare2__blogger = true;
$yashare2__evernote = true;
$yashare2__moimir = false;
```