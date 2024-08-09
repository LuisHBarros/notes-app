import { Either, left, right } from "@/core/either";
import { UseCaseError } from "@/core/errors/use-case-error";
import { Color } from "../../entities/color";
import { Note } from "../../entities/note";
import { NoteRepository } from "../repository/note-repository";
import { AlreadyExistsError } from "@/core/errors/errors/already_exists";

interface CreateNoteDTO {
	title: string;
	description: string;
	fav: boolean;
	color: Color;
	file: string;
	user_id: string;
}

type CreateNoteResponse = Promise<Either<UseCaseError, Note>>;

export class CreateNote {
	constructor(private noteRepository: NoteRepository) {}
	async execute({
		title,
		description,
		fav,
		color,
		file,
		user_id
	}: CreateNoteDTO): CreateNoteResponse {
		if (await this.noteRepository.findByTitle(title)) {
			return left(new AlreadyExistsError("Note already exists"));
		}
		const note = Note.create({ title, description, fav, color, file, user_id });
		await this.noteRepository.save(note);
		return right(note);
	}
}
