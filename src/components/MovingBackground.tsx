import BackgroundEffect from '../assets/background-effect.png';

type MovingBackgroundProps = {
    isFlipped?: boolean;
};

const MovingBackground: React.FC<MovingBackgroundProps> = ({ isFlipped }) => {

    return (
        <div className={`absolute moving-background -z-10 h-1/2 w-full ${isFlipped ? 'rotate-180' : 'bottom-0'}`}
            style={{
                backgroundImage: `url(${BackgroundEffect})`,
                backgroundRepeat: 'repeat-x',
                backgroundSize: 'auto 100%',
                backgroundPosition: `${isFlipped && '19%'}`,
                animation: `${isFlipped ? 'move-right' : 'move-left'} 5s linear infinite`
            }}
        />
    );
};

export default MovingBackground;
