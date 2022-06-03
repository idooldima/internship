import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { openModal } from 'src/store/modals/actions';
import './joinBtn.styles.scss';

export default function JoinBtn() {
  const dispatch = useDispatch();
  const onOpenModal = () => {
    dispatch(openModal('signUp'));
  };
  return (
    <div>
      <Button onClick={onOpenModal} className="join-btn">
        Join
      </Button>
    </div>
  );
}
