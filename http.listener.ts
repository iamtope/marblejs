import { httpListener } from '@marblejs/http';
import { logger$ } from '@marblejs/middleware-logger';
import { bodyParser$ } from '@marblejs/middleware-body';
import { api$, postUser$ } from './api.effects';

const middlewares = [
  logger$(),
  bodyParser$(),
];

const effects = [
  api$,
  postUser$
];

export const listener = httpListener({
  middlewares,
  effects,
});