import React from "react";
import { Link } from "react-router-dom";
import Snippet from "/src/components/snippet";
import NextPost from "/src/components/nextPost";

function Post3({darkMode}){
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
            {/* ADD MIKE's IMAGE HERE */}
            <img src="./minimal_bash_like/FY3tF38XEAAUiZF.jpeg"
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
            <p>Here is how you solve it: </p>
            <br></br>
            <p>At the command line, type in the command <span className="text-red-400">`ls`</span>.
                This lists all partitions in your system. Your results should be similar to this: 
            </p>
            <br></br>
            <Snippet darkMode={darkMode}
            code={`grub> ls
(hd0) (hd0,msdos5) (hd0,msdos3) (hd0,msdos2) (hd0,msdos1) (hd1) (hd1,msdos1)
`
            }
            language="Bash"
            ></Snippet>
            <br></br>
            <br></br>
            <p>Now, we need to find out which partition contains our Linux Operating System so that we can boot from that partition.
                We also set root and prefix to that partition. Root variable partitions are where the entire operating System is installed and 
                prefix variable partitions are where GRUB is installed.
            </p>
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
                <Snippet darkMode={darkMode}
            code={`grub> ls
#This lists all partitions of your system
(hd0) (hd0,msdos5) (hd0,msdos3) (hd0,msdos2) (hd0,msdos1) (hd1) (hd1,msdos1)

grub> ls (hd0,msdos1)
#Let us assume this is the partition containing the system files

grub> set root=(hd0,msdos1)
#Setting this particular partition as root

grub> set prefix=(hd0,msdos1)/boot/grub
#Setting this partition as the prefix

grub> insmod normal

grub> normal
                `
            }
            language="Bash"
            ></Snippet>
            <br></br>
            <p>Basically: </p>
            <br></br>
            <img src="./minimal_bash_like/FY35CpFX0AI88iU.jpeg"></img>
            <br></br>
            <br></br>
            <img src="./minimal_bash_like/FY35L0XX0AE-fdP.png"></img>
            <br></br>
            <p>This should be your last try, in case the others failed: </p>
            <br></br>
            <img src="./minimal_bash_like/FY35R0fX0AASODJ.png"></img>
            <br></br>
            <p>Once you have gained access to your Operating System, it is time to reinstall and update your GRUB.</p>
            <br></br>
            <p>The GRUB of all Linux based Operating Systems is
                 stored in <span className="text-red-400">`/boot/grub`</span> if the system uses Legacy BIOS 
                 and <span className="text-red-400">`/EFI/grub`</span> (or) <span className="text-red-400">`/boot/EFI/grub` </span>in case of UEFI.</p>
            <br></br>
            <br></br>
            <img src="./minimal_bash_like/FY37XV2WYAIZmB3.jpeg"></img>
            <br></br>
            <p>We will now do a <span className="text-red-400">`sudo grub-install /dev/sdXY`</span> and <span className="text-red-400">`sudo update-grub` </span>
             where X is disk number and Y is partition number of EFI partition. You can check that by using your partition editor, Gnome Disks or G-Parted</p>
             <br></br>
             <p>Here are the commands: </p>
            <br></br>
            <Snippet darkMode={darkMode}
            code={`sudo apt install gparted
sudo apt install gnome-disk-utility
sudo grub-install /dev/sda1
sudo update-grub
                `
            }
            language="Bash"
            ></Snippet>
             <br></br>
             <p>For me, I install it in <span
            className="text-red-400"
            >`/dev/sda`</span>. Now, reboot your system to check if the error persists. </p>
            <br></br>
            <img src="./minimal_bash_like/FY3-CiPX0AAwol1.jpeg"></img>
            <br></br>
            <p>Thanks for reading this you supreme being. I was inspired by  
            <a
            target="_blank"
            className="text-red-400"
            href="https://twitter.com/Known_Mike"
            > `@known_mike`</a>. Here is the specific post: 
            </p>
            <br></br>
            <a
            className="text-red-400 hover:underline"
            href="https://twitter.com/Known_Mike/status/1553180270815223809"
            target="_blank"
            >
                https://twitter.com/Known_Mike/status/1553180270815223809
            </a>
            <br></br>
            <br></br>
            <NextPost />
        </div>
        
        </>
    )
}
export default Post3;