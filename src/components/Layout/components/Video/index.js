import { Button } from "bootstrap";
import classNames from "classnames/bind";
import { useRef,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import useElementOnScreen from "../../../../hooks/video";
import styles from "./Video.module.scss";

const cx = classNames.bind(styles);
function Video({ data }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
  }
  const isVisibile = useElementOnScreen(options, videoRef)
  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      videoRef.current.play();
      setPlaying(!playing);
    }
  };
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {        
        videoRef.current.play();
        setPlaying(true)
      }
    }
    else {
      if (playing) {        
        videoRef.current.pause();
        setPlaying(false)
      }
    }
  }, [isVisibile])

  
  return (
    <div className={cx("avatar")}>
      <video controls ref= {videoRef} className={cx("video")} loop preload="true" onClick={onVideoClick} >
        <source src={data.file_url} type="video/mp4" />
       
      </video>
    </div>
  );
}

export default Video;
