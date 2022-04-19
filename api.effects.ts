import { r } from '@marblejs/http';
import { mapTo, mergeMap, map } from 'rxjs/operators';
import {createArtistMiddleware} from './middlewares/user.middleware'
import { requestValidator$ } from '@marblejs/middleware-io';
import User from './services/user.service'


const {createArtist} = User;


export const api$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
     mapTo({ body: 'Hello, world!' }),
  )));

export const postUser$ = r.pipe(
    r.matchPath('/create/artist'),
    r.matchType('POST'),
    r.useEffect(req$ => req$.pipe(
        
        requestValidator$({ body: createArtistMiddleware }),
        map((req)=>({data: req.body })),
        mergeMap(({data})=>createArtist({email:data.email, name:data.name})),
		map(body => ({ body }))
      ))
      );
