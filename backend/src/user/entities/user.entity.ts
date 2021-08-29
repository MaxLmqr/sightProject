import { Prisma } from '@prisma/client';

// 1: Define a type that includes the relation to `Post`
// const userWithPosts = Prisma.validator<Prisma.UserArgs>()({
//   include: { posts: true },
// });

// 2: Define a type that only contains a subset of the scalar fields
export const userPublicData = Prisma.validator<Prisma.UserArgs>()({
  select: {
    firstname: true,
    lastname: true,
  },
});

// 3: This type will include a user and all their posts
// type UserWithPosts = Prisma.UserGetPayload<typeof userWithPosts>;
