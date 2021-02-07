import Task from "./Task";

const Tasks = ({ data, onDelete, onToggle }) => {
  return (
    <>
      {data.map((data) => (
        <Task
          key={data.id}
          data={data}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
