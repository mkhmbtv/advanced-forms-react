import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Question from './Question';
import { useResults } from '../../context/SurveyContext';
import './Survey.css';

const Survey = ({ survey }) => {
  const [values, setValues] = useState({});
  const [thankYouMessage, setThankYouMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const { setResults } = useResults();
  const history = useHistory();
  const location = useLocation();
 
  useEffect(() => {
    const errors = {};

    survey.questions.forEach((question, i) => {
      const value = values[i];
      if ((question.type === 'cr' && !question.optional && !value)
        || (question.type === 'mcq' && !value)
        || (question.type === 'likert' && !value)) {
        errors[i] = 'This field is required';
      }
    });

    setValidationErrors(errors);
  }, [values, survey.code, survey.questions]);

  useEffect(() => {
    console.log('VALIDATION ERRORS', validationErrors);
    console.log('VALUES', values)
  }, [validationErrors, values]);

  useEffect(() => {
    setValues({});
    setThankYouMessage('');
  }, [location]);

  const handleChange = (index) => (e) => {
    setValues({
      ...values,
      [index]: e.target.value
    });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    if (Object.keys(validationErrors).length > 0) {
      console.log('CAN\'T SUBMIT');
      return;
    }

    const surveyAnswers = {
      ...values
    };
    
    if (survey.id === 1) {
      console.log('ANSWERS', surveyAnswers);
      setThankYouMessage(survey.thankyou);
    } else if (survey.id === 2) {
      setResults({
        ...values
      });
      history.push('/report');
    }

    setValues({});
    setValidationErrors({});
  };
  
  return (
    <div className='survey'>
      <div className='survey__description'>
        <h1>{survey.name}</h1>
        <h4>{survey.description}</h4>
      </div>
      {thankYouMessage && (
        <h2 style={{color: 'green'}}>{thankYouMessage}</h2>
      )}
      <form onSubmit={onSubmit}>
        <p style={{fontWeight: 700}}>{survey.instructions}</p>
        {survey.questions.map((q, i) => 
          <Question 
            key={i}
            question={q}
            onChange={handleChange}
            value={values[i] || ''}
            id={i}
            error={validationErrors[i]}
          />
        )}
        <button disabled={thankYouMessage ? true : false}>Submit</button>
      </form>
    </div>
  );
};

export default Survey;