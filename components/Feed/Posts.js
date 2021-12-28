import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Post from "./Post";

// const posts = [
//   {
//     id: "1",
//     username: "raichevt",
//     userImg: "https://i.imgur.com/ZYL1wVc.jpg",
//     img: "https://i.imgur.com/ZYL1wVc.jpg",
//     caption: "BANG BANG!",
//   },
//   {
//     id: "2",
//     username: "BillG",
//     userImg: "https://i.imgur.com/gqWB1Le.jpg",
//     img: "https://i.imgur.com/wcdP7Ny.jpg",
//     caption: "WOOOOOO ! BABY !",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
