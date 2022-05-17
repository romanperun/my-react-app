import React from 'react';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Home;

// function Home() {
//   const [title, setTitle] = useState('Home');
//   const [colored, setColored] = useState(false);

//   const styles = useMemo(
//     () => ({
//       color: colored ? 'red' : 'black',
//     }),
//     [colored]
//   );

//   return (
//     <div>
//       <Card style={styles} name={title} />
//       <Button onClick={() => setTitle(title + '!')}>Click</Button>
//       <Button onClick={() => setColored((prev) => !prev)}>Change color</Button>
//     </div>
//   );
// }
