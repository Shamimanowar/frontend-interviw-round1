function App() {
  return (
    <main>
      <div className='container grid'>
        <div />
        <div>
          <div className='block'>Problem</div>
        </div>
        <div>hello</div>
        <div>
          {['Requirements', 'New Product Idea', 'Research'].map((el) => (
            <div key={el} className='block'>
              {el}
            </div>
          ))}
        </div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </main>
  );
}

export default App;
