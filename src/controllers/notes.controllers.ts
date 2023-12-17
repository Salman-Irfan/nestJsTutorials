import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateNoteDTO } from '../dto';

const NOTES = [];

@Controller('/notes')
export class NotesController {
  // create a note
  @Post('/')
  addNote(@Body() createNoteDto: CreateNoteDTO) {
    try {
      NOTES.push(createNoteDto);
      return {
        success: true,
        message: 'Note added successfully',
        data: createNoteDto,
        note: NOTES,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to add note',
        error: error.message,
      };
    }
  }

  @Get('/')
  getNotes() {
    try {
      return NOTES;
    } catch (error) {
      return {
        success: false,
        message: 'Failed to retrieve notes',
        error: error.message,
      };
    }
  }
  @Get('/:id')
  getNotesByID(@Param('id') id: number) {
    return NOTES.find((note) => note.id === +id);
  }
}
