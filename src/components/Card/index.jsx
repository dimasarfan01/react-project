const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-white shadow-md p-5 lg:p-2"
        >
          <div className="flex flex-row items-center justify-between text-white">
            <p className="bg-gray-700 p-2 rounded-md">userId: {item.userId}</p>
            <p className="bg-gray-700 p-2 rounded-md">Id: {item.id}</p>
          </div>

          <p className="bg-white shadow-md p-2 m-2 rounded-md">{item.title}</p>
          <p className="text-center bg-gray-300 rounded-md shadow-md">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
