import React from "react";

import { activitiesILike } from "../../../data/Activities/ActivitiesILike";
import Activity from "./Activity/Activity";
import "./Activities.css";

const Activities = () => {
    let renderedActivities = activitiesILike.map(activity => (
        <Activity activityDesc={activity.activityDesc} />
    ));
    return (
        <div className="footer__whatILike">
            <h4>Yapmaktan Hoşlandığım Aktiviteler</h4>
            <ul className="activities">{renderedActivities}</ul>
        </div>
    );
};

export default Activities;
