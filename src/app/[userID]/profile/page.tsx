export default function ProfilePage({ params }) {
  return (
    <div>
      <h1>Profile Page for User {params.userID}</h1>
      <p>This is the profile page for user {params.userID}.</p>
    </div>
  );
}
