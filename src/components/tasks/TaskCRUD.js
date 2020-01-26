import { Component } from "react";
import { admin, auth } from 'firebase-admin';
import uuid from 'uuid/v4';

export default class Task extends Component {
    dbName = 'tasks';

    constructor(props) {
        super(props);
        this.db = admin.database();
        this.ref = this.db.ref(this.dbName);

    }

    createTask(title, description, auth) {

        const taskID = uuid();
        return this.ref.child(this.dbName).set({
            taskID: {
                title: title,
                description: description,
                userID: auth.user.id
            }
        }).push();
    }
}