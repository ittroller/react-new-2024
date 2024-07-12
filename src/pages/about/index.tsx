import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div>
      <h1>AboutPage</h1>

      <hr />

      <Link to="/">To Home</Link>
      <br />
      <Link to="/guide">To Guide</Link>
      <br />
      <Link to="/dashboard/users">To Dashboard/Users</Link>
      <br />
      <Link to="/dashboard/posts">To Dashboard/Posts</Link>
    </div>
  );
}
