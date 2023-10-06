import Home from "./page";

const StudentInfo = () => {
    const studentName = 'Yafiet Haile';
    const courseSection = 'CPRG 306 F';
    const githubLink = 'https://github.com/yafiethaile';

    return (
        <div>
            <h1>Student Information</h1>
            <p>Name: {studentName} </p>
            <p>Course Section: {courseSection} </p>
            <p>
            GitHub Repository:{' '}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {githubLink}
        </a>
            </p>
        </div>
    );
};

export default StudentInfo;