import { IContact } from "./contact.state";

export class AddContact {
	static type = '[CONTACT] AddContact';
	constructor(public readonly contact: IContact) { }
}

export class DeleteContact {
	static type = '[CONTACT] DelteContact';
	constructor(public readonly index: number) { }
}