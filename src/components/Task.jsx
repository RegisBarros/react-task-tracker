import { FaTimes } from "react-icons/fa";

const Task = ({ data, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${data.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(data.id)}
    >
      <h3>
        {data.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(data.id)}
        />
      </h3>
      <p>{data.day}</p>
    </div>
  );
};

export default Task;
