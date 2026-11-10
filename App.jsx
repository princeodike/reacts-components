
import Navbar from './components/Navbar';
import StudentProfile from './components/StudentProfile';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <h1>My React Student Profile</h1>

      <StudentProfile />


      <h1>Our Users</h1>

      <div className="user-container">
        <UserCard
          name="Prince Odike"
          email="prince@example.com"
          occupation="Backend Developer"
          image="https://i.pravatar.cc/150?img=12"
        />

        <UserCard
          name="John Smith"
          email="john@example.com"
          occupation="UI/UX Designer"
          image="https://i.pravatar.cc/150?img=11"
        />

        <UserCard
          name="Mary Johnson"
          email="mary@example.com"
          occupation="Frontend Developer"
          image="https://i.pravatar.cc/150?img=47"
        />
      </div>
    </div>
  );
}

export default App;
