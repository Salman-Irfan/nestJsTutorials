import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNoteDTO } from '../dto';
import { JoiValidationPipe } from 'src/pipes/joi-note-validation.pipe';
import { createNoteSchema } from 'src/schemas/create-note.schema';

const NOTES = [];

@Controller('/notes')
export class NotesController {
  // create a note
  @Post('/')
  addNote(@Body(new JoiValidationPipe(createNoteSchema)) createNoteDto: CreateNoteDTO) {
    try {
      const port = process.env.APP_PORT
      console.log(port)
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
  // Update a note by ID
  @Put('/:id')
  updateNote(@Param('id') id: number, @Body() updateNoteDto: CreateNoteDTO) {
    try {
      const index = NOTES.findIndex((note) => note.id === +id);

      if (index !== -1) {
        NOTES[index] = { ...NOTES[index], ...updateNoteDto };
        return {
          success: true,
          message: 'Note updated successfully',
          data: NOTES[index],
          notes: NOTES,
        };
      } else {
        return {
          success: false,
          message: 'Note not found',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to update note',
        error: error.message,
      };
    }
  }
  // Delete a note by ID
  @Delete('/:id')
  deleteNoteById(@Param('id') id: number) {
    try {
      const index = NOTES.findIndex((note) => note.id === +id);

      if (index !== -1) {
        const deletedNote = NOTES.splice(index, 1);
        return {
          success: true,
          message: 'Note deleted successfully',
          data: deletedNote,
          notes: NOTES,
        };
      } else {
        return {
          success: false,
          message: 'Note not found',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to delete note',
        error: error.message,
      };
    }
  }
}
