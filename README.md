* Макеты с нужными страницами находятся в файлах, начинающихся с префикса _
* Все, которые без префиксов - это одна и та же продублировнная index.html (так как никакого сервера тут не запущено, то обращение идет просто к соответствующим файлам). Но так как все скрипты и стили подключаются через index.html, то хотя бы одна такая нужна
* На некоторых страницах могут не работать экшены типа модалок, это потому что из-за дубликатов страниц, возможно, я что-то не перенесла. Когда будет все нормально разруливаться через один входной файл, проблем быть не должно
* на данный момент показываются (сверху справа) обе кнопки для не залогиненного пользователя и для того, кто залогинен. Опять же нет данных о состоянии, поэтому вывалила обе
