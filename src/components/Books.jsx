import { useState } from 'react';

import {books} from '../constants/mockData';
import BookCard from './BookCard';

function Books() {
 const [liked , setLiked] = useState ([]);
 const handleLikeList = (book , status) => {
 if (status) {
  const newLikedList = liked.filter((i) => i.id !== book.id);
  setLiked(newLikedList);
 } else {
  setLiked ((liked) =>[...liked , book]);
 }
 };

  return (
    <div>
      <div>
       {books.map((book)=>(
        <BookCard key={book.id} data={book} handleLikeList = {handleLikeList}/>
       ))}
      </div>


      {!!liked.length && <div>sss </div>}
    </div>
  );
}

export default Books
