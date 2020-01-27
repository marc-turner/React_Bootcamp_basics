class App extends React.Component {
    render() {
        return (
            <div>
                <Friend name='Elton' hobbies={['dancing', 'singing', 'boys']} />
                <Friend
                    name='Peter'
                    hobbies={['flouting', 'blowing', 'boys']}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
