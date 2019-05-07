import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import Task from './Task';

function Tasks(props){
  return (
    <div>
      <style jsx>{`>
        .pageTitle {
          font-size: 30px;
          margin-top: 2%;
          color: darkgreen;
        }

        .page-content {
          width: 100%;
          min-height: 100vh;
          position: absolute;
          padding-left: 10%;
          background-color: beige;
          color: darkgreen;
        }

        .parentColumn {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          width: 80%;
        }

        .column {
          height: 12vh;
          width: 25vw;;
          margin: 2px 2px 2px 2px;
          padding: 5px 5px 5px 5px;
          border: 2px solid black;
          border-radius: 4px;
          border-color: darkgreen;
          background-color: white;
          font-size: 18px;
        }

      `}
      </style>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div className="page-content">
          <h1 className="pageTitle">TASKS</h1>
          <div>
            <button type="button" className="button-main"><Link className="link" to="/addtask">ADD TASK</Link></button>
            <button type="button" className="button-main"><Link className="link" to="/searchtasks">SEARCH TASKS</Link></button>
            <br></br><br></br>
          </div>
          <div className="parentColumn">
            {Object.keys(props.tasks).map(function(taskId) {
              var task = props.tasks[taskId];
              return <div className="column" key={taskId}>
                <div>
                  <Task taskDescription={task.taskDescription}
                    taskPlannedStartDateTime={task.taskPlannedStartDateTime}
                    taskId={task.taskId}
                    key={taskId}/>
                </div>
                <div>
                  <button onClick={() => {props.onTaskSelection({taskId}, {task});}} type="button" className="button-main"><Link className="link" to="/deletetask">DELETE</Link></button>
                  <button onClick={() => {props.onTaskSelection({taskId}, {task});}} type="button" className="button-main"><Link className="link" to="/edittask">UPDATE</Link></button>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.object,
  onTaskSelection: PropTypes.func
};

export default Tasks;
