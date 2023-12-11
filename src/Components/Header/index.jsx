import { Container, Profile} from "./style"
import { Link } from "react-router-dom"

import { Input } from "../Input"

export function Header({placeholder}){
    return(
        <Container>
            <Link to = "/">
            <h1>RocketMovies</h1>
            </Link>
            <Input placeholder ="Pesquisar pelo título"/>
            <Profile to='/profile'>
                <div>
                    <strong>Arthur Gustavo</strong>
                    <button>Sair</button>
                </div>
                <img src="https://github.com/th3gust.png" alt="Foto do usuário" />
            </Profile>

        </Container>
    )
}