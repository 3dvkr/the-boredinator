import {
    CLEAR_SELECTED_ACTIVITY,
    SET_RANDOM_ACTIVITY_ALL,
    SET_RANDOM_COUPLES,
    SET_RANDOM_CRAFTS,
    SET_RANDOM_FAMILY,
    SET_RANDOM_WELLNESS,
    SET_RANDOM_FOOD,
    SET_RANDOM_INSIDE,
    SET_RANDOM_OUTSIDE,
    SET_RANDOM_PROJECTS,
    SET_RANDOM_SOLO
} from '../actionTypes'
import activitiesData from '../data/activities.json'

// use the following function on each category to set a single, random entry
const shuffleActivitiesToGetOne = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, 1);
}

const Reducer = (state = {
    activity: [],
    allActivities: activitiesData
}, action) => {
    switch (action.type) {

        case CLEAR_SELECTED_ACTIVITY:
            return { ...state, activity: [] }

        case SET_RANDOM_ACTIVITY_ALL:
            const activity = shuffleActivitiesToGetOne(activitiesData)
            return { ...state, activity: activity }

        case SET_RANDOM_COUPLES:
            const couplesActivities = activitiesData.filter(a => {
                return a.categories.includes("couples")
            })
            const couplesActivity = shuffleActivitiesToGetOne(couplesActivities)
            return { ...state, activity: couplesActivity }

        case SET_RANDOM_CRAFTS:
            const craftsActivities = activitiesData.filter(a => {
                return a.categories.includes("crafts")
            })
            const craftsActivity = shuffleActivitiesToGetOne(craftsActivities)
            return { ...state, activity: craftsActivity }

        case SET_RANDOM_FAMILY:
            const familyActivities = activitiesData.filter(a => {
                return a.categories.includes("family")
            })
            const familyActivity = shuffleActivitiesToGetOne(familyActivities)
            return { ...state, activity: familyActivity }

        case SET_RANDOM_WELLNESS:
            const wellnessActivities = activitiesData.filter(a => {
                return a.categories.includes("wellness")
            })
            const wellnessActivity = shuffleActivitiesToGetOne(wellnessActivities)
            return { ...state, activity: wellnessActivity }

        case SET_RANDOM_FOOD:
            const foodActivities = activitiesData.filter(a => {
                return a.categories.includes("food")
            })
            const foodActivity = shuffleActivitiesToGetOne(foodActivities)
            return { ...state, activity: foodActivity }

        case SET_RANDOM_INSIDE:
            const insideActivities = activitiesData.filter(a => {
                return a.categories.includes("inside")
            })
            const insideActivity = shuffleActivitiesToGetOne(insideActivities)
            return { ...state, activity: insideActivity }

        case SET_RANDOM_OUTSIDE:
            const outsideActivities = activitiesData.filter(a => {
                return a.categories.includes("outside")
            })
            const outsideActivity = shuffleActivitiesToGetOne(outsideActivities)
            return { ...state, activity: outsideActivity }

        case SET_RANDOM_PROJECTS:
            const projectsActivities = activitiesData.filter(a => {
                return a.categories.includes("projects")
            })
            const projectsActivity = shuffleActivitiesToGetOne(projectsActivities)
            return { ...state, activity: projectsActivity }

        case SET_RANDOM_SOLO:
            const soloActivities = activitiesData.filter(a => {
                return a.categories.includes("solo")
            })
            const soloActivity = shuffleActivitiesToGetOne(soloActivities)
            return { ...state, activity: soloActivity }

        default:
            return state
    }
}

export default Reducer