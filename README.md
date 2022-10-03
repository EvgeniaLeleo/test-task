# Тестовое задание

[Demo](https://evgenialeleo.github.io/test-task/)

## Установка

Склонируйте репозиторий и установите зависимости

```sh
cd test-task
npm install
```

Для запуска сервера в development-режиме выполните команду

```sh
npm run start
```

При необходимости production сборки выполните команду

```sh
npm run build
```

## Структура и функционал приложения

### Главная страница приложения

- [x] список карточек, на каждой из которых выводится картинка и информация, которая пришла с эндпоинта (выбрано публичное API [Zoo Animal](https://zoo-animal-api.herokuapp.com/))
- [x] кнопка фильтра

### Работа приложения

- [x] приложение реализовано как SPA
- [x] кнопка фильтра:
  - [x] активна только в том случае, если имеются залайканные карточки
  - [x] при нажатии на кнопку показываются только залайканные карточки, текст на кнопке меняется
  - [x] при повторном нажатии снова выводятся все карточки, текст на кнопке меняется
- [x] пришедшие данные хранятся в store
- [x] пока изображение на карточке прогружается, пользователь видит loader
- [x] на карточке имеется иконка лайка:
  - [x] при нажатии на кнопку ставится или убирается лайк
  - [x] иконка подкрашивается, когда залайкана
- [x] на карточке имеется иконка удаления:
  - [x] при нажатии на кнопку карточка удаляется
  - [x] при удалении всех карточек выводится соответствующая надпись
- [x] при нажатии на изображение открывается галерея (использована [Core Components Gallery](https://core-ds.github.io/core-components/master))
- [x] реализована адаптивная верстка (breakpoints: 1440px, 1024px, 768px, 425px)

### Технический стек приложения

- [x] React
- [x] Redux + Redux Toolkit + RTK Query
- [x] React Router DOM, реализация routing
- [x] TypeScript
- [x] [Core Components](https://core-ds.github.io/core-components/master)
