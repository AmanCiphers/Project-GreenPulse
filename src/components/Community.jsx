import React, { useState } from "react";

const CommunityPage = () => {
  const [discussions, setDiscussions] = useState([
    { id: 1, title: "How to reduce carbon footprint?", content: "Share your tips and strategies for reducing CO₂ emissions." },
    { id: 2, title: "Latest Climate Policies", content: "Discuss recent government policies related to climate change." },
  ]);
  const [newDiscussion, setNewDiscussion] = useState("");

  const addDiscussion = () => {
    if (newDiscussion.trim()) {
      setDiscussions([...discussions, { id: discussions.length + 1, title: newDiscussion, content: "New topic added by a community member." }]);
      setNewDiscussion("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Climate Change Community</h1>
      
      {/* About Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">About Our Community</h2>
        <p className="text-gray-700">
          Welcome to the Climate Change Community! We are dedicated to spreading awareness,
          sharing ideas, and taking action against climate change. Join us to make a difference!
        </p>
      </div>

      {/* Discussion Forum */}
      <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Community Discussions</h2>
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="p-4 border rounded-md">
              <h3 className="font-semibold">{discussion.title}</h3>
              <p className="text-gray-600">{discussion.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Start a new discussion..."
            value={newDiscussion}
            onChange={(e) => setNewDiscussion(e.target.value)}
          />
          <button 
            className="mt-2 w-full bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            onClick={addDiscussion}
          >
            Add Discussion
          </button>
        </div>
      </div>

      {/* Join Section */}
      <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">Join Us</h2>
        <p className="text-gray-700 mb-4">Be a part of the change. Connect with like-minded individuals.</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default CommunityPage;
