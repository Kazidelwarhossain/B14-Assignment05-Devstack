import React, { use, useState } from 'react';
import AllIssues from './AllIssues';

const MainLayout = ( {dataPromise}) => {
    const allIssues=use(dataPromise);
    // console.log(allIssues);
    const [completedStacks, setCompletedStacks,] = useState([])
    return (
        <div>
            <AllIssues 
            setCompletedStacks={setCompletedStacks}
            completedStacks={completedStacks} 
            allIssues={allIssues}/>
        </div>
    );
};

export default MainLayout;