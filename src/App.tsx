// import React, { useState } from 'react'
// import styled from '@emotion/styled/macro'
import CurlyArrow from './components/Icons/CurlyArrow';
import StraightArrow from './components/Icons/StraightArrow';
import RoundedArrow from './components/Icons/RoundedArrow';
import TwoWayArrow from './components/Icons/TwoWayArrow';
import RoundedDownward from './components/Icons/RoundedDownward';
import Header from './components/Header';
import Button from './components/Button/Button';
import RactangleBox from './components/RactangleBox/RactangleBox';
function App() {
  return (
    <div className='app'>
      <Header />
      <section className='diagram_container'>
        {/* column- 1 */}
        <div className='column_one_wrapper' style={{ display: 'flex' }}>
          <Button styles={{ background: '#EA3D32' }}>Problem</Button>
          <span>
            <StraightArrow />
          </span>
        </div>
        {/* column 2 */}
        <div className='column_two_wrapper'>
          <div className='col_two_innner_wrapper'>
            <Button styles={{ color: '#000' }}>Requirnment</Button>
            <span className='col-two_arrow'>
              <TwoWayArrow />
            </span>
            <Button styles={{ color: '#000' }}>New Project Idea</Button>
            <span className='col-two_arrow'>
              <TwoWayArrow />
            </span>
            <Button styles={{ color: '#000' }}>Research</Button>
          </div>
          {/* column 1 right arrow */}
          <span>
            <StraightArrow />
          </span>
        </div>
        {/*column 3 */}
        <div className='column_three_wrapper'>
          {/* rounded Arrow top*/}
          <div className='rounded-arrow-top'>
            <RoundedArrow />
            {/* top white rounded button*/}
            <div className='col_three_rounded-btn-top'>
              <Button cssClassName='small-rounded'>Needs Update</Button>
            </div>
          </div>
          {/* purple rectangle with blue and black button */}
          <div className='rect_box'>
            <RactangleBox>Prototype</RactangleBox>
            <span className='rect_box_right_arrow'>
              <StraightArrow />
            </span>
            {/* blue and black btn  */}
            <div className='blue-black_btn_wrapper'>
              <Button styles={{ background: '#5452F6' }}>Test</Button>
              <span className='blue-black_btn_wrapper-arrow'>
                <TwoWayArrow />
              </span>
              <Button styles={{ background: '#000' }}>Evaluate</Button>
            </div>
          </div>

          {/* rounded Arrow bottom*/}
          <div className='rounded-arrow-bottom'>
            <RoundedDownward />
            {/* rounded sm white button */}
            <div className='col_three_rounded-btn-bottom'>
              <Button cssClassName='small-rounded'>Rejected</Button>
            </div>
          </div>
        </div>
        {/*column 4 */}
        <div className='column_four_wrapper'>
          <span>
            <CurlyArrow />
          </span>
          <div className='green_button'>
            <Button styles={{ background: '#56BD66', color: '#000' }}>
              Ship
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
