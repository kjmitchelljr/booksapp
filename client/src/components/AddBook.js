import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      genre: '',
      authorID: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  displayAuthors() {
    const data = this.props.data;
    if (data.loading) {
      return <option>Loading authors...</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  submitForm(e) {
    console.log(this.state);
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" name="genre" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select name="authorID" onChange={this.handleChange}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
