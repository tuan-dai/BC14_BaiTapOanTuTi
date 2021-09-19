import React, { Component } from 'react'
import { connect } from 'react-redux';
import Computer from './computer';
import './oantuti.css'
import Player from './player';
import Result from './result';

class OanTuTi extends Component {
    render() {
        return (
            <div className="oantuti">
                <div className="text-center mt-5 row">
                    <div className="col-4">
                        <Player />
                    </div>

                    <div className="col-4">
                        <Result />
                        <button onClick={this.props.randomImage} className="btn btn-success mt-3">
                            Play Game
                        </button>
                    </div>

                    <div className="col-4">
                        <Computer />
                    </div>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        randomImage: () => {
            let count = 0
            let repeat = setInterval(() => {
                dispatch({ type: "RANDOM_IMAGE", })
                count++
                if (count > 13) {
                    clearInterval(repeat)
                    dispatch({ type: "RESULT" })
                }
            }, 50);

        }
    }
}
export default connect(null, mapDispatchToProps)(OanTuTi);
