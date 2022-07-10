import { PrismaClient } from '@prisma/client'
// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more: 
// https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var _prisma: PrismaClient | undefined
}

if (process.env["NODE_ENV"] === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global._prisma) {
    global._prisma = new PrismaClient()
  }
  prisma = global._prisma
}
export default prisma