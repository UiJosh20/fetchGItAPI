import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
  // const url = "api.github.com/users/"
  const url = "https://jsonplaceholder.typicode.com/users";
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data[id]);
      setData(response.data[id]);
    });
  }, [id]);

  return (
    <div>
      <div className="text-white px-7 py-7">
        <h1>Contact Details</h1>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <a href={data.website} className="text-blue-200">
          Click to go to website
        </a>
        <img />
      </div>
    </div>
  );
};

export default ContactDetails;
