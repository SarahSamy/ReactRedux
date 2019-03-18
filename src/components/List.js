import React from 'react';
import {connect} from 'react-redux';
import TaskCard from './card';

const TasksList = props => {
    console.log(props)
    return (
        <>
        <h3>>>ToDo Tasks</h3>
            {
                props.data.filter(t => !(t.completed || t.deleted)).map(t =>
                    <TaskCard key={t.id} text={t.text} id={t.id} />
                )}

        </>
    )
}

const mapStateToProps = state => ({
    data: state.data,
});

export default connect(mapStateToProps)(TasksList);