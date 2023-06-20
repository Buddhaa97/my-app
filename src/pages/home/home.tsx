import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import DisplayBooks from '../../components/book-test/book';
import BookDetails from '../../components/book-test/book-detail';
import { useMutation } from '@apollo/client';
import { CREATE_NEW_BOOK } from '../../graphql/mutation';
import { GET_All_BOOKS } from '../../graphql/query';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { addBooks, recentAddedData, selectAllBook, selectRecentBook } from '../../redux/book-slice';
const Home = () => {
  const dispatch = useAppDispatch();
  const [itemId, setItemId] = useState('');
  const handleOnCLick = (id: string) => {
    setItemId(id);
  };
  const [addBook, { data }] = useMutation(CREATE_NEW_BOOK);
  const recent = useAppSelector(selectRecentBook);
  const all = useAppSelector(selectAllBook);
  console.log('======', recent);
  console.log('======>>>>>>>>>', all);

  useEffect(() => {
    if (data) {
      dispatch(recentAddedData(data.createBook));
      dispatch(addBooks({ id: '5', name: 'buddha', price: '10', imageUrl: 'image-url' }));
    }
  }, [data]);

  return (
    <>
      <Header />
      <h2>Home</h2>
      <div className="appBody">
        {!itemId ? <DisplayBooks onClick={handleOnCLick} /> : <BookDetails id={itemId} />}
      </div>
      <button
        onClick={() =>
          addBook({
            variables: {
              name: 'somthing',
              imageUrl: 'https://picsum.photos/200/300\n',
              price: 20
            },
            refetchQueries: [GET_All_BOOKS]
          })
        }>
        Add Book
      </button>
    </>
  );
};
export default Home;
