const AvatarCover = ({avatarUrl = "http://localhost:3000/assets/imgs/man01.png"}) => {
    return (
        <div className="w-44 h-44 p-2 rounded border-dashed border-2 border-gray-300">
            <img className="w-full h-full" src={avatarUrl} alt="AAA"/>
        </div>
    )
}

export default AvatarCover;