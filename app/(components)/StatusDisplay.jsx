const StatusDisplay = ({ status }) => {
  return (
    <button className="rounded-full font-semibold text-gray-700 bg-green-200 px-2 py-1 text-xs mt-3 ml-auto">
      {status}
    </button>
  );
};

export default StatusDisplay;
