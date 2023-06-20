import {
  createAction,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState
} from '@reduxjs/toolkit';
import { RootState } from './store';

export const BOOK_FEATURE_KEY = 'book';

export const AllBooks = [
  {
    id: '1',
    name: 'Book1',
    price: '400',
    imageUrl: 'https://picsum.photos/200/300\n'
  },
  {
    id: '2',
    name: 'Book2',
    price: '700',
    imageUrl: 'https://picsum.photos/200/300\n'
  },
  {
    id: '3',
    name: 'Book3',
    price: '400',
    imageUrl: 'https://picsum.photos/200/300\n'
  },
  {
    id: '4',
    name: 'Book4',
    price: '1',
    imageUrl: 'https://picsum.photos/200/300\n'
  }
];

type Book = { id: string; name: string; price: string; imageUrl: string };

export interface BookState extends EntityState<Book> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  recentlyAddedBook: Book[];
  allBooks: Book[];
}

export const booksAdapter = createEntityAdapter<Book>();
// <Book>({
//   // Assume IDs are stored in a field other than `book.id`
//   selectId: (book) => book.id,
//   // Keep the "all IDs" array sorted based on book titles
//   sortComparer: (a, b) => a.name.localeCompare(b.name)
// });

export const bookSelector = booksAdapter.getSelectors();

export const initialBookState: BookState = booksAdapter.getInitialState({
  loadingStatus: 'not loaded',
  recentlyAddedBook: [],
  allBooks: AllBooks
});
console.log(initialBookState);

export const recentAddedData = createAction('book/recentAddedData', (books: Book) => ({
  payload: books
}));

const bookSlice = createSlice({
  name: BOOK_FEATURE_KEY,
  initialState: initialBookState,
  reducers: {
    addBooks: booksAdapter.addOne //(state, action) => state.allBooks.push(action.payload)
  },
  extraReducers: (builder) => {
    builder.addCase(recentAddedData, (state: BookState, action) => {
      state.recentlyAddedBook = action.payload as any;
    });
  }
});
export const { addBooks } = bookSlice.actions;
export default bookSlice.reducer;

export const selectBookState = (rootState: RootState): BookState =>
  rootState[BOOK_FEATURE_KEY] as BookState;

export const selectRecentBook = createSelector(selectBookState, (state) => state.recentlyAddedBook);

export const selectAllBook = createSelector(selectBookState, (state) => state.allBooks);
