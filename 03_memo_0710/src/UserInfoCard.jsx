import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function UserInfoCard(props) {
  const { setData, item, index } = props;
  const deleteOnly = (title, index) => {
    const data = localStorage.getItem("test");
    if (data) {
      const parsedData = JSON.parse(data);
      if (title === "") {
        delete parsedData[index];
      } else {
        delete parsedData[index][title];
      }
      if (Object.keys(parsedData[index]).length == 1) {
        const newData = [
          ...parsedData.slice(0, index),
          ...parsedData.slice(index + 1)
        ];
        console.log(newData);
        setData(newData);
      } else {
        setData(parsedData);
      }
    }
  }
  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      {/* <div className='user-info'> */}
      <CardHeader
        title={item.name}
      />
      <CardActions disableSpacing>
        <Button variant="text" onClick={() => deleteOnly("", index)} type='button' size="small">削除</Button>
      </CardActions>
      <CardContent>
        <div key={index} className='fav-book'>
          <p>好きな本</p>
          {item.favoriteBook}
          <CardActions disableSpacing>
            {item.favoriteBook &&
              <Button variant="text" onClick={() => deleteOnly("favoriteBook", index)} type='button' size="small">削除</Button>}
          </CardActions>
        </div>
        <div key={index} className='fav-zoo'>
          <p>好きな動物園</p>
          {item.favoriteZoo}
          <CardActions disableSpacing>
            {item.favoriteZoo &&
              <Button variant="text" onClick={() => deleteOnly("favoriteZoo", index)} type='button' size="small">削除</Button>}
          </CardActions>
        </div>
        <div key={index} className='fav-comedian'>
          <p>好きな芸人</p>
          {item.favoriteComedian}
          <CardActions disableSpacing>
            {item.favoriteComedian &&
              <Button variant="text" onClick={() => deleteOnly("favoriteComedian", index)} type='button' size="small">削除</Button>}
          </CardActions>
        </div>
      </CardContent>
      {/* </div> */}
    </Card>
  )
}