import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { Controller, Get, Module } from '@nestjs/common'

const createController = (index: number) => {
  @Controller(`${index}`)
  class DynamicController {
    @Get()
    handle() {
      return {}
    }
  }
  return DynamicController
}

export const run = (routeCount: number) => {
  const controllers = []
  for (let i = 0; i < routeCount; i++) {
    controllers.push(createController(i))
  }

  @Module({ controllers })
  class AppModule {}

  return NestFactory.create(AppModule, { logger: false })
}
