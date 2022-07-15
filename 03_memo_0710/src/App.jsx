import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserInfoCard from "./UserInfoCard";

export default function App() {
  const getData = () => {
    const data = localStorage.getItem("test");
    console.log(data);
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  
  //登録するデータを保持
  const [data, setData] = React.useState(getData());
  //タイトル入力欄のテキストを保持
  const [name, setName] = React.useState("");
  const [favoriteBook, setFavoriteBook] = React.useState("");
  const [favoriteZoo, setFavoriteZoo] = React.useState("");
  const [favoriteComedian, setFavoriteComedian] = React.useState("");

  const handleAddSubmit = (e) => {
    e.preventDefault();

    let pushData = {
      name,
      favoriteBook,
      favoriteZoo,
      favoriteComedian
    };

    setData([...data, pushData]);
    setName("");
    setFavoriteBook("");
    setFavoriteZoo("");
    setFavoriteComedian("");
  }

  const deleteAll = () => {
    localStorage.clear();
    setData([]);
  }

  React.useEffect(() => {
    localStorage.setItem("test", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <Card sx={{ maxWidth: 500 }}  className='question'>
        <CardHeader
          title="あなたの三つを教えてくださいな。"
        />
        <CardContent>
          <form onSubmit={handleAddSubmit}>
            {/* title */}
            <div>
              <TextField
                id="standard-basic"
                label="名前"
                variant="standard"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                value={name} />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="好きな本"
                variant="standard"
                type="text"
                onChange={(e) => setFavoriteBook(e.target.value)}
                value={favoriteBook} />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="好きな動物園"
                variant="standard"
                type="text"
                onChange={(e) => setFavoriteZoo(e.target.value)}
                value={favoriteZoo} />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="好きな芸人"
                variant="standard"
                type="text"
                onChange={(e) => setFavoriteComedian(e.target.value)}
                value={favoriteComedian} />
            </div>
            {/* send button */}
            <Button type='submit'>登録</Button>
          </form>
        </CardContent>
      </Card>
      <div className='user-list'>
        {data.map((item, index) => (
          <UserInfoCard setData={setData} item={item} index={index} />
        ))}
      </div>
      <Button type='submit' onClick={deleteAll}>全削除</Button>
    </div>
  );
}
