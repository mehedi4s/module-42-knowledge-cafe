import PropTypes from 'prop-types'
import Bookmark from './Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    // const {title} = bookmarks;
    // console.log(bookmarks)
    return (
        
        <div className='md:w-1/3 ml-6'>
            <div className='bg-[#1111110D] mb-6 py-5 px-12 border border-[#6047EC] rounded-lg'>
                <h3 className='text-2xl font-bold text-[#6047EC]'>Spent time on read : {readingTime} min</h3>
            </div>
            <div className="bg-[#1111110D] p-7 rounded-lg">
                <h2 className='mb-4 text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length} </h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}


export default Bookmarks;