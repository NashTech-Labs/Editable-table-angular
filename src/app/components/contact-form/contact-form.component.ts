import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { IContact } from '../../contact.state';
import { AddContact } from 'src/app/contact.action';

@Component({
	selector: 'contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

	// Injecting the store into our contructor
	constructor(private store: Store) { }

  // The functon we call to add a contact from the html
	public addContact(event: any) {
    const name = event.target.value;
		const contact: IContact = { name };
		
		this.store.dispatch(new AddContact(contact)); // Dispatching an event to add contact
    event.target.value = ''; // resetting the textbox
	}
}
