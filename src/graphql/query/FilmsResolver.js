import Film from './../../component/Film'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from 'react';

const FilmsResolver = () => (
    <Query
      query={gql`
        {
            allFilms {
            id
            title
            director
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return data.allFilms.map(currentFilm => (
          <Film film={currentFilm}></Film>
        ));
      }}
    </Query>
  );
  export default FilmsResolver;