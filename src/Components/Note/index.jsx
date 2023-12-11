import { Container } from './style'

import { Rating } from '../Rating'
import { Tag } from '../Tag'

export function Note ({data, ...rest}){
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Rating score = {data.score}/>
            <p>{data.synopsis}</p>
            {
                data.tags && 
                    <footer>
                        {data.tags.map(tag => <Tag title = {tag.name} key={tag.id}/>)}
                    </footer>
            }

        </Container>
    )
}