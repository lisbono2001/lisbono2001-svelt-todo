/// <reference types="@sveltejs/kit" />

declare namespace App {
	interface Locals {}

	interface Platform {}

	interface Session {}

	interface Stuff {}
}

type Todo = {
	uid: string;
	created_at: Date;
	text: string;
	done: boolean;
};
