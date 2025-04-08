import { State, Action, StateContext } from '@ngxs/store';
import { AddContact, DeleteContact } from './contact.action';



export interface IContact {
	name: string;
}

// Giving our state a model
@State<IContact[]>({
	name: 'contact',
	// defaults is optional
	defaults: [
		{ name: 'Peter Griffin' }
	]
})
export class ContactState {
	// Add contact action
	@Action(AddContact)
	addContact({ getState, setState }: StateContext<IContact[]>, { contact }: AddContact) {
    console.log('contact', contact);
		setState([...getState(), contact]);
	}

	// Delete contact action
	@Action(DeleteContact)
	deleteContact({ getState, setState }: StateContext<IContact[]>, { index }: DeleteContact) {
		setState(getState().filter((contact, i) => i !== index));
	}
}
