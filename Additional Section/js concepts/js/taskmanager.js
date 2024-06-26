//Import

import {formatDate} from "./utils";

 export class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(description,completed = false) {
        const task = {
            description,
            date: formatDate(new Date()),
            completed : completed,
        };
        this.tasks.push(task);
    }
}