import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { openModal } from "src/store/modals/actions";





export default function JoinBtn() {
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