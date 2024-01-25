import { app } from './app'
import { env } from './env'


app
  .listen({
    host: '0.0.0.0', // usa o host para que o front possa acessar de qualquer lugar
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
