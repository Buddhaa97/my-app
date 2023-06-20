import { useMutation, useQuery } from '@apollo/client';
import { DELETE_BOOK_BY_ID } from '../../graphql/mutation';
import { GET_All_BOOKS } from '../../graphql/query';

export interface BooksProps {
  onClick: (id: string) => void;
}

const DisplayBooks = ({ onClick }: BooksProps) => {
  // const { data, refetch } = useQuery(GET_BOOK_BY_ID, { variables: { props.id } });

  const { data } = useQuery(GET_All_BOOKS);
  console.log('aa', data);

  const [deleteBook] = useMutation(DELETE_BOOK_BY_ID);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  const handleCLick = (id: string) => {
    deleteBook({
      variables: { id: id },
      refetchQueries: [GET_All_BOOKS]
    });
    onClick(id);
  };
  return data?.allBooks?.map(({ id, name, imageUrl }: any) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${imageUrl}`} />
      <br />
      <button onClick={() => handleCLick(id)}>Delete</button>
    </div>
  ));
};

export default DisplayBooks;
