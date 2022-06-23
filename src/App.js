/* eslint-disable */

import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

function App() {

  const [text, setText] = useState('글자');
  const [count, setCount] = useState(0);
  const [kossie, setKossie] = useState(0);

  const increment = () => {
    setKossie(kossie + 1);
  };

  const movies = [
    { title: 'movie1', year: 2020},
    { title: 'movie2', year: 2021},
    { title: 'movie3', year: 2022}
  ];
  
  const renderMovies = movies.map((movie) => {
    return(
      <div className='movie' key={movie.title}>
        <div className='movie-title'>{movie.title}</div>
        <div className='movie-year'>{movie.year}</div>
      </div>
    );
  });

  return (
    <div className="App">
      {/* 컴포넌트 */}
      <Hello />
      <Welcome />
      <input type="text" onKeyUp={ () => { if( window.event.keyCode === 13 ){ alert('엔터침'); } } }/>
      <button>버튼</button>

      <br /><br />

      {/* form submit 연습 */}
      <form onSubmit={ () => alert('서브밋') }>
        <button type='submit'>Submit</button>
      </form>

      <br /><br />
      
      {/* 이벤트 연습 */}
      <input type="text" value={text} onChange={ (event) => { setText(event.target.value); } } />
      <span>{text}</span>

      <br /><br />

      <button onClick={ increment }>증가</button>
      <p>{kossie}</p>

      {/* props 연습 */}
      {/* React에서 사용자가 새롭게 정의한 컴포넌트를 발견하면 JSX의 속성을 단일 객체로 저장, 이 때의 객체를 props라고 부른다. */}
      <Counter click="click1" />
      <Counter click="dd" />
      <Counter />

      <br /><br />

      {/* map 연습 */}
      <h1>Movie List</h1>
        {renderMovies}      
    </div>
  );
}

export default App;
