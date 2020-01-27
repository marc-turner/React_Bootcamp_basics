class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to='Ringo'
                    from='Paul'
                    bangs={4}
                    img='https://images.unsplash.com/photo-1485199433301-8b7102e86995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
