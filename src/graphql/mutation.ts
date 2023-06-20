import { gql } from '@apollo/client';

export const CREATE_NEW_BOOK = gql`
  mutation ($name: String!, $price: Int!, $imageUrl: String!) {
    createBook(name: $name, price: $price, imageUrl: $imageUrl) {
      id
      name
      price
      imageUrl
    }
  }
`;

export const DELETE_BOOK_BY_ID = gql`
  mutation ($id: ID!) {
    removeBook(id: $id) {
      id
    }
  }
`;
