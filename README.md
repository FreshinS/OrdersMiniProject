[![Maintainability](https://qlty.sh/gh/FreshinS/projects/OrdersMiniProject/maintainability.svg)](https://qlty.sh/gh/FreshinS/projects/OrdersMiniProject)

# Система управления заказами

Приложение на NodeJS + Express, моделирующее процесс жизненного цикла заказа в интернет-магазине, с применением паттерна State и принципов объектной композиции.

## Функционал
- Создание пользовтелей
- Создание заказов привязанные к пользователю
- 7 состояния заказа
  - Создан (Created)
  - Оплачен (Paid)
  - Привезён (Shipped)
  - Доставлен (Delivered)
  - Отменён (Cancelled)
  - Возвращён (Returned)
  - Деньги возвращены (Refund)
- История состояний заказа

## Запуск приложения

Установка зависимостей:
```bash
npm install
```

Запуск сервера:
```bash
npm start # App started on http://localhost:3000
```

## REST API

### Пользователи

- `POST /users` - Создание пользователя
  - `userId` - ID пользователя
  - `balance` - Начальный баланс (пополнения пока нету :D)

- `GET /users` - Все пользователи

- `GET /users/:id` - Получить пользователя по ID

### Заказы

- `POST /orders` - Создать заказ
  - `userId` - ID пользователя кто создаёт заказ
  - `amount` - Сумма заказа

- `GET /orders` - Все заказы

- `POST /orders/:id/pay` - Оплатить заказ

- `POST /orders/:id/ship` - Привезти заказ (на склад)

- `POST /orders/:id/deliver` - Привезти заказ (на дом)

- `POST /orders/:id/cancel` - Отменить заказ

- `POST /orders/:id/return` - Вернуть заказ

- `POST /orders/:id/refund` - Вернуть деньги за ещё не отправленный заказл, или возвращённый

- `GET /orders/:id/history` - Узнать историю заказащ