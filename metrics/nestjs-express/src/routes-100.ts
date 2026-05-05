import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { Controller, Get, Module } from '@nestjs/common'

const controllers: any[] = []
const ROUTE_COUNT = 100

for (let i = 0; i < ROUTE_COUNT; i++) {
  @Controller(`${i}`)
  class C {
    @Get()
    handle() {
      return {}
    }
  }
  Object.defineProperty(C, 'name', { value: `Controller${i}` })
  controllers.push(C)
}

@Module({ controllers })
class AppModule {}

export const run = () => NestFactory.create(AppModule, { logger: false })
