import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_All_BOOKS = gql`
  query {
    allBooks {
      id
      name
      price
      imageUrl
    }
  }
`;

export const GET_BOOK_BY_ID = gql`
  query ($id: ID!) {
    Book(id: $id) {
      id
      name
      price
      imageUrl
    }
  }
`;
