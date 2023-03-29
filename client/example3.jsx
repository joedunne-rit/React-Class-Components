const React = require('react');
const ReactDOM = require('react-dom');

class SongContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: props.songs,
        };

        this.loadSongsFromServer();
    }

    loadSongsFromServer = async () => {
        const response = await fetch('/getSongs');
        const songs = await response.json();

        this.setState({songs: songs});
    };

    render() {
        if(this.state.songs.length === 0) {
            return (
                <div>
                    <h3>No Songs Yet</h3>
                </div>
            );
        }

        //loops through each song in this.state.songs,
        //returns array of div elements containing formatted info
        const songList = this.state.songs.map(song => {
            return (
              <div key={song.title}>
                <h2>{song.artist} - <i>{song.title}</i></h2>
              </div>  
            );
        });

        return (
            <div>
                <h1>My Favorites Songs!</h1>
                {songList}
            </div>
        )
    }
};

const init = () => {
    ReactDOM.render(
        <SongContainer songs={[]} />,
        document.getElementById('app'),
    );
};

window.onload = init;