import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const Habits = ({ habits, onIncrement, onDecrement, onDelete, onAdd, onReset }) => {
  return (
    <div className="habits">
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
