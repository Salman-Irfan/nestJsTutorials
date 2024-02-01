import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true,
})

export class Note {
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    description: string
}


// document
export type NoteDocument = Note & Document

// schema factiry
export const NoteSchema = SchemaFactory.createForClass(Note)

// Note name
export const NOTE_MODEL = Note.name; // Note