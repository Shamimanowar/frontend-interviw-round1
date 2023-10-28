function App() {
  return (
    <main>
      <div className='container grid'>
        <div />
        <div>
          <div className='block pink'>Problem</div>
        </div>
        <img className='arr-horizontal' src='/arr-right.svg' />
        <div>
          {['Requirements', 'arr', 'New Product Idea', 'arr', 'Research'].map(
            (el) =>
              el === 'arr' ? (
                <img className='arr' src='/arr-up-down.svg' />
              ) : (
                <div key={el} className='block'>
                  {el}
                </div>
              )
          )}
        </div>

        <img className='arr-horizontal' src='/arr-right.svg' />
        <div className='block magenta'>
          <span>Prototyping</span>
        </div>
        <div className='arr-container'>
          <img className='arr-u arr-u1' src='/arr-u1.svg' />
          <span className='chip chip-u1'>Needs Update</span>
          <span className='chip chip-u2'>Rejected</span>
          <img className='arr-u arr-u2' src='/arr-u2.svg' />
          <img className='arr-horizontal' src='/arr-right.svg' />
        </div>
        <div>
          <div className='block indigo'>Test</div>
          <img className='arr' src='/arr-up-down.svg' />
          <div className='block outline'>Evaluate</div>
          <img
            style={{ visibility: 'hidden' }}
            className='arr'
            src='/arr-up-down.svg'
          />
          <div style={{ visibility: 'hidden' }} className='block'></div>
        </div>
        <img className='arr-s' src='/arr-s.svg' />
        <div className='block green'>Ship</div>
      </div>
    </main>
  );
}

export default App;
