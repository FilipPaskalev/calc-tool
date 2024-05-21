import React, { useState } from 'react';

const DayFromYearToDateCalculator: React.FC = () => {
  const [year, setYear] = useState<number | string>('');
  const [result, setResult] = useState<string>('');

  const calculateDate = () => {
    if (typeof year === 'number') {
      const date = new Date(year, 0, 1);
      setResult(date.toDateString());
    }
  };

  return (
    <div>
      <h3>Day from Year to Date</h3>
      <input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} placeholder="Enter year" />
      <button onClick={calculateDate}>Calculate</button>
      <div>{result}</div>
    </div>
  );
};

export default DayFromYearToDateCalculator;
