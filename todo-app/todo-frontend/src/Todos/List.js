import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
    console.log('a');
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
    console.log('a');
  };

  return (
    <>
      {todos
        .map((todo) => (
          <Todo
            todo={todo}
            onClickComplete={onClickComplete}
            onClickDelete={onClickDelete}
          />
        ))
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;
