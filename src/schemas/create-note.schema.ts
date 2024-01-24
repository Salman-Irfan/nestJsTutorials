import * as joi from 'joi';

export const createNoteSchema = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    id: joi.number().required(),
})