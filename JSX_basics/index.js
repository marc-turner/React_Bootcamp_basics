// function getMood() {
// 	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid' ];
// 	return moods[Math.floor(Math.random() * moods.length)];
// }
// class JSXDemo extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>My Current Mood is: {getMood()}</h1>
// 			</div>
// 		);
// 	}
// }
// ReactDOM.render(<JSXDemo />, document.getElementById('root'));

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>HOLA</h1>
                <img
                    src='https://images.unsplash.com/photo-1579282167525-1f370de7933b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    alt=''
                />
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
