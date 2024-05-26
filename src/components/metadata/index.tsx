import { Helmet } from "react-helmet";
import favicon from "../../assets/favicon/favicon.ico";
interface MetaDataProps {
  title?: string;
  description?: string;
  keyword?: string;
  author?: string;
}

const MetaDataDefault: MetaDataProps = {
  title: "Hadi Nurhidayat",
  description: "Personal website of Hadi Nurhidayat",
  keyword: "Hadi Nurhidayat, Personal website, Portfolio",
  author: "Hadi Nurhidayat",
};

const MetaData: React.FC<MetaDataProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title ?? MetaDataDefault.title}</title>
      <meta name="description" content={MetaDataDefault.description} />
      <meta name="keywords" content={MetaDataDefault.keyword} />
      <meta name="author" content={MetaDataDefault.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default MetaData;
