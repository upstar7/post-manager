import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDataContext } from "../contexts/DataContext";

const CreatePost = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const { data, setData } = useDataContext();

    const onSubmit = (params) => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        const createdAt = yyyy + "-" + mm + "-" + dd;

        const newData = {
            id: data.length + 1,
            author: "Michael",
            createdAt,
            ...params,
        };
        setData([...data, newData]);
        history.push("/");
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="card-text">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    ref={register({ required: true })}
                                />
                                <small className="form-text text-danger">
                                    {errors.title && "Invalid Title"}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Content</label>
                                <textarea
                                    name="body"
                                    cols="30"
                                    rows="5"
                                    className="form-control"
                                    ref={register({ required: true })}
                                ></textarea>
                                <small className="form-text text-danger">
                                    {errors.body && "Invalid Content"}
                                </small>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Create Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
