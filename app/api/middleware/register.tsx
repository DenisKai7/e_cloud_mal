import { NextResponse } from 'next/server';
import { prismaClient } from "../../../lib/database/database";



type UserRequestBody = {
  email: string;
  password: string;
};

export const logging = async (request: Request) => {
    if (request.method === 'POST') {
      try {

        const body: UserRequestBody = await request.json();
        const { email, password } = body;
        

        if (email && password) {
          await prismaClient.user.create({
            data: {
              email: email,
              password: password,
            },
          });
          console.log('User saved:', { email });
          return NextResponse.json({ message: 'User saved successfully' }, { status: 201 });
        } else {
          return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
        }
      } catch (error) {
        console.error('Error saving user:', error);
        return NextResponse.json({ error: 'Error saving user' }, { status: 500 });
      }
    }
  
    return NextResponse.next();
  };
  