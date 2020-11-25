import { Jumbotron } from 'reactstrap';
export default function Motd() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-4 text-center">Welcome to Code.Hub Dashboard!</h1>
                <hr className="my-2" />
                <p className="text-center">Manage everything and have fun!</p>
            </Jumbotron>
        </div>
    );
}