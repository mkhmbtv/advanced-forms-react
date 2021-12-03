import { useEffect, useState } from 'react';
import Question from './Question';
import './Survey.css';

const Survey = ({ survey }) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    console.log(values);
  }, [values]);

  const handleChange = (index) => (e) => {
    setValues({
      ...values,
      [index]: e.target.value
    });
  };
  
  return (
    <div className='survey'>
      <div className='survey__description'>
        <h1>{survey.name}</h1>
        <h4>{survey.description}</h4>
      </div>
      <form>
        <p style={{fontWeight: 700}}>{survey.instructions}</p>
        {survey.questions.map((q, i) => 
          <Question 
            key={i}
            question={q}
            onChange={handleChange}
            value={values[i] || ''}
            id={i}
          />
        )}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Survey;