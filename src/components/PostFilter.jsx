import "../styles/App.css";

import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div
      style={{
        margin: "20px auto",
        width: "80%",
        display: "flex",
        gap: "18px",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <MyInput
        placeholder="Find..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        defaultValue="Sort By"
        options={[
          { title: "By Title", value: "title" },
          { title: "By Description", value: "body" },
        ]}
        styles={{ width: "100%" }}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
}
