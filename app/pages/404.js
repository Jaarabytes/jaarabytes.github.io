// This is a 404 default page bozo
import Link from "next/link"

export default function NotFoundPage () {


    return(
        <>
            <div>
                <h1>404 Page not found</h1>
                <Link href={`/`} className="text-red-400 underline">Go back home?</Link>
            </div>
        </>
    )
}