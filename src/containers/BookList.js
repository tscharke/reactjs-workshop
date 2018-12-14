import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addDummyBook, fetchBooks } from '../redux/actions';
import BookListItem from '../components/BookListItem';

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <Fragment>
        <h3>Book List:</h3>
        <button onClick={this.props.addDummyBook}>Add Dummy Book</button>
        <div>{ this.props.loading ? 'Loading Books...' : null}</div>
        <div>{ this.props.error ? 'Could not load books.' : null}</div>
        <ul>
          {
            this.props.books.map((book, index) => {
              return (
                <li key={index}>
                  <BookListItem {...book}/>
                </li>
              );
            })
          }
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  loading: state.loading.books,
  error: state.errors.books
});

const mapDispatchToProps = {
  addDummyBook,
  fetchBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
