import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { openModal } from "src/store/modals/actions";
import SignUp from "../../auth/signUp";

type JoinBtnProps = { active: boolean; setActive: () => void }


export default function JoinBtn({ active, setActive }: any) {
    const dispatch = useDispatch()
    const onOpenModal = () => {
        dispatch(
            openModal("signUp")
        )
    }
    return (
        <div>
            <Button onClick={onOpenModal} className="Join-btn">Join</Button>
        </div>
    )
}