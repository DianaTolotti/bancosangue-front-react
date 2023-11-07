import React from 'react';

const BloodTypeData = ({ data }) => {
  return (
    <div>
      {Object.keys(data).map((bloodType) => (
        <div key={bloodType}>
          <ul>
            <li>
              <p>{bloodType}</p>
              <ul>
                {Object.keys(data[bloodType]).map((donor) => (
                  <li key={donor}>
                    {donor}: {data[bloodType][donor]}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BloodTypeData;