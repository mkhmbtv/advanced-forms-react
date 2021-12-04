import { Redirect } from "react-router-dom";
import { useResults } from "../../context/SurveyContext";

const getPoints = (results, idx) => {
  const arr = Object.values(results).slice(idx);
  const points = arr.filter((_, i) => i % 3 === 0)
    .map(p => Number(p))
    .reduce((prev, curr) => prev + curr);

  return points;
}

const getTotalPoints = (results) => {
  return Object.values(results).map((num) => Number(num))
    .reduce((prev, curr) => prev + curr);
}

const getPercentage = (results, idx) => {
  return parseInt((getPoints(results, idx) / getTotalPoints(results)) * 100);
}


const Report = () => {
  const { results } = useResults();

  if (Object.keys(results).length === 0) {
    return (
      <Redirect to='/spi' />
    );
  }

  const resultsSorted = () => {
    const res = {
      Visual: getPercentage(results, 0),
      Auditory: getPercentage(results, 1),
      Kinesthetic: getPercentage(results, 2),
    };

    const sortedRes = Object.entries(res) 
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v}), {})

    return sortedRes;
  }

  return (
    <div className='results'>
      <p>Here are your results:</p>
      <ul>
        {Object.entries(resultsSorted()).map(([key, val]) =>
          <li key={key}>{key}: {val}%</li>
        )}
      </ul>
    </div>
  )
};

export default Report;