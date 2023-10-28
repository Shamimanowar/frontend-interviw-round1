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
        <img className='arr-horizontal' src='/arr-right.svg' />
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
