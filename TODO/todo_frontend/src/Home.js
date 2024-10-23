import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill, BsPencil } from 'react-icons/bs';

const Home = () => {
    const [task, setTask] = useState('');

    const [todos, setTodos] = useState([]);
    const [updatetask, setUpdatetask] = useState('');
    const [taskid, setTaskid] = useState('');
    const [showedAlert, setShowedAlert] = useState(false);

    const createTask = () => {
        axios.post('http://localhost:5000/add', { task: task.trim() })
            .then(result => {
                console.log(result.data);
                setTask('');
                // alert("Todo Added");
                axios.get('http://localhost:5000/get')
                    .then(result => setTodos(result.data))
                    .catch(err => console.log(err));
                // window.location.reload();
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        setTimeout(() => {
            if (!showedAlert) {
                // alert('You are now logged in!');
                setShowedAlert(true);
            }
        }, 500);
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const edit = (id) => {
        axios.put(`http://localhost:5000/edit/${id}`)
            .then(result => {
                console.log(result.data);
                const updatedTodos = todos.map(todo => {
                    if (todo._id === id) {
                        return { ...todo, done: !todo.done };
                    }
                    return todo;
                });
                setTodos(updatedTodos);
                // alert('Todo Updated!');
            })
            .catch(err => console.log(err));
    };

    const Update = (id, updatedTask) => {
        axios.put(`http://localhost:5000/update/${id}`, { task: updatedTask })
            .then(result => {
                console.log(result.data);
                const updatedTodos = todos.map(todo => {
                    if (todo._id === id) {
                        return { ...todo, task: updatedTask };
                    }
                    return todo;
                });
                setTodos(updatedTodos);
                setTaskid('');
                setUpdatetask('');
                // alert('Todo Updated!');
                Window.location.reload();
            })
            .catch(err => console.log(err));
    };

    const Hdelete = (id) => {
        axios.delete(`http://localhost:5000/delete/${id}`)
            .then(result => {
                console.log(result.data);
                const updatedTodos = todos.filter(todo => todo._id !== id);
                setTodos(updatedTodos);
                // alert("Todo deleted!");
            })
            .catch(err => console.log(err));
    };

    return (
        <main>
            <header className="header" style={{ width: "100%", backgroundColor: "transparent", color: "black" }}>
                <div className="container">
                    <nav>
                        <Link to="/"><h1 style={{ color: "black" }} className="logo">TodoMaster</h1></Link>
                        <ul>
                            <li>
                                <Link to="/"><a href="#" style={{ color: "black" }}>Home</a></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <h1 style={{ color: "black" }}>Todo List</h1>
                <div className='create-form'>
                    <input
                        type='text'
                        placeholder='Enter a task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        required
                    />
                    <button onClick={createTask}>ADD</button>
                </div>
            </main>
            {
                todos.length === 0 ? <div className='task'>No tasks found</div> :
                    todos.map((todo) => (
                        <div className='task' key={todo._id}>
                            <div className='checkbox'>
                                {todo.done ? <BsFillCheckCircleFill className='icon' /> :
                                    <BsCircleFill className='icon' onClick={() => edit(todo._id)} />}
                                {taskid === todo._id ?
                                    <input type='text' value={updatetask} onChange={e => setUpdatetask(e.target.value)} />
                                    :
                                    <p className={todo.done ? 'through' : 'normal'}>{todo.task}</p>
                                }
                            </div>
                            <div>
                                <span>
                                    <BsPencil size={18} style={{ marginRight: "1rem" }} className='icon' onClick={() => {
                                        if (taskid === todo._id) {
                                            Update(todo._id, updatetask);
                                        } else {
                                            setTaskid(todo._id);
                                            setUpdatetask(todo.task);
                                        }
                                    }} />
                                    <BsFillTrashFill className='icon' onClick={() => Hdelete(todo._id)} />
                                </span>
                            </div>
                        </div>
                    ))
            }
        </main>
    );
};

export default Home;
