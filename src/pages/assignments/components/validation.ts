import { z } from 'zod';

export const paymentSchema = z.object({
    amount: z
        .string()
        .min(1, "Amount is required")
        .refine((val) => !isNaN(Number(val)), "Amount must be a valid number")
        .transform((val) => Number(val)),
    mode: z
        .string()
        .min(1, 'Payment method is required'),
});

export type PaymentFormData = z.infer<typeof paymentSchema>;
