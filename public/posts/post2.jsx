function Post2(){
    return(
        <>
        <div className="p-5">
        {/* center the content, create table of contents and resize images, possibly a medium style */}
        <h1 className="text-3xl">Git rid of it!</h1>
        <p>Git authentication failed? fatal: No credential store has been selected. This was deprecated in August 2021.</p>
        {/* Insert the image here */}
        <img src="./Screenshot_2024-02-26_13_54_28.jpg" alt="git error that prompts for authentication"></img>
        <p>I have encountered this multiple times and I finally figured it out</p>
        {/* Insert the nerd gif here */}
        <img src='./icegif-777.gif' alt="Nerd emoji gif"></img>
        <p>
        It seems that github enhanced their security such that inputting your password and
        username is not enough for them, since an attacker can easily get them through social 
        engineering. So, the better alternative I heard of involves "gh" ~ which is some form of
        authentication which confirms your identity before performing changes on the repository.
        </p>
        <br></br>
        <p>
        Enough of foreplay, let's get serious.
        </p>
        <p>When cloning the preferred repository, you will have to use the SSH url</p>
        {/* Insert github SSH Url here */}
        <img src='./Screenshot_2024-02-26_14_57_25.jpg' alt="ssh url clone github repository"></img>
        <p>Before that, you have to create a ssh key, which is a private and public key which 
            authenticate you. These keys are tedious and time-consuming to crack.
        </p>
        <br></br>
        <p>They can be generated through the following commands: </p>
        <br></br>
        <code>
        ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
        </code>
        <br></br>
        <p>I will explain the commands:</p>
        <p>
            1. This generates the SSH key using the RSA algorithm and using 4096 bytes hence
        the (-t rsa) and (-b 4096). The -C stands comment or identifier for your email. Replace and input
        your email there.
        </p>
        <p>
        This will be the response from the terminal: 
        </p>
        <code>
        Generating public/private ALGORITHM key pair.
        </code>
        <br></br>
        <p>
            You will be prompted to input and confirm a safe passphrase. You may
            also press Enter to skip this process. 
        </p>
        <p>
            Add your ssh key to the ssh agent by running the below command
            (Depending on the system you are running, you may need superuser privileges)
        </p>
        <code>
            ssh-add ~/.ssh/id_rsa
        </code>
        <br></br>
        <p>Onto the finals where we add the ssh key to our github account:</p>
        </div>
        </>
    )
}

export default Post2;