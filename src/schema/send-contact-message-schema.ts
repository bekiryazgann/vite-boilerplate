import {z} from "zod";

export const sendContactMessageSchema = z.object({
    username: z.string().min(2, {
        message: "Kullanıcı adı 2 karakterdan az olmamalı",
    }),
    firstName: z.string().min(2, {
        message: "Ad 2 karakterdan az olmamalı",
    }),
    lastName: z.string().min(2, {
        message: "Soyad 2 karakterdan az olmamalı",
    }),
})

export const sendContactMessageDefaultValues = {}
