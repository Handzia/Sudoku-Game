import React from 'react';
import './css/Tile.css';


class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tileValue: this.props.tile
        };
    }
    render(){
        return(
            <div className="Tile">
                {this.state.tileValue}
            </div>
        )
    }    
};

export default Tile;