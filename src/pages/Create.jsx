import { useState } from "react";

function Create({ setNgoList }) {
  const [name, setName] = useState("");
  const [postType, setPostType] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  const handleAddPost = () => {
    if (!name || !postType || !caption || !image) {
      alert("Please fill all fields!");
      return;
    }

    const newPost = {
      id: Date.now(), // Unique ID
      name,
      post: { type: postType, caption },
      image,
      user: "admin",
    };

    setNgoList((prevList) => [...prevList, newPost]);

    // Clear form fields after adding post
    setName("");
    setPostType("");
    setCaption("");
    setImage("");
  };

  return (
    <div>
      <h2>Create New NGO Post</h2>
      <input type="text" placeholder="NGO Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Post Type" value={postType} onChange={(e) => setPostType(e.target.value)} />
      <input type="text" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
}

export default Create;
