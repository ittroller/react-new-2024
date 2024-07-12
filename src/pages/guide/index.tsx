import { Link } from 'react-router-dom';

export default function GuidePage() {
  return (
    <div>
      <h1>GuidePage</h1>

      <hr />

      <Link to="/">To Home</Link>
      <br />
      <Link to="/about">To About</Link>
      <br />
      <Link to="/dashboard/users">To Dashboard/Users</Link>
      <br />
      <Link to="/dashboard/posts">To Dashboard/Posts</Link>
    </div>
  );
}
