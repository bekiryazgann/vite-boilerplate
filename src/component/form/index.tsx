import type {UseFormReturn} from "react-hook-form";
import {Form as FormMain} from "@/component/ui/form"
import React from "react";

interface FormProps{
    form: UseFormReturn<any>,
    onSubmit?: (data: object) => void | undefined,
    children: React.ReactNode
}

export default function Form({form, onSubmit = undefined, children}: FormProps): React.ReactNode{
    return (
        <div>
            <FormMain {...form}>
                <form onSubmit={onSubmit !== undefined ? form.handleSubmit(onSubmit) : () => {}}
                      className="space-y-3">
                    {children}
                </form>
            </FormMain>
        </div>
    )
}
