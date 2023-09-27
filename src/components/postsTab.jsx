import { useSelector, useDispatch } from "react-redux";
import { selectPost } from "../reducers/postSlice";
import { Link } from "react-router-dom";

const PostsTab = () => {
    const posts = useSelector((state) => state.posts.items);
    const dispatch = useDispatch();

    // const handlePostClick = (postId) => {
    //     dispatch(selectPost(postId));
    // }

    return (
        <div className="px-5">
          <h1 className="text-3xl bold my-5">Posts:</h1>
          <div className="">
            {posts.map((elem) => (
              <div
                key={elem.id}
                className="rounded py-5 p-3"
              >
                <p className="text-2xl font-bold hover:text-red-700">{elem.header}</p>
                <div className="flex my-3">
                <p className="text-sm">{elem.date}</p>
                <p className="text-sm px-5">{elem.read}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default PostsTab;



