class SlotMachine extends React.Component{
    render(){
        let fruits = {
            0 : "https://cdn-icons-png.flaticon.com/128/2909/2909808.png",
            1 : "https://cdn-icons-png.flaticon.com/128/4065/4065171.png",
            2 : "https://cdn-icons-png.flaticon.com/128/2909/2909787.png"
        };
        let fruit1 = getNum();
        let fruit2 = getNum();
        let fruit3 = getNum();
        let match = ((fruit1===fruit2) && (fruit2==fruit3));
        
        const colors = { fontSize: '50px', backgroundColor: 'purple'};

        return (
            <div className='SlotMachine'>
                <img src={fruits[fruit1]}/>
                <img src={fruits[fruit2]}/>
                <img src={fruits[fruit3]}/>
                {/* {match ? <img src="https://media.giphy.com/media/26u4exk4zsAqPcq08/giphy.gif"></img> : null} */}
                <h3 className={match ? 'win' : 'lose'}>{match ? 'Winner!' : null}</h3>
            </div>
        );
    }
}

function getNum(){
	return Math.floor(Math.random() * 3);
}