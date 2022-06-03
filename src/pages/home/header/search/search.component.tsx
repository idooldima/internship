import { Input } from 'reactstrap';
import { ReactComponent as Vector } from '../../../../assets/Vector.svg';
import './search.styles.scss';

export default function Search() {
  return (
    <form className="search">
      <Vector className="vector-search" />
      <Input className="input-search" type="text" placeholder="Search your product from here" />
    </form>
  );
}
