import { React, useState } from 'react'
import { Button, Modal } from "react-bootstrap";

function NgoCases({ cases }) {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [selectedCase, setSelectedCase] = useState(null);
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
                            <th scope="col">ID</th>
                            <th scope="col">TYPE</th>
                            <th scope="col">STATUS</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cases?.map((caseItem, index) => (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{caseItem.type_of_case}</td>
                                <td>{caseItem.status_of_case}</td>
                                <td>
                                    <button className='btn btn-primary' type='button' onClick={() => handleShow(true, caseItem)}>Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header style={{backgroundColor:'#EC9D45', color:'#ffffff'}} closeButton>
                    <Modal.Title>Case Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedCase && (
                        <div className="col-7 profile-col table-responsive">
                            <table className="table">
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
                                        <th scope="row">MORTALITY:</th>
                                        <td className='text-start'>{selectedCase.mortality_of_case}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">FAILURE CAUSE:</th>
                                        <td className='text-start'>{selectedCase.cause_of_failure}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ADMIT DATE:</th>
                                        <td className='text-start'>{(selectedCase.date_when_created).substring(0, 10)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )}

                </Modal.Body>
                <Modal.Footer >

                    <Button className="btn btn-donate mx-auto btn-light">Donate <i className="fa-solid fa-paw"></i></Button>
                </Modal.Footer>
            </Modal>
        </div>)
}

export default NgoCases
