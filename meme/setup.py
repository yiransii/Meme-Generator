from setuptools import setup

setup(
    name='meme',
    version='0.1.0',
    packages=['meme'],
    include_package_data=True,
    install_requires=[
        'bs4==0.0.1',
        'Flask==1.1.1',
        'requests==2.23.0',
    ],
)
