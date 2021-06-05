const playSound = (elem, sound) => {
    return () => {
        console.log(elem.current, sound);
        const audioElem = elem.current;
        try {
            audioElem.src = sound.source;
            audioElem.play();
        } catch (err) {
            console.log(err);
        };
    }
};

const Tile = (props) => {
    return <button key={ props.i }
        type="button"
        className="sound"
        data-source={ props.sound.source }
        style={ { backgroundImage: "url(" + props.sound.image + ")" } }
        onClick={ playSound(props.elem, props.sound) }>
        <span className="sound-text-container">
            <span className="sound-icon"></span>
            <span className="sound-text">{ props.sound.title }</span>
        </span>
    </button>
}

export default Tile;
