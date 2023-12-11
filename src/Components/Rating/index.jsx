import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import { Container } from "./style"

export function Rating({score, ...rest}){
    const Stars = () =>{
        const starsArray = []
        const fillStar = <IoIosStar/>
        const emptyStar = <IoIosStarOutline/>

        for (let i = 1; i <= 5; i++){
            const icon = i <= score ? fillStar : emptyStar
            starsArray.push(
                <span key = {i}>{icon}</span>
            )
        }

        return starsArray
    }

    return (
        <Container>
            {Stars()}
        </Container>
    )
}