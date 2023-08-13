import {useState} from "react";

const ReadMore = ({children}) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="fw-500 text-grey-600 lh-26 font-xssss w-100">
            {isReadMore ? text.slice(0, 250) : text}
            <span onClick={toggleReadMore}
                  className="read-or-hide"
            >
                {isReadMore ? " ...xem thêm" : " ...thu gọn."}
            </span>
        </p>
    );
};
export default ReadMore