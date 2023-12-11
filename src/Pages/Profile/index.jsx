import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Container, Avatar, Form } from "./style"

import {ButtonText} from '../../Components/ButtonText'
import {Input} from '../../Components/Input'
import {Button} from '../../Components/Button'


export function Profile (){
    return (
        <Container>
            <header>
                <ButtonText icon = {FiArrowLeft} title = "Voltar"/>
            </header>
            <main>
                <Avatar>
                    <img src="https://github.com/th3gust.png" alt="" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id='avatar' />
                    </label>
                </Avatar>
                <Form>
                    <Input icon = {FiUser} type = "text" placeholder = "Nome"/>
                    <Input icon = {FiMail} type = "email" placeholder = "E-mail"/>
                    <Input icon = {FiLock} type = "password" placeholder = "Senha atual"/>
                    <Input icon = {FiLock} type = "password" placeholder = "Nova senha"/>
                    <Button title = "Salvar"/>
                </Form>
            </main>
        </Container>
    )
}