export class Todo {
    /**
     * number, unique id of todo item
     */
    id: number;

    /**
     * string title of todo item
     */
    title: string = "";

    /**
     * boolean, is item complete
     */
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);

    }

}
