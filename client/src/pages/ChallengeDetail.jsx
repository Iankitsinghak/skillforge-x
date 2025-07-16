import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChallengeById, submitChallenge } from '../api/challenges';

const ChallengeDetail = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [link, setLink] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    getChallengeById(id).then(setChallenge);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await submitChallenge(id, link);
    setMsg(res.msg || 'Submitted!');
  };

  if (!challenge) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-2">{challenge.title}</h2>
      <p className="text-gray-400 mb-4">{challenge.description}</p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <input
          className="w-full p-2 rounded bg-gray-800"
          type="url"
          placeholder="Your GitHub/GitLab Submission Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button type="submit" className="bg-purple-600 px-4 py-2 rounded">
          Submit Challenge
        </button>
        {msg && <p className="text-green-400">{msg}</p>}
      </form>
    </div>
  );
};

export default ChallengeDetail;
