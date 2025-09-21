import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  return NextResponse.json({ message: 'API de waitlist funcionando!' }, { status: 200 });
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: 'E-mail é obrigatório.' }, { status: 400 });
    }

    // Usando Prisma para salvar no banco de dados
    const newEntry = await prisma.waitlistEntry.create({
      data: {
        email: email,
      },
    });

    console.log('Novo e-mail salvo no banco de dados:', newEntry);

    return NextResponse.json({ message: `Obrigado por se inscrever, ${email}!` }, { status: 201 }); // 201 = Created

  } catch (error: unknown) {
    // Tratamento de erro para e-mail duplicado
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
      return NextResponse.json({ message: 'Este e-mail já está na lista.' }, { status: 409 }); // 409 = Conflict
    }
    return NextResponse.json({ message: 'Ocorreu um erro no servidor.' }, { status: 500 });
  }
}
