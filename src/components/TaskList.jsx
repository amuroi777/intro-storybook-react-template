import Task from "./Task";
import PropType from "prop-types";

export default function TaskList({ Loading, tasks }) {
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox"></span>
      <span className="glow-text">
        <span>loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  );
  if (Loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  loading: PropType.bool,
  tasks: PropType.arrayOf(Task.propType.task).isRequired,
};
TaskList.defaultProps = {
  loading: false,
};
