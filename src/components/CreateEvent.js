import React, { useState } from 'react'
import '../assets/css/theme-plugin.css';
import '../assets/css/theme.min.css';
// import '../assets/js/theme-plugin.js'
// import '../assets/js/theme-script.js'
import '../assets/css/ToDos.css'
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

const CreateEvent = () => {
    document.title = "Create Event"

    const [todoList, setTodoList] = useState([]);
    const [todoInput, setTodoInput] = useState('');
    const [addItemIput, setAddItemIput] = useState(true)

    const addItemtoList = (e) => {
        if (e.which === 13) {
            setTodoList((todoList) => {
                return [...todoList, { id: Date.now(), text: todoInput, isCompleted: false }]
            }
            )
            setTodoInput("");
        }

    }
    const removeItem = (id) => {
        setTodoList((todoList) => {
            return todoList.filter(item => item.id !== id)
        })
    }

    const setIsCompleted = (id) => {
        setTodoList((todoList) => {
            return todoList.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isCompleted: !item.isCompleted
                    }
                }
                return item
            })
        })
    }

    return (
        <>
            {/* preloader start */}
            <div id="ht-preloader">
                <div className="loader clear-loader">
                    <span />
                    <p>Greetings and Gratitude</p>
                </div>
            </div>
            {/* preloader end */}
            {/*hero section start*/}
            <section className="position-relative">
                <div id="particles-js" />
                <div className="container">
                    <div className="row  text-center">
                        <div className="col">
                            <h1>Create Event</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center bg-transparent p-0 m-0">
                                    <li className="breadcrumb-item"><a className="text-dark" href="/">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active text-primary" aria-current="page">Create Event</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/* / .row */}
                </div>
                {/* / .container */}
            </section>
            {/*hero section end*/}
            <div id="container" className="todo-app">

                <h1>Create Event <FaPlus className="fa-plus" onClick={() => setAddItemIput(!addItemIput)} /></h1>
                <input type="text" className={addItemIput ? `display-input` : ''} placeholder="Add New Event" onKeyPress={addItemtoList} value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
                <ul>
                    {todoList.map(item => {
                        return <li key={item.id} className={item.isCompleted ? `completed` : ''} onClick={() => setIsCompleted(item.id)}>
                            <span onClick={() => removeItem(item.id)}>
                                <FaTrashAlt />
                            </span>
                            {item.text}
                        </li>
                    })}
                </ul>
            </div>
            <footer className="py-11 bg-primary position-relative mt-5" data-bg-img="./images/bg/03.png">
                <div className="shape-1" style={{ height: '150px', overflow: 'hidden' }}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                    </svg>
                </div>
                <div className="container mt-11">
                    <div className="row text-white text-center mt-8">
                        <div className="col">
                            <hr className="mb-8" />Copyright <u><a className="text-white" href="/">Greetings and Gratitude
</a></u> | All Rights
Reserved</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default CreateEvent
