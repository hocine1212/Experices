import { useEffect, useState } from "react";
import BtnContainer from "./BtnContainer";
import Duties from "./Duties";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <section className="section loading"></section>;
  }

  const { dates, company, title, duties } = jobs[currentItem];

  return (
    <section className="section">
      <div className="title">
        <h2>experiences</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <BtnContainer
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          jobs={jobs}
        />
        {/* job-info */}
        <article className="job-info">
          <h3>{title}</h3>
          <span className="job-company">{company} </span>
          <p className="job-date">{dates}</p>
          <Duties duties={duties} />
        </article>
      </div>
    </section>
  );
};
export default App;
