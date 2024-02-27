import Proptypes from 'prop-types';

const Tags = () => {
    const tags = [
        {
            tags : ["reminder"],
            postId : [1]
        },
        {
            tags : ["git"],
            postId : [2] 
        }
    ];
    // DO THIS, create a tags tab like when you created a posts folder, but for  tags but when clicked should redirect to the post

    return(
        <div className="mt-5 px-5 sm:px-[20%]">
            <h1 className="text-3xl font-bold py-5">Tags</h1>
            {/* ADD TAGS HERE */}
            {tags.map(elem => 
                <li className="my-3 text-lg">{elem.tags}</li>
            )}
        </div>
    )
}
export default Tags;