import { PrismaClient } from "@prisma/client";
import {Artist} from '../interfaces/user.interface'
const prisma = new PrismaClient();

class User {
static async createArtist(data: Artist){
    console.log('data is',data);
		await  prisma.artist.create({
			data: {
				email: data.email,
				name: data.name
			},

		})
}

}



export default User;