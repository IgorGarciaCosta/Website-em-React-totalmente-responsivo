import React, {useState} from 'react'
import {Link} from 'react-router-dom';
//rfce
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu = () =>setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/*faz o icone mudar entre barras e X com clique*/}
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3"/>
                    </Link>
                    <div className="menu-icon" onClick = {handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    {/*ul:unordered list*/}
                    <ul className={click?'nav-menu active':'nav-menu'}>{/*quando clica em um item da navbar ela some*/}
                        <li className='nav-item'>{/*li:list item*/}
                            <Link to='/' className='nav-links' inClick={closeMobileMenu}>
                                Página inicial
                            </Link>
                        </li>
                        <li className='nav-item'>{/*li:list item*/}
                            <Link to='/services' className='nav-links' inClick={closeMobileMenu}>
                                Serviços
                            </Link>
                        </li>
                        <li className='nav-item'>{/*li:list item*/}
                            <Link to='/products' className='nav-links' inClick={closeMobileMenu}>
                                Produtos
                            </Link>
                        </li>
                        <li className='nav-item'>{/*li:list item*/}
                            <Link to='/sign-up' className='nav-links-mobile' inClick={closeMobileMenu}>
                                Cadastrar
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar
