import { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function App() {
  const [file, setFile] = useState(null);
  const QueryClient = useQueryClient();

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const getPathNameFromServer = async () => {
    let formData = new FormData();
    formData.append("profilePic", file);

    const res = await axios.post(
      "http://localhost:2000/api/getImgUrl",
      formData
    );
    console.log(res.data);
    return res.data;
  };

  const mutation = useMutation(
    async (newPost) => {
      const res = await axios.put("http://localhost:2000/api/post", newPost);
    },
    {
      onSuccess: () => {
        QueryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) {
      return (imgUrl = await getPathNameFromServer());
    }
    console.log(imgUrl);
    mutation.mutate({ profilePic: imgUrl });
  };

  // ****************
  const [id, setId] = useState(null);
  const [profile, setProfile] = useState("");

  const getName = async (e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:2000/api/update/${id}`, {
      img: profile,
    });
    console.log(res.data);
  };

  return (
    <>
      <div className="container">
        <form>
          {/* <input
            type="file"
            className="file"
            onChange={handleChange}
            accept="image/*"
          />
          <button type="submit" onClick={handleClick}>
            Upload
          </button> */}
          <input
            type="text"
            placeholder="userID"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            placeholder="profilePic"
            onChange={(e) => setProfile(e.target.value)}
          />
          <button type="submit" onClick={getName}>
            Get Name
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
