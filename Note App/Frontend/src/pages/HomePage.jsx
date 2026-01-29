import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import RateLimitedUI from '../components/RateLimitedUI';

const HomePage = () => {
  const [rateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get list of notes from backend
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/notes');
        if (response.status === 429) {
          setRateLimited(true);
          setLoading(false);
          return;
        }
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);
  
  return (
    <div className='min-h-screen'>
      <Navbar />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Your Notes</h1>
          {notes.length === 0 ? (
            <p className="text-base-content/70">No notes available.</p>
          ) : (
            <ul className="space-y-2">
              {notes.map(note => (
                <li key={note._id} className="border border-base-content/20 p-3 rounded-lg">
                  <h3 className="font-semibold">{note.title}</h3>
                  <p className="text-sm text-base-content/70">{note.content}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {rateLimited && <RateLimitedUI />}
      
    </div>
  )
}

export default HomePage
