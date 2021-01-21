import React from 'react';


class SearchBar extends React.Component {

    state = { term: "" }


    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.search(this.state.term);
    }

    onInputChange = (event)=>{
          this.setState({term:event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
            <div className="ui form" style={{marginTop:"1rem"}}>
                <div className="field">
                    <input value={this.state.term} onChange={this.onInputChange} type="text" id="term" placeholder="Search for Video"/>
                </div>
            </div>
            </form>
        );
    }
}
export default SearchBar;