import React from 'react';
import '../styleDocs/Search.css';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
    };
  }
  render() {
    return (
      <div className='container'>
        <h2 className='heading'>Pokemon Finder</h2>
        <input
          className='search-label'
          type='text'
          value=''
          id='search-input'
          placeholder='Search...'
        />
        <i className='fa fa-search search-icon' />
      </div>
    );
  }
}
export default Search;
