import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__top">
        <h1 className="featured__top--title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="featured__bottom">
        <div className="featured__bottom--featuredChart">
          <CircularProgressbar value={70} text={"64%"} strokeWidth={5} />
        </div>
        <p className="featured__bottom--title">Total sales made today</p>
        <p className="featured__bottom--amount">$580</p>
        <p className="featured__bottom--desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="featured__bottom--summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$17.45k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$23.78k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$112.35k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;