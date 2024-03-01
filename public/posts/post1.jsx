import Proptypes from 'prop-types';
import React from 'react';

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
            "img-path" : "./Screenshot_2024-02-27_12_35_50.png",
            "alt" : "HTML injection to Self-XSS inside web chatbot",
            "about" : "HTML injection and Cross Site Scripting on a webchat bot. This however is not vulnerability since no victim is involved."
        },
        {
            "id" : 2,
            "tag" : "Error-based-SQLi",
            "img-path" : "./Screenshot_2024-02-13_15_47_12.png",
            "alt" : "Error based SQLi captured in Burp Suite repeater, rendered tab",
            "about" : "An 'error based SQL injection' which turned out to be poor error handling on the PHP backend(This was revealed due to laravel syntax)."
        }
    ]
    return(
        <div className="px-5 my-5 sm:px-[20%]">
        <Link to={`/posts/`} className="underline text-red-400" >/posts</Link>       
        <h1 className="text-3xl font-extrabold my-5"><b>Getting started in Tech</b></h1>

        <p>*This is just my journey, it is unnecessary for your reading*</p>
        <br></br>
        <br></br>
        <p>This is just a reminder to keep upskilling and improving. It contains dates on what I did(This was written on 29Th September 2023)
        </p>
        <br></br>
        <p>Learnt HTML, CSS and Javascript during January and February 2023</p>
        <br></br>
        <p>Sharpened my Javascript skills through 
        <a className='text-red-400' href='https://www.codewars.com/users/Jaarabits' target='_blank'> codewars</a>.
        This was done everyday throughout March, April to May. I remember the first day when the
        challenge was simple 8kyu (this is termed as a simple challenge and is awarded 2 points) which was to 
        convert a string to a number. I remembered that it was the simple <code>parseInt(&lt;string_name&gt;)</code>
        . Here, you can try the 
        <a className='text-red-400 text-ellipsis' href='https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript' target='_blank'> challenge </a>
        yourself</p>
        <br></br>
        <a  className='text-red-400 truncate' 
        href='https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript' target='_blank'>https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript</a>
        <br></br>
        <br></br>
        <p>The rush of dopamine in my brain, when I saw the webpage turn green and the message, you
            have passed all the tests. Sorry for the touching story, here are other ways to do it:
        </p>
        {stringToNumber.map( elem =>
             <pre className='bg-slate-900'><code key={elem.id}>{elem.code}</code></pre>
             )}
        <br></br>
        <p>Also related, the common question on how to merge two arrays without duplicates. Here are some solutions: </p>
        <br></br>
        {mergeArrays.map(elem => 
        <pre><code key={elem.id}>{elem.code}</code></pre>
        )}
         <p>Here, you can try the 
        <a className=" text-red-400 truncate"  href='https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript' target='_blank'> challenge </a>
        yourself</p>
        <br></br>
        <a className="text-red-400 truncate"  
        href='https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript' target='_blank'
        >https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript</a>
        <br></br>
        <br></br>

        
        <p>This website was created using React, vite and Tailwind CSS through the days of 21 st September to 25th September 2023.
            I felt the need of integerating Redux, however the project is not big enough.
        </p>
        <br></br>
        <p>Got rid of windows and installed Ubuntu. Also started learning linux. I guess I'm a hacker now(It's 27th September 2023)</p>
        <br></br>
        <p>Got into web2 security.(It's 17th October 2023)</p>
        <br></br>
        <p>Found some Out of scope vulnerabilities(It's 14th January 2024)</p>
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
        <p>Learnt java after the below Twitter post from a friend angered me. (27th January 2024)</p>
        <br></br>
        <p><b>Translation:</b> After you have finished studying Ruby, Javascript and Python, go back to class and learn something serious like Java</p>
        <br></br>
        <img src='./Screenshot_2024-02-27_14_55_41.png'></img>
        <br></br>
        <p>Started learning web3 and smart contracts with hope to earn as an auditor and bug hunter for both web2 and web3 (22nd February 2024)</p>
        <p>Shout out to <a className={`${darkMode ? 'text-red-400' : 'text-red-400' } text-ellipsis}`} href="https://www.youtube.com/c/PatrickCollins">Patrick Collins </a>,
        <a className={`${darkMode ? 'text-red-400' : 'text-red-400' } text-ellipsis`} href='https://updraft.cyfrin.io/' target='_blank'> cyfrin</a> and the team. 
        They have helped me learn Solidity, smart contracts and the entire Bitcoin network</p>
        <br></br>
        </div>
    )
}
Post1.Proptypes = {
    darkMode :  Proptypes.bool.isRequired
  }

export default Post1;