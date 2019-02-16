import React, { Component } from 'react';
import Title from './Title';
import Author from './Author';
import Body from './Body';

class App extends Component {
  constructor() {
    super();
    this.state = { title: '', body: [], author: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: id === 'body' ? value.split(/[\r\n]+/) : value });
  }

  render() {
    const { title, author, body } = this.state;
    return (
      <div>
        <div style={style.content}>
          <div className="container">
            <Title title={title} />
            <Body body={body} />
            <Author author={author} />
          </div>
        </div>
        <div style={style.controlsContainer}>
          <div className="container" style={style.controls}>
            <div>
              <input
                placeholder="Title"
                id="title"
                type="text"
                value={title}
                onChange={this.onChange}
              />
            </div>
            <div>
              <textarea
                placeholder="Body"
                id="body"
                type="text"
                value={body.join('\n')}
                onChange={this.onChange}
              />
            </div>

            <input
              placeholder="Author"
              id="author"
              type="text"
              value={author}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  content: {
    height: '69vh',
    overflowY: 'auto',
  },
  controlsContainer: {
    borderTop: '1px solid #D1D1D1',
    height: '30vh',
  },
  controls: {
    padding: '2em',
  },
};

export default App;
