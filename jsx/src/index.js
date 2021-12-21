// import React and React DOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create React Component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 6:00 pm"
          text="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Drishti"
          timeAgo="Today at 5:00 pm"
          text="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Akash"
          timeAgo="Yesterday at 10:00 pm"
          text="Lovely blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
