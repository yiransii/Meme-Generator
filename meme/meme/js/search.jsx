import React from 'react';
import ReactDOM from 'react-dom';


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
    // var tags = new String(arguments[0]);
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search";
    url += "&api_key=" + api_key;
    url += "&tags=" + tags;
    // url += "&tag_mode=all";
    url += "&format=json&nojsoncallback=1";
    return url;
}


class SearchObj extends React.Component {
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
        let api_key = "21464a195f014a8659b27ffc98d3ca7c";
        let tags="black cat";
        let tag_mode="all";
        let url = "https://api.flickr.com/services/rest/?method=flickr.photos.search";
        url += "&api_key=" + api_key;
        url += "&tags=" + tags;
        url += "&format=json&nojsoncallback=1";
    }

    submitQuery(event) {
        event.preventDefault();
        console.log("!!!!!!!!!!!!!submitQuery is called");

        let newinput = document.getElementById("query").value;
        let newquery = newinput.toString();
        console.log(newquery)
        
        // error checking
        if (newquery.length == 0) {
            alert("Empty Query!");
        }

        var url = getFlickrUrl(newquery);

        console.log("url");
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
                console.log("data!!!");
                console.log(data)
                let urlss = []
                let i;
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
        console.log("img that got clicked: url");
        url += targetimg;
        console.log(url);
        window.location.replace(url);
    }

    render() {
        console.log("render!!!!!!!!!!!!!!!!!!!!!!!! once ");
        const {imgs} = this.state;

        return (
            <div>
                <p>
                    <form onSubmit={this.submitQuery}>
                        Please enter your query: 
                        <input id="query" type="text"/>
                        <button type="submit">Search</button>
                    </form>
                </p>
                {imgs.map((img) => (
                    <img key={img} src={img} id={img} width="300" height="300" onClick={this.handleImgClick} />
                ))}
            </div>

        );
    }
}

export default SearchObj;
  