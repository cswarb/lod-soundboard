const playSound = (elem, sound) => {
    return () => {
        console.log(elem.current, sound);
        const audioElem = elem.current;
        console.log(audioElem);

        audioElem.src = sound.source;
        audioElem.volume = 0.5;

        audioElem.addEventListener('canplaythrough', () => {
            audioElem.play();
        });
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
