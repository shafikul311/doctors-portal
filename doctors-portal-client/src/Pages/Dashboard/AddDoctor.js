import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { isLoading, error, data: service } = useQuery(['service'], () => fetch('http://localhost:5000/service').then(res => res.json()));

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    // console.log(service)

    const imageStorageKey= 'c2e17a0e64c5937bdade57163ab4bdc0';




    const onSubmit = async (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .then(result => {
            if(result.success) {
                const img = result.data.url;
                // console.log(img)

                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }

                // doctor data send database
                fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                }).then(res =>res.json())
                .then(inserted => {
                    if(inserted){
                        toast.success('Doctor added successfully');
                        reset();
                        console.log('inserted')
                       
                    }
                    else{
                        toast.error('Failed to add the doctor');
                    }
                })
            }
        })

        console.log('name updated', data)
    };
    return (
        <div>
            <h1 className="text-xl font-semibold">Add Doctor Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is Required",
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: "Provide a valid Email",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.email.message}
                            </span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-500">
                                {errors.email.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>

                    <select {...register("specialty")} className="input-bordered select w-full max-w-xs">
                        {
                            service.map(s => <option
                                key={s._id}>{s.name}</option>)

                        }                       
                    </select>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Your image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "image is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>

                <input
                    className="btn w-full max-w-xs text-white"
                    type="submit"
                    value="Add Doctor"
                />
            </form>
        </div>
    );
};

export default AddDoctor;