import { Component } from '@angular/core';
import { ContactState, IContact } from '../../contact.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { DeleteContact } from 'src/app/contact.action';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
	@Select(ContactState) contact$: Observable<IContact[]> | undefined; // We subscribe to this property in our view with the async pipe

	// Injecting the store into our contructor
	constructor(private store: Store) { }

	public deleteContact(index: number) {
		this.store.dispatch(new DeleteContact(index)); // dispatching event to our store
	}

}
