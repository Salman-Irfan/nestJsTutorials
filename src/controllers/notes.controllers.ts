import { Body, Controller, Post } from '@nestjs/common';
import { CreateNoteDTO } from '../dto';

const NOTES = [];

@Controller('/notes')
export class NotesController {
  // create a note
  @Post("/")
  addNote(@Body() createNoteDto: CreateNoteDTO) {
    NOTES.push(createNoteDto);
    return {
      success: true,
      message: "Note added successfully",
      data: createNoteDto,
      note: NOTES
    }
  }
}
