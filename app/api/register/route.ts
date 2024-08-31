import { NextResponse } from 'next/server';
import { prismaClient } from '../../../database/database';

type UserRequestBody = {
  email: string;
  username: string;
  password: string;
};

export const POST = async (req: Request) => {
  try {
    const body: UserRequestBody = await req.json();
    const { email, username, password } = body;

    if (!email || !password) {
        return NextResponse.json({ error: 'Missing email, or password' }, { status: 400 });
    }

      await prismaClient.user.create({
        data: {
          email: email,
          username: username,
          password: password,  
        },
      });
      console.log('User saved:', { email });
      return NextResponse.json({ message: 'User saved successfully' }, { status: 201 });

  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json({ error: 'Error saving user' }, { status: 500 });
  }
};
