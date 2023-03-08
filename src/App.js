import axios from 'axios';

const App = () => {


  const options = {
    method: 'GET',
    url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
    params: {level: '3', area: 'sat'},
    headers: {
      'X-RapidAPI-Key': 'd33bcfb4b7mshfa35f5acb22b2b3p14b3f0jsn4333c2331e4b',
      'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
