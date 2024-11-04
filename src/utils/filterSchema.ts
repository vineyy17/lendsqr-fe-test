import { z } from 'zod';

export const filterSchema = z.object({
  organization: z.string().optional().or(z.literal('')),
  username: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  date: z.date().optional().nullable(),
  phoneNumber: z
    .string()
    .regex(/^\d+$/, 'Insert a valid phone number')
    .optional()
    .or(z.literal('')),
  status: z.string().optional().or(z.literal('')),
});

export type FilterFormData = z.infer<typeof filterSchema>;
