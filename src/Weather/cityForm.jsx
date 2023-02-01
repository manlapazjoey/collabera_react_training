import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const CityForm = forwardRef(({ searchCity }, ref) => {
  console.log('city form');
  return (
    <form className="todo__form todo_form" onSubmit={searchCity}>
      <input ref={ref} type="text" placeholder="Search for City Name" className="todo_form__input" />
      <button type="submit" className="todo_form__btn">
        Search
      </button>
    </form>
  );
});

CityForm.propTypes = {
  searchCity: PropTypes.func.isRequired,
};

export default memo(CityForm);
