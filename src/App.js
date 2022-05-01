import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointments",
      day: "May 27, 2022",
      reminder: true,
    },
    {
      id: 2,
      text: "Picking up grocery foods",
      day: "May 3rd",
      reminder: true,
    },
    {
      id: 3,
      text: "Meeting with the school",
      day: "May 10th",
      reminder: false,
    },
  ]);

  //Adding tasks
  const addTask = (task) => {
    console.log(task);
  };

  // Deleting function to erase the tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggling the reminder for the tasks
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks at the moment"
      )}
    </div>
  );
}

export default App;
