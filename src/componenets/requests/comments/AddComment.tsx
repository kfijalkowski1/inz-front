
"use client";

import {Button, Label, Modal, Textarea} from "flowbite-react";
import { useState } from "react";
import MyCallButton from "../../utils/MyCallButton.tsx";
import {addNewComment} from "../fetches.ts";
import toastHelper from "../../utils/toastHelper.tsx";

export function AddComment(props: {request_id: string}) {
    const [openModal, setOpenModal] = useState(false);
    const [content, setContent] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setContent('');
    }

    async function addComment(event: React.FormEvent) {
        event.preventDefault();
        try {
            await addNewComment(props.request_id, content);
        } catch (error) {
            toastHelper.error("Wystąpił błąd :(. Spróbuj jeszcze raz");
            return;
        }
        toastHelper.success("Komentarz dodany pomyślnie!");
        window.location.reload();
    }

    return (
        <div className="px-6 py-2">
            <MyCallButton onClick={() => setOpenModal(true)} text={"Dodaj komentarz"} />
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={addComment}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Dodaj komentarz</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="comment" value="Treść" />
                                </div>
                                <Textarea id="comment" placeholder="Zostaw komentarz..."
                                          value={content}
                                          onChange={(event) => setContent(event.target.value)}
                                          required rows={4} />
                            </div>
                            <div className="w-full">
                                <Button type="submit">Dodaj komentarz</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
