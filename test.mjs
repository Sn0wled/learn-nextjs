import {z} from 'zod'

const mySchema = z.string();

mySchema.parse('aboba')
mySchema.parse(2);