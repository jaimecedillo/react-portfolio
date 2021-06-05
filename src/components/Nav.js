import React from 'react';

function Nav(props) {
    const tabs = ['Home', 'About', 'Blog', 'Contact'];
    return (
        <header>
            <h1>
                <a href="/">Jaime Cedillo</a>
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