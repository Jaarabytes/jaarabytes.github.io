// MAKE AN ERROR 404 PAGE, PAGE NOT FOUND THEN NAVIGATE TO HOME
const Error404 = () => {
    return(
        <div className="text-center">
            <h1 className="text-3xl font-bold py-5">ERROR!</h1>
            <h1 className="text-3xl font-bold py-5">Page not found! 😞</h1>
            <p className="text-xl py-5">The page you clicked does not exist. Still, you can head back to the <a href="/posts" className="text-red-400">posts</a> for some wholesome content</p>
        </div>
    )
}


// FIX THE HREF FOR THE POSTS
export default Error404;