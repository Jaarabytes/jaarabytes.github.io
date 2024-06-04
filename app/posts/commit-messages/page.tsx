import Link from "next/link"
import Image from "next/image"
export default function CommitMessages () {
    return (
        <>
            <div className="mt-5 sm:px-[20%] px-5 overflow-hidden">
                <Link href='/posts' className="underline text-red-400">Posts</Link>
                <h1 className="text-xl font-bold my-5">Commit messages</h1>
                <p className="mb-5">I think i love git (ThankYou Linus T)</p>
                <p>As a junior dev, you may be surprised when <span 
                className="text-red-400">#real engineers</span> write great commit messages yet yours look like garbage (yes, it is garbage)</p>
                <p>Here is a simple guide for it: </p>
                {/* CHECK HERE */}
                <dl className="my-5">It should simply involve:
                    <li>Subject heading ( less than 50 characters)</li>
                    <li>Description (mostly 72 words)</li>    
                 </dl>
                 <h3 className="my-5 font-bold">Naming conventions: </h3>
                 {namingConventions.map((element, index) => (
                    <dl key={index}>
                        <li><span className="font-bold">{element.name}</span>: {element.do}</li>
                    </dl>
                 ))}
                 <p className="my-5">For more naming conventions: </p>
                 <a href="https://www.conventionalcommits.org/en/v1.0.0/"
                 className="text-red-400 underline"
                 target="_blank">https://www.conventionalcommits.<br></br>org/en/v1.0.0/</a>
                 {/* Add gitlens, show screenshot */}
                 <h3 className="my-5">Examples of messages: (your <span 
                 className="text-red-400">`git log`</span> should tell a story)</h3>
                 {messages.map((element, index) => (
                    <dl className="mx-3 my-3" key={index}>
                        <dt className="font-bold">{element.head}</dt>
                        <dd>{element.description}</dd>
                    </dl>
                 ))}
                <p className="my-5">Write commit messages in present form eg `install stripe` <b>not</b> `installed stripe`</p>
                 <p className="my-5">Do this more often, especially with your personal projects (which you will never finish)</p>
                 <p className="my-5">Also install <span
                 className="text-red-400g"
                 >gitLens</span> VSCode extension for efficiency</p>
                 <Image
                 src='/commit-messages/gitlens.png'
                 height={300}
                 width={200}
                 alt="picture of gitLens extension in action"
                 />
                 <p className="my-5">Your git log should look like this: </p>
                 <Image
                 height={250}
                 width={500}
                 src="/commit-messages/Screenshot_2024-06-04_11_59_10.png"
                 alt="git log of commit messages"
                 ></Image>
                 <p className="my-5">Here is a great example: </p>
                 <a href="https://x.com/ronnieonly/status/1790799389578944813"
                 className="text-red-400 underline"
                 target="_blank">https://x.com/ronnieonly/<br></br>status/1790799389578944813</a>
            </div>
        </>
    )
}

const namingConventions = [{name:"chore", do: "changes that don't affect code functionality eg maintenance tasks such as updating or installing npm packages"},
{name: "feat", do: "addition of a new feature to the existing codebase"},
{name: "refactor", do: "improving structure of existing code without adding new functions or features"},
{name: "fix", do: "when you have fixed existing code bugs or errors"},
{name: "test", do: "when your commit has new or modified tests"},
{name: "docs", do: "when you change documentation"},
{name: "style", do: "when stylistic changes are made to the codebase without affetcing functionality"},
{name: "perf", do: "when you have improved performance of the codebase"},
]

const messages = [{head: "chore: install Stripe", description: "install stripe to enable payments"},
    {head:"style: fix indentition" , description: "fix indentition throughout the codebase"}
]