# WhatsApp Multi-Instance API

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Supported-blue.svg)](https://www.docker.com/)
[![WhatsApp Library](https://img.shields.io/badge/WhatsApp-Baileys-green.svg)](https://github.com/WhiskeySockets/Baileys)

Мощный и гибкий API-сервис, позволяющий управлять несколькими подключениями WhatsApp в рамках одного приложения. Построен на основе мощной библиотеки [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys) и предназначен для бизнеса и разработчиков, которым необходимо интегрировать возможности обмена сообщениями WhatsApp в свои системы.

## ✨ Возможности

- **Поддержка нескольких экземпляров**: Создание и управление несколькими экземплярами WhatsApp через единый API
- **Двойная аутентификация**: Выбор между JWT-токенами или API-ключами для аутентификации
- **Поддержка двух баз данных**: Возможность переключения между MongoDB и SQLite в зависимости от потребностей
- **Работа с медиа**: Отправка и получение текстовых сообщений, изображений, видео, документов и других медиафайлов
- **Интеграция с вебхуками**: Уведомления в реальном времени о доставке сообщений, получении и статусе подключения
- **Подробная статистика**: Отслеживание метрик использования для каждого экземпляра
- **Поддержка Docker**: Легкое развертывание с помощью Docker и Docker Compose
- **Подробная документация**: Детальная документация API на нескольких языках
- **Мониторинг соединений**: Автоматическое переподключение и проверка работоспособности сокетов
- **Управление контактами**: Хранение и управление контактами WhatsApp в вашей базе данных

## 🚀 Быстрый старт

### Требования

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

4. Измените файл `.env` согласно вашей конфигурации:
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

#### Установка с Docker

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
|------------|----------|--------------|
| PORT | Порт сервера | 3000 |
| NODE_ENV | Окружение (development/production) | development |
| DATABASE_PROVIDER | Тип базы данных (mongodb/sqlite) | mongodb |
| DATABASE_URL | Строка подключения MongoDB | - |
| SQLITE_DATABASE_URL | Путь к файлу базы данных SQLite | - |
| JWT_SECRET | Секретный ключ для JWT-токенов | - |
| JWT_EXPIRATION | Время истечения JWT-токена | 24h |
| LOG_LEVEL | Уровень логирования (debug, info, warn, error) | info |
| CORS_ORIGIN | Разрешенные источники CORS | * |
| SOCKET_CHECK_CRON | Расписание проверки состояния сокетов | */5 * * * * |
| AUTH_CHECK_CRON | Расписание проверки истечения авторизации | 0 12 * * * |
| USAGE_SAVE_CRON | Расписание сохранения метрик использования | */15 * * * * |
| USAGE_LIMITS_CRON | Расписание проверки лимитов использования | 0 * * * * |
| SYSTEM_METRICS_CRON | Расписание сбора системных метрик | */5 * * * * |

## 📚 Документация API

Полная документация API доступна на нескольких языках:

- [English](./docs/whatsapp-multi-instance-api-documentation-english.md)
- [Russian](./docs/whatsapp-multi-instance-api-documentation-russian.md)
- [Chinese](./docs/whatsapp-multi-instance-api-documentation-chinese.md)
- [Korean](./docs/whatsapp-multi-instance-api-documentation-korean.md)

### Документация по двойной базе данных

- [English](./docs/whatsapp-multi-instance-dual-db-english.md)
- [Russian](./docs/whatsapp-multi-instance-dual-db-russian.md)
- [Chinese](./docs/whatsapp-multi-instance-dual-db-chinese.md)
- [Korean](./docs/whatsapp-multi-instance-dual-db-korean.md)

### Документация по UI

- [English](./docs/whatsapp-api-ui-documentation-english.md)
- [Russian](./docs/whatsapp-api-ui-documentation-russian.md)
- [Chinese](./docs/whatsapp-api-ui-documentation-chinese.md)
- [Korean](./docs/whatsapp-api-ui-documentation-korean.md)

### Аутентификация

API поддерживает два метода аутентификации:

1. **Аутентификация JWT-токена**:
   ```bash
   curl -X POST https://your-api-url.com/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"user@example.com","password":"strongpassword"}'
   ```

2. **Аутентификация API-ключа**:
   ```bash
   curl -X GET https://your-api-url.com/api/instances \
     -H "x-api-key: your-api-key"
   ```

### Примеры базового использования

#### Создание экземпляра WhatsApp

```bash
curl -X POST https://your-api-url.com/api/instances \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Main WhatsApp",
    "description": "Corporate account",
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
    "message": "Hello! This is a test message."
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

API предоставляет эндпоинты для сбора статистики использования:

- **Статистика пользователя**: `/api/stats/user`
- **Статистика экземпляра**: `/api/stats/instances/{instanceId}`
- **Системная статистика**: `/api/stats/system` (только для администраторов)

## 🤖 Упрощенный и полный сервис WhatsApp

Проект включает две различные реализации сервиса WhatsApp:

1. **Полный сервис WhatsApp Manager** (`whatsapp-manager.service.js`): Это основная реализация с полным набором функций, включая обработку медиа, поддержку вебхуков и детальное отслеживание событий.

2. **Упрощенный сервис WhatsApp** (`simplified-whatsapp.service.js`): Легковесная реализация, фокусирующаяся на основных функциях обмена сообщениями, идеально подходящая для более простых случаев использования или тестирования.

Вы можете выбрать подходящую реализацию в зависимости от ваших потребностей, используя соответствующие конечные точки API.

## 🔒 Рекомендации по безопасности

1. Всегда используйте HTTPS для API-коммуникаций
2. Храните API-ключи в безопасности и не включайте их в клиентский код
3. Регулярно меняйте учетные данные (пароли и API-ключи)
4. При возможности настраивайте ограничения по IP для доступа к API
5. Отслеживайте журналы активности на предмет подозрительной активности
6. Устанавливайте соответствующие ограничения повторных попыток вебхуков и отслеживайте их доставку
7. Реализуйте ограничение скорости для API-эндпоинтов для предотвращения злоупотреблений

## 🔧 Устранение неполадок

### Распространенные проблемы

1. **Проблемы с подключением**:
   - Убедитесь, что ваш аккаунт WhatsApp не подключен где-то еще
   - Удалите файлы аутентификации и переподключитесь при необходимости
   - Проверьте работоспособность сокета с помощью эндпоинта проверки сокета

2. **Проблемы со сканированием QR-кода**:
   - Убедитесь, что ваше приложение WhatsApp обновлено
   - Обеспечьте стабильное интернет-соединение при сканировании
   - Если QR-код не отображается, попробуйте переподключить экземпляр через API

3. **Ограничение скорости и блокировки**:
   - Учитывайте ограничения скорости и рекомендации WhatsApp
   - Реализуйте механизмы автоматического повтора с экспоненциальной задержкой
   - Используйте функции мониторинга использования для раннего обнаружения потенциальных проблем

4. **Проблемы с базой данных**:
   - Для SQLite: Проверьте права доступа к файлам и обработайте ошибки "База данных заблокирована"
   - Для MongoDB: Проверьте строку подключения и правильность аутентификации
   - Используйте функцию переключения базы данных, если вы сталкиваетесь с постоянными проблемами

## 📝 План развития

Мы подготовили подробный план дальнейшего развития WhatsApp Multi-Instance API. Ознакомьтесь с ним на предпочитаемом языке:

- [English](./docs/roadmap-english.md)
- [Russian](./docs/roadmap-russian.md)
- [Chinese](./docs/roadmap-chinese.md)
- [Korean](./docs/roadmap-korean.md)

Мы приветствуем ваши отзывы и вклад для определения приоритетов разработки!

## 🤝 Содействие проекту

Вклады приветствуются! Пожалуйста, не стесняйтесь создавать Pull Request.

1. Форкните репозиторий
2. Создайте ветку для вашей функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте ваши изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под лицензией MIT - см. файл [LICENSE](LICENSE) для подробностей.

## 📞 Поддержка

Если вы столкнулись с проблемами или у вас есть вопросы, пожалуйста, [откройте issue](https://github.com/0101001001001011/rk-wa/issues).

## 🙏 Благодарности

Этот проект был бы невозможен без невероятной работы нескольких проектов с открытым исходным кодом:

- [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys) - Мощная библиотека, обеспечивающая функциональность WhatsApp Web API
- [Prisma](https://www.prisma.io/) - ORM нового поколения для Node.js и TypeScript
- [Express](https://expressjs.com/) - Быстрый, гибкий, минималистичный веб-фреймворк для Node.js
- [MongoDB](https://www.mongodb.com/) - База данных для современных приложений
- [SQLite](https://www.sqlite.org/) - Самый используемый движок баз данных в мире

Особая благодарность всем разработчикам, которые внесли свое время и опыт в эти проекты, делая нашу работу возможной.

---

Сделано с ❤️ командой RK при содействии Anthropic's Claude AI