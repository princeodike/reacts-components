
import './UserCard.css';

function UserCard({ name, email, occupation, image }) {
  return (
    <div className="user-card">
      <img
        src={image}
        alt={name}
        className="user-image"
      />

      <div className="user-info">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Occupation:</strong> {occupation}</p>
      </div>
    </div>
  );
}

export default UserCard;
