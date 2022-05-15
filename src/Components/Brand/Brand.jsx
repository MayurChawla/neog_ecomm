import "./brandStyle.css";
import {brands} from "../../backend/db/brandItems";
import CategoryItem from "../CategoryItem/CategoryItem";


function Brand() {
    return(
        <div className="brand">
            <h1>Shop By Brands</h1>
            <div className="container">
                {brands.map(item=>(
                    <CategoryItem item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default Brand;