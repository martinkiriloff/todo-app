import React from "react";
import { connect } from "react-redux";
import TaskCRUD from './TaskCRUD';

import '../styles/tasks.scss';

class Tasks extends TaskCRUD {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="tasks-wrapper">

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Tasks);