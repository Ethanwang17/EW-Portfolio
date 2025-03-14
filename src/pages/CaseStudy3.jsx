import React from 'react';

const CaseStudy3 = () => {
  return (
    <div className="case-study">
      <header className="case-study-header">
        <h1>Project Title 3</h1>
        <p className="project-brief">Brief project description</p>
      </header>

      <section className="project-details">
        <div className="overview">
          <h2>Overview</h2>
          <p>Project overview and context</p>
        </div>

        <div className="challenge">
          <h2>Challenge</h2>
          <p>Problem statement and objectives</p>
        </div>

        <div className="solution">
          <h2>Solution</h2>
          <p>How you solved the problem</p>
        </div>

        <div className="results">
          <h2>Results</h2>
          <p>Outcomes and impact</p>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy3;