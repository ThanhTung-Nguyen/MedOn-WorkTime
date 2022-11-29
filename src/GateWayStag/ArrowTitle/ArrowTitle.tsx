import { ArrowLeftOutlined } from "@ant-design/icons";
import '../Worktime/Worktime.css';

const ArrowTitle = () => {
  return (
    <div className="ant-page-header-heading">
      <div className="ant-page-header-heading-left">
        <div className="ant-page-header-back">
          <div className="ant-page-header-back-button">
            <a href="#">
              <ArrowLeftOutlined />
            </a>
          </div>
        </div>
        <div>
          <span className="ant-page-header-heading-title">
            Danh mục khung giờ
          </span>
        </div>
      </div>
    </div>
  );
};
export default ArrowTitle;
