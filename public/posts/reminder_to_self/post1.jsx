import proptypes from 'prop-types';
import {Link} from 'react-router-dom'
import Snippet from '../../../src/components/snippet';
function Post1({darkMode}){
    const stringToNumber = [
        {
           "code" :  `
const stringToNumber = function(str){
return Number(str);
}
        `,
        "id": 1
        },
        {
            "code" : `
const stringToNumber = function(str){
return +(str);
}
        `,
        "id" : 2
        },
        {
        "code" : `
const stringToNumber = function(str){
return parseInt(str);
}
       `,
        "id" : 3
    }
    ];
    const mergeArrays = [
        {
        "code" : `
function mergeArrays(a, b) {
return Array.from(new Set(a.concat(b)))
            .sort((a,b)=>a-b);
}
        ` ,
        "id" : 1
        },
        {
        "code" : `
function mergeArrays(a, b) {
return [...new Set(a.concat(b))]
        .sort((a,b)=>a-b);
}
        ` ,
        "id" : 2
        }
    ];
    const vulnerabilities = [
        {
            "id" : 1,
            "tag" : "Xss-on-chatbot",
            "img-path" : "./reminder_to_self/Screenshot_2024-02-27_12_35_50.png",
            "alt" : "HTML injection to Self-XSS inside web chatbot",
            "about" : "HTML injection and Cross Site Scripting on a webchat bot. This however is not vulnerability since no victim is involved."
        },
        {
            "id" : 2,
            "tag" : "Error-based-SQLi",
            "img-path" : "./reminder_to_self/Screenshot_2024-02-13_15_47_12.png",
            "alt" : "Error based SQLi captured in Burp Suite repeater, rendered tab",
            "about" : "An 'error based SQL injection' which turned out to be poor error handling on the PHP backend(This was revealed due to laravel syntax)."
        }
    ];
    const codewars = {
        id : 1,
        "tag" : "",
        "url" : "https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript",
        "class" : "text-red-400 truncate"
    }
    return(
        <div className="px-5 my-5 sm:px-[20%]">
        <Link to={`/posts/`} className="underline text-red-400" >/posts</Link>       
        <h1 className="text-3xl font-extrabold my-5"><b>Getting started in Tech</b></h1>

        <p>*This is just my journey, it is unnecessary for your reading*</p>
        <br></br>
        <p>Also, go listen to 
            <a href='https://darknetdiaries.com/'
             target='_blank'
             className='text-red-400'> Darknet Diaries</a>
            </p>
        <br></br>
        <p>This is just a reminder to keep upskilling and improving. It contains dates on what I did(This was written on 29Th September 2023)
        </p>
        <br></br>
        <h3 className='text-xl font-semibold'> December 2022.</h3>
        <br></br>
        <p>Was learning the about computers and got interested in programming, so I started with python (failed along the way)</p>
        <br></br>
        <h3 className='text-xl font-semibold'> January to February 2023.</h3>
        <br></br>
        <p>Learnt HTML, CSS and Javascript.
            Shout out to <a
            className='text-red-400'
            target='_blank'
            href="https://freecodecamp.org"
            > FreeCodeCamp</a> and <a
            className='text-red-400'
            target='_blank'
            href="https://w3schools.com"
            > w3schools</a>
        </p>
        <br></br>
        <h3 className='text-xl font-semibold'>March, April to May 2023.</h3>
        <br></br>
        <p>Sharpened my Javascript skills through 
        <a className='text-red-400' href='https://www.codewars.com/users/Jaarabits' target='_blank'> codewars</a>.
        This was consistenly done. I remember the first day when the
        challenge was simple 8kyu (this is termed as a simple challenge and is awarded 2 points) which was to 
        convert a string to a number. I remembered that it was the simple <code>parseInt(&lt;string_name&gt;)</code>
        . Here, you can try the 
        <a className='text-red-400' href='https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript' target='_blank'> challenge </a>
        yourself</p>
        <br></br>
        <a className='text-red-400 truncate hover:underline'
        style={{maxWidth : "100vw"}} 
        href='https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript' target='_blank'>
        https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
        </a>
        <br></br>
        <br></br>
        <p>The rush of dopamine in my brain, when I saw the webpage turn green and the message, you
            have passed all the tests. Sorry for the touching story, here are other ways to do it:
        </p>
        <br></br>
        {stringToNumber.map( elem =>
             <>
             <Snippet code={elem.code} language="javascript"></Snippet>
             <br></br>
             </>
             )}
        <br></br>
        <p>Also related, the common question on how to merge two arrays without duplicates. Here are some solutions: </p>
        <br></br>
        {/* PLACE CODE SNIPPET HERE */}
        {mergeArrays.map(elem => 
        <>
        <Snippet code={elem.code} language="javascript"></Snippet>
        <br></br>
        </>
        )}
        <br></br>
         <p>Here, you can try the 
        <a className=" text-red-400"  href='https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript' target='_blank'> challenge </a>
        yourself</p>
        <br></br>
        <a 
        href='https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript' target='_blank'
        className="text-red-400 flex-shrink-0 hover:underline" 
        >https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript</a>
        <br></br>
        <br></br>
        <h3 className='text-xl font-semibold'>August 2023</h3>
        <br></br>
        <p>Got the Javascript data structures and algorithms certification: </p>
        <a
        className='text-red-400 flex-shrink-0 hover:underline'
        href='https://www.freecodecamp.org/certification/XavierAndole/javascript-algorithms-and-data-structures'
        _target='blank'
        >
        https://www.freecodecamp.org/certification/XavierAndole/javascript-algorithms-and-data-structures
        </a>
        <br></br>
        <br></br>
        <h3 className='text-xl font-semibold'>September 2023</h3>
        <br></br>
        <p>Learnt React (8th September to 16th September)</p>
        <br></br>
        <p>Learnt Redux and Tailwind CSS (17th to 20th Spetmber)</p>
        <br></br>
        <p>This website was created using React, vite and Tailwind CSS through the days of 21 st September to 25th September 2023.
            I felt the need of integerating Redux, however the project is not big enough. Only uploaded the code to 
            <a
            className='text-red-400 flex-shrink-0 hover:underline'
            href='https://github.com/jaarabytes/jaarabytes.github.io'
            _target='blank'
            > github</a> Here is the repository link:
        </p>
        <br></br>
        <a
        className='text-red-400 flex-shrink-0 hover:underline'
        href='https://github.com/jaarabytes/jaarabytes.github.io'
        _target='blank'
        >
        https://github.com/jaarabytes/jaarabytes.github.io
        </a>
        <br></br>
        <br></br>
        <p>It's 27th September 2023 and I Got rid of windows and installed Ubuntu. Also started learning linux. I guess I'm a hacker now</p>
        <br></br>
        <h3 className='text-xl font-semibold'>October 2023</h3>
        <br></br>
        <p>Got into web2 security. Read various bug bounty and web security books.</p>
        <br></br>
        <h3 className='text-xl font-semibold'>January 2024</h3>
        <br></br>
        <p>Found some Out of scope vulnerabilities</p>
        <p>They include:</p>
        {vulnerabilities.map(elem =>
        <>
        <p>{elem.about}</p>
        <br></br>
        <img src={elem['img-path']} key={elem.id}></img>
        <br></br>
        </>
        )}
        <br></br>
        <br></br>
        <p>Installed Kali linux because why not? (24th January 2024)</p>
        <br></br>
        <p>Learnt java after the below Twitter post from a friend angered me. (27th January 2024)</p>
        <br></br>
        <p><b>Translation:</b> After you have finished studying Ruby, Javascript and Python, go back to class and learn something serious like Java</p>
        <br></br>
        <img src='./reminder_to_self/Screenshot_2024-02-27_14_55_41.png'></img>
        <br></br>
        <h3 className='text-xl font-semibold'>February 2024</h3>
        <br></br>
        <p>Deployed this static website through vercel. <b>Note: </b> Github pages does not compile React code thus when deployed to github pages, the <span
        className='text-red-400 flex-shrink-0'
        > `Strict : MIME type checking` </span>
         makes the website return a 404 error. 
        (Github pages does not understand `jsx` code)
        </p>
        <br></br>
        <p>Started learning web3 and smart contracts with hope to earn as an auditor and bug hunter for both web2 and web3 (22nd February 2024)</p>
        <br></br>
        <p>Shout out to <a className='text-red-400' href="https://www.youtube.com/c/PatrickCollins">Patrick Collins </a>,
        <a className='text-red-400' href='https://twitter.com/VittoStack' target='_blank'> Vitto</a> and the entire
        <a className='text-red-400' href='https://updraft.cyfrin.io/' target='_blank'> cyfrin updraft team</a>       . 
        They have helped me learn Solidity, smart contracts and the entire web3 network for free. They are a gem!</p>
        <br></br>
        <br></br>
        </div>
    )
}
Post1.Proptypes = {
    darkMode :  proptypes.bool.isRequired
  }

export default Post1;