import {t} from '@marblejs/middleware-io';

export const createArtistMiddleware = t.type({
    id: t.number,
    email: t.string,
    name: t.string
})


export type Artist = t.TypeOf<typeof createArtistMiddleware>;