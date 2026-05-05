import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { Controller, Get, Module } from '@nestjs/common'

export const run = async (routes: number) => {
  const controllers: any[] = []
  for (let i = 0; i < routes; i++) {
    @Controller(`/${i}`)
    class DynamicController {
      @Get()
      handler() {
        return {}
      }
    }
    controllers.push(DynamicController)
  }

  @Module({ controllers })
  class AppModule {}

  return NestFactory.create(AppModule, { logger: false })
}
