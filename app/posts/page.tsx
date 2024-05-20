// This is the posts tab, don't get confused bozo

export default function PostsTab () {
    const posts = [
        {
        id:1,
        header: "Git rid of it",
        path: "git-rid-of-it",
        date: "14022024",
        },
        {
        id:2,
        header: "Minimal bash-like error",
        path: "minimal-bash-like-error",
        date: "03032024",
        }
      ]
    return (
        <>
            <h1>Posts: </h1>
            <p>Some of these posts are problems i have encountered, so i put them here since i forget stuff</p>
            <div>
                {posts.reverse().map((element, index) => (
                    <>
                    <p>
                    <span key={index}>{element.date}{index < posts.length && " "}</span>
                    <a
                    className="underline hover:text-red-400"
                    href={`/posts/${element.path}`}
                    target="_blank"
                    >{element.header}
                    </a>
                    </p>
                    </>
                ))}
            </div>
        </>
    )
}