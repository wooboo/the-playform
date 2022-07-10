import { resolvers } from '@generated/type-graphql';
import { createServer } from '@graphql-yoga/node';
import { connection } from '@the-platform/persistance';
import { unstable_getServerSession } from 'next-auth/next';
import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import { authOptions } from './auth/[...nextauth]';

const schema = buildSchemaSync({ resolvers, emitSchemaFile: true });

const server = createServer({
  schema,
  endpoint: '/api/graphql',
  context: async ({ req, res }) => {
    const session = await unstable_getServerSession(req, res, authOptions);

    const userEmail = session?.user?.email;
    // Throw if invalid
    if (!userEmail) {
      throw new Error('Not authenticated');
    }
    return { prisma: connection, currentUserEmail: userEmail };
  },
  // graphiql: false // uncomment to disable GraphiQL
});

export default server;
