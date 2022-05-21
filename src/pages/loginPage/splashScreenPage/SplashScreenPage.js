import React from "react";
import { ContainerSplash, ContainerImage } from "./styles";
import snack_logo from "../../../assets/snack_logo.png"


export default function SplashScreenPage() {

    setTimeout(() => {
        window.location.pathname = "/Login"
    }, 15000)

    return (
        <div>
            <ContainerSplash>
                <ContainerImage src={snack_logo} />
            </ContainerSplash>
        </div>

    )
}
;