import PropTypes from 'prop-types'
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    // console.log(blog);
    const {title, cover, author, author_img, posted_date, reading_time, hashtags, id} = blog;
    
    return (
        <div>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read <button 
                    onClick={() => handleAddToBookmark(blog)}
                    > <CiBookmark /> </button> </span>
                </div>
            </div>
            <h2 className='text-4xl font-bold my-4'> {title} </h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}><a href="">#{hash}</a>  </span>)
                }
            </p>
            <button 
            onClick={() => handleMarkAsRead(id ,reading_time)}
            className='my-5 text-purple-800 font-bold underline'
            >Mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;