import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Todo from '../Todos/Todo';

describe('A Todo component', () => {
  let component;
  const deleteHandler = jest.fn();
  const completeHandler = jest.fn();
  const todo = {
    text: 'Testing todo',
    done: false,
  };

  beforeEach(() => {
    component = render(
      <Todo
        todo={todo}
        onClickDelete={() => deleteHandler}
        onClickComplete={() => completeHandler}
      />
    );
  });

  test('display todo text and status', () => {
    const div = component.container.querySelector('div');
    expect(div).toHaveTextContent('Testing todo');
    expect(div).toHaveTextContent('This todo is not done');
  });

  test('can change the status of todo', () => {
    const button = component.getByText('Set as done');
    fireEvent.click(button);
    expect(completeHandler).toHaveBeenCalledTimes(1);
  });

  test('can delete todo', () => {
    const button = component.getByText('Delete');
    fireEvent.click(button);
    expect(deleteHandler).toHaveBeenCalledTimes(1);
  });
});
