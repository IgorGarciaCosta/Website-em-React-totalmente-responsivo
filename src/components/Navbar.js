import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
//rfce
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    //essa função dez os botões sumirem se a tela ficar menor que 960px
    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    /*Esse useEffect serve pra fazer o botão "cadastrar" 
      não reaparecerao recarregar a página.
    */ 
    useEffect(()=>{
        showButton()
    }, [])
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/*faz o icone mudar entre barras e X com clique*/}
                    <Link to='/'className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-typo3"/>
                    </Link>
                    <div className="menu-icon" onClick = {handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    {/*ul:unordered list*/}
                    <ul className={click?'nav-menu active':'nav-menu'}>{/*quando clica em um item da navbar ela some*/}
                        <li className='nav-item'>{/*li:list item*/}
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Página inicial
                            </Link>
                        </li>
                        <li className='nav-item'>{/*li:list item*/}
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Serviços
                            </Link>
                        </li>
                        <li className='nav-item'>{/*li:list item*/}
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Produtos
                            </Link>
                        </li>
                        <li className='nav-item'>{/*li:list item*/}
                            <Link to='/sign-up' className='nav-links-mobile' inClick={closeMobileMenu}>
                                Cadastrar
                            </Link>
                        </li>
                    </ul>

                    {button && <Button buttonStyle='btn--outline'>CADASTRAR</Button>}
                </div>

            </nav>
        </>
    )
}

export default Navbar
