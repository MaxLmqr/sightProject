import { Prisma } from '@prisma/client';

// 2: Define a type that only contains a subset of the scalar fields
export const userPersonalData = Prisma.validator<Prisma.UserArgs>()({
  select: { id: true, email: true, firstname: true, lastname: true },
});

export type UserPersonalData = Prisma.UserGetPayload<typeof userPersonalData>;
