import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUser(null);
    setRepos([]);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) {
        throw new Error("User not found");
      }
      const userData = await userRes.json();
      setUser(userData);

      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      );
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        setRepos(reposData);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  [];

  return (
    <div>
      <div>
        <h1>GitHub User Search</h1>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username..."
          />
          <button>Search</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {user && (
          <div>
            <div>
              <img src={user.avatar_url} alt={user.name || user.login} />
              <div>
                <h2>{user.name || user.login}</h2>
                <p>Location: {user.location || "N/A"}</p>
                <p>Public Repos: {user.public_repos}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
