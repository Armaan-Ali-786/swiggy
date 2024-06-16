import React, { useState } from 'react'
import garrow from '../images/grey-arrow.png'
import arrow from '../images/orange-arrow.png'
import juneja from '../images/Sumer-Juneja.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import rockey from '../images/rohit.png'

export default function Team() {
    let [team, setTeam] = useState(0)
    let arr = ['Board Members', 'Management Teams']

    let teamData = [
        [
            {
                name: 'Noam',
                title: 'Developer',
                image: juneja
            },
            {
                name: 'Noam',
                title: 'Developer',
                image: juneja
            },
            {
                name: 'Noam',
                title: 'Developer',
                image: juneja
            },
            {
                name: 'Noam',
                title: 'Developer',
                image: juneja
            },
            {
                name: 'Noam',
                title: 'Developer',
                image: juneja
            },
            {
                name: 'Noam',
                title: 'Developer',
                image: juneja
            },
            {
                name: 'Noam',
                title: 'Developer',
                image: juneja
            }
        ],
        [
            {
                name: 'Rohit Kapoor',
                title: 'Chief Technology Master',
                image: rockey
            },
            {
                name: 'Rohit Kapoor',
                title: 'Chief Technology Master',
                image: rockey
            },
            {
                name: 'Rohit Kapoor',
                title: 'Chief Technology Master',
                image: rockey
            },
            {
                name: 'Rohit Kapoor',
                title: 'Chief Technology Master',
                image: rockey
            },
            {
                name: 'Rohit Kapoor',
                title: 'Chief Technology Master',
                image: rockey
            },
            {
                name: 'Rohit Kapoor',
                title: 'Chief Technology Master',
                image: rockey
            },
            {
                name: 'Rohit Kapoor',
                title: 'Chief Technology Master',
                image: rockey
            }
        ]
    ]

    let teamdata = teamData[team].map((v, i) => {
        return (
            <TeamCard key={i} items={v} />
        )
    })
    console.log(teamData[team])

    return (
        <div className='max-w-[1320px] mx-auto'>
            <div>
                <ul className='flex gap-[20px] font-medium text-[18px]'>
                    {
                        arr.map((v, i) => {
                            return (
                                <li className={`${(team == i) ? 'bg-[#FE5005] text-white' : 'border-black border text-[#8D8F91]'} px-[20px] text-center py-[12px] rounded-[30px]`} onClick={() => setTeam(i)}>{v}</li>
                            )
                        })
                    }

                </ul>
            </div>
            <div className='mt-[40px] team-slider'>
                <OwlCarousel className='owl-theme' items={5} loop margin={10} nav>
                    {teamdata}
                </OwlCarousel>
            </div>
        </div>
    )
}


function TeamCard({ items }) {
    console.log(items.image)
    return (
        <div className='item'>
            <img src={items.image} alt="" />
            <div className='mt-[10px]'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-semibold text-[20px]'>{items.name}</h3>
                    <img src={garrow} className='!w-[40px] img1' />
                    <img src={arrow} className='!w-[40px] !hidden img2' />
                </div>
                <p className='text-[#BFC0C1]'>{items.title}</p>
            </div>
        </div>
    )
}
