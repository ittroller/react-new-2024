import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>

      <hr />

      <Link to="/about">To About</Link>
      <br />
      <Link to="/guide">To Guide</Link>
      <br />
      <Link to="/dashboard/users">To Dashboard/Users</Link>
      <br />
      <Link to="/dashboard/posts">To Dashboard/Posts</Link>
    </div>
  );
}
