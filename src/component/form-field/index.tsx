import React from "react";
import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/component/ui/form";
import {Input} from "@/component/ui/input";
import {FormField as FormFieldMain} from "@/component/ui/form";
import type { UseFormReturn } from "react-hook-form";

interface FormFieldProps {
    form: UseFormReturn<any>,
    placeholder?: string,
    label: string,
    description?: string,
    name: string
}

export default function FormField({form, label, placeholder = undefined, description = undefined, name}: FormFieldProps): React.ReactNode {
    return (
        <FormFieldMain
            control={form.control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder !== undefined ? placeholder : ""} {...field} />
                    </FormControl>
                    {description !== undefined && (
                        <FormDescription>
                            {description}
                        </FormDescription>
                    )}
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}
