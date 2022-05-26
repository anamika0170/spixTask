import React from 'react'
import Score from '../YourScore'
import BasicCard from './Card'
import style from "./fullExplaination.module.css"

const FullEx = () => {
    const Data=[
       {
           name:"Sleep Duration",
           month:"Month",
           sleeping:"66%",
           street:"34%",
           heartRate:"2.400",
           sleepingN:"sleeping",
           streetN:"Awake",
           heartRateN:"sleep total"
       },
       {
        name:"Calaries Produced",
        month:"Month",
        sleeping:"94%",
        street:"6%",
        heartRate:"31.270",
        sleepingN:"sleeping",
           streetN:"Fitness",
           heartRateN:"Calories total"
    },
    {
        name:"Heart Rate",
        month:"Month",
        sleeping:"72%",
        street:"28%",
        heartRate:"470",
        sleepingN:"sleeping",
           streetN:"street",
           heartRateN:"Heart Rate"
    },
    {
        name:"Weight",
        month:"month",
        sleeping:"84%",
        street:"16%",
        heartRate:"102",
        sleepingN:"sleeping",
           streetN:"sport",
           heartRateN:"Weight"
    }
    ]
  return (
    <div>
        <h3 className={style.heading}>Full explaination</h3>
        <div>
            <div>
                <BasicCard/>
            </div>
        </div>
    </div>
  )
}

export default FullEx