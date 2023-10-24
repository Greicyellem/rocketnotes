import {RiShutDownLine} from 'react-icons/ri'
import {Container,Profile, Logout} from './styles'

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/greicyellem.png"
                alt="Foto"/>
                <div>
                    <span>
                        Bem-vindo
                    </span>
                    <strong>Greicyellem</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
            </Container>
    )
}

