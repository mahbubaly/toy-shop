import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Bikes from '../Bikes';
import Buses from '../Buses';
import TrackTab from '../TrackTab';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SectionOne = () => {
    const [bikeInfo, setBikeInfo] = useState([]);
    useEffect(() => {
        fetch('https://toy-server-site.vercel.app/bike')
            .then(res => res.json())
            .then(data => setBikeInfo(data))
            .catch(err => console.log(err.message))
    }, [])

    // buses: 
    const [busInfo, setBus] = useState([]);
    useEffect(() => {
        fetch('https://toy-server-site.vercel.app/buses')
            .then(res => res.json())
            .then(data => setBus(data))
            .catch(err => console.log(err.message))
    }, [])


    // Tracks: 
    const [trackInfo, setTrack] = useState([]);
    useEffect(() => {
        fetch('https://toy-server-site.vercel.app/tracks')
            .then(res => res.json())
            .then(data => setTrack(data))
            .catch(err => console.log(err.message))
    }, [])
    return (
        <>



            <div className='my-28'>
                <div className='my-16 '  >
                    <div className='text-center my-5 font-semibold text-2xl' >
                        <h1 className='text-5xl font-semibold text-orange-500'>Shop by categories</h1>

                    </div>

                    <div className='text-black text-center font-semibold'>

                        <p className='my-3'>"Discover the joy of endless adventures with our collection of car toys, igniting your imagination and <br /> fueling your desire to experience the real thrill of owning a magnificent car!"</p>



                    </div>
                </div>

                <div className='flex justify-center gap-5'>
                    <Tabs>
                        <TabList>
                            <Tab> <h1 className='text-xl font-bold hover:text-[#1C3F3A] '>Bike toys </h1></Tab>
                            <Tab><h1 className='text-xl font-bold hover:text-[#1C3F3A] '> Track Toys</h1> </Tab>
                            <Tab><h1 className='text-xl font-bold hover:text-[#1C3F3A] '>Buses </h1></Tab>
                        </TabList>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {
                                    bikeInfo.map(bikes => <Bikes
                                        key={bikes._id}
                                        bikes={bikes}

                                    />)
                                }
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {
                                    trackInfo.map(track => <TrackTab
                                        key={track._id}
                                        track={track}

                                    />
                                    )
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {
                                    busInfo.map(bus => <Buses
                                        key={bus._id}
                                        bus={bus}


                                    />)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>


        </>
    );
};

export default SectionOne;