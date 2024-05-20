import Link from "next/link"

export default function MinimalBashLikeError () {
    const whatToDo = ["find the partition containing linux", "set it as root and prefix"];

    return (
        <>
            <div>
                <Link href='/posts' className="underline hover:text-red-400">Posts</Link>
                <h1>Minimal bash like error</h1>
                <p>Have you ever encountered the below error (it occurs mostly on linux): </p>
                <i>
                Minimal bash-like editing is supported. For the first word, TAB listing is possible with possible command completions
                Anywhere else TAB is used, possible device or file completions are done. ESC anytime exists.
                </i>
                <p>If you however use Windows, <a
                href="https://youtu.be/hxOApe1P9dM?si=6YQ8UxzQBNvqPI5c"
                className="underline hover:text-red-400"
                target="_blank"
                >click here</a></p>
                <h2>Cause: </h2>
                <p><b>Overwritten bootloader: </b>When two partitions exist (windows and linux) one's bootloader may overwrite GRUB </p>
                <p><b>Accidental deletion: </b>You may have deleted grub configuration files eg <span className="text-red-400">`boot/grub/grub.cfg`</span> </p>
                <p></p>
                <h2>Solution: </h2>
                <p><b>GRUB</b> GRand Unified Bootloader is responsible for showing you selection of Operating system after booting</p>
                <h3>What to do?</h3>
                <>
                {whatToDo.map((element, index) => {
                    <ol key={index}>
                        <li>{element}</li>
                    </ol>
                })}
                </>
                <p><b>Sidenote: </b> root variable partitions are where the entire operating system is installed and 
                prefix variable partitions are where GRUB is installed.</p>

                {/* Add code component here, Thank you, trenches */}
                <p></p>
            </div>
        </>
    )
}