import { useSelector, useDispatch } from "react-redux";
import { selectPost } from "../reducers/postSlice";


const PostsTab = () => {
    const posts = useSelector((state) => state.posts.items);
    const dispatch = useDispatch();

    const handlePostClick = (postId) => {
        dispatch(selectPost(postId));
    }

    return (
        <div className="px-5">
          <h1 className="text-3xl bold my-5">Posts:</h1>
          <div className="">
            {posts.map((elem) => (
              <div
                key={elem.id}
                className="rounded py-5 p-3 hover:bg-amber-400"
                onClick={() => handlePostClick(elem.id)}
              >
                <h2 className="text-xl font-bold">{elem.header}</h2>
                <p className="text-sm">{elem.date}</p>
                <p className="text-md">{elem.read}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default PostsTab;



