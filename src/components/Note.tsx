import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TNote, useDispatchContext } from "../context/appContext";
type Props = { item: TNote };

const Note: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatchContext();

  const onDeleteClick = () => {
    dispatch({ type: "del", id: item.id });
  };

  return (
    <div className="flex flex-col mb-8 bg-white rounded-2xl shadow-xl">
      <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
        <ReactMarkdown children={item.note} remarkPlugins={[remarkGfm]} />
      </div>
      <div className="p-6 flex justify-between  bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
        <button
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
          onClick={onDeleteClick}
        >
          Delete note
        </button>
        <p
          className="text-sm text-gray-500 self-center"
          onClick={() => console.log("clicked")}
        >
          <time dateTime={item.date} className="cursor-pointer">
            {item.date}
          </time>
        </p>
      </div>
    </div>
  );
};

export default Note;
