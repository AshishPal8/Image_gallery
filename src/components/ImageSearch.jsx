import { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="w-full h-[10vh] flex justify-center items-center my-8">
      <form className="w-50%" onSubmit={onSubmit}>
        <div className="bg-white h-[6vh] rounded-full overflow-hidden flex justify-between">
          <input
            onChange={(e) => setText(e.target.value)}
            className="w-full h-[100%] px-3 bg-gray-100 text-xl focus:outline-none font-semibold"
            type="text"
            placeholder="Search Image.."
          />
          <button
            className="bg-gray-400 px-3 font-bold text-white"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
