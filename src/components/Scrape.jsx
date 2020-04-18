import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { apiUtils } from '../utils/apiUtils';
import useFetch from '../hooks/useFetch.jsx';

export default function Scrape() {
  const opts = apiUtils.makeOptions('GET');
  const { response, isLoading } = useFetch('/scrape', opts);

  if (isLoading) {
    return (
      <Backdrop open={true}>
        <CircularProgress color='inherit' />
      </Backdrop>
    );
  }
  return (
    <>
      <h1>Scrapes</h1>
      {response &&
        response.map((scrape) => (
          <div key={scrape.url}>
            <p>URL: {scrape.url}</p>
            <p>Title: {scrape.title}</p>
            <p>DivCount: {scrape.divCount}</p>
            <p>BodyCount: {scrape.bodyCount}</p>
            <br />
          </div>
        ))}
    </>
  );
}
