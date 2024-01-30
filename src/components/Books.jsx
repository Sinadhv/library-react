import { useState } from 'react';

import {books} from '../constants/mockData';
import BookCard from './BookCard';
import SideCard from './SideCard';

import styles from './Books.module.css';

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
    <div className={styles.container}>
      <div className={styles.cards}>
       {books.map((book)=>(
        <BookCard key={book.id} data={book} handleLikeList = {handleLikeList}/>
       ))}
      </div>


      {!!liked.length && 
      <div className={styles.favorite}>
       <h4>Favorites</h4>
       {liked.map(book => <SideCard key={book.id} data={book}/>)} </div>}
    </div>
  );
}

export default Books
