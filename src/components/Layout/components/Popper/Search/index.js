import React, { useState, useEffect } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import axios from "axios";
import {get} from "../../../../../utils/request";
import { Wrapper as PoperWrapper } from "../index";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../../../../Buttons";
import { useDebounce } from "../../../../../hooks/use";

const cx = classNames.bind(styles);
function Search(setisChoose, setisChoose1, setisChoose2) {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const debouned = useDebounce(search, 500);
  const clear = (event) => {
    setSearch("");
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const onHandle = (event) => {
    setSearch(event.target.value);
  };
  const onHandle1 = (event) => {
    setisChoose(true);
    setisChoose1(true);
    setisChoose2(true);
    setShowResult(false);
  };
  const fetchJobs = async () => {
    try {
      setLoading(true);
      if (debouned !== "") {
        // const reponse = await fetch(
        //   `https://tiktok.fullstack.edu.vn/api/users/search?q=${debouned}&type=less`
        // );
        // const newJobs = await reponse.json();
        // setJobs(newJobs.data);

      
          get('users/search', {
            params: {
              q: debouned,
              type: "less",
            },
          })
          .then((res) => {
            setJobs(res.data);
            setShowResult(true);
          });
      }
      if (search === "") {
        setJobs([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, [debouned]);

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={jobs.length > 0 && showResult === true}
        render={(attrs) => (
          <div className={cx("box")} tabIndex="-1" {...attrs}>
            {jobs.map((item, index) => {
              return (
                <Button
                  className={cx("long")}
                  key={index}
                  to={`/${item.nickname}`}
                  onClick={onHandle1}
                >
                  {item.full_name}
                  <img className={cx("avatar")} src={item.avatar} alt=""></img>
                </Button>
              );
            })}
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <input
          onFocus={() => setShowResult(true)}
          onChange={onHandle}
          className={cx("input-search")}
          placeholder="search acount and video"
          spellCheck="false"
          value={search}
        ></input>
      </HeadlessTippy>
      {search !== "" && (
        <button className={cx("btn-clear")} onClick={clear}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      )}
      {loading === true && (
        <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
      )}
      <button className={cx("btn-search")}>
        <Link to= {`/search${search}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </button>
    </div>
  );
}

export default Search;
