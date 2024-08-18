'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Edit({ edit }) {
    const route = useRouter();
    const [Topics, setTopics] = useState({});
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTopics(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Fetch the data
    const handleDataFetch = async () => {
        try {
            const res = await fetch(`/api/add-topic/${edit}`, {
                method: 'GET'
            });
            const result = await res.json();
            console.log(result);
            if (result.success) {
                setTopics(result.data);
            }
        } catch (e) {
            console.log('Failed to fetch data', e);
        }
    };

    useEffect(() => {
        handleDataFetch();
    }, [edit]);

    // Edit request
    const handleEdit = async (e) => {
        e.preventDefault();  // Prevent form submission from reloading the page
        try {
            const res = await fetch(`/api/add-topic/${edit}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Topics)
            });

            const result = await res.json();
            console.log('Edit success', result);

            if (result.success) {
                route.push('/');
            }
        } catch (e) {
            console.log('Failed to update data', e);
            route.push('/addPage');
        }
    };

   
    return (
        <center className="flex items-center justify-center flex-col">
            <div className="mt-10 flex items-center justify-between min-w-[70vw] rounded-lg bg-slate-800 py-[1.75rem] px-[2rem]">
                <span className="text-gray-300 font-bold text-[2rem]">Assignment</span>
                <Link href='/addPage'>
                    <button className="py-[.8rem] px-[1.2rem] bg-gray-200 text-black font-semibold rounded-lg text-[1.3rem]">
                        Add Topic
                    </button>
                </Link>
            </div>

           
            <form className='flex items-center justify-center flex-col mt-[2rem]' onSubmit={handleEdit}>
            <input
                    type="text"
                    name='topic'
                    value={Topics?.topic || ''}
                    onChange={handleChange}
                    placeholder='Add Title'
                    className='min-w-[70vw] py-[1.6rem] px-2 mb-[1.3rem] border-[2px] border-black text-[1.3rem]'
                />
                <input
                type='date'
                width={500}
                name='date'
                value={Topics?.date || ''}
                onChange={handleChange}
                placeholder='Add Title'
                className='min-w-[70vw] py-[1.6rem] px-2 mb-[1.3rem] border-[2px] border-black text-[1.3rem]'
            />
                <textarea
                    rows={5}
                    name='description'
                    value={Topics?.description || ''}
                    onChange={handleChange}
                    placeholder='Topic Description'
                    className='min-w-[70vw] py-[1.6rem] px-2 mb-[1.3rem] border-[2px] border-black text-[1.3rem]'
                />
                <div className='min-w-[70vw] text-start'>
                    <button
                        className="py-[1rem] px-[2rem] bg-green-400 text-white font-semibold rounded-lg text-[1.3rem]"
                        type='submit'
                    >
                        Edit Topic
                    </button>
                </div>
            </form>
        </center>
    );
}

export default Edit;
