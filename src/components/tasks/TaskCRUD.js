import { Component } from "react";
import { verifyAuth } from '../../actions/auth';
import uuid from 'uuid/v4';

export default class Task extends Component {
    dbName = 'tasks';

    constructor(props) {
        super(props);
        verifyAuth();
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