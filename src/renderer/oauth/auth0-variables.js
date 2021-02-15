export const AUTH_CONFIG = {
  clientId: 1,
  clientSecret: 'S5XlTaX4fganlLpCRU5E1AkH8OSqx5JuAXF1zaFU',
  domain: 'http://inventario.test/oauth/token',
  apibase: 'http://inventario.test',
  callbackUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/callback' : 'http://vuely.theironnetwork.org/callback',
  apiUrl: 'API_IDENTIFIER',
  grantType: 'password',
  username: 'admin2@admin.com',
  password: 'admin2',
  scope: '*',
  CPU: 64,
  BATERIA: 65,
  DISCOS: 66,
  GRAFICOS: 67,
  REDES: 68,
  SISTEMAS_OPERATIVOS: 69,
  INFORMACION_DEL_SISTEMA: 70,
  RAM: 71,
  PROGRAMAS_INSTALADOS: 72
}
/*
 php artisan passport:keys
 mysql -u homestead -psecret
 drop database inventarios;create database inventarios;
 php artisan migrate
 php artisan db:seed --class=ContactosTableSeeder
 php artisan db:seed
 php artisan passport:client --password
*/
