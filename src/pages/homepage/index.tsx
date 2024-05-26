import Layout from "../../layouts/Layout";
import style from "./homepage.module.css";

const Homepage: React.FC = () => {
  return (
    <Layout title="Hadi Nurhidayat">
      <div className={style.homepage}>
        <h1>Homepage</h1>
      </div>
      <div className={style.homepage}>
        <h1>Homepage</h1>
      </div>
      <div className={style.homepage}>
        <h1>Homepage</h1>
      </div>
    </Layout>
  );
};

export default Homepage;
