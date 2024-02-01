import { Body, Controller, Post } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { NOTE_MODEL, NoteDocument } from "src/schemas/note/note.schema";


@Controller('/api/v1')
export class NotesMongo {
    constructor(@InjectModel(NOTE_MODEL) private readonly noteModel: Model<NoteDocument>) { }

    // create a note
    @Post('/add-note')
    async addNote(@Body() noteData: any) {
        try {
            const createdNote = await this.noteModel.create(noteData);
            return {
                success: true,
                data: createdNote,
            };
        } catch (error) {
            console.log(error);
            return {
                success: false,
                error: error.message,
            };
        }
    }
}
