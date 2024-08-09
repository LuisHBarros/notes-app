import { Entity } from "@/core/entity";
import { Color } from "./color";

export interface NoteProps {
	title: string;
	description: string;
	fav: boolean;
	color: Color;
	file: string;
	user_id: string;
}

export class Note extends Entity<NoteProps> {
	get title() {
		return this.props.title;
	}
	get description() {
		return this.props.description;
	}
	get fav() {
		return this.props.fav;
	}
	get color() {
		return this.props.color;
	}
	get user_id() {
		return this.props.user_id;
	}
	get file() {
		return this.props.file;
	}
	set fav(fav: boolean) {
		this.props.fav = fav;
	}
	set color(color: Color) {
		this.props.color = color;
	}
	set file(file: string) {
		this.props.file = file;
	}
	static create(props: NoteProps, id?: string): Note {
		return new Note(props, id);
	}
}
