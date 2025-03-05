import React, { useState } from "react";
import Guest from "@/Layouts/GuestLayout";
import IntroductionDetails from "../../Components/Events/IntroductionDetails";
import EventDetails from "../../Components/Events/EventInformation";
import CategoriesDetails from "../../Components/Events/CategoriesDetails";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Events = () => {
    const [title, setTitle] = useState("");
    const data = [
        { name: "City", value: "Value 1" },
        { name: "Date", value: "Value 2" },
        { name: "Time", value: "Value 3" },
    ];
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (
        <Guest>
            <div className="">
                <div className="flex  w-full">
                    <div className="w-3/4 mx-2">
                        <img className="h-[200px] object-full w-full" src="/assets/hike.jpg" />
                    </div>
                    <div className="w-1/4">
                        <img className="h-[200px] w-full" src="/assets/hike.jpg" />
                    </div>
                </div>
                <h2 className="mt-5">Kilimambogo Circumnavigation</h2>
                <div className="flex">
                    <div className="w-3/4">
                        <table className="w-2/3 divide-x divide-gray-200 mt-10">
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <th className="w-1/4 px-2 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            {item.name}
                                        </th>
                                        <td className=" w-3/4 px-6 py-4 whitespace-no-wrap">
                                            {item.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mr-10 mt-5">
                            <div className="text-lime-500">
                                <span className="w-[10px] "></span>
                                <p className="font-bold"><span className="mr-2"><FontAwesomeIcon icon={faStar} /></span>This events gets top marks</p>
                                <p><span className="font-bold">Elit nulla</span> adipisicing cupidatat eiusmod.</p>
                            </div>
                        </div>
                        <div className="mr-10 mt-10">
                            <div className="">
                                <span className="w-[10px] "></span>
                                <p className="text-lime-500">
                                    Registration closes on 12.03.2024 at 11:59
                                    PM or sooner if places sell out.
                                </p>
                                <p>
                                    <span className="p-2">x</span>Cancel/Refund
                                    options expired on 11.03.2024 11:59 PM.
                                </p>
                                <p>
                                    <span className="p-2">x</span>Cancel/Refund
                                    options expired on 11.03.2024 11:59 PM.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mt-10 mx-12 flex justify-between w-2/3">
                                <div onClick={() => setTitle("Intro")}>
                                    <h2>Introduction</h2>
                                </div>
                                <div onClick={() => setTitle("Cat")}>
                                    <h2>Categories $ Fees</h2>
                                </div>
                                <div onClick={() => setTitle("Info")}>
                                    <h2>Event Information</h2>
                                </div>
                            </div>
                            <div className="mx-10 mt-5 w-3/4 border-b-4 border-gray-400 "></div>
                        </div>
                        <div className="mx-10 w-3/4 p-5">
                            {title === "Intro" ? (
                                <IntroductionDetails />
                            ) : title == "Cat" ? (
                                <EventDetails />
                            ) : (
                                <CategoriesDetails />
                            )}
                        </div>
                        <div>
                            <p className="mb-3">Prices shown include VAT where applicable</p>
                            <p className="mb-1">
                            <span className="text-lime-500 mr-5 ">Included</span>
                                Certificate, Medal, Refreshments, Timing,
                                T-shirt, Snack & fruit juice
                            </p>
                            <p className="mb-5">
                            <span className="text-lime-500 mr-5">Refund Policy</span>
                                Premier Online guarantees your right to cancel
                                and receive a refund (subject to applicable
                                fees) for paid events within specified time
                                limits
                            </p>
                            <p className="text-sm font-light">
                                * Some events have multiple start times and many
                                events request attendees to arrive by a certain
                                time; Please check the Event Information section
                                above for details or contact the organizer for
                                clarification.
                            </p>
                        </div>
                        <div className="mr-10 mt-5">
                            <h3 className="font-bold mb-5">Location</h3>
                            <div style={{ height: "100vh", width: "100%" }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "" }}
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                >
                                    <AnyReactComponent
                                        lat={59.955413}
                                        lng={30.337844}
                                        text="My Marker"
                                    />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 ">
                        <p className="text-center mb-5">
                            125.00 - 175.00 (AED)
                        </p>
                        <button className="rounded w-full rounded bg-lime-600 text-white p-5 mb-5">
                            Register
                        </button>
                        <div className=" w-full mx-auto mt-5 w-3/4 border-b-4 border-blue-800"></div>
                        <div className="mt-5">
                            <h2>Organizer</h2>
                            <div className="w-full h-[200px] p-5 mt-5 rounded bg-gray-200">
                                Super Sports
                            </div>
                        </div>
                        <div className="bg-lime-50 mt-3 p-5 text-xl hover:shadow-lg">
                            Relax and arrive refreshed by booking the best and
                            closest Event Hotel Deals right here.
                        </div>
                        <div className="mt-4">
                          <h2>Event Downloads</h2>
                          <div className="rounded w-full p-5 bg-gray-200">
                            <div>
                              <div className="flex items-center">
                              <p>Race Email - Registration List & Race Briefing.pdf</p>
                              <span><FontAwesomeIcon icon={faDownload} /></span>
                            </div>
                            <div className=" w-full mx-auto mt-5 w-3/4 border-b-2 border-gray-300"></div>
                            </div>
                            <div>
                              <div className="flex items-center">
                              <p>Race Email - Registration List & Race Briefing.pdf</p>
                              <span><FontAwesomeIcon icon={faDownload} /></span>
                            </div>
                            <div className=" w-full mx-auto mt-5 w-3/4 border-b-2 border-gray-300"></div>
                            </div>
                            <div>
                              <div className="flex items-center">
                              <p>Race Email - Registration List & Race Briefing.pdf</p>
                              <span><FontAwesomeIcon icon={faDownload} /></span>
                            </div>
                            <div className=" w-full mx-auto mt-5 w-3/4 border-b-2 border-gray-300"></div>
                            </div>
                            <div>
                              <div className="flex items-center">
                              <p>Race Email - Registration List & Race Briefing.pdf</p>
                              <span><FontAwesomeIcon icon={faDownload} /></span>
                            </div>
                            <div className=" w-full mx-auto mt-5 w-3/4 border-b-2 border-gray-300"></div>
                            </div>
                            
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-200">
                <div className="mx-10 mt-10 p-5">
                    <h2 className="text-4xl mb-5 font-weight-500">
                        Event supported by
                    </h2>
                    <div className="container flex justify-center">
                        <div className="w-[200px] h-[200px] m-5 rounded p-10 shadow">
                            <p>Partner</p>
                        </div>
                        <div className="w-[200px] h-[200px] m-5 rounded p-10 shadow">
                            <p>Partner</p>
                        </div>
                        <div className="w-[200px] h-[200px] m-5 rounded p-10 shadow">
                            <p>Partner</p>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    );
};

export default Events;
