# BACKEND

## Install

- `docker-compose exec app bash`
- `composer require laravel/sanctum`
- `php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"`
- `composer require laravel/jetstream`
- `php artisan jetstream:install inertia`
- `php artisan migrate`
- `cd backend`
- `backend % npm i`
- `php artisan vendor:publish --tag=jetstream-views`
- `backend % npm run hot`

## Run

- access on browser: `http://localhost`
![demo](screenshot/demo.png)

## MVC

- `php artisan make:model ChatRoom/ChatMessage -m`
- `php artisan migrate`
![db](screenshot/db.png)
- `php artisan make:seeder ChatRoomSeeder`
- `php artisan db:seed`
- `php artisan make:controller ChatController`

## Pusher

- `composer require pusher/pusher-php-server "~4.0"`
- `backend % npm i --save laravel-echo pusher-js`
- `php artisan event:generate`
>clear cache
- `php artisan optimize`
- `php artisan queue:work`
![pusher](screenshot/pusher.png)