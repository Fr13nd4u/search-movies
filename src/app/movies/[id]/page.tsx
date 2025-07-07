import React from 'react';


interface MovieDetailsPageProps {
    params: Promise<{ id: string }>;
}

const MoviesPage = async ({ params }: MovieDetailsPageProps) => {
    const { id } = await params;
    // empty page for Movies Details (no design yet)
    return <div>Movie ID: {id}</div>;
};


export default MoviesPage;
