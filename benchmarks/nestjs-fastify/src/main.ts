import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { Controller, Get, Module } from '@nestjs/common'

@Controller()
class AppController {
  @Get()
  hello() {
    return { hello: 'world' }
  }
}

@Module({ controllers: [AppController] })
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter(), { logger: false })
  await app.listen(3000)
}

bootstrap()
