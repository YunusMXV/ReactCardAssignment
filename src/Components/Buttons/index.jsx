import { Button } from 'react-bootstrap';
export const TestButton = () => {
    return (
        <div className = 'TestButton'>
            <Button> Test Button </Button>
            <Button variant="primary">Primary</Button>{' '}
        <Button variant= "Secondary">Secondary</Button>
        </div>
    );
}