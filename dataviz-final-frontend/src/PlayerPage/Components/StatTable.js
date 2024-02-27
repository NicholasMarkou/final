import './StatTable.css'


export default function StatTable(props) {

    return (
        <div id='detail-panel'>
            <table>
                <thead>
                        <tr><th colSpan="2">{props.tableTitle}</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>MIN</td>
                        <td>{props.playerData['MIN']}</td>
                    </tr>
                    <tr>
                        <td>PTS</td>
                        <td>{props.playerData['PTS']}</td>
                    </tr>
                    <tr>
                        <td>REB</td>
                        <td>{props.playerData['REB']}</td>
                    </tr>
                    <tr>
                        <td>AST</td>
                        <td>{props.playerData['AST']}</td>
                    </tr>
                    <tr>
                        <td>BLK</td>
                        <td>{props.playerData['BLK']}</td>
                    </tr>
                    <tr>
                        <td>FG PCT</td>
                        <td>{(props.playerData['FG_PCT']*100).toFixed(1)+"%"}</td>
                    </tr>
                    <tr>
                        <td>FG3 PCT</td>
                        <td>{(props.playerData['FG3_PCT']*100).toFixed(1)+"%"}</td>
                    </tr>
                    <tr>
                        <td>FT PCT</td>
                        <td>{(props.playerData['FT_PCT']*100).toFixed(1)+"%"}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}