import React from 'react';
import '../../src/style/cards.css';

function Portfolio(props) {
    return (
        <div>
            <h1 className="title">Portfolio</h1>

            <div className="card">
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Name:</strong> {props.name}
                        </li>
                        <li>
                            <a href="{props.repository}" target="_blank"><strong>Repository Link</strong></a>
                        </li>
                        <li>
                            <a href="{props.application}" target="_blank"><strong>Application Link</strong></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;