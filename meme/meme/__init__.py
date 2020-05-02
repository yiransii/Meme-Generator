"""meme package initializer."""
import flask

# app is a single object used by all the code modules in this package
app = flask.Flask(__name__)  # pylint: disable=invalid-name

# Tell our app about views and model.  This is dangerously close to a
# circular import, which is naughty, but Flask was designed that way.
# (Reference http://flask.pocoo.org/docs/patterns/packages/)  We're
# going to tell pylint and pycodestyle to ignore this coding style violation.
# import meme.api  # noqa: E402  pylint: disable=wrong-import-position
import meme.api
import meme.views

# from index.api.search import startup  # noqa: E402  pylint: disable=wrong-import-position

# startup()
# main()
# meme.main.test()