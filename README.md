# Vue2 Laravel8 Stripe shopping cart

![badge4](https://img.shields.io/badge/docker-3.3.1-blue)
![Stars](https://img.shields.io/github/stars/tquangdo/vue2-laravel8-stripe-shopping-cart?color=f05340)
![Issues](https://img.shields.io/github/issues/tquangdo/vue2-laravel8-stripe-shopping-cart?color=f05340)
![Forks](https://img.shields.io/github/forks/tquangdo/vue2-laravel8-stripe-shopping-cart?color=f05340)
[![Report an issue](https://img.shields.io/badge/Support-Issues-green)](https://github.com/tquangdo/vue2-laravel8-stripe-shopping-cart/issues/new)

## localdeploy

- `docker-compose up -d --build`
- `docker-compose exec php bash`
- `[php] $ composer install`
- `[php] $ cp .env.example .env`
- `[php] $ php artisan key:generate`

## connect DB

1. in CLI
- `docker-compose exec db bash -c 'mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} ${MYSQL_DATABASE}'`
- `mysql> show tables;`
2. by tools (MySQL Workbench)
- username: `root`
- pw: `secret`
- port: `33060`

## output log

- edit in `backend/.env`: `LOG_CHANNEL=stderr`
- edit in `backend/routes/web.php`:
```php
Route::get('/', function () {
    logger('welcome route.');
    return view('welcome');
});
```
- `docker-compose logs -f php`
- browser: access "localhost:10080" => will see 'welcome route.' in log console

## check versions

1. PHP: `[php] # php -v`
>(PHP info: `[php] # php -m`)
2. composer: `[php] # composer -v`
3. laravel: `[php] $ php artisan -v`
