import React from 'react';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

    }

    renderColors() {
        var allColors = this.props.allColors;
        var elements = [];
        let i = 0;

        for (const key in allColors) {
            if (allColors.hasOwnProperty(key)) {
                const color = allColors[key];

                const divStyle = {
                    backgroundColor: color,
                }

                let divClass = "swatch";
                if (this.props.selectedColor === key) {
                    divClass += " selected";
                }

                elements.push(
                    <div
                        key={key}
                        style={divStyle}
                        className={divClass}
                        onClick={() => this.props.onClick(key)}
                        >
                    </div>
                );

                if (++i === 8) {
                    elements.push(
                        <div class="break"></div>
                    )
                }
            }
        }
        return elements;
    }

    render() {
        var swatches = this.renderColors();
        return (
            <div className="color-picker"
            >
                {swatches}
            </div>
        );
    }
}

export default ColorPicker