
function StudentProfile() {
  const student = {
    fullName: "Prince Odike",
    age: 25,
    course: "Backend Development",
    school: "CareerEx",
    description: "I am a passionate technology enthusiast interested in software development, learning new technologies, and solving problems."
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-avatar">
          {student.fullName.charAt(0)}
        </div>
        <h2>{student.fullName}</h2>
        <p>Student Profile</p>
      </div>

      <div className="profile-details">
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>School:</strong> {student.school}</p>

        <div className="description">
          <strong>About Me:</strong>
          <p>{student.description}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
