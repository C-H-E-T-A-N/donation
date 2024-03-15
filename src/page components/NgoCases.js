import { React, useState } from 'react'
import { Button, Image, Modal } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function NgoCases({ cases }) {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [selectedCase, setSelectedCase] = useState(null);

    const [src, setSrc] = useState('');
    const [view, setView] = useState(false);
    const [warnOnImage, setWarnOnImage] = useState(false)
    let warning = true
    function showPicture(value, warning) {
        if(warning){
           setWarnOnImage(true)
        }
        else
        {
            setWarnOnImage(false)
        }
        setSrc(value);
        console.log(value)
        setView(true);       

    }
    const handleShow = (breakpoint, caseItem) => {
        setFullscreen(breakpoint);
        setSelectedCase(caseItem);
        setShow(true);
    }

    return (
        <div>
            <div className='table-responsive'>
                <table className="table table-striped table-light table-bordered caption-top">
                    <caption><h1 style={{ color: '#ffffff', marginLeft: '0' }}>Cases</h1></caption>
                    <thead>
                        <tr>
                            <th scope="col">TYPE</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">KNOW MORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cases?.map((caseItem, index) => (
                            <tr key={index}>
                                <th style={{ width: "20%" }} scope="row">{caseItem.type_of_case}</th>
                                <td>what to add here?</td>
                                <td style={{ width: "15%" }}>
                                    <button className='btn btn-primary' type='button' onClick={() => handleShow(true, caseItem)}><FaBars /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header style={{ backgroundColor: '#EC9D45', color: '#ffffff' }} closeButton>
                    <Modal.Title>Case Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedCase && console.log(selectedCase.animaldetail.animalPictures)}
                    {selectedCase && (
                        <Container>
                            <Row>
                                <Col sm={6}>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">CASE ID:</th>
                                                <th scope="col" className='text-start'>{selectedCase.case_id}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">TYPE:</th>
                                                <td className='text-start'>{selectedCase.type_of_case}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">ADMIT DATE:</th>
                                                <td className='text-start'>{(selectedCase.date_when_created).substring(0, 10)}</td>
                                            </tr>
                                            {selectedCase.status_of_case === 'Admitted' ? (<tr>
                                                <th scope="row">STATUS:</th>
                                                <td className='text-start'>The animal has been admitted for treatment.</td>
                                            </tr>) : selectedCase.status_of_case === 'Reported' ? (
                                                <tr>
                                                    <th scope="row">STATUS:</th>
                                                    <td className='text-start'>The condition of the animal has been reported.</td>
                                                </tr>
                                            ) : selectedCase.status_of_case === 'Blood Test' ? (<tr>
                                                <th scope="row">STATUS:</th>
                                                <td className='text-start'>A blood test has been conducted for the animal.</td>
                                            </tr>) : selectedCase.status_of_case === 'Operation' ? (
                                                <tr>
                                                    <th scope="row">STATUS:</th>
                                                    <td className='text-start'>The animal underwent an operation.</td>
                                                </tr>
                                            )
                                                : selectedCase.status_of_case === 'Post Operation' ? (
                                                    <tr>
                                                        <th scope="row">STATUS:</th>
                                                        <td className='text-start'>The animal is in post-operation recovery.</td>
                                                    </tr>
                                                )
                                                    : selectedCase.status_of_case === 'Released' ? (
                                                        <tr>
                                                            <th scope="row">STATUS:</th>
                                                            <td className='text-start'>The animal has been released after treatment.</td>
                                                        </tr>
                                                    ) : (<></>)}
                                            <tr>
                                                <th scope="row">MORTALITY:</th>
                                                <td className='text-start'>As per the diagnosis, the mortality of this case is <span style={{ fontWeight: "bold" }}>{selectedCase.mortality_of_case}</span>.</td>
                                            </tr>
                                            {/* <tr>
                                                <th scope="row">FAILURE CAUSE:</th>
                                                <td className='text-start'>Based on the available information, the cause of failure is {selectedCase.cause_of_failure}</td>
                                            </tr> */}
                                            <tr>
                                                <th scope="row">REPORTED BY:</th>
                                                <td className='text-start'><span style={{ fontWeight: "bold" }}>{selectedCase.reportingdetail.reporterName}</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">ADMISSION DATE:</th>
                                                <td className='text-start'><span style={{ fontWeight: "bold" }}>{selectedCase.medicaldetail.admissionDate}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                                <Col style={{ display: 'flex', flexDirection: 'column' }} sm={6}>
                                    <Row>
                                        <Col sm={6} style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", padding: "0.5rem" }}>
                                            <h5>Animal Pictures</h5>
                                            <div className='d-flex text-center'>
                                                {selectedCase.animaldetail.animalPictures && selectedCase.animaldetail.animalPictures.map((pic, index) => (
                                                    <Image rounded key={index} style={{ width: "50%", cursor: "pointer", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", margin: "1px" }} onClick={() => showPicture(pic.animalPictures)} src={`http://127.0.0.1:8000${pic.animalPictures}`} fluid />
                                                ))}
                                            </div>
                                        </Col>
                                        <Col sm={6} style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", padding: "0.5rem" }}>
                                            <h5>Organ Pictures</h5>
                                            <div className='d-flex text-center'>
                                                {selectedCase.operationdetail.organImage && selectedCase.operationdetail.organImage.map((pic, index) => (
                                                    <Image rounded key={index} style={{ width: "50%", cursor: "pointer", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", margin: "1px", filter:"blur(8px)" }} onClick={() => showPicture(pic.organImage, warning)} src={`http://127.0.0.1:8000${pic.organImage}`} fluid />
                                                ))}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", padding: "0.5rem" }}>
                                            <h5>Pop Pictures</h5>
                                            <div className='d-flex text-center'>
                                                {selectedCase.postoperationdetail.popPictures && selectedCase.postoperationdetail.popPictures.map((pic, index) => (
                                                    <Image rounded key={index} style={{ width: "50%", cursor: "pointer", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", margin: "1px" }} onClick={() => showPicture(pic.popPictures)} src={`http://127.0.0.1:8000${pic.popPictures}`} fluid />
                                                ))}
                                            </div>
                                        </Col>
                                        <Col sm={6} style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", padding: "0.5rem" }}>
                                            <h5>Release Pictures</h5>
                                            <div className='d-flex text-center'>
                                                {selectedCase.postoperationdetail.releasePictures && selectedCase.postoperationdetail.releasePictures.map((pic, index) => (
                                                    <Image rounded key={index} style={{ width: "50%", cursor: "pointer", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", margin: "1px" }} onClick={() => showPicture(pic.releasePictures)} src={`http://127.0.0.1:8000${pic.releasePictures}`} fluid />
                                                ))}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Modal show={view} size="lg" onHide={() => setView(false)}>
                                        <Modal.Header closeButton>
                                        </Modal.Header>
                                        <Modal.Body className='text-center'>
                                        <Image style={warnOnImage ? {height: "50vh", filter:"blur(8px)"} : { height: "50vh" }} src={`http://127.0.0.1:8000${src}`} fluid />
                                        {warnOnImage ? (<div className='d-flex justify-content-center my-3 flex-column'><span style={{color:'red', fontWeight:"bold"}}>This picture contains explicit content!</span><button className='btn w-auto btn-warning m-auto'  onClick={()=>{setWarnOnImage(false)}}>Click here to see this picture</button></div>):(<></>)}
                                        </Modal.Body>
                                    </Modal>
                                </Col >
                            </Row>
                        </Container>
                    )}
                </Modal.Body>
                <Modal.Footer >
                    <Button className="btn btn-donate mx-auto btn-light">Donate <i className="fa-solid fa-paw"></i></Button>
                </Modal.Footer>
            </Modal>
        </div>)
}

export default NgoCases
