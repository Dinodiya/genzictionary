import './App.css';
import { React, useState } from 'react';

const { createClient } = require('@supabase/supabase-js')
const supabase = createClient('https://cofawriainghyunutcdr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZmF3cmlhaW5naHl1bnV0Y2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE2MzA2NDUsImV4cCI6MTk3NzIwNjY0NX0.u1oMAUyW1TWXVGGMNXa1KzkC7ALAQD0ZgAnS9LbKRsk')

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const { data } = await supabase.from('Dictionary').select('*');
    setData(data);
    setLoading(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          GenZictionary
        </p>
        <button onClick={loadData}>Press me to load data</button>
        <br/>
        {
          loading ? (<div>loading...</div>) :
          (<div>
            {
              data.map(item => {
                return (
                  <>
                    <b className="lavender-header">{item.word}</b>
                    <div>{item.definition}</div>
                    <br/>
                  </>
                )
              })
            }
          </div>
          )
        }
      </header>
    </div>
  );
}

export default App;
