import flask
import meme

@meme.app.route('/search/', methods=['GET', 'POST'])
def search():
    """Take user input query and returns img end point."""
    return flask.render_template("search.html")

@meme.app.route('/generate/', methods=['GET', 'POST'])
def generate():
    """Take user chosen img and generate meme."""
    img = flask.request.args.get('img', default='', type=str)
    return flask.render_template("generate.html")

def test():
    print("..........testing......")