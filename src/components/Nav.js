import React from 'react';

function Nav(props) {
    const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    return (
        <header>
            <h1>
                <a href="https://jaimecedillo.github.io/react-portfolio/">Jaime Cedillo</a>
            </h1>
            <nav>
                <ul className="nav nav-tabs">
                    {tabs.map(tab => (
                        <li key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                className={
                                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                }
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    );
}

export default Nav;