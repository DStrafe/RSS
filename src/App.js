import React, {useEffect, useState} from 'react';
import RssList from "./components/RssList/RssList";
import axios from "axios";
import './styles/App.css'
import MyBtn from "./components/UI/button/MyBtn";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([]);
  const [rssUrl, setRssUrl] = useState('');
  const [modal, setModal] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
    setPosts(response.data.items)
    console.log(response.data)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="rss__container">
          <strong>RSS Feed</strong>
          <MyInput
            type="text"
            onChange={e => setRssUrl(e.target.value)}
            value={rssUrl}
            placeholder='Type your RSS link'
          />
          <MyBtn onClick={() => {
            fetchData()
            setModal(false)
          }}>
            Parse
          </MyBtn>
        </div>
        <RssList posts={posts}/>

      </div>
    </div>
  )
    ;
}

export default App;