import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTodo, deleteTodo, finishTodo} from "../../actions/toDoList";
import "./Todo.css";

const Todo = () => {
  const todoList = useSelector((state) => state.todo);
  // useSelector là một hook giúp lấy state từ store
  const dispatch = useDispatch();
  console.log(todoList);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.content.value);
    const value = e.target.elements.content.value;
    if (value !== "") {
      dispatch(createTodo(value));
    }
  };

  const handleComplete = (id) => {
    // console.log(id);
    dispatch(finishTodo(id));
  };

  const handeleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="content" id="" />
            <button type="submit">+</button>
          </form>
        </div>

        <h1>Todo</h1>
        <ul>
          {todoList.map((item, index) => {
            return (
              <li key={item.id}>
                <span className={item.completed && "todo-completed"}>
                  {item.title}
                </span>
                {item.completed ? (
                  ""
                ) : (
                  <button
                    style={{marginLeft: "10px"}}
                    onClick={() => handleComplete(item.id)}
                  >
                    Finish
                  </button>
                )}
                <button
                  style={{marginLeft: "10px"}}
                  onClick={() => handeleDelete(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todo;

//Bước 1: Tạo ra 1 action với các tyle khác nhau để thêm, xóa, cập nhật todo
//Bước 2 tạo ra  1 reducer với giá trị mặc định state ban đầu là 1 mảng data
//Bước 3 cho vào allReducers để dùng trong khắp nơi trong App
//Bước 4 sử dụng useSelector để lấy state từ store
//Bước 5 sử dụng useDispatch để gửi action đến store để thay đổi state
