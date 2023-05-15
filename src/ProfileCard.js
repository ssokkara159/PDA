import "./index.css";

const ProfileCard = ({ title, handle, image, description }) => {
  return (
    <div className="card">
      <img className="image" src={image} alt="pda" />
      <span className="title">{title}</span>
      <span className="handle">{handle}</span>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;
