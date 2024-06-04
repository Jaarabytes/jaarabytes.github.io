import Link from "next/link"

export default function CommitMessages () {
    return (
        <>
            <div className="mt-5 sm:px-[20%] px-5 overflow-hidden">
                <Link href='/posts' className="underline text-red-400">Posts</Link>
                <h1 className="text-xl font-bold my-5">Commit messages</h1>
                <p className="mb-5">I think i love git (TY Linus T)</p>
                <i>
                
                </i>
                <p>As a junior dev, uyou may be surprised when <span 
                className="text-red-400">#real engineers</span> write great commit messages yet yours look like garbage (yes, it is garbage)</p>
                <p>Here is a simple guide for it: </p>
            </div>
        </>
    )
}