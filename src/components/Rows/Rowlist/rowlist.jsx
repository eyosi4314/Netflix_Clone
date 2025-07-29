import React from 'react'
import Row from '../Row/row'
import requests from '../../../utils/requests'
function rowlist() {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATE MOVIES" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Row title="TV SHOWS" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default rowlist
