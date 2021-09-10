import { PlusIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useStateContext } from "../context/appContext";
import Note from "./Note";
import PopupAddNote from "./PopupAddNote";
import Preview from "./Preview";
import Textarea from "./TextArea";
type Props = {
  note: string;
  onUpdate: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  addNote: () => void;
};

const Heading: React.FC<Props> = ({ note, onUpdate, addNote }) => {
  const { notes } = useStateContext();
  const [toggleAddPopup, setToggleAddPopup] = useState(false);

  return (
    <>
      <PopupAddNote
        show={toggleAddPopup}
        onClose={() => setToggleAddPopup(false)}
        onAddClick={addNote}
      >
        <Textarea value={note} onUpdate={onUpdate} />
      </PopupAddNote>
      <div className="bg-white p-6 border-b-2">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                Latest Notes
              </p>
              <p className="text-sm font-medium text-gray-600">
                Click add button to add a note
              </p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <span className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                onClick={() => setToggleAddPopup(true)}
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Add Note
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="mx-6 mb-4">
        {note && <Preview>{note}</Preview>}
        {notes
          .sort((a, b) => b.id - a.id)
          .map(item => (
            <Note item={item} key={item.id} />
          ))}
      </div>
    </>
  );
};

export default Heading;
