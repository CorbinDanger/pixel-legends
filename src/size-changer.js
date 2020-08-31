import React from 'react';

class SizeChanger extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="size-changer"
            >
                <div>
                    <label>Rows:</label>
                    <input
                        type="range"
                        min="1" max="50"
                        value={this.props.rows}
                        onChange={(x) => this.props.onRowsChange(x.target.value)}
                    ></input>
                    {this.props.rows}
                </div>

                <div>

                    <label>Cols:</label>
                    <input
                        type="range"
                        min="1" max="50"
                        value={this.props.cols}
                        onChange={(x) => this.props.onColsChange(x.target.value)}
                    ></input>
                    {this.props.cols}
                </div>
            </div>
        );
    }
}

export default SizeChanger