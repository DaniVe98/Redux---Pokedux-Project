import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearch } from "../slices/dataSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const handleOnSearch = (value) => {
    dispatch(setSearch(value.toLowerCase()));
  };

  return (
    <Input.Search 
      placeholder="Buscar..." 
      style={{ marginBottom: 10 }}
      onChange={(e) => handleOnSearch(e.target.value)}
    />
  );
};

export default Searcher;
