import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        console.log(this.props.computer)
        return (
            <div className="computer">
                <div className="thinking">
                    <img className="mt-4" style={{ width: 50, height: 50 }} src={this.props.computer.image} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <br />
                <img style={{ width: 200 }} src="./oantuti_image/playerComputer.png" alt="" />
                <br />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        computer: state.oantutiReducer.computer
    }
}
export default connect(mapStateToProps, null)(Computer)