import { Container } from "./style"
import { Link } from "react-router-dom"

export function ButtonText ({title, icon : Icon, ...rest}){
    return(
        <Container>
            <Link to = '/'>
            <button {...rest}>
                {Icon && <Icon size = {20}/>}
                {title}
            </button>
            </Link>
        </Container>
    )
}