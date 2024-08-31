import { NextResponse } from 'next/server';
import { prismaClient } from '../../../database/database';

type UserRequestBody = {
  name: string;
  city: string;
  address: string;
  summerize: string;
};

export const POST = async (req: Request) => {
  try {
    const body: UserRequestBody = await req.json();
    const { name, city, address, summerize } = body;

    if (!body) {
        return NextResponse.json({ error: 'name, city, or addres is could not null' }, { status: 400 });
    }

      await prismaClient.place.create({
        data: {
            name: name,
            city: city,
            address: address,
            summerize: summerize
        },
      });
      console.log('User saved:', { name });
      return NextResponse.json({ message: 'User saved successfully' }, { status: 201 });

  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json({ error: 'Error saving user' }, { status: 500 });
  }
};
