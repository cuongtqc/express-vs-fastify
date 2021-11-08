```fastify vs express
1. Goto `nest-express`, run: `npm ci && npm run build && npm run start:prod`
2. Goto `nest-fastify`, run: `npm ci && npm run build && npm run start:prod`
3. Change the `serverUrl` in `client/index.js` to `serverUrlExpress` for express testing, `serverUrlFastify` for fastify testing.