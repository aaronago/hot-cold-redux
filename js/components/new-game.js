import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewGameClick = this.handleNewGameClick.bind(this);
    };

    handleNewGameClick() {
        this.props.dispatch(actions.newGame());
        let guessNumber = this.props.guessArray.length;
        this.props.dispatch(actions.postNewGuessTotal(guessNumber));
    }

    render() {
        const hide = this.props.modalState ? 'hidden' : '';
        return (
            <div>
                <button
                    onClick={this.handleNewGameClick}
                    className={`modal-button ${hide}`}>New Game
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    guessArray: state.guessArray
})
export default connect(mapStateToProps)(NewGame);
