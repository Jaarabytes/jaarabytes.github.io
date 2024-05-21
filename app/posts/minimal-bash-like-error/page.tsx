import Link from "next/link"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function MinimalBashLikeError () {
    const whatToDo = ["find the partition containing linux", "set it as root and prefix"];

    return (
        <>
            <div className="mt-5 px-[20%]">
                <Link href='/posts' className="underline text-red-400">Posts</Link>
                <h1 className="text-xl font-bold my-5">Minimal bash like error</h1>
                <p className="mb-5">Have you ever encountered the below error (it occurs mostly on linux): </p>
                <i>
                Minimal bash-like editing is supported. For the first word, TAB listing is possible with possible command completions
                Anywhere else TAB is used, possible device or file completions are done. ESC anytime exists.
                </i>
                <img src="/minimal-bash-like-error/FY3tF38XEAAUiZF.jpeg"
                 className="my-5"
                 width={600}
                 height={400}
                  alt="minimal bash like error message on laptop screen" />
                <p>If you however use Windows, <a
                href="https://youtu.be/hxOApe1P9dM?si=6YQ8UxzQBNvqPI5c"
                className="underline hover:text-red-400"
                target="_blank"
                >click here</a></p>
                <h2 className="my-3 font-bold">Cause: </h2>
                <p><b>Overwritten bootloader: </b>When two partitions exist (windows and linux) one's bootloader may overwrite GRUB </p>
                <p><b>Accidental deletion: </b>You may have deleted grub configuration files eg <span className="text-red-400">`boot/grub/grub.cfg`</span> </p>
                <p></p>
                <h2 className="my-3 font-bold">Solution: </h2>
                <p><b>GRUB</b> GRand Unified Bootloader is responsible for showing you selection of Operating system after booting</p>
                <h3>What to do?</h3>
                <div>
                {whatToDo.map((element, index) => (
                    <dl key={index}>
                        <li>{element}</li>
                    </dl>
                ))}
                </div>
                <p className="my-3"><b>Sidenote: </b> root variable partitions are where the entire operating system is installed and 
                prefix variable partitions are where GRUB is installed.</p>

                {/* Add code component here, Thank you, trenches */}
                <p>Perform the below set of commands for each partition listed: </p>
                <SyntaxHighlighter language='bash' style={dark} code={`grub> ls
#This lists all partitions of your system
(hd0) (hd0,msdos5) (hd0,msdos3) (hd0,msdos2) (hd0,msdos1) (hd1) (hd1,msdos1)

grub> ls (hd0,msdos1)
#Let us assume this is the partition containing the system files

grub> set root=(hd0,msdos1)
#Setting this particular partition as root

grub> set prefix=(hd0,msdos1)/boot/grub
#Setting this partition as the prefix

grub> insmod normal

grub> normal`}>
                </SyntaxHighlighter>
                <img src="/minimal-bash-like-error/FY35CpFX0AI88iU.jpeg" className="my-5" width={550} height={300} alt="testing with (hd0)"></img>
                <img src="/minimal-bash-like-error/FY35L0XX0AE-fdP.png" className="my-5" width={550} height={300} alt="testing with (hd0,gpt3)"></img>
                <img src="/minimal-bash-like-error/FY35R0fX0AASODJ.png" className="my-5" width={550} height={300} alt="testing with (hd0,gpt2)"></img>
                <p>After regaining access, reinstall and update you grub</p>
                <p className="mb-5">It is stored in <span className="text-red-400">`/boot/grub`</span> for legacy BIOS and <span className="text-red-400">`boot/efi/grub`</span> or 
                <span className="text-red-400">`/efi/grub`</span> for UEFI</p>
                <img src="/minimal-bash-like-error/FY37XV2WYAIZmB3.jpeg"></img>
                <p className="my-5">Install G-parted or gnome disks</p>
                <SyntaxHighlighter language='bash' style={dark} code={`sudo apt install gparted
sudo apt install gnome-disk-utility`} />
                <p className="my-5">To reinstall and update grub, we run: </p>
                <SyntaxHighlighter language='bash' style={dark} code={`sudo grub-install /dev/sdXY
#X is the disk number and Y is the partition number of EFI
sudo update grub`} />
                <img src="/minimal-bash-like-error/FY3-CiPX0AAwol1.jpeg"></img>
                <p className="mt-5">Reboot your system and confirm if the error persists</p>
                <p>Pictures used belong to twitter user <a className="text-red-400" 
                href="https://twitter.com/known_mike" target="_blank">known_mike</a></p>
                <p className="mt-5">Further reading: </p>
                <div className="mb-5">
                    <a
                    className="text-red-400 hover:underline"
                    href="https://twitter.com/Known_Mike/status/1553180270815223809"
                    target="_blank"
                    >
                    https://twitter.com/Known_Mike/status/1553180270815223809
                    </a>
                </div>
            </div>
        </>
    )
}