import { useQuery } from '@apollo/client';
import { GET_BOOK_BY_ID } from '../../graphql/query';

export interface BookDetailsProps {
  id: string;
}

const BookDetails = (props: BookDetailsProps) => {
  console.log(props.id);
  const id = props.id;
  const { data } = useQuery(GET_BOOK_BY_ID, { variables: { id } });
  console.log(data);

  return (
    <div key={id}>
      <h3>About {data?.Book?.name}</h3>
      <p>Price {data?.Book?.price}</p>
      <img width="400" height="250" alt="location-reference" src={`${data?.Book?.imageUrl}`} />
      <br />
      {/* <button onClick={() => onClick(id)}>click</button> todo with refetch */}
    </div>
  );
};

export default BookDetails;
