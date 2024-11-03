import { FaRegFileAlt } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className="relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900 text-white py-8 px-6 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-lg mt-5 leading-tight">{data.desc}</p>

      <div className="footer absolute bottom-0  w-full  left-0  ">
        <div className="text-white flex items-center justify-between px-4 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <IoCloudDownloadOutline size="3em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-sky-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
