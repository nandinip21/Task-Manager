import React from 'react';
import { render } from '@testing-library/react';
import {AddTask} from '../AddTask';


test('useState mock', () => {
    const intialState = 'Initial State'
 
    React.useState = jest.fn().mockReturnValue([initialState, {}])
    
    shallow(<AddTask />)
 })

test('Add Task Page Input Testing', () => {
  render(<AddTask
    content="Task Title:"
    name="title"
    stateTask={task}
    setStateTask={setTask}
     />)
  screen.debug();
  const inputVal=screen.getByRole('textbox', {
    name: /task title:/i
  })
  expect(inputVal).toBeInTheDocument();
});