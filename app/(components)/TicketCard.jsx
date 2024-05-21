import PriorityDisp from "./PriorityDisp";
import DeleteBlock from "./DeleteBlock";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({
  _id,
  title,
  description,
  priority,
  progress,
  status,
  createdAt,
}) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(createdAt);

  return (
    <Link href={`/TicketPage/${_id}`}>
      <div className="flex flex-col p-3 m-2 shadow-lg bg-card hover:bg-card-hover rounded-md">
        <div className="flex justify-between items-center">
          <PriorityDisp priority={priority} />
          <DeleteBlock id={_id} />
        </div>
        <h4> {title} </h4>
        <hr className="bg-page border-0 h-[2px] mb-2" />
        <p> {description} </p>

        <div className="flex items-center">
          <div>
            <p className="text-xs font-semibold mt-2"> {createdDateTime} </p>
            <ProgressBar progress={progress} />
          </div>
          <StatusDisplay status={status} />
        </div>
      </div>
    </Link>
  );
};

export default TicketCard;
