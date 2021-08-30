import { Prisma } from '@prisma/client';

// User accessible data from another user
export const userPersonalData = Prisma.validator<Prisma.UserArgs>()({
  select: { id: true, email: true, firstname: true, lastname: true },
});

// Remove password
export const userSelfData = Prisma.validator<Prisma.UserArgs>()({
  select: {
    id: true,
    email: true,
    firstname: true,
    lastname: true,
    birthdate: true,
    location: true,
    phoneNumber: true,
  },
});

export type UserPersonalData = Prisma.UserGetPayload<typeof userPersonalData>;
export type UserSelfData = Prisma.UserGetPayload<typeof userSelfData>;
