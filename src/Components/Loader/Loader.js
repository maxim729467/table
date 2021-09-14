import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { loader } from "./Loader.module.css";

export default function Loading({ isLoading }) {
  return (
    isLoading && (
      <div className={loader}>
        <Loader type="Puff" color="rgb(12, 41, 95)" height={100} width={100} />
      </div>
    )
  );
}
