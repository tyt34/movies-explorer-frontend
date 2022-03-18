# Дипломная работа (Яндекс.Практикум)

![](https://shields.io/badge/-HTML-orange) 
![](https://shields.io/badge/-CSS-blue)
![](https://shields.io/badge/-JavaScript-yellow)
![](https://shields.io/badge/-React.JS-05D9FF)

## Описание

- Демонстративное приложение, адаптивное под разрешения экрана от 320px до 1280px.
- Приложение состоит из:
    - титульная страница (данные взяты из макета);
    - регистрация и авторизация;
    - поиск фильмов;
    - сохранненые фильмы;
    - редактирование профиля;
 - Frontend написан на React.JS. React-router-dom v6.
 - Локальные данные на стороне пользователя хранятся в *localStorage*.
 - Данные с фильмами находятся по ссылке https://api.nomoreparties.co/beatfilm-movies.
 - Это frontend часть приложения "Поиск фильмов". Backend часть приложения находится [по этой ссылке](https://github.com/tyt34/movies-explorer-api). 
 - В ветке level-4 будут добавлены новые хуки..

## Функциональность

* Возможность зарегистрироваться и авторизоваться.
* Возможность редактировать профиль.
* Поиск фильмов осуществляется с помощью букв кириллицы и латиницы. 
* Переход на другие страницы происходит без перезагрузки. 
* Каждый фильм можно добавить/исключить из избранных. Для этого надо кликнуть на лайк.
* Страница поиска запоминает последние введенные данные. 
* При клике на постер фильма откроется его трейлер в новом окне.
* При клике в любое место поля поиска фильмов оно будет активировано.
* При вводе некорректных данных выводится сообщение поясняющая ошибку. 
* Можно искать только короткометражные фильма (меньше 40 минут).

[Ссылка на макет в Figma](https://www.figma.com/file/cASM20ikAsPlTi2doec68Q/Diploma?node-id=932%3A3320).

## Запуск приложения
1. npm i
2. npm start

