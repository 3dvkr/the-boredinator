import React from 'react'
import { connect } from 'react-redux'
import RandomActivityButton from '../generatorButtons/RandomActivity'
import CouplesButton from '../generatorButtons/Couples'
import CraftsButton from '../generatorButtons/Crafts'
import FamilyButton from '../generatorButtons/Family'
import WellnessButton from '../generatorButtons/Wellness'
import FoodButton from '../generatorButtons/Food'
import InsideButton from '../generatorButtons/Inside'
import OutsideButton from '../generatorButtons/Outside'
import ProjectsButton from '../generatorButtons/Projects'
import SoloButton from '../generatorButtons/Solo'

function DisplayButtonGrid(props) {

    if (props.randomActivity.length > 0) {
        return null
    } else {
        return (
            <>
                <p className="category-instructions">Select a category</p>
                <div className="grid-wrapper">
                    <div className="category-grid">
                        <CouplesButton />
                        <CraftsButton />
                        <FamilyButton />
                        <WellnessButton />
                        <FoodButton />
                        <InsideButton />
                        <OutsideButton />
                        <ProjectsButton />
                        <SoloButton />
                    </div>
                </div>
                <p className="category-instructions">Or</p>
                <RandomActivityButton />
            </>
        )
    }
}

const mapStateToProps = state => ({
    randomActivity: state.activities.randomActivity
})

export default connect(mapStateToProps)(DisplayButtonGrid)