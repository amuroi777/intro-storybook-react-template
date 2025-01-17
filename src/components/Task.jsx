import PropType from "prop-types";

export default function Task({ task: { id, title, state } }) {
  return (
    <div className={`list-item ${state}`}>
      <label htmlFor="cheked" className="checkbox">
        <input type="checkbox" name="checked" id={`archiveTask-${id}`} />
        <span className="checkbox-custom"></span>
      </label>
      <label htmlFor="title" className="title">
        <input type="text" value={title} readOnly={true} name="title" placeholder="input" />
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button className="pin-button" id={`pinTask-${id}`}>
          <span className="icon-star"></span>
        </button>
      )}
    </div>
  );
}

Task.propType = {
  task: PropType.shape({
    id: PropType.string.isRequired,
    title: PropType.string.isRequired,
    state: PropType.string.isRequired,
  }),
};
