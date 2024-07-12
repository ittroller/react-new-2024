import { Link } from 'react-router-dom';

export default function PostsPage() {
  return (
    <div>
      <h1>PostsPage</h1>

      <hr />

      <Link to="/">To Home</Link>
      <br />
      <Link to="/about">To About</Link>
      <br />
      <Link to="/guide">To Guide</Link>
      <br />
      <Link to="/dashboard/users">To Dashboard/Users</Link>
    </div>
  );
}
