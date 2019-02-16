import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }
    
    onInputChange = event => {
        this.setState({ term: event.target.value });
    };
    //callback that will be passed to child element so using arrow function because of 'this'
    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.term);
    };   
        
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;