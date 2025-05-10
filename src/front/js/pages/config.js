import React from "react";

export const Config = () => {
    return (
        <>
            <div className="nav-link " data-bs-toggle="modal" data-bs-target="#configuration">
                <i className="icons-sidebar bi bi-gear-fill" ></i> <span className="icon-name">Configuraciones</span>
            </div>
            <div className="modal fade" id="configuration" tabindex="-1" aria-labelledby="configuration" aria-hidden="true">
                <div className="modal-dialog modal-xl ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="configuration">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <div classNameName="modal-dialog modal-xl">

        // </div>

    )
}