import React from "react";
import { Link } from "react-router-dom";


function Post3(){
    return (
        <>
        <div className="px-5 my-5 sm:px-[20%]">
            <Link to={`/posts/`} className="underline text-red-400" >/posts</Link> 
            <h1 className="text-3xl font-extrabold my-5">Minimal bash like error</h1>
            <p>Have you ever encountered this error before ? (It only exists for supreme beings ~ Linux users): </p>
            <br></br>
            <code>
            <i>
                Minimal bash-like editing is supported. For the first word, TAB listing is possible with possible command completions
                Anywhere else TAB is used, possible device or file completions are done. ESC anytime exists.
            </i>
            </code>
            <br></br>
            <img src="https://www.linux.org/attachments/p_20200927_185743-jpg.7356/"
             alt="Minimal bash like line editing error" 
             className="my-5"
             />
             <br></br>
             <p>Kind reminder that <a
             target="_blank"
             href="https://youtu.be/hxOApe1P9dM?si=6YQ8UxzQBNvqPI5c"
            className="hover:underline text-red-400"
             >Ubuntu</a> and <a
             href="https://youtu.be/hxOApe1P9dM?si=6YQ8UxzQBNvqPI5c"
             target="_blank"
             className="hover:underline text-red-400"
             >Linux Mint</a> aren't REAL linux distros. Just TOYS</p>
             <br></br>
             <p>This mostly happens when you install a Linux partition on your system</p>
             <br></br>
             <p>The error is caused by your system's GRUB (GRand Unified Bootloader). 
                GRUB is responsible for showing you the selection of your Operating System after booting
                </p>
            <br></br>
            <p>At the command line, type in the command <span className="text-red-400">`ls`</span>.
                This lists all partitions in your system. Your results should be similar to this: 
            </p>
            <br></br>
            <div
            className="bg-gray-800"
            style={{
                padding: "10px",
                borderRadius: "10px"
            }}
            >
            <code>
            grub&gt; ls <br></br>
            (hd0) (hd0,msdos5) (hd0,msdos3) (hd0,msdos2) (hd0,msdos1) (hd1) (hd1,msdos1)
            </code>
            </div>
            <br></br>
            <br></br>
            <p>Here comes the fun part. You will have to run each of the following set of commands on each partition: </p>
            <br></br>
            <p><b>NOTE: </b> I have used the <span
            className="text-red-400"
            >`#`</span> symbol for comments and I have used the <span
            className="text-red-400"
            >`(hd0,msdos1)`</span> partition since
            it is the partition that contains the system files multiple times.
            </p>
            <br></br>
            <div
            className="bg-gray-800"
            style={{
                padding: "10px",
                borderRadius: "10px"
            }}
            >
            <code>
            grub&gt; <b>ls</b> <br></br>
            #This lists all partitions of your system <br></br>
            (hd0) (hd0,msdos5) (hd0,msdos3) (hd0,msdos2) (hd0,msdos1) (hd1) (hd1,msdos1)
            grub&gt; <b>ls (hd0,msdos1)</b><br></br>
            #Let us assume this is the partition containing the system files <br></br>
            grub&gt; <b>set root=(hd0,msdos1)</b><br></br>
            #Setting this particular partition as root <br></br>
            grub&gt; <b>set prefix=(hd0,msdos1)/boot/grub</b><br></br>
            #Setting this partition as the prefix <br></br>
            grub&gt; <b>insmod normal</b><br></br>
            grub&gt; <b>normal</b><br></br>
            </code>
            </div>
            <br></br>
            <p>Then, reboot your system, open your terminal and run <span
            className="text-red-400"
            >`sudo update-grub`</span> then <span
            className="text-red-400"
            >`sudo grub install /dev/sda`</span>
            <br></br>
            <br></br>
            <span
            className="text-red-400"
            >`/dev/sda`</span> is used since grub will be installed at the root of the partition thus other partitions will be able to access it.
            </p>
            <br></br>
            <p>Thanks for reading this you supreme being. Don't forget to use the line  
            <span
            className="text-red-400"
            > `I use linux btw`</span> every chance that you get.
            </p>
        </div>
        </>
    )
}
export default Post3;