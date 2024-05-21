import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>

        <Link href="/TicketPage/new/">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="text-lg font-mono ">
          <p className="text-default-text"> raghavlathi0003@gmail.com </p>
          <p className="text-default-text text-sm"> 7014219283 </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
