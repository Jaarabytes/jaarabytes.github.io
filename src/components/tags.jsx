import proptypes from 'prop-types';
import {Link} from 'react-router-dom';
//Tags folder is under the public directory, same as posts. Do the necessary buddy.
const Tags = ({darkMode}) => {
    const tags = [
        {
            "tag" : ["git"],
            "path" : 'git/git'
        },
        {
            "tag" : ["linux"],
            "path" : 'linux/linux'
        },
        {
            "tag" : ["GRUB"],
            "path" : 'grub/grub'
        }
    ];
    // DO THIS, create a tags tab like when you created a posts folder, but for tags but when clicked should redirect to the post

    return(
        <div className="mt-5 px-5 sm:px-[20%]">
            <h1 className="text-3xl font-bold py-5">Tags</h1>
            {/* ADD TAGS HERE */}
            {tags.map(elem => 
                <Link to={`/tags/${elem.path}`}
                 className={`my-3 text-lg font-bold hover:text-red-700 ${darkMode ? 'text-neon' : ''} block`}>
                  {elem.tag}
                </Link>
            )}
        </div>
    )
}
Tags.proptypes = {
    darkMode : proptypes.bool.isRequired
}

export default Tags;