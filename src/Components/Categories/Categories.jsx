import "./categoriesStyle.css";
import {categories} from "../../backend/db/categoryItems";
import CategoryItem from "../CategoryItem/CategoryItem";


function Categories() {
    return(
        <div className="categories">
            <div className="container">
                {categories.map(item=>(
                    <CategoryItem item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default Categories;