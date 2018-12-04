import React, { Component } from 'react';
import NameRaw from './components/NameRaw';
import Name from './components/Name';
import Counter from './components/Counter';
import BookList from './containers/BookList';

class App extends Component {
  render() {
    return (
      <div>
        <Name />
        <NameRaw />
        <Counter initialValue={10} />
        <BookList />
      </div>
    );
  }
}

export default App;
