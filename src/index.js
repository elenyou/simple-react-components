import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Comment 
                    author="Sam"
                    time="Today at 4:55PM"
                    text="Nice blog!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
           
            <ApprovalCard>
                <Comment 
                    author="Alex"
                    time="Today at 6:45AM"
                    text="Thank you!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <Comment 
                    author="Jane"
                    time="Yersterday at 12:45AM"
                    text="The best!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));