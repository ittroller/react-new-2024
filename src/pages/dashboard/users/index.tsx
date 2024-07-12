import { Link } from 'react-router-dom';

export default function UsersPage() {
  return (
    <div>
      <h1>UsersPage</h1>

      <hr />

      <Link to="/">To Home</Link>
      <br />
      <Link to="/about">To About</Link>
      <br />
      <Link to="/guide">To Guide</Link>
      <br />
      <Link to="/dashboard/posts">To Dashboard/Posts</Link>
    </div>
  );
}
