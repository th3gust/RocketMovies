import { Container, Form, Background } from './style'
import { FiArrowLeft,FiUser, FiMail, FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'

export function SignUp (){
    return (
        <Container>
            <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
            <h2>Crie sua conta</h2>
            <Input icon = {FiUser} placeholder = "Email"/>
            <Input icon = {FiMail} placeholder = "Email"/>
            <Input icon = {FiLock} placeholder = "Senha"/>
            <Button title = "Cadastrar"/>
            <Link to = '/signin'>
            <ButtonText icon = {FiArrowLeft} title = "Voltar para o login"/>
            </Link>
            </Form>
            <Background />
        </Container>
    )
}