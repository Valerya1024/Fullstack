function ProfilePic() {
    const imgUrl = "unnamed.jpg"

    const handleclick = (e) => {
        e.target.style.display = "none";
    }

    return (
        <>
        <img onClick={(e) => handleclick(e)} src={imgUrl} />
        </>
    )
}

export default ProfilePic;