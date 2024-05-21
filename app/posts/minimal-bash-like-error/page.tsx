import Link from "next/link"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


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
                <div>
                {whatToDo.map((element, index) => (
                    <dl key={index}>
                        <li>{element}</li>
                    </dl>
                ))}
                </div>
                <p><b>Sidenote: </b> root variable partitions are where the entire operating system is installed and 
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
                <p>After regaining access, reinstall and update you grub</p>
                <p>It is stored in `/boot/grub` for legacy BIOS and `boot/efi/grub` or `/efi/grub` for UEFI</p>
                <p>Install G-parted or gnome disks</p>
                <SyntaxHighlighter language='bash' style={dark} code={`sudo apt install gparted
sudo apt install gnome-disk-utility`} />
                <p>To reinstall and update grub, we run: </p>
                <SyntaxHighlighter language='bash' style={dark} code={`sudo grub-install /dev/sdXY
#X is the disk number and Y is the partition number of EFI
sudo update grub`} />
                <p>Reboot your system and confirm if the error persists</p>
                <p>Further reading: </p>
                <div>
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