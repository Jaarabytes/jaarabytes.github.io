import { useSelector } from "react-redux";

const PostsTab = () => {
    const posts = useSelector((state) => state.posts.items)
    
    return(
        <div className=" px-5">
            <h1 className="text-3xl bold my-5">Posts:</h1>
            <div className="">
                {posts.map((elem) => (
                    <div key={elem.id} className="rounded py-5 p-3">
                        <h2 className="text-xl font-bold text-white">{elem.header}</h2>
                        <p className="text-md">{elem.date}</p>
                        <p className="text-md">{elem.read}</p>
                        <p className="text-lg">{elem.preview}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostsTab;