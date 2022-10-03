import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { get } from "../../utils/request";
import { useState, useEffect } from "react";
import Account from "../../components/Layout/components/Account";

const cx = classNames.bind(styles);
function Search() {
  const param = useParams();
    const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      if (param !== "") {
        // const reponse = await fetch(
        //   `https://tiktok.fullstack.edu.vn/api/users/search?q=${debouned}&type=less`
        // );
        // const newJobs = await reponse.json();
        // setJobs(newJobs.data);

        get("users/search", {
          params: {
            q: param.search,
            type: "less",
          },
        }).then((res) => {
          setJobs(res.data);
        });
      }
      if (param === "") {
        setJobs([]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, [param]);
  return (
    <>
    <div>
      <button>Accounts</button>
      <button>Videos</button>
    </div>
    {jobs.map((item) =>{
     return(
      <Account data={item} />
     )
    })}
    </>
  );
}

export default Search;
