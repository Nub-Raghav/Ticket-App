import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisp = ({ priority }) => {
  return (
    <div className="flex gap-[1px]">
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 0 ? "text-red-400" : "text-slate-900"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 1 ? "text-red-400" : "text-slate-900"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 2 ? "text-red-400" : "text-slate-900"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 3 ? "text-red-400" : "text-slate-900"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 4 ? "text-red-400" : "text-slate-900"}`}
      />
    </div>
  );
};

export default PriorityDisp;
