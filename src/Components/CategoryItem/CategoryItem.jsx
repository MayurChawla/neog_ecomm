import "./categoryItemStyle.css"


function CategoryItem({item}) {
    return(
        <div className="categoryItem">
            <div className="container">
                <img className="image" src={item.img} />
                <div className="info">
                    <h1 className="title">{item.title}</h1>
                    <button className="button">SHOP NOW!</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryItem;