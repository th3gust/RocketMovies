import { Container, Form, Background } from './style'
import { FiMail, FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'

export function SignIn (){
    return (
        <Container>
            <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
            <h2>Faça seu login</h2>
            <Input icon = {FiMail} placeholder = "Email"/>
            <Input icon = {FiLock} placeholder = "Senha"/>
            <Button title = "Entrar"/>
            <Link to = "/signup">
                <ButtonText title = "Criar Conta"/>
            </Link>
            </Form>
            <Background />
        </Container>
    )
}