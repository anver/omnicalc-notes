import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, useHistory } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { useDispatchContext, useStateContext } from "../context/appContext";
import { TNote } from "../context/appContext";
import NotFound from "./404";

type Params = { id: string };

const SingleNote = () => {
  const { id } = useParams<Params>();
  const [item, setItem] = useState<TNote | undefined>(undefined);
  const dispatch = useDispatchContext();
  const { notes } = useStateContext();
  const history = useHistory();

  const onDeleteClick = () => {
    dispatch({ type: "del", id: parseInt(id) });
    history.push("/");
  };

  useEffect(() => {
    if (parseInt(id).toString() !== id) return;
    const note = notes.find(note => note.id === parseInt(id));
    setItem(note);
  }, [notes, id]);

  if (!item) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col mb-8 bg-white rounded-2xl shadow-xl">
      <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
        <ReactMarkdown children={item.note} remarkPlugins={[remarkGfm]} />
      </div>
      <div className="p-6 flex justify-between  bg-gray-50 md:px-8">
        <button
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
          onClick={onDeleteClick}
        >
          Delete note
        </button>
        <p className="text-sm text-gray-500 self-center">
          <time dateTime={item.date} className="cursor-pointer">
            {item.date}
          </time>
        </p>
      </div>
    </div>
  );
};

export default SingleNote;
