import { Injectable, Type } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { Observable } from 'rxjs';
import { ModulabModalContext } from '../plugin/modulab/modal-context';
import { Modal } from '../plugin/modulab/modal';

@Injectable()
export class DialogService {

	private dialogComponent: DialogComponent;

	constructor( modal: Modal ) {
		this.dialogComponent = new DialogComponent( modal );
	}

	public showDialog( component: Type<any>, dialogParameters?: ModulabModalContext ): Observable<any> {
		return this.dialogComponent.showDialog( component, dialogParameters );
	}

}