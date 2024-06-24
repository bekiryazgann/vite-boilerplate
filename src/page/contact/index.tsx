import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import useCookie from 'react-use-cookie';

import {sendContactMessageSchema, sendContactMessageDefaultValues} from "@/schema/send-contact-message-schema";
import Form from "@/component/form";
import FormField from "@/component/form-field";
import {Button} from "@/component/ui/button";

export default function ContactPage() {
    const [contactForm, setContactForm, removeContactForm] = useCookie('form', '0')
    const form = useForm({
        resolver: zodResolver(sendContactMessageSchema),
        defaultValues: JSON.parse(contactForm ?? sendContactMessageDefaultValues)
    })

    const onSubmit = (data: any) => {
        setContactForm(JSON.stringify(data))
    }

    return (
        <div className="max-w-2xl mx-auto py-10">

            <Form form={form} onSubmit={onSubmit}>
                <FormField
                    form={form}
                    label="Kullanıcı Adı"
                    name="username"
                />
                <FormField
                    form={form}
                    label="Ad"
                    name="firstName"
                />
                <FormField
                    form={form}
                    label="Soyad"
                    name="lastName"
                />
                <Button type="submit">Sakla</Button>
                <Button variant="destructive" type="button" onClick={removeContactForm}>Sil</Button>
            </Form>
        </div>
    )
}
