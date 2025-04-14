import React from 'react';
import './Task.css';
const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(task.id)}>
        {task.completed ? '✅' : '⬜'} {task.text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>❌</button>
    </div>
  );
};

export default Task;
