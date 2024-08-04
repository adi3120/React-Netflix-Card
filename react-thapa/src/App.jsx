// import React from "react";
import { Fragment } from "react";

export const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};

const NetflixSeries = () => {
	const name = "House MD"
	const rating = 8.2
	const description = `Dr. Gregory House, although a medical unconventional, is very skilled
	and experienced in leading a team of medical diagnostics. He manages to
	decode the many complications that arise in the hospital.`
  return (
    <div>
      <div>
        <img src="cover.jpg" />
      </div>
      <h2>Name : {name}</h2>
      <h3>Rating : {rating}</h3>
      <p>
        {description}
      </p>
	  <button>Watch now</button>
    </div>
  );
};
