import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CityDetails({cityDetails, clearCity}) {
  console.log('city details')
  return (
    <div className="w-full flex-1 overflow-y-auto">
      {cityDetails.map(item => (
        <div key={item.id}>
          <div className='flex flex-col items-center m-4 gap-4'>
            <div className='text-xl font-bold'>
              <h1>City Details</h1>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <p>City Name:</p>
              <p className='text-center'>{item.cityName}</p>
              <p>Temperature:</p>
              <p className='text-center'>{item.temp}</p>
              <p>Temperature Type:</p>
              <p className='text-center'>{item.tempType === 'C' ? 'Celsius' : 'Fahrenheit'}</p>
            </div>
            <div className='flex justify-center '>
              <button
                type="button"
                className="btn flex-1 rounded-lg"
                onClick={() => clearCity()}
              >
                Clear City
              </button>
            </div>
          </div>

            
        </div>
      ))}
    </div>
  );
}

CityDetails.propTypes = {
  cityDetails: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      cityName: PropTypes.string,
      temp: PropTypes.number,
      tempType: PropTypes.string,
    }),
  ).isRequired,
  clearCity: PropTypes.func.isRequired,
};

export default memo(CityDetails);
