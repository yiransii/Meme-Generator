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

class SearchObj extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query : "",
            imgs : [], // list of img dictionary
        }
        this.submitQuery = this.submitQuery.bind(this);
    }

    componentDidMount() {
        let api_key = "21464a195f014a8659b27ffc98d3ca7c";
        let tags="black cat";
        let tag_mode="all";
        let url = "https://api.flickr.com/services/rest/?method=flickr.photos.search";
        url += "&api_key=" + api_key;
        url += "&tags=" + tags;
        url += "&format=json&nojsoncallback=1";

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
                    query:"cat",
                    imgs: urlss, //data.photos.photo,
                    // urls: urlss,
                });
                console.log("cur state");
                console.log(this.state);
                
            })
            .catch((error)=>console.log(error))
    }

    submitQuery() {

    }

    render() {
        console.log("render");
        const {imgs} = this.state;
        // {imgs.map((img) => (
        //     console.log("https://farm{img.farm}.staticflickr.com/{img.server}/{img.id}_{img.secret}.jpg");
        // ))}

        return (
            <div>
                <form onSubmit={this.submitQuery}>
                    <input id="query" type="text"/>
                </form>
                {imgs.map((img) => (
                    <a href={img}><img src={img} /></a>
                ))}
            </div>

        );
    }
}

export default SearchObj;
  