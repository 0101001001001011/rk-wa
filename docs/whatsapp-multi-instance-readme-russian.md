# WhatsApp Multi-Instance API

[![Лицензия: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Версия Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Поддерживается-blue.svg)](https://www.docker.com/)

Мощный и гибкий API-сервис, позволяющий управлять несколькими соединениями WhatsApp в рамках одного приложения. Разработан для бизнеса и разработчиков, которым необходимо интегрировать возможности обмена сообщениями WhatsApp в свои системы.

## ✨ Возможности

- **Поддержка нескольких инстансов**: Создавайте и управляйте несколькими инстансами WhatsApp с помощью единого API
- **Двойная аутентификация**: Выбирайте между JWT-токенами или API-ключами для аутентификации
- **Двойная поддержка баз данных**: Легко переключайтесь между MongoDB и SQLite в зависимости от ваших потребностей
- **Работа с медиафайлами**: Отправляйте и получайте текстовые сообщения, изображения, видео, документы и другие медиафайлы
- **Интеграция Webhook**: Мгновенные уведомления о доставке сообщений, получении и статусе соединения
- **Подробная статистика**: Отслеживание метрик использования для каждого инстанса
- **Поддержка Docker**: Простое развертывание с помощью Docker и Docker Compose
- **Исчерпывающая документация**: Подробная документация API на нескольких языках

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 20.x или выше
- База данных MongoDB или SQLite (поддержка двух баз данных)
- Для установки Docker: Docker и Docker Compose

### Установка

#### Стандартная установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/0101001001001011/rk-wa.git
   cd whatsapp-multi-instance-api
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Создайте файл `.env` на основе примера:
   ```bash
   cp .env.example .env
   ```

4. Измените файл `.env` с вашей конфигурацией:
   ```
   PORT=3000
   NODE_ENV=development
   DATABASE_PROVIDER=mongodb  # или sqlite
   DATABASE_URL="mongodb://username:password@localhost:27017/whatsapp-api?authSource=admin"
   SQLITE_DATABASE_URL="file:./data/whatsapp-api.db"
   JWT_SECRET="your-jwt-secret-key-here"
   JWT_EXPIRATION="24h"
   ```

5. Инициализируйте базу данных:
   ```bash
   # Для обеих баз данных
   npm run prisma:generate:all
   node scripts/init-databases.js
   
   # Или для конкретной базы данных
   npm run setup:mongodb
   # или
   npm run setup:sqlite
   ```

6. Запустите сервер:
   ```bash
   npm start
   ```

#### Установка Docker

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/0101001001001011/rk-wa.git
   cd whatsapp-multi-instance-api
   ```

2. При необходимости настройте файл `docker-compose.yml`.

3. Запустите контейнер:
   ```bash
   docker-compose up -d
   ```

### Конфигурация

API можно настроить с помощью переменных окружения:

| Переменная | Описание | По умолчанию |
|----------|-------------|---------|
| PORT | Номер порта сервера | 3000 |
| NODE_ENV | Окружение (development/production) | development |
| DATABASE_PROVIDER | Тип базы данных (mongodb/sqlite) | mongodb |
| DATABASE_URL | Строка подключения MongoDB | - |
| SQLITE_DATABASE_URL | Путь к файлу базы данных SQLite | - |
| JWT_SECRET | Секретный ключ для JWT токенов | - |
| JWT_EXPIRATION | Время истечения JWT токена | 24h |
| LOG_LEVEL | Уровень логирования (debug, info, warn, error) | info |
| CORS_ORIGIN | Разрешенные источники CORS | * |

## 📚 Документация API

Полная документация API доступна на нескольких языках:

- [Английский](./docs/whatsapp-multi-instance-api-documentation-english.md)
- [Русский](./docs/whatsapp-multi-instance-api-documentation-russian.md)
- [Китайский](./docs/whatsapp-multi-instance-api-documentation-chinese.md)
- [Корейский](./docs/whatsapp-multi-instance-api-documentation-korean.md)

### Документация по двойной поддержке баз данных

- [Английский](./docs/whatsapp-multi-instance-dual-db-english.md)
- [Русский](./docs/whatsapp-multi-instance-dual-db-russian.md)
- [Китайский](./docs/whatsapp-multi-instance-dual-db-chinese.md)
- [Корейский](./docs/whatsapp-multi-instance-dual-db-korean.md)

### Аутентификация

API поддерживает два метода аутентификации:

1. **Аутентификация по JWT-токену**:
   ```bash
   curl -X POST https://your-api-url.com/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"user@example.com","password":"strongpassword"}'
   ```

2. **Аутентификация по API-ключу**:
   ```bash
   curl -X GET https://your-api-url.com/api/instances \
     -H "x-api-key: your-api-key"
   ```

### Примеры базового использования

#### Создание инстанса WhatsApp

```bash
curl -X POST https://your-api-url.com/api/instances \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Основной WhatsApp",
    "description": "Корпоративный аккаунт",
    "webhookUrl": "https://your-webhook-url.com/whatsapp"
  }'
```

#### Отправка сообщения

```bash
curl -X POST https://your-api-url.com/api/whatsapp/{instanceId}/send \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "79001234567",
    "message": "Привет! Это тестовое сообщение."
  }'
```

#### Переключение провайдера базы данных

```bash
curl -X POST https://your-api-url.com/api/db/switch \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "provider": "sqlite"
  }'
```

## 📱 Клиентские библиотеки

### JavaScript/Node.js

```javascript
const axios = require('axios');

const client = axios.create({
  baseURL: 'https://your-api-url.com/api',
  headers: { 'x-api-key': 'your-api-key' }
});

async function sendMessage(instanceId, phone, message) {
  const response = await client.post(`/whatsapp/${instanceId}/send`, {
    phone,
    message
  });
  return response.data;
}
```

### Python

```python
import requests

class WhatsAppAPI:
    def __init__(self, base_url, api_key):
        self.base_url = base_url
        self.headers = {
            'x-api-key': api_key,
            'Content-Type': 'application/json'
        }
    
    def send_message(self, instance_id, phone, message):
        url = f"{self.base_url}/whatsapp/{instance_id}/send"
        data = {
            "phone": phone,
            "message": message
        }
        response = requests.post(url, headers=self.headers, json=data)
        return response.json()
```

## 📊 Статистика и мониторинг

API предоставляет конечные точки для сбора статистики использования:

- **Статистика пользователя**: `/api/stats/user`
- **Статистика инстанса**: `/api/stats/instances/{instanceId}`
- **Системная статистика**: `/api/stats/system` (только для администраторов)

## 🔒 Рекомендации по безопасности

1. Всегда используйте HTTPS для взаимодействия с API
2. Храните API-ключи в безопасном месте и не включайте их в клиентский код
3. Регулярно обновляйте учетные данные (пароли и API-ключи)
4. При возможности настройте ограничения доступа по IP
5. Отслеживайте журналы активности на предмет подозрительной активности

## 🔧 Устранение неполадок

### Распространенные проблемы

1. **Проблемы с подключением**:
   - Убедитесь, что ваш аккаунт WhatsApp не подключен в другом месте
   - При необходимости удалите файлы аутентификации и переподключитесь

2. **Проблемы со сканированием QR-кода**:
   - Убедитесь, что ваше приложение WhatsApp обновлено
   - Обеспечьте стабильное интернет-соединение при сканировании

3. **Ограничения скорости и блокировки**:
   - Учитывайте ограничения и рекомендации WhatsApp
   - Реализуйте механизмы автоматического повтора с экспоненциальной задержкой

4. **Проблемы с базой данных**:
   - Для SQLite: Проверьте разрешения файлов и обрабатывайте ошибки "Database is locked"
   - Для MongoDB: Проверьте строку подключения и правильность аутентификации

## 📝 План развития

Мы подготовили подробный план развития WhatsApp Multi-Instance API. Ознакомьтесь с ним на предпочитаемом вами языке:

- [Английский](./docs/roadmap-english.md)
- [Русский](./docs/roadmap-russian.md)
- [Китайский](./docs/roadmap-chinese.md)
- [Корейский](./docs/roadmap-korean.md)

Мы приветствуем ваши отзывы и вклад в определение приоритетов наших разработок!

## 🤝 Участие в разработке

Мы приветствуем вклад в проект! Пожалуйста, не стесняйтесь отправлять Pull Request.

1. Сделайте форк репозитория
2. Создайте ветку для вашей функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте ваши изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под лицензией MIT - см. файл [LICENSE](LICENSE) для подробностей.

## 📞 Поддержка

Если у вас возникли проблемы или вопросы, пожалуйста, [создайте issue](https://github.com/0101001001001011/rk-wa/issues).

---

Сделано с ❤️ компанией RK при поддержке Anthropic