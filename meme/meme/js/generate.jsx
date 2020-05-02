import React from 'react';
import ReactDOM from 'react-dom';


class GenerateObj extends React.Component {

    constructor(props) {
        super(props)
        const queryString = window.location.search;
        console.log("querystring")
        console.log(queryString)
        const urlParams = new URLSearchParams(queryString);
        const imgUrl = urlParams.get('img')
        console.log(imgUrl);
        this.state = {
            origin_img: imgUrl,
        }
        this.submitQuery = this.submitQuery.bind(this);

    }


    submitQuery(event) {
        event.preventDefault();
        console.log("!!!!!submitted query");
        let top_text = document.getElementById('top').value;
        // console.log(text);
        let bottom_text = document.getElementById('bottom').value;

        let origin_img = document.getElementById('img');
        let canvas = document.getElementById('meme-canvas');
        canvas.width = origin_img.width;
        canvas.height = origin_img.height;
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let img = new Image;
        img.src = this.state.origin_img;
        img.onload = function () {
            ctx.drawImage(img, 0, 0);

            let fontsize=canvas.height/8;
            ctx.font = fontsize + 'px Impact';
            ctx.fillStyle="white";
            ctx.strokeStyle="black";
            ctx.lineWith= fontsize/15;
            
            ctx.textAlign='center';

            ctx.textBaseline='top';
            ctx.fillText(top_text, canvas.width/2, fontsize/2, canvas.width);
            ctx.strokeText(top_text, canvas.width/2, fontsize/2, canvas.width);
            ctx.textBaseline='bottom';
            ctx.fillText(bottom_text, canvas.width/2, canvas.height - fontsize/2, canvas.width);
            ctx.strokeText(bottom_text, canvas.width/2, canvas.height - fontsize/2, canvas.width);
        }
        event.target.reset(); // TODO: reset not working 

    }



    render() {
        return (
            <div>
                <img src={this.state.origin_img} id="img"/>
                <form onSubmit={this.submitQuery}>
                    Enter Top:  
                    <input id="top" type="text"/>
                    Enter Bottom:
                    <input id="bottom" type="text"/>
                    <button type="submit">Generate Meme</button>
                </form>
            </div>
            
           
        );
    }
}

export default GenerateObj;



