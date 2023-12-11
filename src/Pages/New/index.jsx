import { Container, Content, Form } from './style'

import { FiArrowLeft } from "react-icons/fi"


import { Header } from "../../Components/Header"
import { ButtonText } from "../../Components/ButtonText"
import { Input } from "../../Components/Input"
import { NoteItem } from "../../Components/NoteItem"
import { Button } from "../../Components/Button"

export function New (){
    return(
        <Container>
            <Header />
            <main>
                <Content>
                    <Form>
                        
                    <ButtonText title="Voltar" to = "/" icon = {FiArrowLeft} />
                    <h1>Novo filme</h1>
                    <div>
                    <Input placeholder = "Título" type = "text"/>
                    <Input placeholder = "Sua nota (de 0 a 5)" type = "Number"/>
                    <Input placeholder = "Observações" type = "textarea"/>
                    </div>
                    <h2>Marcadores</h2>
                    <div className='note-wrapper'>
                        <NoteItem value = "Terror" />
                        <NoteItem value = "Novo Marcador" isNew/>
                    </div>
                    <div className='button-wrapper'>
                    <Button className = "delete-content" title = "Excluir nota"/>
                    <Button title = "Salvar alterações"/>
                    </div>
                    </Form>
                    
                </Content>
            </main>

        </Container>
    )
}