import React from 'react';

class Pixel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const divStyle = {
            backgroundColor: this.props.color,
        }

        return (
            <div className="pixel"
                style={divStyle}
                onClick={() => this.props.onClick(this.props.pixelIndex)}
            >
            </div>
        );
    }
}

export default Pixel