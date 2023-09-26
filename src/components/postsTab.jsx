import { useSelector } from "react-redux";
const PostsTab = () => {
    const posts = useSelector((state) => state.posts)
    
    return(
        <div>
            <h1 className="text-3xl bold">Posts & Artcles</h1>
            <ul>
                {posts.map((elem, index) => (
                    <li key={index}>{elem}</li>
                ))}
            </ul>
        </div>
    )
}

export default PostsTab;