import { useState } from "react";
import "./Search.css";
function Search({ onCreate }) {

  const [nctId, setNctId] = useState('');
  const handleNctIdChange = (e) => {
    setNctId(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(e.target.url.value);
  }

  return (
    <div className="searchbar" onSubmit={handleSubmit}>
      <form>
        <input type="text" placeholder="NCTID 입력" name="url" value={nctId} onChange={handleNctIdChange}></input>
        <button type="submit">모식도 생성</button>
      </form>
    </div>

  )
}

export default Search;