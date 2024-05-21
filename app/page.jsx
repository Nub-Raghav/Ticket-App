import TicketCard from "./(components)/TicketCard";

const getTicket = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Failed to get tickets ");
  }
};

const Dashboard = async () => {
  const { tickets } = await getTicket();

  const uniqueCategories = [
    ...new Set(tickets.map(({ category }) => category)),
  ];
  return (
    <div className="p-3">
      <div>
        {tickets &&
          uniqueCategories.map((uniCat, catInd) => (
            <div key={catInd}>
              <div className="flex justify-center">
                <h2> {uniCat} </h2>
              </div>

              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((eachTick) => eachTick.category === uniCat)
                  .map((filteredTicket, _index) => (
                    <TicketCard id={_index} key={_index} {...filteredTicket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
