import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
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

export const run = () => NestFactory.create(AppModule, { logger: false })
