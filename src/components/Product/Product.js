function Product({ price, name, label, image }) {
    return (
        <article className="product">
            <span className="product-label">{label}</span>
            <img src={image} alt="" />
            <p>{name}</p>
            <h4>${price},-</h4>
        </article>
    );
}

export default Product;
