// @ts-nocheck
import {declOfNum} from "../declOfNum/declOfNum.ts";
import {ArraySchema, Schema} from "yup";
import * as Yup from "yup";

const wordsSymbol = ['символ', 'символа', 'символов'];

export const rePhoneNumber = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/;

export const YUP_CONST = {
    required: 'Поле обязательно',
    email: 'Не email',
    phone: 'Некорректный номер телефона',
    max50: 'Максимум 50 симвона',
    min: (val: number) => `Минимум ${val} ${declOfNum(val, wordsSymbol)}`,
    max: (val: number) => `Максимум ${val} ${declOfNum(val, wordsSymbol)}`,
}

enum YupValidation {
    REQUIRED = 'required',
    MIN = 'min',
    MAX = 'max',
    EMAIL = 'email',
    REGEXP = 'matches'
}

const schemaSetMessage = (tests: any) => {
    tests.forEach((test: any) => {

        switch (test.OPTIONS?.name) {
            case YupValidation.REQUIRED: {
                test.OPTIONS!.message = YUP_CONST.required
                break;
            }
            case YupValidation.MIN: {
                const min: number = test.OPTIONS?.params?.min as number || 0

                test.OPTIONS!.message = YUP_CONST.min(min);
                break;
            }
            case YupValidation.MAX: {
                const max: number = test.OPTIONS?.params?.max as number || 0

                test.OPTIONS!.message = YUP_CONST.max(max);
                break;
            }
            case YupValidation.EMAIL: {
                test.OPTIONS!.message = YUP_CONST.email;
                break;
            }
            case YupValidation.REGEXP: {
                test.OPTIONS!.message = YUP_CONST.phone;
                break;
            }
        }
    })
}

export const parseSchema = (schema: Yup.ObjectSchema<any>): Yup.ObjectSchema<any> => {
    let objectSchema = schema

    Object.entries(objectSchema.fields).map((value) => {
        const field = value[1] as unknown as Schema

        if (field.type === "string") {
            schemaSetMessage(field.tests);
            objectSchema.fields[value[0]] = field
        }


        if (field.type === "array") {

            const fieldArray = value[1] as unknown as ArraySchema<any, any>

            Object.entries(fieldArray.innerType.fields).map((value1) => {
                const field1 = value1[1] as unknown as Schema

                schemaSetMessage(field1.tests);
            })

            objectSchema.fields[value[0]] = fieldArray
        }

    })

    return objectSchema as Yup.ObjectSchema<any>
}
