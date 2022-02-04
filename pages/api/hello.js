// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient, Post, User, User_role } from '@prisma/client';

const prisma = new PrismaClient();

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
