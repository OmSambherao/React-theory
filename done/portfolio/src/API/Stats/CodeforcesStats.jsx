import { useEffect, useState } from 'react';
import { getCFData } from './codeforces';

function CodeforcesStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCFData();
        setStats(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <div className="text-center p-4">Loading Codeforces stats...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  }

  if (!stats) {
    return null; // Or a "not found" message
  }

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Codeforces: <a href={`https://codeforces.com/profile/${stats.handle}`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{stats.handle}</a></h2>
      <p><span className="font-semibold">Rank:</span> {stats.rank} ({stats.rating})</p>
      <p><span className="font-semibold">Max Rank:</span> {stats.maxRank} ({stats.maxRating})</p>
      <p><span className="font-semibold">Problems Solved:</span> {stats.solvedCount}</p>
    </div>
  );
}

export default CodeforcesStats;