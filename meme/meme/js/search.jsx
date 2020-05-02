import React from 'react';
import ReactDOM from 'react-dom';


class SearchObj extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query : "",
            imgs : [{"name": "img1"}, {"name": "img2"}], // list of img dictionary
        }
        this.submitQuery = this.submitQuery.bind(this);
    }

    componentDidMount() {
        let api_key = "21464a195f014a8659b27ffc98d3ca7c";
        let tags="cat";
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
                this.setState({
                    query:"cat",
                });
            })
            .catch((error)=>console.log(error))
    }

    submitQuery() {

    }

    render() {
        console.log("render")
        return (
            <form onSubmit={this.submitQuery}>
                <input id="query" type="text"/>
            </form>
        );
    }
}






// SearchObj.propTypes = {
//     url: PropTypes.string.isRequired,
// };
export default SearchObj;
  


// let ele;
// let query;
// let button;

// function init() {
//     ele = document.getElementById('reactEntry')
//     query = document.getElementById('query')
//     button = document.getElementById("submit")

//     button.addEventListener('click', function() {
//         document.getElementById('reactEntry').innerHTML= "HAHAHAHAHA";
//     });
// }


// window.onload = init;