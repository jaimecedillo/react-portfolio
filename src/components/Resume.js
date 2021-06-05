import React from 'react';
import myResume from '../assets/Resume.pdf'

function Resume() {

    return (
        <embed src={myResume} type="application/pdf" height="1000px" width="700px" />
    );
}

export default Resume;