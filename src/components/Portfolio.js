import React from 'react';
import '../../src/style/cards.css';
import projects from '../projects.json'

function Portfolio() {
    return (
        <div>
            <h1 className="title">Portfolio</h1>
            <div className="wrapper">
                {projects.map((project) => (

                    <div className="card">
                        <div className="img-container">
                            <img alt={project.name} src={project.image} />
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <strong>{project.name}</strong>
                                </li>
                                <li>
                                    <a href={project.repository} target="_blank" className="link"><strong>Repository Link</strong></a>
                                </li>
                                <li>
                                    <a href={project.application} target="_blank" className="link"><strong>Application Link</strong></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;