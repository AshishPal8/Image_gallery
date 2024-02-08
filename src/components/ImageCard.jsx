import React from "react";
import { FaEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="w-[31.33%] pb-[15px] overflow-hidden rounded shadow-lg">
      <img className="w-full" src={image.webformatURL} alt="" />
      <div className="px-6 py-3">
        <div className="font-bold text-xl text-gray-600 mb-2">
          Photo by {image.user}
        </div>
        <ul className="flex justify-between">
          <li className="flex items-center justify-center gap-1">
            <strong>
              <FaEye />
            </strong>
            {image.views}
          </li>
          <li className="flex items-center justify-center gap-1">
            <strong>
              <AiFillLike />
            </strong>
            {image.likes}
          </li>
          <li className="flex items-center justify-center gap-1">
            <strong>
              <IoMdDownload />
            </strong>
            {image.downloads}
          </li>
        </ul>
      </div>
      <div className="px-5 py-4 flex gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block rounded-full px-2 py-1 font-bold text-sm bg-gray-200 text-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
