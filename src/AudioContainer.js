import React from 'react';
import SOUNDS from './sounds';
import Tile from './Tile';

class AudioContainer extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    getAudioElem() {
        return this.myRef;
    }

    render() {
        return <div className="sounds">
            {
                SOUNDS.map((sound, i) => {
                    return <Tile key={ i } sound={ sound } i={ i } elem={ this.getAudioElem() } />;
                })
            }

            {/* <footer> */}
                <audio ref={this.myRef} id="audio" src="./sounds/1.mp3"></audio>
            {/* </footer> */}
        </div>
    }
}

export default AudioContainer;
