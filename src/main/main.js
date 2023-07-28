import React from "react";
import data from "../data.json"
import './main.css';


export const Main = () => {


    return (
        <>
            <div className="container">
                <div>
                    <h1 className="pageTitle" >{data.mainTitle}</h1>
                </div>
                <div>
                    <div className="col-md-6">
                        <div className="text-left my-5">
                            <div className="row align-items-start quicklinks">
                                {data.quickLinks.map((item, i) => (<div key={i} className="col" tag={item.tag}>{item.title}</div>))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="my-5">
                            <h3 tag={data.about.tag}>{data.about.seactionTitle}</h3>
                            <p>{data.about.text}</p>
                        </div>
                        <div className="my-5">
                            <h3 >{data.mission.sectionTitle}</h3>

                            <p tag={data.mission.tag} dangerouslySetInnerHTML={{
                                __html: data.mission.textMission
                            }} />
                            <p tag={data.mission.tag} dangerouslySetInnerHTML={{
                                __html: data.mission.textVision
                            }} />

                        </div>
                        <div>
                            <h2 >{data.values.sectionTitle}</h2>
                            <div className="col-md-8">
                                <div id="values-cards" className="row row-cols-2 row-cols-sm-3 g-2">

                                    {data.values.items.map((item, i) => (<>
                                        <div key={i} className="col">
                                            <div className="card h-100">
                                                <img src={require(`../${item.image}`)} className="card-img-top" alt={item.alt} />
                                                <div className="card-body">
                                                    <h5 className="card-title" id="title">{item.title}</h5>

                                                </div></div>
                                        </div></>))}



                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="my-5">{data.discoverMore.sectionTitle}</h2>
                            <div className="row row-cols-1 row-cols-sm-2 g-2" >
                                {data.discoverMore.items.map((item, i) => (<>
                                    <div key={i} className="col">
                                        <div className="card text-bg-dark border-light">
                                            <img src={require(`../${item.image}`)} className="card-img" alt={item.alt} />
                                            <div className="card-img-overlay">
                                                <h5 className="card-title fs-3 fw-bold p-4">{item.title}</h5>
                                                <div className="position-absolute bottom-0 end-0 p-4">
                                                    <p className="card-text"><button className="btn btn-warning text-white fw-bold">{item.urlText}</button></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>))}
                            </div>
                        </div>

                        <div className="pb-5">
                            <h2 className="my-5" >{data.usersAboutUs.sectionTitle}</h2>
                            <div className="container">
                                <div className="row bg-warning-subtle rounded pb-5">
                                    <p id="user">{data.usersAboutUs.user}</p>
                                    <p id="userText">{data.usersAboutUs.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-none d-lg-block">
                        <div className="container">
                            <div >
                                <h3 >{data.aboutMenu.title}</h3>
                                <ul className="list-group" >
                                    {data.aboutMenu.items.map((item, i) => (<>
                                        <li key={i} className=" list-group-item " ><a href={item.url} className="text-decoration-none">{item.title}</a></li>
                                    </>))}
                                </ul>
                            </div>

                            <div >
                                <h3 >{data.usefulLinks.title}</h3>
                                <ul className="list-group" >
                                    {data.usefulLinks.items.map((item, i) => (<>
                                        <li key={i} className=" list-group-item " ><a href={item.url} className="text-decoration-none">{item.title}</a></li>
                                    </>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}