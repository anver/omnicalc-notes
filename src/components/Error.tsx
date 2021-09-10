import { XCircleIcon } from "@heroicons/react/solid";
type Props = { message: string };

export default function Error({ message = "" }: Props) {
  return (
    <div className="rounded-md bg-red-50 p-4 mb-5">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            There were errors with your submission
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <ul className="list-disc pl-5 space-y-1">
              <li>{message}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
