'use client';

import { Close, Image, Send } from "@mui/icons-material";
import { Button, Avatar } from "@mui/material";
import React, { useRef, useState } from "react";
import { size } from "zod";


function PostForm() {

    const ref = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, SetPreview] = useState<string | null>(null);


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (preview) URL.revokeObjectURL(preview);
            SetPreview(URL.createObjectURL(file));
        };
    };

    const handlePostAction = async (formData: FormData) => {
        const formDataCopy = formData;
        ref.current?.reset();



        const text = formDataCopy.get("postInput") as string;
        const imageFile = formData.get("image") as File | null;
        if (!text.trim()) throw new Error("Escreva algo antes de publicar!");

        SetPreview(null);

        try {
            console.log("Post publicado com sucesso!", {
                text,
                imageFile
            })
            ref.current?.reset();
            SetPreview(null);
        } catch (error) {
            console.log("Erro ao publicar post: ", error)
        }
    };

    return (
        <div className="mb-2">
            <form ref={ref} action={FormData => {
                handlePostAction(FormData);
            }} className="px-3 bg-bg-surface rounded-lg border border-border-subtle">
                <div className="flex items-center space-x-2 border-b border-b-border-subtle py-4">
                    <Avatar
                        alt="User Avatar"
                        sx={{ width: 55, height: 55 }}
                    />

                    <input
                        type="text"
                        name="postInput"
                        placeholder="Comece a escrever seu post..."
                        className="flex-1 outline-none rounded-full py-3 px-4 border border-border-subtle"
                    />

                    <input
                        ref={fileInputRef}
                        type="file"
                        name="image"
                        accept="image/*"
                        hidden
                        onChange={handleImageChange}
                    />


                </div>

                {preview && (
                    <div className="mt-3">
                        <img src={preview} alt="Preview" className="w-full object-cover" />
                    </div>
                )}

                <div className="flex items-center justify-between mt-2 gap-2 py-3">
                    <div className="">
                        <Button
                            type="button"
                            variant="outlined"
                            className="border border-on-action-primary! text-on-action-primary!"
                            onClick={() => { fileInputRef.current?.click() }}
                        >
                            <Image sx={{ fontSize: 16 }} className="mr-2" />
                            {preview ? "Trocar" : ""} imagem
                        </Button>
                        {preview && (
                            <Button
                                type="button"
                                variant="outlined"
                                className="bg-state-error-bg! border border-state-error! text-state-error!"
                                onClick={() => SetPreview(null)}
                            >
                                <Close sx={{ fontSize: 16 }} className="mr-2" />
                                Remover imagem
                            </Button>
                        )}
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        className="bg-on-action-primary!"
                    >
                        <Send sx={{ fontSize: 16 }} className="mr-2"/>
                        Publicar
                    </Button>
                </div>
            </form>

            <hr className="mt-2 border-border-subtle" />
        </div>
    )
}

export default PostForm