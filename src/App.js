
import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GiftGrid} from './components/GiftGrid';


function App() {

  //const categories = ['one punch', 'dragonball','hunterx'];

  const [categories, setCategories] = useState(['one punch'])
  // const handleAdd = () =>{
  //     setCategories((cats) =>[...cats,'samurai x']);
  // }


  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories = {setCategories}/>
      <hr />
      <ol>
        {
          categories.map((category) => (
            <GiftGrid 
              key={category}
              category={category}/>
          ))

        }
      </ol>


    </>
  );
}

export default App;
