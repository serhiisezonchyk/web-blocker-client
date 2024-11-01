import { AddBlockItemDtoType } from '@/shared/api/generated';
import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Must be at least 8 char' })
      .max(100, { message: 'Must be less than 100 char' })
      .regex(/[A-Z]/, {
        message: 'Must contain one uppercase letter',
      })
      .regex(/[a-z]/, {
        message: 'Must contain one lowercase letter',
      })
      .regex(/[0-9]/, { message: 'Must contain one number' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Must contain at least one special character',
      }),
    checkPassword: z.string(),
  })
  .refine((data) => data.password === data.checkPassword, {
    message: 'Passwords do not match',
    path: ['checkPassword'],
  });
export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});
export type SignInSchemaType = z.infer<typeof signInSchema>;

export const addBlockItemSchema = z.object({
  data: z.string().min(1, 'Data is required'),
  type: z.nativeEnum(AddBlockItemDtoType),
});
export type AddBlockItemSchemaType = z.infer<typeof addBlockItemSchema>;
