import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
    renderImage = () => {
        return this.props.imageList.map((item) => {
            return (
                <button
                    className="mx-3 btn btn-light"
                    key={item.name}
                    onClick={() => { this.props.getImageChoice(item.name) }}>
                    <img style={{ width: 40, height: 50 }} src={item.image} alt="" />
                </button >
            )
        })
    };
    render() {
        let imageChoice = this.props.imageList.find((item) => item.status === true)

        return (
            <div className="player">
                <div className="thinking">
                    <img className="mt-4" style={{ width: 50, height: 50 }} src={imageChoice.image} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <br />
                <img style={{ width: 200 }} src="./oantuti_image/player.png" alt="" />
                <br />

                <div>
                    {this.renderImage()}
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        imageList: state.oantutiReducer.imageList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getImageChoice: (name) => {
            const action = {
                type: "CHOICE",
                payload: name,
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);
