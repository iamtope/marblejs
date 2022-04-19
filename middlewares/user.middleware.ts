import {t} from '@marblejs/middleware-io';

export const createArtistMiddleware = t.type({
    email: t.string,
    name: t.string
})


export type Artist = t.TypeOf<typeof createArtistMiddleware>;