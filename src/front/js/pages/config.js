import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "/src/front/styles/config.css";


export const Config = () => {
    const { store, actions } = useContext(Context)
    const [isEditingName, setIsEditingName] = useState(false);
    const [firstName, setFirstName] = useState(store.user.first_name);
    const [lastName, setLastName] = useState(store.user.last_name);
    const [imgSelected, setImgSelected] = useState(`${store.defaultImgProfile}`)
    const profileIMG = [
        "https://api.dicebear.com/9.x/initials/svg?seed=",
        "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=",
        "https://api.dicebear.com/9.x/avataaars/svg?seed=",
        "https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=",
        "https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=",
        "https://api.dicebear.com/9.x/fun-emoji/svg?seed=",
        "https://api.dicebear.com/9.x/lorelei/svg?seed=",
        "https://api.dicebear.com/9.x/open-peeps/svg?seed=",
        "https://api.dicebear.com/9.x/thumbs/svg?seed=",
        "https://api.dicebear.com/9.x/rings/svg?seed=",
        "https://api.dicebear.com/9.x/pixel-art-neutral/svg?seed=",
        "https://api.dicebear.com/9.x/personas/svg?seed="
    ]

    const handleChangeConfig = async () => {
        await actions.changeConfig()
        await actions.changeUserName(store.user.id, firstName, lastName)
    }

    return (
        <>
            <div className="nav-link " data-bs-toggle="modal" data-bs-target="#configuration">
                <i className="icons-sidebar bi bi-gear-fill" ></i> <span className="icon-name">Configuraciones</span>
            </div>
            <div className="modal fade" id="configuration" tabindex="-1" aria-labelledby="configuration" aria-hidden="true">
                <div className="modal-dialog modal-xl ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="configuration">Configura tu perfil</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex justify-content-center flex-column align-items-center">
                            <img
                                src={imgSelected}
                                className="avatar-config"
                            />
                            {isEditingName ? (
                                <div className="d-flex gap-2 align-items-center">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Apellido"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <i class="bi bi-check2-square btn btn-secondary" onClick={() => { setIsEditingName(false) }}></i>
                                </div>
                            ) : (
                                <div className="d-flex btn btn-secondary gap-3" onClick={() => setIsEditingName(true)}>
                                    <p className="name-config">{firstName} {lastName}</p>
                                    <i className="bi bi-pencil-square"></i>
                                </div>
                            )}
                            <div className="d-flex justify-content-center flex-column align-items-center">
                                <h1>Imagen de Perfil</h1>
                                <div className="d-flex flex-wrap align-items-center justify-content-center">
                                    {profileIMG.map((apiLink, ind) => {
                                        return (
                                            <img
                                                src={`${apiLink}${store.user.first_name}`}
                                                className="avatar-pre p-2"
                                                key={ind}
                                                onClick={(e) => setImgSelected(e.target.src)}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleChangeConfig}>Guardar Cambios</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}