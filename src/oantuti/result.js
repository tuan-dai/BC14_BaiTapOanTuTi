import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        const { quote, score, match } = this.props
        return (
            <div>
                <p className="text-warning display-4 font-weight-bold">{quote}</p>
                <p className="text-primary display-4 font-weight-bold">
                    Số bàn thắng: <span className="text-light display-4 font-weight-bold">{score}</span>
                </p>
                <p className="text-primary display-4 font-weight-bold">
                    Số bàn chơi: <span className="text-light display-4 font-weight-bold">
                        {match}</span>
                </p>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        quote: state.oantutiReducer.quote,
        score: state.oantutiReducer.score,
        match: state.oantutiReducer.match,
    }
}

export default connect(mapStateToProps, null)(Result)
