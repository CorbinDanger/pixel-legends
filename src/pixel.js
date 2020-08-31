import React from 'react';

class Pixel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="pixel"
                onClick={() => this.props.onClick()}
            >

            </div>
        );
    }
}

export default Pixel