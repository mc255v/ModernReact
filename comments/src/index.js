import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Sam" 
                    timeAgo="Today at 4:45pm"
                    comment="Nice blog post!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Alex" 
                    timeAgo="Today at 2:00am"
                    comment="Well done!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Jane" 
                    timeAgo="Yesterday at 1:45pm"
                    comment="Good stuff!" 
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));