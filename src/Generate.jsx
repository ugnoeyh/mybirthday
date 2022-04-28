import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Generate = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [link, setLink] = useState('');
  const generateLink = () => {
    setLink(
      `https://192.167.123.198/birthday/${name}/${day}/${month}`
    );
  };
  return (
    <div className='page'>
      <h1>일자 생성</h1>
      <div className='form'>
        <input
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          placeholder='Enter Day'
          value={day}
          onChange={(e) => setDay(e.target.value)}
          max={31}
          min={1}
        />
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value=''>월 선택</option>
          <option selected value='1'>
            1 월
          </option>
          <option value='2'>2 월</option>
          <option value='3'>3 월</option>
          <option value='4'>4 월</option>
          <option value='5'>5 월</option>
          <option value='6'>6 월</option>
          <option value='7'>7 월</option>
          <option value='8'>8 월</option>
          <option value='9'>9 월</option>
          <option value='10'>10 월</option>
          <option value='11'>11 월</option>
          <option value='12'>12 월</option>
        </select>
      </div>
      <button className='btn' onClick={() => generateLink()}>
        Generate Link
      </button>

      {link !== '' ? (
        <>
          <p className='gen-link'>{link}</p>
          <Link to={`birthday/${name}/${day}/${month}`}>
            <button className='btn'>Visit Link</button>
          </Link>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Generate;
