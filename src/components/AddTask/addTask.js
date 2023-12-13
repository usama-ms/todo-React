import { useDispatch } from 'react-redux';
import { addTask } from '/Users/mergestackemployee/todo/src/todoSlice/TasksSlice.js';

export default function AddTaskInput() {
    const dispatch = useDispatch();
  
    const handleInputKeyPress = (e) => {
      e.preventDefault();
      const newTask = e.target.elements.taskInput.value.trim();
      if (newTask !== "") {
        dispatch(addTask({ id: Date.now(), name: newTask, isCompleted: false }));
        e.target.elements.taskInput.value = '';
      }
    };
  
    return (
        <>
            <h1>My Todo</h1>
            <form onSubmit={handleInputKeyPress}>
                <input
                    name="taskInput"
                    className="add-todo-input"
                    placeholder="Input task name and then tab enter to add"
                />
            </form>
            <hr />
        </>
    );
  }


// export default function AddTaskInput({
//     setTasks,
// }) {
//     const handleInputKeyPress = (e) => {
//         e.preventDefault();
//         const newTask = e.target.elements.taskInput.value.trim();
//         if (newTask !== "") {
//             setTasks((prevTasks) => [
//                 ...prevTasks,
//                 { id: prevTasks.length + 1, name: newTask, isCompleted: false },
//             ]);
//             e.target.elements.taskInput.value = '';
//         }
//     };

    // return (
    //     <>
    //         <h1>My Todo</h1>
    //         <form onSubmit={handleInputKeyPress}>
    //             <input
    //                 name="taskInput"
    //                 className="add-todo-input"
    //                 placeholder="Input task name and then tab enter to add"
    //             />
    //         </form>
    //         <hr />
    //     </>
    // );
// }
