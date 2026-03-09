import React from 'react';

const ResumeDownload = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/path/to/your/resume.pdf'; // Change this to your actual resume file path.
        link.setAttribute('download', 'Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <button onClick={handleDownload}>Download Resume</button>
        </div>
    );
};

export default ResumeDownload;