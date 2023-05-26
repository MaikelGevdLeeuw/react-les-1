function Tile({ title, paragraphs, image }) {
    return (
        <div className="tile">
            {title && <h2>{title}</h2>}
            {image && <img src={image} alt="" />}
            {paragraphs && paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
    );
}

export default Tile;
