import React, { useEffect, Children } from "react";
import Typography from "@mui/material/Typography";

import { useLazyGetSampleDataQuery } from "api/sample/getSampleData";

import T from "T";

const HomePage = () => {
  const [getSampleData, { data }] = useLazyGetSampleDataQuery();

  useEffect(() => {
    getSampleData();
  }, []);

  return (
    <>
      <Typography variant="h4">{T.HOME_PAGE}</Typography>
      <h2>Sample Data</h2>

      {Children.toArray(data && data.map((res) => <h6>{res.title}</h6>))}
    </>
  );
};

export default HomePage;
