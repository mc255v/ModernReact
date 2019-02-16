import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    
    //constuctor with bind inside or arrow function can be used to set 'this'
    //can also use arrow function in onSubmit={(event) => this.onFormSubmit(event)}
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;