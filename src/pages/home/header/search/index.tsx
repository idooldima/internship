import { Input } from "reactstrap";
import { ReactComponent as Vector } from "../../../../assets/Vector.svg"


export default function Search() {

    return (
        <form className="search" >
            <Vector className="vector-search"></Vector>
            <Input className="input-search" type="text" placeholder="Search your product from here" />
        </form>

    )
}