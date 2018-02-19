import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

	messages: Array<string> = [];

	constructor() { }

	addMsg(message: string) {
		this.messages.push(message);
	}

	clearMsg() {
		this.messages = [];
	}

}
