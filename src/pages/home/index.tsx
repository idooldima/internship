import { useState } from "react";
import SignUp from "./auth/signUp";
import Header from "./header";
import Main from "./main";

export default function Home({ active }: any) {
    const activeAuth = (() => active === true ? <SignUp></SignUp> : console.log("fuck"))
    return (
        <div>
            <Header></Header>
            <Main></Main>
            {active && <SignUp />}
        </div>
    )
}