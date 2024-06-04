import Link from "next/link"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function gitPullMerge () {
    return (
        <>
            <div className="my-5 sm:px-[20%] px-5 overflow-hidden">
                <Link href='/posts' className="underline text-red-400">Posts</Link>
                <h1 className="text-xl font-bold my-5">Git pull merge error</h1>
                <p className="mb-5">Yeah, we hate all git (and love it, thanks Linus T)</p>
                <p>Assume that you have a local git repository and you want to make big changes
                    which involve mostly overwriting the whole codebase. For example, you want to convert your
                    e-commerce website built using nextJS to Svelte. Most people would create a new git branch 
                    and push their Svelte version however i am not most people.
                </p>
                <p className="my-5">I had such and I wanted to add my new commits on top of my existing nextJS project, yet the two
                    had unrelated histories. When pushing: 
                </p>
                <i>
                    ! [rejected] master --&gt; non fast-forward
                    hint: updates were rejected because the tip of your current<br />
                    branch is behind its remote counterpart. if you want to integrate the remote changes
                    use `git pull` before pushing
                </i>
                <p className="my-5">You could just create a new brnach and push your changes there like a normal engineer</p>
                <p className="my-5">Or, first save your changes (the new version)</p>
                <SyntaxHighlighter style={dark}>git stash</SyntaxHighlighter>
                <p className="my-5">Then, pull the remote counterparts (assuming it is on the master branch)</p>
                <SyntaxHighlighter style={dark}>git pull origin master</SyntaxHighlighter>
                <i>You have divergent branches and need to reconcile them. You can do the following before your next pull<br />
                git config pull.rebase false #merge <br />
                git config pull.rebase true #rebase <br />
                git config pull.ff only #fast-forward-only <br />
                </i>
                <p className="my-5">My goal here is to add my commits on top of the existing commits, so i would rebase</p>
                <SyntaxHighlighter style={dark}>git rebase</SyntaxHighlighter>
                <p>You might encounter some errors, but accept incoming changes. All of this should be done in a text editor such as VsCode
                    preferably with the <span className="text-red-400">gitLens</span> extension
                </p>
                <SyntaxHighlighter style={dark}>git rebase --continue</SyntaxHighlighter>
                <p>Do this until all conflicts are solved</p>
                <p>Proceed to push the changes (assuming you are pushing to the master branch): </p>
                <SyntaxHighlighter style={dark}>git push origin HEAD:master</SyntaxHighlighter>
            </div>
        </>
    )
}