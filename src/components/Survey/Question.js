import parse from 'html-react-parser';

const Question = ({ question, onChange, value, id }) => {
  switch (question.type) {
    case 'section': {
      return (
        <p style={{fontWeight: 700}}>{question.instructions}</p>
      )
    }
    case 'mcq': {
      return (
        <>
          <p>{question.stem}</p>
          {question.options.map((option) =>
            <div key={option.value}>
              <label>
                <input
                  name={id}
                  type='radio'
                  onChange={onChange(id)}
                  value={option.value}
                />
                {option.text}
              </label>
            </div>
          )}
        </>
      );
    }
    case 'cr': {
      if (question.lines === 1) {
        return (
          <div>
            <label>
              {question.stem}
              <input
                name={id}
                type='text'
                onChange={onChange(id)}
                value={value}
              />
            </label>
          </div>
        );
      } else {
        return (
          <div>
            <label>
              {question.stem}
              <textarea
                name={id}
                onChange={onChange(id)}
                value={value}
                rows={question.lines}
              />
            </label>
          </div>
        )
      }
    }
    case 'likert': {
      return (
        <div>
          <p>{parse(question.stem)}</p>
          <select
            name={id}
            onChange={onChange(id)}
            value={value}
          >
            <option value='' disabled>Select an answer...</option>
            <option value={1}>Strongly Disagree</option>
            <option value={2}>Disagree</option>
            <option value={3}>Neutral</option>
            <option value={4}>Agree</option>
            <option value={5}>Strongly Agree</option>
          </select>
        </div>
      )
    }
    default:
      return null;
  }

};

export default Question;