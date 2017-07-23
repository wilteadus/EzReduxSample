import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book){
            return <div>Select a Book to started.</div>
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>{ this.props.book.title }</div>
                <div>Pages: { this.props.book.pages }</div>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStatetoProps)(BookDetail)