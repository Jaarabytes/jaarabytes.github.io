import Link from "next/link"

export default function GitRidOfIt () {


    return (
        <>
            <div>
                <Link href='/posts' className="underline hover:text-red-400">Posts</Link>
                <h1>Git rid of it</h1>

            </div>
        </>
    )
}