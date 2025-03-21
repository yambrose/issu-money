type MainIconProps = {
    image: string;
};

const MainIcon: React.FC<MainIconProps> = ({ image }) => {
    return <img
    
        src={image}
    />
}

export default MainIcon;