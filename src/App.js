import React from 'react';
import './App.css';


String.format = function() {
  var s = arguments[0];
  for (var i = 0; i < arguments.length - 1; i += 1) {
      var reg = new RegExp('\\{' + i + '\\}', 'gm');
      s = s.replace(reg, arguments[i + 1]);
  }
  return s;
};

function getFlickrUrl(tags) {
  let api_key = "21464a195f014a8659b27ffc98d3ca7c";
  var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search";
  url += "&api_key=" + api_key;
  url += "&tags=" + tags;
  url += "&format=json&nojsoncallback=1";
  return url;
}

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          query : "",
          imgs : [], // list of img dictionary
      }
      this.submitQuery = this.submitQuery.bind(this);
      this.handleImgClick = this.handleImgClick.bind(this);
  }

  componentDidMount() {
      // We don't need to do anything here, since the query start with an empty string
  }

  submitQuery(event) {
      event.preventDefault();

      let newinput = document.getElementById("query").value;
      let newquery = newinput.toString();

      // error checking
      if (newquery.length == 0) {
          alert("Empty Query!");
      }

      var url = getFlickrUrl(newquery);

      console.log(url);

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  console.log("response error!!!!");
                  throw Error(response.statusText);
              }
              console.log("response ok");
              return response.json();
          })
          .then((data)=>{
              if (data.photos.photo.length == 0) {
                  alert("No image found! Please try again");
              }
              console.log("data!!!");
              console.log(data)
              let urlss = []
              let i;
              // generate image url for fetch request to Flickr API
              for (i = 0; i < data.photos.photo.length; ++i) {
                  let farmid = data.photos.photo[i].farm;
                  let server = data.photos.photo[i].server;
                  let id = data.photos.photo[i].id;
                  let secret = data.photos.photo[i].secret;
                  var img = String.format("https://farm{0}.staticflickr.com/{1}/{2}_{3}.jpg", farmid, server, id, secret);
                  urlss = urlss.concat(img);
              }
              console.log(urlss)
              this.setState({
                  query:  newquery,
                  imgs: urlss, 
              });
              console.log("cur state");
              console.log(this.state);
              
          })
          .catch((error)=>console.log(error))
      event.target.reset();
  }

  handleImgClick(event) {
      event.preventDefault();

      let targetimg = event.target.id.toString();
      let url = "/generate/?img=";
      url += targetimg;
      console.log("going to generate url: ")
      console.log(url)
      window.location.replace(url);
  }

  render() {
      const {imgs} = this.state;
      return (
          <div>
            <pre>
              <form onSubmit={this.submitQuery}>
                  <pre>Please enter your query: </pre>
                  <pre><input id="query" type="text"/></pre>
                  <pre><button type="submit">Search</button></pre>
              </form>
            </pre>
            {imgs.map((img) => (
                <img key={img} src={img} id={img} width="300" height="300" onClick={this.handleImgClick} />
            ))}
          </div>

      );
  }
}



export default App;
